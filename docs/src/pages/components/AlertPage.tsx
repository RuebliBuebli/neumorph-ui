import { Alert } from "@rueblibuebli/neumorph-ui";
import { ComponentDemo, PageIntro, PropsTable } from "../../components/ComponentDemo";

const usage = `import { Alert } from "@rueblibuebli/neumorph-ui";

<Alert tone="warning" title="Heads up">
  Your trial ends in 3 days.
</Alert>`;

export function AlertPage() {
  return (
    <>
      <h1 className="docs-h1">Alert</h1>
      <PageIntro>Inline message with tone-colored accent bar.</PageIntro>

      <ComponentDemo id="alert-usage" label="Usage" code={usage}>
        <div className="docs-stack" style={{ minWidth: 280, flex: 1 }}>
          <Alert tone="info" title="Heads up">
            Something informative.
          </Alert>
          <Alert tone="success" title="Saved">
            Your changes are stored.
          </Alert>
          <Alert tone="error" title="Failed">
            The upload did not complete.
          </Alert>
        </div>
      </ComponentDemo>

      <PropsTable
        rows={[
          {
            name: "tone",
            type: '"info" | "success" | "warning" | "error"',
            def: '"info"',
            description: "Semantic tone",
          },
          { name: "title", type: "ReactNode", description: "Bold heading" },
          {
            name: "onDismiss",
            type: "() => void",
            description: "Enables a dismiss button; alert removes itself after the callback",
          },
        ]}
      />

      <p className="docs-p">
        Roles: <code className="docs-inline-code">error</code> uses{" "}
        <code className="docs-inline-code">role="alert"</code> (assertive), other tones use{" "}
        <code className="docs-inline-code">role="status"</code> (polite).
      </p>
    </>
  );
}
