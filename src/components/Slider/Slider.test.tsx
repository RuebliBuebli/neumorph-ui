import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Slider } from "./Slider";

describe("Slider", () => {
  it("renders as slider with label", () => {
    render(<Slider label="Volume" />);
    expect(screen.getByRole("slider", { name: "Volume" })).toBeInTheDocument();
  });

  it("shows formatted value when showValue", () => {
    render(<Slider label="Volume" value={60} showValue formatValue={(v) => `${v}%`} />);
    expect(screen.getByText("60%")).toBeInTheDocument();
  });

  it("value and aria attributes are passed through", () => {
    render(<Slider label="Volume" value={40} min={0} max={100} aria-valuetext="forty" />);
    const slider = screen.getByRole("slider", { name: "Volume" });
    expect(slider).toHaveValue("40");
    expect(slider).toHaveAttribute("aria-valuetext", "forty");
  });

  it("accepts direct value changes (uncontrolled)", () => {
    render(<Slider label="Volume" defaultValue={50} />);
    const slider = screen.getByRole("slider", { name: "Volume" }) as HTMLInputElement;
    slider.value = "75";
    slider.dispatchEvent(new Event("input", { bubbles: true }));
    expect(slider).toHaveValue("75");
  });

  it("sets accent fill custom property from value", () => {
    render(<Slider label="Volume" value={75} min={0} max={100} />);
    const slider = screen.getByRole("slider", { name: "Volume" });
    expect(slider.style.getPropertyValue("--neu-slider-fill")).toBe("75%");
  });

  it("disabled slider ignores keys", async () => {
    const user = userEvent.setup();
    render(<Slider label="Volume" defaultValue={50} disabled />);
    const slider = screen.getByRole("slider", { name: "Volume" });
    slider.focus();
    await user.keyboard("{ArrowRight}");
    expect(slider).toHaveValue("50");
  });
});