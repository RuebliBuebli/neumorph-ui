import { createRoot } from "react-dom/client";
import { createElement } from "react";
import { ThemeProvider } from "../../../src/theme/ThemeProvider";
import { DEMOS } from "./registry";

/**
 * Mounts live React demos into [data-demo] placeholders left by the
 * component markdown pages. Idempotent: skips already-mounted nodes.
 */

function mountDemo(el) {
  const name = el.dataset.demo;
  const shell = document.createElement("div");
  shell.className = "neu-demo";
  shell.dataset.theme = "light";

  const controls = document.createElement("div");
  controls.className = "neu-demo__controls";
  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "neu-demo__toggle";
  controls.appendChild(toggle);

  const host = document.createElement("div");
  host.className = "neu-demo__stage";
  shell.append(controls, host);
  el.appendChild(shell);

  const root = createRoot(host);
  let theme = "light";

  const render = () => {
    shell.dataset.theme = theme;
    toggle.textContent = theme === "light" ? "☀ Light" : "☾ Dark";
    const demo = DEMOS[name];
    root.render(
      createElement(
        ThemeProvider,
        { key: theme, defaultTheme: theme },
        demo ? createElement(demo) : createElement("div", null, `Demo not found: ${name}`),
      ),
    );
  };

  toggle.addEventListener("click", () => {
    theme = theme === "light" ? "dark" : "light";
    render();
  });

  render();
}

export function mountAll() {
  document.querySelectorAll("[data-demo]:not([data-demo-mounted])").forEach((el) => {
    el.dataset.demoMounted = "true";
    mountDemo(el);
  });
}