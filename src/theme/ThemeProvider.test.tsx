import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ThemeProvider, useTheme } from "./ThemeProvider";

function Probe() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  return (
    <div>
      <span data-testid="choice">{theme}</span>
      <span data-testid="resolved">{resolvedTheme}</span>
      <button type="button" onClick={() => setTheme("dark")}>
        set
      </button>
    </div>
  );
}

afterEach(() => {
  document.documentElement.removeAttribute("data-theme");
});

describe("ThemeProvider", () => {
  it("renders children inside a wrapper with data-theme", () => {
    render(
      <ThemeProvider defaultTheme="light">
        <p>hello</p>
      </ThemeProvider>,
    );
    expect(screen.getByText("hello")).toBeInTheDocument();
    expect(screen.getByText("hello").parentElement).toHaveAttribute("data-theme", "light");
  });

  it("exposes choice and resolved theme via useTheme", () => {
    render(
      <ThemeProvider defaultTheme="dark">
        <Probe />
      </ThemeProvider>,
    );
    expect(screen.getByTestId("choice")).toHaveTextContent("dark");
    expect(screen.getByTestId("resolved")).toHaveTextContent("dark");
  });

  it("resolves auto against prefers-color-scheme", () => {
    window.matchMedia = vi.fn().mockImplementation((query: string) => ({
      matches: query.includes("dark"),
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }));
    render(
      <ThemeProvider defaultTheme="auto">
        <Probe />
      </ThemeProvider>,
    );
    expect(screen.getByTestId("choice")).toHaveTextContent("auto");
    expect(screen.getByTestId("resolved")).toHaveTextContent("dark");
  });

  it("setTheme updates the applied data-theme", async () => {
    const { userEvent } = await import("@testing-library/user-event");
    const user = userEvent.setup();
    render(
      <ThemeProvider defaultTheme="light">
        <Probe />
      </ThemeProvider>,
    );
    await user.click(screen.getByRole("button", { name: "set" }));
    expect(screen.getByTestId("choice")).toHaveTextContent("dark");
    expect(screen.getByTestId("resolved")).toHaveTextContent("dark");
  });

  it("target=html sets data-theme on documentElement", () => {
    render(
      <ThemeProvider defaultTheme="dark" target="html">
        <p>hi</p>
      </ThemeProvider>,
    );
    expect(document.documentElement).toHaveAttribute("data-theme", "dark");
  });

  it("useTheme throws outside a provider", () => {
    // Silence the expected error output.
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    expect(() => render(<Probe />)).toThrow(/ThemeProvider/);
    spy.mockRestore();
  });
});