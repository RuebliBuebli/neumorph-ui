import { Tooltip, Button } from "../../../../src/index";

export function TooltipDemo() {
  return (
    <>
      <Tooltip content="Soft shadows everywhere" placement="top">
        <Button variant="raised">Hover top</Button>
      </Tooltip>
      <Tooltip content="Focus me with the keyboard" placement="bottom">
        <Button variant="flat">Hover bottom</Button>
      </Tooltip>
    </>
  );
}