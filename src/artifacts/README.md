# Artifacts

Small, self-contained React apps embedded in MDX blog posts. These are mostly vibe-coded, disposable apps: care about the experience and whether they work, not how the code looks. Keep them easy to change, replace, or throw away.

Each folder owns its UI, state, styles, and assets. CSS Modules keep selectors local; define colors, typography, and layout inside the artifact rather than importing the site's design tokens or UI components. Page-wide resets still apply.

Register an explicit dynamic import in `registry.ts`, then embed it in a post:

```mdx
<Artifact
  name="claude-code-bash-mode"
  title="Claude Code bash mode demo"
  height={305}
/>
```

The shared `Artifact` wrapper loads it as it approaches the viewport. `height` reserves space while loading. Next.js handles bundling and React; use the normal dev and build commands.

Keep animation paused offscreen and respect reduced motion. Any terminal commands shown are simulated.
