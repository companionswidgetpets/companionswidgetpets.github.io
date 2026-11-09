/*
 * The tank, as the app draws it, in the browser.
 *
 * A port of the app's SwimPattern, SwimStyle recipes, TankView swim areas, prop footprint
 * placement and BubbleBurst "breath" bubbles. Everything is laid out in the app's design
 * units (the small tank is 190 across, a standard fish picture 36) and scaled to the
 * element's width, so the same tank reads the same on a phone mockup, a card or a hero.
 *
 * Positions are pure functions of wall-clock time, as in the app, so a tank that was
 * scrolled away or hidden simply shows where the fish got to when it comes back.
 *
 * Usage: any element with a `data-tank` attribute holding JSON (see Tank.astro) is picked
 * up on load. Tanks animate only while on screen and only while the tab is visible.
 */

const DESIGN = {
  side: 190,
  glyph: 36,
  surface: 27,
  waterline: 23,
  sizes: {
    small: { w: 190, h: 190 },
    medium: { w: (190 * 364) / 170, h: 190 },
    large: { w: (190 * 364) / 170, h: ((190 * 364) / 170) * (382 / 364) },
    watch: { w: 190, h: (190 * 248) / 208 },
  },
};
const BED_HEIGHT = DESIGN.glyph * 0.4;
const TAU = Math.PI * 2;

/* SwimStyle.recipe: the ranges a pattern is drawn from, per style. Rates are radians per
   second at the normal speed in the small tank. */
const RECIPES = {
  swimmer: { depth: [0.1, 0.9], glide: [0.25, 0.45], drift: [0.08, 0.16], bob: [3, 7], bobRate: [0.8, 1.4], bed: false, turns: true, lean: 0 },
  floater: { depth: [0.1, 0.9], glide: [0.15, 0.28], drift: [0.05, 0.1], bob: [1, 2], bobRate: [0.3, 0.5], bed: false, turns: true, lean: 0 },
  creeper: { depth: [1, 1], glide: [0.02, 0.035], drift: [0.008, 0.014], bob: [0, 0], bobRate: [0.2, 0.3], bed: true, turns: false, lean: (15 * Math.PI) / 180 },
  crawler: { depth: [1, 1], glide: [0.08, 0.13], drift: [0.03, 0.045], bob: [0.5, 1.2], bobRate: [0.8, 1.4], bed: true, turns: true, lean: 0 },
};

/* ---------- randomness: a small seeded generator so a fish swims the same way on every visit */

function hash(str) {
  let h1 = 0xdeadbeef ^ 0x9e3779b9, h2 = 0x41c6ce57 ^ 0x9e3779b9;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return (h2 >>> 0) * 4294967296 + (h1 >>> 0);
}

