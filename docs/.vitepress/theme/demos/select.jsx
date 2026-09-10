import { useState } from "react";
import { Select } from "../../../../src/index";

export function SelectDemo() {
  const [country, setCountry] = useState("ch");
  return (
    <Select
      label="Country"
      options={[
        { value: "de", label: "Germany" },
        { value: "ch", label: "Switzerland" },
        { value: "at", label: "Austria", disabled: true },
      ]}
      value={country}
      onChange={(e) => setCountry(e.target.value)}
    />
  );
}