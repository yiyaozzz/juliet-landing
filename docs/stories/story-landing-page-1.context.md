<story-context id="story-landing-page-1" v="1.0">
  <metadata>
    <epicId>landing-page</epicId>
    <storyId>1</storyId>
    <title>Project Setup & Structure</title>
    <status>ready-for-dev</status>
    <generatedAt>2025-10-26</generatedAt>
    <generator>BMAD Story Context Workflow</generator>
    <sourceStoryPath>docs/stories/story-landing-page-1.md</sourceStoryPath>
  </metadata>

  <story>
    <asA>developer</asA>
    <iWant>a fully configured Next.js 16 project with proper file structure and build tooling</iWant>
    <soThat>I can efficiently build the landing page components with type safety and modern development practices</soThat>
    <tasks>
### Setup Phase (AC: #1, #5, #9)
- Run `npx create-next-app@latest juliet-landing --typescript --tailwind --app --eslint`
- Install core dependencies: lucide-react@0.468.0, framer-motion@12.23.24 (import as motion/react)
- Install animation library: tw-animate-css (Tailwind v4 compatible)
- Install Prettier: prettier@3.4.2, prettier-plugin-tailwindcss
- Install Shadcn UI components (Option A: MCP or Option B: CLI)
- Configure TypeScript strict mode in tsconfig.json
- Create .prettierrc with semi, trailingComma, singleQuote, tabWidth settings

### Folder Structure (AC: #2)
- Create components/sections/ directory for landing page sections
- Create components/ui/ directory for reusable UI components
- Create lib/ directory for constants and utilities
- Create public/images/ directory for image assets
- Create public/icons/ directory for icon assets

### Tailwind Configuration (AC: #3)
- Configure tailwind.config.ts with design tokens (colors, shadows, font)
- Update app/globals.css with CSS custom properties and utility classes
- Configure borderless design system (no default borders)
- Test Tailwind build process and verify colors work

### Cloudflare Deployment Setup (AC: #4)
- Install @opennextjs/cloudflare adapter and wrangler@latest
- Create wrangler.jsonc with worker configuration
- Create lib/cloudflare-image-loader.ts for optimized image loading
- Update next.config.ts with custom image loader
- Add deployment scripts to package.json (preview, deploy)

### Base Application Structure (AC: #6, #7)
- Implement app/layout.tsx with Poppins font import from next/font/google
- Implement app/page.tsx with main landing page component skeleton
- Create app/globals.css with Tailwind directives and base styles
- Create lib/constants.ts with placeholder structure
- Add TypeScript interfaces for constants data structures

### Verification (AC: #8, #10)
- Run `npm run dev` and verify server starts on localhost:3000
- Verify no TypeScript errors in terminal
- Verify Tailwind CSS compiling correctly
- Check package.json contains all required dependencies with exact versions
- Test hot module replacement works correctly
    </tasks>
  </story>

  <acceptanceCriteria>
