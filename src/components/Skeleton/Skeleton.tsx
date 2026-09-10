import type { CSSProperties } from "react";
import { cx } from "../../utils/cx";

export interface SkeletonProps {
  /** Shape of the skeleton block. */
  shape?: "text" | "rect" | "circle";
  width?: number | string;
  height?: number | string;
  /** Multiple text lines — renders a group with rounded last line. */
  lines?: number;
  className?: string;
}

export function Skeleton({
  shape = "text",
  width,
  height,
  lines,
  className,
}: SkeletonProps) {
  if (shape === "text" && lines && lines > 1) {
    return (
      <span className={cx("neu-skeleton-group", className)} aria-hidden="true">
        {Array.from({ length: lines }, (_, i) => (
          <span
            key={i}
            className={cx(
              "neu-skeleton",
              "neu-skeleton--text",
              i === lines - 1 && "neu-skeleton--text-last",
            )}
          />
        ))}
      </span>
    );
  }

  const style: CSSProperties = { width, height };

  return (
    <span
      aria-hidden="true"
      className={cx(
        "neu-skeleton",
        shape === "circle" ? "neu-skeleton--circle" : `neu-skeleton--${shape}`,
        shape === "text" && "neu-skeleton--text-last",
        className,
      )}
      style={style}
    />
  );
}