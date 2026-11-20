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
    specialties: ["Anxiety & Stress", "Emotional Wellness", "Couples Counselling"],
    initials: "JS",
    gradient: "from-[oklch(0.86_0.06_165)] to-[oklch(0.9_0.05_95)]",
  },
];
