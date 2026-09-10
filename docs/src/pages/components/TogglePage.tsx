import { useState } from "react";
import { Toggle } from "@rueblibuebli/neumorph-ui";
import { ComponentDemo, PageIntro, PropsTable } from "../../components/ComponentDemo";

const usage = `import { Toggle } from "@rueblibuebli/neumorph-ui";

<Toggle label="Wi-Fi" defaultChecked />`;

const controlled = `const [on, setOn] = useState(false);
<Toggle checked={on} onCheckedChange={setOn} label="Notifications" />`;

export function TogglePage() {
  const [on, setOn] = useState(false);

  return (
    <>
      <h1 className="docs-h1">Toggle</h1>
      <PageIntro>On/off switch with role="switch" semantics.</PageIntro>

      <ComponentDemo id="toggle-usage" label="Usage" code={usage}>
        <Toggle label="Wi-Fi" defaultChecked />
        <Toggle label="Disabled" disabled />
      </ComponentDemo>

      <ComponentDemo id="toggle-controlled" label="Controlled" code={controlled}>
        <Toggle checked={on} onCheckedChange={setOn} label="Notifications" />
      </ComponentDemo>

      <PropsTable
        rows={[
          { name: "checked", type: "boolean", description: "Controlled state" },
          {
            name: "defaultChecked",
            type: "boolean",
            def: "false",
            description: "Uncontrolled initial state",
          },
          {
            name: "onCheckedChange",
            type: "(checked: boolean) => void",
            description: "Change callback",
          },
          { name: "label", type: "ReactNode", description: "Visible (or hidden) label" },
          {
            name: "hideLabel",
            type: "boolean",
            def: "false",
            description: "Visually hide label, keep for screen readers",
          },
          { name: "disabled", type: "boolean", description: "Disabled state" },
          { name: "name / value", type: "string", description: "Form participation" },
        ]}
      />
    </>
  );
}
