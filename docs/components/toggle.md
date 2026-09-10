# Toggle

On/off switch with `role="switch"` semantics.

```tsx
import { Toggle } from "@rueblibuebli/neumorph-ui";

<Toggle label="Wi-Fi" defaultChecked />
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `checked` | `boolean` | — | Controlled state |
| `defaultChecked` | `boolean` | `false` | Uncontrolled initial state |
| `onCheckedChange` | `(checked: boolean) => void` | — | Change callback |
| `label` | `ReactNode` | — | Visible (or hidden) label |
| `hideLabel` | `boolean` | `false` | Visually hide label, keep for screen readers |
| `disabled` | `boolean` | — | Disabled state |
| `name` / `value` | `string` | — | Form participation |

```tsx
const [on, setOn] = useState(false);
<Toggle checked={on} onCheckedChange={setOn} label="Notifications" />
```