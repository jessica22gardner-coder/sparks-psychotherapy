<?php
// Contact form handler for Sparks Psychotherapy Service.
//
// Receives the website contact form (JSON POST) and sends it to the
// practice inbox through Hushmail over an encrypted SMTP connection.
//
// The Hushmail login is NOT in this file. It lives in mail-config.php,
// a file that sits above the website folder on the server (outside
// public_html, where no visitor can ever open it) and looks like this:
//
//   <?php
//   return [
//     'smtp_user' => 'the-address-you-log-into-hushmail-with',
//     'smtp_pass' => 'your-hushmail-password',
//     'to'        => 'info@sparkspsychotherapy.ca',
//   ];
//
// That file is created by hand on the server. It is never in the repo,
// never in the site's code, and never in any message.
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

function fail(int $code, string $message): never
{
    http_response_code($code);
    echo json_encode(['ok' => false, 'error' => $message]);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    fail(405, 'This address only accepts form messages.');
}

$raw = file_get_contents('php://input');
$data = json_decode($raw === false ? '' : $raw, true);
if (!is_array($data)) {
    fail(400, 'The message could not be read. Please try again.');
}

// Honeypot: real visitors leave this field empty.
if (!empty($data['company'])) {
    echo json_encode(['ok' => true]);
    exit;
}

$name = trim((string) ($data['name'] ?? ''));
$email = trim((string) ($data['email'] ?? ''));
$phone = trim((string) ($data['phone'] ?? ''));
$message = trim((string) ($data['message'] ?? ''));

if ($name === '' || mb_strlen($name) > 100) {
    fail(400, 'Please include your name.');
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    fail(400, 'Please include a valid email address.');
}
if ($message === '' || mb_strlen($message) > 5000) {
    fail(400, 'Please include a message.');
}
if (mb_strlen($phone) > 40) {
    fail(400, 'Please check the phone number.');
}

// Keep header values to one line so a visitor cannot inject headers.
$safeName = str_replace(["\r", "\n"], ' ', $name);
$subject = 'Website message from ' . $safeName;
if (function_exists('mb_encode_mimeheader')) {
    $subject = mb_encode_mimeheader($subject, 'UTF-8', 'Q');
}

$configPath = __DIR__ . '/../../mail-config.php';
if (!is_file($configPath)) {
    error_log('contact form: mail-config.php is missing');
    fail(500, 'The message could not be sent right now. Please email info@sparkspsychotherapy.ca directly.');
}
$config = require $configPath;
if (!is_array($config)) {
    error_log('contact form: mail-config.php did not return settings');
    fail(500, 'The message could not be sent right now. Please email info@sparkspsychotherapy.ca directly.');
}
$smtpUser = (string) ($config['smtp_user'] ?? '');
$smtpPass = (string) ($config['smtp_pass'] ?? '');
$to = (string) ($config['to'] ?? 'info@sparkspsychotherapy.ca');
if ($smtpUser === '' || $smtpPass === '' || $to === '') {
    error_log('contact form: mail-config.php is incomplete');
    fail(500, 'The message could not be sent right now. Please email info@sparkspsychotherapy.ca directly.');
}

$body = "Name: {$name}\nEmail: {$email}\n";
if ($phone !== '') {
    $body .= "Phone: {$phone}\n";
}
$body .= "\n{$message}\n";

try {
    smtp_send($smtpUser, $smtpPass, $to, $email, $subject, $body);
} catch (Throwable $e) {
    error_log('contact form: ' . $e->getMessage());
    fail(500, 'The message could not be sent right now. Please email info@sparkspsychotherapy.ca directly.');
}

echo json_encode(['ok' => true]);

function smtp_read($fp): array
{
    $lines = [];
    while (($line = fgets($fp, 1024)) !== false) {
        $lines[] = $line;
        // A reply ends when the 4th character is a space ("250 ...").
        if (strlen($line) >= 4 && $line[3] === ' ') {
            break;
        }
    }
    $code = (int) substr($lines[0] ?? '000', 0, 3);
    return [$code, implode('', $lines)];
}

function smtp_command($fp, string $command, int $expect): void
{
    fwrite($fp, $command . "\r\n");
    [$code] = smtp_read($fp);
    if ($code !== $expect) {
        throw new RuntimeException('Mail server replied ' . $code . ' to ' . strtok($command, ' '));
    }
}

function smtp_send(
    string $smtpUser,
    string $smtpPass,
    string $to,
    string $replyTo,
    string $subject,
    string $body,
): void {
    $fp = @fsockopen('ssl://smtp.hushmail.com', 465, $errno, $errstr, 30);
    if ($fp === false) {
        throw new RuntimeException('Could not reach the mail server.');
    }
    stream_set_timeout($fp, 30);
    [$code] = smtp_read($fp);
    if ($code !== 220) {
        fclose($fp);
        throw new RuntimeException('Mail server did not greet us.');
    }
    smtp_command($fp, 'EHLO ' . (gethostname() ?: 'sparkspsychotherapy.ca'), 250);
    smtp_command($fp, 'AUTH LOGIN', 334);
    smtp_command($fp, base64_encode($smtpUser), 334);
    smtp_command($fp, base64_encode($smtpPass), 235);
    smtp_command($fp, 'MAIL FROM:<' . $smtpUser . '>', 250);
    smtp_command($fp, 'RCPT TO:<' . $to . '>', 250);
    smtp_command($fp, 'DATA', 354);
    $headers = [
        'From: ' . $smtpUser,
        'Reply-To: ' . $replyTo,
        'To: ' . $to,
        'Subject: ' . $subject,
        'Content-Type: text/plain; charset=UTF-8',
        'Content-Transfer-Encoding: 8bit',
        'X-Mailer: Sparks Psychotherapy contact form',
    ];
    $payload = implode("\r\n", $headers) . "\r\n\r\n"
        . str_replace(["\r\n", "\r", "\n"], "\r\n", $body) . "\r\n.\r\n";
    fwrite($fp, $payload);
    [$code] = smtp_read($fp);
    if ($code !== 250) {
        fclose($fp);
        throw new RuntimeException('Mail server did not accept the message.');
    }
    fwrite($fp, "QUIT\r\n");
    fclose($fp);
}
