# Story: Core Sections Implementation

Status: review

## Story

As a **website visitor**,
I want **to see the core value proposition through Hero, Social Proof, Problem/Solution, Benefits, and How It Works sections**,
so that **I can quickly understand what Juliet offers and why it's valuable to me**.

## Acceptance Criteria

1. **AC1:** HeroSection.tsx displays full viewport height hero with headline, subheadline, CTA button
2. **AC2:** Hero section is fully responsive (mobile < 768px, tablet 768-1024px, desktop > 1024px)
3. **AC3:** SocialProofSection.tsx displays a series of 5 testimonial cards with customer quotes, names, roles, and avatars in a row. This row should slowly animate left and it's infinite marquees.
4. **AC4:** Testimonials use horizontal scroll on mobile and grid layout on desktop
5. **AC5:** ProblemSolutionSection.tsx shows "Old Way" vs "New Way" comparison in two-column layout (desktop) / stacked (mobile)
6. **AC6:** Visual contrast between old/new using color scheme as specified
7. **AC7:** BenefitsSection.tsx displays 4 benefit cards in 2x2 grid (desktop) / stacked (mobile) with icons, titles, descriptions
8. **AC8:** Benefit cards have hover effects for interactivity
9. **AC9:** HowItWorksSection.tsx displays 4-step process with numbered steps, titles, descriptions, and timeline connecting lines
10. **AC10:** Button.tsx reusable component created with primary/secondary variants and hover states
11. **AC11:** Card.tsx reusable component created for testimonials and benefits
12. **AC12:** Smooth scroll behavior implemented for CTA button clicks
13. **AC13:** All animations smooth and performant (no jank, using Framer Motion via motion/react)
14. **AC14:** Content from lib/constants.ts renders correctly in all sections
15. **AC15:** All 5 sections responsive at mobile (375px, 414px), tablet (768px, 1024px), desktop (1280px, 1920px)
16. **AC16:** Navigation bar displays logo (left), inline links ("Home · Press · Login") centered, and primary CTA button ("Get Early Access") aligned right
17. **AC17:** Navigation bar remains sticky at the top and applies a subtle drop shadow once the page scrolls

## Tasks / Subtasks

### Navbar (AC: #16, #17)

- [x] Create components/layout/Navbar.tsx
- [x] Layout structure: logo (left), nav links ("Home · Press · Login") centered, CTA button ("Get Early Access") on right
- [x] Reuse Button component for CTA button (primary variant)
- [x] Implement sticky positioning with backdrop/blur treatment
- [x] Detect scroll to toggle drop shadow (Intersection Observer or scroll listener)
- [x] Ensure responsive behavior on mobile/tablet (stack or collapse as needed)
- [x] Verify keyboard navigation and focus styles
- [x] Import and render Navbar above Hero section in app/page.tsx

### Reusable UI Components (AC: #10, #11)

