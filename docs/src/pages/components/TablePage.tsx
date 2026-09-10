import { Table } from "@rueblibuebli/neumorph-ui";
import { ComponentDemo, PageIntro, PropsTable } from "../../components/ComponentDemo";

const usage = `import { Table } from "@rueblibuebli/neumorph-ui";

<Table
  caption="Team"
  zebra
  columns={[
    { key: "name", header: "Name" },
    { key: "role", header: "Role" },
    { key: "score", header: "Score", align: "end" },
  ]}
  rows={[
    { name: "Ada", role: "Admin", score: 99 },
    { name: "Alan", role: "Editor", score: 87 },
  ]}
/>`;

export function TablePage() {
  return (
    <>
      <h1 className="docs-h1">Table</h1>
      <PageIntro>Declarative table with soft sunken surface.</PageIntro>

      <ComponentDemo id="table-usage" label="Usage" code={usage}>
        <div style={{ flex: 1, minWidth: 320 }}>
          <Table
            caption="Team"
            zebra
            columns={[
              { key: "name", header: "Name" },
              { key: "role", header: "Role" },
              { key: "score", header: "Score", align: "end" },
            ]}
            rows={[
              { name: "Ada Lovelace", role: "Admin", score: 99 },
              { name: "Alan Turing", role: "Editor", score: 87 },
              { name: "Grace Hopper", role: "Viewer", score: 73 },
            ]}
          />
        </div>
      </ComponentDemo>

      <PropsTable
        rows={[
          {
            name: "columns",
            type: "{ key, header, align? }[]",
            description: "Column definitions (required)",
          },
          {
            name: "rows",
            type: "Record<string, ReactNode>[]",
            description: "Row data keyed by column key (required)",
          },
          {
            name: "stickyHeader",
            type: "boolean",
            def: "false",
            description: "Sticky header while scrolling",
          },
          { name: "zebra", type: "boolean", def: "false", description: "Subtle alternating rows" },
          { name: "caption", type: "string", description: "Accessible name (visually hidden)" },
        ]}
      />
    </>
  );
}
