/* Derive a full brand from one picked color: background, ink, muted and
   accent, with the accent and muted pushed until they clear WCAG AA against
   the derived background. Pure math, no dependencies — the derivation is
   itself part of the exhibit. */

export type Derived = {
  bg: string;
  ink: string;
  muted: string;
  accent: string;
  ratio: number;
};

type Hsl = { h: number; s: number; l: number };

function hexToHsl(hex: string): Hsl {
  const n = parseInt(hex.slice(1), 16);
  const r = ((n >> 16) & 255) / 255;
  const g = ((n >> 8) & 255) / 255;
  const b = (n & 255) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return { h: 0, s: 0, l };
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h: number;
  if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
  else if (max === g) h = ((b - r) / d + 2) / 6;
  else h = ((r - g) / d + 4) / 6;
  return { h, s, l };
}

function hslToHex({ h, s, l }: Hsl): string {
  const f = (n: number) => {
    const k = (n + h * 12) % 12;
    const a = s * Math.min(l, 1 - l);
    const v = l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1));
    return Math.round(v * 255)
      .toString(16)
      .padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

function luminance(hex: string): number {
  const n = parseInt(hex.slice(1), 16);
  const chan = (v: number) => {
    const c = v / 255;
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  };
  return (
    0.2126 * chan((n >> 16) & 255) +
    0.7152 * chan((n >> 8) & 255) +
    0.0722 * chan(n & 255)
  );
}

export function contrast(a: string, b: string): number {
  const la = luminance(a);
  const lb = luminance(b);
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}

/* Nudge a color's lightness away from the background until it clears the
   target ratio (or runs out of room). */
function fitContrast(color: Hsl, bg: string, target: number, lighten: boolean): string {
  const c = { ...color };
  for (let i = 0; i < 50; i++) {
    if (contrast(hslToHex(c), bg) >= target) break;
    c.l = lighten ? Math.min(1, c.l + 0.02) : Math.max(0, c.l - 0.02);
  }
  return hslToHex(c);
}

export function deriveBrand(hex: string): Derived {
  const pick = hexToHsl(hex);
  const dark = pick.l < 0.35;

  const bg = dark
    ? hslToHex({ h: pick.h, s: Math.min(pick.s, 0.45), l: 0.09 })
    : hslToHex({ h: pick.h, s: Math.min(pick.s, 0.5) * 0.5, l: 0.965 });
  const ink = dark
    ? hslToHex({ h: pick.h, s: 0.2, l: 0.92 })
    : hslToHex({ h: pick.h, s: Math.min(pick.s, 0.6), l: 0.11 });
  const accent = fitContrast(
    { h: pick.h, s: Math.max(pick.s, 0.3), l: pick.l },
    bg,
    4.5,
    dark
  );
  const muted = fitContrast(
    { h: pick.h, s: Math.min(pick.s, 0.3), l: dark ? 0.6 : 0.42 },
    bg,
    4.6,
    dark
  );

  return { bg, ink, muted, accent, ratio: Math.round(contrast(accent, bg) * 10) / 10 };
}
