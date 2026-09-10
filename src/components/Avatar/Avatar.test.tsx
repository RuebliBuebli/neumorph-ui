import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Avatar } from "./Avatar";

describe("Avatar", () => {
  it("renders image with alt as accessible name", () => {
    render(<Avatar src="https://example.com/a.png" alt="Jane Doe" />);
    const avatar = screen.getByRole("img", { name: "Jane Doe" });
    expect(avatar.querySelector("img")).toHaveAttribute("src", "https://example.com/a.png");
  });

  it("falls back to initials derived from name", () => {
    render(<Avatar name="Ada Lovelace" />);
    expect(screen.getByRole("img", { name: "Ada Lovelace" })).toHaveTextContent("AL");
  });

  it("single name yields one initial", () => {
    render(<Avatar name="Cher" />);
    expect(screen.getByRole("img", { name: "Cher" })).toHaveTextContent("C");
  });

  it("applies size and sunken variant classes", () => {
    render(<Avatar name="Ada" size="xl" variant="sunken" />);
    const avatar = screen.getByRole("img", { name: "Ada" });
    expect(avatar).toHaveClass("neu-avatar--xl", "neu-avatar--sunken");
  });
});