AC1: Next.js 16.0.0 project initialized with TypeScript 5.7.2, Tailwind CSS 4.1.16, and ESLint 9.17.0
AC2: Complete folder structure created matching tech spec (components/sections, components/ui, lib, public)
AC3: Tailwind configured with custom design tokens (spacing, typography, colors) and tw-animate-css for animations
AC4: Cloudflare deployment configured (wrangler.jsonc, @opennextjs/cloudflare adapter, package.json scripts)
AC5: TypeScript strict mode enabled with proper tsconfig.json configuration
AC6: Base layout.tsx and page.tsx implemented with metadata and root structure
AC7: constants.ts created in lib/ with placeholder content structure
AC8: Development server runs successfully without errors (`npm run dev`)
AC9: Prettier configured with prettier-plugin-tailwindcss for code formatting
AC10: All dependencies installed and package.json contains exact versions from tech spec
  </acceptanceCriteria>

  <artifacts>
    <docs>
      <doc>
        <path>docs/tech-spec.md</path>
        <title>juliet-landing - Technical Specification</title>
        <section>Development Setup</section>
        <snippet>Complete setup instructions for Next.js 16 with TypeScript, Tailwind CSS 4, Cloudflare Workers deployment. Includes exact dependency versions, configuration files, and design token setup.</snippet>
      </doc>
      <doc>
        <path>docs/tech-spec.md</path>
        <title>juliet-landing - Technical Specification</title>
        <section>Implementation Stack</section>
        <snippet>Core Framework: Next.js 16.0.0, React 19.0.0, TypeScript 5.7.2. Styling: Tailwind CSS 4.1.16, PostCSS 8.4.49. UI Components: Shadcn UI 3.5.0, Lucide React 0.468.0, Framer Motion 12.23.24. Development Tools: ESLint 9.17.0, Prettier 3.4.2.</snippet>
      </doc>
      <doc>
        <path>docs/tech-spec.md</path>
        <title>juliet-landing - Technical Specification</title>
        <section>Design Token Configuration</section>
        <snippet>Colors: background (#fffdf6), primary (#f9d544), secondary (#cab5d4), accent (#ffe362). Font: Poppins (weights 400, 600, 700) via next/font/google. Shadows: soft (0 2px 8px rgba 0.08), hover (0 4px 16px rgba 0.12). Borderless design principle - use shadows for depth.</snippet>
      </doc>
      <doc>
        <path>docs/tech-spec.md</path>
        <title>juliet-landing - Technical Specification</title>
        <section>Cloudflare Configuration</section>
        <snippet>wrangler.jsonc setup with compatibility_date: 2024-12-30, nodejs_compat flag. Package.json scripts for preview and deploy. Custom image loader for Cloudflare image optimization via /cdn-cgi/image/.</snippet>
      </doc>
      <doc>
        <path>docs/epics.md</path>
        <title>juliet-landing - Epic Breakdown</title>
        <section>Story 1: Project Setup & Structure</section>
        <snippet>Deliverable: Runnable Next.js app with complete file structure, base layout, and configuration. Foundation story that enables Stories 2 and 3.</snippet>
      </doc>
    </docs>

    <code>
      <!-- No existing code - greenfield project -->
      <note>This is a greenfield story creating initial project structure. No existing code to reference.</note>
    </code>

    <dependencies>
      <!-- Dependencies to be installed during this story -->
      <framework>
        <name>Next.js</name>
        <version>16.0.0</version>
        <ecosystem>node</ecosystem>
      </framework>
      <framework>
        <name>React</name>
        <version>19.0.0</version>
        <ecosystem>node</ecosystem>
      </framework>
      <framework>
        <name>TypeScript</name>
        <version>5.7.2</version>
        <ecosystem>node</ecosystem>
      </framework>
      <styling>
        <name>Tailwind CSS</name>
        <version>4.1.16</version>
      </styling>
      <styling>
        <name>PostCSS</name>
        <version>8.4.49</version>
      </styling>
      <styling>
        <name>Autoprefixer</name>
        <version>10.4.20</version>
      </styling>
      <ui>
        <name>Shadcn UI</name>
        <version>3.5.0</version>
      </ui>
      <ui>
        <name>Lucide React</name>
        <version>0.468.0</version>
      </ui>
      <ui>
        <name>Framer Motion</name>
        <version>12.23.24</version>
        <note>Import as motion/react (not framer-motion)</note>
      </ui>
      <animation>
        <name>tw-animate-css</name>
        <note>Tailwind v4 compatible animations</note>
      </animation>
      <dev>
        <name>ESLint</name>
        <version>9.17.0</version>
      </dev>
      <dev>
        <name>Prettier</name>
        <version>3.4.2</version>
      </dev>
      <dev>
        <name>prettier-plugin-tailwindcss</name>
        <version>latest</version>
      </dev>
      <deployment>
        <name>@opennextjs/cloudflare</name>
        <version>latest</version>
        <note>Cloudflare Workers adapter for Next.js</note>
      </deployment>
      <deployment>
        <name>wrangler</name>
        <version>latest</version>
        <devDependency>true</devDependency>
      </deployment>
    </dependencies>
  </artifacts>

  <constraints>
- **Architecture**: Use Next.js 16 App Router (NOT Pages Router) for modern React Server Components
- **TypeScript**: Enable strict mode for maximum type safety
- **Design System**: Borderless aesthetic - no hard borders, use subtle shadows (shadow-soft, shadow-hover) for depth
- **Color Palette**: Use exact hex values: background (#fffdf6), primary (#f9d544), secondary (#cab5d4), accent (#ffe362)
- **Font**: Poppins font weights: 400 (regular), 600 (semibold), 700 (bold). Import via next/font/google, NOT via external stylesheet
- **Motion Import**: Import Framer Motion as `motion/react` (new import path), NOT `framer-motion`
- **Deployment Target**: Cloudflare Workers (NOT Pages) for SSR support and future dynamic features
- **Code Quality**: All files must pass ESLint and Prettier checks
- **Package Versions**: Use exact versions from tech spec - no "latest" or range operators in package.json
- **File Organization**: Match tech spec source tree exactly (components/sections, components/ui, lib, public)
  </constraints>

  <interfaces>
    <!-- No existing interfaces - this story creates the foundation -->
    <note>This story establishes the foundation. Future interfaces will be defined in Stories 2 and 3 (UI components, section components).</note>
  </interfaces>

  <tests>
    <standards>
N/A - This is an infrastructure setup story. No automated tests required. Verification is manual: ensure dev server runs without errors, Tailwind compiles correctly, and TypeScript shows no type errors.
    </standards>

    <locations>
N/A - No test files for this story
    </locations>

    <ideas>
AC8 Verification: Run `npm run dev` and confirm server starts successfully on localhost:3000
AC8 Verification: Open browser to localhost:3000 and verify page renders without errors
AC1 Verification: Check package.json contains Next.js 16.0.0, TypeScript 5.7.2, Tailwind CSS 4.1.16, ESLint 9.17.0
AC3 Verification: Inspect browser DevTools to verify CSS custom properties are defined (--background, --primary, --secondary, --accent)
AC3 Verification: Test shadow-soft and shadow-hover classes render correct box-shadow values
AC5 Verification: Check tsconfig.json has "strict": true
AC6 Verification: Verify app/layout.tsx renders with Poppins font applied
AC9 Verification: Run `npx prettier --check .` to verify formatting configuration works
AC10 Verification: All dependencies listed in package.json with exact versions (no ^ or ~)
    </ideas>
  </tests>
</story-context>
