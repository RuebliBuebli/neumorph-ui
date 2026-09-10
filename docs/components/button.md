---
outline: deep
---

# Button

Buttons trigger actions. Variants cover the neumorphic states: `raised` (extruded), `sunken` (pressed), `flat`, and `accent` (filled).

```tsx
import { Button } from "@rueblibuebli/neumorph-ui";

<Button variant="raised">Save</Button>
<Button variant="sunken">Activated</Button>
<Button variant="accent">Continue</Button>
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `"raised" \| "sunken" \| "flat" \| "accent"` | `"raised"` | Visual style |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Size |
| `loading` | `boolean` | `false` | Shows a spinner, disables the button, sets `aria-busy` |
| `leadingIcon` / `trailingIcon` | `ReactNode` | — | Icon slots |
| `as` | `ElementType` | `"button"` | Render as another element (e.g. `a`) |
| `disabled` | `boolean` | — | Disabled state |

All native button props are passed through. When `as="a"`, button-only attributes (`type`, `disabled`) are not rendered; use `aria-disabled` instead.

## States

```tsx
<Button loading>Uploading…</Button>
<Button disabled>Unavailable</Button>
```

## As a link

```tsx
<Button as="a" href="/docs">Documentation</Button>
```