import { useState } from "react";
import { RadioGroup } from "../../../../src/index";

export function RadiogroupDemo() {
  const [value, setValue] = useState("free");
  return (
    <RadioGroup
      legend="Plan"
      orientation="horizontal"
      options={[
        { value: "free", label: "Free" },
        { value: "pro", label: "Pro" },
        { value: "enterprise", label: "Enterprise", disabled: true },
      ]}
      value={value}
      onValueChange={setValue}
    />
  );
}