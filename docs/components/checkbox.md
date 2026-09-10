# Checkbox

Selection control with a soft check indicator and `indeterminate` support.

```tsx
import { Checkbox } from "@rueblibuebli/neumorph-ui";

<Checkbox label="Accept terms" defaultChecked />
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `checked` / `defaultChecked` | `boolean` | — | Controlled / uncontrolled state |
| `indeterminate` | `boolean` | `false` | Third state (dash) — cleared when checked |
| `onCheckedChange` | `(checked: boolean) => void` | — | Change callback |
| `label` / `hideLabel` | — | — | Label handling like `Toggle` |
| `disabled` / `invalid` / `name` / `value` | — | — | Standard semantics |

```tsx
<Checkbox label="Select all" indeterminate />
```