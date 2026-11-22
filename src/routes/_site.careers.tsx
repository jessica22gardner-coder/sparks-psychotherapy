import { createFileRoute } from "@tanstack/react-router";
import { CtaButton } from "@/components/site-layout";

export const Route = createFileRoute("/_site/careers")({
  head: () => ({
    meta: [
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
      { title: "Careers | Sparks Psychotherapy" },
      { property: "og:title", content: "Careers | Sparks Psychotherapy" },
      {
        property: "og:description",
        content:
          "Join the Sparks Psychotherapy team. We welcome thoughtful clinicians who care deeply about grounded, relational therapy.",
      },
      {
        name: "description",
        content:
          "Join the Sparks Psychotherapy team. We welcome thoughtful clinicians who care deeply about grounded, relational therapy.",
      },
    ],
  }),
  component: CareersPage,
});

function CareersPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 py-10 md:py-16 text-center space-y-4">
        <p className="text-lg tracking-widest uppercase text-muted-foreground">Join our team</p>
        <h1 className="text-5xl font-serif">Careers at Sparks</h1>
        <p className="text-foreground/80">
          We're building a small, values-led practice where clinicians can do their best work,
          supported, resourced, and genuinely cared for.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20 grid md:grid-cols-2 gap-6">
        {[
          {
            title: "What we look for",
            body: "Registered or qualifying psychotherapists and social workers who bring warmth, curiosity, and a grounded relational lens to their work.",
          },
          {
            title: "How we support you",
            body: "Consultation, clinical community, admin support, and flexible in-person and virtual options, so you can focus on the work that matters.",
          },
          {
            title: "Open roles",
            body: "We don't have active openings right now, but we always welcome introductions from clinicians whose practice aligns with ours.",
          },
          {
            title: "Get in touch",
            body: "Send us your CV and a short note about what draws you to Sparks. We read every message.",
          },
        ].map((c) => (
          <div
            key={c.title}
            className="bg-card border border-border rounded-3xl p-12 shadow-soft space-y-3"
          >
            <h2 className="text-2xl">{c.title}</h2>
            <p className="text-2xl leading-relaxed text-foreground/80">{c.body}</p>
          </div>
        ))}
      </section>

      <section className="text-center pb-20 px-6">
        <CtaButton to="/contact">Introduce Yourself</CtaButton>
      </section>
    </>
  );
}
