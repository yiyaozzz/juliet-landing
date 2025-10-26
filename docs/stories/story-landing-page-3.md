# Story: Pricing, FAQ, CTA, Footer & Deployment

Status: Draft

## Story

As a **potential customer**,
I want **to see pricing options, get answers to common questions, and take action through clear CTAs**,
so that **I can make an informed decision and convert into a user**.

## Acceptance Criteria

1. **AC1:** PricingSection.tsx displays 3-tier pricing cards (Plan A, B, C) with plan name, price, features list, and CTA button
2. **AC2:** "Most Popular" badge displays on Plan B
3. **AC3:** Enterprise plan shows "Contact Us" instead of fixed price
4. **AC4:** Pricing cards responsive: stacked on mobile, 3-column grid on desktop
5. **AC5:** FAQSection.tsx implements accordion component from Shadcn UI with 4 Q&A pairs
6. **AC6:** FAQ accordion expands/collapses smoothly with animations
7. **AC7:** FAQ addresses top objections: pricing/value, technical/integration, security/privacy, support/onboarding
8. **AC8:** FinalCTASection.tsx displays action-focused CTA similar to Hero but more urgent/prominent
9. **AC9:** Final CTA includes social proof indicator (e.g., "Join 10,000+ users")
10. **AC10:** Footer.tsx implements multi-column layout with Logo, Quick Links, Company, Legal, Social
11. **AC11:** Footer includes copyright notice with current year
12. **AC12:** Footer responsive: stacked on mobile, multi-column on desktop
13. **AC13:** All CTA buttons functional and linked properly
14. **AC14:** Smooth scroll behavior works for all internal links
15. **AC15:** All animations polished using Framer Motion and Tailwind transitions
16. **AC16:** Lighthouse performance score ≥ 90 on all metrics (Performance, Accessibility, Best Practices, SEO)
17. **AC17:** Successfully deployed to Cloudflare Workers via `npm run deploy`
18. **AC18:** Custom domain configured and working with HTTPS
19. **AC19:** No console errors or warnings in production build
20. **AC20:** All 9 sections complete and polished

## Tasks / Subtasks

### Install Shadcn UI Components (AC: #5)
- [ ] Run `npx shadcn@latest init` to initialize Shadcn UI
- [ ] Run `npx shadcn@latest add accordion` for FAQ component
- [ ] Verify Shadcn components folder created and configured
- [ ] Test accordion component in isolation

### Pricing Section (AC: #1, #2, #3, #4)
- [ ] Create components/sections/PricingSection.tsx
- [ ] Implement 3-tier pricing card layout with borderless design
- [ ] Plan A & C cards:
  - [ ] White background (bg-white)
  - [ ] shadow-soft for subtle elevation
  - [ ] rounded-2xl for soft corners
  - [ ] Generous padding (p-8)
