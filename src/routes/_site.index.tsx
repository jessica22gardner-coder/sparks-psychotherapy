import { createFileRoute, Link } from "@tanstack/react-router";
import { SquareCheck } from "lucide-react";
import portrait from "@/assets/jess-hero.jpg";
import portrait2 from "@/assets/jess-home-about.jpg";
import whoThisIsFor from "@/assets/who-this-is-for.jpg";
import bentoGarden from "@/assets/bento-garden.jpg";
import bentoHeard from "@/assets/bento-heard.jpg";
import bentoTeens from "@/assets/bento-teens.jpg";
import bentoGrowing from "@/assets/bento-growing.jpg";
import bentoLighter from "@/assets/bento-lighter.jpg";
import { BOOKING_URL, CtaButton } from "@/components/site-layout";

export const Route = createFileRoute("/_site/")({
  head: () => ({
    meta: [
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
      { title: "Psychotherapist in Oakville & the GTA | Sparks Psychotherapy Services" },
      {
        property: "og:title",
        content: "Psychotherapist in Oakville & the GTA | Sparks Psychotherapy Services",
      },
      {
        property: "og:description",
        content:
          "In-person psychotherapy in Oakville and online therapy across the GTA and Ontario, including Burlington, Toronto, Mississauga, Brampton, Hamilton and London.",
      },
      {
        name: "description",
        content:
          "In-person psychotherapy in Oakville and online therapy across the GTA and Ontario, including Burlington, Toronto, Mississauga, Brampton, Hamilton and London.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["LocalBusiness", "ProfessionalService"],
          name: "Sparks Psychotherapy Services",
          description:
            "Compassionate in-person and online psychotherapy for adults and teens in Oakville, the Greater Toronto Area and Ontario, supporting anxiety, depression, grief, relationships and life transitions.",
          url: "https://sparkspsychotherapy.ca/",
          telephone: "+1-365-977-0155",
          email: "info@sparkspsychotherapy.ca",
          address: {
            "@type": "PostalAddress",
            streetAddress: "1155 North Service Road",
            addressLocality: "Oakville",
            addressRegion: "ON",
            postalCode: "L6M 3E3",
            addressCountry: "CA",
          },
          geo: { "@type": "GeoCoordinates", latitude: 43.43568, longitude: -79.71445 },
          areaServed: [
            { "@type": "City", name: "Oakville" },
            { "@type": "City", name: "Burlington" },
            { "@type": "City", name: "Toronto" },
            { "@type": "City", name: "Mississauga" },
            { "@type": "City", name: "Brampton" },
            { "@type": "City", name: "Hamilton" },
            { "@type": "City", name: "London" },
            { "@type": "AdministrativeArea", name: "Greater Toronto Area" },
            { "@type": "AdministrativeArea", name: "Ontario" },
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Psychotherapy Services",
            itemListElement: [
              "Anxiety & Stress",
              "Depression",
              "Emotional Wellness",
              "Couples Counselling",
              "Teen Therapy",
              "Adoption Counselling",
              "Family Therapy",
            ].map((name) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name },
            })),
          },
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-10 md:py-16 grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
        <div className="order-2 md:order-1">
          <div className="rounded-3xl overflow-hidden border-[10px] border-secondary/40 shadow-soft">
            <img
              src={portrait}
              alt="Jess, registered psychotherapist, smiling"
              width={1067}
              height={1600}
              className="w-full h-auto block"
            />
          </div>
        </div>
        <div className="order-1 md:order-2 space-y-6">
          <p className="text-sm tracking-widest uppercase text-muted-foreground">
            In-person and virtual therapy
          </p>
          <h1 className="text-5xl md:text-6xl font-serif">
            Emotional burdens can be heavy.{" "}
            <span className="italic">You don't have to carry it alone.</span>
          </h1>
          <p className="text-base md:text-lg text-foreground/80 max-w-md">
            Therapy offers a space to better understand your emotions and begin to reconnect with
            yourself and others.
          </p>
          <CtaButton to={BOOKING_URL}>Schedule a Free Connection Call</CtaButton>
        </div>
      </section>

      {/* WHO I WORK WITH */}
      <section className="bg-secondary/25 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl">Who I Work With</h2>
          <p className="max-w-2xl mx-auto text-foreground/80">
            I specialize in supporting adults and teens who:
          </p>
          <ul className="grid md:grid-cols-2 gap-8 text-left">
            {[
              "Grew up in environments where emotions were minimized or dismissed",
              "Feel emotionally disconnected or overwhelmed by depression, anxiety, grief, or life transitions",
              "Are ready to trust themselves more deeply",
              "Want a grounded approach with tools to sustain emotional well-being",
            ].map((item) => (
              <li
                key={item}
                className="bg-card border border-border rounded-3xl p-10 text-lg text-foreground/85 shadow-soft"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="max-w-2xl mx-auto text-foreground/75 italic">
            Therapy with me is collaborative, thoughtful, and attuned to your needs. You are in the
            driver's seat, I'm with you, helping to navigate the journey together.
          </p>
        </div>
      </section>

      {/* ABOUT JESS */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-5 gap-12 md:gap-16 lg:gap-24 items-center">
        <div className="md:col-span-3">
          <div className="relative z-10 bg-card border border-border rounded-[2.5rem] p-8 md:p-10 shadow-soft space-y-6 md:-mr-24 lg:-mr-28">
            <h2 className="text-3xl md:text-4xl">
              Hi, I&apos;m Jess, a Registered Psychotherapist who cares deeply about helping you
              understand your emotions and what to do with them.
            </h2>
            <p className="text-foreground/80">
              My journey into therapy began early, when I became a peer counsellor at sixteen. That
              experience taught me something I still hold at the core of my work today, we all act
              the way we do for a reason. It sparked a lifelong curiosity to understand emotions,
              behaviour, and the stories we carry.
            </p>
            <Link
              to="/about"
              className="inline-block uppercase tracking-widest text-xs text-primary border-b border-primary pb-1 hover:opacity-80"
            >
              My Story
            </Link>
          </div>
        </div>
        <div className="md:col-span-2">
          <img
            src={portrait2}
            alt="Jess, registered psychotherapist, smiling"
            width={1067}
            height={1600}
            loading="lazy"
            className="rounded-3xl shadow-soft w-full h-auto"
          />
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="bg-secondary/25 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid md:grid-cols-5 gap-12 md:gap-16 lg:gap-24 items-center">
          <div className="md:col-span-3 space-y-6">
            <h2 className="text-4xl md:text-5xl">Who This Is For</h2>
            <p className="text-foreground/80">
              It&apos;s a great privilege to join you in navigating these challenges together. For
              adults and teens who grew up feeling emotionally unseen, and are ready to finally
              understand and care for themselves instead of carrying it alone.
            </p>
            <p className="font-medium">Maybe you&apos;ve spent years:</p>
            <ul className="space-y-3 text-foreground/80">
              {[
                "Quieting your true feelings to keep everyone else comfortable.",
                "Feeling overwhelmed without knowing why.",
                "Wondering why you question yourself and cannot find any trust.",
                "Seeking a sense of greater purpose or fulfilment in daily life.",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <SquareCheck className="h-6 w-6 shrink-0 text-primary mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-foreground/80">
              I create a warm, non-judgmental space where you are truly seen, heard, and understood.
              Drawing from relational, developmental, and evidence-based approaches, I support you
              in exploring emotional patterns, developing new skills, and feeling more grounded.
            </p>
          </div>
          <div className="md:col-span-2">
            <img
              src={whoThisIsFor}
              alt="A man seated in an armchair during a therapy session"
              width={614}
              height={768}
              loading="lazy"
              className="rounded-3xl shadow-soft w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* WHAT I OFFER */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="text-center space-y-4 mb-14">
          <p className="text-sm tracking-widest uppercase text-muted-foreground">How I Work</p>
          <h2 className="text-4xl md:text-5xl">Therapy Options</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <article className="bg-card rounded-3xl p-10 shadow-soft space-y-4 border border-border">
            <h3 className="text-2xl">Individual Therapy</h3>
            <p className="text-foreground/80">
              One-on-one support focused on understanding your emotional landscape, learning to
              process what's been held inside, and taking action toward the change you want.
            </p>
          </article>
          <article className="bg-card rounded-3xl p-10 shadow-soft space-y-4 border border-border">
            <h3 className="text-2xl">Couples Therapy</h3>
            <p className="text-foreground/80">
              Support for couples to understand patterns that have created emotional distance.
              Together we build new cycles of understanding and functional communication, restoring
              a strong, loving bond.
            </p>
          </article>
        </div>

        {/* BENTO GALLERY — the journey: roots, joy returns, being heard, young voices, growing */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[240px]">
          <div className="md:col-span-2 rounded-3xl overflow-hidden shadow-soft bg-secondary/50">
            <img
              src={bentoGarden}
              alt="An older man smiling with two young girls in a sunny garden"
              width={1000}
              height={500}
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-soft bg-secondary/50">
            <img
              src={bentoLighter}
              alt="A couple laughing together in deck chairs"
              width={1000}
              height={667}
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-soft">
            <img
              src={bentoHeard}
              alt="A woman smiling warmly while talking one-on-one in therapy"
              width={1000}
              height={668}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-2 rounded-3xl overflow-hidden shadow-soft bg-secondary/50">
            <img
              src={bentoTeens}
              alt="Three teenagers smiling outdoors, one holding a microphone"
              width={1000}
              height={500}
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="md:col-span-3 rounded-3xl overflow-hidden shadow-soft">
            <img
              src={bentoGrowing}
              alt="A young woman smiling softly beside a plant, feeling at ease"
              width={1000}
              height={388}
              loading="lazy"
              className="w-full h-full object-cover object-[center_55%]"
            />
          </div>
        </div>
      </section>

      {/* INCLUSIVE CARE + LAND */}
      <section className="mx-auto max-w-5xl px-6 pb-20 grid md:grid-cols-2 gap-10">
        <div className="bg-card rounded-3xl p-8 border border-border">
          <h3 className="text-2xl mb-3">Inclusive Care</h3>
          <p className="text-sm text-foreground/80">
            I proudly provide affirming, culturally attuned therapy for 2SLGBTQIA+ and BIPOC
            individuals. You are welcome here.
          </p>
        </div>
        <div className="bg-card rounded-3xl p-8 border border-border">
          <h3 className="text-2xl mb-3">Land Acknowledgement</h3>
          <p className="text-sm text-foreground/80">
            Sparks Psychotherapy Services operates on the traditional and ancestral lands of the
            Mississaugas of the Credit First Nation. I acknowledge this land with gratitude and
            commit to ongoing learning and respect.
          </p>
        </div>
      </section>

      {/* WHERE I PRACTICE */}
      <section className="bg-secondary/25 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center space-y-6">
          <p className="text-sm tracking-widest uppercase text-muted-foreground">
            Where I Practice
          </p>
          <h2 className="text-4xl md:text-5xl">In-person in Oakville, online across Ontario</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            I offer in-person therapy sessions at 1155 North Service Road in Oakville.
          </p>
          <ul className="sr-only">
            {[
              "Oakville",
              "Burlington",
              "Toronto",
              "Mississauga",
              "Brampton",
              "Hamilton",
              "London",
            ].map((city) => (
              <li key={city}>{city}</li>
            ))}
          </ul>
          <p className="text-foreground/75">Online sessions are available anywhere in Ontario.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary/15 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center space-y-6">
          <h2 className="text-4xl md:text-5xl">
            Interested in exploring therapy? I'd be glad to connect.
          </h2>
          <p className="text-foreground/80">Schedule your free connection call today.</p>
          <CtaButton to={BOOKING_URL}>Book a Consultation</CtaButton>
        </div>
      </section>
    </>
  );
}