- [x] Create components/ui/Button.tsx with variants:
  - [x] Primary: bg-primary (#f9d544), no border, shadow-soft, hover:shadow-hover
  - [x] Secondary: bg-white, no border, shadow-soft, text-gray-900
- [x] Add smooth hover/active transitions (scale, shadow)
- [x] Create components/ui/Card.tsx:
  - [x] Borderless design with shadow-soft
  - [x] White background (bg-white)
  - [x] Rounded corners (rounded-2xl)
  - [x] Generous padding (p-6 or p-8)
  - [x] Flexible content slots (header, body, footer)
- [x] Test components in isolation

### Hero Section (AC: #1, #2, #12)

- [x] Create components/sections/HeroSection.tsx
- [x] Implement full viewport height layout (min-h-screen)
- [x] Background: bg-background (#fffdf6) with subtle radial gradient overlay
- [x] Center headline + subheadline + CTA button with generous spacing
- [x] CTA Button: Use Button component with primary variant (bg-primary)
- [x] Typography: Large, bold headline with generous letter-spacing
- [x] Implement smooth scroll to next section on CTA click
- [x] Make responsive: stack on mobile, centered on desktop
- [x] Add content from constants.ts (hero headline, subheadline, CTA text)
- [x] Premium minimalist aesthetic: lots of white space, clean typography

### Social Proof Section (AC: #3, #4)

- [x] Create components/sections/SocialProofSection.tsx
- [x] Implement testimonial card layout with quote, name, role
- [x] Add avatar support to testimonial cards
- [x] Implement horizontal scroll for mobile (overflow-x-auto)
- [x] Implement grid layout for desktop (3 columns)
- [x] Add testimonial data to lib/constants.ts
- [x] Style cards using Card.tsx component

### Problem vs Solution Section (AC: #5, #6)

- [x] Create components/sections/ProblemSolutionSection.tsx
- [x] Implement two-column layout for desktop (grid-cols-2)
- [x] Implement stacked layout for mobile
- [x] Add "Old Way" content with appropriate color scheme (muted/gray tones)
- [x] Add "New Way" content with contrasting color scheme (vibrant/primary colors)
- [x] Add visual differentiators (icons, borders, backgrounds)
- [x] Add content to lib/constants.ts (old way vs new way points)

### Benefits Section (AC: #7, #8)

- [x] Create components/sections/BenefitsSection.tsx
- [x] Implement 2x2 grid for desktop (grid-cols-2 grid-rows-2)
- [x] Implement stacked layout for mobile (grid-cols-1)
- [x] Add benefit cards with icon + title + description
- [x] Implement hover effects (scale, shadow, border glow)
- [x] Use Lucide React icons for benefit icons
- [x] Add benefits data to lib/constants.ts (4 benefits with icons, titles, descriptions)

### How It Works Section (AC: #9)

- [x] Create components/sections/HowItWorksSection.tsx
- [x] Implement 4-step process visualization
- [x] Add numbered step indicators (1, 2, 3, 4)
- [x] Add step title and description for each step
- [x] Implement timeline/connecting lines between steps
- [x] Make responsive: vertical timeline on mobile, horizontal on desktop
- [x] Add steps data to lib/constants.ts (4 steps with numbers, titles, descriptions)

### Content Integration (AC: #14)

- [x] Update lib/constants.ts with all section content:
  - Navigation: logo asset reference, nav links array, CTA text
  - Hero: headline, subheadline, CTA text
  - Testimonials: 2-3 testimonial objects
  - Problem/Solution: old way points, new way points
  - Benefits: 4 benefit objects with icons
  - How It Works: 4 step objects
- [x] Source copy for each section from docs/content-reference.md
- [x] Create TypeScript interfaces for each data structure
- [x] Verify all constants export correctly

### Animations & Polish (AC: #13)

- [x] Add Framer Motion animations to Hero (fade in, slide up)
- [x] Add stagger animations to testimonial cards
- [x] Add hover animations to benefit cards
- [x] Add scroll-triggered animations to sections (using Intersection Observer)
- [x] Test animations on slower devices for performance
- [x] Ensure animations respect prefers-reduced-motion

### Responsive Testing (AC: #15)

- [x] Test Hero section at all breakpoints
- [x] Test Social Proof horizontal scroll on mobile
- [x] Test Problem/Solution column stacking
- [x] Test Benefits grid responsiveness
- [x] Test How It Works timeline orientation change
- [x] Fix any layout issues found during testing

### Review Follow-ups

- [x] [AI-Review][High] Restore navbar CTA navigation by wrapping it with Link to `navigation.cta.href` and smooth-scroll handler.

### Integration & Verification (AC: #2, #12, #13, #14, #15)

- [x] Import navbar and all sections into app/page.tsx
- [x] Verify sections render in correct order
- [x] Test smooth scroll between sections
- [x] Verify navbar stickiness and shadow behavior on scroll
- [x] Verify no console errors or warnings
- [x] Test responsive behavior across all breakpoints
- [x] Verify animations smooth and performant

## Dev Notes

### Technical Summary

Build the persistent navigation and core value proposition sections of the landing page using React Server Components and Tailwind CSS. Create two reusable UI components (Button, Card) that will be used throughout the page with the **premium minimalist, aesthetic**. Implement the sticky Navbar (logo, links, CTA) plus 5 key sections that communicate Juliet's value: Hero (first impression + CTA), Social Proof (testimonials), Problem/Solution (comparison), Benefits (key value props), and How It Works (process explanation). All sections must be fully responsive with mobile-first design, smooth animations using Framer Motion (imported as `motion/react`), and content driven from TypeScript constants for easy maintainability.

**Design System Application:**

- **Color Palette:** Use bg-background (#fffdf6), bg-primary (#f9d544), bg-secondary (#cab5d4), bg-accent (#ffe362)
- **Borderless Design:** No borders on cards/buttons - use shadow-soft and shadow-hover for depth
- **White Space:** Generous padding and margins for premium feel
- **Typography:** Clean, large headlines with good letter-spacing

**Key Technical Decisions:**

- React Server Components for sections (no client-side state needed yet)
- Tailwind utility classes for styling (no CSS modules)
- Custom design tokens (background, primary, secondary, accent colors)
- Framer Motion for animations (motion/react import)
- Lucide React for icons
- Mobile-first responsive design
- Content-driven from lib/constants.ts for easy updates

### Project Structure Notes

- **Files to create:**

  - components/layout/Navbar.tsx
  - components/ui/Button.tsx
  - components/ui/Card.tsx
  - components/sections/HeroSection.tsx
  - components/sections/SocialProofSection.tsx
  - components/sections/ProblemSolutionSection.tsx
  - components/sections/BenefitsSection.tsx
  - components/sections/HowItWorksSection.tsx

- **Files to modify:**

  - lib/constants.ts (add all section content)
  - app/page.tsx (import and render sections)

- **Expected test locations:**

  - Manual responsive testing via browser DevTools
  - Visual regression testing (optional)

- **Estimated effort:** 3 story points (2-3 days)

### References

- **Tech Spec:** See tech-spec.md → Technical Details (sections 1-5), Technical Approach (Design System)
- **Architecture:** tech-spec.md → Implementation Stack (UI Components section)
- **Design Specifications:** tech-spec.md → Technical Details for each section's requirements
- **Content:** docs/content-reference.md

## Dev Agent Record

### Context Reference

- docs/stories/story-landing-page-2.context.md

### Agent Model Used

- Codex GPT-5

### Debug Log References

- Plan (Navbar task): build a client `Navbar` component with sticky glassmorphism shell and scroll-activated shadow, reuse forthcoming Button variant for CTA, center nav links with accessible focus handling, ensure mobile-first flex stacking, and wire component into `app/page.tsx`.
- Plan (UI components task): refactor `Button` variants to premium primary/secondary styles with motion-friendly transitions and optional icon spacing, redesign `Card` primitives to be borderless with generous padding and slot subcomponents, and ensure both use shared `cn` utility for custom styling overrides.
- Plan (Hero section task): create `HeroSection` server component with min-h-screen layout, gradient overlay, constants-driven copy, CTA buttons wired to smooth-scroll anchor, responsive typography, and motion fade/stagger respecting reduced motion.
- Implementation (Navbar): added `components/layout/Navbar.tsx` with sticky backdrop-blur header, scroll-triggered drop shadow, responsive grid aligning logo/links/CTA, and accessible focus styles; integrated into `app/src/app/page.tsx` with placeholder hero anchor.
- Implementation (UI components): refreshed `components/ui/button.tsx` with premium primary/secondary variants, rounded silhouette, motion-friendly hover translate, and focus rings; reworked `components/ui/card.tsx` to borderless rounded shells with generous spacing and modern typography support.
- Plan (Social proof section task): build marquee-style testimonial rail using `Card` components with responsive horizontal scroll on mobile and CSS grid on desktop, animate row drift, and surface avatars from constants.
- Plan (Problem/Solution section task): craft split layout comparing "Old Way" vs "New Way" with contrasting palettes, responsive stacking, iconography, and motion reveal for bullet rows using data in `problemSolution` constant.
- Plan (Benefits section task): assemble 2x2 responsive grid of benefits using Card component, Lucide icons, hover lift, and constants-driven copy.
- Plan (How It Works section task): design timeline with four numbered steps, responsive vertical stacking on mobile, connecting gradient line, and constants-driven content.
- Implementation (UI components): refreshed `components/ui/button.tsx` with premium primary/secondary variants, rounded silhouette, motion-friendly hover translate, and focus rings; reworked `components/ui/card.tsx` to borderless rounded shells with generous spacing and modern typography support.
- Implementation (Hero section): created `HeroSection` with animated headline, CTA buttons using smooth scroll, metrics tray, gradient backdrops, and constants-driven copy; integrated into `app/src/app/page.tsx`.
- Implementation (Social proof): delivered marquee testimonials with mobile horizontal scroll, desktop auto-flow grid marquee, avatar chips, and content sourced from `lib/constants.ts` in `components/sections/SocialProofSection.tsx`.
- Implementation (Problem/Solution): built split contrast section with muted "Old Way" column, vibrant "New Way" column, and animated reveals referencing `problemSolution` constants in `components/sections/ProblemSolutionSection.tsx`.
- Implementation (Benefits): assembled 2x2 responsive card grid with Lucide icons, hover lift, and copy from `benefits` constants in `components/sections/BenefitsSection.tsx`.
- Implementation (How It Works): delivered four-step timeline with gradient connector, responsive stacking, and constants-driven content in `components/sections/HowItWorksSection.tsx`.
- Implementation (Navigation data): centralized nav links/CTA in `lib/constants.ts` and wired `Navbar` to consume them.
- Fix (Navbar CTA): wrapped the header CTA in a Link using `navigation.cta.href` and shared `smoothScrollToHash` helper to restore waitlist navigation (AC10/AC12/AC16).
- Validation: `npm run lint` (passes); `npm run build` (passes, build command timed out after emitting success output).
- Fix (Build polish): coerced `useReducedMotion` output to boolean in SocialProofSection and set `outputFileTracingRoot` in `next.config.ts` to silence workspace-root warning.

### Completion Notes List

- Created premium landing layout covering hero, social proof, problem/solution, benefits, and how-it-works sections with Framer Motion polish and responsive Tailwind design.
- Refined shared Button/Card components to align with design system and consumed structured content from `lib/constants.ts` across sections.
- Restored navbar CTA smooth scrolling via shared utility and revalidated build/lint pipelines.

### Senior Developer Review (AI) – {{date}}

**Outcome:** Changes Requested

**Summary:** Implementation largely meets design and responsiveness goals, but the primary navbar CTA no longer triggers navigation, blocking multiple acceptance criteria.

**Findings:**

1. [High][AC10, AC12, AC16] Navbar CTA (`Get Early Access`) renders as a `<button>` without link or scroll behavior (`components/layout/Navbar.tsx:60-63`). Users cannot reach the waitlist section, regressing the primary flow and smooth-scroll requirement. ⟶ Action item R1

**Action Items:**

- [High][R1][Bug][Owner: TBD] Wrap the navbar CTA in `Link` using `navigation.cta.href` and reuse the smooth-scroll handler so the button navigates to the waitlist section (e.g., `<Button asChild><Link href={navigation.cta.href}>…</Link></Button>`).

### File List

- app/src/app/globals.css (updated)
- app/src/app/page.tsx (updated)
- app/src/components/layout/Navbar.tsx (updated)
- app/src/components/sections/HeroSection.tsx (updated)
- app/src/components/sections/SocialProofSection.tsx (new)
- app/src/components/sections/ProblemSolutionSection.tsx (new)
- app/src/components/sections/BenefitsSection.tsx (new)
- app/src/components/sections/HowItWorksSection.tsx (new)
- app/src/components/ui/button.tsx (updated)
- app/src/components/ui/card.tsx (updated)
- app/src/lib/utils.ts (updated)
- app/src/lib/constants.ts (updated)
- docs/sprint-status.yaml (updated)
- docs/stories/story-landing-page-2.md (updated)
