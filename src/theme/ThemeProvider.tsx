import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type ThemeChoice = "light" | "dark" | "auto";
export type ResolvedTheme = "light" | "dark";

export interface ThemeContextValue {
  /** The user's chosen theme preference ("auto" follows the OS). */
  theme: ThemeChoice;
  /** The concrete theme currently applied to the DOM. */
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: ThemeChoice) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

function getSystemTheme(): ResolvedTheme {
  if (typeof window === "undefined" || !window.matchMedia) return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export interface ThemeProviderProps {
  children: React.ReactNode;
  /** Initial theme preference. Defaults to "auto". */
  defaultTheme?: ThemeChoice;
  /**
   * Where the data-theme attribute is applied. Defaults to the provider's
   * wrapper element; pass "html" to set it on document.documentElement.
   */
  target?: "wrapper" | "html";
}

export function ThemeProvider({
  children,
  defaultTheme = "auto",
  target = "wrapper",
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeChoice>(defaultTheme);
  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>(getSystemTheme);

  const resolvedTheme: ResolvedTheme = theme === "auto" ? systemTheme : theme;

  useEffect(() => {
    if (!window.matchMedia) return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (event: MediaQueryListEvent) => {
      setSystemTheme(event.matches ? "dark" : "light");
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (target !== "html" || typeof document === "undefined") return;
    document.documentElement.setAttribute("data-theme", resolvedTheme);
  }, [resolvedTheme, target]);

  const value = useMemo<ThemeContextValue>(
    () => ({ theme, resolvedTheme, setTheme }),
    [theme, resolvedTheme],
  );

  return (
    <ThemeContext.Provider value={value}>
      {target === "wrapper" ? (
        <div data-theme={resolvedTheme}>{children}</div>
      ) : (
        children
      )}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a <ThemeProvider>");
  }
  return context;
}