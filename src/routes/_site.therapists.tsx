import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaButton } from "@/components/site-layout";
import { therapists } from "@/lib/therapists-data";
import jessPortrait from "@/assets/jess-portrait-2.jpg";

export const Route = createFileRoute("/_site/therapists")({
  head: () => ({
    meta: [
      { title: "Our Therapists | Sparks Psychotherapy" },
      {
        name: "description",
        content:
          "Meet the compassionate team at Sparks Psychotherapy. Registered therapists supporting individuals, couples, families, teens, and children.",
      },
      { property: "og:title", content: "Our Therapists | Sparks Psychotherapy" },
      {
        property: "og:description",
        content:
          "Meet the compassionate team at Sparks Psychotherapy. Registered therapists supporting individuals, couples, families, teens, and children.",
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
      <section className="mx-auto max-w-3xl px-6 py-16 md:py-24 text-center space-y-4">
        <p className="text-sm tracking-widest uppercase text-muted-foreground">Meet the team</p>
        <h1 className="text-5xl font-serif">Our Therapists</h1>
        <p className="text-foreground/80">
          A small, thoughtful team of registered clinicians committed to grounded, compassionate
          care.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 grid md:grid-cols-3 gap-6 lg:gap-8">
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
                  width={427}
                  height={640}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="font-serif text-7xl text-heading opacity-80">{t.initials}</span>
              )}
            </div>
            <div className="p-8 flex flex-col flex-1 space-y-4">
              <div>
                <h2 className="text-2xl">{t.name}</h2>
                <p className="text-sm text-primary mt-1">{t.credentials}</p>
              </div>
              <p className="text-sm text-foreground/80 flex-1">{t.bio}</p>
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
              <Link
                to="/contact"
                className="mt-2 self-start uppercase tracking-widest text-xs text-primary border-b border-primary pb-1"
              >
                Book a Consultation
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="text-center pb-20 px-6">
        <CtaButton to="/contact">Schedule a Free Connection Call</CtaButton>
      </section>
    </>
  );
}
