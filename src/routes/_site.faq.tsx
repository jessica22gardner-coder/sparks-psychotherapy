import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BOOKING_URL, CtaButton } from "@/components/site-layout";

export const Route = createFileRoute("/_site/faq")({
  head: () => ({
    meta: [
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
      { title: "FAQ | Sparks Psychotherapy Services" },
      { property: "og:title", content: "FAQ | Sparks Psychotherapy Services" },
      {
        property: "og:description",
        content:
          "Common questions about therapy, sessions, fees, and getting started with Sparks Psychotherapy.",
      },
      {
        name: "description",
        content:
          "Common questions about therapy, sessions, fees, and getting started with Sparks Psychotherapy.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

const faqs = [
  {
    q: "Do you offer virtual sessions?",
    a: "Yes, I offer both in-person and secure virtual sessions across Ontario.",
  },
  {
    q: "How long are sessions?",
    a: "Individual sessions are 50 minutes. Couples sessions are 60–80 minutes.",
  },
  {
    q: "Do you accept insurance?",
    a: "Sessions are often covered under Registered Psychotherapist benefits. I provide receipts for direct submission.",
  },
  {
    q: "What happens on a free connection call?",
    a: "We spend about 15 minutes getting to know each other so you can decide if working together feels right.",
  },
  {
    q: "How often will we meet?",
    a: "Most clients begin with weekly sessions. Cadence is collaborative and adjusts to your needs.",
  },
];

function FaqPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 py-16 md:py-24 text-center space-y-4">
        <h1 className="text-5xl font-serif">Frequently Asked</h1>
        <p className="text-foreground/80">
          Answers to a few of the most common questions. If yours isn't here, please reach out.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-20">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="bg-card border border-border rounded-2xl px-6"
            >
              <AccordionTrigger className="text-left text-lg font-serif text-heading">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="text-center pb-20 px-6">
        <CtaButton to={BOOKING_URL}>Book a Consultation</CtaButton>
      </section>
    </>
  );
}
