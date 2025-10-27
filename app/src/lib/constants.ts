export type Cta = {
  label: string;
  href: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: Cta;
  secondaryCta: Cta;
  metrics: { label: string; value: string }[];
};

export type LandingSection = {
  id: string;
  title: string;
  summary: string;
  anchorLabel: string;
};

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar?: string;
};

export type Benefit = {
  title: string;
  description: string;
  icon: string; // Lucide icon name
};

export type ComparisonPoint = {
  text: string;
};

export type HowItWorksStep = {
  number: number;
  title: string;
  description: string;
};

export type NavigationLink = {
  label: string;
  href: string;
};

export type PricingTier = {
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export type FaqItem = {
  question: string;
  answer: string;
};

// Navigation
export const navigationLinks: NavigationLink[] = [
  { label: "Home", href: "#hero" },
  { label: "Press", href: "/press" },
  { label: "Login", href: "/login" },
];

// Hero Section
export const heroContent: HeroContent = {
  eyebrow: "",
  title: "Get more second dates and build real connections.",
  description: "Meet Juliet: an AI dating coach that helps you practice real first-date conversations, get instant feedback, and prepare for your next date—so you can build meaningful connections.",
  primaryCta: { label: "Get Early Access", href: "#waitlist" },
  secondaryCta: { label: "", href: "" },
  metrics: [],
};

// Social Proof Section
export const testimonials: Testimonial[] = [
  {
    name: "Evan",
    role: "Tech",
    company: "",
    quote: "As an engineer, I was great at details and bad at small talk. Juliet made the first five minutes easy. I'm getting more second dates.",
  },
  {
    name: "Melissa",
    role: "Product Manager",
    company: "",
    quote: "I stopped overthinking. The voice drills and debriefs were gold. I feel calm and present now.",
  },
  {
    name: "Jordan",
    role: "Management Consulting",
    company: "",
    quote: "Upcoming Date Prep was scary accurate. I knew what to say and when to listen.",
  },
];

// Problem vs Solution Section
export const oldWayPoints: ComparisonPoint[] = [
  { text: "Awkward pauses and stalled small talk" },
  { text: "Endless swiping, few real dates" },
  { text: "No feedback, so mistakes repeat" },
  { text: "Overthinking and low confidence" },
  { text: "Time wasted on bad prep" },
];

export const newWayPoints: ComparisonPoint[] = [
  { text: "Real-time voice practice with near-instant replies (<150ms target)" },
  { text: "Warm AI coaching and exact phrasing tips" },
  { text: '"Upcoming Date Prep" that mimics who you\'re meeting' },
  { text: "Measurable progress and session memory across weeks" },
  { text: "Practice with your type in fun, real scenarios" },
];

// Benefits Section
export const benefits: Benefit[] = [
  {
    title: "Keep the conversation flowing",
    description: "Practice real scenarios so you never run out of things to say.",
    icon: "MessageCircle"
  },
  {
    title: "Translate practice to real dates",
    description: "Build confidence that carries over to your actual dates.",
    icon: "TrendingUp"
  },
  {
    title: "Get personalized coaching",
    description: "Receive tailored feedback that helps you improve with each session.",
    icon: "Sparkles"
  },
  {
    title: "Track second-date uplift",
    description: "See measurable progress in your dating success over time.",
    icon: "Heart"
  },
];

// How It Works Section
export const howItWorksSteps: HowItWorksStep[] = [
  {
    number: 1,
    title: "Fast onboarding + goal setting",
    description: "Quick setup to understand your dating goals and preferences.",
  },
  {
    number: 2,
    title: "Choose your Dating Practice Partner",
    description: "Select your ideal practice partner and do daily voice practice with real scenarios.",
  },
  {
    number: 3,
    title: "Upcoming Date Prep",
    description: "Get personalized prep that mimics the real person and situation you're about to meet.",
  },
  {
    number: 4,
    title: "Smart debrief with feedback",
    description: "Receive personalized actionable feedback, progress tracking, and weekly challenges.",
  },
];

// Landing Sections (for navigation)
export const landingSections: LandingSection[] = [];

// Pricing (Story 3)
export const pricingTiers: PricingTier[] = [];

// FAQ (Story 3)
export const faqs: FaqItem[] = [];
