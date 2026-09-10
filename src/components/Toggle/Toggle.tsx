import { useId, useState } from "react";
import type { ReactNode } from "react";
import { cx } from "../../utils/cx";

export interface ToggleProps {
  /** Controlled state. */
  checked?: boolean;
  /** Uncontrolled initial state. */
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  label?: ReactNode;
  /** Visually hide the label but keep it for screen readers. */
  hideLabel?: boolean;
  disabled?: boolean;
  name?: string;
  value?: string;
  className?: string;
}

export function Toggle({
  checked,
  defaultChecked = false,
  onCheckedChange,
  label,
  hideLabel = false,
  disabled,
  name,
  value,
  className,
}: ToggleProps) {
  const [internal, setInternal] = useState(defaultChecked);
  const isControlled = checked !== undefined;
  const isChecked = isControlled ? checked : internal;
  const autoId = useId();

  return (
    <label className={cx("neu-toggle", disabled && "neu-toggle--disabled", className)}>
      <input
        type="checkbox"
        role="switch"
        className="neu-toggle__input"
        id={autoId}
        name={name}
        value={value}
        checked={isChecked}
        disabled={disabled}
        onChange={(event) => {
          if (!isControlled) setInternal(event.target.checked);
          onCheckedChange?.(event.target.checked);
        }}
      />
      <span className="neu-toggle__track" aria-hidden="true">
        <span className="neu-toggle__thumb" />
      </span>
      {label != null && (
        <span className={cx("neu-toggle__label", hideLabel && "neu-visually-hidden")}>
          {label}
        </span>
      )}
    </label>
  );
}