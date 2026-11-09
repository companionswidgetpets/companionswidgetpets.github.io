/* Small behaviours shared by every page: the top bar's menu on narrow screens, and the
   frosted bar picking up a shadow once the page has scrolled. */

const topbar = document.querySelector('[data-topbar]');
if (topbar) {
  const toggle = topbar.querySelector('[data-menu-toggle]');
  const menu = topbar.querySelector('[data-menu]');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = topbar.classList.toggle('topbar--open');
      toggle.setAttribute('aria-expanded', String(open));
      menu.hidden = !open;
    });
    menu.hidden = true;
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && topbar.classList.contains('topbar--open')) toggle.click();
    });
  }
  const onScroll = () => topbar.classList.toggle('topbar--scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* Style pickers: buttons with data-pick-style="<id>" inside a [data-style-picker] repaint
   every tank in the same section (see Tank.astro for the variables). */
for (const picker of document.querySelectorAll('[data-style-picker]')) {
  const section = picker.closest('[data-style-scope]') || document;
  const buttons = picker.querySelectorAll('[data-pick-style]');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((b) => b.setAttribute('aria-pressed', String(b === button)));
      const vars = button.dataset.vars;
      const name = button.dataset.name;
      for (const tank of section.querySelectorAll('[data-tank]')) {
        tank.style.cssText = tank.style.cssText.replace(/--w0:[^;]*;?/, '').replace(/--w25:[^;]*;?/, '')
          .replace(/--w60:[^;]*;?/, '').replace(/--w100:[^;]*;?/, '').replace(/--bed:[^;]*;?/, '')
          .replace(/--shadow:[^;]*;?/, '').replace(/--shadow-a:[^;]*;?/, '').replace(/--hl:[^;]*;?/, '') + ';' + vars;
      }
      for (const label of section.querySelectorAll('[data-style-name]')) label.textContent = name;
      if (button.dataset.tint) section.style.setProperty('--demo-tint', button.dataset.tint);
    });
  });
}
