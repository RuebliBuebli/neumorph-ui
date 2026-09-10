# Breadcrumb

Location trail with `nav`/`ol` semantics.

<div data-demo="breadcrumb"></div>

```tsx
import { Breadcrumb, BreadcrumbItem } from "@rueblibuebli/neumorph-ui";

<Breadcrumb>
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/library">Library</BreadcrumbItem>
  <BreadcrumbItem>Data</BreadcrumbItem>
</Breadcrumb>
```

## Breadcrumb props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `BreadcrumbItem[]` | required | The trail; last item is the current page |
| `aria-label` | `string` | `"Breadcrumb"` | Nav label |

## BreadcrumbItem props

| Prop | Type | Description |
|---|---|---|
| `href` | `string` | Renders a link; omit for the current (non-clickable) page |
| `children` | `ReactNode` | Label |

The current page gets `aria-current="page"` automatically.