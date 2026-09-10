import { Children, isValidElement } from "react";
import type { ReactElement } from "react";
import { cx } from "../../utils/cx";

export interface BreadcrumbItemProps {
  href?: string;
  children?: React.ReactNode;
  /** Rendered when the item is a plain custom element. */
  as?: "a" | "span";
}

export function BreadcrumbItem({ href, children, as }: BreadcrumbItemProps) {
  if (href != null) {
    return (
      <a className="neu-breadcrumb__link" href={href}>
        {children}
      </a>
    );
  }
  const Component = as ?? "span";
  return (
    <Component className={cx(as === undefined && "neu-breadcrumb__current")} aria-current={as === undefined ? "page" : undefined}>
      {children}
    </Component>
  );
}

export interface BreadcrumbProps {
  /** BreadcrumbItem children; the last one is the current page. */
  children: React.ReactNode;
  /** Accessible label for the nav. */
  "aria-label"?: string;
  className?: string;
}

export function Breadcrumb({
  children,
  "aria-label": ariaLabel = "Breadcrumb",
  className,
}: BreadcrumbProps) {
  const items = Children.toArray(children).filter(isValidElement) as ReactElement[];
  const last = items.length - 1;

  return (
    <nav className={cx("neu-breadcrumb", className)} aria-label={ariaLabel}>
      <ol className="neu-breadcrumb__list">
        {items.map((item, index) => (
          <li key={index} className="neu-breadcrumb__item" aria-current={undefined}>
            {item}
            {index !== last && (
              <svg
                className="neu-breadcrumb__separator"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 3l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}