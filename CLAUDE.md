# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Juliet Landing is a premium, aesthetic landing page for First Date Labs built with Next.js 16, React 19, Tailwind CSS 4, and deployed to Cloudflare Workers via the OpenNext adapter. The project uses a borderless design aesthetic with cream (`#fffdf6`), gold (`#f9d544`), purple (`#cab5d4`), and accent yellow (`#ffe362`) colors.

## Essential Commands

All commands must be run from the `app/` directory:

```bash
cd app
npm run dev        # Next.js dev server on localhost:3000 (fast refresh)
npm run preview    # Build Worker bundle and serve via Wrangler (production runtime)
npm run deploy     # Build and deploy to Cloudflare
npm run lint       # ESLint with --max-warnings=0
npm run cf-typegen # Generate cloudflare-env.d.ts bindings
```

**Critical:** Always run `npm run preview` before `npm run deploy` to catch adapter/runtime issues that the dev server cannot detect.

## Deployment Architecture

### Cloudflare Workers Setup

- **Adapter:** `@opennextjs/cloudflare` converts Next.js app to Cloudflare Worker
- **Configuration files:**
  - `open-next.config.ts` - OpenNext Cloudflare adapter config
  - `next.config.ts` - React Compiler enabled, custom image loader for Cloudflare Images
  - `wrangler.jsonc` - Worker entry point (`.open-next/worker.js`), nodejs_compat flag, custom domains
- **Custom domains:** `firstdatelabs.com` and `www.firstdatelabs.com` configured in wrangler.jsonc routes
- **Image optimization:** Custom loader at `src/lib/cloudflare-image-loader.ts` integrates with Cloudflare Images

### CI/CD Pipeline

- **Workflow:** `.github/workflows/deploy.yml` deploys on every push to `main`
- **Requirements:** Repository secrets `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`
- **Process:** Checkout → Install Node 20 → `npm ci` → `npm run lint` → `npm run deploy`
- **Concurrency:** Limited to one active deploy (`cloudflare-deploy-main` group)

## Code Architecture

### Project Structure

```
app/
├── src/
│   ├── app/             # Next.js app router
│   │   ├── layout.tsx   # Root layout, Poppins font, metadata
│   │   └── page.tsx     # Landing page skeleton
│   ├── components/
│   │   └── ui/          # Radix UI primitives (accordion, button, card)
│   └── lib/
│       ├── constants.ts           # All static copy & data models
│       ├── cloudflare-image-loader.ts
│       └── utils.ts               # cn() for className merging
├── public/              # Static assets
├── tailwind.config.ts   # Design tokens, custom shadows
└── wrangler.jsonc       # Cloudflare Worker configuration
```

### Design System

- **Global styles:** `src/app/globals.css` defines CSS variables (`--background`, `--primary`, `--secondary`, `--accent`) and custom utilities (`.shadow-soft`, `.shadow-hover`, `.no-border`)
- **Tailwind tokens:** Extended in `tailwind.config.ts` with project colors, Poppins font family, and premium shadows
- **Component library:** Radix UI primitives styled with Tailwind using `class-variance-authority` and `clsx`
- **Typography:** Poppins variable font loaded via Next.js font system in `layout.tsx`

### Data Layer

- **Content structure:** All landing page content lives in `src/lib/constants.ts` as typed exports:
  - `HeroContent` - eyebrow, title, description, CTAs, metrics
  - `LandingSection[]` - section metadata for future stories
  - `Testimonial[]` - social proof data
  - `PricingTier[]` - pricing cards
  - `FaqItem[]` - FAQ accordion items
- **Pattern:** Components consume constants to separate content from presentation logic
- **Future bindings:** `cf-typegen` updates TypeScript definitions when KV/R2/D1 bindings are added to wrangler.jsonc

## Development Workflow

### BMAD Process

This repository uses the BMAD (Build, Measure, Analyze, Deploy) methodology tracked in `docs/`:

- **Stories:** Tracked in `docs/stories/story-landing-page-{n}.md`
- **Status:** `docs/sprint-status.yaml` tracks epic and story progression (backlog → drafted → ready-for-dev → in-progress → review → done)
- **Custom workflows:** `.claude/commands/bmad/bmm/workflows/` contains specialized development workflows
  - Use `/dev-story` workflow to implement stories
  - Use `/review-story` for SM review process
  - Use `/story-done` to mark stories complete

### Story Implementation Pattern

1. Read current story file from `docs/stories/`
2. Check `docs/sprint-status.yaml` for current epic context
3. Update `src/lib/constants.ts` with new content types if needed
4. Implement components referencing constants
5. Test with `npm run preview` before marking story complete
6. Update sprint-status.yaml when transitioning story states

### Adding Cloudflare Bindings

When adding KV namespaces, R2 buckets, or D1 databases:

1. Update `wrangler.jsonc` with binding configuration
2. Run `npm run cf-typegen` to regenerate TypeScript definitions
3. Import and use bindings via `CloudflareEnv` interface in server components

## Key Constraints

- **Working directory:** All npm commands run from `app/` subdirectory, not repository root
- **Deployment validation:** `npm run preview` is mandatory before `npm run deploy` to catch OpenNext adapter issues
- **Lint enforcement:** CI fails if `npm run lint` reports any warnings (--max-warnings=0)
- **Image optimization:** Always use Next.js `<Image>` component - custom loader handles Cloudflare Images integration
- **No manual DNS:** Custom domains configured in wrangler.jsonc; Cloudflare provisions DNS + TLS automatically
