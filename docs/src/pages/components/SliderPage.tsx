import { useState } from "react";
import { Slider } from "@rueblibuebli/neumorph-ui";
import { ComponentDemo, PageIntro, PropsTable } from "../../components/ComponentDemo";

const usage = `import { Slider } from "@rueblibuebli/neumorph-ui";

<Slider
  label="Volume"
  showValue
  formatValue={(v) => \`\${v}%\`}
  defaultValue={60}
  min={0}
  max={100}
/>`;

export function SliderPage() {
  const [value, setValue] = useState(60);

  return (
    <>
      <h1 className="docs-h1">Slider</h1>
      <PageIntro>Range input with an accent-filled sunken track and raised thumb.</PageIntro>

      <ComponentDemo id="slider-usage" label="Usage" code={usage}>
        <div style={{ minWidth: 260, flex: 1 }}>
          <Slider
            label="Volume"
            showValue
            formatValue={(v) => `${v}%`}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
          />
        </div>
      </ComponentDemo>

      <PropsTable
        rows={[
          { name: "label", type: "ReactNode", description: "Accessible label" },
          {
            name: "showValue",
            type: "boolean",
            def: "false",
            description: "Render the current value next to the label",
          },
          {
            name: "formatValue",
            type: "(value: number) => string",
            description: "Value formatting",
          },
          {
            name: "size",
            type: '"sm" | "md" | "lg"',
            def: '"md"',
            description: "Track height / thumb size",
          },
        ]}
      />

      <p className="docs-p">
        All native <code className="docs-inline-code">input[type=range]</code> attributes pass
        through (<code className="docs-inline-code">min</code>,{" "}
        <code className="docs-inline-code">max</code>,{" "}
        <code className="docs-inline-code">step</code>,{" "}
        <code className="docs-inline-code">value</code>,{" "}
        <code className="docs-inline-code">onChange</code>,{" "}
        <code className="docs-inline-code">aria-valuetext</code>, …).
      </p>
    </>
  );
}
