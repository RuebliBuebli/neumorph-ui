import { useState } from "react";
import { Pagination } from "../../../../src/index";

export function PaginationDemo() {
  const [page, setPage] = useState(0);
  return <Pagination page={page} pageCount={10} onChange={setPage} />;
}