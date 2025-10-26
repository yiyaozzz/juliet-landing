# Story: Core Sections Implementation

Status: Draft

## Story

As a **website visitor**,
I want **to see the core value proposition through Hero, Social Proof, Problem/Solution, Benefits, and How It Works sections**,
so that **I can quickly understand what Juliet offers and why it's valuable to me**.

## Acceptance Criteria

1. **AC1:** HeroSection.tsx displays full viewport height hero with headline, subheadline, CTA button, and gradient background
2. **AC2:** Hero section is fully responsive (mobile < 768px, tablet 768-1024px, desktop > 1024px)
3. **AC3:** SocialProofSection.tsx displays 2-3 testimonial cards with customer quotes, names, roles, and optional avatars
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

## Tasks / Subtasks

### Reusable UI Components (AC: #10, #11)
- [ ] Create components/ui/Button.tsx with variants:
  - [ ] Primary: bg-primary (#f9d544), no border, shadow-soft, hover:shadow-hover
  - [ ] Secondary: bg-white, no border, shadow-soft, text-gray-900
- [ ] Add smooth hover/active transitions (scale, shadow)
- [ ] Create components/ui/Card.tsx:
  - [ ] Borderless design with shadow-soft
  - [ ] White background (bg-white)
  - [ ] Rounded corners (rounded-2xl)
  - [ ] Generous padding (p-6 or p-8)
  - [ ] Flexible content slots (header, body, footer)
- [ ] Test components in isolation

### Hero Section (AC: #1, #2, #12)
- [ ] Create components/sections/HeroSection.tsx
- [ ] Implement full viewport height layout (min-h-screen)
- [ ] Background: bg-background (#fffdf6) with subtle radial gradient overlay
- [ ] Center headline + subheadline + CTA button with generous spacing
- [ ] CTA Button: Use Button component with primary variant (bg-primary)
- [ ] Typography: Large, bold headline with generous letter-spacing
- [ ] Implement smooth scroll to next section on CTA click
- [ ] Make responsive: stack on mobile, centered on desktop
- [ ] Add content from constants.ts (hero headline, subheadline, CTA text)
- [ ] Premium minimalist aesthetic: lots of white space, clean typography

### Social Proof Section (AC: #3, #4)
- [ ] Create components/sections/SocialProofSection.tsx
- [ ] Implement testimonial card layout with quote, name, role
- [ ] Add optional avatar support to testimonial cards
- [ ] Implement horizontal scroll for mobile (overflow-x-auto)
- [ ] Implement grid layout for desktop (3 columns)
- [ ] Add testimonial data to lib/constants.ts
- [ ] Style cards using Card.tsx component

### Problem vs Solution Section (AC: #5, #6)
- [ ] Create components/sections/ProblemSolutionSection.tsx
- [ ] Implement two-column layout for desktop (grid-cols-2)
- [ ] Implement stacked layout for mobile
- [ ] Add "Old Way" content with appropriate color scheme (muted/gray tones)
- [ ] Add "New Way" content with contrasting color scheme (vibrant/primary colors)
- [ ] Add visual differentiators (icons, borders, backgrounds)
- [ ] Add content to lib/constants.ts (old way vs new way points)

### Benefits Section (AC: #7, #8)
- [ ] Create components/sections/BenefitsSection.tsx
- [ ] Implement 2x2 grid for desktop (grid-cols-2 grid-rows-2)
- [ ] Implement stacked layout for mobile (grid-cols-1)
- [ ] Add benefit cards with icon + title + description
- [ ] Implement hover effects (scale, shadow, border glow)
- [ ] Use Lucide React icons for benefit icons
- [ ] Add benefits data to lib/constants.ts (4 benefits with icons, titles, descriptions)

### How It Works Section (AC: #9)
- [ ] Create components/sections/HowItWorksSection.tsx
- [ ] Implement 4-step process visualization
- [ ] Add numbered step indicators (1, 2, 3, 4)
- [ ] Add step title and description for each step
- [ ] Implement timeline/connecting lines between steps
- [ ] Make responsive: vertical timeline on mobile, horizontal on desktop
- [ ] Add steps data to lib/constants.ts (4 steps with numbers, titles, descriptions)

### Content Integration (AC: #14)
- [ ] Update lib/constants.ts with all section content:
  - Hero: headline, subheadline, CTA text
  - Testimonials: 2-3 testimonial objects
  - Problem/Solution: old way points, new way points
  - Benefits: 4 benefit objects with icons
  - How It Works: 4 step objects
- [ ] Create TypeScript interfaces for each data structure
- [ ] Verify all constants export correctly

### Animations & Polish (AC: #13)
- [ ] Add Framer Motion animations to Hero (fade in, slide up)
- [ ] Add stagger animations to testimonial cards
- [ ] Add hover animations to benefit cards
- [ ] Add scroll-triggered animations to sections (using Intersection Observer)
- [ ] Test animations on slower devices for performance
- [ ] Ensure animations respect prefers-reduced-motion

### Responsive Testing (AC: #15)
- [ ] Test Hero section at all breakpoints
- [ ] Test Social Proof horizontal scroll on mobile
- [ ] Test Problem/Solution column stacking
- [ ] Test Benefits grid responsiveness
- [ ] Test How It Works timeline orientation change
- [ ] Fix any layout issues found during testing

### Integration & Verification (AC: #2, #12, #13, #14, #15)
- [ ] Import all 5 sections into app/page.tsx
- [ ] Verify sections render in correct order
- [ ] Test smooth scroll between sections
- [ ] Verify no console errors or warnings
- [ ] Test responsive behavior across all breakpoints
- [ ] Verify animations smooth and performant

## Dev Notes

### Technical Summary

Build the core value proposition sections of the landing page using React Server Components and Tailwind CSS. Create two reusable UI components (Button, Card) that will be used throughout the page with the **premium minimalist, borderless aesthetic**. Implement 5 key sections that communicate Juliet's value: Hero (first impression + CTA), Social Proof (testimonials), Problem/Solution (comparison), Benefits (key value props), and How It Works (process explanation). All sections must be fully responsive with mobile-first design, smooth animations using Framer Motion (imported as `motion/react`), and content driven from TypeScript constants for easy maintainability.

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

## Dev Agent Record

### Context Reference

<!-- Path(s) to story context XML will be added here by context workflow -->

### Agent Model Used

<!-- Will be populated during dev-story execution -->

### Debug Log References

<!-- Will be populated during dev-story execution -->

### Completion Notes List

<!-- Will be populated during dev-story execution -->

### File List

<!-- Will be populated during dev-story execution -->
