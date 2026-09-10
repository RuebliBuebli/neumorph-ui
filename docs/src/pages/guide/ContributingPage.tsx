import { ComponentDemo, PageIntro } from "../../components/ComponentDemo";

const dev = `git clone https://github.com/RuebliBuebli/neumorph-ui.git
cd neumorph-ui
npm install
npm run playground   # visual dev sandbox at localhost:5173
npm test             # vitest
npm run lint         # eslint
npm run lint:css     # stylelint
npm run build        # vite lib build + tsc`;

export function ContributingPage() {
  return (
    <>
      <h1 className="docs-h1">Contributing</h1>
      <PageIntro>Thanks for considering a contribution!</PageIntro>

      <h2 className="docs-h2">GitHub flow</h2>
      <p className="docs-p">All work goes through issues and pull requests:</p>
      <ol className="docs-list">
        <li>
          Check the <a href="https://github.com/RuebliBuebli/neumorph-ui/issues">issues</a> — open
          one if it doesn't exist yet (feature or bug).
        </li>
        <li>
          Branch from <code className="docs-inline-code">main</code> named after the issue:{" "}
          <code className="docs-inline-code">feat/12-button</code>,{" "}
          <code className="docs-inline-code">fix/34-slider-drag</code>,{" "}
          <code className="docs-inline-code">docs/…</code>.
        </li>
        <li>Make your change with tests.</li>
        <li>
          Open a PR that links the issue (<code className="docs-inline-code">Closes #N</code>) and
          complete the checklist.
        </li>
        <li>CI must pass; a maintainer squash-merges.</li>
      </ol>

      <h2 className="docs-h2">Local development</h2>
      <ComponentDemo id="dev" code={dev}>
        <code className="docs-inline-code">npm run playground</code>
      </ComponentDemo>

      <h2 className="docs-h2">Adding a component</h2>
      <ol className="docs-list">
        <li>
          Create <code className="docs-inline-code">src/components/&lt;Name&gt;/</code> with{" "}
          <code className="docs-inline-code">&lt;Name&gt;.tsx</code>,{" "}
          <code className="docs-inline-code">&lt;Name&gt;.css</code>,{" "}
          <code className="docs-inline-code">&lt;Name&gt;.test.tsx</code>,{" "}
          <code className="docs-inline-code">index.ts</code> — copy the pattern from an existing
          component.
        </li>
        <li>
          Re-export from <code className="docs-inline-code">src/index.ts</code> and import the CSS
          there.
        </li>
        <li>Add tests (rendering, variants, a11y, keyboard).</li>
        <li>
          Add a docs page under <code className="docs-inline-code">docs/src/pages/components/</code>{" "}
          and register it in <code className="docs-inline-code">docs/src/nav.ts</code> +
          <code className="docs-inline-code">pages.ts</code>.
        </li>
        <li>
          Update <code className="docs-inline-code">CHANGELOG.md</code> (Unreleased section).
        </li>
      </ol>

      <h2 className="docs-h2">Rules of thumb</h2>
      <ul className="docs-list">
        <li>
          <strong>Tokens only</strong> in CSS — no hardcoded colors/shadows/radii.
        </li>
        <li>
          Every interactive element: keyboard operable +{" "}
          <code className="docs-inline-code">:focus-visible</code> style.
        </li>
        <li>
          Respect <code className="docs-inline-code">prefers-reduced-motion</code> for all
          animations.
        </li>
        <li>
          Test in <strong>both</strong> light and dark themes.
        </li>
        <li>
          Conventional commits: <code className="docs-inline-code">feat:</code>,{" "}
          <code className="docs-inline-code">fix:</code>,{" "}
          <code className="docs-inline-code">docs:</code>,{" "}
          <code className="docs-inline-code">chore:</code>,{" "}
          <code className="docs-inline-code">feat(component):</code>…
        </li>
      </ul>
    </>
  );
}
