import { useEffect, useId, useRef, useState } from "react";
import type { ReactNode } from "react";
import { cx } from "../../utils/cx";

export interface TooltipProps {
  /** The element that triggers the tooltip — pass a renderable node. */
  children: ReactNode;
  /** Tooltip content. */
  content: ReactNode;
  placement?: "top" | "bottom" | "left" | "right";
  /** Delay before showing, ms. Default 300. */
  delay?: number;
  className?: string;
}

const placementClass = {
  top: "neu-tooltip--top",
  bottom: "neu-tooltip--bottom",
  left: "neu-tooltip--left",
  right: "neu-tooltip--right",
} as const;

export function Tooltip({
  children,
  content,
  placement = "top",
  delay = 300,
  className,
}: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const tooltipId = useId();

  const show = () => {
    timer.current = setTimeout(() => setVisible(true), delay);
  };

  const hide = () => {
    clearTimeout(timer.current);
    setVisible(false);
  };

  useEffect(() => () => clearTimeout(timer.current), []);

  return (
    <span className={cx("neu-tooltip-wrapper", className)}>
      <span
        className="neu-tooltip__trigger"
        aria-describedby={visible ? tooltipId : undefined}
        onMouseEnter={show}
        onMouseLeave={hide}
        onFocus={show}
        onBlur={hide}
      >
        {children}
      </span>
      {visible && (
        <span
          role="tooltip"
          id={tooltipId}
          className={cx("neu-tooltip", placementClass[placement])}
        >
          {content}
        </span>
      )}
    </span>
  );
}