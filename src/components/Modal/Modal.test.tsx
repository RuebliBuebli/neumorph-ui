import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { describe, expect, it, vi } from "vitest";
import { Modal } from "./Modal";

describe("Modal", () => {
  it("renders nothing when closed", () => {
    const { container } = render(<Modal open={false} onClose={() => {}} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("renders dialog with title and footer when open", () => {
    render(
      <Modal open onClose={vi.fn()} title="Confirm" footer="actions">
        Body text
      </Modal>,
    );
    const dialog = screen.getByRole("dialog", { name: "Confirm" });
    expect(dialog).toHaveAttribute("aria-modal", "true");
    expect(screen.getByText("Body text")).toBeInTheDocument();
    expect(screen.getByText("actions")).toBeInTheDocument();
  });

  it("Escape calls onClose", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(
      <Modal open onClose={onClose} title="T">
        <button type="button">inside</button>
      </Modal>,
    );
    await user.keyboard("{Escape}");
    expect(onClose).toHaveBeenCalledOnce();
  });

  it("backdrop click closes, panel click does not", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(
      <Modal open onClose={onClose} title="T">
        <button type="button">inside</button>
      </Modal>,
    );
    await user.click(screen.getByText("inside"));
    expect(onClose).not.toHaveBeenCalled();
    const backdrop = screen.getByRole("dialog").parentElement!;
    await user.click(backdrop);
    expect(onClose).toHaveBeenCalledOnce();
  });

  it("focus moves into the dialog and is restored on close", async () => {
    const user = userEvent.setup();
    const opener = document.createElement("button");
    document.body.appendChild(opener);
    opener.focus();

    function Harness() {
      const [open, setOpen] = useState(false);
      return (
        <>
          <button type="button" onClick={() => setOpen(true)}>
            open
          </button>
          <Modal open={open} onClose={() => setOpen(false)} title="T">
            <button type="button">inside</button>
          </Modal>
        </>
      );
    }
    render(<Harness />);
    await user.click(screen.getByRole("button", { name: "open" }));
    expect(screen.getByRole("button", { name: "inside" })).toHaveFocus();
    await user.keyboard("{Escape}");
    expect(screen.getByRole("button", { name: "open" })).toHaveFocus();
    opener.remove();
  });

  it("non-dismissible modal ignores Escape", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(
      <Modal open onClose={onClose} title="T" dismissible={false}>
        x
      </Modal>,
    );
    await user.keyboard("{Escape}");
    expect(onClose).not.toHaveBeenCalled();
  });
});