import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import DemoMounter from "./DemoMounter.vue";

import "./demo.css";

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      "doc-after": () => h(DemoMounter),
    });
  },
};