import {
  Brain,
  ShieldCheck,
  CloudRain,
  Sparkles,
  Leaf,
  Utensils,
  Heart,
  Baby,
  UserRound,
  Puzzle,
  HandHeart,
  Users,
  Plane,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

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
    slug: "trauma-ptsd",
    title: "Trauma & PTSD",
    short: "Compassionate, paced work to gently move through what has felt too big to carry alone.",
    long: "Trauma lives in the body long after the events themselves. Using relational and evidence-based approaches, we work at the pace your system can tolerate, noticing, softening, and integrating experiences that have kept you on high alert.",
    icon: ShieldCheck,
    gradient: "from-[oklch(0.90_0.04_220)] to-[oklch(0.94_0.03_165)]",
    overview: [
      "Trauma is what happens inside us when an experience overwhelms our capacity to cope. It can come from a single event or from years of ongoing stress, and it lives in the body long after the story is over.",
      "PTSD and complex trauma often show up as hypervigilance, numbness, or a sense of being disconnected from yourself and the people around you.",
      "Together we work at the pace your system can tolerate, softening the grip of the past so it stops shaping your present.",
    ],
    signs: [
      "Flashbacks, intrusive memories, or nightmares",
      "Feeling constantly on guard or easily startled",
      "Emotional numbness or feeling disconnected from your body",
      "Avoiding places, people, or conversations that stir memories",
      "Difficulty trusting yourself or others",
      "Waves of shame, guilt, or anger that feel out of proportion",
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
    slug: "addiction-recovery",
    title: "Addiction Recovery",
    short: "Non-judgmental, whole-person support alongside the courage recovery asks of you.",
    long: "Recovery is more than stopping a behaviour, it is learning to meet the pain the behaviour helped you survive. Sessions offer a space without shame to understand your patterns, strengthen supports, and build a life that feels worth showing up for.",
    icon: Leaf,
    gradient: "from-[oklch(0.92_0.05_140)] to-[oklch(0.94_0.03_95)]",
    overview: [
      "Addiction is rarely just about the substance or behaviour. It is often a way of surviving pain, numbing overwhelm, or reaching for connection.",
      "Recovery asks for tremendous courage. It deserves a space free of shame, where the whole of you can be met.",
      "Together we explore the roots of your patterns, strengthen supports, and build a life that feels worth showing up for.",
    ],
    signs: [
      "Using substances or behaviours to cope with difficult feelings",
      "Feeling out of control around a specific habit",
      "Shame or secrecy around your use",
      "Impact on work, relationships, or health",
      "Repeated attempts to stop that don't hold",
      "A quiet sense that something needs to change",
    ],
    approach: commonApproach,
  },
  {
    slug: "eating-disorders",
    title: "Eating Disorders",
    short: "Gentle, informed care for your relationship with food, body, and self.",
    long: "Eating struggles are rarely about food. Together we explore the deeper emotional threads, control, worth, safety, belonging, and rebuild a kinder, more trusting relationship with your body.",
    icon: Utensils,
    gradient: "from-[oklch(0.92_0.05_50)] to-[oklch(0.95_0.03_95)]",
    overview: [
      "Struggles with food and body are rarely about food and body alone. Underneath there are often threads of control, worth, safety, and belonging.",
      "This work is gentle, weight-inclusive, and paced with care.",
      "Together we rebuild a kinder, more trusting relationship with your body and the emotional world it carries.",
    ],
    signs: [
      "Preoccupation with food, weight, or body image",
      "Restrictive, binge, or purge behaviours",
      "Guilt or shame around eating",
      "Rigid rules around meals or movement",
      "Using food to soothe or avoid emotions",
      "A body you feel disconnected from or at war with",
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
    slug: "child-therapy",
    title: "Child Therapy",
    short: "A warm, playful space for children to be understood and supported.",
    long: "Children process the world through play, story, and relationship. Sessions provide a safe space to express what words can't yet reach, with steady collaboration alongside caregivers.",
    icon: Baby,
    gradient: "from-[oklch(0.93_0.05_75)] to-[oklch(0.95_0.03_165)]",
    overview: [
      "Children process the world through play, story, and relationship long before they have the words for what they feel.",
      "Sessions offer a safe, developmentally attuned space where your child can express what words can't yet reach.",
      "Caregivers are a valued part of the work, with regular check-ins and gentle guidance for home.",
    ],
    signs: [
      "Big feelings, meltdowns, or difficulty self-regulating",
      "Withdrawal, sadness, or worry",
      "Trouble sleeping or new fears",
      "Struggles at school or with friends",
      "Changes at home, moves, loss, or family transitions",
      "Behaviour that feels out of character",
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
    slug: "play-therapy",
    title: "Play Therapy",
    short: "Play is the language of childhood, and a powerful path to healing.",
    long: "Through structured and expressive play, children work through feelings and experiences that are hard to name. This modality is especially supportive for anxiety, big transitions, and early experiences of overwhelm.",
    icon: Puzzle,
    gradient: "from-[oklch(0.93_0.05_115)] to-[oklch(0.95_0.03_75)]",
    overview: [
      "Play is the natural language of childhood, and a powerful path to healing.",
      "Through structured and expressive play, children work through feelings and experiences that are hard to name.",
      "This modality is especially supportive for anxiety, big transitions, grief, and early experiences of overwhelm.",
    ],
    signs: [
      "Difficulty expressing feelings in words",
      "Recent loss, move, or family change",
      "Anxiety, fears, or sleep struggles",
      "Behavioural changes at home or school",
      "Experiences of overwhelm or trauma",
      "A sense that your child is holding something they can't share",
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
  {
    slug: "fear-of-flying-therapy",
    title: "Fear of Flying Therapy",
    short: "Focused, practical support to help you board and travel with more confidence.",
    long: "Fear of flying often blends anxiety, sensory overwhelm, and unresolved experiences of feeling unsafe. Using tailored, step-by-step strategies, we work toward a more grounded and manageable flying experience.",
    icon: Plane,
    gradient: "from-[oklch(0.92_0.05_240)] to-[oklch(0.95_0.03_200)]",
    overview: [
      "Fear of flying often blends anxiety, sensory overwhelm, and unresolved experiences of feeling unsafe.",
      "This focused work uses tailored, step-by-step strategies to help you regulate before, during, and after a flight.",
      "The goal is not to erase every feeling, but to help you travel with more confidence and choice.",
    ],
    signs: [
      "Dread in the days or weeks leading up to a flight",
      "Panic symptoms at the airport or on board",
      "Avoiding travel that matters to you",
      "Hyperfocus on turbulence, sounds, or safety information",
      "Reliance on substances to get through a flight",
      "Wanting to reclaim travel for work, family, or joy",
    ],
    approach: commonApproach,
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
