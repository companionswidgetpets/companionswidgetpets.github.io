import premade from '../data/premade.json';

type Size = 'small' | 'medium' | 'large';

/** The props of the Explore page's ready-made tank in `style` for `size`, or Minimal's
 *  layout for the styles that have none (Pumpkin and Lavender are the orange and
 *  lavender Minimal). */
export function premadeProps(size: Size, styleId: string) {
  const tanks = premade[size];
  const tank = tanks.find((t) => t.style === styleId) ?? tanks[0];
  return tank.props;
}

/** The hero's widget: the tank a fresh install starts with, with the reef fish from the
 *  design mockup swimming in it. */
export const heroTank = {
  id: 'hero',
  size: 'small' as const,
  style: 'minimal',
  fish: [
    { species: 'clownfish', seed: 'hero-clownfish' },
    { species: 'moorish_idol', seed: 'hero-idol' },
    { species: 'regal_tang', seed: 'hero-tang' },
    { species: 'seahorse', seed: 'hero-seahorse' },
  ],
  props: premadeProps('small', 'minimal'),
};

/** Fish for the three-sizes demo, a different set per size as the app keeps them. */
export const demoFish = {
  small: [
    { species: 'clownfish', seed: 'demo-s-1' },
    { species: 'regal_tang', seed: 'demo-s-2' },
    { species: 'neon', seed: 'demo-s-3' },
    { species: 'seahorse', seed: 'demo-s-4' },
  ],
  medium: [
    { species: 'goldfish', seed: 'demo-m-1' },
    { species: 'betta', seed: 'demo-m-2' },
    { species: 'guppy', seed: 'demo-m-3' },
    { species: 'angel_fish', seed: 'demo-m-4' },
    { species: 'discus', seed: 'demo-m-5' },
  ],
  large: [
    { species: 'sea_turtle', seed: 'demo-l-1' },
    { species: 'moorish_idol', seed: 'demo-l-2' },
    { species: 'jellyfish', seed: 'demo-l-3' },
    { species: 'parrot_fish', seed: 'demo-l-4' },
    { species: 'starfish', seed: 'demo-l-5' },
  ],
};

/** Two fish that suit each style's water, for the style row. */
export const styleFish: Record<string, { species: string; seed: string }[]> = {
  minimal: [{ species: 'clownfish', seed: 'st-min-1' }, { species: 'regal_tang', seed: 'st-min-2' }],
  deepOcean: [{ species: 'jellyfish', seed: 'st-deep-1' }, { species: 'lion_fish', seed: 'st-deep-2' }],
  pond: [{ species: 'spotted_koi', seed: 'st-pond-1' }, { species: 'gold_koi', seed: 'st-pond-2' }],
  reed: [{ species: 'trout', seed: 'st-reed-1' }, { species: 'catfish', seed: 'st-reed-2' }],
  blossom: [{ species: 'betta', seed: 'st-blos-1' }, { species: 'guppy', seed: 'st-blos-2' }],
  dark: [{ species: 'ghost', seed: 'st-dark-1' }, { species: 'skeleton', seed: 'st-dark-2' }],
  pumpkin: [{ species: 'goldfish', seed: 'st-pump-1' }, { species: 'mahi_mahi', seed: 'st-pump-2' }],
  lavender: [{ species: 'discus', seed: 'st-lav-1' }, { species: 'dartfish', seed: 'st-lav-2' }],
};

/** A style that flatters each pack, for the pack pages' live tank. */
export const packStyle: Record<string, string> = {
  stock: 'minimal',
  freshwater: 'reed',
  reef: 'minimal',
  pond: 'pond',
  seaCreatures: 'deepOcean',
  pondCreatures: 'pond',
  shark: 'deepOcean',
  whale: 'deepOcean',
  reef2: 'blossom',
  freshwater2: 'lavender',
  openOcean: 'minimal',
  special: 'dark',
};
