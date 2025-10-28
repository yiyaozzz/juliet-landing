# Repository Guidelines

## Project Structure & Module Organization
- `app/` holds the Next.js 16 marketing site; edit routes in `app/src/app`, reusable UI in `app/src/components`, and shared utilities in `app/src/lib`.
- Static assets live in `app/public`; the custom Cloudflare image loader sits in `app/src/lib/cloudflare-image-loader.ts`.
- `docs/` and `design-docs/` carry product direction—scan them before reshaping flows or visuals.
- `bmad/` stores agent playbooks; review the relevant instructions before scripting automations or content migrations.

## Build, Test, and Development Commands
Run all commands from `app/`.
- `npm run dev` – Local Next.js server on port 3000 with React Compiler enabled.
- `npm run lint` – ESLint (`eslint.config.mjs`) with `--max-warnings=0`; fix issues before committing.
- `npm run preview` – Builds the OpenNext worker bundle and serves it via Wrangler; catch Cloudflare-only regressions here.
- `npm run deploy` – Builds and publishes the Worker; only after a green `preview` run.
- `npm run cf-typegen` – Regenerates `cloudflare-env.d.ts` after secrets or bindings change.

## Coding Style & Naming Conventions
- TypeScript everywhere; prefer server components unless interactivity demands `"use client"`.
- Prettier + the Tailwind plugin enforce 2-space indentation and class sorting—format before committing.
- Components and hooks use PascalCase (`CarouselHero.tsx`); route folders stay kebab-case, and Tailwind utility helpers end in `.ts`.

## Testing Guidelines
- Linting and `npm run preview` are the enforced gates; document manual QA in PRs until Jest/Playwright suites land.
- When adding automated tests, colocate specs under `__tests__` directories named after the component (e.g., `HeroSection.test.tsx`).
- Verify Cloudflare behaviour (image loader, Edge runtime APIs) in `preview` before requesting review.

## Commit & Pull Request Guidelines
- Follow the existing short, imperative subject style (`added landing page content`, `update layout metadata`).
- One logical change per commit; reference issue IDs in the body when applicable.
- PRs should include: summary, verification notes (`npm run lint`, `npm run preview`), screenshots or recordings for UI shifts, and any rollout considerations.
- Use draft PRs while iterating; convert to ready-for-review only after all checks pass and docs are updated.

## Deployment & Cloudflare Notes
- Deployment targets Cloudflare Workers via `@opennextjs/cloudflare`; review `open-next.config.ts` and `wrangler.jsonc` before altering runtime behaviour.
- Secrets `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` power `.github/workflows/deploy.yml`; coordinate with ops before rotating.
- Custom domains (`firstdatelabs.com`, `www.firstdatelabs.com`) are defined in `wrangler.jsonc`; confirm routing and cache headers after each deploy.
