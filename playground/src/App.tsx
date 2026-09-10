import { useState } from "react";
import type { ThemeChoice } from "@rueblibuebli/neumorph-ui";
import {
  useTheme,
  Button,
  Card,
  Badge,
  Alert,
  Avatar,
  IconButton,
  Progress,
  Spinner,
  Skeleton,
} from "@rueblibuebli/neumorph-ui";
import { FormsSection } from "./sections/FormsSection";
import { OverlaySection } from "./sections/OverlaySection";
import { DataSection } from "./sections/DataSection";

export function App() {
  const { theme, setTheme } = useTheme();
  const [dismissed, setDismissed] = useState(false);

  const cycle = () => {
    const order: ThemeChoice[] = ["light", "dark", "auto"];
    setTheme(order[(order.indexOf(theme) + 1) % 3]!);
  };

  return (
    <div className="app">
      <header className="app__header">
        <h1>neumorph-ui playground</h1>
        <Button size="sm" onClick={cycle}>
          Theme: {theme}
        </Button>
      </header>

      <main className="app__main">
        {!dismissed && (
          <Alert tone="info" title="Playground" onDismiss={() => setDismissed(true)}>
            Local dev sandbox — the library is aliased to src/, changes appear instantly.
          </Alert>
        )}

        <Card header="Buttons & basics" className="app__card">
          <div className="app__row">
            <Button variant="raised">Raised</Button>
            <Button variant="sunken">Sunken</Button>
            <Button variant="flat">Flat</Button>
            <Button variant="accent">Accent</Button>
          </div>
          <div className="app__row">
            <Button size="sm">Small</Button>
            <Button size="lg">Large</Button>
            <Button loading>Loading</Button>
            <Button disabled>Disabled</Button>
          </div>
          <div className="app__row">
            <Badge tone="success">Active</Badge>
            <Badge tone="error" pill>3</Badge>
            <Avatar name="Ada Lovelace" />
            <Avatar name="Alan Turing" variant="sunken" />
            <IconButton
              shape="circle"
              aria-label="Add"
              icon={
                <svg viewBox="0 0 16 16" fill="none">
                  <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              }
            />
          </div>
          <div className="app__row">
            <Progress value={64} />
            <Spinner />
            <Skeleton lines={3} />
          </div>
        </Card>

        <FormsSection />
        <OverlaySection />
        <DataSection />
      </main>
    </div>
  );
}