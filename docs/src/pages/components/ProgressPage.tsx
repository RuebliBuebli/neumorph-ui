import { Progress } from "@rueblibuebli/neumorph-ui";
import { ComponentDemo, PageIntro, PropsTable } from "../../components/ComponentDemo";

const usage = `import { Progress } from "@rueblibuebli/neumorph-ui";

<Progress value={64} label="Upload" />
<Progress tone="success" value={100} label="Done" />
<Progress label="Loading" />  {/* indeterminate */}`;

export function ProgressPage() {
  return (
    <>
      <h1 className="docs-h1">Progress</h1>
      <PageIntro>Determinate and indeterminate progress on a sunken track.</PageIntro>

      <ComponentDemo id="progress-usage" label="Usage" code={usage}>
        <div className="docs-stack" style={{ minWidth: 240, flex: 1 }}>
          <Progress value={64} label="Upload" />
          <Progress value={100} tone="success" label="Done" />
          <Progress tone="error" label="Failed" />
        </div>
      </ComponentDemo>

      <PropsTable
        rows={[
          {
            name: "value",
            type: "number",
            description: "0–100; omit for indeterminate",
          },
          {
            name: "tone",
            type: '"accent" | "success" | "warning" | "error"',
            def: '"accent"',
            description: "Bar color",
          },
          {
            name: "size",
            type: '"sm" | "md" | "lg"',
            def: '"md"',
            description: "Track height",
          },
          { name: "label", type: "string", description: "Accessible name" },
        ]}
      />
    </>
  );
}
