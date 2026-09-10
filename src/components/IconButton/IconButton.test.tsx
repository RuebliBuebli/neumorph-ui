import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { IconButton } from "./IconButton";

const PlusIcon = (
  <svg viewBox="0 0 16 16" fill="none">
    <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

describe("IconButton", () => {
  it("renders a button with accessible name from aria-label", () => {
    render(<IconButton icon={PlusIcon} aria-label="Add item" />);
    expect(screen.getByRole("button", { name: "Add item" })).toBeInTheDocument();
  });

  it("circle shape applies class and keeps click behavior", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<IconButton icon={PlusIcon} aria-label="Add" shape="circle" onClick={onClick} />);
    const button = screen.getByRole("button", { name: "Add" });
    expect(button).toHaveClass("neu-icon-button--circle");
    await user.click(button);
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("default type is button", () => {
    render(<IconButton icon={PlusIcon} aria-label="Add" />);
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
  });
});