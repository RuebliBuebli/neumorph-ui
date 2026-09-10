# Pagination

Page navigation with ellipsis windows and circular prev/next buttons.

```tsx
import { useState } from "react";
import { Pagination } from "@rueblibuebli/neumorph-ui";

const [page, setPage] = useState(0);
<Pagination page={page} pageCount={12} onChange={setPage} />
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `page` | `number` | required | Zero-based current page |
| `pageCount` | `number` | required | Total pages |
| `onChange` | `(page: number) => void` | required | Navigation callback |
| `siblingCount` | `number` | `1` | Page buttons around the current page |

The current page carries `aria-current="page"`; prev/next are disabled at the boundaries.