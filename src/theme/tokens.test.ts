import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

/**
 * Guards the WCAG contrast of text-ish tokens against the theme background.
 * Large-text/UI tokens (muted) are held to 3:1, body text tokens to 4.5:1.
 */

function normalizeHex(hex: string): string {
  const body = hex.slice(1);
  return body.length === 3
    ? `#${body
        .split("")
        .map((c) => c + c)
        .join("")}`
    : hex;
}

function luminance(hexRaw: string): number {
  const hex = normalizeHex(hexRaw);
  const channels = [0, 2, 4].map((i) => parseInt(hex.slice(i + 1, i + 3), 16) / 255);
  const linear = channels.map((c) =>
    c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4),
  );
  return 0.2126 * linear[0]! + 0.7152 * linear[1]! + 0.0722 * linear[2]!;
}

function contrast(a: string, b: string): number {
  const la = luminance(a);
  const lb = luminance(b);
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}

function extractTokens(scope: string): Record<string, string> {
  const tokens: Record<string, string> = {};
  const re = /--neu-([a-z-]+):\s*(#[0-9a-fA-F]{3,6})\s*;/g;
  let match: RegExpExecArray | null;
  while ((match = re.exec(scope)) !== null) {
    tokens[`--neu-${match[1]}`] = match[2]!;
  }
  return tokens;
}

const css = readFileSync(join(process.cwd(), "src", "theme", "tokens.css"), "utf8");
const lightScope = css.split('[data-theme="dark"]')[0]!;
const darkScope = css.split('[data-theme="dark"]')[1] ?? "";
const light = extractTokens(lightScope);
const dark = extractTokens(darkScope);

const bodyTokens = ["text-primary", "text-secondary"] as const;
const largeTokens = ["text-muted", "accent", "success", "warning", "error", "info"] as const;

describe("token contrast", () => {
  describe("light theme", () => {
    it.each(bodyTokens)("%s meets 4.5:1 on bg", (token) => {
      expect(contrast(light[`--neu-${token}`]!, light["--neu-bg"]!)).toBeGreaterThanOrEqual(4.5);
    });
    it.each(largeTokens)("%s meets at least 3:1 on bg", (token) => {
      expect(contrast(light[`--neu-${token}`]!, light["--neu-bg"]!)).toBeGreaterThanOrEqual(3);
    });
    it("on-accent meets 4.5:1 on accent", () => {
      expect(contrast(light["--neu-on-accent"]!, light["--neu-accent"]!)).toBeGreaterThanOrEqual(
        4.5,
      );
    });
  });

  describe("dark theme", () => {
    it.each(bodyTokens)("%s meets 4.5:1 on bg", (token) => {
      expect(contrast(dark[`--neu-${token}`]!, dark["--neu-bg"]!)).toBeGreaterThanOrEqual(4.5);
    });
    it.each(largeTokens)("%s meets at least 3:1 on bg", (token) => {
      expect(contrast(dark[`--neu-${token}`]!, dark["--neu-bg"]!)).toBeGreaterThanOrEqual(3);
    });
    it("on-accent meets 4.5:1 on accent", () => {
      expect(contrast(dark["--neu-on-accent"]!, dark["--neu-accent"]!)).toBeGreaterThanOrEqual(
        4.5,
      );
    });
  });
});