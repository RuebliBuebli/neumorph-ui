import { Card } from "@rueblibuebli/neumorph-ui";
import { ComponentDemo, PageIntro, PropsTable } from "../../components/ComponentDemo";

const usage = `import { Card } from "@rueblibuebli/neumorph-ui";

<Card header="Statistics" footer="Updated 2 min ago">
  <p>All systems operational.</p>
</Card>`;

const variants = `<Card as="section" variant="sunken" pad={2} aria-label="Details">
  …
</Card>`;

export function CardPage() {
  return (
    <>
      <h1 className="docs-h1">Card</h1>
      <PageIntro>A soft surface container with optional header and footer slots.</PageIntro>

      <ComponentDemo id="card-usage" label="Usage" code={usage}>
        <Card header="Statistics" footer="Updated 2 min ago" style={{ maxWidth: 320 }}>
          <p>All systems operational.</p>
        </Card>
      </ComponentDemo>

      <ComponentDemo id="card-variants" label="Variants" code={variants}>
        <Card variant="sunken" pad={2}>
          Sunken, pad 2
        </Card>
        <Card variant="raised" pad={4}>
          Raised, pad 4
        </Card>
      </ComponentDemo>

      <PropsTable
        rows={[
          {
            name: "variant",
            type: '"raised" | "sunken"',
            def: '"raised"',
            description: "Extruded or pressed surface",
          },
          {
            name: "pad",
            type: "0 | 1 | 2 | 3 | 4 | 5 | 6",
            def: "4",
            description: "Padding step (--neu-space-*)",
          },
          { name: "header / footer", type: "ReactNode", description: "Slots above/below the body" },
          { name: "as", type: "ElementType", def: '"div"', description: "Render as e.g. section" },
        ]}
      />
    </>
  );
}
