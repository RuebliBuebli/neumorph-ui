import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Tabs } from "./Tabs";

const items = [
  { key: "a", label: "Alpha", content: "Alpha content" },
  { key: "b", label: "Beta", content: "Beta content" },
  { key: "c", label: "Gamma", content: "Gamma content", disabled: true },
];

describe("Tabs", () => {
  it("renders first enabled tab active with aria wiring", () => {
    render(<Tabs items={items} />);
    const tab = screen.getByRole("tab", { selected: true });
    expect(tab).toHaveAccessibleName("Alpha");
    expect(tab).toHaveAttribute("aria-controls");
    expect(screen.getByRole("tabpanel")).toHaveTextContent("Alpha content");
  });

  it("clicking a tab activates its panel", async () => {
    const user = userEvent.setup();
    render(<Tabs items={items} />);
    await user.click(screen.getByRole("tab", { name: "Beta" }));
    expect(screen.getByRole("tab", { selected: true })).toHaveAccessibleName("Beta");
    expect(screen.getByRole("tabpanel")).toHaveTextContent("Beta content");
  });

  it("disabled tab cannot be activated", async () => {
    const user = userEvent.setup();
    render(<Tabs items={items} />);
    await user.click(screen.getByRole("tab", { name: "Gamma" }));
    expect(screen.getByRole("tab", { selected: true })).toHaveAccessibleName("Alpha");
  });

  it("arrow keys move between enabled tabs", async () => {
    const user = userEvent.setup();
    render(<Tabs items={items} />);
    const alpha = screen.getByRole("tab", { name: "Alpha" });
    alpha.focus();
    await user.keyboard("{ArrowRight}");
    expect(screen.getByRole("tab", { selected: true })).toHaveAccessibleName("Beta");
    expect(screen.getByRole("tab", { name: "Beta" })).toHaveFocus();
    await user.keyboard("{ArrowRight}");
    expect(screen.getByRole("tab", { selected: true })).toHaveAccessibleName("Alpha");
  });

  it("onActiveChange reports the new key", async () => {
    const user = userEvent.setup();
    const onActiveChange = vi.fn();
    render(<Tabs items={items} onActiveChange={onActiveChange} />);
    await user.click(screen.getByRole("tab", { name: "Beta" }));
    expect(onActiveChange).toHaveBeenCalledWith("b");
  });
});