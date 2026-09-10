import { useId, useState } from "react";
import type { ReactNode } from "react";
import { cx } from "../../utils/cx";

export interface RadioOption {
  value: string;
  label: ReactNode;
  disabled?: boolean;
}

export interface RadioGroupProps {
  options: RadioOption[];
  name?: string;
  legend?: ReactNode;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  orientation?: "vertical" | "horizontal";
  invalid?: boolean;
  className?: string;
}

export function RadioGroup({
  options,
  name,
  legend,
  value,
  defaultValue,
  onValueChange,
  orientation = "vertical",
  invalid,
  className,
}: RadioGroupProps) {
  const autoName = useId();
  const groupName = name ?? autoName;
  const [internal, setInternal] = useState(defaultValue ?? "");
  const isControlled = value !== undefined;
  const current = isControlled ? value : internal;

  const enabled = options.filter((o) => !o.disabled);
  const radioKeys = ["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"];

  const select = (next: string) => {
    if (!isControlled) setInternal(next);
    onValueChange?.(next);
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (!radioKeys.includes(event.key)) return;
    event.preventDefault();
    if (enabled.length === 0) return;
    if (current === "" || !enabled.some((o) => o.value === current)) {
      select(enabled[0]!.value);
      return;
    }
    const index = enabled.findIndex((o) => o.value === current);
    const forward = event.key === "ArrowDown" || event.key === "ArrowRight";
    const next = forward
      ? (index + 1) % enabled.length
      : (index - 1 + enabled.length) % enabled.length;
    const nextOption = enabled[next]!;
    select(nextOption.value);
  };

  return (
    <fieldset
      className={cx("neu-radio-group", className)}
      onKeyDown={onKeyDown}
      aria-invalid={invalid || undefined}
      role="radiogroup"
    >
      {legend != null && <legend className="neu-radio-group__legend">{legend}</legend>}
      <div
        className={cx(
          "neu-radio-group__options",
          orientation === "horizontal" && "neu-radio-group__options--horizontal",
        )}
      >
        {options.map((option) => {
          const checked = option.value === current;
          return (
            <label
              key={option.value}
              className={cx(
                "neu-radio",
                checked && "neu-radio--checked",
                option.disabled && "neu-radio--disabled",
              )}
            >
              <input
                type="radio"
                name={groupName}
                className="neu-radio__input"
                value={option.value}
                checked={checked}
                disabled={option.disabled}
                onChange={() => select(option.value)}
              />
              <span className="neu-radio__dot" aria-hidden="true">
                <span className="neu-radio__dot-inner" />
              </span>
              <span className="neu-radio__label">{option.label}</span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}