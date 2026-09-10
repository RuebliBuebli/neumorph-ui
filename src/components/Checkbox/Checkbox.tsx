import { useId, useState } from "react";
import type { ReactNode } from "react";
import { cx } from "../../utils/cx";

export interface CheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  /** Third state: neither checked nor unchecked. */
  indeterminate?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  label?: ReactNode;
  hideLabel?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  name?: string;
  value?: string;
  className?: string;
}

export function Checkbox({
  checked,
  defaultChecked = false,
  indeterminate = false,
  onCheckedChange,
  label,
  hideLabel = false,
  disabled,
  invalid,
  name,
  value,
  className,
}: CheckboxProps) {
  const [internal, setInternal] = useState(defaultChecked);
  const isControlled = checked !== undefined;
  const isChecked = isControlled ? checked : internal;
  const autoId = useId();

  return (
    <label className={cx("neu-checkbox", disabled && "neu-checkbox--disabled", className)}>
      <input
        type="checkbox"
        className="neu-checkbox__input"
        id={autoId}
        name={name}
        value={value}
        checked={isChecked}
        disabled={disabled}
        aria-invalid={invalid || undefined}
        ref={(el) => {
          if (el) el.indeterminate = indeterminate && !isChecked;
        }}
        onChange={(event) => {
          if (!isControlled) setInternal(event.target.checked);
          onCheckedChange?.(event.target.checked);
        }}
      />
      <span className="neu-checkbox__box" aria-hidden="true">
        <svg
          className="neu-checkbox__check"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          {indeterminate && !isChecked ? (
            <path d="M3.5 8h9" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          ) : (
            <path
              d="M3 8.5 6.2 11.8 13 4.8"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
        </svg>
      </span>
      {label != null && (
        <span className={cx("neu-checkbox__label", hideLabel && "neu-visually-hidden")}>
          {label}
        </span>
      )}
    </label>
  );
}