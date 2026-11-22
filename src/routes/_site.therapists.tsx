import { createFileRoute } from "@tanstack/react-router";
import { BOOKING_URL, CtaButton } from "@/components/site-layout";
import { therapists } from "@/lib/therapists-data";
import jessPortrait from "@/assets/jess-therapists.jpg";

export const Route = createFileRoute("/_site/therapists")({
  head: () => ({
    meta: [
      { title: "Your Therapist | Sparks Psychotherapy" },
      {
        name: "description",
        content:
          "Meet Jess Sparks, Registered Psychotherapist at Sparks Psychotherapy, warm, relational, evidence-based therapy for adults and teens, in person and online.",
      },
      { property: "og:title", content: "Your Therapist | Sparks Psychotherapy" },
      {
        property: "og:description",
        content:
          "Meet Jess Sparks, Registered Psychotherapist at Sparks Psychotherapy, warm, relational, evidence-based therapy for adults and teens, in person and online.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TherapistsPage,
});

function TherapistsPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 py-10 md:py-16 text-center space-y-4">
        <p className="text-sm tracking-widest uppercase text-muted-foreground">
          Meet your therapist
        </p>
        <h1 className="text-5xl font-serif">Your Therapist</h1>
        <p className="text-foreground/80">
          Jess Sparks is a Registered Psychotherapist offering warm, grounded, evidence-based care
          for adults and teens, in person and online.
        </p>
      </section>

      <section className="mx-auto max-w-md px-6 pb-20">
        {therapists.map((t) => (
          <article
            key={t.slug}
            className="bg-card border border-border rounded-3xl overflow-hidden shadow-soft flex flex-col"
          >
            <div
              className={`aspect-[4/5] bg-gradient-to-br ${t.gradient} flex items-center justify-center`}
            >
              {t.slug === "jess-sparks" ? (
                <img
                  src={jessPortrait}
                  alt="Jess Sparks, Registered Psychotherapist"
                  width={1067}
                  height={1600}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="font-serif text-7xl text-heading opacity-80">{t.initials}</span>
              )}
            </div>
            <div className="p-12 flex flex-col flex-1 space-y-4">
              <div>
                <h2 className="text-2xl">{t.name}</h2>
                <p className="text-xl text-primary mt-1">{t.credentials}</p>
              </div>
              <p className="text-2xl leading-relaxed text-foreground/80 flex-1">{t.bio}</p>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Specialties
                </p>
                <div className="flex flex-wrap gap-2">
                  {t.specialties.map((s) => (
                    <span
                      key={s}
                      className="text-xs bg-secondary/40 text-foreground/80 rounded-full px-3 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 self-start uppercase tracking-widest text-xs text-primary border-b border-primary pb-1"
              >
                Book a Consultation
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="text-center pb-20 px-6">
        <CtaButton to={BOOKING_URL}>Schedule a Free Connection Call</CtaButton>
      </section>
    </>
  );
}
