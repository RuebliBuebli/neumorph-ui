import { Tooltip, Button } from "@rueblibuebli/neumorph-ui";
import { ComponentDemo, PageIntro, PropsTable } from "../../components/ComponentDemo";

const usage = `import { Tooltip } from "@rueblibuebli/neumorph-ui";

<Tooltip content="Soft shadows everywhere" placement="bottom">
  <button type="button">What is this?</button>
</Tooltip>`;

export function TooltipPage() {
  return (
    <>
      <h1 className="docs-h1">Tooltip</h1>
      <PageIntro>Short hint on hover/focus, with accessible wiring.</PageIntro>

      <ComponentDemo id="tooltip-usage" label="Usage" code={usage}>
        <Tooltip content="Soft shadows everywhere" placement="top">
          <Button variant="raised">Hover top</Button>
        </Tooltip>
        <Tooltip content="Focus me with the keyboard" placement="bottom">
          <Button variant="flat">Hover bottom</Button>
        </Tooltip>
      </ComponentDemo>

      <PropsTable
        rows={[
          { name: "content", type: "ReactNode", description: "Tooltip text (required)" },
          {
            name: "placement",
            type: '"top" | "bottom" | "left" | "right"',
            def: '"top"',
            description: "Position",
          },
          { name: "delay", type: "number", def: "300", description: "Show delay in ms" },
        ]}
      />

      <p className="docs-p">
        The tooltip is described via <code className="docs-inline-code">aria-describedby</code>{" "}
        while visible; it works for keyboard focus as well as hover.
      </p>
    </>
  );
}
