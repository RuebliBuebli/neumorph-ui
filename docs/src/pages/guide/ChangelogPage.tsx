import type { ReactNode } from "react";
import { Badge } from "@rueblibuebli/neumorph-ui";
import { PageIntro } from "../../components/ComponentDemo";

interface ReleaseBlock {
  version: string;
  date: string;
  summary?: ReactNode;
  added?: string[];
  changed?: string[];
}

const releases: ReleaseBlock[] = [
  {
    version: "1.0.0",
    date: "2026-09-10",
    summary: (
      <>
        First stable release: 23 components, light/dark theming, WCAG AA contrast, docs site,
        playground, CI/CD to GitHub Packages.
      </>
    ),
    changed: [
      "Accessibility: light theme tokens retuned for WCAG AA (text 4.5:1, UI accents 3:1+); dark muted text brightened. Contrast is now guarded by automated tests.",
      "Stronger light-theme focus ring.",
    ],
    added: [
      "Token contrast regression tests (light + dark, 18 assertions) and a keyboard-only walkthrough test across interactive components.",
    ],
  },
  {
    version: "0.4.0",
    date: "2026-09-10",
    added: [
      "`Table` (columns/rows API, sticky header, zebra), `Pagination` (page window, ellipsis, aria-current, prev/next IconButtons), `Spinner` (status role, reduced-motion), `Skeleton` (text/rect/circle, multi-line), `Breadcrumb` + `BreadcrumbItem` (nav/ol semantics, aria-current).",
    ],
  },
  {
    version: "0.3.0",
    date: "2026-09-10",
    added: [
      "`Modal` (focus trap, Esc/backdrop close, focus restore, scroll lock), `Tooltip` (hover/focus, placements, delay), `Select` (native a11y, options prop or children), `Tabs` (roving tabindex, arrow keys), `Accordion` (disclosure semantics, single/multiple), `RadioGroup` (fieldset/legend, arrow-key navigation).",
    ],
  },
  {
    version: "0.2.0",
    date: "2026-09-10",
    added: [
      "`Input` (label/hint/invalid/prefix/suffix/sizes), `Textarea` (autoSize, sizes), `Toggle` (role=switch, controlled/uncontrolled), `Checkbox` (indeterminate), `Slider` (accent fill, value output, sizes).",
      "`Progress` (determinate/indeterminate, tones), `Badge` (tones, pill), `Alert` (tones, role=alert/status, dismissible), `Avatar` (image + initials fallback, sizes, variants), `IconButton` (square/circle, requires aria-label).",
    ],
  },
  {
    version: "0.1.0",
    date: "2026-09-10",
    added: [
      "Project scaffold: TypeScript, Vite library mode (ES + CJS + bundled CSS), ESLint, Prettier, Stylelint, Vitest + Testing Library.",
      "Design tokens (`--neu-*` CSS custom properties) with light and dark themes.",
      "`ThemeProvider` + `useTheme` hook (light / dark / auto with `prefers-color-scheme`); wrapper or `documentElement` targeting.",
      "`Button` component: raised/sunken/flat/accent variants, sm/md/lg, loading + disabled, polymorphic `as` prop, focus ring, reduced-motion aware.",
      "`Card` component: raised/sunken variants, padding steps 0–6, header/footer slots, polymorphic `as` prop.",
      "`cx` class name utility.",
      "CI (lint/test/build, required on main), release workflow to GitHub Packages, issue + PR templates.",
    ],
  },
];

function Entry({ children }: { children: ReactNode }) {
  return <li className="docs-changelog__entry">{children}</li>;
}

export function ChangelogPage() {
  return (
    <>
      <h1 className="docs-h1">Changelog</h1>
      <PageIntro>
        All notable changes to this project will be documented in this file. The format is based on{" "}
        <a href="https://keepachangelog.com/en/1.1.0/">Keep a Changelog</a>, and this project
        adheres to <a href="https://semver.org/spec/v2.0.0.html">Semantic Versioning</a>.
      </PageIntro>

      <h2 className="docs-h2">
        Unreleased <Badge tone="neutral">next</Badge>
      </h2>

      <div className="docs-changelog">
        {releases.map((release) => (
          <section key={release.version} className="docs-changelog__release">
            <h2 className="docs-h2 docs-changelog__version">
              {release.version}
              <Badge tone="accent" pill>
                {release.date}
              </Badge>
            </h2>
            {release.summary && <p className="docs-p">{release.summary}</p>}
            {release.changed && (
              <>
                <h3 className="docs-h3">Changed</h3>
                <ul className="docs-list">
                  {release.changed.map((item, index) => (
                    <Entry key={index}>{renderInline(item)}</Entry>
                  ))}
                </ul>
              </>
            )}
            {release.added && (
              <>
                <h3 className="docs-h3">Added</h3>
                <ul className="docs-list">
                  {release.added.map((item, index) => (
                    <Entry key={index}>{renderInline(item)}</Entry>
                  ))}
                </ul>
              </>
            )}
          </section>
        ))}
      </div>
    </>
  );
}

/** Renders `code` spans for backtick-quoted parts of a changelog string. */
function renderInline(text: string): ReactNode[] {
  return text.split(/(`[^`]+`)/g).map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`") && part.length > 2) {
      return (
        <code key={index} className="docs-inline-code">
          {part.slice(1, -1)}
        </code>
      );
    }
    return <span key={index}>{part}</span>;
  });
}
