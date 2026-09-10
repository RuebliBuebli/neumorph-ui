import { useId, useState } from "react";
import type { ReactNode } from "react";
import { cx } from "../../utils/cx";

export interface AccordionItem {
  key: string;
  title: ReactNode;
  content: ReactNode;
  disabled?: boolean;
}

export interface AccordionProps {
  items: AccordionItem[];
  /** Allow multiple open items. Default false. */
  multiple?: boolean;
  /** Initially open item keys (uncontrolled). */
  defaultOpen?: string[];
  className?: string;
}

export function Accordion({ items, multiple = false, defaultOpen = [], className }: AccordionProps) {
  const [open, setOpen] = useState<string[]>(defaultOpen);
  const baseId = useId();

  const toggle = (key: string) => {
    setOpen((prev) => {
      const isOpen = prev.includes(key);
      if (multiple) {
        return isOpen ? prev.filter((k) => k !== key) : [...prev, key];
      }
      return isOpen ? [] : [key];
    });
  };

  return (
    <div className={cx("neu-accordion", className)}>
      {items.map((item) => {
        const isOpen = open.includes(item.key);
        return (
          <div
            key={item.key}
            className={cx(
              "neu-accordion__item",
              isOpen && "neu-accordion__item--open",
              item.disabled && "neu-accordion__item--disabled",
            )}
          >
            <h3 className="neu-accordion__heading">
              <button
                type="button"
                className="neu-accordion__trigger"
                id={`${baseId}-trigger-${item.key}`}
                aria-controls={`${baseId}-region-${item.key}`}
                aria-expanded={isOpen}
                disabled={item.disabled}
                onClick={() => toggle(item.key)}
              >
                <span className="neu-accordion__title">{item.title}</span>
                <svg
                  className="neu-accordion__chevron"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 6l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </h3>
            {isOpen && (
              <div
                role="region"
                id={`${baseId}-region-${item.key}`}
                className="neu-accordion__region"
                aria-labelledby={`${baseId}-trigger-${item.key}`}
              >
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}