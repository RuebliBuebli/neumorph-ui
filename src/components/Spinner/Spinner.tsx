import { cx } from "../../utils/cx";

export interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  /** Accessible label — announce to screen readers. */
  label?: string;
  className?: string;
}

const sizeClass = {
  sm: "neu-spinner--sm",
  md: "neu-spinner--md",
  lg: "neu-spinner--lg",
} as const;

export function Spinner({ size = "md", label = "Loading", className }: SpinnerProps) {
  return (
    <span className={cx("neu-spinner", sizeClass[size], className)} role="status" aria-label={label}>
      <span className="neu-spinner__ring" aria-hidden="true" />
    </span>
  );
}