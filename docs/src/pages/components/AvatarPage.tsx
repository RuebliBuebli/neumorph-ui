import { Avatar } from "@rueblibuebli/neumorph-ui";
import { ComponentDemo, PageIntro, PropsTable } from "../../components/ComponentDemo";

const usage = `import { Avatar } from "@rueblibuebli/neumorph-ui";

<Avatar name="Ada Lovelace" />
<Avatar src="/team/ada.jpg" alt="Ada Lovelace" size="lg" variant="sunken" />`;

export function AvatarPage() {
  return (
    <>
      <h1 className="docs-h1">Avatar</h1>
      <PageIntro>User/avatar display with initials fallback.</PageIntro>

      <ComponentDemo id="avatar-usage" label="Usage" code={usage}>
        <Avatar name="Ada Lovelace" />
        <Avatar name="Alan Turing" variant="sunken" />
        <Avatar name="Grace Hopper" size="lg" />
        <Avatar name="Edsger Dijkstra" size="xl" variant="sunken" />
      </ComponentDemo>

      <PropsTable
        rows={[
          {
            name: "src",
            type: "string",
            description: "Image URL (falls back to initials on load error)",
          },
          { name: "alt", type: "string", description: "Accessible name when using an image" },
          { name: "name", type: "string", description: "Derives initials and the accessible name" },
          {
            name: "size",
            type: '"sm" | "md" | "lg" | "xl"',
            def: '"md"',
            description: "28–72px",
          },
          {
            name: "variant",
            type: '"raised" | "sunken"',
            def: '"raised"',
            description: "Surface style",
          },
        ]}
      />
    </>
  );
}