function rng(seed) {
  let a = hash(String(seed)) >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const between = (r, [lo, hi]) => lo + (hi - lo) * r();

/* ---------- Swing and SwimPattern, as in the app */

class Swing {
  constructor(period, distance, phase) {
    this.period = period;
    this.distance = distance;
    this.phase = phase;
  }
  angle(t) {
    return (TAU * t) / this.period + this.phase;
  }
  offset(t) {
    return (this.distance / 2) * (1 - Math.cos(this.angle(t)));
  }
  velocity(t) {
    return (this.distance / 2) * Math.sin(this.angle(t)) * (TAU / this.period);
  }
}

class SwimPattern {
  constructor(seed, style, rate, paceWidth) {
    const r = rng(seed);
    const recipe = RECIPES[style];
    this.recipe = recipe;
    this.paceWidth = paceWidth;
    this.depth = between(r, recipe.depth);
    this.glidePeriod = TAU / (between(r, recipe.glide) * rate);
    this.glidePhase = r() * TAU;
    this.driftPeriod = TAU / (between(r, recipe.drift) * rate);
    this.driftPhase = r() * TAU;
    this.bobAmplitude = between(r, recipe.bob);
    this.bobPeriod = TAU / (between(r, recipe.bobRate) * rate);
    this.bobPhase = r() * TAU;
  }
  stretch(area) {
    const s = Math.abs(area.w) / this.paceWidth;
    return s > 0 && Number.isFinite(s) ? s : 1;
  }
  pose(t, area) {
    const stretch = this.stretch(area);
    const glide = new Swing(this.glidePeriod * stretch, 0.7 * area.w, this.glidePhase);
    const drift = new Swing(this.driftPeriod * stretch, 0.3 * area.w, this.driftPhase);
    const bob = new Swing(this.bobPeriod, 2 * this.bobAmplitude, this.bobPhase);
    const x = area.x + glide.offset(t) + drift.offset(t);
    const y = area.y + this.depth * area.h - this.bobAmplitude + bob.offset(t);
    const movingRight = glide.velocity(t) + drift.velocity(t) > 0;
    return {
      x,
      y,
      facesRight: this.recipe.turns && movingRight,
      lean: movingRight ? -this.recipe.lean : this.recipe.lean,
    };
  }
}

/* TankView.swimArea: where a fish's centre may go, in design units. */
function swimArea(species, scale, size) {
  const g = DESIGN.glyph;
  const inset = (g * Math.max(scale, 1)) / 2 + 4;
  const top = DESIGN.surface + 8 + inset;
  const bottom = RECIPES[species.swimStyle].bed
    ? size.h - BED_HEIGHT - g * scale * (0.5 - species.footing)
    : size.h - inset;
  return { x: inset, y: top, w: size.w - inset * 2, h: bottom - top };
}

/* Prop.pictureFrame: where a prop's whole picture goes for a placement, in design units. */
function propFrame(prop, placement, size) {
  const [fx, fy, fw, fh] = prop.footprint;
  const [pw, ph] = prop.size;
  const foot = { x: placement.x * size.w, y: placement.y * size.h };
  const side = placement.side * size.h;
  const scale = Math.min(side / fw, side / fh);
  let x = foot.x - (fx + fw / 2) * scale;
  const y = foot.y - (fy + fh) * scale;
  if (placement.flipped) x += (fx - (pw - (fx + fw))) * scale;
  return { x, y, w: pw * scale, h: ph * scale };
}

/* ---------- bubbles: a fish breathing out, as BubbleBurst.Kind.breath */

class Breath {
  constructor(origin, start, heading, image, scene) {
    const r = Math.random;
    this.start = start;
    this.bubbles = [];
    const count = 2 + Math.floor(r() * 2);
    for (let i = 0; i < count; i++) {
      const size = 3 + 4 * Math.pow(r(), 1.4);
      const angle = heading + (r() * 2 - 1) * 0.8;
      const distance = 4 + r() * 6;
      const dy = Math.sin(angle);
      const shove = { x: distance * Math.cos(angle), y: distance * dy * (dy > 0 ? 0.4 : 1) };
      const delay = i === 0 ? 0 : r() * 0.35;
      const riseSpeed = 55 + 6 * size;
      const climb = Math.max(origin.y + shove.y - DESIGN.waterline, 0);
      const surfaceTime = delay + climb / riseSpeed;
      const el = document.createElement('img');
      el.className = 'tank__bubble';
      el.src = image;
      el.alt = '';
      el.decoding = 'async';
      scene.appendChild(el);
      this.bubbles.push({
        el, delay, size, shove, riseSpeed,
        swayAmplitude: size * 0.35,
        swayFrequency: 3.5 + r() * 2.5,
        swayPhase: r() * TAU,
        surfaceTime,
        popTime: surfaceTime + 0.1 + r() * 0.5,
        origin,
      });
    }
    this.end = start + Math.max(...this.bubbles.map((b) => b.popTime)) + 0.14;
  }
  draw(t, u) {
    const age = t - this.start;
    for (const b of this.bubbles) {
      const a = age - b.delay;
      if (a < 0) {
        b.el.style.opacity = '0';
        continue;
      }
      const shoveDone = 1 - Math.exp(-14 * a);
      const swell = Math.min(1, 1 - Math.exp(-16 * a));
      const climbTime = Math.min(a, b.surfaceTime - b.delay);
      const risen = b.riseSpeed * Math.max(climbTime, 0);
      let x = b.origin.x + b.shove.x * shoveDone + b.swayAmplitude * Math.sin(b.swayFrequency * a + b.swayPhase);
      let y = Math.max(b.origin.y + b.shove.y * shoveDone - risen, DESIGN.waterline);
      let size = b.size * swell * (1 + 0.0006 * risen);
      let squash = 1;
      let opacity = 0.9;
      const sinceSurface = a - (b.surfaceTime - b.delay);
      if (sinceSurface > 0) squash = 1 - 0.15 * Math.min(1, sinceSurface / 0.2);
      const sincePop = a - (b.popTime - b.delay);
      if (sincePop > 0) {
        const k = Math.min(1, sincePop / 0.14);
        size *= 1 + 0.5 * k;
        opacity = 0.9 * (1 - k);
        if (k >= 1) {
          b.el.style.opacity = '0';
          continue;
        }
      }
      const px = size * u;
      b.el.style.opacity = String(opacity);
      b.el.style.width = `${px}px`;
      b.el.style.height = `${px * squash}px`;
      b.el.style.transform = `translate(${x * u - px / 2}px, ${y * u - (px * squash) / 2}px)`;
    }
  }
  remove() {
    for (const b of this.bubbles) b.el.remove();
  }
}

/* ---------- a tank on the page */

class Tank {
  constructor(el) {
    this.el = el;
    const config = JSON.parse(el.dataset.tank);
    this.config = config;
    this.size = DESIGN.sizes[config.size || 'small'];
    this.rate = 1 + (config.speed ?? -1) / 8;
    this.fishScale = [0.75, 0.9, 1, 1.1, 1.25][(config.fishSize ?? -1) + 2];
    this.scene = el.querySelector('.tank__scene');
    this.u = el.clientWidth / this.size.w || 1;
    this.offset = (hash(config.id || 'tank') % 100000) / 7;
    this.active = false;
    this.breaths = [];
    this.nextBreath = now() + 2 + Math.random() * 4;
    this.reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    this.layoutProps();
    this.makeFish();
    this.comp = el.querySelector('.tank__comp');
    if (this.comp) this.tickComplication();

    new ResizeObserver(() => {
      this.u = el.clientWidth / this.size.w || 1;
      this.draw(now());
    }).observe(el);
    this.draw(now());
  }

  layoutProps() {
    for (const placed of this.config.props || []) {
      const f = propFrame(placed.prop, placed, this.size);
      const img = document.createElement('img');
      img.className = 'tank__prop';
      img.src = placed.prop.image;
      img.alt = '';
      img.decoding = 'async';
      img.style.left = `${(f.x / this.size.w) * 100}%`;
      img.style.top = `${(f.y / this.size.h) * 100}%`;
      img.style.width = `${(f.w / this.size.w) * 100}%`;
      img.style.height = `${(f.h / this.size.h) * 100}%`;
      if (placed.flipped) img.style.transform = 'scaleX(-1)';
      this.scene.appendChild(img);
    }
  }

  makeFish() {
    this.fish = [];
    const taken = [];
    (this.config.fish || []).forEach((entry, index) => {
      const species = entry.species;
      const scale = species.tankScale * this.fishScale;
      const paceWidth = swimArea(species, scale, DESIGN.sizes.small).w;
      // Deal the fish a lane clear of the others', as the app's SwimSpread does: try a few
      // seeds until this one's depth is a lane's width from every fish already in.
      let pattern = null;
      const base = entry.seed || `${this.config.id || 'tank'}-${index}-${species.id}`;
      for (let attempt = 0; attempt < 12; attempt++) {
        const candidate = new SwimPattern(attempt ? `${base}#${attempt}` : base, species.swimStyle, this.rate, paceWidth);
        pattern = candidate;
        if (RECIPES[species.swimStyle].bed || taken.every((d) => Math.abs(d - candidate.depth) >= 0.14)) break;
      }
      taken.push(pattern.depth);
      const img = document.createElement('img');
      img.className = 'tank__fish';
      img.src = species.image;
      img.alt = entry.name ? `${entry.name}, a ${species.name}` : species.name;
      img.decoding = 'async';
      img.style.setProperty('--g', String(DESIGN.glyph * scale));
      this.scene.appendChild(img);
      this.fish.push({ species, scale, pattern, el: img, area: swimArea(species, scale, this.size), lastPose: null });
    });
  }

  draw(t) {
    const u = this.u;
    for (const f of this.fish) {
      const pose = f.pattern.pose(t + this.offset, f.area);
      f.lastPose = pose;
      const g = DESIGN.glyph * f.scale * u;
      const flip = pose.facesRight ? ' scaleX(-1)' : '';
      const lean = pose.lean ? ` rotate(${pose.lean}rad)` : '';
      f.el.style.transform = `translate(${pose.x * u - g / 2}px, ${pose.y * u - g / 2}px)${flip}${lean}`;
    }
    for (const b of this.breaths) b.draw(t, u);
  }

  breathe(t) {
    if (this.reduced || !this.config.bubble || this.fish.length === 0) return;
    if (t < this.nextBreath) return;
    this.nextBreath = t + 5 + Math.random() * 7;
    const f = this.fish[Math.floor(Math.random() * this.fish.length)];
    if (!f.lastPose || RECIPES[f.species.swimStyle].bed) return;
    const g = DESIGN.glyph * f.scale;
    const dir = f.lastPose.facesRight ? 1 : -1;
    const mouth = { x: f.lastPose.x + dir * 0.42 * g, y: f.lastPose.y + 0.04 * g };
    this.breaths.push(new Breath(mouth, t, f.lastPose.facesRight ? 0 : Math.PI, this.config.bubble, this.scene));
  }

  tick(t) {
    this.breathe(t);
    this.draw(t);
    this.breaths = this.breaths.filter((b) => {
      if (t > b.end) {
        b.remove();
        return false;
      }
      return true;
    });
  }

  tickComplication() {
    const kind = this.comp.dataset.kind;
    const d = new Date();
    if (kind === 'time') {
      this.comp.textContent = d.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' });
    } else if (kind === 'date') {
      this.comp.textContent = d.toLocaleDateString(undefined, { weekday: 'short', day: 'numeric', month: 'short' });
    }
    setTimeout(() => this.tickComplication(), 15000);
  }
}

const now = () => Date.now() / 1000;

/* ---------- the loop: one frame for every tank that's on screen */

const tanks = new Set();
const visible = new Set();
let frame = 0;

function loop() {
  frame = 0;
  if (document.hidden || visible.size === 0) return;
  const t = now();
  for (const tank of visible) tank.tick(t);
  frame = requestAnimationFrame(loop);
}

function wake() {
  if (!frame && !document.hidden && visible.size) frame = requestAnimationFrame(loop);
}

const observer = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      const tank = e.target.__tank;
      if (!tank) continue;
      if (e.isIntersecting && !tank.reduced) visible.add(tank);
      else visible.delete(tank);
    }
    wake();
  },
  { rootMargin: '80px' }
);

document.addEventListener('visibilitychange', wake);

export function mount(root = document) {
  for (const el of root.querySelectorAll('[data-tank]')) {
    if (el.__tank) continue;
    const tank = new Tank(el);
    el.__tank = tank;
    tanks.add(tank);
    observer.observe(el);
  }
  wake();
}

/** Repaint a tank in another style: swaps the palette variables and the widget look. */
export function restyle(el, vars) {
  el.setAttribute('style', `${el.getAttribute('style').replace(/--w0:.*?--hl:[^;]*;?/, '')};${vars}`);
}

mount();
