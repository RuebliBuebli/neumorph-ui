import { useState } from "react";
import { RadioGroup } from "@rueblibuebli/neumorph-ui";
import { ComponentDemo, PageIntro, PropsTable } from "../../components/ComponentDemo";

const usage = `import { RadioGroup } from "@rueblibuebli/neumorph-ui";

<RadioGroup
  legend="Plan"
  options={[
    { value: "free", label: "Free" },
    { value: "pro", label: "Pro" },
    { value: "enterprise", label: "Enterprise", disabled: true },
  ]}
  defaultValue="free"
/>`;

export function RadioGroupPage() {
  const [value, setValue] = useState("free");

  return (
    <>
      <h1 className="docs-h1">RadioGroup</h1>
      <PageIntro>
        Single-choice group with fieldset/legend semantics and arrow-key navigation.
      </PageIntro>

      <ComponentDemo id="radiogroup-usage" label="Usage" code={usage}>
        <RadioGroup
          legend="Plan"
          orientation="horizontal"
          options={[
            { value: "free", label: "Free" },
            { value: "pro", label: "Pro" },
            { value: "enterprise", label: "Enterprise", disabled: true },
          ]}
          value={value}
          onValueChange={setValue}
        />
      </ComponentDemo>

      <PropsTable
        rows={[
          {
            name: "options",
            type: "{ value, label, disabled? }[]",
            description: "Options (required)",
          },
          { name: "legend", type: "ReactNode", description: "Group name (accessible)" },
          {
            name: "value / defaultValue",
            type: "string",
            description: "Controlled / uncontrolled selection",
          },
          {
            name: "onValueChange",
            type: "(value: string) => void",
            description: "Selection callback",
          },
          {
            name: "orientation",
            type: '"vertical" | "horizontal"',
            def: '"vertical"',
            description: "Layout",
          },
          {
            name: "name",
            type: "string",
            def: "auto",
            description: "Radio group name (form submission)",
          },
        ]}
      />

      <p className="docs-p">
        Arrow keys move the selection; from an empty state the first enabled option is selected.
      </p>
    </>
  );
}
