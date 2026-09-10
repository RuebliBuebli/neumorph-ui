import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Accordion } from "./Accordion";

const items = [
  { key: "faq", title: "What is neumorphism?", content: "Soft UI from extruded shadows." },
  { key: "lic", title: "License?", content: "MIT." },
];

describe("Accordion", () => {
  it("renders collapsed by default with aria-expanded false", () => {
    render(<Accordion items={items} />);
    const trigger = screen.getByRole("button", { name: "What is neumorphism?" });
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("region")).not.toBeInTheDocument();
  });

  it("clicking opens the region; clicking again closes", async () => {
    const user = userEvent.setup();
    render(<Accordion items={items} />);
    const trigger = screen.getByRole("button", { name: "What is neumorphism?" });
    await user.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("region", { name: "What is neumorphism?" })).toBeInTheDocument();
    await user.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  it("single mode: opening one closes the other", async () => {
    const user = userEvent.setup();
    render(<Accordion items={items} />);
    await user.click(screen.getByRole("button", { name: "What is neumorphism?" }));
    await user.click(screen.getByRole("button", { name: "License?" }));
    expect(screen.getByRole("button", { name: "What is neumorphism?" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
    expect(screen.getByRole("button", { name: "License?" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
  });

  it("multiple mode keeps both open", async () => {
    const user = userEvent.setup();
    render(<Accordion items={items} multiple />);
    await user.click(screen.getByRole("button", { name: "What is neumorphism?" }));
    await user.click(screen.getByRole("button", { name: "License?" }));
    expect(screen.getAllByRole("region")).toHaveLength(2);
  });

  it("defaultOpen pre-opens an item", () => {
    render(<Accordion items={items} defaultOpen={["lic"]} />);
    expect(screen.getByRole("button", { name: "License?" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
  });
});