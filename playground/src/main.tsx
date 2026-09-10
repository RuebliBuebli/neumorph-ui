import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@rueblibuebli/neumorph-ui";
import "@rueblibuebli/neumorph-ui/styles.css";
import { App } from "./App";
import "./app.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" target="html">
      <App />
    </ThemeProvider>
  </StrictMode>,
);