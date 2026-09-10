import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { describe, expect, it, vi } from "vitest";
import { Input } from "./Input";

describe("Input", () => {
  it("renders an input with label, hint and size class", () => {
    render(<Input label="Email" hint="We never share it" size="lg" />);
    expect(screen.getByLabelText("Email")).toHaveClass("neu-input__control");
    expect(screen.getByText("We never share it")).toBeInTheDocument();
    expect(screen.getByLabelText("Email").closest(".neu-input")).toHaveClass("neu-input--lg");
  });

  it("links hint via aria-describedby and marks invalid", () => {
    render(<Input label="Email" hint="Bad email" invalid />);
    const input = screen.getByLabelText("Email");
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input).toHaveAttribute(
      "aria-describedby",
      screen.getByText("Bad email").id,
    );
  });

  it("renders prefix and suffix slots", () => {
    render(<Input prefix="@" suffix=".com" aria-label="domain" />);
    const box = screen.getByLabelText("domain").closest(".neu-input");
    expect(box?.querySelector(".neu-input__affix")).toBeTruthy();
  });

  it("supports typing and controlled value", async () => {
    const user = userEvent.setup();
    function Controlled() {
      const [v, setV] = useState("");
      return <Input label="Name" value={v} onChange={(e) => setV(e.target.value)} />;
    }
    render(<Controlled />);
    await user.type(screen.getByLabelText("Name"), "Ada");
    expect(screen.getByLabelText("Name")).toHaveValue("Ada");
  });

  it("disabled input is not editable", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Input label="Locked" disabled onChange={onChange} />);
    await user.type(screen.getByLabelText("Locked"), "x");
    expect(onChange).not.toHaveBeenCalled();
  });
});