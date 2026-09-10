# Skeleton

Loading placeholder blocks with a soft pulse.

<div data-demo="skeleton"></div>

```tsx
import { Skeleton } from "@rueblibuebli/neumorph-ui";

<Skeleton lines={3} />              {/* text block */}
<Skeleton shape="rect" height={180} /> {/* image/card */}
<Skeleton shape="circle" />           {/* avatar */}
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `shape` | `"text" \| "rect" \| "circle"` | `"text"` | Block shape |
| `lines` | `number` | â€” | Multiple text lines (last one shorter) |
| `width` / `height` | `number \| string` | â€” | Explicit dimensions |

Content is `aria-hidden` â€” pair skeletons with a `Spinner` or live-region text for screen reader users.