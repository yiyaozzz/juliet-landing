<story-context id="bmad/bmm/workflows/4-implementation/story-context/template" v="1.0">
  <metadata>
    <epicId>epic-landing-page</epicId>
    <storyId>2</storyId>
    <title>Core Sections Implementation</title>
    <status>drafted</status>
    <generatedAt>2025-10-27</generatedAt>
    <generator>BMAD Story Context Workflow</generator>
    <sourceStoryPath>docs/stories/story-landing-page-2.md</sourceStoryPath>
  </metadata>

  <story>
    <asA>website visitor</asA>
    <iWant>to see the core value proposition through Hero, Social Proof, Problem/Solution, Benefits, and How It Works sections</iWant>
    <soThat>I can quickly understand what Juliet offers and why it's valuable to me</soThat>
    <tasks>
      <taskGroup name="Navbar (AC: #16, #17)">
        - Create components/layout/Navbar.tsx
        - Layout structure: logo (left), nav links ("Home · Press · Login") centered, CTA button ("Get Early Access") on right
        - Reuse Button component for CTA button (primary variant)
        - Implement sticky positioning with backdrop/blur treatment
        - Detect scroll to toggle drop shadow (Intersection Observer or scroll listener)
        - Ensure responsive behavior on mobile/tablet (stack or collapse as needed)
        - Verify keyboard navigation and focus styles
        - Import and render Navbar above Hero section in app/page.tsx
      </taskGroup>

      <taskGroup name="Reusable UI Components (AC: #10, #11)">
        - Create components/ui/Button.tsx with variants (Primary, Secondary)
        - Add smooth hover/active transitions (scale, shadow)
        - Create components/ui/Card.tsx (borderless design, shadow-soft, white background, rounded corners, generous padding, flexible content slots)
        - Test components in isolation
      </taskGroup>

      <taskGroup name="Hero Section (AC: #1, #2, #12)">
        - Create components/sections/HeroSection.tsx
        - Implement full viewport height layout (min-h-screen)
        - Background: bg-background with subtle radial gradient overlay
        - Center headline + subheadline + CTA button with generous spacing
        - CTA Button: Use Button component with primary variant
        - Typography: Large, bold headline with generous letter-spacing
        - Implement smooth scroll to next section on CTA click
        - Make responsive: stack on mobile, centered on desktop
        - Add content from constants.ts (hero headline, subheadline, CTA text)
        - Premium minimalist aesthetic: lots of white space, clean typography
      </taskGroup>

      <taskGroup name="Social Proof Section (AC: #3, #4)">
        - Create components/sections/SocialProofSection.tsx
        - Implement testimonial card layout with quote, name, role
        - Add avatar support to testimonial cards
        - Implement horizontal scroll for mobile (overflow-x-auto)
        - Implement grid layout for desktop (3 columns)
        - Add testimonial data to lib/constants.ts
        - Style cards using Card.tsx component
      </taskGroup>

      <taskGroup name="Problem vs Solution Section (AC: #5, #6)">
        - Create components/sections/ProblemSolutionSection.tsx
        - Implement two-column layout for desktop (grid-cols-2)
        - Implement stacked layout for mobile
        - Add "Old Way" content with appropriate color scheme (muted/gray tones)
        - Add "New Way" content with contrasting color scheme (vibrant/primary colors)
        - Add visual differentiators (icons, borders, backgrounds)
        - Add content to lib/constants.ts (old way vs new way points)
      </taskGroup>

      <taskGroup name="Benefits Section (AC: #7, #8)">
        - Create components/sections/BenefitsSection.tsx
        - Implement 2x2 grid for desktop (grid-cols-2 grid-rows-2)
        - Implement stacked layout for mobile (grid-cols-1)
        - Add benefit cards with icon + title + description
        - Implement hover effects (scale, shadow, border glow)
        - Use Lucide React icons for benefit icons
        - Add benefits data to lib/constants.ts (4 benefits with icons, titles, descriptions)
      </taskGroup>

      <taskGroup name="How It Works Section (AC: #9)">
        - Create components/sections/HowItWorksSection.tsx
        - Implement 4-step process visualization
        - Add numbered step indicators (1, 2, 3, 4)
        - Add step title and description for each step
        - Implement timeline/connecting lines between steps
        - Make responsive: vertical timeline on mobile, horizontal on desktop
        - Add steps data to lib/constants.ts (4 steps with numbers, titles, descriptions)
      </taskGroup>

      <taskGroup name="Content Integration (AC: #14)">
        - Update lib/constants.ts with all section content
        - Source copy for each section from docs/content-reference.md
        - Create TypeScript interfaces for each data structure
        - Verify all constants export correctly
      </taskGroup>

      <taskGroup name="Animations & Polish (AC: #13)">
        - Add Framer Motion animations to Hero (fade in, slide up)
        - Add stagger animations to testimonial cards
        - Add hover animations to benefit cards
        - Add scroll-triggered animations to sections (using Intersection Observer)
        - Test animations on slower devices for performance
        - Ensure animations respect prefers-reduced-motion
      </taskGroup>

      <taskGroup name="Responsive Testing (AC: #15)">
        - Test Hero section at all breakpoints
        - Test Social Proof horizontal scroll on mobile
        - Test Problem/Solution column stacking
        - Test Benefits grid responsiveness
        - Test How It Works timeline orientation change
        - Fix any layout issues found during testing
      </taskGroup>

      <taskGroup name="Integration & Verification (AC: #2, #12, #13, #14, #15)">
        - Import navbar and all sections into app/page.tsx
        - Verify sections render in correct order
        - Test smooth scroll between sections
        - Verify navbar stickiness and shadow behavior on scroll
        - Verify no console errors or warnings
        - Test responsive behavior across all breakpoints
        - Verify animations smooth and performant
      </taskGroup>
    </tasks>

  </story>

  <acceptanceCriteria>
    <ac id="1">HeroSection.tsx displays full viewport height hero with headline, subheadline, CTA button</ac>
    <ac id="2">Hero section is fully responsive (mobile &lt; 768px, tablet 768-1024px, desktop &gt; 1024px)</ac>
    <ac id="3">SocialProofSection.tsx displays a series of 5 testimonial cards with customer quotes, names, roles, and avatars in a row. This row should slowly animate left and it's infinite marquees.</ac>
    <ac id="4">Testimonials use horizontal scroll on mobile and grid layout on desktop</ac>
    <ac id="5">ProblemSolutionSection.tsx shows "Old Way" vs "New Way" comparison in two-column layout (desktop) / stacked (mobile)</ac>
    <ac id="6">Visual contrast between old/new using color scheme as specified</ac>
    <ac id="7">BenefitsSection.tsx displays 4 benefit cards in 2x2 grid (desktop) / stacked (mobile) with icons, titles, descriptions</ac>
    <ac id="8">Benefit cards have hover effects for interactivity</ac>
    <ac id="9">HowItWorksSection.tsx displays 4-step process with numbered steps, titles, descriptions, and timeline connecting lines</ac>
    <ac id="10">Button.tsx reusable component created with primary/secondary variants and hover states</ac>
    <ac id="11">Card.tsx reusable component created for testimonials and benefits</ac>
    <ac id="12">Smooth scroll behavior implemented for CTA button clicks</ac>
    <ac id="13">All animations smooth and performant (no jank, using Framer Motion via motion/react)</ac>
    <ac id="14">Content from lib/constants.ts renders correctly in all sections</ac>
    <ac id="15">All 5 sections responsive at mobile (375px, 414px), tablet (768px, 1024px), desktop (1280px, 1920px)</ac>
    <ac id="16">Navigation bar displays logo (left), inline links ("Home · Press · Login") centered, and primary CTA button ("Get Early Access") aligned right</ac>
    <ac id="17">Navigation bar remains sticky at the top and applies a subtle drop shadow once the page scrolls</ac>
  </acceptanceCriteria>

  <artifacts>
    <docs>
      <doc path="docs/tech-spec.md" title="Technical Specification" section="Phase 2: Core Sections Implementation">
        Comprehensive spec covering all 5 sections (Hero, Social Proof, Problem/Solution, Benefits, How It Works), plus Navbar and reusable UI components (Button, Card). Defines responsive breakpoints, design system tokens (colors, shadows, typography), animation requirements using Framer Motion, and content-driven architecture via lib/constants.ts.
      </doc>

      <doc path="docs/tech-spec.md" title="Technical Specification" section="Design System">
        Defines premium minimalist aesthetic: borderless design with subtle shadows, cream background (#fffdf6), gold primary (#f9d544), lavender secondary (#cab5d4), yellow accent (#ffe362). Specifies Poppins font (weights 400/600/700), generous white space, shadow-soft/shadow-hover utilities, and smooth animations via motion/react.
      </doc>

      <doc path="docs/tech-spec.md" title="Technical Specification" section="Technical Details → Sections 1-5">
        Detailed specifications for each section: Hero (full viewport height, centered layout, CTA with smooth scroll), Social Proof (testimonial cards, horizontal scroll mobile/grid desktop), Problem/Solution (two-column comparison with color contrast), Benefits (2x2 grid with hover effects, Lucide icons), How It Works (4-step timeline with connecting lines).
      </doc>

      <doc path="docs/content-reference.md" title="Content Reference" section="Sections 1-5">
        Complete copy for Hero headline/subheadline, 3 testimonials with customer quotes/names/roles, Old Way vs New Way comparison points, 4 key benefits, and 4-step How It Works process. All content ready to populate lib/constants.ts TypeScript interfaces.
      </doc>

      <doc path="design-docs/story-landing-page-2/requirements.md" title="Component Requirements" section="Components & Hierarchy">
        Lists required shadcn/ui components: button, card, avatar, scroll-area, navigation-menu, badge, separator. Notes timeline and marquee require custom implementations. Provides complete component hierarchy from Navbar through all 5 sections with specific shadcn primitives for each.
      </doc>

      <doc path="design-docs/story-landing-page-2/component-research.md" title="Component Research" section="Shadcn Examples">
        Working code examples for Button (variants, sizes, asChild), Card (CardHeader/Content/Footer subcomponents), Avatar (image/fallback pattern), ScrollArea (dimensions, scrollbars), NavigationMenu (responsive, viewport prop), Badge (variants, icon children), Separator (horizontal/vertical). Includes installation command and implementation patterns.
      </doc>

      <doc path="CLAUDE.md" title="Project Instructions" section="Code Architecture">
        Specifies app structure (app/, components/layout/, components/ui/, components/sections/, lib/), requires all content in lib/constants.ts with TypeScript interfaces, defines custom design tokens in tailwind.config.ts and globals.css, mandates Framer Motion via motion/react import (not framer-motion), requires mobile-first responsive design.
      </doc>
    </docs>
    <code>
      <artifact path="app/src/app/layout.tsx" kind="layout" symbol="RootLayout" lines="1-37" reason="Root layout already configured with Poppins font (400/600/700), metadata for SEO, and proper font-sans variable setup. Navbar and sections will be rendered as children in page.tsx." />

tr
<artifact path="app/src/app/page.tsx" kind="page" symbol="HomePage" lines="1-7" reason="Current skeleton page - will be replaced with Navbar and all 5 section imports. Currently renders placeholder, needs full section composition." />

      <artifact path="app/src/components/ui/button.tsx" kind="component" symbol="Button" lines="1-61" reason="Fully implemented shadcn Button component with variants (default/destructive/outline/secondary/ghost/link), sizes (default/sm/lg/icon), hover states, focus rings. Navbar and Hero CTAs will use primary variant. Reuse as-is." />

      <artifact path="app/src/components/ui/card.tsx" kind="component" symbol="Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction" lines="1-93" reason="Complete Card component system with all subcomponents. Use for testimonial cards, benefit cards, problem/solution panels. Already has shadow-sm, rounded-xl, flexible gap-6 layout. Borderless design compatible with story requirements." />

      <artifact path="app/src/lib/constants.ts" kind="data" symbol="heroContent, testimonials, landingSections, pricingTiers, faqs" lines="1-59" reason="TypeScript interfaces defined (HeroContent, Testimonial, LandingSection, PricingTier, FaqItem) but data is empty. Story requires populating heroContent with content from docs/content-reference.md, adding testimonials array (3 items), creating new types for Benefits (icon/title/description), OldNewWay (lists), HowItWorksStep (number/title/description)." />

      <artifact path="app/src/lib/utils.ts" kind="utility" symbol="cn" lines="1-6" reason="Utility function for merging Tailwind classes using clsx and tailwind-merge. Used throughout components for className composition. Already available, reuse in all new components." />

      <artifact path="app/src/lib/cloudflare-image-loader.ts" kind="utility" symbol="cloudflareLoader" reason="Custom Next.js image loader configured for Cloudflare Images CDN. Uses /cdn-cgi/image/ in production, returns src in dev. If testimonial avatars or benefit icons need optimization, this loader is already configured in next.config.ts." />

      <artifact path="app/tailwind.config.ts" kind="config" symbol="config" lines="1-27" reason="Tailwind config extends colors (background/primary/secondary/accent from CSS vars), boxShadow (soft/hover), fontFamily (Poppins). All design tokens match story requirements. No changes needed." />

      <artifact path="app/src/app/globals.css" kind="styles" symbol=":root, @layer utilities" lines="48-138" reason="CSS custom properties define color palette (--background: #fffdf6, --primary: #f9d544, --secondary: #cab5d4, --accent: #ffe362). Custom utilities .shadow-soft and .shadow-hover already defined. Premium borderless design with --border: transparent. Dark mode also configured. All story design requirements already implemented." />

      <artifact path="app/src/components/sections/" kind="directory" reason="Empty directory with .gitkeep - target location for all 5 section components (HeroSection.tsx, SocialProofSection.tsx, ProblemSolutionSection.tsx, BenefitsSection.tsx, HowItWorksSection.tsx). Will also need components/layout/ for Navbar.tsx." />
    </code>

    <dependencies>
      <ecosystem name="node">
        <package name="next" version="16.0.0" />
        <package name="react" version="19.2.0" />
        <package name="react-dom" version="19.2.0" />
        <package name="typescript" version="5.7.2" />
        <package name="tailwindcss" version="4.1.16" />
        <package name="framer-motion" version="12.23.24" note="Import as motion/react not framer-motion" />
        <package name="motion" version="12.23.24" note="Alias for framer-motion, use for animations" />
        <package name="lucide-react" version="0.468.0" note="Icon library for benefit icons" />
        <package name="@radix-ui/react-slot" version="1.2.3" note="Used by Button component" />
        <package name="@radix-ui/react-accordion" version="1.2.12" note="Not needed for Story 2, used in Story 3 FAQ" />
        <package name="class-variance-authority" version="0.7.1" note="CVA for button variants" />
        <package name="clsx" version="2.1.1" note="Class merging in cn() utility" />
        <package name="tailwind-merge" version="3.3.1" note="Tailwind class deduplication" />
        <package name="tw-animate-css" version="1.4.0" note="Tailwind v4 animation utilities" />
        <package name="@opennextjs/cloudflare" version="1.11.0" note="Deployment adapter" />
      </ecosystem>
    </dependencies>

  </artifacts>

  <constraints>
    <constraint type="import">Use motion/react not framer-motion for all animation imports (e.g., import { motion } from "motion/react")</constraint>
    <constraint type="architecture">All section components must be React Server Components by default. Use "use client" directive only when needed for animations or interactivity.</constraint>
    <constraint type="data">All content must be sourced from lib/constants.ts TypeScript exports. Create typed interfaces for new data structures (Benefits, OldNewWay, HowItWorksStep).</constraint>
    <constraint type="styling">Use Tailwind utility classes only. No CSS modules, no inline styles. Leverage existing design tokens: bg-background, bg-primary, bg-secondary, bg-accent, shadow-soft, shadow-hover.</constraint>
    <constraint type="design">Borderless design: no borders on cards/buttons. Use shadow-soft for depth, shadow-hover for interactive states. Generous padding (p-6, p-8) for premium feel.</constraint>
    <constraint type="responsive">Mobile-first approach: design for mobile (< 768px) first, then tablet (768-1024px), then desktop (> 1024px). Use Tailwind responsive prefixes (sm:, md:, lg:).</constraint>
    <constraint type="accessibility">All interactive elements need keyboard navigation, focus states, and ARIA labels where appropriate. Animations must respect prefers-reduced-motion.</constraint>
    <constraint type="component-reuse">Reuse existing Button and Card components from src/components/ui/. Do not create new button or card primitives.</constraint>
    <constraint type="testing">Manual responsive testing required at mobile (375px, 414px), tablet (768px, 1024px), desktop (1280px, 1920px). Browser DevTools for viewport testing.</constraint>
    <constraint type="deployment">Run npm run preview before npm run deploy to catch OpenNext adapter issues. Dev server (npm run dev) doesn't test production runtime.</constraint>
  </constraints>

  <interfaces>
    <interface name="Button" kind="component" signature="Button({ variant?, size?, asChild?, className?, ...props })" path="app/src/components/ui/button.tsx">
      Variants: default (bg-primary), destructive, outline, secondary, ghost, link. Sizes: default (h-9), sm, lg, icon. Supports asChild for Radix Slot composition. Use primary variant for all CTAs in Hero and Navbar.
    </interface>

    <interface name="Card" kind="component" signature="Card({ className?, ...props }) + CardHeader/CardTitle/CardDescription/CardContent/CardFooter/CardAction" path="app/src/components/ui/card.tsx">
      Borderless card system with shadow-sm, rounded-xl, gap-6 layout. Use Card wrapper with CardContent for testimonials, CardHeader+CardTitle+CardDescription for benefit cards. Already styled for premium aesthetic.
    </interface>

    <interface name="HeroContent" kind="type" signature="{ eyebrow, title, description, primaryCta, secondaryCta, metrics }" path="app/src/lib/constants.ts">
      Existing interface for hero section data. Populate with content from docs/content-reference.md. primaryCta and secondaryCta are Cta type { label, href }.
    </interface>

    <interface name="Testimonial" kind="type" signature="{ name, role, company, quote }" path="app/src/lib/constants.ts">
      Existing interface for testimonial cards. Need to add 3 testimonials from docs/content-reference.md. May need to add optional avatar field for images.
    </interface>

    <interface name="cn" kind="function" signature="cn(...inputs: ClassValue[])" path="app/src/lib/utils.ts">
      Utility for merging className strings with Tailwind deduplication. Use in all components for className composition: cn(baseClasses, conditionalClasses, className).
    </interface>

    <interface name="motion" kind="library" signature="import { motion } from 'motion/react'" path="node_modules/motion">
      Framer Motion animations. Use motion.div, motion.section for animated wrappers. Key props: initial, animate, transition, variants. Wrap animated elements, respect prefers-reduced-motion.
    </interface>

    <interface name="Lucide Icons" kind="library" signature="import { IconName } from 'lucide-react'" path="node_modules/lucide-react">
      Icon library for benefit section. Import icons by name (e.g., HeartIcon, SparklesIcon, TrendingUpIcon). Pass size and className props. Use text-primary for icon color.
    </interface>

  </interfaces>

  <tests>
    <standards>
      Manual responsive testing using browser DevTools. Test at specified breakpoints: mobile (375px, 414px), tablet (768px, 1024px), desktop (1280px, 1920px). Verify layout adapts correctly, no overflow, readable text, interactive elements accessible. Test hover states, animations smooth (no jank), respects prefers-reduced-motion. Verify content renders from constants.ts. Run npm run preview to test production runtime before deploy.
    </standards>

    <locations>
      Manual testing in browser DevTools. No automated test files for Story 2. Future: consider visual regression testing for components. All testing via local dev server (npm run dev) and production preview (npm run preview).
    </locations>

    <ideas>
      <test ac="1,2">Hero Section: Full viewport height on desktop, centered content, responsive stack on mobile. CTA button uses primary variant, smooth scroll on click.</test>
      <test ac="3,4">Social Proof: 5 testimonial cards render from constants, horizontal scroll on mobile (overflow-x-auto), 3-column grid on desktop, avatar images display correctly.</test>
      <test ac="5,6">Problem/Solution: Two-column layout desktop, stacked mobile, visual contrast between Old Way (muted grays) and New Way (accent yellow highlight).</test>
      <test ac="7,8">Benefits: 2x2 grid desktop, stacked mobile, 4 benefit cards with Lucide icons, hover effects (shadow-hover + scale transform) work smoothly.</test>
      <test ac="9">How It Works: 4-step process, numbered indicators, timeline connecting lines, responsive (vertical mobile, horizontal desktop).</test>
      <test ac="10,11">UI Components: Button primary/secondary variants work, Card subcomponents render correctly, reusable across sections.</test>
      <test ac="12">Smooth Scroll: CTA button clicks trigger smooth scroll to next section using scrollIntoView or anchor links.</test>
      <test ac="13">Animations: Framer Motion animations perform without jank, respect prefers-reduced-motion media query.</test>
      <test ac="14">Content Integration: All sections render content from lib/constants.ts, TypeScript interfaces enforce data structure.</test>
      <test ac="15">Responsive: All 5 sections tested at all breakpoints, layout adapts correctly, no horizontal scroll, touch targets adequate on mobile.</test>
      <test ac="16,17">Navbar: Logo left, nav links centered, CTA right, sticky positioning, drop shadow appears on scroll (Intersection Observer or scroll listener).</test>
    </ideas>

  </tests>
</story-context>
