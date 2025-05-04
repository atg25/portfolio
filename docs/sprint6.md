# Sprint 6 Plan: 219dashboard Feature Integration

**Goal:**
Port key data visualization features and charts from the legacy 219dashboard project into the new `/dataviz` page, fully branded and modularized for the Next.js portfolio.

---

## Tasks

### 1. Analysis & Planning

- [ ] Review all chart and donut components in `references/219dashboard/src/Charts/` and `references/219dashboard/src/Donuts/`.
- [ ] Select 2-3 representative charts (e.g., GrowthBarChart, DonutChart, TimeSeriesChart) to port first.
- [ ] Identify data sources (CSV/JSON) and plan data import or conversion.

### 2. Component Refactoring

- [ ] For each selected chart:
  - [ ] Rebuild as a new TypeScript component in `src/app/dataviz/components/` using Recharts (or D3 if needed).
  - [ ] Replace legacy CSS with Tailwind and shadcn/ui for layout and style.
  - [ ] Use props and TypeScript interfaces for data and configuration.
  - [ ] Ensure accessibility and responsiveness.

### 3. Data Integration

- [ ] Convert legacy CSVs to JSON or use a CSV parser for import.
- [ ] Place sample data in `src/app/dataviz/data/` or import from `public/`.
- [ ] Implement static or dynamic data loading as appropriate.

### 4. Dashboard Composition

- [ ] Import new chart components into `/src/app/dataviz/page.tsx`.
- [ ] Arrange charts in Cards, following the design system.
- [ ] Add summary/insight sections and controls as needed.

### 5. QA & Documentation

- [ ] Test all charts for accessibility, responsiveness, and brand consistency.
- [ ] Update `docs/05-components.md` and `docs/06-implementation.md` to document new chart components and data patterns.
- [ ] Run `npm run lint` and `npm run build` to ensure code quality.

---

## Deliverables

- At least 2-3 legacy charts ported and live on `/dataviz`.
- All code modular, branded, and documented.
- Updated documentation and data integration patterns.

---

## References

- Use `references/219dashboard/src/` for legacy code and data.
- Follow all guidelines in `docs/01-brand-foundation.md`, `docs/02-typography.md`, `docs/03-color-system.md`, and `docs/05-components.md`.
- Use existing UI components and utility functions for consistency.
