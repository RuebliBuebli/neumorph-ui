# Spinner

Loading indicator with `role="status"`.

```tsx
import { Spinner } from "@rueblibuebli/neumorph-ui";

<Spinner size="lg" label="Loading results" />
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Ring size |
| `label` | `string` | `"Loading"` | Announced to screen readers |

Animation slows down under `prefers-reduced-motion` rather than being removed (a frozen spinner would read as broken).