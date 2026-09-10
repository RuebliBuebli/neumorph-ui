import { Skeleton } from "@rueblibuebli/neumorph-ui";
import { ComponentDemo, PageIntro, PropsTable } from "../../components/ComponentDemo";

const usage = `import { Skeleton } from "@rueblibuebli/neumorph-ui";

<Skeleton lines={3} />              {/* text block */}
<Skeleton shape="rect" height={180} /> {/* image/card */}
<Skeleton shape="circle" />           {/* avatar */}`;

export function SkeletonPage() {
  return (
    <>
      <h1 className="docs-h1">Skeleton</h1>
      <PageIntro>Loading placeholder blocks with a soft pulse.</PageIntro>

      <ComponentDemo id="skeleton-usage" label="Usage" code={usage}>
        <Skeleton shape="circle" />
        <div style={{ flex: 1, minWidth: 220 }}>
          <Skeleton lines={3} />
        </div>
      </ComponentDemo>

      <ComponentDemo
        id="skeleton-card"
        label="Card placeholder"
        code={`<Skeleton shape="rect" height={180} width={260} />`}
      >
        <Skeleton shape="rect" height={180} width={260} />
      </ComponentDemo>

      <PropsTable
        rows={[
          {
            name: "shape",
            type: '"text" | "rect" | "circle"',
            def: '"text"',
            description: "Block shape",
          },
          { name: "lines", type: "number", description: "Multiple text lines (last one shorter)" },
          { name: "width / height", type: "number | string", description: "Explicit dimensions" },
        ]}
      />

      <p className="docs-p">
        Content is <code className="docs-inline-code">aria-hidden</code> — pair skeletons with a{" "}
        <code className="docs-inline-code">Spinner</code> or live-region text for screen reader
        users.
      </p>
    </>
  );
}
