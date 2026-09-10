import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Card } from "./Card";

describe("Card", () => {
  it("renders children with raised variant by default", () => {
    render(<Card>Content</Card>);
    const card = screen.getByText("Content").closest(".neu-card");
    expect(card).toHaveClass("neu-card--raised", "neu-card--pad4");
  });

  it("applies sunken variant and custom padding", () => {
    render(
      <Card variant="sunken" pad={2}>
        Content
      </Card>,
    );
    const card = screen.getByText("Content").closest(".neu-card");
    expect(card).toHaveClass("neu-card--sunken", "neu-card--pad2");
  });

  it("renders header and footer slots", () => {
    render(
      <Card header="Title" footer="Footer">
        Body
      </Card>,
    );
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Body")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });

  it("omits header/footer wrappers when slots are not given", () => {
    const { container } = render(<Card>Body</Card>);
    expect(container.querySelector(".neu-card__header")).toBeNull();
    expect(container.querySelector(".neu-card__footer")).toBeNull();
  });

  it("renders as a section with custom props", () => {
    render(
      <Card as="section" aria-label="panel">
        Body
      </Card>,
    );
    expect(screen.getByRole("region", { name: "panel" })).toBeInTheDocument();
  });
});