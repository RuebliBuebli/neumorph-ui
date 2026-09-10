import { Button } from "../../../../src/index";

export function ButtonDemo() {
  return (
    <>
      <Button variant="raised">Raised</Button>
      <Button variant="sunken">Sunken</Button>
      <Button variant="flat">Flat</Button>
      <Button variant="accent">Accent</Button>
      <Button loading>Loading</Button>
      <Button disabled>Disabled</Button>
    </>
  );
}