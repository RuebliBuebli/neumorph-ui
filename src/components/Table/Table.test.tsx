import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Table } from "./Table";

const columns = [
  { key: "name", header: "Name" },
  { key: "role", header: "Role" },
  { key: "score", header: "Score", align: "end" as const },
];

const rows = [
  { name: "Ada", role: "Admin", score: 99 },
  { name: "Alan", role: "Editor", score: 87 },
];

describe("Table", () => {
  it("renders headers with scope=col and cells", () => {
    render(<Table columns={columns} rows={rows} caption="Team" />);
    expect(screen.getByRole("table", { name: "Team" })).toBeInTheDocument();
    expect(screen.getByRole("columnheader", { name: "Name" })).toBeInTheDocument();
    expect(screen.getByRole("cell", { name: "Ada" })).toBeInTheDocument();
    expect(screen.getByRole("cell", { name: "99" })).toBeInTheDocument();
  });

  it("applies zebra class", () => {
    render(<Table columns={columns} rows={rows} zebra />);
    expect(screen.getByRole("table")).toHaveClass("neu-table--zebra");
  });

  it("alignment is applied to header and cells", () => {
    render(<Table columns={columns} rows={rows} />);
    expect(screen.getByRole("columnheader", { name: "Score" })).toHaveStyle({
      textAlign: "end",
    });
  });
});