import { Badge } from "@rueblibuebli/neumorph-ui";
import { ComponentDemo, PageIntro, PropsTable } from "../../components/ComponentDemo";

const usage = `import { Badge } from "@rueblibuebli/neumorph-ui";

<Badge tone="success">Active</Badge>
<Badge tone="error" pill>3</Badge>`;

export function BadgePage() {
  return (
    <>
      <h1 className="docs-h1">Badge</h1>
      <PageIntro>Small status chip with a raised soft surface.</PageIntro>

      <ComponentDemo id="badge-usage" label="Usage" code={usage}>
        <Badge>Neutral</Badge>
        <Badge tone="accent">Accent</Badge>
        <Badge tone="success" data-dot="true">
          Active
        </Badge>
        <Badge tone="warning">Pending</Badge>
        <Badge tone="error" pill>
          3
        </Badge>
        <Badge tone="info">Info</Badge>
      </ComponentDemo>

      <PropsTable
        rows={[
          {
            name: "tone",
            type: '"accent" | "success" | "warning" | "error" | "info" | "neutral"',
            def: '"neutral"',
            description: "Color tone",
          },
          { name: "pill", type: "boolean", def: "false", description: "Fully rounded shape" },
        ]}
      />

      <p className="docs-p">
        A colored status dot can be added with{" "}
        <code className="docs-inline-code">data-dot="true"</code>.
      </p>
    </>
  );
}
