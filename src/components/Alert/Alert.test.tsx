import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Alert } from "./Alert";

describe("Alert", () => {
  it("renders title and body", () => {
    render(<Alert tone="warning" title="Heads up">Check your input</Alert>);
    expect(screen.getByText("Heads up")).toBeInTheDocument();
    expect(screen.getByText("Check your input")).toBeInTheDocument();
  });

  it("error tone uses role=alert, others status", () => {
    const { rerender } = render(<Alert tone="error" title="Broken" />);
    expect(screen.getByRole("alert")).toBeInTheDocument();
    rerender(<Alert tone="info" title="Info" />);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("dismiss button calls onDismiss and removes the alert", async () => {
    const user = userEvent.setup();
    const onDismiss = vi.fn();
    render(<Alert title="Bye" onDismiss={onDismiss} />);
    await user.click(screen.getByRole("button", { name: "Dismiss" }));
    expect(onDismiss).toHaveBeenCalledOnce();
    expect(screen.queryByText("Bye")).not.toBeInTheDocument();
  });

  it("no dismiss button without onDismiss", () => {
    render(<Alert title="Stay" />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});