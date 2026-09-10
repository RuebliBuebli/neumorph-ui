# Theming

All visuals are driven by CSS custom properties (`--neu-*`). Components never hardcode colors or shadows.

## Light and dark

`ThemeProvider` sets a `data-theme` attribute (`light` / `dark`). In `auto` mode it follows `prefers-color-scheme` and live-updates when the OS changes.

```tsx
import { ThemeProvider, useTheme } from "@rueblibuebli/neumorph-ui";

function ThemeSwitcher() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  return (
    <button onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
      Current: {theme} ({resolvedTheme})
    </button>
  );
}
```

## Token reference

| Token | Purpose |
|---|---|
| `--neu-bg` | Page background |
| `--neu-surface`, `--neu-surface-raised`, `--neu-surface-sunken` | Component surfaces |
| `--neu-shadow-out`, `--neu-shadow-out-sm` | Extruded (raised) shadow pair |
| `--neu-shadow-in`, `--neu-shadow-in-sm` | Pressed (inset) shadow pair |
| `--neu-text-primary`, `--neu-text-secondary`, `--neu-text-muted` | Text tiers |
| `--neu-accent`, `--neu-accent-hover`, `--neu-on-accent`, `--neu-accent-soft` | Accent colors |
| `--neu-success`, `--neu-warning`, `--neu-error`, `--neu-info` | Feedback hues |
| `--neu-radius-sm/md/lg/pill` | Corner radii |
| `--neu-space-1..6` | Spacing scale (4–32px) |
| `--neu-focus-ring` | Focus ring shadow |
| `--neu-transition` | Motion default (160ms ease) |

## Custom themes

Override tokens on any scope — a theme, a page, or a single card:

```css
[data-theme="light"] {
  --neu-bg: #eceef3;
  --neu-accent: #e05880;
  --neu-radius-md: 8px;
}
```

Or define a fully custom theme:

```css
[data-theme="sepia"] {
  --neu-bg: #ece1cf;
  --neu-surface: #ece1cf;
  --neu-surface-raised: #f1e7d6;
  --neu-surface-sunken: #e0d4bf;
  --neu-shadow-out: -8px -8px 16px rgb(255 250 240 / 75%), 8px 8px 16px rgb(160 145 120 / 45%);
  --neu-shadow-in: inset -6px -6px 12px rgb(255 250 240 / 75%), inset 6px 6px 12px rgb(160 145 120 / 45%);
  --neu-text-primary: #4a3f30;
  --neu-accent: #b0713a;
  --neu-on-accent: #fff8ec;
  color-scheme: light;
}
```

```tsx
<div data-theme="sepia">
  <Card>Custom themed island</Card>
</div>
```

## Neumorphism notes

- Neumorphism lives off **low contrast between surface and shadows** — that is the aesthetic, but it costs affordance. This library compensates with strong `--neu-focus-ring` focus styles and clear `sunken` states for interactive controls.
- Dark mode inverts the shadow hues (dark shadows deeper, highlights bluish) and brightens the accent for contrast on dark surfaces.