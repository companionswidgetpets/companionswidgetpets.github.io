import app from '../data/app.json';
import packs from '../data/packs.json';
import species from '../data/species.json';
import styles from '../data/styles.json';
import props from '../data/props.json';

export { app, packs, species, styles, props };

/** An absolute URL on the site for a path such as "/help/". */
export function absolute(path: string): string {
  return new URL(path, app.siteUrl).toString();
}

export { formatDate } from '../i18n/index.ts';

export function isoDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toISOString().slice(0, 10);
}

export type Species = (typeof species)[number];
export type Pack = (typeof packs)[number];
export type Style = (typeof styles)[number];
export type Prop = (typeof props)[number];

export function speciesById(id: string): Species {
  const found = species.find((s) => s.id === id);
  if (!found) throw new Error(`Unknown species "${id}"`);
  return found;
}

export function packById(id: string): Pack {
  const found = packs.find((p) => p.id === id);
  if (!found) throw new Error(`Unknown pack "${id}"`);
  return found;
}

export function styleById(id: string): Style {
  const found = styles.find((s) => s.id === id);
  if (!found) throw new Error(`Unknown style "${id}"`);
  return found;
}

export const freeSpecies = species.filter((s) => packById(s.pack).comesWithApp);
export const paidPacks = packs.filter((p) => !p.comesWithApp);

/** "rgb(r g b)" from the palette's 0–1 components. */
export function rgb([r, g, b]: number[]): string {
  return `rgb(${Math.round(r * 255)} ${Math.round(g * 255)} ${Math.round(b * 255)})`;
}

/** "r g b" (no wrapper) from 0–1 components, for `rgb(var(--x) / a)` in CSS. */
export function rgbParts([r, g, b]: number[]): string {
  return `${Math.round(r * 255)} ${Math.round(g * 255)} ${Math.round(b * 255)}`;
}

/** The CSS custom properties that paint a tank in a style (see Tank.astro and tank.css). */
export function paletteVars(style: Style): string {
  const p = style.palette;
  const water = p.water;
  const stop = (i: number) => rgb(water[i].rgb);
  return [
    `--w0:${stop(0)}`,
    `--w25:${stop(1)}`,
    `--w60:${stop(2)}`,
    `--w100:${stop(3)}`,
    `--bed:${rgbParts(p.bed)}`,
    `--shadow:${rgbParts(p.shadow)}`,
    `--shadow-a:${p.shadowOpacity}`,
    `--hl:${p.highlight}`,
  ].join(';');
}

/** The water's surface colour paled for a page behind a tank, like the app's page tint. */
export function pageTint(style: Style): string {
  const [r, g, b] = style.palette.water[0].rgb;
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  const toWhite = Math.max(0.25, (0.78 - luminance) / (1 - luminance));
  const mix = (c: number) => Math.round((c + (1 - c) * toWhite) * 255);
  return `rgb(${mix(r)} ${mix(g)} ${mix(b)})`;
}
