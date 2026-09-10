import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Skeleton } from "./Skeleton";

describe("Skeleton", () => {
  it("renders a single text line", () => {
    const { container } = render(<Skeleton />);
    expect(container.querySelectorAll(".neu-skeleton")).toHaveLength(1);
  });

  it("renders multiple lines with a shorter last line", () => {
    const { container } = render(<Skeleton lines={3} />);
    const lines = container.querySelectorAll(".neu-skeleton");
    expect(lines).toHaveLength(3);
    expect(lines[2]).toHaveClass("neu-skeleton--text-last");
  });

  it("circle shape applies class", () => {
    render(<Skeleton shape="circle" />);
    expect(document.querySelector(".neu-skeleton")).toHaveClass("neu-skeleton--circle");
  });

  it("width/height styles pass through", () => {
    render(<Skeleton shape="rect" width={200} height={80} />);
    expect(document.querySelector(".neu-skeleton")).toHaveStyle({ width: "200px", height: "80px" });
  });
});