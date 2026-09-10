# Textarea

Multi-line text input with optional auto-growing.

```tsx
import { Textarea } from "@rueblibuebli/neumorph-ui";

<Textarea label="Notes" hint="Grows as you type" autoSize maxRows={10} />
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` / `hint` / `invalid` | — | — | Same wiring as `Input` |
| `autoSize` | `boolean` | `false` | Grows with content up to `maxRows` |
| `maxRows` | `number` | `12` | Cap for auto-growing |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Maps to initial rows (2/4/6) |

Native `textarea` attributes pass through.