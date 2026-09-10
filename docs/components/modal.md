# Modal

Dialog with focus trap, focus restore, Escape/backdrop close and scroll lock.

```tsx
import { useState } from "react";
import { Modal, Button } from "@rueblibuebli/neumorph-ui";

function Example() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Delete account</Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Delete account?"
        footer={
          <>
            <Button variant="flat" onClick={() => setOpen(false)}>Cancel</Button>
            <Button variant="accent" onClick={() => setOpen(false)}>Delete</Button>
          </>
        }
      >
        This action cannot be undone.
      </Modal>
    </>
  );
}
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `open` | `boolean` | required | Visibility |
| `onClose` | `() => void` | required | Close callback |
| `title` | `ReactNode` | — | Heading (used as accessible name) |
| `footer` | `ReactNode` | — | Action bar |
| `width` | `number` | `480` | Max panel width in px |
| `dismissible` | `boolean` | `true` | `false` disables Escape + backdrop close |

Behavior: `role="dialog"` + `aria-modal`, Tab/Shift+Tab cycle inside the panel, focus returns to the opener on close.