import { Progress } from "../../../../src/index";

export function ProgressDemo() {
  return (
    <div style={{ display: "grid", gap: 12, flex: 1, minWidth: 240 }}>
      <Progress value={64} label="Upload" />
      <Progress value={100} tone="success" label="Done" />
      <Progress tone="error" label="Failed" />
    </div>
  );
}