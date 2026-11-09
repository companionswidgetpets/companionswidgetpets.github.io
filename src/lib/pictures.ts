import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

// The fish and prop pictures, copied from the app by tools/sync-from-app.py. They go
// through Astro's image pipeline so the site serves WebP at a sensible size, and the
// tank script gets the final URLs.
const fishFiles = import.meta.glob<{ default: ImageMetadata }>('../assets/fish/*.png', { eager: true });
const propFiles = import.meta.glob<{ default: ImageMetadata }>('../assets/props/*.png', { eager: true });

export function fishMeta(id: string): ImageMetadata {
  const file = fishFiles[`../assets/fish/${id}.png`];
  if (!file) throw new Error(`No picture for fish "${id}" in src/assets/fish`);
  return file.default;
}

export function propMeta(id: string): ImageMetadata {
  const file = propFiles[`../assets/props/${id}.png`];
  if (!file) throw new Error(`No picture for prop "${id}" in src/assets/props`);
  return file.default;
}

/** The URL of a fish picture as served, 256px (the pictures' own size), WebP. */
export async function fishUrl(id: string): Promise<string> {
  const image = await getImage({ src: fishMeta(id), width: 256, format: 'webp', quality: 88 });
  return image.src;
}

/** The URL of a prop picture as served, at its own size, WebP. */
export async function propUrl(id: string): Promise<string> {
  const meta = propMeta(id);
  const image = await getImage({ src: meta, width: meta.width, format: 'webp', quality: 88 });
  return image.src;
}
