import { useState } from "react";
import { cx } from "../../utils/cx";

export interface AvatarProps {
  /** Image source. Falls back to initials when missing or on error. */
  src?: string;
  /** Alt text — also used as the avatar's accessible name. */
  alt?: string;
  /** Space-separated name used to derive initials. */
  name?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "raised" | "sunken";
  className?: string;
}

const sizeClass = {
  sm: "neu-avatar--sm",
  md: "neu-avatar--md",
  lg: "neu-avatar--lg",
  xl: "neu-avatar--xl",
} as const;

function initialsOf(name: string): string {
  const parts = name.trim().split(/\s+/).slice(0, 2);
  return parts.map((p) => p.charAt(0).toUpperCase()).join("") || "?";
}

export function Avatar({
  src,
  alt,
  name,
  size = "md",
  variant = "raised",
  className,
}: AvatarProps) {
  const [failed, setFailed] = useState(false);
  const showImage = src != null && !failed;
  const label = name ?? alt ?? "Avatar";

  return (
    <span
      className={cx(
        "neu-avatar",
        sizeClass[size],
        variant === "sunken" ? "neu-avatar--sunken" : "neu-avatar--raised",
        className,
      )}
      role="img"
      aria-label={label}
    >
      {showImage ? (
        <img
          className="neu-avatar__image"
          src={src}
          alt=""
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="neu-avatar__initials" aria-hidden="true">
          {name ? initialsOf(name) : "?"}
        </span>
      )}
    </span>
  );
}