import { useEffect, useState } from "react";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cx } from "@rueblibuebli/neumorph-ui";

/** Current path from the location hash, normalized to start with "/". */
export function getHashPath(): string {
  const raw = window.location.hash.slice(1);
  return raw.startsWith("/") ? raw : `/${raw}`;
}

/** Subscribes to hash changes and returns the current route path. */
export function useHashRoute(): string {
  const [path, setPath] = useState<string>(getHashPath);

  useEffect(() => {
    const onChange = () => setPath(getHashPath());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return path;
}

export function navigate(to: string): void {
  window.location.hash = to;
}

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: ReactNode;
}

/** Hash-based link ("#/components/button"). */
export function Link({ to, children, ...rest }: LinkProps) {
  return (
    <a href={`#${to}`} {...rest}>
      {children}
    </a>
  );
}

/** Class helper re-exported for active states. */
export { cx };
