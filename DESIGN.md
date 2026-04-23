---
version: alpha
name: balajmarius.com
description: >
  Editorial, token-first design system for a personal website. Warm neutrals
  and one blue accent, paired with a high-contrast serif italic for rhetorical
  emphasis. Motion is opacity-first and understated.
colors:
  primary: "#0E63FF"
  secondary: "#34384C"
  tertiary: "#F05222"
  neutral: "#FAFAFA"
  on-primary: "#FFFFFF"
  on-neutral: "#34384C"
  muted: "#6E7394"
  border: "#DFE0E7"
  surface: "#F2F5F9"
  surface-alt: "#E6EEF6"
  blue-100: "#CFE0FF"
  blue-200: "#9FC0FF"
  blue-300: "#6FA1FF"
  blue-400: "#3E82FF"
  blue-500: "#0E63FF"
  gray-100: "#DFE0E7"
  gray-200: "#F2F5F9"
  gray-300: "#FAFAFA"
  gray-400: "#E6EEF6"
  gray-500: "#6E7394"
  gray-600: "#34384C"
  purple-100: "#F0DCFF"
  yellow-100: "#FFF6D3"
  green-100: "#E4F7D3"
  green-200: "#1ED760"
  orange-100: "#FFC0A4"
  orange-200: "#F05222"
  orange-300: "#F9B797"
typography:
  h1:
    fontFamily: GeneralSans
    fontSize: 1.875rem
    lineHeight: 3rem
    fontWeight: 400
  h2:
    fontFamily: Gambetta
    fontSize: 1.5rem
    lineHeight: 2rem
    fontWeight: 400
    fontStyle: italic
  subtitle1:
    fontFamily: Gambetta
    fontSize: 1rem
    lineHeight: 1.5rem
    fontWeight: 400
    fontStyle: italic
  subtitle2:
    fontFamily: GeneralSans
    fontSize: 1rem
    lineHeight: 1.5rem
    fontWeight: 400
  body1:
    fontFamily: GeneralSans
    fontSize: 1rem
    lineHeight: 1.5rem
    fontWeight: 400
  body2:
    fontFamily: GeneralSans
    fontSize: 0.875rem
    lineHeight: 1.25rem
    fontWeight: 400
  overline:
    fontFamily: Gambetta
    fontSize: 0.875rem
    lineHeight: 1.25rem
    fontWeight: 400
    fontStyle: italic
  caption:
    fontFamily: Gambetta
    fontSize: 0.75rem
    lineHeight: 1rem
    fontWeight: 400
    fontStyle: italic
  small:
    fontFamily: GeneralSans
    fontSize: 0.75rem
    lineHeight: 1rem
    fontWeight: 400
  mono:
    fontFamily: RobotoMono
    fontSize: 0.875rem
    lineHeight: 1.25rem
    fontWeight: 400
rounded:
  none: 0px
  sm: 2px
  md: 6px
  lg: 24px
  pill: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  "2xl": 32px
components:
  button-primary:
    backgroundColor: transparent
    textColor: "{colors.gray-600}"
    typography: "{typography.body1}"
    rounded: "{rounded.sm}"
    padding: 4px 8px
  button-primary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
  button-primary-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
  button-transparent:
    backgroundColor: transparent
    textColor: "{colors.gray-600}"
    typography: "{typography.body1}"
    padding: 0
  chip-default:
    backgroundColor: "{colors.yellow-100}"
    textColor: "{colors.gray-600}"
    typography: "{typography.body2}"
    rounded: "{rounded.lg}"
    padding: 2px 12px
  chip-primary:
    backgroundColor: "{colors.blue-100}"
    textColor: "{colors.gray-600}"
    rounded: "{rounded.lg}"
  chip-secondary:
    backgroundColor: "{colors.purple-100}"
    textColor: "{colors.gray-600}"
    rounded: "{rounded.lg}"
  chip-success:
    backgroundColor: "{colors.green-100}"
    textColor: "{colors.gray-600}"
    rounded: "{rounded.lg}"
  chip-outlined:
    backgroundColor: transparent
    textColor: "{colors.gray-600}"
    rounded: "{rounded.lg}"
  link-default:
    textColor: "{colors.primary}"
    typography: "{typography.body1}"
  surface-page:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-neutral}"
