import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Toggle } from "./Toggle";

describe("Toggle", () => {
  it("renders as role=switch with label", () => {
    render(<Toggle label="Dark mode" />);
    expect(screen.getByRole("switch", { name: "Dark mode" })).toBeInTheDocument();
  });

  it("toggles on click (uncontrolled)", async () => {
    const user = userEvent.setup();
    render(<Toggle label="Wi-Fi" />);
    const toggle = screen.getByRole("switch", { name: "Wi-Fi" });
    expect(toggle).not.toBeChecked();
    await user.click(toggle);
    expect(toggle).toBeChecked();
  });

  it("fires onCheckedChange with the new value", async () => {
    const user = userEvent.setup();
    const onCheckedChange = vi.fn();
    render(<Toggle label="Sync" onCheckedChange={onCheckedChange} />);
    await user.click(screen.getByRole("switch", { name: "Sync" }));
    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it("controlled state does not change without prop update", async () => {
    const user = userEvent.setup();
    render(<Toggle label="Lock" checked={false} />);
    const toggle = screen.getByRole("switch", { name: "Lock" });
    await user.click(toggle);
    expect(toggle).not.toBeChecked();
  });

  it("keyboard space toggles", async () => {
    const user = userEvent.setup();
    render(<Toggle label="Alerts" />);
    const toggle = screen.getByRole("switch", { name: "Alerts" });
    toggle.focus();
    await user.keyboard(" ");
    expect(toggle).toBeChecked();
  });
});