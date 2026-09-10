import { useState } from "react";
import { Button, Card, Modal, Tabs, Accordion, Tooltip } from "@rueblibuebli/neumorph-ui";

export function OverlaySection() {
  const [open, setOpen] = useState(false);

  return (
    <Card header="Overlays & navigation" className="app__card">
      <div className="app__row">
        <Button variant="accent" onClick={() => setOpen(true)}>
          Open modal
        </Button>
        <Tooltip content="Soft shadows everywhere" placement="bottom">
          <Button variant="flat">Hover me</Button>
        </Tooltip>
      </div>
      <Tabs
        items={[
          { key: "one", label: "One", content: "First tab content." },
          { key: "two", label: "Two", content: "Second tab content." },
        ]}
      />
      <Accordion
        items={[
          { key: "a", title: "What is neumorphism?", content: "Soft UI built from two opposing shadows on a single surface color." },
          { key: "b", title: "Is it accessible?", content: "This library adds strong focus rings and contrast-checked dark tokens." },
        ]}
      />
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Confirm action"
        footer={
          <>
            <Button variant="flat" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="accent" onClick={() => setOpen(false)}>
              Confirm
            </Button>
          </>
        }
      >
        This modal traps focus, closes on Escape and backdrop click, and restores focus on close.
      </Modal>
    </Card>
  );
}