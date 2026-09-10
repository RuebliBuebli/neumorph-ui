# neumorph-ui

A neumorphic (soft UI) React component and style library.

- **Soft design system** — light & dark themes from design tokens: dual-layer extruded/pressed shadows, soft surfaces, rounded geometry.
- **23 accessible components** — proper ARIA wiring, focus management, keyboard support.
- **Zero styling lock-in** — components consume `--neu-*` tokens only; override any token to re-theme everything.

## Quick start

```bash
npm install @rueblibuebli/neumorph-ui
```

```tsx
import { ThemeProvider, Button } from "@rueblibuebli/neumorph-ui";
import "@rueblibuebli/neumorph-ui/styles.css";

export function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <Button variant="accent">Hello soft world</Button>
    </ThemeProvider>
  );
}
```

See [Getting Started](/getting-started) for GitHub Packages registry setup and [Theming](/theming) for light/dark/auto modes and custom token overrides.