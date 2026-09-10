import { useState } from "react";
import { Slider } from "../../../../src/index";

export function SliderDemo() {
  const [value, setValue] = useState(60);
  return (
    <div style={{ minWidth: 260, flex: 1 }}>
      <Slider
        label="Volume"
        showValue
        formatValue={(v) => `${v}%`}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
    </div>
  );
}