- [ ] Plan B (Most Popular) card:
  - [ ] bg-secondary (#cab5d4) for standout appearance
  - [ ] shadow-hover for elevated feel
  - [ ] "Most Popular" badge: bg-primary (#f9d544) pill, top-right position
- [ ] Add plan name, price, features list with checkmark icons (text-primary)
- [ ] CTA buttons: bg-primary with hover:bg-accent transition
- [ ] Handle "Contact Us" display for enterprise plan
- [ ] Implement responsive layout: grid-cols-1 (mobile), grid-cols-3 (desktop)
- [ ] Add hover effects: shadow-hover + subtle scale transform
- [ ] Add pricing data to lib/constants.ts (3 plans with features arrays)

### FAQ Section (AC: #5, #6, #7)
- [ ] Create components/sections/FAQSection.tsx
- [ ] Implement Shadcn Accordion component
- [ ] Add 4 FAQ items addressing key objections:
  - Q1: Pricing/value concern (e.g., "Is it worth the cost?")
  - Q2: Technical/integration question (e.g., "How does it integrate?")
  - Q3: Security/privacy concern (e.g., "Is my data secure?")
  - Q4: Support/onboarding question (e.g., "How do I get started?")
- [ ] Style accordion with Tailwind classes
- [ ] Test expand/collapse animations
- [ ] Add FAQ data to lib/constants.ts (4 Q&A pairs)

### Final CTA Section (AC: #8, #9)
- [ ] Create components/sections/FinalCTASection.tsx
- [ ] Implement layout similar to Hero but more action-focused
- [ ] Add reinforced value proposition headline
- [ ] Add prominent CTA button (larger, more colorful than earlier CTAs)
- [ ] Add social proof indicator (e.g., "Join 10,000+ users" with count)
- [ ] Add gradient background similar to Hero
- [ ] Make responsive and centered
- [ ] Add content to lib/constants.ts (final CTA headline, subtext, social proof count)

### Footer (AC: #10, #11, #12)
- [ ] Create components/sections/Footer.tsx
- [ ] Implement multi-column layout (5 columns):
  - Column 1: Logo + tagline
  - Column 2: Quick links (Product, Features, Pricing)
  - Column 3: Company (About, Blog, Careers)
  - Column 4: Legal (Terms, Privacy, Cookies)
  - Column 5: Social links (icons with links)
- [ ] Add copyright notice with dynamic year `© ${new Date().getFullYear()} Juliet`
- [ ] Implement responsive layout: stacked on mobile, grid on desktop
- [ ] Style with subtle background color and top border
- [ ] Add footer data to lib/constants.ts (links arrays, social links)
- [ ] Use Lucide React icons for social media icons

### Content Finalization (AC: #13, #14)
- [ ] Update lib/constants.ts with:
  - Pricing: 3 plan objects with features arrays
  - FAQ: 4 Q&A objects
  - Final CTA: headline, subtext, social proof
  - Footer: navigation links, legal links, social media links
- [ ] Remove all placeholder/Lorem Ipsum text
- [ ] Verify all content is production-ready
- [ ] Ensure all links are valid (or use # for placeholders)

### Page Integration (AC: #13, #14, #20)
- [ ] Import Pricing, FAQ, FinalCTA, Footer sections into app/page.tsx
- [ ] Verify all 9 sections render in correct order:
  1. Hero
  2. Social Proof
  3. Problem/Solution
  4. Benefits
  5. How It Works
  6. Pricing
  7. FAQ
  8. Final CTA
  9. Footer
- [ ] Test smooth scroll behavior between sections
- [ ] Verify all internal navigation links work
- [ ] Test all CTA buttons (even if they link to #)

### Animations & Polish (AC: #15)
- [ ] Add Framer Motion entrance animations to Pricing cards
- [ ] Add subtle animations to FAQ accordion
- [ ] Add Final CTA entrance animation (fade + scale)
- [ ] Polish all hover states and transitions
- [ ] Test animations on slower devices
- [ ] Ensure smooth 60fps animations throughout

### Performance Optimization (AC: #16)
- [ ] Run Lighthouse audit in incognito mode
- [ ] Optimize images (use Next.js Image component everywhere)
- [ ] Ensure fonts loaded with next/font (no FOUT/FOIT)
- [ ] Check for layout shift issues (CLS < 0.1)
- [ ] Verify lazy loading for below-fold sections
- [ ] Minimize JavaScript bundle size
- [ ] Fix any performance warnings
- [ ] Achieve ≥ 90 score on all 4 Lighthouse metrics

### Accessibility & Quality Checks (AC: #16, #19)
- [ ] Test keyboard navigation through all interactive elements
- [ ] Verify all images have alt text
- [ ] Check color contrast ratios (WCAG AA minimum)
- [ ] Ensure focus indicators visible
- [ ] Test with screen reader (VoiceOver/NVDA)
- [ ] Run `npm run build` and verify no errors
- [ ] Check for console warnings in production build
- [ ] Verify no React hydration errors

### Deployment to Cloudflare Workers (AC: #17, #18, #19)
- [ ] Login to Cloudflare: `npx wrangler login`
- [ ] Verify wrangler configuration: `npx wrangler whoami`
- [ ] Run local preview: `npm run preview`
- [ ] Test app locally on preview URL (*.workers.dev)
- [ ] Deploy to production: `npm run deploy`
- [ ] Verify deployment successful in Cloudflare dashboard
- [ ] Configure custom domain in Cloudflare Workers settings
- [ ] Add custom domain (e.g., juliet.app or www.juliet.app)
- [ ] Verify DNS and TLS configured automatically
- [ ] Test production URL with custom domain
- [ ] Verify HTTPS working correctly
- [ ] Test page load speed on production

### Final Verification (AC: #16, #17, #18, #19, #20)
- [ ] Run final Lighthouse audit on production URL
- [ ] Test all 9 sections on production
- [ ] Test responsive behavior on production (mobile, tablet, desktop)
- [ ] Verify no console errors on production
- [ ] Test all CTA buttons and links on production
- [ ] Check Cloudflare Analytics enabled
- [ ] Document deployment process in README.md (optional)

## Dev Notes

### Technical Summary

Complete the landing page by implementing the final conversion-focused sections: Pricing (3-tier cards with Most Popular badge), FAQ (Shadcn accordion addressing objections), Final CTA (urgent call-to-action with social proof), and Footer (multi-column navigation). Integrate Shadcn UI for the FAQ accordion component. Polish all animations and transitions using Framer Motion. Apply the **premium minimalist, borderless aesthetic** consistently across all sections. Optimize performance to achieve Lighthouse score ≥ 90 on all metrics. Deploy to Cloudflare Workers using the @opennextjs/cloudflare adapter and configure custom domain with automatic DNS + TLS.

**Design System Application:**
- **Pricing Cards:** Plan B uses bg-secondary (#cab5d4) to stand out, Plans A&C use white with shadow-soft
- **CTA Buttons:** bg-primary (#f9d544) with hover:bg-accent (#ffe362) transitions
- **Borderless Throughout:** All cards use shadows (no borders) for depth and separation
- **Premium Feel:** Generous padding (p-8), rounded corners (rounded-2xl), clean typography

**Key Technical Decisions:**
- Shadcn UI Accordion for FAQ (Radix UI under the hood) - customize with borderless style
- Framer Motion for all animations (motion/react import)
- Cloudflare Workers deployment (not Pages) for SSR support
- Custom domain with automatic Cloudflare DNS + TLS setup
- Performance-first approach targeting Lighthouse 90+ scores
- Production-ready content (no Lorem Ipsum)

**Deployment Notes:**
- Use `npm run preview` to test locally before deploying
- Use `npm run deploy` for one-command production deployment
- Cloudflare automatically provisions DNS + TLS for custom domain
- Workers support SSR/ISR for future dynamic features

### Project Structure Notes

- **Files to create:**
  - components/sections/PricingSection.tsx
  - components/sections/FAQSection.tsx
  - components/sections/FinalCTASection.tsx
  - components/sections/Footer.tsx
  - components/ui/accordion.tsx (auto-generated by Shadcn)

- **Files to modify:**
  - lib/constants.ts (add pricing, FAQ, final CTA, footer content)
  - app/page.tsx (import and render final 4 sections)
  - README.md (optional: document deployment process)

- **Expected test locations:**
  - Lighthouse audit (Chrome DevTools)
  - Manual testing on production URL
  - Responsive testing via browser DevTools
  - Cloudflare Analytics dashboard

- **Estimated effort:** 3 story points (2-3 days)

### References

- **Tech Spec:** See tech-spec.md → Technical Details (sections 6-9), Deployment Strategy
- **Architecture:** tech-spec.md → Implementation Stack (Shadcn UI, Cloudflare Workers)
- **Deployment Guide:** tech-spec.md → Deployment Strategy (Cloudflare Workers section)
- **Performance Targets:** tech-spec.md → Testing Approach (Performance Testing)

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
