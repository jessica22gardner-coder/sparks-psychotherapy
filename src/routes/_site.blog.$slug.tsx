import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getBlogPost, blogPosts } from "@/lib/blog-data";

export const Route = createFileRoute("/_site/blog/$slug")({
  loader: ({ params }) => {
    const post = getBlogPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { name: "twitter:card", content: "summary_large_image" },
          { title: "Post not found | Sparks Psychotherapy Services" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} | Sparks Psychotherapy Services` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: BlogPostPage,
  notFoundComponent: BlogNotFound,
  errorComponent: BlogNotFound,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const others = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <article className="mx-auto max-w-3xl px-6 pt-16 md:pt-24 pb-16">
        <Link to="/blog" className="uppercase tracking-widest text-xs text-primary">
          ← Back to Journal
        </Link>
        <time
          dateTime={post.date}
          className="block mt-8 uppercase tracking-widest text-xs text-foreground/60"
        >
          {post.dateLabel}
        </time>
        <h1 className="text-4xl md:text-5xl font-serif mt-3 leading-tight">{post.title}</h1>

        <div className="mt-10 aspect-[16/9] rounded-3xl overflow-hidden shadow-soft">
          <img
            src={post.image}
            alt={post.imageAlt}
            width={1920}
            height={1080}
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="mt-10 space-y-6 text-lg text-foreground/85 leading-relaxed">
          {post.content.map((p: string, i: number) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </article>

      {others.length > 0 && (
        <section className="bg-secondary/25 py-16">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-2xl font-serif mb-8">Keep reading</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="bg-card border border-border rounded-3xl overflow-hidden shadow-soft flex flex-col hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.imageAlt}
                      loading="lazy"
                      width={1024}
                      height={576}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <time className="uppercase tracking-widest text-xs text-foreground/60">
                      {p.dateLabel}
                    </time>
                    <h3 className="text-xl mt-2">{p.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function BlogNotFound() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-24 text-center space-y-6">
      <h1 className="text-4xl font-serif">Post not found</h1>
      <p className="text-foreground/75">
        The article you're looking for isn't here. Head back to the journal to browse the latest
        reflections.
      </p>
      <Link
        to="/blog"
        className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-full uppercase tracking-widest text-xs"
      >
        Back to Journal
      </Link>
    </section>
  );
}
