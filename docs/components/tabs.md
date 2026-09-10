# Tabs

Tab interface with full `tablist`/`tab`/`tabpanel` ARIA wiring and roving tabindex.

<div data-demo="tabs"></div>

```tsx
import { Tabs } from "@rueblibuebli/neumorph-ui";

<Tabs
  items={[
    { key: "overview", label: "Overview", content: <p>â€¦</p> },
    { key: "settings", label: "Settings", content: <p>â€¦</p> },
    { key: "secret", label: "Secret", content: <p>â€¦</p>, disabled: true },
  ]}
/>
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | `{ key, label, content, disabled? }[]` | required | Tab definitions |
| `active` / `defaultActive` | `string` | first enabled | Controlled / uncontrolled key |
| `onActiveChange` | `(key: string) => void` | â€” | Selection callback |

Keyboard: `â†`/`â†’` cycle, `Home`/`End` jump (disabled tabs are skipped and focus follows).