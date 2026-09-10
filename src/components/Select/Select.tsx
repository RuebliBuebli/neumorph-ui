import { useId } from "react";
import type { ReactNode } from "react";
import { cx } from "../../utils/cx";

export interface SelectOption {
  value: string;
  label: ReactNode;
  disabled?: boolean;
}

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  label?: ReactNode;
  hint?: ReactNode;
  invalid?: boolean;
  options?: SelectOption[];
  /** Renders options from children instead of `options` when given. */
  children?: ReactNode;
  size?: "sm" | "md" | "lg";
}

export function Select({
  label,
  hint,
  invalid = false,
  options,
  children,
  size = "md",
  className,
  id,
  disabled,
  ...rest
}: SelectProps) {
  const autoId = useId();
  const selectId = id ?? autoId;
  const hintId = `${selectId}-hint`;
  const hasHint = hint != null;

  return (
    <div className={cx("neu-field", className)}>
      {label != null && (
        <label className="neu-field__label" htmlFor={selectId}>
          {label}
        </label>
      )}
      <div
        className={cx(
          "neu-select",
          `neu-select--${size}`,
          invalid && "neu-select--invalid",
          disabled && "neu-select--disabled",
        )}
      >
        <select
          id={selectId}
          className="neu-select__control"
          disabled={disabled}
          aria-invalid={invalid || undefined}
          aria-describedby={hasHint ? hintId : undefined}
          {...rest}
        >
          {options
            ? options.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  disabled={option.disabled}
                >
                  {option.label}
                </option>
              ))
            : children}
        </select>
        <svg
          className="neu-select__chevron"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M4 6l4 4 4-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {hasHint && (
        <p className={cx("neu-field__hint", invalid && "neu-field__hint--error")} id={hintId}>
          {hint}
        </p>
      )}
    </div>
  );
}