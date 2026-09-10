import { Badge } from "../../../../src/index";

export function BadgeDemo() {
  return (
    <>
      <Badge>Neutral</Badge>
      <Badge tone="accent">Accent</Badge>
      <Badge tone="success" data-dot="true">Active</Badge>
      <Badge tone="warning">Pending</Badge>
      <Badge tone="error" pill>3</Badge>
      <Badge tone="info">Info</Badge>
    </>
  );
}