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

export const heroContent: HeroContent = {
  eyebrow: "Customer research accelerator",
  title: "Modern relationship insights for high-converting experiences",
  description:
    "Juliet syncs qualitative research, live experiments, and marketing data into a single source of truth so product and growth teams ship with confidence.",
  primaryCta: { label: "Book a live demo", href: "#contact" },
  secondaryCta: { label: "Download brief", href: "/juliet-brief.pdf" },
  metrics: [
    { label: "Time saved per launch", value: "36 hrs" },
    { label: "Research sources connected", value: "12" },
    { label: "Customer interviews indexed", value: "5k+" },
  ],
};

export const landingSections: LandingSection[] = [
  {
    id: "social-proof",
    title: "Trusted by dating, wellness, and lifestyle teams",
    summary:
      "Analysts, lifecycle marketers, and founders at early-stage startups rely on Juliet to validate messaging before committing engineering time.",
    anchorLabel: "Explore proof",
  },
  {
    id: "problem-solution",
    title: "Fragmented customer signals slow launches",
    summary:
      "Juliet harmonizes surveys, CRM notes, and behavior data into ready-to-ship playbooks so every sprint starts with clarity.",
    anchorLabel: "See how we solve it",
  },
  {
    id: "benefits",
    title: "What teams unlock with Juliet",
    summary:
      "Reusable interview libraries, adaptive segmentation, and shareable playbooks keep GTM, product, and CX aligned week to week.",
    anchorLabel: "Review benefits",
  },
  {
    id: "how-it-works",
    title: "Three steps to publish insight-backed campaigns",
    summary:
      "Import data, enrich with AI-assisted tagging, then publish storyline decks or embed snippets directly into Figma and Notion.",
    anchorLabel: "Understand the flow",
  },
  {
    id: "pricing",
    title: "Pricing that scales from first launch to full lifecycle",
    summary:
      "Predictable plans keep experimentation moving. Start with guided onboarding, then add seats and interview credits as you grow.",
    anchorLabel: "Compare plans",
  },
  {
    id: "faq",
    title: "Questions teams ask before inviting Juliet",
    summary:
      "From security to implementation timelines, we documented the answers so you can unblock procurement quickly.",
    anchorLabel: "View FAQ",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Nyla Patel",
    role: "Lifecycle Lead",
    company: "Kindred",
    quote:
      "Juliet gave us a single view of every conversation we had with customers. Launch reviews went from two weeks to two days.",
  },
  {
    name: "Devon Brooks",
    role: "Co-founder",
    company: "Northstar",
    quote:
      "Before Juliet we spent hours stitching feedback from calls, forms, and community. Now the whole team moves with the same evidence base.",
  },
];

export const pricingTiers: PricingTier[] = [
  {
    name: "Seed",
    price: "$1.2k",
    cadence: "/mo",
    description: "Guided onboarding for teams shipping their first insight-led journeys.",
    features: [
      "Up to 5 seats",
      "Interview transcription included",
      "Automated research summaries",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$2.8k",
    cadence: "/mo",
    description: "Advanced segmentation, QA workflows, and white-glove research ops support.",
    features: [
      "Unlimited seats",
      "Qual + quant data sync",
      "Dedicated partner manager",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    description: "Security reviews, custom data retention policies, and private cloud deployment options.",
    features: [
      "SOC 2 Type II",
      "Priority roadmap influence",
      "Field enablement library",
    ],
  },
];

export const faqs: FaqItem[] = [
  {
    question: "How long does onboarding take?",
    answer:
      "Most teams connect their existing research sources and publish their first insight playbook in under three weeks with our guided setup.",
  },
  {
    question: "Do you support self-hosted data stores?",
    answer:
      "Yes. Juliet syncs with Snowflake, BigQuery, Airtable, and most CRMs through secure service tokens managed in your own vault.",
  },
  {
    question: "What about compliance and privacy?",
    answer:
      "We are built for regulated industries with granular permissioning, full audit logs, and optional redaction workflows for sensitive interviews.",
  },
];
