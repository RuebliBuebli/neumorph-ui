# Checkbox

Selection control with a soft check indicator and `indeterminate` support.

<div data-demo="checkbox"></div>

```tsx
import { Checkbox } from "@rueblibuebli/neumorph-ui";

<Checkbox label="Accept terms" defaultChecked />
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `checked` / `defaultChecked` | `boolean` | â€” | Controlled / uncontrolled state |
| `indeterminate` | `boolean` | `false` | Third state (dash) â€” cleared when checked |
| `onCheckedChange` | `(checked: boolean) => void` | â€” | Change callback |
| `label` / `hideLabel` | â€” | â€” | Label handling like `Toggle` |
| `disabled` / `invalid` / `name` / `value` | â€” | â€” | Standard semantics |

```tsx
<Checkbox label="Select all" indeterminate />
```