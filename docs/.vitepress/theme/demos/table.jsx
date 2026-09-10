import { Table } from "../../../../src/index";

export function TableDemo() {
  return (
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
  );
}