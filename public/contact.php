<?php
// Contact form handler for Sparks Psychotherapy Service.
//
// Receives the website contact form (JSON POST) and sends it to the
// practice inbox. No password lives anywhere: the message is sent by the
// hosting server itself (PHP mail()) to info@sparkspsychotherapy.ca,
// whose mail is received by Hushmail.
//
// Deliverability note: the domain's SPF record currently authorises only
// Hushmail to send for sparkspsychotherapy.ca. If test messages are
// rejected or land in spam, add Hostinger to that record:
//   v=spf1 include:_spf.hushmail.com include:_spf.mail.hostinger.com -all
// The earlier Hushmail-login version of this handler (SMTP) is in git
// history if it is ever needed.
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

const CONTACT_TO = 'info@sparkspsychotherapy.ca';

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

$body = "Name: {$name}\nEmail: {$email}\n";
if ($phone !== '') {
    $body .= "Phone: {$phone}\n";
}
$body .= "\n{$message}\n";

$headers = [
    'From: ' . CONTACT_TO,
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    'X-Mailer: Sparks Psychotherapy contact form',
];

$sent = mail(CONTACT_TO, $subject, $body, implode("\r\n", $headers));
if (!$sent) {
    error_log('contact form: mail() returned false');
    fail(500, 'The message could not be sent right now. Please email info@sparkspsychotherapy.ca directly.');
}

echo json_encode(['ok' => true]);
