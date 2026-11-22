import { createFileRoute } from "@tanstack/react-router";
import aboutPhoto from "@/assets/jess-about.jpg";
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
          "Meet Jess, a Registered Psychotherapist offering compassionate, relational therapy for adults and teens.",
      },
      {
        name: "description",
        content:
          "Meet Jess, a Registered Psychotherapist offering compassionate, relational therapy for adults and teens.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-10 md:py-16 grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
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
          src={aboutPhoto}
          alt="Jess, Registered Psychotherapist, smiling"
          width={838}
          height={1258}
          className="rounded-3xl shadow-soft w-full h-auto"
        />
      </section>

      {/* MY STORY */}
      <section className="bg-secondary/25 py-20">
        <div className="mx-auto max-w-3xl px-6 space-y-6 text-foreground/85">
          <h2 className="text-3xl">My Story</h2>
          <p className="text-2xl leading-relaxed">
            Hi, I&apos;m Jess, a Registered Psychotherapist who cares deeply about helping you
            understand your emotions and what to do with them.
          </p>
          <p>
            I am passionate about working with adults, teens and couples who feel emotionally
            overwhelmed.
          </p>
          <p>
            My journey into therapy began early, when I became a peer counsellor at 16. That
            experience taught me something I still hold at the core of my work today: we all act the
            way we do for a reason. It sparked a lifelong curiosity to understand emotions,
            behaviour, and the stories we carry.
          </p>
          <p>
            I went on to study English and Psychology, because I was drawn to how storytelling can
            create meaning and deeper emotional understanding. I later spent over 20 years as an
            educator, supporting learning, growth, and development. During this time, I continuously
            sought out more knowledge in psychology, human development, teaching, diversity, equity,
            and inclusion.
          </p>
          <p>
            Alongside my professional work, I navigated personal challenges related to health,
            relationships, life transitions, and becoming a mother via adoption. I experienced
            firsthand the value of therapy in building coping skills, emotional clarity, strength,
            and resilience. These experiences shape how I show up as a therapist, grounded,
            compassionate, with a deep awareness and understanding on personal and professional
            levels.
          </p>
          <p>
            I work with adults and teens who feel emotionally overwhelmed, disconnected, or stuck
            after years of having their feelings go unheard. In our work together, I offer a warm,
            collaborative space where we can work together toward better understanding your
            emotions, building self-trust, and exploring what feeling more grounded looks like for
            you.
          </p>
          <p>
            My hope is that our work together feels grounded, honest, and kind, a place where you
            are met fully, exactly as you are.
          </p>
        </div>
      </section>

      {/* APPROACH TO THERAPY */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 space-y-6 text-foreground/85">
          <h2 className="text-3xl text-center">Approach to Therapy</h2>
          <div className="space-y-2 text-center">
            <p>My work is grounded in compassion, curiosity, and collaboration.</p>
            <p>In our sessions, you&apos;ll find:</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-3xl p-10 shadow-soft">
              <p className="text-2xl leading-relaxed">
                Your experiences are met with deep care, great respect, and genuine curiosity.
              </p>
            </div>
            <div className="bg-card border border-border rounded-3xl p-10 shadow-soft">
              <p className="text-2xl leading-relaxed">
                Minds and hearts aligned toward growth, working collaboratively at a pace that feels
                supportive and right for you.
              </p>
            </div>
            <div className="bg-card border border-border rounded-3xl p-10 shadow-soft">
              <p className="text-2xl leading-relaxed">
                Practical, thoughtful support, tailored to your goals while honoring your values,
                strengths, and lived experience.
              </p>
            </div>
          </div>
          <p className="mx-auto max-w-2xl text-center italic text-foreground/75">
            I integrate relational and evidence-informed methods such as Emotion-Focused Therapy,
            Cognitive-Behavioural Therapy, and Psychodynamic Principles.
          </p>
        </div>
      </section>

      {/* INCLUSIVE & CULTURALLY ATTUNED CARE */}
      <section className="bg-topbar py-20">
        <div className="mx-auto max-w-6xl px-6 space-y-6 text-center text-topbar-foreground">
          <h2 className="text-3xl text-topbar-foreground">
            Inclusive &amp; Culturally Attuned Care
          </h2>
          <p className="text-2xl leading-relaxed">
            I recognize that our emotional lives are shaped by culture, identity, family systems,
            and lived experience. My practice is committed to providing affirming, culturally
            responsive care for 2SLGBTQIA+ and BIPOC individuals.
          </p>
          <p className="text-2xl leading-relaxed">
            Therapy with me is grounded in respect, curiosity, and humility. I understand that
            safety in therapy is not assumed, it is built through trust, awareness, and
            accountability.
          </p>
          <p className="text-2xl leading-relaxed">
            I also acknowledge that this practice operates on the traditional lands of the
            Mississaugas of the Credit First Nation. I am committed to ongoing learning about
            Indigenous histories and to practicing in ways that honour this land and its peoples.
          </p>
        </div>
      </section>

      {/* A MESSAGE FROM JESS */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl text-center space-y-8">
          <div className="space-y-3">
            <p className="text-sm tracking-widest uppercase text-muted-foreground">
              A message from Jess
            </p>
            <h2 className="text-3xl md:text-4xl font-serif">A note from Jess</h2>
          </div>
          <div
            className="relative mx-auto max-w-lg -rotate-1 text-left"
            style={{ filter: "drop-shadow(0 12px 16px rgba(0, 0, 0, 0.14))" }}
          >
            <div
              className="absolute bottom-0 right-0 h-10 w-10 bg-[#fde68a]"
              style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }}
              aria-hidden="true"
            />
            <div
              className="relative bg-[#fef9c3] p-8 md:p-12"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%)",
              }}
            >
              <p className="font-handwriting text-2xl md:text-3xl leading-relaxed text-foreground/85">
                If you&apos;re ready to understand your emotions more deeply and feel supported
                through the process, I&apos;d be privileged to work with you.
              </p>
              <p className="font-handwriting text-2xl md:text-3xl text-right pt-6 text-heading">
                Jess
              </p>
            </div>
          </div>
          <div className="pt-4">
            <CtaButton to={BOOKING_URL}>Book a Consultation</CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
