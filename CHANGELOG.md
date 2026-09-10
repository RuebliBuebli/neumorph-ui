# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Docs site rebuilt from scratch as a React SPA that dogfoods the library itself (sidebar, drawer, breadcrumbs, cards and buttons are neumorph-ui components); every component page shows the live component with its code below. VitePress removed; `docs` is now a workspace with `npm run docs` / `npm run docs:build`.

## [1.0.0] - 2026-09-10

First stable release: 23 components, light/dark theming, WCAG AA contrast, docs site, playground, CI/CD to GitHub Packages.

### Changed

- Accessibility: light theme tokens retuned for WCAG AA (text 4.5:1, UI accents 3:1+); dark muted text brightened. Contrast is now guarded by automated tests.
- Stronger light-theme focus ring.

### Added

- Token contrast regression tests (light + dark, 18 assertions) and a keyboard-only walkthrough test across interactive components.

## [0.4.0] - 2026-09-10

### Added

- `Table` (columns/rows API, sticky header, zebra), `Pagination` (page window, ellipsis, aria-current, prev/next IconButtons), `Spinner` (status role, reduced-motion), `Skeleton` (text/rect/circle, multi-line), `Breadcrumb` + `BreadcrumbItem` (nav/ol semantics, aria-current).

## [0.3.0] - 2026-09-10

### Added

- `Modal` (focus trap, Esc/backdrop close, focus restore, scroll lock), `Tooltip` (hover/focus, placements, delay), `Select` (native a11y, options prop or children), `Tabs` (roving tabindex, arrow keys), `Accordion` (disclosure semantics, single/multiple), `RadioGroup` (fieldset/legend, arrow-key navigation).

## [0.2.0] - 2026-09-10

### Added

- `Input` (label/hint/invalid/prefix/suffix/sizes), `Textarea` (autoSize, sizes), `Toggle` (role=switch, controlled/uncontrolled), `Checkbox` (indeterminate), `Slider` (accent fill, value output, sizes).
- `Progress` (determinate/indeterminate, tones), `Badge` (tones, pill), `Alert` (tones, role=alert/status, dismissible), `Avatar` (image + initials fallback, sizes, variants), `IconButton` (square/circle, requires aria-label).

## [0.1.0] - 2026-09-10

### Added

- Project scaffold: TypeScript, Vite library mode (ES + CJS + bundled CSS), ESLint, Prettier, Stylelint, Vitest + Testing Library.
- Design tokens (`--neu-*` CSS custom properties) with light and dark themes.
- `ThemeProvider` + `useTheme` hook (light / dark / auto with `prefers-color-scheme`); wrapper or `documentElement` targeting.
- `Button` component: raised/sunken/flat/accent variants, sm/md/lg, loading + disabled, polymorphic `as` prop, focus ring, reduced-motion aware.
- `Card` component: raised/sunken variants, padding steps 0–6, header/footer slots, polymorphic `as` prop.
- `cx` class name utility.
- CI (lint/test/build, required on main), release workflow to GitHub Packages, issue + PR templates.