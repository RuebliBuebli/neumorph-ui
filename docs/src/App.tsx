import { useEffect, useState } from "react";
import {
  useTheme,
  Button,
  IconButton,
  Card,
  Breadcrumb,
  BreadcrumbItem,
} from "@rueblibuebli/neumorph-ui";
import { NAV, titleFor } from "./nav";
import { Link, useHashRoute, cx } from "./router";
import { pages } from "./pages";

const sunIcon = (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
    <path
      d="M8 1v2M8 13v2M1 8h2M13 8h2M3 3l1.4 1.4M11.6 11.6L13 13M13 3l-1.4 1.4M4.4 11.6L3 13"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const moonIcon = (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M13 9.5A6 6 0 1 1 6.5 3a5 5 0 1 0 6.5 6.5z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

const menuIcon = (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const closeIcon = (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const path = useHashRoute();
  return (
    <nav className="docs-sidebar__nav" aria-label="Docs">
      {NAV.map((section) => (
        <div key={section.title} className="docs-sidebar__section">
          <h3 className="docs-sidebar__heading">{section.title}</h3>
          <ul className="docs-sidebar__list">
            {section.items.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={onNavigate}
                  className={cx(
                    "docs-sidebar__link",
                    path === item.path && "docs-sidebar__link--active",
                  )}
                  aria-current={path === item.path ? "page" : undefined}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}

function Header({ onMenuClick }: { onMenuClick: () => void }) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <header className="docs-header">
      <Button
        variant="flat"
        size="sm"
        className="docs-header__menu"
        leadingIcon={menuIcon}
        onClick={onMenuClick}
      >
        Menu
      </Button>
      <Link to="/" className="docs-header__brand">
        <span className="docs-header__logo" aria-hidden="true" />
        neumorph-ui
      </Link>
      <nav className="docs-header__nav" aria-label="Primary">
        <Link to="/getting-started">Guide</Link>
        <Link to="/theming">Theming</Link>
        <Link to="/components/button">Components</Link>
      </nav>
      <a
        className="docs-header__github"
        href="https://github.com/RuebliBuebli/neumorph-ui"
        aria-label="GitHub repository"
      >
        <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
        </svg>
      </a>
      <IconButton
        aria-label={resolvedTheme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
        shape="circle"
        variant="flat"
        size="sm"
        icon={resolvedTheme === "dark" ? sunIcon : moonIcon}
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      />
    </header>
  );
}

export function App() {
  const path = useHashRoute();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title = path === "/" ? "neumorph-ui" : `neumorph-ui — ${titleFor(path)}`;
    setMenuOpen(false);
    window.scrollTo({ top: 0 });
  }, [path]);

  const page = pages[path] ?? pages["/"];
  if (!page) return null;
  const Page = page.component;

  return (
    <div className="docs-layout">
      <Header onMenuClick={() => setMenuOpen(true)} />
      <div className="docs-layout__body">
        <aside className="docs-sidebar">
          <SidebarNav />
        </aside>
        {menuOpen && (
          <div
            className="docs-drawer-backdrop"
            role="presentation"
            onClick={() => setMenuOpen(false)}
          >
            <Card
              variant="raised"
              pad={3}
              className="docs-drawer"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="docs-drawer__head">
                <span className="docs-drawer__title">Menu</span>
                <IconButton
                  aria-label="Close menu"
                  size="sm"
                  variant="flat"
                  icon={closeIcon}
                  onClick={() => setMenuOpen(false)}
                />
              </div>
              <SidebarNav onNavigate={() => setMenuOpen(false)} />
            </Card>
          </div>
        )}
        <main id="main" className={cx("docs-main", path === "/" && "docs-main--wide")}>
          {path !== "/" && (
            <Breadcrumb className="docs-breadcrumb">
              <BreadcrumbItem href="#/">Docs</BreadcrumbItem>
              <BreadcrumbItem>{titleFor(path)}</BreadcrumbItem>
            </Breadcrumb>
          )}
          <Page />
        </main>
      </div>
    </div>
  );
}
