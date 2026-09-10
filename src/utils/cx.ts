export type ClassValue = string | number | null | undefined | false;

/** Joins truthy class names — tiny local alternative to the `clsx` package. */
export function cx(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}