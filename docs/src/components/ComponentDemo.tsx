import { useState } from "react";
import type { ReactNode } from "react";
import { Card, IconButton } from "@rueblibuebli/neumorph-ui";

const copyIcon = (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <rect x="5" y="5" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M11 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

const checkIcon = (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M3 8.5l3.5 3.5L13 5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export interface DemoSpec {
  /** Unique id used for the code panel. */
  id: string;
  /** Optional label above the demo (e.g. "Variants"). */
  label?: ReactNode;
  /** The live component(s). */
  children: ReactNode;
  /** The code shown below, as it would be written by a consumer. */
  code: string;
}

function CodeBlock({ id, code }: { id: string; code: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      const area = document.createElement("textarea");
      area.value = code;
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div className="docs-code">
      <div className="docs-code__bar">
        <span className="docs-code__lang">tsx</span>
        <IconButton
          size="sm"
          variant="flat"
          aria-label={copied ? "Copied" : "Copy code"}
          icon={copied ? checkIcon : copyIcon}
          onClick={copy}
        />
      </div>
      <pre className="docs-code__pre">
        <code>{code}</code>
      </pre>
      <span className="docs-visually-hidden" id={id}>
        {code}
      </span>
    </div>
  );
}

/**
 * The heart of a component page: the live component on top, its code below.
 */
export function ComponentDemo({ id, label, children, code }: DemoSpec) {
  return (
    <section className="docs-demo">
      {label != null && <h3 className="docs-demo__label">{label}</h3>}
      <Card variant="sunken" pad={4} className="docs-demo__stage">
        {children}
      </Card>
      <CodeBlock id={`${id}-code`} code={code} />
    </section>
  );
}

export interface PropRow {
  name: string;
  type: string;
  def?: string;
  description: ReactNode;
}

export function PropsTable({ rows }: { rows: PropRow[] }) {
  return (
    <div className="docs-props">
      <h2 className="docs-h2">Props</h2>
      <div className="docs-props__scroll">
        <table className="docs-props__table">
          <thead>
            <tr>
              <th scope="col">Prop</th>
              <th scope="col">Type</th>
              <th scope="col">Default</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name}>
                <td>
                  <code>{row.name}</code>
                </td>
                <td>
                  <code>{row.type}</code>
                </td>
                <td>{row.def ? <code>{row.def}</code> : <span aria-hidden="true">—</span>}</td>
                <td>{row.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function PageIntro({ children }: { children: ReactNode }) {
  return <p className="docs-lead">{children}</p>;
}

export function TokenChip({ children }: { children: ReactNode }) {
  return <code className="docs-inline-code">{children}</code>;
}
