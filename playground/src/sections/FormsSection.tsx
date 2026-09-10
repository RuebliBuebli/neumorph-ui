import { useState } from "react";
import { Card, Input, Textarea, Toggle, Checkbox, Slider, Select, RadioGroup } from "@rueblibuebli/neumorph-ui";

export function FormsSection() {
  const [volume, setVolume] = useState(60);
  const [country, setCountry] = useState("ch");
  const [size, setSize] = useState("medium");

  return (
    <Card header="Forms" className="app__card">
      <div className="app__row">
        <Input label="Email" hint="We never share it" prefix="@" style={{ flex: 1, minWidth: 220 }} />
        <Input label="Invalid" hint="Not an email" invalid defaultValue="nope" style={{ flex: 1, minWidth: 220 }} />
      </div>
      <Textarea label="Notes" hint="Auto-growing textarea" autoSize maxRows={8} />
      <div className="app__row">
        <Toggle label="Wi-Fi" defaultChecked />
        <Checkbox label="Subscribe" defaultChecked />
        <Checkbox label="Indeterminate" indeterminate />
      </div>
      <Slider
        label="Volume"
        showValue
        formatValue={(v) => `${v}%`}
        value={volume}
        onChange={(e) => setVolume(Number(e.target.value))}
      />
      <div className="app__row">
        <Select
          label="Country"
          options={[
            { value: "de", label: "Germany" },
            { value: "ch", label: "Switzerland" },
          ]}
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          style={{ minWidth: 200 }}
        />
        <RadioGroup
          legend="Size"
          orientation="horizontal"
          options={[
            { value: "small", label: "Small" },
            { value: "medium", label: "Medium" },
            { value: "large", label: "Large" },
          ]}
          value={size}
          onValueChange={setSize}
        />
      </div>
    </Card>
  );
}