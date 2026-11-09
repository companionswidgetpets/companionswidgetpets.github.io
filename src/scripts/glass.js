/* Liquid glass for the top bar, the buttons and the containers.

   The glass itself is the vendored Liquid Glass for the Web library (src/vendor/liquid-glass,
   MIT). This file only decides what is glass and how much of it each browser gets: it slips
   one of the library's <lg-panel> elements behind each button and container as its body, and
   turns the top bar's links into the library's <lg-navbar>. The pages stay plain HTML: the
   links and buttons are the same elements with or without their glass, and until an element
   has a glass body it wears the frosted stand-in that styles/glass.css gives it.

   Three levels, chosen once per page load (MODE):

   refract  Chrome and Edge on a computer. Everything bends light. Glass in the page
            refracts an aligned copy of the page's background (BACKDROP); the top bar, which
            floats over the scrolling page, refracts the live page.
   frost    Safari and Firefox, so every iPhone and iPad. The library's frosted mode: blur,
            tint and rim, with the same springs. These browsers cannot refract the live page
            at all, and refracting a copy costs WebKit 60 ms for a button and up to half a
            second for a card each time one appears (measured: the home page scrolled at
            14 frames a second), so nothing here asks for it.
   none     Reduce Transparency, Increase Contrast or a forced-colours theme is on, or it is
            Chrome on a phone, where refraction is untested. The stand-ins stay. */

import { createSpring, engine } from '../vendor/liquid-glass/components.js';

const prefers = (query) => matchMedia(query).matches;
const MODE =
  prefers('(prefers-reduced-transparency: reduce)') || prefers('(prefers-contrast: more)') || prefers('(forced-colors: active)')
    ? 'none'
    : engine !== 'blink'
      ? 'frost'
      : prefers('(pointer: fine)')
        ? 'refract'
        : 'none';

/** The element whose own CSS background is the water (styles/glass.css): what glass refracts. */
const BACKDROP = 'main';
/** Parts of the page that paint over the water themselves. Glass inside them refracts the
    live page instead, as the top bar does. */
const ISLANDS = '.hero, [data-style-scope]';

/** What turns to glass, and as which kind. */
const TARGETS = [
  ['.topbar__pill, .topbar__sheet', 'bar'],
  ['.btn, .chip, .topbar__menu-toggle', 'button'],
  ['.card, .qa, .toc, .prose .note', 'panel'],
];

/* The optics are the library's own for its navbar, button and panel (its attribute names),
   but for the bar's blur: the page's text scrolls under it, and at the library's 1 px the
   links could not be read over a heading. */
const KINDS = {
  bar: { refraction: 16, bezel: 0.8, curvature: 3, chroma: 0.1, blur: 9, specular: 0.55, 'specular-width': 1.5 },
  button: { refraction: 14, bezel: 0.8, curvature: 3, chroma: 0.12, blur: 0, specular: 0.6, 'specular-width': 1.5 },
  panel: { refraction: 24, bezel: 0.3, curvature: 4, chroma: 0.1, blur: 2, specular: 0.5, 'specular-width': 2 },
};

/** host element -> its glass body, once it has had one */
const bodies = new WeakMap();

function attach(host) {
  let body = bodies.get(host);
  if (!body) {
    body = document.createElement('lg-panel');
    body.className = 'glass__body';
    body.setAttribute('aria-hidden', 'true');
    body.setAttribute('radius', parseFloat(getComputedStyle(host).borderTopLeftRadius) || 0);
    for (const [name, value] of Object.entries(KINDS[host.dataset.glass])) body.setAttribute(name, value);
    // With no backdrop to copy, the library refracts the live page where the browser can
    // (refract mode) and frosts where it cannot (frost mode).
    if (MODE === 'frost' || host.closest(ISLANDS)) body.setAttribute('backdrop', 'none');
    bodies.set(host, body);
  }
  if (body.isConnected) return;
  host.classList.add('glass');
  host.append(body);
}

function detach(host) {
  bodies.get(host)?.remove();
  host.classList.remove('glass');
}

/* Only glass near the screen is live: every live body is a filter, and a long page has dozens
   of cards. */
const nearScreen = new IntersectionObserver(
  (entries) => {
    for (const e of entries) (e.isIntersecting ? attach : detach)(e.target);
  },
  { rootMargin: '80% 0px' }
);

/* The glass squashes under a press, as the library's own button does (a little less, to stay
   inside a panel's margin). */
function squish(host) {
  const spring = createSpring(0, (p) => bodies.get(host)?.surface?.setDelta({ x: -4 * p, y: 1.5 * p, w: 8 * p, h: -3 * p }), {
    stiffness: 600,
    damping: 36,
  });
  host.addEventListener('pointerdown', () => spring.set(1));
  for (const type of ['pointerup', 'pointercancel', 'pointerleave']) host.addEventListener(type, () => spring.set(0));
}

/* A card that lifts on hover moves over its backdrop. The library re-aligns the refracted
   copy on scroll and resize only, so follow the lift here. */
function followTransforms(host) {
  let frame = 0;
  let until = 0;
  const tick = (now) => {
    bodies.get(host)?.surface?.update();
    frame = now < until ? requestAnimationFrame(tick) : 0;
  };
  host.addEventListener('transitionrun', (e) => {
    if (e.target !== host || !/transform|translate/.test(e.propertyName)) return;
    until = performance.now() + 400;
    frame ||= requestAnimationFrame(tick);
  });
}

function glassify() {
  if (MODE === 'refract') document.querySelector(BACKDROP)?.setAttribute('data-lg-backdrop', '');
  for (const [selector, kind] of TARGETS) {
    for (const host of document.querySelectorAll(selector)) {
      if (host.dataset.glass) continue;
      host.dataset.glass = kind;
      if (kind === 'button') squish(host);
      if (MODE === 'refract') followTransforms(host);
      nearScreen.observe(host);
    }
  }
}

/* The top bar's links become the library's navbar: a glass lens slides to the link under the
   pointer and rests on the current page's. */
function navbar() {
  const list = document.querySelector('.topbar__nav ul');
  if (!list) return;
  const links = [...list.querySelectorAll('a')];
  const bar = document.createElement('lg-navbar');
  bar.setAttribute('tone', 'light');
  bar.setAttribute('role', 'none'); // the <nav> around it is already the landmark
  bar.append(...links);
  list.replaceWith(bar);

  // The library rests its lens on the first link when none is the current page, which would
  // mark the wrong page here. Keep it out of sight until the pointer or focus arrives, and
  // have it appear on the link that was entered rather than slide in from the first.
  if (links.some((a) => a.getAttribute('aria-current') === 'page')) return;
  bar.classList.add('is-idle');
  let inside = false;
  bar.addEventListener(
    'pointerenter',
    (e) => {
      if (e.target === bar) return;
      if (!inside) bar.moveTo(links.indexOf(e.target), true);
      inside = true;
    },
    true
  );
  bar.addEventListener('pointerleave', () => (inside = false));
}

document.documentElement.dataset.glassMode = MODE; // for anyone checking in the inspector
if (MODE !== 'none') {
  glassify();
  navbar();
}
