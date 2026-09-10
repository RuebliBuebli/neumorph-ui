import { Skeleton } from "../../../../src/index";

export function SkeletonDemo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16, flex: 1, minWidth: 260 }}>
      <Skeleton shape="circle" />
      <div style={{ flex: 1 }}>
        <Skeleton lines={3} />
      </div>
    </div>
  );
}