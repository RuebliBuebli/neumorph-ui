# Input

Single-line text input in a sunken field, with label/hint wiring and affix slots.

<div data-demo="input"></div>

```tsx
import { Input } from "@rueblibuebli/neumorph-ui";

<Input
  label="Email"
  hint="We never share your email"
  type="email"
  placeholder="you@example.com"
/>
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | `ReactNode` | â€” | Clickable label above the field |
| `hint` | `ReactNode` | â€” | Helper text below (linked via `aria-describedby`) |
| `invalid` | `boolean` | `false` | Error ring + `aria-invalid` |
| `prefix` / `suffix` | `ReactNode` | â€” | Content inside the field |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Field height |

All native `input` attributes pass through (`type`, `placeholder`, `value`, `onChange`, â€¦).

```tsx
<Input label="Price" prefix="$" suffix="per month" invalid hint="Too low" />
```