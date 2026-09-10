import { Avatar } from "../../../../src/index";

export function AvatarDemo() {
  return (
    <>
      <Avatar name="Ada Lovelace" />
      <Avatar name="Alan Turing" variant="sunken" />
      <Avatar name="Grace Hopper" size="lg" />
      <Avatar name="Edsger Dijkstra" size="xl" variant="sunken" />
    </>
  );
}