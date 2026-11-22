import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import contactPhoto from "@/assets/jess-contact.jpg";

// TODO: form email delivery to be added later via Hostinger (a server-side
// handler on the hosting account). When that exists, replace the mailto
// submit below with a POST to that endpoint and show success/failure from
// its real response. Until then this form only composes an email in the
// visitor's own mail app. It does not send anything by itself.
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
  const [composed, setComposed] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const body = [`Name: ${name}`, `Email: ${email}`, phone ? `Phone: ${phone}` : null, "", message]
      .filter((line) => line !== null)
      .join("\n");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `Website message from ${name}`,
    )}&body=${encodeURIComponent(body)}`;
    setComposed(true);
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

      <section className="mx-auto max-w-5xl px-6 pb-20 grid md:grid-cols-5 gap-10">
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
          {composed ? (
            <div className="text-center py-12 space-y-3">
              <h2 className="text-4xl">Thank You!</h2>
              <p className="text-foreground/80">
                Your email app should open with your message ready to send. If it doesn&apos;t,
                please email{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
                  {CONTACT_EMAIL}
                </a>{" "}
                directly, or call{" "}
                <a href="tel:13659770155" className="underline">
                  1 (365) 977-0155
                </a>
                .
              </p>
            </div>
          ) : (
            <>
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
              <button
                type="submit"
                className="bg-sand text-sand-foreground rounded-full px-8 py-3.5 uppercase tracking-widest text-xs font-medium w-full sm:w-auto"
              >
                Send Message
              </button>
              <p className="text-base text-muted-foreground">
                This opens your email app with your message ready to send. The form itself
                doesn&apos;t send email yet.
              </p>
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
