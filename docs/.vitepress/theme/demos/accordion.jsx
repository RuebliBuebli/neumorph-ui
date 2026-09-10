import { Accordion } from "../../../../src/index";

export function AccordionDemo() {
  return (
    <div style={{ flex: 1, minWidth: 280 }}>
      <Accordion
        items={[
          { key: "a", title: "What is neumorphism?", content: "Soft UI built from two opposing shadows on a single surface color." },
          { key: "b", title: "Is it accessible?", content: "This library adds strong focus rings and contrast-checked tokens." },
        ]}
      />
    </div>
  );
}