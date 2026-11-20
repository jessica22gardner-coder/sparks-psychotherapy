export type Therapist = {
  slug: string;
  name: string;
  credentials: string;
  bio: string;
  specialties: string[];
  initials: string;
  gradient: string;
};

export const therapists: Therapist[] = [
  {
    slug: "jess-sparks",
    name: "Jess Sparks",
    credentials: "Registered Psychotherapist (RP)",
    bio: "Jess brings over a decade of relational, developmental, and evidence-based practice to her work with adults. She creates a warm, non-judgmental space where clients can better understand their emotions and reconnect with themselves.",
    specialties: ["Anxiety & Stress", "Emotional Wellness", "Couples Counselling", "Trauma & PTSD"],
    initials: "JS",
    gradient: "from-[oklch(0.86_0.06_165)] to-[oklch(0.9_0.05_95)]",
  },
  {
    slug: "maya-chen",
    name: "Maya Chen",
    credentials: "Registered Psychotherapist (Qualifying)",
    bio: "Maya offers gentle, culturally attuned support for children, teens, and families. Her practice blends play-based work with attachment-informed approaches to help young clients feel safe, understood, and heard.",
    specialties: ["Child Therapy", "Teen Therapy", "Play Therapy", "Family Therapy"],
    initials: "MC",
    gradient: "from-[oklch(0.88_0.05_115)] to-[oklch(0.92_0.04_60)]",
  },
  {
    slug: "daniel-obi",
    name: "Daniel Obi",
    credentials: "MSW, Registered Social Worker",
    bio: "Daniel supports adults navigating depression, addiction recovery, and disordered eating. His approach is grounded, honest, and rooted in the belief that meaningful change happens through relationship.",
    specialties: ["Depression", "Addiction Recovery", "Eating Disorders", "Adoption Counselling"],
    initials: "DO",
    gradient: "from-[oklch(0.86_0.05_220)] to-[oklch(0.9_0.04_165)]",
  },
];
