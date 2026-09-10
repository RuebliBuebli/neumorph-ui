import { useState } from "react";
import { Select } from "@rueblibuebli/neumorph-ui";
import { ComponentDemo, PageIntro, PropsTable } from "../../components/ComponentDemo";

const usage = `import { Select } from "@rueblibuebli/neumorph-ui";

<Select
  label="Country"
  options={[
    { value: "de", label: "Germany" },
    { value: "ch", label: "Switzerland" },
  ]}
/>`;

export function SelectPage() {
  const [country, setCountry] = useState("ch");

  return (
    <>
      <h1 className="docs-h1">Select</h1>
      <PageIntro>
        Native select with neumorphic styling — full native accessibility for free.
      </PageIntro>

      <ComponentDemo id="select-usage" label="Usage" code={usage}>
        <Select
          label="Country"
          options={[
            { value: "de", label: "Germany" },
            { value: "ch", label: "Switzerland" },
            { value: "at", label: "Austria", disabled: true },
          ]}
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </ComponentDemo>

      <PropsTable
        rows={[
          { name: "label / hint / invalid", type: "—", description: "Same wiring as Input" },
          {
            name: "options",
            type: "{ value, label, disabled? }[]",
            description: "Declarative options",
          },
          {
            name: "children",
            type: "ReactNode",
            description: "Alternative: custom <option> children",
          },
          { name: "size", type: '"sm" | "md" | "lg"', def: '"md"', description: "Field height" },
        ]}
      />

      <p className="docs-p">
        Native <code className="docs-inline-code">select</code> attributes pass through. The chevron
        is decorative; the native dropdown menu is used as-is for maximum compatibility.
      </p>
    </>
  );
}
