import { useState } from "react";
import { Tabs } from "../../../../src/index";

export function TabsDemo() {
  const [active, setActive] = useState("overview");
  return (
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
  );
}