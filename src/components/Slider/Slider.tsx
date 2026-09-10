import { useId } from "react";
import type { ReactNode } from "react";
import { cx } from "../../utils/cx";

export interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  label?: ReactNode;
  /** Current value shown at the right of the label. */
  showValue?: boolean;
  /** Format the displayed value. */
  formatValue?: (value: number) => string;
  size?: "sm" | "md" | "lg";
}

export function Slider({
  label,
  showValue = false,
  formatValue,
  size = "md",
  className,
  id,
  value,
  disabled,
  min = 0,
  max = 100,
  ...rest
}: SliderProps) {
  const autoId = useId();
  const sliderId = id ?? autoId;
  const numericValue = typeof value === "number" ? value : Number(value ?? min);
  const safeMin = Number(min);
  const safeMax = Number(max);
  const pct = safeMax > safeMin ? ((numericValue - safeMin) / (safeMax - safeMin)) * 100 : 0;
  const display = formatValue ? formatValue(numericValue) : String(numericValue);

  return (
    <div className={cx("neu-field", className)}>
      {label != null && (
        <div className="neu-slider__header">
          <label className="neu-field__label" htmlFor={sliderId}>
            {label}
          </label>
          {showValue && (
            <output className="neu-slider__value" htmlFor={sliderId}>
              {display}
            </output>
          )}
        </div>
      )}
      <input
        type="range"
        id={sliderId}
        className={cx("neu-slider", `neu-slider--${size}`, disabled && "neu-slider--disabled")}
        style={{ "--neu-slider-fill": `${pct}%` } as React.CSSProperties}
        value={value}
        min={min}
        max={max}
        disabled={disabled}
        {...rest}
      />
    </div>
  );
}