import type { ReactNode } from "react";
import { cx } from "../../utils/cx";

export interface BadgeProps {
  children?: ReactNode;
  tone?: "accent" | "success" | "warning" | "error" | "info" | "neutral";
  /** Pill (rounded) vs rounded-rect shape. */
  pill?: boolean;
  className?: string;
}

const toneClass = {
  accent: "neu-badge--accent",
  success: "neu-badge--success",
  warning: "neu-badge--warning",
  error: "neu-badge--error",
  info: "neu-badge--info",
  neutral: "neu-badge--neutral",
} as const;

export function Badge({ children, tone = "neutral", pill = false, className }: BadgeProps) {
  return (
    <span
      className={cx(
        "neu-badge",
        toneClass[tone],
        pill && "neu-badge--pill",
        className,
      )}
    >
      {children}
    </span>
  );
}