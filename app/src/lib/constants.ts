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
  eyebrow: "",
  title: "",
  description: "",
  primaryCta: { label: "", href: "" },
  secondaryCta: { label: "", href: "" },
  metrics: [],
};

export const landingSections: LandingSection[] = [];

export const testimonials: Testimonial[] = [];

export const pricingTiers: PricingTier[] = [];

export const faqs: FaqItem[] = [];
