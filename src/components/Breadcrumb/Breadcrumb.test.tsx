import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Breadcrumb, BreadcrumbItem } from "./Breadcrumb";

describe("Breadcrumb", () => {
  it("renders nav with ordered list and items", () => {
    render(
      <Breadcrumb>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/docs">Docs</BreadcrumbItem>
        <BreadcrumbItem>Getting started</BreadcrumbItem>
      </Breadcrumb>,
    );
    const nav = screen.getByRole("navigation", { name: "Breadcrumb" });
    expect(nav.querySelector("ol")).toBeInTheDocument();
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(3);
  });

  it("current item is a link-less page", () => {
    render(
      <Breadcrumb>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem>Here</BreadcrumbItem>
      </Breadcrumb>,
    );
    const current = screen.getByText("Here");
    expect(current).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
  });

  it("links have href and are focusable", () => {
    render(
      <Breadcrumb>
        <BreadcrumbItem href="/x">X</BreadcrumbItem>
        <BreadcrumbItem>Y</BreadcrumbItem>
      </Breadcrumb>,
    );
    expect(screen.getByRole("link", { name: "X" })).toHaveAttribute("href", "/x");
  });
});