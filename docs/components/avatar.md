# Avatar

User/avatar display with initials fallback.

```tsx
import { Avatar } from "@rueblibuebli/neumorph-ui";

<Avatar name="Ada Lovelace" />
<Avatar src="/team/ada.jpg" alt="Ada Lovelace" size="lg" variant="sunken" />
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `src` | `string` | — | Image URL (falls back to initials on load error) |
| `alt` | `string` | — | Accessible name when using an image |
| `name` | `string` | — | Derives initials and the accessible name |
| `size` | `"sm" \| "md" \| "lg" \| "xl"` | `"md"` | 28–72px |
| `variant` | `"raised" \| "sunken"` | `"raised"` | Surface style |