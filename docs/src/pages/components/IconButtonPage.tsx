import { IconButton } from "@rueblibuebli/neumorph-ui";
import { ComponentDemo, PageIntro, PropsTable } from "../../components/ComponentDemo";

const usage = `import { IconButton } from "@rueblibuebli/neumorph-ui";

<IconButton
  aria-label="Add item"
  shape="circle"
  icon={<svg viewBox="0 0 16 16">…</svg>}
/>`;

const plusIcon = (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export function IconButtonPage() {
  return (
    <>
      <h1 className="docs-h1">IconButton</h1>
      <PageIntro>Icon-only button; an accessible label is required.</PageIntro>

      <ComponentDemo id="icon-button-usage" label="Usage" code={usage}>
        <IconButton icon={plusIcon} aria-label="Add item (square)" />
        <IconButton icon={plusIcon} aria-label="Add item (circle)" shape="circle" />
        <IconButton
          icon={plusIcon}
          aria-label="Add item (accent)"
          variant="accent"
          shape="circle"
        />
      </ComponentDemo>

      <PropsTable
        rows={[
          { name: "icon", type: "ReactNode", description: "Icon content (required)" },
          {
            name: "aria-label",
            type: "string",
            description: "Accessible name (enforced by types, required)",
          },
          {
            name: "variant",
            type: '"raised" | "sunken" | "flat" | "accent"',
            def: '"raised"',
            description: "Visual style",
          },
          { name: "size", type: '"sm" | "md" | "lg"', def: '"md"', description: "Size" },
          {
            name: "shape",
            type: '"square" | "circle"',
            def: '"square"',
            description: "Shape",
          },
        ]}
      />

      <p className="docs-p">
        All Button props (including <code className="docs-inline-code">loading</code>,{" "}
        <code className="docs-inline-code">disabled</code>,{" "}
        <code className="docs-inline-code">onClick</code>) are available.
      </p>
    </>
  );
}
