/*
 * The hero's scroll choreography.
 *
 * The hero is a tall section with a sticky, viewport-high stage. As the page scrolls
 * through the first viewport-height, progress runs 0 → 1: the phone glides from the
 * middle to the right and shrinks, and the headline slides in from the left. Everything
 * is applied through CSS custom properties on the hero (see Hero.astro), so the motion is
 * one transform per element and runs on the compositor.
 *
 * Without JavaScript, or with Reduce Motion on, the hero shows its finished state.
 */

const hero = document.querySelector('[data-hero]');
if (hero) {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  const topbar = document.querySelector('[data-topbar]');

  const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
  const clamp = (x) => Math.min(1, Math.max(0, x));

  /* Where the phone starts and ends, in pixels, for this viewport. */
  function measure() {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const narrow = vw < 768;
    const tablet = vw >= 768 && vw < 1100;

    // The phone's layout width: about 29% of a wide viewport, most of a narrow one.
    const width = narrow ? Math.min(vw * 0.78, 360) : Math.min(Math.max(vw * 0.29, 320), 620);
    const height = (width * 920) / 450;
    const startTop = narrow ? vh * 0.19 : vh * 0.27;
    hero.style.setProperty('--phone-w', `${width}px`);
    hero.style.setProperty('--phone-top', `${startTop}px`);

    let scale, dx, dy;
    if (narrow) {
      // The phone shrinks and settles lower, under the headline.
      scale = Math.min(0.6, (vh * 0.48) / height);
      const endTop = vh * 0.54;
      dx = 0;
      dy = endTop - startTop + ((scale - 1) * height) / 2;
    } else {
      // The phone fits the viewport's height on the right, beside the headline.
      const endHeight = Math.min(vh * 0.8, height);
      scale = endHeight / height;
      const centreX = tablet ? vw * 0.72 : vw * 0.735;
      dx = centreX - vw / 2;
      dy = vh / 2 - (startTop + height / 2);
    }
    hero.style.setProperty('--s1', String(scale));
    hero.style.setProperty('--dx', `${dx}px`);
    hero.style.setProperty('--dy', `${dy}px`);
  }

  let ticking = false;
  function update() {
    ticking = false;
    const vh = window.innerHeight;
    const raw = clamp(window.scrollY / vh);
    const p = ease(raw);
    const tp = ease(clamp((raw - 0.35) / 0.55));
    hero.style.setProperty('--p', p.toFixed(4));
    hero.style.setProperty('--tp', tp.toFixed(4));
    if (topbar) topbar.style.setProperty('--tp', tp.toFixed(4));
    hero.classList.toggle('hero--settled', raw >= 1);
  }
  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  function start() {
    if (reduce.matches) {
      hero.classList.add('hero--static');
      hero.style.setProperty('--p', '1');
      hero.style.setProperty('--tp', '1');
      if (topbar) topbar.style.setProperty('--tp', '1');
      return;
    }
    hero.classList.remove('hero--static');
    hero.classList.add('hero--live');
    measure();
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', () => {
      measure();
      update();
    });
  }

  start();
  reduce.addEventListener('change', start);
}
