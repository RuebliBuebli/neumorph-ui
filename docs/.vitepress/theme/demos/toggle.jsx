import { useState } from "react";
import { Toggle } from "../../../../src/index";

export function ToggleDemo() {
  const [on, setOn] = useState(true);
  return (
    <>
      <Toggle label="Wi-Fi" defaultChecked />
      <Toggle label="Controlled" checked={on} onCheckedChange={setOn} />
      <Toggle label="Disabled" disabled />
    </>
  );
}