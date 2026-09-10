import { Checkbox } from "@rueblibuebli/neumorph-ui";
import { ComponentDemo, PageIntro, PropsTable } from "../../components/ComponentDemo";

const usage = `import { Checkbox } from "@rueblibuebli/neumorph-ui";

<Checkbox label="Accept terms" defaultChecked />`;

const indeterminate = `<Checkbox label="Select all" indeterminate />`;

export function CheckboxPage() {
  return (
    <>
      <h1 className="docs-h1">Checkbox</h1>
      <PageIntro>
        Selection control with a soft check indicator and indeterminate support.
      </PageIntro>

      <ComponentDemo id="checkbox-usage" label="Usage" code={usage}>
        <Checkbox label="Accept terms" defaultChecked />
        <Checkbox label="Disabled" disabled />
      </ComponentDemo>

      <ComponentDemo id="checkbox-indeterminate" label="Indeterminate" code={indeterminate}>
        <Checkbox label="Select all" indeterminate />
      </ComponentDemo>

      <PropsTable
        rows={[
          {
            name: "checked / defaultChecked",
            type: "boolean",
            description: "Controlled / uncontrolled state",
          },
          {
            name: "indeterminate",
            type: "boolean",
            def: "false",
            description: "Third state (dash) — cleared when checked",
          },
          {
            name: "onCheckedChange",
            type: "(checked: boolean) => void",
            description: "Change callback",
          },
          { name: "label / hideLabel", type: "—", description: "Label handling like Toggle" },
          {
            name: "disabled / invalid / name / value",
            type: "—",
            description: "Standard semantics",
          },
        ]}
      />
    </>
  );
}
