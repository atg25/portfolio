# Implementation Guide: The Creator Archetype (Genuine & Approachable)

## Overview

This project is a Next.js portfolio site with a focus on modularity, data visualization, and clean, accessible UI components. The codebase is organized under `src/app` for pages and features, and `src/components` for reusable UI elements. All code is kept DRY, accessible, and consistent with the design system.

## Key Features & Structure (as of May 2025)

- **LLM Chat Demo**: `/rag-demo` — A branded, multi-turn chat interface powered by OpenAI, with creative UI, avatars, and accessibility features.
- **Project Showcase**: `/projects` — Uses the reusable `ProjectCard` component for all projects, ensuring no duplication and easy updates.
- **Data Visualization Dashboard**: `/dataviz` — Modular charts (ComparisonChart, DonutChart, GrowthBarChart, etc.) using data from `data.json`.
- **Experience & Contact**: `/experience`, `/contact` — Clean, accessible, and on-brand.
- **Navigation**: `main-nav.tsx` — Responsive, accessible, and uses shadcn/ui Sheet for mobile.
- **Utilities**: Only the `cn` utility remains in `src/lib/utils.ts` for className merging.

## LLM Chat Demo Implementation

- **Frontend**: `src/app/rag-demo/page.tsx` — Creative, accessible chat UI with avatars, gradient backgrounds, and a typing indicator. Uses shadcn/ui Card and Button components.
- **Backend**: `src/app/api/rag/route.ts` — Calls OpenAI’s chat completion API using an environment variable for the API key. Handles errors gracefully.
- **Branding**: All colors, spacing, and typography follow the Creator archetype and your design system.

## ProjectCard Pattern

- All project showcases use the `ProjectCard` component (`src/components/ui/ProjectCard.tsx`), reducing duplication and improving maintainability.
- Project data is passed as props, and the card supports links to GitHub, Figma, and live demos.

## Code Cleanliness & DRY Principles

- No unused code, imports, or legacy patterns remain in `src/app` or `src/components`.
- All components use the `cn` utility for className merging.
- Only shadcn/ui and design system components are used for UI.
- Accessibility (ARIA, keyboard, color contrast) is maintained throughout.

## File Structure Highlights

- `src/app/` — Main application pages and feature folders
- `src/components/` — Shared UI components (navigation, cards, buttons, etc.)
- `src/lib/` — Utility functions (only `cn`)

## How to Extend

- Add new features by creating modular components in `src/components/ui` and referencing them in pages.
- Follow the ProjectCard and LLM Chat patterns for new interactive features.
- Keep docs/05-components.md and docs/06-implementation.md up to date with any new patterns or components.

---

_Last updated: May 4, 2025_
