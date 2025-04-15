Typography System: The Everyman AI Consultancy

Psychological Foundation
Our typography system is designed for clarity, warmth, and approachability. It leverages reading behavior patterns to deliver information that is easy to understand and welcoming, embodying the inclusive spirit of the Everyman archetype. Each choice optimizes processing while reinforcing our core identity.

Primary Typeface (Body & UI): Inter
Inter is retained for its exceptional clarity and neutral baseline, making information accessible to everyone. Its neutrality allows the message to be approachable and trustworthy.

- Low cognitive load: Ensures ideas are easily processed by all.
- High recognition speed: Directness and efficiency.
- Cultural adaptability: Universally friendly.
- Strong cross-device rendering: Consistency for all users.
  // Implementation in Tailwind config (Remains the same for sans)
  const defaultTheme = require('tailwindcss/defaultTheme')
  const { fontFamily } = require("tailwindcss/defaultTheme") // Ensure fontFamily is imported

module.exports = {
theme: {
extend: {
fontFamily: {
// Keep Inter as the primary sans-serif base
sans: ['"Inter var"', ...fontFamily.sans],
// ADD Monospace for Everyman Accent
mono: ['"IBM Plex Mono"', ...fontFamily.mono], // Example: IBM Plex Mono
},
},
},
}

Secondary / Display Typeface (Headlines & Accent): [e.g., IBM Plex Mono, JetBrains Mono, or a Friendly Geometric Sans]
(Recommendation: Select ONE quality Monospace or Friendly Geometric Sans)
To add a touch of personality while remaining approachable. Monospace fonts evoke clarity and transparency, while geometric sans-serifs provide a friendly, open feel. This font provides:

- Friendly Contrast: Stands out without being intimidating.
- Technical Clarity: Signals expertise in a relatable way.
- Approachable Edge: Visually represents a welcoming, practical brand.
  // Add to app/layout.tsx or CSS import (Example for IBM Plex Mono)
  import '@fontsource/ibm-plex-mono'; // Install via npm install @fontsource/ibm-plex-mono

Type Scale
The scale provides structure and supports clear communication. We retain a functional scale that encourages easy reading and gentle contrast between levels.
// Font size scale in Tailwind config (Largely retained, minor emphasis tweaks perhaps)
fontSize: {
'xs': ['0.75rem', { lineHeight: '1rem' }], // Utility, fine print
'sm': ['0.875rem', { lineHeight: '1.25rem' }], // Supporting context
'base': ['1rem', { lineHeight: '1.625' }], // BODY - Slightly looser leading for readability
'lg': ['1.125rem', { lineHeight: '1.75rem' }], // Sub-headings
'xl': ['1.25rem', { lineHeight: '1.75rem' }], // Sub-headings
'2xl': ['1.5rem', { lineHeight: '2rem' }], // Key statements, minor headlines
'3xl': ['1.875rem', { lineHeight: '2.25rem' }], // Headlines
'4xl': ['2.5rem', { lineHeight: '2.75rem' }], // IMPACT Headlines - Increased jump
'5xl': ['3.25rem', { lineHeight: '1' }], // MAJOR Impact
'6xl': ['4rem', { lineHeight: '1' }], // Disruptive Statements
// 7xl+ for rare, highly intentional moments
'7xl': ['5rem', { lineHeight: '1' }],
'8xl': ['6rem', { lineHeight: '1' }],
'9xl': ['8rem', { lineHeight: '1' }],
}

Psychological Hierarchy (Everyman Application)
Structured for clarity and approachability.
Headlines (Clarity Layer)
Font: [Chosen Secondary/Display Font, e.g., IBM Plex Mono]
Weight: 500 (Medium) to 700 (Bold) - Strong, but never harsh.
Sizes: 3xl-7xl+ (Use larger sizes for important statements)
Tracking: Normal to slightly tight for focus.
Case: Sentence case primarily; Uppercase for emphasis only when needed.
Purpose: Welcome attention, set a clear and friendly context.
// Example usage in Next.js with Tailwind
// Using the 'mono' key defined in tailwind.config.js

