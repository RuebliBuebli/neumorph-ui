import type { ReactNode } from "react";
import { cx } from "../../utils/cx";

export interface TableProps {
  /** Column definitions. */
  columns: Array<{
    key: string;
    header: ReactNode;
    align?: "start" | "end" | "center";
  }>;
  /** Rows as records keyed by column key. */
  rows: Array<Record<string, ReactNode>>;
  /** Sticky table header on scroll. */
  stickyHeader?: boolean;
  /** Subtle zebra striping. */
  zebra?: boolean;
  /** Accessible name. */
  caption?: string;
  className?: string;
}

export function Table({
  columns,
  rows,
  stickyHeader = false,
  zebra = false,
  caption,
  className,
}: TableProps) {
  return (
    <div className={cx("neu-table-wrapper", className)}>
      <table className={cx("neu-table", zebra && "neu-table--zebra")}>
        {caption != null && <caption className="neu-visually-hidden">{caption}</caption>}
        <thead className={cx("neu-table__head", stickyHeader && "neu-table__head--sticky")}>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className="neu-table__th"
                style={column.align ? { textAlign: column.align } : undefined}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="neu-table__body">
          {rows.map((row, index) => (
            <tr key={index} className="neu-table__row">
              {columns.map((column) => (
                <td
                  key={column.key}
                  className="neu-table__td"
                  style={column.align ? { textAlign: column.align } : undefined}
                >
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}