import { useState } from "react";
import { Tabs } from "@rueblibuebli/neumorph-ui";
import { ComponentDemo, PageIntro, PropsTable } from "../../components/ComponentDemo";

const usage = `import { Tabs } from "@rueblibuebli/neumorph-ui";

<Tabs
  items={[
    { key: "overview", label: "Overview", content: <p>…</p> },
    { key: "settings", label: "Settings", content: <p>…</p> },
    { key: "secret", label: "Secret", content: <p>…</p>, disabled: true },
  ]}
/>`;

export function TabsPage() {
  const [active, setActive] = useState("overview");

  return (
    <>
      <h1 className="docs-h1">Tabs</h1>
      <PageIntro>
        Tab interface with full tablist/tab/tabpanel ARIA wiring and roving tabindex.
      </PageIntro>

      <ComponentDemo id="tabs-usage" label="Usage" code={usage}>
        <div style={{ flex: 1, minWidth: 280 }}>
          <Tabs
            active={active}
            onActiveChange={setActive}
            items={[
              { key: "overview", label: "Overview", content: "First panel." },
              { key: "settings", label: "Settings", content: "Second panel." },
              { key: "secret", label: "Secret", content: "Disabled tab.", disabled: true },
            ]}
          />
        </div>
      </ComponentDemo>

      <PropsTable
        rows={[
          {
            name: "items",
            type: "{ key, label, content, disabled? }[]",
            description: "Tab definitions (required)",
          },
          {
            name: "active / defaultActive",
            type: "string",
            def: "first enabled",
            description: "Controlled / uncontrolled key",
          },
          {
            name: "onActiveChange",
            type: "(key: string) => void",
            description: "Selection callback",
          },
        ]}
      />

      <p className="docs-p">
        Keyboard: ←/→ cycle, Home/End jump (disabled tabs are skipped and focus follows).
      </p>
    </>
  );
}
