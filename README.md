# neumorph-ui

A neumorphic (soft UI) React component and style library.

- **Soft design system** — light & dark themes built from design tokens (CSS custom properties): dual-layer extruded/intpressed shadows, soft surfaces, rounded geometry.
- **React components** — accessible, themeable, tree-shakeable ESM.
- **Zero styling lock-in** — components consume `--neu-*` tokens only; override any token to re-theme everything.

## Status

All v0.1–v0.4 milestone components shipped. Documentation: https://rueblibuebli.github.io/neumorph-ui/

## Installation

Published to GitHub Packages. In your project, add to `.npmrc`:

```
@rueblibuebli:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

Then:

```sh
npm install @rueblibuebli/neumorph-ui
```

## Usage

```tsx
import { ThemeProvider, Button } from "@rueblibuebli/neumorph-ui";
import "@rueblibuebli/neumorph-ui/styles.css";
```

## Development

```sh
npm install
npm run build       # vite lib build + typecheck
npm run test        # vitest
npm run lint        # eslint
npm run lint:css    # stylelint
```

## License

MIT