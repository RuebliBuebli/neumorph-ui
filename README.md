# neumorph-ui

[![CI](https://github.com/RuebliBuebli/neumorph-ui/actions/workflows/ci.yml/badge.svg)](https://github.com/RuebliBuebli/neumorph-ui/actions/workflows/ci.yml)
[![Release](https://github.com/RuebliBuebli/neumorph-ui/actions/workflows/release.yml/badge.svg)](https://github.com/RuebliBuebli/neumorph-ui/actions/workflows/release.yml)
[![Docs](https://github.com/RuebliBuebli/neumorph-ui/actions/workflows/docs.yml/badge.svg)](https://github.com/RuebliBuebli/neumorph-ui/actions/workflows/docs.yml)
[![Version](https://img.shields.io/badge/version-1.0.0-4757b8)](https://github.com/RuebliBuebli/neumorph-ui/releases)
[![License: MIT](https://img.shields.io/badge/license-MIT-green)](LICENSE)

A neumorphic (soft UI) React component and style library.

- **Soft design system** — light & dark themes from design tokens: dual-layer extruded/pressed shadows, soft surfaces, rounded geometry.
- **23 accessible components** — ARIA wiring, focus management, keyboard support, `prefers-reduced-motion`.
- **WCAG AA contrast** — both themes are contrast-checked, and it's enforced by automated tests.
- **Zero styling lock-in** — components consume `--neu-*` tokens only; override any token to re-theme everything.
- **Tiny surface** — Vite ESM/CJS library build, bundled stylesheet, TypeScript types included.

📖 **Documentation:** https://rueblibuebli.github.io/neumorph-ui/

## Components

**Actions & layout** Button, IconButton, Card, Badge, Alert, Avatar, Progress, Spinner, Skeleton
**Forms** Input, Textarea, Select, Toggle, Checkbox, RadioGroup, Slider
**Navigation** Tabs, Accordion, Breadcrumb, Pagination
**Data & overlay** Table, Modal, Tooltip

## Installation

Published to **GitHub Packages**. Add to your project `.npmrc`:

```
@rueblibuebli:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

Then:

```sh
npm install @rueblibuebli/neumorph-ui
```

*(GitHub Packages requires a PAT with `read:packages` even for public packages — see [Getting Started](https://rueblibuebli.github.io/neumorph-ui/#/getting-started).)*

## Usage

```tsx
import { ThemeProvider, Button } from "@rueblibuebli/neumorph-ui";
import "@rueblibuebli/neumorph-ui/styles.css";

export function App() {
  return (
    <ThemeProvider defaultTheme="auto" target="html">
      <Button variant="accent">Hello soft world</Button>
    </ThemeProvider>
  );
}
```

## Development

```sh
npm install
npm run playground   # visual dev sandbox (all components, theme switcher)
npm run test         # 134 tests (incl. contrast + keyboard a11y guards)
npm run lint         # eslint + stylelint
npm run build        # vite lib build + tsc
```

## Contributing

See [CONTRIBUTING](https://rueblibuebli.github.io/neumorph-ui/#/contributing) — GitHub flow with issues → branches → PRs, squash merges, releases via `gh release create`.

## License

MIT