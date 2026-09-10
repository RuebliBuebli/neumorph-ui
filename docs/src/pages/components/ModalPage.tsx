import { useState } from "react";
import { Modal, Button } from "@rueblibuebli/neumorph-ui";
import { ComponentDemo, PageIntro, PropsTable } from "../../components/ComponentDemo";

const usage = `import { useState } from "react";
import { Modal, Button } from "@rueblibuebli/neumorph-ui";

function Example() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Delete account</Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Delete account?"
        footer={
          <>
            <Button variant="flat" onClick={() => setOpen(false)}>Cancel</Button>
            <Button variant="accent" onClick={() => setOpen(false)}>Delete</Button>
          </>
        }
      >
        This action cannot be undone.
      </Modal>
    </>
  );
}`;

function ModalDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="accent" onClick={() => setOpen(true)}>
        Open modal
      </Button>
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
        This modal traps focus, closes on Escape and restores focus afterwards.
      </Modal>
    </>
  );
}

export function ModalPage() {
  return (
    <>
      <h1 className="docs-h1">Modal</h1>
      <PageIntro>
        Dialog with focus trap, focus restore, Escape/backdrop close and scroll lock.
      </PageIntro>

      <ComponentDemo id="modal-usage" label="Usage" code={usage}>
        <ModalDemo />
      </ComponentDemo>

      <PropsTable
        rows={[
          { name: "open", type: "boolean", description: "Visibility (required)" },
          { name: "onClose", type: "() => void", description: "Close callback (required)" },
          { name: "title", type: "ReactNode", description: "Heading (used as accessible name)" },
          { name: "footer", type: "ReactNode", description: "Action bar" },
          { name: "width", type: "number", def: "480", description: "Max panel width in px" },
          {
            name: "dismissible",
            type: "boolean",
            def: "true",
            description: "false disables Escape + backdrop close",
          },
        ]}
      />

      <p className="docs-p">
        Behavior: <code className="docs-inline-code">role="dialog"</code> +{" "}
        <code className="docs-inline-code">aria-modal</code>, Tab/Shift+Tab cycle inside the panel,
        focus returns to the opener on close.
      </p>
    </>
  );
}
