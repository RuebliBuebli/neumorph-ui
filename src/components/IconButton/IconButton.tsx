import type { ReactNode } from "react";
import { Button } from "../Button";
import type { ButtonVariant, ButtonSize } from "../Button";
import { cx } from "../../utils/cx";

export interface IconButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  /** Icon content (svg element recommended). */
  icon: ReactNode;
  /** Required for accessibility — describes the action. */
  "aria-label": string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Square (default) or circle shape. */
  shape?: "square" | "circle";
  className?: string;
}

export function IconButton({
  icon,
  variant = "raised",
  size = "md",
  shape = "square",
  className,
  type,
  ...rest
}: IconButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      aria-hidden={undefined}
      className={cx(shape === "circle" && "neu-icon-button--circle", className)}
      {...rest}
      type={type ?? "button"}
    >
      <span className="neu-icon-button__icon" aria-hidden="true">
        {icon}
      </span>
    </Button>
  );
}