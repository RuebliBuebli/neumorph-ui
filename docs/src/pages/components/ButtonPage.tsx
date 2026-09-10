import { Button } from "@rueblibuebli/neumorph-ui";
import { ComponentDemo, PageIntro, PropsTable } from "../../components/ComponentDemo";

const usage = `import { Button } from "@rueblibuebli/neumorph-ui";

<Button variant="raised">Save</Button>
<Button variant="sunken">Activated</Button>
<Button variant="accent">Continue</Button>`;

const states = `<Button loading>Uploading…</Button>
<Button disabled>Unavailable</Button>`;

const asLink = `<Button as="a" href="/docs">Documentation</Button>`;

export function ButtonPage() {
  return (
    <>
      <h1 className="docs-h1">Button</h1>
      <PageIntro>
        Buttons trigger actions. Variants cover the neumorphic states: raised (extruded), sunken
        (pressed), flat, and accent (filled).
      </PageIntro>

      <ComponentDemo id="button-usage" label="Usage" code={usage}>
        <Button variant="raised">Raised</Button>
        <Button variant="sunken">Sunken</Button>
        <Button variant="flat">Flat</Button>
        <Button variant="accent">Accent</Button>
      </ComponentDemo>

      <ComponentDemo id="button-states" label="States" code={states}>
        <Button loading>Loading</Button>
        <Button disabled>Disabled</Button>
        <Button size="sm">Small</Button>
        <Button size="lg">Large</Button>
      </ComponentDemo>

      <ComponentDemo id="button-link" label="As a link" code={asLink}>
        <Button as="a" href="#/components/button">
          Documentation
        </Button>
      </ComponentDemo>

      <PropsTable
        rows={[
          {
            name: "variant",
            type: '"raised" | "sunken" | "flat" | "accent"',
            def: '"raised"',
            description: "Visual style",
          },
          { name: "size", type: '"sm" | "md" | "lg"', def: '"md"', description: "Size" },
          {
            name: "loading",
            type: "boolean",
            def: "false",
            description: "Shows a spinner, disables the button, sets aria-busy",
          },
          {
            name: "leadingIcon / trailingIcon",
            type: "ReactNode",
            description: "Icon slots",
          },
          {
            name: "as",
            type: "ElementType",
            def: '"button"',
            description: "Render as another element (e.g. a)",
          },
          { name: "disabled", type: "boolean", description: "Disabled state" },
        ]}
      />

      <p className="docs-p">
        All native button props are passed through. When{" "}
        <code className="docs-inline-code">as="a"</code>, button-only attributes (
        <code className="docs-inline-code">type</code>,{" "}
        <code className="docs-inline-code">disabled</code>) are not rendered; use{" "}
        <code className="docs-inline-code">aria-disabled</code> instead.
      </p>
    </>
  );
}
