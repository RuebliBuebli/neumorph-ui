import { Checkbox } from "../../../../src/index";

export function CheckboxDemo() {
  return (
    <>
      <Checkbox label="Accept terms" defaultChecked />
      <Checkbox label="Indeterminate" indeterminate />
      <Checkbox label="Disabled" disabled />
    </>
  );
}