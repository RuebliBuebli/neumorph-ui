import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
  it("renders as a button with default variant classes", () => {
    render(<Button>Save</Button>);
    const button = screen.getByRole("button", { name: "Save" });
    expect(button).toHaveClass("neu-button", "neu-button--raised", "neu-button--md");
    expect(button).toHaveAttribute("type", "button");
  });

  it.each(["raised", "sunken", "flat", "accent"] as const)("applies %s variant", (variant) => {
    render(<Button variant={variant}>X</Button>);
    expect(screen.getByRole("button")).toHaveClass(`neu-button--${variant}`);
  });

  it.each(["sm", "md", "lg"] as const)("applies %s size", (size) => {
    render(<Button size={size}>X</Button>);
    expect(screen.getByRole("button")).toHaveClass(`neu-button--${size}`);
  });

  it("fires onClick", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click</Button>);
    await user.click(screen.getByRole("button", { name: "Click" }));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("disabled button does not fire onClick", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <Button onClick={onClick} disabled>
        No
      </Button>,
    );
    await user.click(screen.getByRole("button", { name: "No" }));
    expect(onClick).not.toHaveBeenCalled();
  });

  it("loading disables and marks aria-busy", () => {
    render(<Button loading>Go</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-busy", "true");
    expect(button.querySelector(".neu-button__spinner")).toBeInTheDocument();
  });

  it("renders as a link when as=a, without button type/disabled attrs", () => {
    render(
      <Button as="a" href="#x">
        Link
      </Button>,
    );
    const link = screen.getByRole("link", { name: "Link" });
    expect(link).not.toHaveAttribute("type");
    expect(link).not.toHaveAttribute("disabled");
  });
});