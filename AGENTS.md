# AGENTS.md

## Project Overview

Personal website built with Next.js (App Router), React 19, TypeScript, Tailwind CSS v4, and MDX. Hosted on Vercel.

## Commands

- `npm run dev` — start development server (use this while iterating, not `npm run build`)
- `npm run build` — production build
- `npm run lint` — run oxlint
- `npm run format` — format with oxfmt
- `npm run format:check` — check formatting with oxfmt

Always run `npm run lint` and `npm run format:check` after making changes.

## Project Structure

```
src/
├── app/          # Next.js App Router pages and layouts
├── components/   # Reusable UI components
├── sections/     # Page-level section components
├── hooks/        # Custom React hooks
├── lib/          # Data fetching and business logic
├── utils/        # Utilities, constants, helpers
├── content/      # MDX/Markdown content files
├── copy/         # i18n translations (en-EN.json)
├── i18n/         # i18n config (next-intl)
├── data/         # JSON data files
└── static/       # CSS (globals.css) and local fonts
```

## Code Conventions

### Component Structure

Each component lives in its own directory with three files:

```
components/button/
├── button.tsx    # Component implementation
├── types.ts      # Types and variant definitions
└── index.ts      # Barrel exports
```

Barrel exports follow this pattern:

```typescript
export { default as Button } from "./button";
export * from "./types";
```

### Type Patterns

Use `as const` arrays for variant unions:

```typescript
export const ButtonVariants = ["default", "transparent"] as const;
export type ButtonVariant = (typeof ButtonVariants)[number];
export type ButtonVariantMapping = Record<ButtonVariant, string>;
```

Use discriminated unions when a variant changes which props are required:

```typescript
type ChipDefaultProps = ChipBaseProps & {
  variant?: "default";
  color: ChipColor;
};
type ChipOutlinedProps = ChipBaseProps & { variant: "outlined"; color?: never };
export type ChipProps = ChipDefaultProps | ChipOutlinedProps;
```

### Naming Conventions

- **Component files**: PascalCase directories, camelCase filenames (`components/Button/button.tsx`)
- **Utility files**: camelCase (`helpers.ts`, `keyframes.ts`)
- **Types**: `ComponentNameProps`, `ComponentNameVariant`, `ComponentNameVariantMapping`
- **Variant mapping objects**: `xxxClassNames` (e.g., `buttonVariantClassNames`)
- **Const arrays**: Plural form (`ButtonVariants`, `ChipColors`)

### Styling

Tailwind CSS v4 with variant mapping objects and `cn()` for class merging:

```typescript
const buttonVariantClassNames: ButtonVariantMapping = {
  transparent: "cursor-pointer",
  default: "cursor-pointer rounded-sm px-2 py-1 text-gray-600 hover:bg-blue-500",
};

className={cn("base-classes", buttonVariantClassNames[variant])}
```

`cn()` is defined in `@/utils/helpers` — it combines `classnames` with `tailwind-merge`.

Custom colors, utilities, and theme tokens are defined in `/src/static/css/globals.css` using Tailwind v4's `@theme inline` block. Do not use arbitrary values when a design token exists.

### Props

- Extend native HTML attributes: `& HTMLAttributes<HTMLElement>`
- Set defaults in function parameters: `variant = "default"`
- Keep props minimal with sensible defaults

### Import Order

Strict ordering, always use `@/*` path alias:

1. `"use client"` directive (if needed)
2. React / Next.js imports
3. External libraries (`framer-motion`, `date-fns`, etc.)
4. Type imports from `@/` (use `import type`)
5. Components / sections from `@/`
6. Utils / helpers from `@/`

### Comments

Use `// ABOUTME:` prefix for explanation comments on non-obvious patterns. Do not add comments for self-evident code.

### Animations

Define animation objects in `/src/utils/keyframes.ts` and import them into components. Use `framer-motion` for motion (`motion`, `AnimatePresence`, `useScroll`, `useTransform`, `useSpring`). Preferred easing: `[0.33, 1, 0.68, 1]`.

### i18n

Use `next-intl` with translations in `/src/copy/en-EN.json`.

Rich text renderers are defined inline in components:

```typescript
{t.rich("about.title", {
  serif: (chunks: ReactNode) => (
    <span className="font-serif italic text-blue-500">{chunks}</span>
  ),
})}
```

Translation strings use XML-like tags matching renderer keys:

```json
{
  "about.title": "I build <serif>digital products</serif>."
}
```

### Server vs Client Components

- Default to Server Components for data fetching and static rendering
- Add `"use client"` only when the component uses hooks, state, or browser APIs
- Data fetching happens in `src/lib/` — use `gray-matter` for Markdown, `axios` for APIs, dynamic `import()` for JSON

### Fonts

Three local font families loaded via `next/font/local` in the root layout:

- **Sans**: GeneralSans (Regular, Medium, Bold) — `font-sans`
- **Serif**: Gambetta (Regular, Medium, Bold) — `font-serif`
- **Mono**: RobotoMono (Regular) — `font-mono`

## Commit Convention

Follow conventional commits: `feat`, `fix`, `docs`, `chore`, `style`, `refactor`, `ci`, `test`, `revert`, `perf`.

Commits are enforced by `commitlint` via Husky pre-commit hooks. Do not skip hooks.

## PR Instructions

- Keep changes focused and minimal — do not refactor surrounding code
- Run `npm run lint` and `npm run format:check` before pushing
- Ensure `npm run build` passes
