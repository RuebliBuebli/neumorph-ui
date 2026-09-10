# Alert

Inline message with tone-colored accent bar.

<div data-demo="alert"></div>

```tsx
import { Alert } from "@rueblibuebli/neumorph-ui";

<Alert tone="warning" title="Heads up">
  Your trial ends in 3 days.
</Alert>
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `tone` | `"info" \| "success" \| "warning" \| "error"` | `"info"` | Semantic tone |
| `title` | `ReactNode` | â€” | Bold heading |
| `onDismiss` | `() => void` | â€” | Enables a dismiss button; alert removes itself after the callback |

Roles: `error` uses `role="alert"` (assertive), other tones use `role="status"` (polite).