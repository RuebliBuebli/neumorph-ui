import { Accordion } from "@rueblibuebli/neumorph-ui";
import { ComponentDemo, PageIntro, PropsTable } from "../../components/ComponentDemo";

const usage = `import { Accordion } from "@rueblibuebli/neumorph-ui";

<Accordion
  items={[
    { key: "faq", title: "What is neumorphism?", content: "…" },
    { key: "lic", title: "License?", content: "MIT." },
  ]}
/>`;

export function AccordionPage() {
  return (
    <>
      <h1 className="docs-h1">Accordion</h1>
      <PageIntro>Collapsible sections with disclosure semantics.</PageIntro>

      <ComponentDemo id="accordion-usage" label="Usage" code={usage}>
        <div style={{ flex: 1, minWidth: 280 }}>
          <Accordion
            items={[
              {
                key: "a",
                title: "What is neumorphism?",
                content: "Soft UI built from two opposing shadows on a single surface color.",
              },
              {
                key: "b",
                title: "Is it accessible?",
                content: "This library adds strong focus rings and contrast-checked tokens.",
              },
            ]}
          />
        </div>
      </ComponentDemo>

      <PropsTable
        rows={[
          {
            name: "items",
            type: "{ key, title, content, disabled? }[]",
            description: "Sections (required)",
          },
          {
            name: "multiple",
            type: "boolean",
            def: "false",
            description: "Allow several open sections at once",
          },
          { name: "defaultOpen", type: "string[]", def: "[]", description: "Initially open keys" },
        ]}
      />

      <p className="docs-p">
        Each trigger exposes <code className="docs-inline-code">aria-expanded</code> and controls a{" "}
        <code className="docs-inline-code">role="region"</code> panel via{" "}
        <code className="docs-inline-code">aria-controls</code>.
      </p>
    </>
  );
}
