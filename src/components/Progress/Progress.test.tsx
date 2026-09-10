import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Progress } from "./Progress";

describe("Progress", () => {
  it("determinate mode exposes value aria attributes", () => {
    render(<Progress value={64} label="Upload" />);
    const bar = screen.getByRole("progressbar", { name: "Upload" });
    expect(bar).toHaveAttribute("aria-valuenow", "64");
    expect(bar).toHaveAttribute("aria-valuemin", "0");
    expect(bar).toHaveAttribute("aria-valuemax", "100");
  });

  it("clamps out-of-range values", () => {
    render(<Progress value={140} aria-label="x" />);
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "100");
  });

  it("indeterminate mode sets data attr and no value", () => {
    render(<Progress aria-label="Loading" />);
    const bar = screen.getByRole("progressbar");
    expect(bar).toHaveAttribute("data-indeterminate", "true");
    expect(bar).not.toHaveAttribute("aria-valuenow");
  });

  it("applies tone and size classes", () => {
    render(<Progress value={10} tone="error" size="lg" aria-label="x" />);
    const bar = screen.getByRole("progressbar");
    expect(bar).toHaveClass("neu-progress--error", "neu-progress--lg");
  });

  it("bar width reflects value", () => {
    render(<Progress value={30} aria-label="x" />);
    const fill = screen.getByRole("progressbar").querySelector(".neu-progress__bar");
    expect(fill).toHaveStyle({ width: "30%" });
  });
});