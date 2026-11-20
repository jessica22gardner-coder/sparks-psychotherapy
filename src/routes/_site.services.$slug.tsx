import { createFileRoute, notFound } from "@tanstack/react-router";
import { CtaButton } from "@/components/site-layout";
import { getService } from "@/lib/services-data";
import { Check, Leaf } from "lucide-react";

export const Route = createFileRoute("/_site/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { slug: service.slug };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { name: "twitter:card", content: "summary_large_image" },
          { property: "og:type", content: "website" },
          { title: "Service not found | Sparks Psychotherapy" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const service = getService(loaderData.slug);
    if (!service) {
      return { meta: [{ title: "Service not found | Sparks Psychotherapy" }] };
    }
    return {
      meta: [
        { title: `${service.title} | Sparks Psychotherapy` },
        { name: "description", content: service.short },
        { property: "og:title", content: `${service.title} | Sparks Psychotherapy` },
        { property: "og:description", content: service.short },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ServiceDetail,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center space-y-4">
      <h1 className="text-4xl font-serif">Service not found</h1>
      <p className="text-foreground/80">The service you're looking for doesn't exist yet.</p>
      <CtaButton to="/">Back to Home</CtaButton>
    </div>
  ),
});

function ServiceDetail() {
  const { slug } = Route.useLoaderData();
  const service = getService(slug);
  if (!service) throw notFound();
  const Icon = service.icon;

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-24 grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
        <div
          className={`aspect-square overflow-hidden rounded-3xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-soft`}
        >
          {service.image ? (
            <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
          ) : (
            <Icon size={120} strokeWidth={1.1} className="text-heading opacity-85" />
          )}
        </div>
        <div className="space-y-5">
          <p className="text-sm tracking-widest uppercase text-muted-foreground">Area of Care</p>
          <h1 className="text-4xl md:text-5xl font-serif">{service.title}</h1>
          <p className="text-lg text-foreground/80">{service.short}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <CtaButton to="/contact">Reach Out to Us</CtaButton>
          </div>
        </div>
      </section>

      {/* Understanding */}
      <section className="bg-secondary/25 py-20">
        <div className="mx-auto max-w-3xl px-6 space-y-6">
          <p className="text-sm tracking-widest uppercase text-muted-foreground">
            Understanding {service.title}
          </p>
          <h2 className="text-3xl md:text-4xl">You are not alone in this.</h2>
          {service.overview.map((p: string, i: number) => (
            <p key={i} className="text-foreground/85 leading-relaxed text-lg">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Signs */}
      <section className="mx-auto max-w-5xl px-6 py-20 md:py-24">
        <div className="text-center space-y-4 mb-12">
          <p className="text-sm tracking-widest uppercase text-muted-foreground">
            What it can look like
          </p>
          <h2 className="text-3xl md:text-4xl">Signs and experiences</h2>
          <p className="text-foreground/75 max-w-2xl mx-auto">
            You might recognise some of these. You don't need to identify with all of them to reach
            out.
          </p>
        </div>
        <ul className="grid sm:grid-cols-2 gap-4">
          {service.signs.map((s: string) => (
            <li
              key={s}
              className="bg-card border border-border rounded-2xl px-6 py-5 flex gap-3 items-start shadow-soft"
            >
              <Check size={20} className="text-primary mt-0.5 shrink-0" strokeWidth={2} />
              <span className="text-foreground/85">{s}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* How therapy can help */}
      <section className="bg-secondary/25 py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center space-y-4 mb-12">
            <p className="text-sm tracking-widest uppercase text-muted-foreground">
              How therapy can help
            </p>
            <h2 className="text-3xl md:text-4xl">A path forward, together</h2>
            <p className="text-foreground/80 max-w-2xl mx-auto leading-relaxed">{service.long}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {service.approach.map((a: string) => (
              <div
                key={a}
                className="bg-card border border-border rounded-3xl p-7 shadow-soft flex gap-4"
              >
                <div className="w-11 h-11 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                  <Leaf size={20} className="text-primary" strokeWidth={1.5} />
                </div>
                <p className="text-foreground/85 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-6 py-20 md:py-24 text-center space-y-6">
        <h2 className="text-3xl md:text-4xl">Ready to take the next step?</h2>
        <p className="text-foreground/80 leading-relaxed">
          Sessions are offered in person and virtually across Ontario, and are paced to what your
          system is ready for. If you'd like to explore whether we're the right fit, we invite you
          to book a free 15-minute connection call.
        </p>
        <div className="pt-2">
          <CtaButton to="/contact">Reach Out to Us</CtaButton>
        </div>
      </section>
    </>
  );
}
