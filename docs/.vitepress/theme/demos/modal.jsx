import { useState } from "react";
import { Modal, Button } from "../../../../src/index";

export function ModalDemo() {
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