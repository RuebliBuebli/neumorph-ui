import { ComponentDemo, PageIntro } from "../../components/ComponentDemo";

const npmrc = `@rueblibuebli:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=\${GITHUB_TOKEN}`;

const install = `export GITHUB_TOKEN=ghp_xxx   # your token
npm install @rueblibuebli/neumorph-ui`;

const setup = `import "@rueblibuebli/neumorph-ui/styles.css";`;

const provider = `import { ThemeProvider } from "@rueblibuebli/neumorph-ui";

<ThemeProvider defaultTheme="auto" target="html">
  <App />
</ThemeProvider>`;

export function GettingStartedPage() {
  return (
    <>
      <h1 className="docs-h1">Getting Started</h1>

      <h2 className="docs-h2">Installation</h2>
      <PageIntro>
        The package is published to <strong>GitHub Packages</strong>, so npm needs to know where to
        find it and how to authenticate.
      </PageIntro>

      <ol className="docs-list">
        <li>
          Create a <a href="https://github.com/settings/tokens">personal access token</a> with{" "}
          <code className="docs-inline-code">read:packages</code> scope.
        </li>
        <li>
          Add to your project <code className="docs-inline-code">.npmrc</code> (or{" "}
          <code className="docs-inline-code">~/.npmrc</code> for global config):
        </li>
      </ol>

      <ComponentDemo id="npmrc" code={npmrc}>
        <code className="docs-inline-code">.npmrc</code>
      </ComponentDemo>

      <h3 className="docs-h3">Install</h3>
      <ComponentDemo id="install" code={install}>
        <code className="docs-inline-code">npm install</code>
      </ComponentDemo>

      <blockquote className="docs-p">
        GitHub Packages requires authentication even for public packages.
      </blockquote>

      <h2 className="docs-h2">Setup</h2>
      <PageIntro>Import the global stylesheet once (tokens + all component styles):</PageIntro>
      <ComponentDemo id="setup" code={setup}>
        <code className="docs-inline-code">styles.css</code>
      </ComponentDemo>

      <PageIntro>Wrap your app in a ThemeProvider:</PageIntro>
      <ComponentDemo id="provider" code={provider}>
        <code className="docs-inline-code">ThemeProvider</code>
      </ComponentDemo>

      <ul className="docs-list">
        <li>
          <code className="docs-inline-code">defaultTheme</code>:{" "}
          <code className="docs-inline-code">"light"</code> |{" "}
          <code className="docs-inline-code">"dark"</code> |{" "}
          <code className="docs-inline-code">"auto"</code> (follows the OS setting)
        </li>
        <li>
          <code className="docs-inline-code">target</code>: where{" "}
          <code className="docs-inline-code">data-theme</code> is applied —{" "}
          <code className="docs-inline-code">"html"</code> (recommended, styles the whole page) or{" "}
          <code className="docs-inline-code">"wrapper"</code> (default, styles only the subtree)
        </li>
      </ul>

      <h2 className="docs-h2">Requirements</h2>
      <ul className="docs-list">
        <li>React 18 or 19</li>
        <li>Any bundler that handles CSS (Vite, webpack 5, etc.)</li>
      </ul>

      <h2 className="docs-h2">TypeScript</h2>
      <p className="docs-p">
        The package ships its own type declarations — nothing extra to install.
      </p>
    </>
  );
}
