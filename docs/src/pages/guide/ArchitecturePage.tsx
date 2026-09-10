import { Card } from "@rueblibuebli/neumorph-ui";
import { ComponentDemo } from "../../components/ComponentDemo";

const layout = `src/
├── index.ts              # public API barrel + CSS entry
├── global.css            # token import + minimal base
├── theme/
│   ├── tokens.css        # --neu-* custom properties (light + dark)
│   └── ThemeProvider.tsx # light/dark/auto + useTheme
├── components/
│   └── <Name>/
│       ├── Name.tsx      # component
│       ├── Name.css      # BEM-ish .neu-* classes, tokens only
│       ├── Name.test.tsx # RTL tests
│       └── index.ts      # re-exports
└── utils/cx.ts           # classname helper`;

export function ArchitecturePage() {
  return (
    <>
      <h1 className="docs-h1">Architecture</h1>

      <h2 className="docs-h2">Layout</h2>
      <ComponentDemo id="layout" code={layout}>
        <Card variant="sunken" pad={3}>
          <code className="docs-inline-code">src/</code>
        </Card>
      </ComponentDemo>

      <h2 className="docs-h2">Conventions</h2>
      <ul className="docs-list">
        <li>
          <strong>One folder per component</strong>, re-exported from{" "}
          <code className="docs-inline-code">src/index.ts</code>.
        </li>
        <li>
          <strong>CSS classes</strong> follow{" "}
          <code className="docs-inline-code">
            neu-&lt;block&gt;__&lt;element&gt;--&lt;modifier&gt;
          </code>{" "}
          naming; enforced by Stylelint.
        </li>
        <li>
          <strong>Tokens only</strong> — components never hardcode colors, shadows, radii or
          spacing.
        </li>
        <li>
          <strong>
            Polymorphic <code className="docs-inline-code">as</code>
          </strong>{" "}
          where it makes sense (Button, Card) — native props are passed through, button-specific
          attributes are only applied to native buttons.
        </li>
        <li>
          <strong>Controlled &amp; uncontrolled</strong> variants for stateful components (Toggle,
          Checkbox, Tabs, RadioGroup…).
        </li>
        <li>
          <strong>Accessibility first</strong>: ARIA wiring, focus-visible rings, keyboard
          navigation, <code className="docs-inline-code">prefers-reduced-motion</code> support.
        </li>
        <li>
          <strong>Testing</strong>: Vitest + React Testing Library; user-facing behavior over
          implementation details.
        </li>
      </ul>

      <h2 className="docs-h2">Build &amp; packaging</h2>
      <ul className="docs-list">
        <li>
          Vite library mode: <code className="docs-inline-code">dist/neumorph-ui.es.js</code> +{" "}
          <code className="docs-inline-code">neumorph-ui.cjs.js</code> + bundled{" "}
          <code className="docs-inline-code">neumorph-ui.css</code>,{" "}
          <code className="docs-inline-code">react</code>/
          <code className="docs-inline-code">react-dom</code> externalized.
        </li>
        <li>Types via vite-plugin-dts.</li>
        <li>
          Package <code className="docs-inline-code">@rueblibuebli/neumorph-ui</code>, published to
          GitHub Packages on every GitHub release (
          <code className="docs-inline-code">.github/workflows/release.yml</code>).
        </li>
      </ul>

      <h2 className="docs-h2">CI/CD</h2>
      <div className="docs-props__scroll">
        <table className="docs-props__table">
          <thead>
            <tr>
              <th scope="col">Workflow</th>
              <th scope="col">Trigger</th>
              <th scope="col">What it does</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>ci.yml</code>
              </td>
              <td>PR/push to main</td>
              <td>lint, lint:css, test, build — required check on main</td>
            </tr>
            <tr>
              <td>
                <code>release.yml</code>
              </td>
              <td>GitHub release published</td>
              <td>verifies version ↔ tag, builds, publishes</td>
            </tr>
            <tr>
              <td>
                <code>docs.yml</code>
              </td>
              <td>push to main (docs/src)</td>
              <td>builds the docs app, deploys to GitHub Pages</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="docs-h2">GitHub flow</h2>
      <ol className="docs-list">
        <li>
          Issue per unit of work (labeled <code className="docs-inline-code">feat</code>/
          <code className="docs-inline-code">fix</code>/
          <code className="docs-inline-code">docs</code>/
          <code className="docs-inline-code">chore</code>, assigned to a milestone)
        </li>
        <li>
          Branch <code className="docs-inline-code">feat/&lt;issue&gt;-&lt;slug&gt;</code> from main
        </li>
        <li>PR linked with "Closes #N", checklist in the PR template</li>
        <li>CI must pass; squash merge (linear history on main, enforced by ruleset)</li>
        <li>
          Releases cut from main via{" "}
          <code className="docs-inline-code">gh release create vX.Y.Z</code> → auto-publish
        </li>
      </ol>
    </>
  );
}
