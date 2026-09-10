# Getting Started

## Installation

The package is published to **GitHub Packages**, so npm needs to know where to find it and how to authenticate.

1. Create a [personal access token](https://github.com/settings/tokens) with `read:packages` scope.

2. Add to your project `.npmrc` (or `~/.npmrc` for global config):

```
@rueblibuebli:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

3. Install:

```bash
export GITHUB_TOKEN=ghp_xxx   # your token
npm install @rueblibuebli/neumorph-ui
```

> GitHub Packages requires authentication even for public packages.

## Setup

Import the global stylesheet once (tokens + all component styles):

```tsx
import "@rueblibuebli/neumorph-ui/styles.css";
```

Wrap your app in a `ThemeProvider`:

```tsx
import { ThemeProvider } from "@rueblibuebli/neumorph-ui";

<ThemeProvider defaultTheme="auto" target="html">
  <App />
</ThemeProvider>
```

- `defaultTheme`: `"light"` | `"dark"` | `"auto"` (follows the OS setting)
- `target`: where `data-theme` is applied — `"html"` (recommended, styles the whole page) or `"wrapper"` (default, styles only the subtree)

## Requirements

- React 18 or 19
- Any bundler that handles CSS (Vite, webpack 5, etc.)

## TypeScript

The package ships its own type declarations — nothing extra to install.