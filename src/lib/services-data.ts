import { Brain, CloudRain, Sparkles, Heart, UserRound, HandHeart, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import teenTherapy from "@/assets/teen-therapy.jpg";
import couplesCounselling from "@/assets/couples-counselling.jpg";
import emotionalWellness from "@/assets/emotional-wellness.jpg";
import adoptionCounselling from "@/assets/adoption-counselling.jpg";

export type Service = {
  slug: string;
  title: string;
  short: string;
  long: string;
  icon: LucideIcon;
  gradient: string;
  /** Real photo shown in the service hero. Falls back to the gradient + icon when unset. */
  image?: string;
  overview: string[];
  signs: string[];
  approach: string[];
};

const commonApproach = [
  "A warm, unhurried space where nothing you bring is too big or too small.",
  "Evidence-informed modalities woven with relational, body-aware care.",
  "Practical tools you can bring into daily life between sessions.",
  "A pace that honours what your nervous system is ready for.",
];

export const services: Service[] = [
  {
    slug: "anxiety-stress",
    title: "Anxiety & Stress",
    short:
      "Quiet a busy mind, ease the weight of worry, and reconnect with a steadier sense of calm.",
    long: "Anxiety can show up as racing thoughts, tight shoulders, sleepless nights, or a constant sense of not-enoughness. Together we slow things down, understand what your nervous system is protecting you from, and build practical, embodied tools to move through daily life with more ease.",
    icon: Brain,
    gradient: "from-[oklch(0.90_0.05_165)] to-[oklch(0.94_0.03_95)]",
    overview: [
      "Anxiety is your system trying to keep you safe, often working overtime long after the original threat has passed. It can feel like a background hum of worry or an overwhelming wave that arrives without warning.",
      "Stress builds when the demands on you outpace the resources you feel you have. Left unaddressed, it shapes your sleep, focus, relationships, and sense of self.",
      "In therapy we make room to understand what your anxiety is protecting you from, and gently teach your body and mind that ease is safe again.",
    ],
    signs: [
      "Racing thoughts or a mind that won't switch off",
      "Difficulty falling or staying asleep",
      "Tight chest, shallow breathing, or a knot in your stomach",
      "Avoiding situations, decisions, or difficult conversations",
      "Feeling on-edge, irritable, or easily overwhelmed",
      "Persistent worry about the future or replaying the past",
    ],
    approach: commonApproach,
  },
  {
    slug: "depression",
    title: "Depression",
    short: "Find your way back to yourself when everything feels heavy, flat, or far away.",
    long: "Depression can flatten color from life and make ordinary tasks feel monumental. Therapy offers a warm, patient space to make sense of what's underneath, and gentle steps back toward meaning, connection, and hope.",
    icon: CloudRain,
    gradient: "from-[oklch(0.90_0.04_260)] to-[oklch(0.94_0.03_200)]",
    overview: [
      "Depression can quietly drain the colour from life. Ordinary tasks start to feel monumental, and the things that once brought joy begin to feel distant or dull.",
      "It is not a matter of willpower or a mood you can simply push through. Depression is a signal that something inside is asking for care.",
      "Therapy offers a patient, compassionate space to understand what's underneath and take small, sustainable steps back toward meaning and connection.",
    ],
    signs: [
      "Persistent low mood or a sense of heaviness",
      "Loss of interest in things you used to enjoy",
      "Fatigue, low energy, or difficulty getting out of bed",
      "Changes in appetite or sleep",
      "Feelings of worthlessness, guilt, or self-criticism",
      "Difficulty concentrating or making decisions",
    ],
    approach: commonApproach,
  },
  {
    slug: "emotional-wellness",
    title: "Emotional Wellness",
    short:
      "Build lasting self-trust, self-compassion, and skills for the whole emotional landscape.",
    long: "Emotional wellness is not the absence of hard feelings, it is your relationship with them. We build the vocabulary, tools, and inner steadiness to work with every emotion as information rather than an emergency.",
    icon: Sparkles,
    gradient: "from-[oklch(0.92_0.05_95)] to-[oklch(0.94_0.03_165)]",
    image: emotionalWellness,
    overview: [
      "Emotional wellness is not the absence of hard feelings, it is the quality of your relationship with them.",
      "When we learn to meet our inner world with curiosity instead of judgment, emotions become information rather than emergencies.",
      "This work builds the vocabulary, tools, and inner steadiness to move through life's full emotional landscape.",
    ],
    signs: [
      "Feeling emotionally reactive or easily flooded",
      "Difficulty naming or expressing what you feel",
      "A harsh inner critic",
      "Struggling to set or hold boundaries",
      "Feeling disconnected from your own needs",
      "Wanting a deeper sense of self-trust",
    ],
    approach: commonApproach,
  },
  {
    slug: "couples-counselling",
    title: "Couples Counselling",
    short: "Reconnect, repair, and build new cycles of understanding together.",
    long: "When distance, conflict, or old wounds have taken root, we work together to soften the patterns beneath the arguments, restore safety, and grow a stronger, more honest bond.",
    icon: Heart,
    gradient: "from-[oklch(0.92_0.05_20)] to-[oklch(0.94_0.03_60)]",
    image: couplesCounselling,
    overview: [
      "Every couple has a cycle, a pattern that emerges when connection feels threatened. Over time these cycles can harden into distance, resentment, or repeated conflict.",
      "Couples work is not about picking a side. It is about understanding the softer feelings beneath the pattern and building new ways of turning toward each other.",
      "Whether you are in crisis or simply wanting to grow, this is a space to rediscover safety, honesty, and warmth together.",
    ],
    signs: [
      "The same arguments repeating on loop",
      "Emotional or physical distance",
      "Difficulty communicating without escalation",
      "Broken trust or unresolved hurt",
      "Life transitions putting new pressure on the relationship",
      "Wanting to grow closer but not sure how",
    ],
    approach: commonApproach,
  },
  {
    slug: "teen-therapy",
    title: "Teen Therapy",
    short: "Real conversations for teens navigating identity, pressure, and belonging.",
    long: "Adolescence is full of change and complexity. We create a space that respects your teen's voice, supports their emotional world, and helps them build the self-trust to move through it.",
    icon: UserRound,
    gradient: "from-[oklch(0.92_0.05_190)] to-[oklch(0.94_0.03_95)]",
    image: teenTherapy,
    overview: [
      "Adolescence is a season of enormous change: identity, relationships, pressure, and possibility all colliding at once.",
      "Teens deserve a space that respects their voice and meets them without judgment.",
      "Together we work on the emotional skills, self-understanding, and steadiness they need to move through this chapter well.",
    ],
    signs: [
      "Anxiety, low mood, or overwhelm",
      "Withdrawal from family or friends",
      "Academic pressure or school avoidance",
      "Identity questions and self-worth struggles",
      "Conflict at home",
      "Impact of social media or peer dynamics",
    ],
    approach: commonApproach,
  },
  {
    slug: "adoption-counselling",
    title: "Adoption Counselling",
    short: "Support for every point of the adoption journey, before, during, and after.",
    long: "Adoption weaves love, loss, identity, and belonging into a lifelong story. Whether you are an adoptee, adoptive parent, or birth parent, sessions honour the complexity of your experience with warmth and care.",
    icon: HandHeart,
    gradient: "from-[oklch(0.92_0.05_40)] to-[oklch(0.94_0.03_140)]",
    image: adoptionCounselling,
    overview: [
      "Adoption weaves love, loss, identity, and belonging into a lifelong story.",
      "Whether you are an adoptee, an adoptive parent, or a birth parent, your experience deserves a space that honours its full complexity.",
      "Together we make room for the joy, the grief, and everything in between.",
    ],
    signs: [
      "Identity questions or a sense of not fully belonging",
      "Grief that surfaces around milestones or reunions",
      "Attachment struggles within the family",
      "Feeling misunderstood by those outside the adoption experience",
      "Navigating open adoption or contact",
      "Wanting support before, during, or after placement",
    ],
    approach: commonApproach,
  },
  {
    slug: "family-therapy",
    title: "Family Therapy",
    short: "Repair connection and communication across the whole family system.",
    long: "Families are living systems. Together we listen for the patterns beneath the friction and support each member in being heard, while building new ways of relating that hold everyone with more care.",
    icon: Users,
    gradient: "from-[oklch(0.92_0.05_165)] to-[oklch(0.94_0.03_60)]",
    overview: [
      "Families are living systems. When one part of the system is hurting, the whole system feels it.",
      "This work listens for the patterns beneath the friction and supports each member in being heard.",
      "Together we build new ways of relating that hold everyone with more care.",
    ],
    signs: [
      "Frequent conflict or communication breakdowns",
      "A child or teen whose struggles are affecting the whole home",
      "Blended-family or step-family transitions",
      "Grief, loss, or major life change",
      "Feeling disconnected from one another",
      "Wanting a healthier rhythm together",
    ],
    approach: commonApproach,
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
