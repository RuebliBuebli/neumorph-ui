import { useState } from "react";
import type { ReactNode } from "react";
import { cx } from "../../utils/cx";

export interface AlertProps {
  tone?: "info" | "success" | "warning" | "error";
  title?: ReactNode;
  children?: ReactNode;
  /** Show a dismiss button; onDismiss required to enable it. */
  onDismiss?: () => void;
  className?: string;
}

const toneClass = {
  info: "neu-alert--info",
  success: "neu-alert--success",
  warning: "neu-alert--warning",
  error: "neu-alert--error",
} as const;

export function Alert({ tone = "info", title, children, onDismiss, className }: AlertProps) {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return (
    <div className={cx("neu-alert", toneClass[tone], className)} role={tone === "error" ? "alert" : "status"}>
      <div className="neu-alert__content">
        {title != null && <p className="neu-alert__title">{title}</p>}
        {children != null && <div className="neu-alert__body">{children}</div>}
      </div>
      {onDismiss != null && (
        <button
          type="button"
          className="neu-alert__dismiss"
          aria-label="Dismiss"
          onClick={() => {
            onDismiss();
            setDismissed(true);
          }}
        >
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M4 4l8 8M12 4l-8 8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
}