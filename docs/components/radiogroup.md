# RadioGroup

Single-choice group with `fieldset`/legend semantics and arrow-key navigation.

<div data-demo="radiogroup"></div>

```tsx
import { RadioGroup } from "@rueblibuebli/neumorph-ui";

<RadioGroup
  legend="Plan"
  options={[
    { value: "free", label: "Free" },
    { value: "pro", label: "Pro" },
    { value: "enterprise", label: "Enterprise", disabled: true },
  ]}
  defaultValue="free"
/>
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `options` | `{ value, label, disabled? }[]` | required | Options |
| `legend` | `ReactNode` | â€” | Group name (accessible) |
| `value` / `defaultValue` | `string` | â€” | Controlled / uncontrolled selection |
| `onValueChange` | `(value: string) => void` | â€” | Selection callback |
| `orientation` | `"vertical" \| "horizontal"` | `"vertical"` | Layout |
| `name` | `string` | auto | Radio group name (form submission) |

Arrow keys move the selection; from an empty state the first enabled option is selected.