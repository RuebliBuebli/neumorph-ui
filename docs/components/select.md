# Select

Native select with neumorphic styling â€” full native accessibility for free.

<div data-demo="select"></div>

```tsx
import { Select } from "@rueblibuebli/neumorph-ui";

<Select
  label="Country"
  options={[
    { value: "de", label: "Germany" },
    { value: "ch", label: "Switzerland" },
  ]}
/>
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` / `hint` / `invalid` | â€” | â€” | Same wiring as `Input` |
| `options` | `{ value, label, disabled? }[]` | â€” | Declarative options |
| `children` | `ReactNode` | â€” | Alternative: custom `<option>` children |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Field height |

Native `select` attributes pass through. The chevron is decorative; the native dropdown menu is used as-is for maximum compatibility.