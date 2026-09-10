# Tooltip

Short hint on hover/focus, with accessible wiring.

<div data-demo="tooltip"></div>

```tsx
import { Tooltip } from "@rueblibuebli/neumorph-ui";

<Tooltip content="Soft shadows everywhere" placement="bottom">
  <button type="button">What is this?</button>
</Tooltip>
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `content` | `ReactNode` | required | Tooltip text |
| `placement` | `"top" \| "bottom" \| "left" \| "right"` | `"top"` | Position |
| `delay` | `number` | `300` | Show delay in ms |

The tooltip is described via `aria-describedby` while visible; it works for keyboard focus as well as hover.