import { defineConfig } from "vitepress";

const components = [
  "button",
  "card",
  "input",
  "textarea",
  "toggle",
  "checkbox",
  "radiogroup",
  "slider",
  "select",
  "tabs",
  "accordion",
  "modal",
  "tooltip",
  "table",
  "pagination",
  "spinner",
  "skeleton",
  "breadcrumb",
  "badge",
  "alert",
  "avatar",
  "icon-button",
  "progress",
];

export default defineConfig({
  title: "neumorph-ui",
  description: "Neumorphic React component and style library",
  base: "/neumorph-ui/",
  themeConfig: {
    nav: [
      { text: "Guide", link: "/getting-started" },
      { text: "Theming", link: "/theming" },
      { text: "Components", link: "/components/button" },
    ],
    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Introduction", link: "/" },
          { text: "Getting Started", link: "/getting-started" },
          { text: "Theming", link: "/theming" },
          { text: "Architecture", link: "/architecture" },
          { text: "Contributing", link: "/contributing" },
          { text: "Changelog", link: "/changelog" },
        ],
      },
      {
        text: "Components",
        items: components.map((c) => ({
          text: c.replace(/(^|-)(\w)/g, (_, sep, ch) =>
            sep ? ` ${ch.toUpperCase()}` : ch.toUpperCase(),
          ),
          link: `/components/${c}`,
        })),
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/RuebliBuebli/neumorph-ui" }],
  },
});