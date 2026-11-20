import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Building2,
  Flower2,
  HeartHandshake,
  GraduationCap,
  Check,
  Mic2,
  Globe2,
  Mail,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { speakingTopics, speakingFormats } from "@/lib/speaking-data";
import { speakingAudiences } from "@/lib/speaking-audiences";
import workshop from "@/assets/speaking-hero.jpg";

const title = "Mental Health Speaking & Workshops | Sparks Psychotherapy";
const description =
  "Mental health speaking and workshops with Jess for workplaces, retreats, communities and conferences. Explore emotional wellness, burnout prevention and resilience.";
export const Route = createFileRoute("/_site/speaking")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/speaking" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/speaking" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Mental Health Speaking & Workshops",
          description,
          url: "https://sparkspsychotherapy.ca/speaking",
          provider: { "@type": "Organization", name: "Sparks Psychotherapy" },
          serviceType: "Mental health speaking and educational workshops",
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
          audience: speakingAudiences.map((audience) => ({
            "@type": "Audience",
            audienceType: audience.label,
          })),
        }),
      },
    ],
  }),
  component: SpeakingPage,
});
const audiences = [
  {
    icon: Building2,
    title: "Businesses & Organizations",
    description:
      "Workplace mental health, employee well-being, burnout, emotional intelligence, workplace relationships and work-life balance.",
  },
  {
    icon: Flower2,
    title: "Retreats & Wellness Events",
    description:
      "Emotional wellness, self-discovery, personal growth, self-trust, resilience and meaningful connection.",
  },
  {
    icon: HeartHandshake,
    title: "Mental Health & Community Events",
    description:
      "Mental health awareness, emotional literacy, anxiety, emotional regulation, relationships and breaking stigma.",
  },
  {
    icon: GraduationCap,
    title: "Schools, Professional Groups & Conferences",
    description:
      "Emotional development, understanding human behaviour, communication, empathy, boundaries and psychological well-being.",
  },
];
function SpeakingPage() {
  return (
    <div className="speaking-page">
      <section className="relative isolate overflow-hidden">
        <img
          src={workshop}
          alt="An audience applauding a speaker during a workshop"
          width={1000}
          height={667}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 speaking-hero-overlay" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="max-w-2xl space-y-6">
            <p className="uppercase tracking-widest text-xs font-medium text-heading flex items-center gap-2">
              <Mic2 size={16} /> Speaking & Workshops with Jess
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl">
              Creating Conversations That Change How We Understand Mental Health
            </h1>
            <div className="max-w-xl text-base leading-relaxed space-y-4">
              <p>
                Jess brings thoughtful, engaging and meaningful conversations about emotional
                well-being, mental health, relationships and the human experience to organizations,
                workplaces, retreats and communities.
              </p>
              <p>
                Through speaking engagements and interactive workshops, she helps audiences better
                understand themselves, navigate life's challenges and build healthier relationships
                with themselves and others.
              </p>
              <p>
                Explore workplace mental health speaking, corporate wellness workshops, retreat
                facilitation and mental health education with a Registered Psychotherapist. Speaking
                engagements are educational and separate from psychotherapy.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full bg-sand text-sand-foreground hover:bg-sand/90"
              >
                <Link to="/contact">Invite Jess to Speak</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="max-w-3xl space-y-4 mb-10">
          <h2 className="text-3xl md:text-4xl">Meaningful Conversations for Every Audience</h2>
          <p className="leading-relaxed">
            Whether you're creating a healthier workplace, hosting a wellness retreat or organizing
            a mental health event, Jess brings thoughtful perspectives and meaningful conversations
            to your audience.
          </p>
        </div>
        <div className="space-y-3">
          {speakingAudiences.map((audience, index) => {
            const Icon = audiences[index]?.icon ?? Mic2;
            return (
              <details key={audience.slug} className="group border-b border-border">
                <summary className="flex items-center py-7 gap-4 text-left cursor-pointer list-none [&::-webkit-details-marker]:hidden focus-visible:outline-2 focus-visible:outline-ring">
                  <Icon className="shrink-0 text-heading h-8 w-8" strokeWidth={1.4} />
                  <div className="flex-1 min-w-0 space-y-3">
                    <h3 className="text-2xl lg:text-3xl">{audience.label}</h3>
                    <p className="text-sm font-normal leading-relaxed text-muted-foreground">
                      {audience.audience}
                    </p>
                  </div>
                  <ChevronDown className="size-4 shrink-0 text-muted-foreground group-open:rotate-180" />
                </summary>
                <div className="text-base pb-9 space-y-8">
                  <div className="max-w-4xl space-y-4 leading-relaxed">
                    <h4 className="text-2xl lg:text-3xl">{audience.headline}</h4>
                    <p>{audience.intro}</p>
                    <p>{audience.context}</p>
                    <p>{audience.planning}</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-7">
                    {audience.topics.map((topic) => (
                      <div key={topic.title} className="space-y-3">
                        <h4 className="text-2xl">{topic.title}</h4>
                        <p className="leading-relaxed">{topic.text}</p>
                      </div>
                    ))}
                  </div>
                  <div className="grid md:grid-cols-2 gap-10">
                    <div>
                      <h4 className="text-2xl mb-4">Potential learning outcomes</h4>
                      <p className="leading-relaxed mb-4">
                        Depending on the topic and format, participants may have opportunities to:
                      </p>
                      <ul className="space-y-4">
                        {audience.outcomes.map((outcome) => (
                          <li key={outcome} className="flex gap-3 leading-relaxed">
                            <Check size={18} className="shrink-0 mt-1 text-heading" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-2xl">Planning your engagement</h4>
                      <p className="leading-relaxed">{audience.formats}</p>
                      <p className="leading-relaxed">{audience.inquiry}</p>
                      <div className="flex flex-wrap gap-3">
                        <Button
                          asChild
                          size="lg"
                          className="h-auto min-h-12 rounded-full whitespace-normal bg-sand text-sand-foreground hover:bg-sand/90"
                        >
                          <Link to="/contact">Invite Jess to Speak</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="h-12 rounded-full">
                          <a
                            href={`mailto:info@sparkspsychotherapy.ca?subject=${encodeURIComponent(`Speaking inquiry: ${audience.label}`)}`}
                          >
                            <Mail />
                            Email Jess
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </details>
            );
          })}
        </div>
      </section>
      <section id="speaking-topics" className="scroll-mt-8 bg-secondary/25 py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="uppercase tracking-widest text-xs text-muted-foreground mb-4">
            Speaking Topics
          </p>
          <h2 className="text-3xl md:text-4xl max-w-2xl mb-8">
            Topics That Matter. Conversations That Make a Difference.
          </h2>
          <Accordion type="multiple" className="grid md:grid-cols-2 gap-x-12 items-start">
            {speakingTopics.map((topic, index) => (
              <AccordionItem value={String(index)} key={topic.title}>
                <AccordionTrigger className="gap-4 py-7 text-xl lg:text-2xl leading-snug hover:no-underline">
                  <span className="text-base text-muted-foreground shrink-0">0{index + 1}</span>
                  <span className="flex-1 min-w-0">{topic.title}</span>
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  <ul className="space-y-4 pl-10">
                    {topic.points.map((point) => (
                      <li key={point} className="flex gap-3 leading-relaxed">
                        <Check size={18} className="shrink-0 mt-1 text-heading" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <h2 className="text-3xl md:text-4xl mb-4">Different Formats. One Meaningful Purpose.</h2>
        <p className="max-w-3xl leading-relaxed mb-10">
          Every audience and event is different. Jess offers flexible speaking and facilitation
          formats that can be adapted to your organization's needs, audience and objectives.
        </p>
        <div className="divide-y divide-border">
          {speakingFormats.map((format, index) => (
            <article
              key={format.title}
              className="grid md:grid-cols-[60px_1fr_1.5fr] gap-3 md:gap-8 py-7"
            >
              <span className="text-muted-foreground text-sm">0{index + 1}</span>
              <h3 className="text-2xl">{format.title}</h3>
              <div className="space-y-3">
                <p className="leading-relaxed">{format.description}</p>
                {format.duration && (
                  <p className="text-sm text-heading font-medium">{format.duration}</p>
                )}
              </div>
            </article>
          ))}
        </div>
        <p className="flex gap-3 items-center text-sm text-muted-foreground mt-8">
          <Globe2 size={20} className="shrink-0" />
          Engagements can be arranged in person or virtually, subject to availability.
        </p>
      </section>
      <section className="border-y border-border py-16">
        <div className="mx-auto max-w-3xl px-6 text-center space-y-5">
          <h2 className="text-3xl md:text-4xl">Creating Impact Through Meaningful Engagements</h2>
          <p className="leading-relaxed">
            Every audience is different. Jess takes a thoughtful and collaborative approach to
            creating engagements that reflect the needs, interests and objectives of each group.
          </p>
          {/* Add verified engagements, photos, videos, logos and testimonials here when supplied. */}
        </div>
      </section>
    </div>
  );
}
