import { Textarea } from "../../../../src/index";

export function TextareaDemo() {
  return <Textarea label="Notes" hint="Auto-grows up to 6 rows" autoSize maxRows={6} />;
}