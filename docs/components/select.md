# Select

Native select with neumorphic styling — full native accessibility for free.

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
| `label` / `hint` / `invalid` | — | — | Same wiring as `Input` |
| `options` | `{ value, label, disabled? }[]` | — | Declarative options |
| `children` | `ReactNode` | — | Alternative: custom `<option>` children |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Field height |

Native `select` attributes pass through. The chevron is decorative; the native dropdown menu is used as-is for maximum compatibility.