---

## Overview

**Editorial minimalism with a single accent.** The site reads like a quiet
publication: warm off-white paper, ink-dark body copy, a lone blue used
sparingly to mark a call-to-action or a live element. A serif italic
(Gambetta) carries rhetorical weight inside sans-serif prose — it is the one
visual flourish the system allows.

The design system is **token-first**. Every color, font, radius, and shadow
lives in `src/static/css/globals.css` under Tailwind v4's `@theme inline`
block. Arbitrary values (`text-[#...]`, `p-[13px]`) are never acceptable when
a token exists. Components expose small `as const` variant unions rather than
freeform style props.

## Colors

The palette is built around **warm grays** and a **single blue accent**.
Tints and shades are named by hue and step (100 = lightest, 600 = darkest).
Every color is a valid Tailwind class (`bg-blue-500`, `text-gray-600`).

- **Primary (`#0E63FF`).** The interaction color. Links, focus rings, CTA
  hovers. Used sparingly — if more than one element is blue in a viewport,
  something is wrong.
- **Secondary (`#34384C`).** Default body text (`gray-600`). Near-black with a
  slight warm cast — softer than pure black against the neutral background.
- **Tertiary (`#F05222`).** Reserved accent (`orange-200`). Currently unused
  in the main site chrome; available for illustration or brand moments.
- **Neutral (`#FAFAFA`).** The page surface (`gray-300`). Warm off-white,
  never pure `#FFF`.
- **Muted (`#6E7394`).** Supporting metadata: timestamps, captions, secondary
  labels.
- **Border (`#DFE0E7`).** Hairline dividers and card outlines. Almost never
  more than 1px.

The pastel series (`purple-100`, `yellow-100`, `green-100`, `orange-100`,
`blue-100`) exists exclusively as **chip backgrounds**. Do not use them as
page surfaces or text colors — they are tags, not UI.

## Typography

Three locally-hosted families, loaded via `next/font/local`:

- **GeneralSans** (`font-sans`) — default UI text. Regular / Medium / Bold.
- **Gambetta** (`font-serif`) — editorial emphasis, used almost exclusively in
  its italic cut. Regular / Medium / Bold + MediumItalic.
- **RobotoMono** (`font-mono`) — code and tabular data. Regular only.

All typography flows through the `<Typography>` component in
`src/components/typography`. Hand-rolling `text-*` classes on `<p>` or `<h1>`
is a smell — it means a variant is missing. Add the variant to the component
instead.

### Rich text emphasis

The canonical rhetorical accent is **serif italic in the primary blue**.
Delivered via `next-intl`'s `t.rich` with a `serif` renderer:

```tsx
{
  t.rich("about.title", {
    serif: (chunks) => (
      <span className="font-serif italic text-blue-500">{chunks}</span>
    ),
  });
}
```

Translation strings use XML-like tags matching renderer keys:

```json
{ "about.title": "I build <serif>digital products</serif>." }
```

## Layout

- **Grid.** Single-column, centered, max-width constrained. The site is
  document-shaped, not app-shaped.
- **Spacing scale.** Multiples of 4px (the Tailwind default). Prefer the
  scale tokens (`spacing.sm` = 8, `spacing.lg` = 16) — reach for arbitrary
  pixel values only at the layout boundary.
- **Responsive.** Mobile-first. Folder preview cards and other decorative
  elements are hidden below the `md` breakpoint (see
  `fix: hide folder preview cards on mobile`).
- **Sections.** Page content is composed from `section` components in
  `src/sections/`. A section is a self-contained horizontal band.

## Elevation & Depth

The system is **almost flat**. Depth is expressed through color contrast, not
shadow.

The one shadow token is `drop-shadow-inset-top`: a 1px inset-looking
highlight in `blue-500`, driven by `--util-ds-*` variables in `globals.css`.
It is used to hint interactivity on hover states, not to lift surfaces.

