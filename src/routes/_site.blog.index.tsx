import { createFileRoute, Link } from "@tanstack/react-router";
import { blogPosts } from "@/lib/blog-data";

export const Route = createFileRoute("/_site/blog/")({
  head: () => ({
    meta: [
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
      { title: "Blog | Sparks Psychotherapy Services" },
      { property: "og:title", content: "Blog | Sparks Psychotherapy Services" },
      {
        property: "og:description",
        content:
          "Reflections and resources on emotions, relationships, and the inner work of healing.",
      },
      {
        name: "description",
        content:
          "Reflections and resources on emotions, relationships, and the inner work of healing.",
      },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 py-10 md:py-16 text-center space-y-4">
        <h1 className="text-6xl md:text-7xl font-serif">From the Journal</h1>
        <p className="text-2xl leading-relaxed text-foreground/80">
          Reflections on emotions, relationships, and the slow work of feeling more like yourself.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogPosts.map((p) => (
          <article
            key={p.slug}
            className="bg-card border border-border rounded-3xl overflow-hidden shadow-soft flex flex-col"
          >
            <Link
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="block aspect-[4/3] overflow-hidden"
            >
              <img
                src={p.image}
                alt={p.imageAlt}
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </Link>
            <div className="p-12 flex flex-col flex-1">
              <time
                dateTime={p.date}
                className="uppercase tracking-widest text-xs text-foreground/60"
              >
                {p.dateLabel}
              </time>
              <h2 className="text-3xl mt-3 mb-4 leading-snug">{p.title}</h2>
              <p className="text-2xl leading-relaxed text-foreground/75 flex-1">{p.excerpt}</p>
              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="mt-6 uppercase tracking-widest text-xs text-primary border-b border-primary pb-1 self-start"
              >
                Read more
              </Link>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
