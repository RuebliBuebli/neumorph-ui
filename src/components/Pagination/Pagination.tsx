import { IconButton } from "../IconButton";
import { cx } from "../../utils/cx";

export interface PaginationProps {
  /** Zero-based current page. */
  page: number;
  pageCount: number;
  onChange: (page: number) => void;
  /** Number of page buttons shown around the current page. Default 1. */
  siblingCount?: number;
  className?: string;
  "aria-label"?: string;
}

function range(start: number, end: number): number[] {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

const ChevronLeft = (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M10 3 5 8l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronRight = (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function Pagination({
  page,
  pageCount,
  onChange,
  siblingCount = 1,
  className,
  "aria-label": ariaLabel = "Pagination",
}: PaginationProps) {
  if (pageCount <= 0) return null;

  const pageNumbers = range(
    Math.max(0, page - siblingCount),
    Math.min(pageCount - 1, page + siblingCount),
  );

  return (
    <nav className={cx("neu-pagination", className)} aria-label={ariaLabel}>
      <IconButton
        icon={ChevronLeft}
        aria-label="Previous page"
        shape="circle"
        size="sm"
        disabled={page === 0}
        onClick={() => onChange(page - 1)}
      />
      {pageNumbers[0]! > 0 && (
        <>
          <button
            type="button"
            className="neu-pagination__page"
            aria-label={`Page 1`}
            onClick={() => onChange(0)}
          >
            1
          </button>
          {pageNumbers[0]! > 1 && <span className="neu-pagination__ellipsis" aria-hidden="true">…</span>}
        </>
      )}
      {pageNumbers.map((p) => (
        <button
          key={p}
          type="button"
          className={cx("neu-pagination__page", p === page && "neu-pagination__page--current")}
          aria-label={`Page ${p + 1}`}
          aria-current={p === page ? "page" : undefined}
          onClick={() => onChange(p)}
        >
          {p + 1}
        </button>
      ))}
      {pageNumbers[pageNumbers.length - 1]! < pageCount - 1 && (
        <>
          {pageNumbers[pageNumbers.length - 1]! < pageCount - 2 && (
            <span className="neu-pagination__ellipsis" aria-hidden="true">…</span>
          )}
          <button
            type="button"
            className="neu-pagination__page"
            aria-label={`Page ${pageCount}`}
            onClick={() => onChange(pageCount - 1)}
          >
            {pageCount}
          </button>
        </>
      )}
      <IconButton
        icon={ChevronRight}
        aria-label="Next page"
        shape="circle"
        size="sm"
        disabled={page === pageCount - 1}
        onClick={() => onChange(page + 1)}
      />
    </nav>
  );
}