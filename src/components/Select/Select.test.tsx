import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Select } from "./Select";

const options = [
  { value: "de", label: "Germany" },
  { value: "ch", label: "Switzerland" },
  { value: "at", label: "Austria", disabled: true },
];

describe("Select", () => {
  it("renders options with label association", () => {
    render(<Select label="Country" options={options} />);
    const select = screen.getByLabelText("Country");
    expect(select).toHaveDisplayValue("Germany");
    expect(screen.getAllByRole("option")).toHaveLength(3);
  });

  it("user can select another option", async () => {
    const user = userEvent.setup();
    render(<Select label="Country" options={options} />);
    await user.selectOptions(screen.getByLabelText("Country"), "ch");
    expect(screen.getByLabelText("Country")).toHaveValue("ch");
  });

  it("invalid state sets aria-invalid", () => {
    render(<Select label="Country" options={options} invalid />);
    expect(screen.getByLabelText("Country")).toHaveAttribute("aria-invalid", "true");
  });

  it("children override options", () => {
    render(
      <Select label="Custom">
        <option value="a">A</option>
        <option value="b">B</option>
      </Select>,
    );
    expect(screen.getAllByRole("option")).toHaveLength(2);
  });
});