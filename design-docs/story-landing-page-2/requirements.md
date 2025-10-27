## Feature: Core Sections Implementation

## Components Required:
- button — primary/secondary CTA styling shared by navbar and hero (available: `button` in @shadcn registry/ui)
- card — base surface for testimonials, benefit tiles, comparison panels (available: `card` in @shadcn registry/ui)
- avatar — customer photo support inside testimonial cards (available: `avatar` in @shadcn registry/ui)
- scroll-area — enables horizontal testimonial marquee/scroll on mobile (available: `scroll-area` in @shadcn registry/ui)
- navigation-menu — optional helper if navbar needs accessible grouped links (available: `navigation-menu` in @shadcn registry/ui)
- badge — highlights “Old Way” vs “New Way” labels within comparison section (available: `badge` in @shadcn registry/ui)
- separator — visual dividers for timeline connectors in How It Works (available: `separator` in @shadcn registry/ui)
- timeline pattern — required for four-step process but no direct component in registry; plan for custom layout using cards + separator
- marquee animation — testimonial rail requires custom motion/Framer Motion implementation (no `marquee` entry in registry)

## Component Hierarchy:
Page Layout
├── Navbar
│   ├── Logo
│   ├── NavLinks (optionally via `navigation-menu`)
│   └── CTA Button (`button` variant)
└── Main Content
    ├── HeroSection
    │   ├── Headline / Subheadline
    │   └── Primary CTA (`button`)
    ├── SocialProofSection
    │   ├── Scroll Area (`scroll-area` with motion marquee)
    │   └── TestimonialCard (`card` + `avatar`)
    ├── ProblemSolutionSection
    │   ├── ComparisonCard (`card`)
    │   └── Label Chips (`badge`)
    ├── BenefitsSection
    │   └── BenefitCard grid (`card` + Lucide icons)
    └── HowItWorksSection
        ├── Step Items (custom timeline using `card` + `separator`)
        └── CTA Button (`button`, optional secondary)
