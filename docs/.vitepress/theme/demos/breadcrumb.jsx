import { Breadcrumb, BreadcrumbItem } from "../../../../src/index";

export function BreadcrumbDemo() {
  return (
    <Breadcrumb>
      <BreadcrumbItem href="#">Home</BreadcrumbItem>
      <BreadcrumbItem href="#">Library</BreadcrumbItem>
      <BreadcrumbItem>Data</BreadcrumbItem>
    </Breadcrumb>
  );
}