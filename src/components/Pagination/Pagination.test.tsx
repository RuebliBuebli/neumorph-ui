import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Pagination } from "./Pagination";

describe("Pagination", () => {
  it("renders page buttons with current page marked", () => {
    render(<Pagination page={0} pageCount={5} onChange={vi.fn()} />);
    expect(screen.getByRole("navigation", { name: "Pagination" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Page 1" })).toHaveAttribute(
      "aria-current",
      "page",
    );
  });

  it("clicking a page calls onChange", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Pagination page={0} pageCount={5} onChange={onChange} />);
    await user.click(screen.getByRole("button", { name: "Page 2" }));
    expect(onChange).toHaveBeenCalledWith(1);
  });

  it("prev/next disabled at bounds", () => {
    const { rerender } = render(<Pagination page={0} pageCount={5} onChange={vi.fn()} />);
    expect(screen.getByRole("button", { name: "Previous page" })).toBeDisabled();
    rerender(<Pagination page={4} pageCount={5} onChange={vi.fn()} />);
    expect(screen.getByRole("button", { name: "Next page" })).toBeDisabled();
  });

  it("shows ellipsis and boundary pages when pageCount is large", () => {
    render(<Pagination page={4} pageCount={20} onChange={vi.fn()} />);
    expect(screen.getByRole("button", { name: "Page 1" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Page 20" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Page 5" })).toHaveAttribute("aria-current", "page");
    expect(screen.getAllByText("…").length).toBeGreaterThanOrEqual(1);
  });

  it("renders nothing without pages", () => {
    const { container } = render(<Pagination page={0} pageCount={0} onChange={vi.fn()} />);
    expect(container).toBeEmptyDOMElement();
  });
});