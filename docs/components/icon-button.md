# IconButton

Icon-only button; an accessible label is required.

<div data-demo="icon-button"></div>

```tsx
import { IconButton } from "@rueblibuebli/neumorph-ui";

<IconButton
  aria-label="Add item"
  shape="circle"
  icon={<svg viewBox="0 0 16 16">â€¦</svg>}
/>
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `icon` | `ReactNode` | required | Icon content |
| `aria-label` | `string` | required | Accessible name (enforced by types) |
| `variant` | `"raised" \| "sunken" \| "flat" \| "accent"` | `"raised"` | Visual style |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Size |
| `shape` | `"square" \| "circle"` | `"square"` | Shape |

All Button props (including `loading`, `disabled`, `onClick`) are available.