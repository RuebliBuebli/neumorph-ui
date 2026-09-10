import { useState } from "react";
import { Pagination } from "@rueblibuebli/neumorph-ui";
import { ComponentDemo, PageIntro, PropsTable } from "../../components/ComponentDemo";

const usage = `import { useState } from "react";
import { Pagination } from "@rueblibuebli/neumorph-ui";

const [page, setPage] = useState(0);
<Pagination page={page} pageCount={12} onChange={setPage} />`;

export function PaginationPage() {
  const [page, setPage] = useState(0);

  return (
    <>
      <h1 className="docs-h1">Pagination</h1>
      <PageIntro>Page navigation with ellipsis windows and circular prev/next buttons.</PageIntro>

      <ComponentDemo id="pagination-usage" label="Usage" code={usage}>
        <Pagination page={page} pageCount={10} onChange={setPage} />
      </ComponentDemo>

      <PropsTable
        rows={[
          { name: "page", type: "number", description: "Zero-based current page (required)" },
          { name: "pageCount", type: "number", description: "Total pages (required)" },
          {
            name: "onChange",
            type: "(page: number) => void",
            description: "Navigation callback (required)",
          },
          {
            name: "siblingCount",
            type: "number",
            def: "1",
            description: "Page buttons around the current page",
          },
        ]}
      />

      <p className="docs-p">
        The current page carries <code className="docs-inline-code">aria-current="page"</code>;
        prev/next are disabled at the boundaries.
      </p>
    </>
  );
}
