import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Tooltip } from "./Tooltip";

describe("Tooltip", () => {
  it("shows content after hover delay", async () => {
    const user = userEvent.setup();
    render(
      <Tooltip content="Helpful text" delay={0}>
        <button type="button">Hover me</button>
      </Tooltip>,
    );
    await user.hover(screen.getByRole("button", { name: "Hover me" }));
    await waitFor(() => expect(screen.getByRole("tooltip")).toHaveTextContent("Helpful text"));
  });

  it("hides on unhover", async () => {
    const user = userEvent.setup();
    render(
      <Tooltip content="Tip" delay={0}>
        <button type="button">Hover me</button>
      </Tooltip>,
    );
    const trigger = screen.getByRole("button", { name: "Hover me" });
    await user.hover(trigger);
    await waitFor(() => expect(screen.getByRole("tooltip")).toBeInTheDocument());
    await user.unhover(trigger);
    await waitFor(() => expect(screen.queryByRole("tooltip")).not.toBeInTheDocument());
  });

  it("shows on focus for keyboard users", async () => {
    const user = userEvent.setup();
    render(
      <Tooltip content="Keyboard tip" delay={0}>
        <button type="button">Focus me</button>
      </Tooltip>,
    );
    await user.tab();
    await waitFor(() => expect(screen.getByRole("tooltip")).toHaveTextContent("Keyboard tip"));
  });
});