import { cx } from "../../utils/cx";

export interface ProgressProps {
  /** Progress 0–100. Omit for indeterminate. */
  value?: number;
  /** Semantic color of the bar. */
  tone?: "accent" | "success" | "warning" | "error";
  size?: "sm" | "md" | "lg";
  /** Accessible name for the progress bar. */
  label?: string;
  className?: string;
}

const toneClass = {
  accent: "neu-progress--accent",
  success: "neu-progress--success",
  warning: "neu-progress--warning",
  error: "neu-progress--error",
} as const;

export function Progress({
  value,
  tone = "accent",
  size = "md",
  label,
  className,
}: ProgressProps) {
  const indeterminate = value === undefined;
  const safeValue = Math.min(100, Math.max(0, value ?? 0));

  return (
    <div
      className={cx("neu-progress", toneClass[tone], `neu-progress--${size}`, className)}
      role="progressbar"
      aria-label={label}
      aria-valuemin={indeterminate ? undefined : 0}
      aria-valuemax={indeterminate ? undefined : 100}
      aria-valuenow={indeterminate ? undefined : safeValue}
      data-indeterminate={indeterminate || undefined}
    >
      <div
        className="neu-progress__bar"
        style={indeterminate ? undefined : { width: `${safeValue}%` }}
      />
    </div>
  );
}