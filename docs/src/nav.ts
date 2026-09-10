export interface NavItem {
  title: string;
  path: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

const components: NavItem[] = [
  { title: "Button", path: "/components/button" },
  { title: "Card", path: "/components/card" },
  { title: "Input", path: "/components/input" },
  { title: "Textarea", path: "/components/textarea" },
  { title: "Toggle", path: "/components/toggle" },
  { title: "Checkbox", path: "/components/checkbox" },
  { title: "RadioGroup", path: "/components/radiogroup" },
  { title: "Slider", path: "/components/slider" },
  { title: "Select", path: "/components/select" },
  { title: "Tabs", path: "/components/tabs" },
  { title: "Accordion", path: "/components/accordion" },
  { title: "Modal", path: "/components/modal" },
  { title: "Tooltip", path: "/components/tooltip" },
  { title: "Table", path: "/components/table" },
  { title: "Pagination", path: "/components/pagination" },
  { title: "Spinner", path: "/components/spinner" },
  { title: "Skeleton", path: "/components/skeleton" },
  { title: "Breadcrumb", path: "/components/breadcrumb" },
  { title: "Badge", path: "/components/badge" },
  { title: "Alert", path: "/components/alert" },
  { title: "Avatar", path: "/components/avatar" },
  { title: "IconButton", path: "/components/icon-button" },
  { title: "Progress", path: "/components/progress" },
];

export const NAV: NavSection[] = [
  {
    title: "Guide",
    items: [
      { title: "Introduction", path: "/" },
      { title: "Getting Started", path: "/getting-started" },
      { title: "Theming", path: "/theming" },
      { title: "Architecture", path: "/architecture" },
      { title: "Contributing", path: "/contributing" },
      { title: "Changelog", path: "/changelog" },
    ],
  },
  { title: "Components", items: components },
];

const pathTitles: Record<string, string> = {};
for (const section of NAV) {
  for (const item of section.items) {
    pathTitles[item.path] = item.title;
  }
}

export function titleFor(path: string): string {
  return pathTitles[path] ?? "Not found";
}
