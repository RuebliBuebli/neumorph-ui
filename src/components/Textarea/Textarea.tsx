import { useId } from "react";
import { cx } from "../../utils/cx";

export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  invalid?: boolean;
  /** Grow with content up to maxRows (rows is the minimum). */
  autoSize?: boolean;
  maxRows?: number;
  size?: "sm" | "md" | "lg";
}

const sizeRows = { sm: 2, md: 4, lg: 6 } as const;
const lineHeight = 1.5;

export function Textarea({
  label,
  hint,
  invalid = false,
  autoSize = false,
  maxRows = 12,
  size = "md",
  className,
  id,
  rows,
  disabled,
  onChange,
  ...rest
}: TextareaProps) {
  const autoId = useId();
  const textareaId = id ?? autoId;
  const hintId = `${textareaId}-hint`;
  const hasHint = hint != null;
  const minRows = rows ?? sizeRows[size];

  const style: React.CSSProperties = {
    minHeight: `calc(${minRows} * ${lineHeight}em)`,
    ...(autoSize ? { maxHeight: `calc(${maxRows} * ${lineHeight}em)` } : {}),
  };

  return (
    <div className={cx("neu-field", className)}>
      {label != null && (
        <label className="neu-field__label" htmlFor={textareaId}>
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        className={cx(
          "neu-textarea",
          `neu-textarea--${size}`,
          invalid && "neu-textarea--invalid",
        )}
        style={style}
        disabled={disabled}
        aria-invalid={invalid || undefined}
        aria-describedby={hasHint ? hintId : undefined}
        data-autosize={autoSize || undefined}
        onChange={(event) => {
          if (autoSize) {
            const el = event.currentTarget;
            el.style.height = "auto";
            el.style.height = `${el.scrollHeight}px`;
          }
          onChange?.(event);
        }}
        rows={minRows}
        {...rest}
      />
      {hasHint && (
        <p className={cx("neu-field__hint", invalid && "neu-field__hint--error")} id={hintId}>
          {hint}
        </p>
      )}
    </div>
  );
}