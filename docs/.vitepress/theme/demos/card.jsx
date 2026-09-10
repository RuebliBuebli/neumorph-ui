import { Card } from "../../../../src/index";

export function CardDemo() {
  return (
    <Card header="Statistics" footer="Updated 2 min ago" style={{ maxWidth: 320 }}>
      <p>All systems operational.</p>
    </Card>
  );
}