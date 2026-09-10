import { ComponentDemo, PageIntro } from "../../components/ComponentDemo";

const hook = `import { ThemeProvider, useTheme } from "@rueblibuebli/neumorph-ui";

function ThemeSwitcher() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  return (
    <button onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
      Current: {theme} ({resolvedTheme})
    </button>
  );
}`;

const override = `[data-theme="light"] {
  --neu-bg: #eceef3;
  --neu-accent: #e05880;
  --neu-radius-md: 8px;
}`;

const custom = `[data-theme="sepia"] {
  --neu-bg: #ece1cf;
  --neu-surface: #ece1cf;
  --neu-surface-raised: #f1e7d6;
  --neu-surface-sunken: #e0d4bf;
  --neu-shadow-out: -8px -8px 16px rgb(255 250 240 / 75%), 8px 8px 16px rgb(160 145 120 / 45%);
  --neu-shadow-in: inset -6px -6px 12px rgb(255 250 240 / 75%), inset 6px 6px 12px rgb(160 145 120 / 45%);
  --neu-text-primary: #4a3f30;
  --neu-accent: #b0713a;
  --neu-on-accent: #fff8ec;
  color-scheme: light;
}`;

const island = `<div data-theme="sepia">
  <Card>Custom themed island</Card>
</div>`;

const tokens: Array<[string, string]> = [
  ["--neu-bg", "Page background"],
  ["--neu-surface, --neu-surface-raised, --neu-surface-sunken", "Component surfaces"],
  ["--neu-shadow-out, --neu-shadow-out-sm", "Extruded (raised) shadow pair"],
  ["--neu-shadow-in, --neu-shadow-in-sm", "Pressed (inset) shadow pair"],
  ["--neu-text-primary, --neu-text-secondary, --neu-text-muted", "Text tiers"],
  ["--neu-accent, --neu-accent-hover, --neu-on-accent, --neu-accent-soft", "Accent colors"],
  ["--neu-success, --neu-warning, --neu-error, --neu-info", "Feedback hues"],
  ["--neu-radius-sm/md/lg/pill", "Corner radii"],
  ["--neu-space-1..6", "Spacing scale (4–32px)"],
  ["--neu-focus-ring", "Focus ring shadow"],
  ["--neu-transition", "Motion default (160ms ease)"],
];

export function ThemingPage() {
  return (
    <>
      <h1 className="docs-h1">Theming</h1>
      <PageIntro>
        All visuals are driven by CSS custom properties ("--neu-*"). Components never hardcode
        colors or shadows.
      </PageIntro>

      <h2 className="docs-h2">Light and dark</h2>
      <p className="docs-p">
        ThemeProvider sets a <code className="docs-inline-code">data-theme</code> attribute (
        <code className="docs-inline-code">light</code> /{" "}
        <code className="docs-inline-code">dark</code>). In{" "}
        <code className="docs-inline-code">auto</code> mode it follows{" "}
        <code className="docs-inline-code">prefers-color-scheme</code> and live-updates when the OS
        changes.
      </p>
      <ComponentDemo id="hook" code={hook}>
        <code className="docs-inline-code">useTheme()</code>
      </ComponentDemo>

      <h2 className="docs-h2">Token reference</h2>
      <div className="docs-props__scroll">
        <table className="docs-props__table">
          <thead>
            <tr>
              <th scope="col">Token</th>
              <th scope="col">Purpose</th>
            </tr>
          </thead>
          <tbody>
            {tokens.map(([token, purpose]) => (
              <tr key={token}>
                <td>
                  <code>{token}</code>
                </td>
                <td>{purpose}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="docs-h2">Custom themes</h2>
      <PageIntro>Override tokens on any scope — a theme, a page, or a single card:</PageIntro>
      <ComponentDemo id="override" code={override}>
        <code className="docs-inline-code">[data-theme]</code>
      </ComponentDemo>

      <h3 className="docs-h3">Or define a fully custom theme</h3>
      <ComponentDemo id="custom" code={custom}>
        <code className="docs-inline-code">data-theme="sepia"</code>
      </ComponentDemo>
      <ComponentDemo id="island" code={island}>
        <code className="docs-inline-code">Custom themed island</code>
      </ComponentDemo>

      <h2 className="docs-h2">Neumorphism notes</h2>
      <ul className="docs-list">
        <li>
          Neumorphism lives off <strong>low contrast between surface and shadows</strong> — that is
          the aesthetic, but it costs affordance. This library compensates with strong{" "}
          <code className="docs-inline-code">--neu-focus-ring</code> focus styles and clear{" "}
          <code className="docs-inline-code">sunken</code> states for interactive controls.
        </li>
        <li>
          Dark mode inverts the shadow hues (dark shadows deeper, highlights bluish) and brightens
          the accent for contrast on dark surfaces.
        </li>
      </ul>
    </>
  );
}