No `box-shadow` blur. No multi-layer shadows. If you need a card to stand
apart, change its background to `gray-200` or add a 1px `gray-100` border.

## Shapes

- **`rounded.none` (0px).** Sections, page containers, images.
- **`rounded.sm` (2px).** Buttons, inputs, small interactive surfaces. This
  is the default corner radius for anything clickable.
- **`rounded.md` (6px).** Cards, larger surfaces.
- **`rounded.lg` (24px).** Reserved for the scroll-driven reveal animation
  (see `keyframes.ts` → `scrollTransforms.borderRadius.exit: 24`).
- **`rounded.pill` (9999px).** Chips only.

## Components

Each component lives under `src/components/<name>/` with three files:
`<name>.tsx`, `types.ts`, and `index.ts` (barrel).

| Component                                  | Purpose                                                                                                          |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| `button`                                   | Primary action. Variants: `default`, `transparent`. Hover paints the background `blue-500`, text flips to white. |
| `icon-button`                              | Square icon-only affordance.                                                                                     |
| `link`                                     | Styled anchor / `next/link` wrapper.                                                                             |
| `chip`                                     | Label / tag. Discriminated: `default` (colored fill) or `outlined` (1px `gray-100` border). Pill shape.          |
| `card`                                     | Surface container.                                                                                               |
| `section`                                  | Page-level band.                                                                                                 |
| `divider`                                  | 1px hairline separator.                                                                                          |
| `typography`                               | All text. See `typography` tokens above.                                                                         |
| `svg-icon`                                 | Inline SVG wrapper.                                                                                              |
| `scroll-container`                         | Horizontal scroll region, scrollbar hidden via the `scrollbar-w-none` utility.                                   |
| `books-list`, `folders-list`, `posts-list` | Content list layouts.                                                                                            |

### Variant pattern

Variants are `as const` arrays, paired with a class-name map:

```ts
export const ButtonVariants = ["default", "transparent"] as const;
export type ButtonVariant = (typeof ButtonVariants)[number];

const buttonVariantClassNames: Record<ButtonVariant, string> = {
  transparent: "cursor-pointer",
  default: "cursor-pointer rounded-sm px-2 py-1 text-gray-600 hover:bg-blue-500 hover:text-white",
};

className={cn("transition-colors ease-in", buttonVariantClassNames[variant])}
```

When a variant changes which props are required, use a discriminated union
(see `chip/chip.tsx` — `outlined` forbids `color`).

### Motion

- Library: `framer-motion`.
- **Default easing: `[0.33, 1, 0.68, 1]`** (ease-out quartic). Reach for it
  unless a specific interaction calls for something different.
- Default pattern: opacity fade, optionally paired with a small `y` offset
  (`y: 10 → 0`). Durations 0.2–0.5s.
- Reusable variants live in `src/utils/keyframes.ts`
  (`appBarAnimation`, `foldersListAnimation`, `scrollTransforms`). Import;
  don't redefine inline.
- **Subtle motion rule**: avoid `AnimatePresence` where exit animations
  fight layout reflow. Prefer opacity-only fades in those spots.

## Do's and Don'ts

**Do**

- Use `<Typography variant="…">` for every piece of text.
- Reach for the token (`bg-blue-500`, `spacing.md`) before the raw value.
- Compose hover/active state via the existing class-name map, not ad-hoc classes.
- Keep motion quiet: opacity first, then small `y`.
- Add a new variant to a component when a one-off style keeps recurring.

**Don't**

- Don't use arbitrary Tailwind values (`text-[#0E63FF]`, `rounded-[3px]`) when
  a token covers the case.
- Don't paint surfaces with the pastel chip palette
  (`yellow-100`/`purple-100`/etc.) — they are for tags only.
- Don't introduce `box-shadow` blur to create depth. The system is flat.
- Don't animate layout-affecting properties (`height`, `margin`) inside an
  `AnimatePresence` — use opacity-only fades there.
- Don't `"use client"` by default. Add it only when the component genuinely
  needs hooks, state, or browser APIs.
- Don't skip Husky hooks. Commits must pass `commitlint`, `oxlint`, and
  `oxfmt`.
