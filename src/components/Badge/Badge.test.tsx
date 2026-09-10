import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Badge } from "./Badge";

describe("Badge", () => {
  it("renders children with tone class", () => {
    render(<Badge tone="success">Active</Badge>);
    expect(screen.getByText("Active")).toHaveClass("neu-badge", "neu-badge--success");
  });

  it("pill shape adds class", () => {
    render(<Badge pill>42</Badge>);
    expect(screen.getByText("42")).toHaveClass("neu-badge--pill");
  });

  it("defaults to neutral", () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText("New")).toHaveClass("neu-badge--neutral");
  });
});