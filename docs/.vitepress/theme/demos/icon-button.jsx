import { IconButton } from "../../../../src/index";

const PlusIcon = (
  <svg viewBox="0 0 16 16" fill="none">
    <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export function IconButtonDemo() {
  return (
    <>
      <IconButton icon={PlusIcon} aria-label="Add item (square)" />
      <IconButton icon={PlusIcon} aria-label="Add item (circle)" shape="circle" />
      <IconButton icon={PlusIcon} aria-label="Add item (accent)" variant="accent" shape="circle" />
    </>
  );
}