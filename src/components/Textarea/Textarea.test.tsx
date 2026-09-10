import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Textarea } from "./Textarea";

describe("Textarea", () => {
  it("renders with label and default rows", () => {
    render(<Textarea label="Notes" />);
    const textarea = screen.getByLabelText("Notes");
    expect(textarea).toHaveAttribute("rows", "4");
  });

  it("size maps to rows", () => {
    render(<Textarea label="Notes" size="lg" aria-label="n" />);
    expect(screen.getByLabelText("Notes")).toHaveAttribute("rows", "6");
  });

  it("invalid sets aria-invalid and error hint", () => {
    render(<Textarea label="Notes" hint="Too long" invalid />);
    expect(screen.getByLabelText("Notes")).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByText("Too long")).toBeInTheDocument();
  });

  it("autoSize adds data-autosize and disables resize via attr", () => {
    render(<Textarea label="Notes" autoSize />);
    expect(screen.getByLabelText("Notes")).toHaveAttribute("data-autosize", "true");
  });
});