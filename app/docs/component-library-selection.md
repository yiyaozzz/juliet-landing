# Component & Library Selection for Juliet Landing Page

Based on the requirements outlined in the user story `story-landing-page-2.md`, the following components and libraries have been identified for building the landing page.

## Core UI Components (shadcn/ui)

The following components from the shadcn/ui library are either already present or will be used to construct the core UI elements.

| Component | File Path | Usage Notes |
| :--- | :--- | :--- |
| **Button** | `src/components/ui/button.tsx` | Reusable component for all calls-to-action (CTAs) and interactive elements. The story requires `primary` and `secondary` variants with specific styling (shadows, hover states). |
| **Card** | `src/components/ui/card.tsx` | A versatile container component that will be used for Testimonial cards and Benefit cards. The design requires a borderless look with soft shadows. |
| **Accordion** | `src/components/ui/accordion.tsx` | While not explicitly in the acceptance criteria for Story 2, this component is present in the project and could be used for FAQ sections or other collapsible content areas in the future. |

## Custom Components to be Built

These components are not standard shadcn/ui offerings and will be custom-built using Tailwind CSS and other libraries.

| Component | File Path | Description |
| :--- | :--- | :--- |
| **Navbar** | `src/components/layout/Navbar.tsx` | A persistent navigation bar at the top of the page. It will be sticky and include the logo, navigation links, and a CTA button. |
| **Timeline** | `src/components/sections/HowItWorksSection.tsx` | A visual element to connect the steps in the "How It Works" section. This will be created using basic layout primitives and styled with Tailwind CSS. |
| **Marquee** | `src/components/sections/SocialProofSection.tsx` | An infinite scrolling marquee effect for the testimonials. This will be implemented using CSS animations or a library like `react-fast-marquee`. |

## Supporting Libraries & Frameworks

| Library | Purpose |
| :--- | :--- |
| **React (Next.js)** | The core framework for building the application, utilizing Server Components. |
| **Tailwind CSS** | For all styling, following a utility-first approach to match the project's conventions. |
| **Framer Motion** | For all animations, including section fade-ins, staggers, and hover effects to create a smooth, performant user experience. |
| **Lucide React** | The icon library of choice, integrated with shadcn/ui, to provide icons for the Benefits section and other UI elements. |
