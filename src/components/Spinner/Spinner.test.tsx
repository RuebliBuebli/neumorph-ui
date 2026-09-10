import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Spinner } from "./Spinner";

describe("Spinner", () => {
  it("renders a status with label", () => {
    render(<Spinner label="Loading results" />);
    expect(screen.getByRole("status", { name: "Loading results" })).toBeInTheDocument();
  });

  it("applies size classes", () => {
    const { rerender } = render(<Spinner size="sm" />);
    expect(screen.getByRole("status")).toHaveClass("neu-spinner--sm");
    rerender(<Spinner size="lg" />);
    expect(screen.getByRole("status")).toHaveClass("neu-spinner--lg");
  });
});