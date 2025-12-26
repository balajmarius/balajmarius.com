# CLAUDE.md

## Project Overview

Personal website built with Next.js (Pages Router), TypeScript, Tailwind CSS, and MDX.

## Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/   # Reusable UI components
├── sections/     # Page-level section components
├── pages/        # Next.js pages
├── lib/          # Business logic and data fetching
├── utils/        # Utilities, constants, helpers
├── content/      # Markdown content files
├── copy/         # i18n translations (en-EN.json)
├── i18n/         # i18n config
├── data/         # Data files
└── static/       # CSS, fonts
```

## Code Conventions

### Component Structure

Each component lives in its own directory:

```
components/Button/
├── Button.tsx    # Component implementation
├── types.ts      # Types and variant definitions
└── index.ts      # Barrel exports
```

### Type Patterns

Use `as const` for variant unions:

```typescript
export const ButtonVariants = ["default", "transparent"] as const;
export type ButtonVariant = (typeof ButtonVariants)[number];
export type ButtonVariantMapping = Record<ButtonVariant, string>;
```

Use discriminated unions when variant affects required props:

```typescript
type ChipDefaultProps = ChipBaseProps & { variant?: "default"; color: ChipColor };
type ChipOutlinedProps = ChipBaseProps & { variant: "outlined"; color?: never };
export type ChipProps = ChipDefaultProps | ChipOutlinedProps;
```

### Styling

Use Tailwind with variant mapping objects:

```typescript
const buttonVariantClassNames: ButtonVariantMapping = {
  transparent: "cursor-pointer",
  default: "cursor-pointer rounded-sm px-2 py-1 text-gray-600 hover:bg-blue-500"
};

// Use cn() for class merging
className={cn("base-classes", buttonVariantClassNames[variant])}
```

### Naming Conventions

- **Files**: PascalCase for components (`Button.tsx`), camelCase for utils (`helpers.ts`)
- **Types**: `ComponentNameProps`, `ComponentNameVariant`, `ComponentNameVariantMapping`
- **Mapping objects**: `xxxClassNames` (e.g., `buttonVariantClassNames`)
- **Const arrays**: Plural form (`ButtonVariants`)

### Import Order

1. React/Next.js imports
2. External libraries
3. Type imports from `@/`
4. Components/sections from `@/`
5. Utils/helpers from `@/`

Always use `@/*` path alias.

### Exports

Barrel exports in `index.ts`:

```typescript
export { default as Button } from "./Button";
export * from "./types";
```

### Props

- Spread native HTML attributes: `& HTMLAttributes<HTMLElement>`
- Set defaults in parameters: `variant = "default"`
- Keep props minimal with sensible defaults

### Comments

Use `// ABOUTME:` prefix for explanation comments on complex patterns.

### Animations

Define animations in `/src/utils/keyframes.ts` and reuse across components.

### i18n

Use `next-intl` with translations in `/src/copy/en-EN.json`.

Rich text renderers are defined inline:

```typescript
{t.rich("error404.doesNotExist", {
  serif: (chunks: ReactNode) => (
    <span className="font-serif italic text-blue-500">{chunks}</span>
  ),
})}
```

Translation strings use XML-like tags matching renderer keys:

```json
{
  "error404.doesNotExist": "The page does <serif>not exist</serif>."
}
```

## Commit Convention

Follow conventional commits: `feat`, `fix`, `docs`, `chore`, `style`, `refactor`, `ci`, `test`, `revert`, `perf`
