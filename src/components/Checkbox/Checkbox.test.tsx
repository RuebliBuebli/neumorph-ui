import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  it("renders as checkbox with label", () => {
    render(<Checkbox label="Accept terms" />);
    expect(screen.getByRole("checkbox", { name: "Accept terms" })).toBeInTheDocument();
  });

  it("toggles on click", async () => {
    const user = userEvent.setup();
    render(<Checkbox label="Subscribe" />);
    const box = screen.getByRole("checkbox", { name: "Subscribe" });
    expect(box).not.toBeChecked();
    await user.click(box);
    expect(box).toBeChecked();
  });

  it("fires onCheckedChange", async () => {
    const user = userEvent.setup();
    const onCheckedChange = vi.fn();
    render(<Checkbox label="Subscribe" onCheckedChange={onCheckedChange} />);
    await user.click(screen.getByRole("checkbox", { name: "Subscribe" }));
    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it("indeterminate shows dash state and is reported by indeterminate prop", async () => {
    const user = userEvent.setup();
    const { rerender } = render(<Checkbox label="All" indeterminate />);
    const box = screen.getByRole("checkbox", { name: "All" }) as HTMLInputElement;
    expect(box.indeterminate).toBe(true);
    await user.click(box);
    expect(box.checked).toBe(true);
    rerender(<Checkbox label="All" indeterminate checked />);
    expect(
      (screen.getByRole("checkbox", { name: "All" }) as HTMLInputElement).indeterminate,
    ).toBe(false);
  });

  it("disabled checkbox ignores clicks", async () => {
    const user = userEvent.setup();
    const onCheckedChange = vi.fn();
    render(<Checkbox label="Frozen" disabled onCheckedChange={onCheckedChange} />);
    await user.click(screen.getByRole("checkbox", { name: "Frozen" }));
    expect(onCheckedChange).not.toHaveBeenCalled();
  });
});