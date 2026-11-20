import emotionsImg from "@/assets/blog-emotions.jpg";
import peaceImg from "@/assets/blog-peace.jpg";
import selfTrustImg from "@/assets/blog-selftrust.jpg";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  dateLabel: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "when-emotions-feel-too-big-to-name",
    title: "When Emotions Feel Too Big to Name",
    date: "2026-05-14",
    dateLabel: "May 14, 2026",
    excerpt:
      "A gentle starting point for noticing what's underneath overwhelm, and what might help.",
    image: emotionsImg,
    imageAlt: "An open journal and warm mug on a linen chair in soft morning light.",
    content: [
      "There are seasons when feelings arrive faster than words. You know something is happening inside, but the moment you try to describe it, the shape slips away. If that is you right now, you are not broken. You are human, meeting an experience that has outgrown your current vocabulary.",
      'Try this: instead of asking, "What is wrong with me?" ask, "What is this feeling trying to protect?" Anger often guards a boundary. Sadness often marks a loss we have not been allowed to grieve. Anxiety frequently points to a decision we have been avoiding. The feeling is a messenger, not the enemy.',
      "In therapy, we slow the moment down together. We notice where the feeling lives in the body, what it is asking for, and what small next step would honour it. Naming does not fix everything, but it changes the relationship. What was once a wave that swept you away becomes a wave you can watch, and eventually ride.",
      "If you are in that place today, take one gentle breath. Put a hand on your chest. Tell yourself the truth in the simplest sentence you can find. Even three words is enough to begin.",
    ],
  },
  {
    slug: "why-we-quiet-ourselves-to-keep-the-peace",
    title: "Why We Quiet Ourselves to Keep the Peace",
    date: "2026-04-02",
    dateLabel: "April 2, 2026",
    excerpt: "Exploring early patterns of caretaking and how they shape adult relationships.",
    image: peaceImg,
    imageAlt: "Two ceramic cups on a wooden table by a window with green trees.",
    content: [
      "Many of us learned early that our safety depended on other people's moods. We watched, we adjusted, we softened our edges. Over time, keeping the peace became a reflex, not a choice.",
      "As adults, this pattern can show up in tender ways. You say yes when your body says no. You minimise your needs so no one feels burdened. You feel a flash of resentment and then swallow it, unsure where it even came from.",
      "The work is not to become louder overnight. The work is to notice, with curiosity rather than judgment, that a small voice inside you has been holding back. That voice is not weak. It is wise. It has kept relationships intact through impossible conditions.",
      "Healing begins when we let that voice speak in safer rooms first: a therapist, a trusted friend, a page in a journal. Peace that requires your disappearance is not peace. Real peace has room for all of you.",
    ],
  },
  {
    slug: "building-self-trust-one-small-choice-at-a-time",
    title: "Building Self-Trust, One Small Choice at a Time",
    date: "2026-02-20",
    dateLabel: "February 20, 2026",
    excerpt: "Self-trust isn't a feeling we wait for, it's a practice we grow.",
    image: selfTrustImg,
    imageAlt: "Hands gently holding a small green plant sprout in warm light.",
    content: [
      "Self-trust is often described as a feeling, but in practice it is closer to a muscle. It is built through hundreds of small, quiet moments where you keep a promise to yourself.",
      'Drinking a glass of water when you notice you are thirsty. Going to bed when you said you would. Saying, "Let me think about that," instead of an automatic yes. None of these are dramatic. All of them are data your nervous system is collecting about whether you can be counted on.',
      "If self-trust feels foreign, start absurdly small. Choose one promise you know you can keep this week, and keep it. Then notice what shifts. You are teaching yourself, gently, that you are someone who shows up.",
      "This is the soil that every other kind of growth needs. Boundaries, creativity, love: they all rest on the quiet certainty that you will not abandon yourself when it matters.",
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
