import { useId, useState } from "react";
import type { ReactNode } from "react";
import { cx } from "../../utils/cx";

export interface TabItem {
  key: string;
  label: ReactNode;
  content: ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  items: TabItem[];
  /** Initially active tab key (uncontrolled). */
  defaultActive?: string;
  /** Controlled active tab key. */
  active?: string;
  onActiveChange?: (key: string) => void;
  className?: string;
}

const TAB_KEYS = ["ArrowLeft", "ArrowRight", "Home", "End"];

export function Tabs({
  items,
  defaultActive,
  active,
  onActiveChange,
  className,
}: TabsProps) {
  const [internal, setInternal] = useState(defaultActive ?? items.find((t) => !t.disabled)?.key);
  const isControlled = active !== undefined;
  const current = isControlled ? active : internal;
  const baseId = useId();

  const activate = (key: string) => {
    if (!isControlled) setInternal(key);
    onActiveChange?.(key);
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (!TAB_KEYS.includes(event.key)) return;
    event.preventDefault();
    const enabled = items.filter((t) => !t.disabled);
    if (enabled.length === 0) return;
    const index = enabled.findIndex((t) => t.key === current);
    let next: number;
    switch (event.key) {
      case "ArrowRight":
        next = (index + 1) % enabled.length;
        break;
      case "ArrowLeft":
        next = (index - 1 + enabled.length) % enabled.length;
        break;
      case "Home":
        next = 0;
        break;
      default:
        next = enabled.length - 1;
    }
    const nextTab = enabled[next]!;
    activate(nextTab.key);
    document.getElementById(`${baseId}-tab-${nextTab.key}`)?.focus();
  };

  return (
    <div className={cx("neu-tabs", className)}>
      <div className="neu-tabs__list" role="tablist" onKeyDown={onKeyDown}>
        {items.map((item) => {
          const selected = item.key === current;
          return (
            <button
              key={item.key}
              type="button"
              role="tab"
              id={`${baseId}-tab-${item.key}`}
              className={cx(
                "neu-tabs__tab",
                selected && "neu-tabs__tab--active",
                item.disabled && "neu-tabs__tab--disabled",
              )}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${item.key}`}
              tabIndex={selected ? 0 : -1}
              disabled={item.disabled}
              onClick={() => activate(item.key)}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      {items.map((item) => {
        if (item.key !== current) return null;
        return (
          <div
            key={item.key}
            role="tabpanel"
            id={`${baseId}-panel-${item.key}`}
            className="neu-tabs__panel"
            aria-labelledby={`${baseId}-tab-${item.key}`}
            tabIndex={0}
          >
            {item.content}
          </div>
        );
      })}
    </div>
  );
}