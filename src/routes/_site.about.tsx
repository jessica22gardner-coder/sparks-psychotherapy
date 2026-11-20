import { createFileRoute } from "@tanstack/react-router";
import chair from "@/assets/therapist-chair.jpg";
import jessPortrait from "@/assets/jess-portrait-2.jpg";
import { Play } from "lucide-react";
import { BOOKING_URL, CtaButton } from "@/components/site-layout";

export const Route = createFileRoute("/_site/about")({
  head: () => ({
    meta: [
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
      { title: "About Jess | Sparks Psychotherapy Services" },
      { property: "og:title", content: "About Jess | Sparks Psychotherapy Services" },
      {
        property: "og:description",
        content:
          "Meet Jess, a Registered Psychotherapist offering compassionate, relational therapy for adults.",
      },
      {
        name: "description",
        content:
          "Meet Jess, a Registered Psychotherapist offering compassionate, relational therapy for adults.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-24 grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
        <div className="space-y-6">
          <p className="text-sm tracking-widest uppercase text-muted-foreground">
            The foundation of my work is this…
          </p>
          <h1 className="text-4xl md:text-5xl font-serif">
            To offer a space where you can better hear, understand, and work with your emotions
            toward greater wholeness and well-being.
          </h1>
        </div>
        <img
          src={chair}
          alt="Jess seated in a vintage armchair"
          width={1280}
          height={896}
          className="rounded-3xl shadow-soft w-full h-auto"
        />
      </section>

      <section className="bg-secondary/25 py-20">
        <div className="mx-auto max-w-3xl px-6 space-y-6 text-foreground/85">
          <h2 className="text-3xl">My Story</h2>
          <p>
            My journey into therapy began at sixteen, when I trained as a peer counsellor. That
            experience planted a seed I still carry today: we all act the way we do for a reason.
          </p>
          <p>
            Over the years, that early curiosity grew into a career devoted to helping people
            understand the emotions, behaviours, and stories shaping their lives. As a Registered
            Psychotherapist, I integrate relational, developmental, and evidence-based approaches,
            tailored to each person I work with.
          </p>
          <p>
            My hope is that our work together feels grounded, honest, and kind, a place where you
            are met fully, exactly as you are.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl text-center space-y-8">
          <div className="space-y-3">
            <p className="text-sm tracking-widest uppercase text-muted-foreground">
              A message from Jess
            </p>
            <h2 className="text-3xl md:text-4xl font-serif">Hear it in her own words</h2>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-soft group">
            <img
              src={jessPortrait}
              alt="Jess, founder of Sparks Psychotherapy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors" />
            <button
              type="button"
              aria-label="Play founder video"
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/90 text-primary shadow-soft group-hover:scale-105 transition-transform">
                <Play className="w-8 h-8 md:w-10 md:h-10 ml-1" fill="currentColor" />
              </span>
            </button>
          </div>
          <div className="pt-4">
            <CtaButton to={BOOKING_URL}>Book a Consultation</CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
