---
title: Building The Sandbox Design System
label: Dev
createdAt: 10 Feb, 2024
author:
---

Building a design system that actually works is tough, especially when it
needs to support over 20 product teams and 100+ developers. An endeavor like
this requires careful consideration at every step. It's been a fun journey
filled with discoveries and lessons worth sharing.

### Research and Development

The Sandbox frontend is built with [Vue](https://vuejs.org/) and
[Nuxt](https://nuxt.com/). Our styling approach combines
[Tailwind](https://tailwindcss.com/), vanilla CSS, and
[CSS-in-JS](https://cssinjs.org/).

Given our positive experiences with _Tailwind_ and its extensive ecosystem, we
built a proof of concept using variant-driven components with
[cva](https://cva.style/docs).

<figure className="space-y-2 text-center text-gray-500 text-xs">
  <img src="/images/building-the-sandbox-design-system/research-development.jpg" alt="Photo by Mohammad Rahmani on Unsplash" />
  <figcaption>Photo by Mohammad Rahmani on Unsplash</figcaption>
</figure>

The proof of concept went smoothly, but we discovered two major issues:

- File Size: While _Tailwind_ typically generates small files,
  variant-driven components produce class names for every variant and
  breakpoint combination. This created an excessively large CSS file that hurt
  performance.
- Consistency: Without a shared tailwind config file, maintaining
  consistency across projects using the design system was challenging.

After the _Tailwind_ experiment didn't work out, we explored CSS-in-JS
solutions. That's when we found _Stitches.js_, and it clicked immediately.

What stands out about [Stitches.js](https://stitches.dev/) is its ability to
define design tokens seamlessly—colors, font sizes, spacing, and more. We can
customize component appearance while maintaining consistent design rules.

Consider this scenario: we're building a special app for a
[Paris Hilton](https://www.sandbox.game/avatar-collections/paris-hilton/)
event and need all buttons to be pink. We can't add a Paris Hilton variant to
our `<Button />` component—that wouldn't make sense in the design system.

The solution is to override styles locally. In rare cases like this, it's
acceptable to customize component styling to meet specific requirements.

```
<Button :css="{{ backgroundColor: '#FFC0CB' }}" />
```

This is where _Stitches.js_ shines.

Instead of using random hex values, we reference predefined theme tokens. If
our theme includes `pink100` that matches Paris Hilton's branding, we simply
pass the token name with a dollar sign:

```
<Button :css="{{ backgroundColor: '$pink100' }}" />
```

This is just the beginning. We can adjust styles based on screen size using
predefined breakpoints or change appearance based on variants.

For documentation, we chose [Storybook.js](https://storybook.js.org/) as a
centralized hub where teams can explore and interact with all components,
ensuring consistency across the board.

### Deployment and Processes

The library is a standard _TypeScript_ project that outputs a
[Vue](https://vuejs.org/) library.

At build time, we generate a single bundle that exports components, utility
functions, and theme tokens.

We bundle type definitions and web types with the code for development
support. IDEs automatically consume these definitions, providing autocomplete
and import discovery.

For library development, we keep things simple with the
[Git feature branch workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow)
and [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).

A [GitHub workflow](https://github.com/googleapis/release-please) manages
releases by creating and maintaining release PRs with automatic release note
generation. Merging these PRs automatically increments the version based on
commit history.

Release notes make it easy to track changes between versions. By incrementing
the major version for breaking changes, we ensure existing clients don't break
when using older builds.

<figure className="space-y-2 text-center text-gray-500 text-xs">
  <img src="/images/building-the-sandbox-design-system/release-notes.png" alt="Sandbox UI Release Notes" />
  <figcaption>Sandbox UI Release Notes</figcaption>
</figure>

## Final Thoughts

Managing a design system with a large team requires careful planning and
teamwork.

What made it tougher was that _Stitches.js_, the library we chose for styling,
was [no longer maintained](https://github.com/stitchesjs/stitches/issues/1144)
when we published this article, so we had to build our own solution.

Hopefully this was helpful. Feel free to share your findings!
