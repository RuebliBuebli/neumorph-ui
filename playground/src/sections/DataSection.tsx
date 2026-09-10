import { useState } from "react";
import { Card, Table, Pagination, Breadcrumb, BreadcrumbItem } from "@rueblibuebli/neumorph-ui";

export function DataSection() {
  const [page, setPage] = useState(0);

  return (
    <Card header="Data display" className="app__card">
      <Breadcrumb>
        <BreadcrumbItem href="#">Home</BreadcrumbItem>
        <BreadcrumbItem href="#">Library</BreadcrumbItem>
        <BreadcrumbItem>Data</BreadcrumbItem>
      </Breadcrumb>
      <Table
        caption="Users"
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
      <Pagination page={page} pageCount={10} onChange={setPage} />
    </Card>
  );
}