import { Spinner } from "@rueblibuebli/neumorph-ui";
import { ComponentDemo, PageIntro, PropsTable } from "../../components/ComponentDemo";

const usage = `import { Spinner } from "@rueblibuebli/neumorph-ui";

<Spinner size="lg" label="Loading results" />`;

export function SpinnerPage() {
  return (
    <>
      <h1 className="docs-h1">Spinner</h1>
      <PageIntro>Loading indicator with role="status".</PageIntro>

      <ComponentDemo id="spinner-usage" label="Usage" code={usage}>
        <Spinner size="sm" />
        <Spinner />
        <Spinner size="lg" />
      </ComponentDemo>

      <PropsTable
        rows={[
          { name: "size", type: '"sm" | "md" | "lg"', def: '"md"', description: "Ring size" },
          {
            name: "label",
            type: "string",
            def: '"Loading"',
            description: "Announced to screen readers",
          },
        ]}
      />

      <p className="docs-p">
        Animation slows down under <code className="docs-inline-code">prefers-reduced-motion</code>{" "}
        rather than being removed (a frozen spinner would read as broken).
      </p>
    </>
  );
}
