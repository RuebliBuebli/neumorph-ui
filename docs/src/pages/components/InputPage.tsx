import { Input } from "@rueblibuebli/neumorph-ui";
import { ComponentDemo, PageIntro, PropsTable } from "../../components/ComponentDemo";

const usage = `import { Input } from "@rueblibuebli/neumorph-ui";

<Input
  label="Email"
  hint="We never share your email"
  type="email"
  placeholder="you@example.com"
/>`;

const affixes = `<Input label="Price" prefix="$" suffix="per month" invalid hint="Too low" />`;

export function InputPage() {
  return (
    <>
      <h1 className="docs-h1">Input</h1>
      <PageIntro>
        Single-line text input in a sunken field, with label/hint wiring and affix slots.
      </PageIntro>

      <ComponentDemo id="input-usage" label="Usage" code={usage}>
        <Input label="Email" hint="We never share it" type="email" placeholder="you@example.com" />
      </ComponentDemo>

      <ComponentDemo id="input-affixes" label="Affixes & invalid" code={affixes}>
        <Input label="Price" prefix="$" suffix="per month" hint="Enter an amount" />
        <Input label="Invalid" hint="Not an email" invalid defaultValue="nope" />
      </ComponentDemo>

      <PropsTable
        rows={[
          { name: "label", type: "ReactNode", description: "Clickable label above the field" },
          {
            name: "hint",
            type: "ReactNode",
            description: "Helper text below (linked via aria-describedby)",
          },
          {
            name: "invalid",
            type: "boolean",
            def: "false",
            description: "Error ring + aria-invalid",
          },
          { name: "prefix / suffix", type: "ReactNode", description: "Content inside the field" },
          { name: "size", type: '"sm" | "md" | "lg"', def: '"md"', description: "Field height" },
        ]}
      />

      <p className="docs-p">
        All native <code className="docs-inline-code">input</code> attributes pass through (
        <code className="docs-inline-code">type</code>,{" "}
        <code className="docs-inline-code">placeholder</code>,{" "}
        <code className="docs-inline-code">value</code>,{" "}
        <code className="docs-inline-code">onChange</code>, …).
      </p>
    </>
  );
}
