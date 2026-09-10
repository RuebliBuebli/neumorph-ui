# Progress

Determinate and indeterminate progress on a sunken track.

```tsx
import { Progress } from "@rueblibuebli/neumorph-ui";

<Progress value={64} label="Upload" />
<Progress tone="success" value={100} label="Done" />
<Progress label="Loading" />  {/* indeterminate */}
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `number` | — | 0–100; omit for indeterminate |
| `tone` | `"accent" \| "success" \| "warning" \| "error"` | `"accent"` | Bar color |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Track height |
| `label` | `string` | — | Accessible name |