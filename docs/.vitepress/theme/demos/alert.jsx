import { Alert } from "../../../../src/index";

export function AlertDemo() {
  return (
    <div style={{ display: "grid", gap: 12, flex: 1, minWidth: 280 }}>
      <Alert tone="info" title="Heads up">Something informative.</Alert>
      <Alert tone="success" title="Saved">Your changes are stored.</Alert>
      <Alert tone="error" title="Failed">The upload did not complete.</Alert>
    </div>
  );
}