import { Button, Card, Badge } from "@rueblibuebli/neumorph-ui";
import { Link } from "../../router";
import { ComponentDemo, PageIntro } from "../../components/ComponentDemo";

const quickStart = `import { ThemeProvider, Button } from "@rueblibuebli/neumorph-ui";
import "@rueblibuebli/neumorph-ui/styles.css";

export function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <Button variant="accent">Hello soft world</Button>
    </ThemeProvider>
  );
}`;

const install = `npm install @rueblibuebli/neumorph-ui`;

export function HomePage() {
  return (
    <>
      <section className="docs-hero">
        <h1 className="docs-hero__title">neumorph-ui</h1>
        <p className="docs-hero__tagline">
          A neumorphic (soft UI) React component and style library — light &amp; dark themes, 23
          accessible components, zero styling lock-in.
        </p>
        <div className="docs-cta">
          <Link to="/getting-started">
            <Button variant="accent">Get started</Button>
          </Link>
          <Link to="/components/button">
            <Button variant="raised">Browse components</Button>
          </Link>
        </div>
      </section>

      <div className="docs-feature-grid">
        <Card className="docs-feature-card" header="Soft design system">
          <p>
            Light &amp; dark themes from design tokens: dual-layer extruded/pressed shadows, soft
            surfaces, rounded geometry.
          </p>
        </Card>
        <Card className="docs-feature-card" header="23 accessible components">
          <p>Proper ARIA wiring, focus management, keyboard support.</p>
        </Card>
        <Card className="docs-feature-card" header="Zero styling lock-in">
          <p>
            Components consume <code>--neu-*</code> tokens only; override any token to re-theme
            everything.
          </p>
        </Card>
      </div>

      <h2 className="docs-h2">Quick start</h2>
      <PageIntro>Install the package and wrap your app in a ThemeProvider.</PageIntro>
      <ComponentDemo id="install" label="Install" code={install}>
        <Badge tone="accent" pill>
          npm
        </Badge>
        <span className="docs-inline-code">@rueblibuebli/neumorph-ui</span>
      </ComponentDemo>
      <ComponentDemo id="quick-start" label="Usage" code={quickStart}>
        <Button variant="accent">Hello soft world</Button>
      </ComponentDemo>

      <h2 className="docs-h2">Next steps</h2>
      <ul className="docs-list">
        <li>
          <Link to="/getting-started">Getting Started</Link> — GitHub Packages registry setup and
          ThemeProvider configuration.
        </li>
        <li>
          <Link to="/theming">Theming</Link> — light/dark/auto modes and custom token overrides.
        </li>
        <li>
          <Link to="/components/button">Components</Link> — every component with a live preview and
          its code.
        </li>
      </ul>
    </>
  );
}
