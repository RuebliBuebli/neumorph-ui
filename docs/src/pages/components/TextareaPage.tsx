import { Textarea } from "@rueblibuebli/neumorph-ui";
import { ComponentDemo, PageIntro, PropsTable } from "../../components/ComponentDemo";

const usage = `import { Textarea } from "@rueblibuebli/neumorph-ui";

<Textarea label="Notes" hint="Grows as you type" autoSize maxRows={10} />`;

export function TextareaPage() {
  return (
    <>
      <h1 className="docs-h1">Textarea</h1>
      <PageIntro>Multi-line text input with optional auto-growing.</PageIntro>

      <ComponentDemo id="textarea-usage" label="Usage" code={usage}>
        <Textarea label="Notes" hint="Auto-grows up to 6 rows" autoSize maxRows={6} />
      </ComponentDemo>

      <ComponentDemo id="textarea-static" label="Static" code={`<Textarea label="Bio" rows={4} />`}>
        <Textarea label="Bio" rows={4} placeholder="Tell us about yourself" />
      </ComponentDemo>

      <PropsTable
        rows={[
          {
            name: "label / hint / invalid",
            type: "—",
            description: "Same wiring as Input",
          },
          {
            name: "autoSize",
            type: "boolean",
            def: "false",
            description: "Grows with content up to maxRows",
          },
          { name: "maxRows", type: "number", def: "12", description: "Cap for auto-growing" },
          {
            name: "size",
            type: '"sm" | "md" | "lg"',
            def: '"md"',
            description: "Maps to initial rows (2/4/6)",
          },
        ]}
      />

      <p className="docs-p">
        Native <code className="docs-inline-code">textarea</code> attributes pass through.
      </p>
    </>
  );
}
