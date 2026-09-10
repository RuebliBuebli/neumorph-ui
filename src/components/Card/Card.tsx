import type { ElementType, ReactNode } from "react";
import { cx } from "../../utils/cx";

export type CardVariant = "raised" | "sunken";

export interface CardOwnProps<E extends ElementType = "div"> {
  variant?: CardVariant;
  /** Padding step: 0 = none, 1..6 map to --neu-space tokens. Default 4. */
  pad?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  header?: ReactNode;
  footer?: ReactNode;
  as?: E;
  children?: ReactNode;
}

export type CardProps<E extends ElementType = "div"> = CardOwnProps<E> &
  Omit<React.ComponentPropsWithoutRef<E>, keyof CardOwnProps<E>>;

const padClass = ["neu-card--pad0", "neu-card--pad1", "neu-card--pad2", "neu-card--pad3", "neu-card--pad4", "neu-card--pad5", "neu-card--pad6"] as const;

export function Card<E extends ElementType = "div">({
  variant = "raised",
  pad = 4,
  header,
  footer,
  as,
  className,
  children,
  ...rest
}: CardProps<E>) {
  const Component = (as ?? "div") as ElementType;

  return (
    <Component
      className={cx(
        "neu-card",
        variant === "sunken" ? "neu-card--sunken" : "neu-card--raised",
        padClass[pad],
        className,
      )}
      {...rest}
    >
      {header != null && <div className="neu-card__header">{header}</div>}
      <div className="neu-card__body">{children}</div>
      {footer != null && <div className="neu-card__footer">{footer}</div>}
    </Component>
  );
}