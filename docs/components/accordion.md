# Accordion

Collapsible sections with disclosure semantics.

<div data-demo="accordion"></div>

```tsx
import { Accordion } from "@rueblibuebli/neumorph-ui";

<Accordion
  items={[
    { key: "faq", title: "What is neumorphism?", content: "â€¦" },
    { key: "lic", title: "License?", content: "MIT." },
  ]}
/>
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | `{ key, title, content, disabled? }[]` | required | Sections |
| `multiple` | `boolean` | `false` | Allow several open sections at once |
| `defaultOpen` | `string[]` | `[]` | Initially open keys |

Each trigger exposes `aria-expanded` and controls a `role="region"` panel via `aria-controls`.