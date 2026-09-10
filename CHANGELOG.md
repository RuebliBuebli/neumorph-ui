# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Project scaffold: TypeScript, Vite library mode (ES + CJS + bundled CSS), ESLint, Prettier, Stylelint, Vitest + Testing Library.
- Design tokens (`--neu-*` CSS custom properties) with light and dark themes.
- `ThemeProvider` + `useTheme` hook (light / dark / auto with `prefers-color-scheme`); wrapper or `documentElement` targeting.
- `Button` component: raised/sunken/flat/accent variants, sm/md/lg, loading + disabled, polymorphic `as` prop, focus ring, reduced-motion aware.
- `Card` component: raised/sunken variants, padding steps 0–6, header/footer slots, polymorphic `as` prop.
- `cx` class name utility.
- CI (lint/test/build, required on main), release workflow to GitHub Packages, issue + PR templates.