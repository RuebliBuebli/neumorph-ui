# Table

Declarative table with soft sunken surface.

<div data-demo="table"></div>

```tsx
import { Table } from "@rueblibuebli/neumorph-ui";

<Table
  caption="Team"
  zebra
  columns={[
    { key: "name", header: "Name" },
    { key: "role", header: "Role" },
    { key: "score", header: "Score", align: "end" },
  ]}
  rows={[
    { name: "Ada", role: "Admin", score: 99 },
    { name: "Alan", role: "Editor", score: 87 },
  ]}
/>
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `columns` | `{ key, header, align? }[]` | required | Column definitions |
| `rows` | `Record<string, ReactNode>[]` | required | Row data keyed by column key |
| `stickyHeader` | `boolean` | `false` | Sticky header while scrolling |
| `zebra` | `boolean` | `false` | Subtle alternating rows |
| `caption` | `string` | â€” | Accessible name (visually hidden) |