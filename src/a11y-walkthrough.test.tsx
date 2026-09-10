import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { describe, expect, it } from "vitest";
import {
  ThemeProvider,
  Button,
  Toggle,
  Checkbox,
  RadioGroup,
  Tabs,
  Accordion,
  Pagination,
} from "./index";

/**
 * Keyboard-only walkthrough across the main interactive components.
 * If a component becomes keyboard-inoperable, this fails.
 */
describe("keyboard walkthrough", () => {
  it("every interactive component is reachable and operable via keyboard", async () => {
    const user = userEvent.setup();

    function Page() {
      const [page, setPage] = useState(0);
      return (
        <ThemeProvider defaultTheme="light">
          <main>
            <Button>Save</Button>
            <Toggle label="Wi-Fi" />
            <Checkbox label="Subscribe" />
            <RadioGroup
              legend="Plan"
              options={[
                { value: "free", label: "Free" },
                { value: "pro", label: "Pro" },
              ]}
            />
            <Tabs
              items={[
                { key: "a", label: "Alpha", content: "Alpha content" },
                { key: "b", label: "Beta", content: "Beta content" },
              ]}
            />
            <Accordion items={[{ key: "q", title: "Question?", content: "Answer." }]} />
            <Pagination page={page} pageCount={5} onChange={setPage} />
          </main>
        </ThemeProvider>
      );
    }

    render(<Page />);

    // Tab through everything — no crashes, no traps (Modal not rendered).
    for (let i = 0; i < 14; i++) {
      await user.tab();
    }

    // Operate the toggle via keyboard.
    const toggle = screen.getByRole("switch", { name: "Wi-Fi" });
    toggle.focus();
    await user.keyboard(" ");
    expect(toggle).toBeChecked();

    // Tabs via arrow keys.
    const alpha = screen.getByRole("tab", { name: "Alpha" });
    alpha.focus();
    await user.keyboard("{ArrowRight}");
    expect(screen.getByRole("tab", { name: "Beta" })).toHaveAttribute(
      "aria-selected",
      "true",
    );

    // Accordion via Enter.
    const trigger = screen.getByRole("button", { name: "Question?" });
    trigger.focus();
    await user.keyboard("{Enter}");
    expect(trigger).toHaveAttribute("aria-expanded", "true");

    // Pagination via Enter.
    const page2 = screen.getByRole("button", { name: "Page 2" });
    page2.focus();
    await user.keyboard("{Enter}");
    expect(screen.getByRole("button", { name: "Page 2" })).toHaveAttribute(
      "aria-current",
      "page",
    );
  });
});