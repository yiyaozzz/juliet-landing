# Story: Project Setup & Structure

Status: ready-for-dev

## Story

As a **developer**,
I want **a fully configured Next.js 16 project with proper file structure and build tooling**,
so that **I can efficiently build the landing page components with type safety and modern development practices**.

## Acceptance Criteria

1. **AC1:** Next.js 16.0.0 project initialized with TypeScript 5.7.2, Tailwind CSS 4.1.16, and ESLint 9.17.0
2. **AC2:** Complete folder structure created matching tech spec (components/sections, components/ui, lib, public)
3. **AC3:** Tailwind configured with custom design tokens (spacing, typography, colors) and tw-animate-css for animations
4. **AC4:** Cloudflare deployment configured (wrangler.jsonc, @opennextjs/cloudflare adapter, package.json scripts)
5. **AC5:** TypeScript strict mode enabled with proper tsconfig.json configuration
6. **AC6:** Base layout.tsx and page.tsx implemented with metadata and root structure
7. **AC7:** constants.ts created in lib/ with placeholder content structure
8. **AC8:** Development server runs successfully without errors (`npm run dev`)
9. **AC9:** Prettier configured with prettier-plugin-tailwindcss for code formatting
10. **AC10:** All dependencies installed and package.json contains exact versions from tech spec

## Tasks / Subtasks

### Setup Phase (AC: #1, #5, #9)
- [ ] Run `npx create-next-app@latest juliet-landing --typescript --tailwind --app --eslint`
- [ ] Install core dependencies: lucide-react@0.468.0, framer-motion@12.23.24 (import as motion/react)
- [ ] Install animation library: tw-animate-css (Tailwind v4 compatible)
- [ ] Install Prettier: prettier@3.4.2, prettier-plugin-tailwindcss
- [ ] Install Shadcn UI components (choose method):
  - Option A (MCP): Say "Initialize shadcn in my project" then "Add button, card, accordion components"
  - Option B (CLI): Run `npx shadcn@latest init` and `npx shadcn@latest add button card accordion`
- [ ] Add aceternity UI registry to components.json after initialization
- [ ] Configure TypeScript strict mode in tsconfig.json
- [ ] Create .prettierrc with semi, trailingComma, singleQuote, tabWidth settings

### Folder Structure (AC: #2)
- [ ] Create components/sections/ directory for landing page sections
- [ ] Create components/ui/ directory for reusable UI components
- [ ] Create lib/ directory for constants and utilities
- [ ] Create public/images/ directory for image assets
- [ ] Create public/icons/ directory for icon assets

### Tailwind Configuration (AC: #3)
- [ ] Configure tailwind.config.ts with design tokens:
  - [ ] Add colors: background (#fffdf6), primary (#f9d544), secondary (#cab5d4), accent (#ffe362)
  - [ ] Add custom box shadows: soft (0 2px 8px rgba 0.08), hover (0 4px 16px rgba 0.12)
  - [ ] Configure font family with Poppins variable font (--font-poppins)
- [ ] Update app/globals.css with:
  - [ ] CSS custom properties (--background, --primary, --secondary, --accent)
  - [ ] Body background and text color
  - [ ] Custom utility classes (.shadow-soft, .shadow-hover, .no-border)
- [ ] Configure borderless design system (no default borders)
- [ ] Test Tailwind build process and verify colors work

### Cloudflare Deployment Setup (AC: #4)
- [ ] Install @opennextjs/cloudflare adapter (latest version)
- [ ] Install wrangler@latest as dev dependency
- [ ] Create wrangler.jsonc with worker configuration (compatibility_date: 2024-12-30, nodejs_compat flag)
- [ ] Create lib/cloudflare-image-loader.ts for optimized image loading
- [ ] Update next.config.ts with custom image loader
- [ ] Add deployment scripts to package.json (preview, deploy)

### Base Application Structure (AC: #6, #7)
- [ ] Implement app/layout.tsx with root HTML structure, metadata, and global styles
  - [ ] Import Poppins font from 'next/font/google' with weights [400, 600, 700]
  - [ ] Configure Poppins with subsets: ["latin"], variable: "--font-poppins"
  - [ ] Add className={poppins.variable} to <html> element
- [ ] Implement app/page.tsx with main landing page component skeleton
- [ ] Create app/globals.css with Tailwind directives and base styles
- [ ] Create lib/constants.ts with placeholder structure for copy, testimonials, pricing data
- [ ] Add TypeScript interfaces for constants data structures

### Verification (AC: #8, #10)
- [ ] Run `npm run dev` and verify server starts on localhost:3000
- [ ] Verify no TypeScript errors in terminal
- [ ] Verify Tailwind CSS compiling correctly
- [ ] Check package.json contains all required dependencies with exact versions
- [ ] Test hot module replacement works correctly

## Dev Notes

### Technical Summary

Initialize a modern Next.js 16 project with the App Router architecture, TypeScript for type safety, and Tailwind CSS 4 for styling. Configure Cloudflare Workers deployment using the @opennextjs/cloudflare adapter to support SSR/ISR capabilities. Set up development tooling (ESLint, Prettier) and create the complete folder structure outlined in the tech spec. Implement base layout and page components with proper metadata configuration for SEO.

**Design System:**
- **Aesthetic:** Premium minimalism with borderless, clean design
- **Color Palette:** Warm cream background (#fffdf6), warm yellow primary (#f9d544), soft lavender secondary (#cab5d4), bright yellow accent (#ffe362)
- **Typography:** Poppins font (weights: 400, 600, 700) for clean, modern feel
- **Design Principles:** No borders, subtle shadows for depth, generous white space, clean typography

**Key Technical Decisions:**
- Next.js 16 App Router (not Pages Router) for modern React Server Components
- TypeScript strict mode for maximum type safety
- Tailwind CSS 4.1.16 with custom design tokens (borderless, premium minimalist aesthetic)
- Cloudflare Workers (not Pages) for SSR support and future dynamic features
- Framer Motion imported as `motion/react` (new import path)
- tw-animate-css for Tailwind v4 compatible animations

### Project Structure Notes

- **Files to create:**
  - app/layout.tsx (with Poppins font import from next/font/google)
  - app/page.tsx, app/globals.css
  - components/sections/ (empty directory)
  - components/ui/ (empty directory)
  - lib/constants.ts, lib/cloudflare-image-loader.ts
  - public/images/, public/icons/ (empty directories)
  - wrangler.jsonc, next.config.ts (updated)
  - .prettierrc
  - tsconfig.json (updated for strict mode)
  - package.json (updated scripts)

- **Expected test locations:**
  - N/A (infrastructure setup story - no tests required)

- **Estimated effort:** 2 story points (1-2 days)

### References

- **Tech Spec:** See tech-spec.md → Development Setup, Implementation Stack, Deployment Strategy
- **Architecture:** tech-spec.md → Technical Approach (Architecture section)
- **Setup Commands:** tech-spec.md → Development Setup → Initial Setup

## Dev Agent Record

### Context Reference

- docs/stories/story-landing-page-1.context.md

### Agent Model Used

<!-- Will be populated during dev-story execution -->

### Debug Log References

<!-- Will be populated during dev-story execution -->

### Completion Notes List

<!-- Will be populated during dev-story execution -->

### File List

<!-- Will be populated during dev-story execution -->
