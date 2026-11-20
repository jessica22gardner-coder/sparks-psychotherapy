import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/therapist-portrait.jpg";
import portrait2 from "@/assets/jess-portrait-2.jpg";
import bentoIndividual from "@/assets/bento-individual.jpg";
import bentoCouple from "@/assets/bento-couple.jpg";
import bentoYoungMan from "@/assets/bento-young-man.jpg";
import bentoTwoWomen from "@/assets/bento-two-women.jpg";
import bentoCoupleWalking from "@/assets/bento-couple-walking.jpg";
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
            "Compassionate in-person and online psychotherapy for adults in Oakville, the Greater Toronto Area and Ontario, supporting anxiety, depression, grief, relationships and life transitions.",
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
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-24 grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
        <div className="order-2 md:order-1">
          <div className="rounded-3xl overflow-hidden border-[10px] border-secondary/40 shadow-soft">
            <img
              src={portrait}
              alt="Jess, registered psychotherapist"
              width={896}
              height={1152}
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
        <div className="mx-auto max-w-5xl px-6 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl">Who I Work With</h2>
          <p className="max-w-2xl mx-auto text-foreground/80">
            I specialize in supporting adults who:
          </p>
          <ul className="grid md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto">
            {[
              "Grew up in environments where emotions were minimized or dismissed",
              "Feel emotionally disconnected or overwhelmed by depression, anxiety, grief, or life transitions",
              "Are ready to trust themselves more deeply",
              "Want a grounded approach with tools to sustain emotional well-being",
            ].map((item) => (
              <li
                key={item}
                className="bg-card rounded-2xl p-6 text-sm md:text-base text-foreground/85 shadow-soft"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="max-w-2xl mx-auto text-foreground/75 italic">
            Therapy with me is collaborative, thoughtful, and attuned to your needs. You are in the
            driver's seat, I'm with you, helping to navigate the journey together.
          </p>
          <CtaButton to="/about">Find Out What Sessions Look Like</CtaButton>
        </div>
      </section>

      {/* ABOUT JESS */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-5 gap-12 md:gap-16 lg:gap-24 items-center">
        <div className="md:col-span-3 space-y-6">
          <h2 className="text-3xl md:text-4xl">
            Hi, I'm Jess, a Registered Psychotherapist who cares deeply about helping you understand
            your emotions and what to do with them.
          </h2>
          <p className="text-foreground/80">
            My journey into therapy began early, when I became a peer counsellor at sixteen. That
            experience taught me something I still hold at the core of my work today, we all act the
            way we do for a reason. It sparked a lifelong curiosity to understand emotions,
            behaviour, and the stories we carry.
          </p>
          <Link
            to="/about"
            className="inline-block uppercase tracking-widest text-xs text-primary border-b border-primary pb-1 hover:opacity-80"
          >
            My Story
          </Link>
        </div>
        <div className="md:col-span-2">
          <img
            src={portrait2}
            alt="Jess, registered psychotherapist, seated and smiling"
            width={1280}
            height={1920}
            loading="lazy"
            className="rounded-3xl shadow-soft w-full h-auto"
          />
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="bg-secondary/25 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center space-y-6">
          <h2 className="text-4xl md:text-5xl">Who This Is For</h2>
          <p className="text-foreground/80">
            It's a great privilege to join you in navigating these challenges together. For adults
            who grew up feeling emotionally unseen, and are ready to finally understand and care for
            themselves instead of carrying it alone.
          </p>
          <p className="font-medium pt-4">Maybe you've spent years:</p>
          <ul className="space-y-3 max-w-xl mx-auto text-foreground/80">
            <li>Quieting your true feelings to keep everyone comfortable.</li>
            <li>Feeling overwhelmed without knowing why.</li>
            <li>Questioning yourself and struggling to find trust.</li>
            <li>Searching for a sense of purpose in daily life.</li>
          </ul>
          <p className="max-w-2xl mx-auto text-foreground/80 pt-6">
            I create a warm, non-judgmental space where you are truly seen, heard, and understood.
            Drawing from relational, developmental, and evidence-based approaches, I support you in
            exploring emotional patterns, developing new skills, and feeling more grounded.
          </p>
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

        {/* BENTO GALLERY */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[240px]">
          <div className="md:col-span-2 rounded-3xl overflow-hidden shadow-soft">
            <img
              src={bentoCouple}
              alt="Happy couple sitting together during a therapy session"
              width={1024}
              height={768}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-soft">
            <img
              src={bentoYoungMan}
              alt="Young man smiling during an individual therapy session"
              width={768}
              height={1024}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-soft">
            <img
              src={bentoTwoWomen}
              alt="Two women sharing a warm moment in therapy"
              width={768}
              height={1024}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-2 rounded-3xl overflow-hidden shadow-soft">
            <img
              src={bentoIndividual}
              alt="Woman smiling in a supportive therapy conversation"
              width={1024}
              height={768}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-3 rounded-3xl overflow-hidden shadow-soft">
            <img
              src={bentoCoupleWalking}
              alt="Happy couple walking together after a session"
              width={1024}
              height={768}
              loading="lazy"
              className="w-full h-full object-cover"
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
            I offer in-person therapy sessions at 1155 North Service Road in Oakville, and secure
            online therapy for adults across the Greater Toronto Area and Ontario, wherever you are.
          </p>
          <ul className="flex flex-wrap justify-center gap-3 pt-2">
            {[
              "Oakville",
              "Burlington",
              "Toronto",
              "Mississauga",
              "Brampton",
              "Hamilton",
              "London",
            ].map((city) => (
              <li
                key={city}
                className="bg-card border border-border rounded-full px-5 py-2 text-sm text-foreground/85 shadow-soft"
              >
                {city}
              </li>
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
