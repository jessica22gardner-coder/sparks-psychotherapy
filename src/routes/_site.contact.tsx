import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import contactPhoto from "@/assets/jess-contact.jpg";

// The form sends to /contact.php on the Hostinger server, which delivers
// the message to info@sparkspsychotherapy.ca through Hushmail. The
// Hushmail login lives in mail-config.php above public_html, never here.
const CONTACT_EMAIL = "info@sparkspsychotherapy.ca";

export const Route = createFileRoute("/_site/contact")({
  head: () => ({
    meta: [
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
      { title: "Contact | Sparks Psychotherapy Services" },
      { property: "og:title", content: "Contact | Sparks Psychotherapy Services" },
      {
        property: "og:description",
        content:
          "Schedule a free 15-minute connection call or send a message to begin therapy with Sparks Psychotherapy.",
      },
      {
        name: "description",
        content:
          "Schedule a free 15-minute connection call or send a message to begin therapy with Sparks Psychotherapy.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const data = new FormData(e.currentTarget);
    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
      company: String(data.get("company") ?? ""),
    };
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await res.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
      } | null;
      if (!res.ok || !result?.ok) {
        throw new Error(result?.error ?? "The message could not be sent.");
      }
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "The message could not be sent.");
      setStatus("error");
    }
  }

  return (
    <>
      <section className="mx-auto max-w-3xl px-6 py-10 md:py-16 text-center space-y-4">
        <h1 className="text-6xl font-serif">Let's connect</h1>
        <p className="text-foreground/80">
          Schedule your free 15-minute connection call, or email me and I&apos;ll be in touch within
          two business days.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 grid md:grid-cols-5 gap-16">
        <div className="md:col-span-2 space-y-6">
          <div className="flex items-start gap-3">
            <Phone className="text-primary mt-1" size={20} />
            <div>
              <p className="text-lg text-muted-foreground uppercase tracking-wider">Phone</p>
              <a href="tel:13659770155" className="text-foreground/85">
                1 (365) 977-0155
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="text-primary mt-1" size={20} />
            <div>
              <p className="text-lg text-muted-foreground uppercase tracking-wider">Email</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-foreground/85">
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="text-primary mt-1" size={20} />
            <div>
              <p className="text-lg text-muted-foreground uppercase tracking-wider">Sessions</p>
              <p className="text-foreground/85">
                In-person at 1155 North Service Road, Oakville, ON L6M 3E3
              </p>
              <p className="text-foreground/85">Virtual across Ontario</p>
            </div>
          </div>
          <img
            src={contactPhoto}
            alt="Jess, Registered Psychotherapist, smiling"
            width={1067}
            height={1600}
            loading="lazy"
            className="rounded-3xl shadow-soft w-full h-auto"
          />
        </div>

        <form
          onSubmit={handleSubmit}
          className="md:col-span-3 bg-card border border-border rounded-3xl p-8 space-y-4 shadow-soft"
        >
          {status === "sent" ? (
            <div className="text-center py-12 space-y-3">
              <h2 className="text-4xl">Thank You!</h2>
              <p className="text-foreground/80">
                Your message has been sent. I&apos;ll be in touch within two business days.
              </p>
            </div>
          ) : (
            <>
              {status === "error" && (
                <p className="rounded-xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-xl text-foreground/85">
                  {error} You can also email{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
                    {CONTACT_EMAIL}
                  </a>{" "}
                  directly, or call{" "}
                  <a href="tel:13659770155" className="underline">
                    1 (365) 977-0155
                  </a>
                  .
                </p>
              )}
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
              </div>
              <Field label="Phone" name="phone" type="tel" />
              <div>
                <label htmlFor="message" className="text-xl text-foreground/80">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-xl focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div aria-hidden="true" className="hidden">
                <label htmlFor="company">Company</label>
                <input id="company" name="company" tabIndex={-1} autoComplete="off" />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-sand text-sand-foreground rounded-full px-8 py-3.5 uppercase tracking-widest text-xs font-medium w-full sm:w-auto disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </>
          )}
        </form>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xl text-foreground/80" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-1 w-full rounded-xl border border-border bg-background px-4 py-3 text-xl focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
