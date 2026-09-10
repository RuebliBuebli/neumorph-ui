# Toggle

On/off switch with `role="switch"` semantics.

<div data-demo="toggle"></div>

```tsx
import { Toggle } from "@rueblibuebli/neumorph-ui";

<Toggle label="Wi-Fi" defaultChecked />
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `checked` | `boolean` | â€” | Controlled state |
| `defaultChecked` | `boolean` | `false` | Uncontrolled initial state |
| `onCheckedChange` | `(checked: boolean) => void` | â€” | Change callback |
| `label` | `ReactNode` | â€” | Visible (or hidden) label |
| `hideLabel` | `boolean` | `false` | Visually hide label, keep for screen readers |
| `disabled` | `boolean` | â€” | Disabled state |
| `name` / `value` | `string` | â€” | Form participation |

```tsx
const [on, setOn] = useState(false);
<Toggle checked={on} onCheckedChange={setOn} label="Notifications" />
```