import type { ElementType, ReactNode } from "react";
import { cx } from "../../utils/cx";

export type ButtonVariant = "raised" | "sunken" | "flat" | "accent";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonOwnProps<E extends ElementType = "button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Shows a spinner and disables interaction. */
  loading?: boolean;
  /** Icon rendered before the label. */
  leadingIcon?: ReactNode;
  /** Icon rendered after the label. */
  trailingIcon?: ReactNode;
  as?: E;
  children?: ReactNode;
}

export type ButtonProps<E extends ElementType = "button"> = ButtonOwnProps<E> &
  Omit<React.ComponentPropsWithoutRef<E>, keyof ButtonOwnProps<E>>;

const sizeClass: Record<ButtonSize, string> = {
  sm: "neu-button--sm",
  md: "neu-button--md",
  lg: "neu-button--lg",
};

const variantClass: Record<ButtonVariant, string> = {
  raised: "neu-button--raised",
  sunken: "neu-button--sunken",
  flat: "neu-button--flat",
  accent: "neu-button--accent",
};

export function Button<E extends ElementType = "button">({
  variant = "raised",
  size = "md",
  loading = false,
  leadingIcon,
  trailingIcon,
  as,
  className,
  children,
  disabled,
  type,
  ...rest
}: ButtonProps<E>) {
  const Component = (as ?? "button") as ElementType;
  const isButton = Component === "button";
  const isDisabled = disabled ?? loading ?? undefined;

  return (
    <Component
      className={cx("neu-button", variantClass[variant], sizeClass[size], className)}
      disabled={isButton ? isDisabled : undefined}
      aria-disabled={!isButton ? isDisabled : undefined}
      aria-busy={loading || undefined}
      type={isButton ? (type ?? "button") : undefined}
      data-loading={loading || undefined}
      {...rest}
    >
      {loading ? <span className="neu-button__spinner" aria-hidden="true" /> : leadingIcon}
      {children != null && <span className="neu-button__label">{children}</span>}
      {trailingIcon}
    </Component>
  );
}