<h1 className="font-mono text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
  Welcome to the Future of AI.
</h1>
// Or using a friendly geometric sans if chosen
// <h1 className="font-display text-4xl ... "> Headline </h1>

Body Text (Clarity Layer)
Font: Inter
Weight: 400 (Regular); 500 (Medium) for emphasis within text.
Size: base (1rem/16px)
Line Height: 1.625 (leading-relaxed) - Open and easy to read.
Purpose: Deliver information with maximum clarity and credibility. Build trust through transparency and warmth.

<p className="text-base text-muted-foreground leading-relaxed">
  The truth about AI implementation requires a shift in perspective. We provide evidence-based insights...
</p>

Supporting Text (Detail Layer)
Font: Inter
Weight: 400 (Regular)
Size: sm (0.875rem)
Color: Use muted colors (text-muted-foreground or similar)
Purpose: Provide essential context or secondary information in a gentle, non-distracting way.

<p className="text-sm text-muted-foreground">
  *Based on analysis of Q3 industry benchmarks. Full report available.
</p>

Responsive Behavior
Ensure clarity and legibility are maintained across all devices. Scale headline impact appropriately for smaller screens while preserving body text legibility.
// Responsive typography example in Tailwind
className="text-3xl md:text-5xl lg:text-6xl font-mono font-bold tracking-tight" // Headline example
className="text-base leading-relaxed" // Body remains consistent

Implementation Guidelines
Next.js / Tailwind / Shadcn Setup
Install Fonts:
npm install @fontsource/inter @fontsource/ibm-plex-mono // Or your chosen secondary font

Import in app/layout.tsx:
import '@fontsource/inter/variable.css'
import '@fontsource/ibm-plex-mono' // Or your chosen secondary font

Configure tailwind.config.js (as shown in Primary Typeface section, ensure mono or display key is added).
Shadcn Integration: Leverage Shadcn's utility classes but override font families/weights/tracking where needed for headlines and key elements to align with the Everyman identity. Use CSS variables for easier theming.

CSS Custom Properties
Define core typography variables reflecting the Everyman system:
/_ In your global CSS file (e.g., app/globals.css) _/
:root {
--font-sans: 'Inter var', system-ui, sans-serif;
--font-mono: 'IBM Plex Mono', monospace; /_ Or your chosen secondary font variable _/
--font-heading: var(--font-mono); /_ Default heading to mono/display _/
--line-height-body: 1.625;
}

body {
@apply font-sans; /_ Apply base font to body _/
}

/_ Apply heading font via utility or base styles _/
h1, h2, h3, h4, h5, h6 {
@apply font-heading; /_ Use the variable _/
}

Psychological Testing Protocol (Everyman Focus)
Validate against:

- Clarity & Comprehension: Is the message easy to understand?
- Approachability: Does it feel welcoming and friendly?
- Authenticity/Honesty Rating: Does it seem trustworthy?
- Brand Archetype Alignment: Does the typography feel like an Everyman?
- Accessibility: Is it easy to read for everyone?

Accessibility Considerations (Everyman Framing)
Accessibility as a Core Value: Ensure WCAG 2.1 AAA compliance to make information available to all.
Clarity for All: Ensure contrast ratios (minimum 4.5:1 for body) and scalability (200%+) are rigorously met.

Research References
(Reference standard cognitive research supporting clarity, accessibility, and universal design.)
"Typography and Cognitive Load" - Journal of Digital Psychology, 2024 (Supports baseline clarity)
"Cross-Cultural Typography Perception" - International Design Research Quarterly (Informs adaptability)
"Reading Patterns in Digital Interfaces" - Human-Computer Interaction Studies (Supports hierarchy/layout)
(Add) Mark, M. & Pearson, C.S. (2001). The Hero and the Outlaw. (Archetypal framework)
(Add) Analysis of Inclusive Brand Visual Languages (Internal or Cited Research)

This revised system maintains the crucial foundation of legibility while infusing the typography with the warmth, clarity, and approachability of the Everyman. It uses type to inform, welcome, and support. Remember, the Everyman leads by making everyone feel included, and your typography should reflect that spirit.
