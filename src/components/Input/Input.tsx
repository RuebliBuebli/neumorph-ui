import { useId } from "react";
import type { ReactNode } from "react";
import { cx } from "../../utils/cx";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "prefix" | "suffix"> {
  /** Label shown above the field (click focuses input). */
  label?: ReactNode;
  /** Helper or error text shown below the field. */
  hint?: ReactNode;
  /** Marks the field invalid — shows hint in error color. */
  invalid?: boolean;
  /** Content rendered inside the field before the value. */
  prefix?: ReactNode;
  /** Content rendered inside the field after the value. */
  suffix?: ReactNode;
  size?: "sm" | "md" | "lg";
}

const sizeClass = {
  sm: "neu-input--sm",
  md: "neu-input--md",
  lg: "neu-input--lg",
} as const;

export function Input({
  label,
  hint,
  invalid = false,
  prefix,
  suffix,
  size = "md",
  className,
  id,
  disabled,
  ...rest
}: InputProps) {
  const autoId = useId();
  const inputId = id ?? autoId;
  const hintId = `${inputId}-hint`;
  const hasHint = hint != null;

  return (
    <div className={cx("neu-field", className)}>
      {label != null && (
        <label className="neu-field__label" htmlFor={inputId}>
          {label}
        </label>
      )}
      <div
        className={cx(
          "neu-input",
          sizeClass[size],
          invalid && "neu-input--invalid",
          disabled && "neu-input--disabled",
        )}
      >
        {prefix != null && <span className="neu-input__affix">{prefix}</span>}
        <input
          id={inputId}
          className="neu-input__control"
          disabled={disabled}
          aria-invalid={invalid || undefined}
          aria-describedby={hasHint ? hintId : undefined}
          {...rest}
        />
        {suffix != null && <span className="neu-input__affix">{suffix}</span>}
      </div>
      {hasHint && (
        <p
          className={cx("neu-field__hint", invalid && "neu-field__hint--error")}
          id={hintId}
        >
          {hint}
        </p>
      )}
    </div>
  );
}