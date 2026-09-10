# Tabs

Tab interface with full `tablist`/`tab`/`tabpanel` ARIA wiring and roving tabindex.

```tsx
import { Tabs } from "@rueblibuebli/neumorph-ui";

<Tabs
  items={[
    { key: "overview", label: "Overview", content: <p>…</p> },
    { key: "settings", label: "Settings", content: <p>…</p> },
    { key: "secret", label: "Secret", content: <p>…</p>, disabled: true },
  ]}
/>
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | `{ key, label, content, disabled? }[]` | required | Tab definitions |
| `active` / `defaultActive` | `string` | first enabled | Controlled / uncontrolled key |
| `onActiveChange` | `(key: string) => void` | — | Selection callback |

Keyboard: `←`/`→` cycle, `Home`/`End` jump (disabled tabs are skipped and focus follows).