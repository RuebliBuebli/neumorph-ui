# Slider

Range input with an accent-filled sunken track and raised thumb.

<div data-demo="slider"></div>

```tsx
import { Slider } from "@rueblibuebli/neumorph-ui";

<Slider
  label="Volume"
  showValue
  formatValue={(v) => `${v}%`}
  defaultValue={60}
  min={0}
  max={100}
/>
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | `ReactNode` | â€” | Accessible label |
| `showValue` | `boolean` | `false` | Render the current value next to the label |
| `formatValue` | `(value: number) => string` | â€” | Value formatting |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Track height / thumb size |

All native `input[type=range]` attributes pass through (`min`, `max`, `step`, `value`, `onChange`, `aria-valuetext`, â€¦).