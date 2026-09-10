import { Input } from "../../../../src/index";

export function InputDemo() {
  return (
    <>
      <Input label="Email" hint="We never share it" placeholder="you@example.com" />
      <Input label="Invalid" hint="Not an email" invalid defaultValue="nope" />
    </>
  );
}