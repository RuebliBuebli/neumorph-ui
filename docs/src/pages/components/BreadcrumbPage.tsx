import { Breadcrumb, BreadcrumbItem } from "@rueblibuebli/neumorph-ui";
import { ComponentDemo, PageIntro, PropsTable } from "../../components/ComponentDemo";

const usage = `import { Breadcrumb, BreadcrumbItem } from "@rueblibuebli/neumorph-ui";

<Breadcrumb>
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/library">Library</BreadcrumbItem>
  <BreadcrumbItem>Data</BreadcrumbItem>
</Breadcrumb>`;

export function BreadcrumbPage() {
  return (
    <>
      <h1 className="docs-h1">Breadcrumb</h1>
      <PageIntro>Location trail with nav/ol semantics.</PageIntro>

      <ComponentDemo id="breadcrumb-usage" label="Usage" code={usage}>
        <Breadcrumb>
          <BreadcrumbItem href="#/">Home</BreadcrumbItem>
          <BreadcrumbItem href="#/components">Library</BreadcrumbItem>
          <BreadcrumbItem>Data</BreadcrumbItem>
        </Breadcrumb>
      </ComponentDemo>

      <PropsTable
        rows={[
          {
            name: "children",
            type: "BreadcrumbItem[]",
            description: "The trail; last item is the current page (required)",
          },
          { name: "aria-label", type: "string", def: '"Breadcrumb"', description: "Nav label" },
        ]}
      />

      <h2 className="docs-h2">BreadcrumbItem props</h2>
      <PropsTable
        rows={[
          {
            name: "href",
            type: "string",
            description: "Renders a link; omit for the current (non-clickable) page",
          },
          { name: "children", type: "ReactNode", description: "Label" },
        ]}
      />

      <p className="docs-p">
        The current page gets <code className="docs-inline-code">aria-current="page"</code>{" "}
        automatically.
      </p>
    </>
  );
}
