import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { RadioGroup } from "./RadioGroup";

const options = [
  { value: "small", label: "Small" },
  { value: "medium", label: "Medium" },
  { value: "large", label: "Large", disabled: true },
];

describe("RadioGroup", () => {
  it("renders radios in a radiogroup with legend", () => {
    render(<RadioGroup legend="Size" options={options} />);
    expect(screen.getByRole("radiogroup", { name: "Size" })).toBeInTheDocument();
    expect(screen.getByRole("radio", { name: "Small" })).toBeInTheDocument();
  });

  it("clicking selects a radio", async () => {
    const user = userEvent.setup();
    render(<RadioGroup legend="Size" options={options} />);
    await user.click(screen.getByRole("radio", { name: "Medium" }));
    expect(screen.getByRole("radio", { name: "Medium" })).toBeChecked();
  });

  it("arrow keys move selection", async () => {
    const user = userEvent.setup();
    render(<RadioGroup legend="Size" options={options} defaultValue="small" />);
    const first = screen.getByRole("radio", { name: "Small" });
    first.focus();
    await user.keyboard("{ArrowDown}");
    expect(screen.getByRole("radio", { name: "Medium" })).toBeChecked();
  });

  it("arrow keys from no selection select the first option", async () => {
    const user = userEvent.setup();
    render(<RadioGroup legend="Size" options={options} />);
    screen.getByRole("radio", { name: "Small" }).focus();
    await user.keyboard("{ArrowDown}");
    expect(screen.getByRole("radio", { name: "Small" })).toBeChecked();
  });

  it("onValueChange reports selection", async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(<RadioGroup legend="Size" options={options} onValueChange={onValueChange} />);
    await user.click(screen.getByRole("radio", { name: "Medium" }));
    expect(onValueChange).toHaveBeenCalledWith("medium");
  });

  it("disabled option cannot be selected", async () => {
    const user = userEvent.setup();
    render(<RadioGroup legend="Size" options={options} />);
    await user.click(screen.getByRole("radio", { name: "Large" }));
    expect(screen.getByRole("radio", { name: "Large" })).not.toBeChecked();
  });

  it("radios in one group share a name", () => {
    render(<RadioGroup legend="Size" options={options} name="size-choice" />);
    const radios = screen.getAllByRole("radio");
    radios.forEach((r) => expect(r).toHaveAttribute("name", "size-choice"));
  });
});