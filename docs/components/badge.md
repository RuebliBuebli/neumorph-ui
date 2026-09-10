# Badge

Small status chip with a raised soft surface.

<div data-demo="badge"></div>

```tsx
import { Badge } from "@rueblibuebli/neumorph-ui";

<Badge tone="success">Active</Badge>
<Badge tone="error" pill>3</Badge>
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `tone` | `"accent" \| "success" \| "warning" \| "error" \| "info" \| "neutral"` | `"neutral"` | Color tone |
| `pill` | `boolean` | `false` | Fully rounded shape |

A colored status dot can be added with `data-dot="true"`.