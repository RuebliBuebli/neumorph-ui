# Architecture

## Layout

```
src/
├── index.ts              # public API barrel + CSS entry
├── global.css            # token import + minimal base
├── theme/
│   ├── tokens.css        # --neu-* custom properties (light + dark)
│   └── ThemeProvider.tsx # light/dark/auto + useTheme
├── components/
│   └── <Name>/
│       ├── Name.tsx      # component
│       ├── Name.css      # BEM-ish .neu-* classes, tokens only
│       ├── Name.test.tsx # RTL tests
│       └── index.ts      # re-exports
└── utils/cx.ts           # classname helper
```

## Conventions

- **One folder per component**, re-exported from `src/index.ts`.
- **CSS classes** follow `neu-<block>__<element>--<modifier>` naming; enforced by Stylelint.
- **Tokens only** — components never hardcode colors, shadows, radii or spacing.
- **Polymorphic `as`** where it makes sense (Button, Card) — native props are passed through, button-specific attributes are only applied to native buttons.
- **Controlled & uncontrolled** variants for stateful components (Toggle, Checkbox, Tabs, RadioGroup…).
- **Accessibility first**: ARIA wiring, focus-visible rings, keyboard navigation, `prefers-reduced-motion` support.
- **Testing**: Vitest + React Testing Library; user-facing behavior over implementation details.

## Build & packaging

- Vite library mode: `dist/neumorph-ui.es.js` + `neumorph-ui.cjs.js` + bundled `neumorph-ui.css`, `react`/`react-dom` externalized.
- Types via `vite-plugin-dts`.
- Package `@rueblibuebli/neumorph-ui`, published to GitHub Packages on every GitHub release (`.github/workflows/release.yml`).

## CI/CD

| Workflow | Trigger | What it does |
|---|---|---|
| `ci.yml` | PR/push to main | lint, lint:css, test, build — required check on main |
| `release.yml` | GitHub release published | verifies version ↔ tag, builds, publishes |
| `docs.yml` | push to main (docs/src) | builds VitePress site, deploys to GitHub Pages |

## GitHub flow

1. Issue per unit of work (labeled `feat`/`fix`/`docs`/`chore`, assigned to a milestone)
2. Branch `feat/<issue>-<slug>` from main
3. PR linked with `Closes #N`, checklist in the PR template
4. CI must pass; squash merge (linear history on main, enforced by ruleset)
5. Releases cut from main via `gh release create vX.Y.Z` → auto-publish