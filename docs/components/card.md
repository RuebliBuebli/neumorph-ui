# Card

A soft surface container with optional header and footer slots.

```tsx
import { Card } from "@rueblibuebli/neumorph-ui";

<Card header="Statistics" footer="Updated 2 min ago">
  <p>All systems operational.</p>
</Card>
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `"raised" \| "sunken"` | `"raised"` | Extruded or pressed surface |
| `pad` | `0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6` | `4` | Padding step (`--neu-space-*`) |
| `header` / `footer` | `ReactNode` | — | Slots above/below the body |
| `as` | `ElementType` | `"div"` | Render as e.g. `section` |

```tsx
<Card as="section" variant="sunken" pad={2} aria-label="Details">
  …
</Card>
```