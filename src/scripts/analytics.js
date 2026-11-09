/* Visitor statistics, with Google Analytics 4: how many people visit, where they come from
   and which links and buttons they press. Only on the page when src/data/app.json has a
   googleAnalyticsId (see Base.astro and Analytics.astro).

   Google Analytics tells one visitor from another with a random identifier kept in cookies,
   so who is counted is decided here, before anything is fetched from Google:

   - In Europe (the EEA, the United Kingdom and Switzerland, told from the browser's time
     zone) nothing is loaded until the visitor allows it in the bar this file shows. As a
     second guard, Google's own consent mode is told to set no cookies for anyone it places
     in those countries, whatever the time zone said.
   - A browser that sends Global Privacy Control or Do Not Track is neither counted nor asked.
   - Elsewhere counting starts at once.
   - Anyone can change their mind with the switch on the privacy page. The choice is kept
     in localStorage (KEY), not in a cookie.

   Nothing is counted for an automated browser or a crawler. On a local address (npm run dev,
   npm run preview) nothing is fetched from Google either: what would have been sent is
   printed to the console instead, at its Verbose level. */

import { googleAnalyticsId as ID } from '../data/app.json';

const KEY = 'companions-statistics';

/** The bar's words in the page's language, written into the page by Analytics.astro. */
const WORDS = JSON.parse(document.getElementById('consent-words')?.textContent || 'null') ?? {
  label: 'Website statistics',
  html: '<strong>May this website count your visit?</strong> It would use Google Analytics, which sets cookies, to see which pages and buttons are used. Never for advertising. <a href="/privacy/#website">How it works</a>',
  no: 'No thanks',
  allow: 'Allow',
};

/** Where the law asks for a yes before an analytics cookie: the EU and its outermost regions,
    the rest of the EEA, the United Kingdom and Switzerland. */
const EUROPE = [
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT',
  'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'AX', 'GF', 'GP', 'MF', 'MQ', 'RE', 'YT', 'IS', 'LI', 'NO', 'GB', 'CH',
];

/** The same places as the browser's clock names them. "Europe/" takes in a few countries
    outside those laws, which only means they are asked too; so is a browser with no zone, or
    with one that hides where it is (UTC, as privacy browsers report). */
const EUROPE_ZONES =
  /^(Europe|Arctic|Etc)\/|^(UTC|GMT)$|^Atlantic\/(Azores|Canary|Faroe|Madeira|Reykjavik)$|^Asia\/(Famagusta|Nicosia)$|^America\/(Cayenne|Guadeloupe|Marigot|Martinique)$|^Indian\/(Mayotte|Reunion)$/;

function asksFirst() {
  let zone = '';
  try {
    zone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
  } catch {
    /* no zone: ask */
  }
  return !zone || EUROPE_ZONES.test(zone);
}

const local = /^(localhost|[\d.]+|\[.*\])$|\.local$/.test(location.hostname);
const automated = navigator.webdriver || /bot|crawl|spider|headless|lighthouse/i.test(navigator.userAgent);
const signalsNo = navigator.globalPrivacyControl === true || navigator.doNotTrack === '1';

/** 'on', 'off', or null while the visitor has not said. */
let choice = null;
try {
  const stored = localStorage.getItem(KEY);
  if (stored === 'on' || stored === 'off') choice = stored;
} catch {
  /* storage is blocked: the choice lasts for this page */
}
function remember(value) {
  choice = value;
  try {
    localStorage.setItem(KEY, value);
  } catch {
    /* as above */
  }
}

/** Whether this page is being counted right now. */
let counting = false;
/** Whether Google's tag has been set going on this page. */
let started = false;

/* Google's tag takes its commands from this queue, and reads each one as the `arguments`
   object itself, so this cannot be an arrow function or push an array. */
window.dataLayer = window.dataLayer || [];
const gtag = local
  ? (...command) => console.debug('Statistics (not sent from a local address):', ...command)
  : function () {
      window.dataLayer.push(arguments);
    };

const NO_ADVERTISING = { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' };

function start() {
  counting = true;
  window[`ga-disable-${ID}`] = false;
  if (started) {
    gtag('consent', 'update', { analytics_storage: 'granted' });
    return;
  }
  started = true;
  // Consent has to be in the queue before the tag is configured. Advertising is never on.
  gtag('consent', 'default', { ...NO_ADVERTISING, analytics_storage: 'granted' });
  gtag('consent', 'default', { ...NO_ADVERTISING, analytics_storage: 'denied', region: EUROPE });
  if (choice === 'on') gtag('consent', 'update', { analytics_storage: 'granted' });
  gtag('js', new Date());
  gtag('config', ID, { allow_google_signals: false, allow_ad_personalization_signals: false });
  if (local) return;
  const tag = document.createElement('script');
  tag.async = true;
  tag.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ID)}`;
  document.head.append(tag);
}

function stop() {
  counting = false;
  window[`ga-disable-${ID}`] = true;
  if (started) gtag('consent', 'update', { analytics_storage: 'denied' });
  forgetCookies();
}

/** Removes Google Analytics' cookies (_ga and _ga_<stream>), on whichever of this host's
    domains the tag managed to set them. */
function forgetCookies() {
  const names = document.cookie
    .split(';')
    .map((pair) => pair.split('=')[0].trim())
    .filter((name) => name === '_ga' || name.startsWith('_ga_'));
  const labels = location.hostname.split('.');
  const domains = ['', ...labels.slice(0, -1).map((_, i) => labels.slice(i).join('.'))];
  for (const name of names) {
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ''}`;
    }
  }
}

/* ---------- Asking ---------- */

/* The bar is made here, not written into the pages, so that the pages' HTML stays what
   people came to read. The two answers look the same on purpose: neither is the easy one. */
function ask() {
  const bar = document.createElement('aside');
  bar.className = 'consent';
  bar.setAttribute('aria-label', WORDS.label);
  bar.setAttribute('data-nosnippet', '');
  bar.innerHTML = `
    <p class="consent__text">${WORDS.html}</p>
    <div class="consent__answers">
      <button class="btn btn--small" type="button" data-answer="off"></button>
      <button class="btn btn--small" type="button" data-answer="on"></button>
    </div>`;
  bar.querySelector('[data-answer="off"]').textContent = WORDS.no;
  bar.querySelector('[data-answer="on"]').textContent = WORDS.allow;
  bar.addEventListener('click', (e) => {
    const answer = e.target.closest('[data-answer]')?.dataset.answer;
    if (answer) decide(answer);
  });
  const skip = document.querySelector('.skip-link');
  if (skip) skip.after(bar);
  else document.body.prepend(bar);
}

function decide(answer) {
  remember(answer);
  if (answer === 'on') start();
  else stop();
  document.querySelector('.consent')?.remove();
  showSetting();
}

/* The switch on the privacy page: <p data-statistics-setting hidden> holding a
   [data-statistics-state] word and a button, with data-on, data-off, data-turn-on and
   data-turn-off giving the words for each state. */
const setting = document.querySelector('[data-statistics-setting]');

function showSetting() {
  if (!setting) return;
  // The words for both states are on the element, in the page's language (privacy.astro).
  const words = setting.dataset;
  setting.querySelector('[data-statistics-state]').textContent = counting ? words.on : words.off;
  setting.querySelector('button').textContent = counting ? words.turnOff : words.turnOn;
  setting.hidden = false;
}

/* ---------- Clicks ---------- */

/** What a visitor would call the thing they pressed: its accessible name, a card's heading,
    the words showing on it (innerText leaves out the ones CSS hides, as on the top bar's
    Download button), or its picture's description. */
function label(el) {
  const text =
    el.getAttribute('aria-label') ||
    el.querySelector('h2, h3, h4')?.textContent ||
    el.innerText ||
    el.textContent ||
    el.querySelector('img[alt]')?.alt ||
    '';
  return text.replace(/\s+/g, ' ').trim().slice(0, 100);
}

/** The part of the page it is in: the top bar, the hero, the footer, a home page section by
    its id ("fish", "questions"…), or just the page. */
function area(el) {
  if (el.closest('.topbar')) return 'top bar';
  if (el.closest('.hero')) return 'hero';
  if (el.closest('footer')) return 'footer';
  return el.closest('section[id]')?.id || 'page';
}

/* One listener for every link, button and question on the site, so new ones are counted
   without being marked up. Three events reach Google Analytics:

     app_store_click   a link to the App Store: the one that matters
     email_click       a mailto: link
     button_click      everything else

   each with link_text (the label), link_url (where it leads; left out for email, so that no
   address is sent) and content_type (the area). Those three parameter names are ones Google
   Analytics already has dimensions for: Link text, Link URL and Content type. */
function countClick(e) {
  if (!counting || !(e.target instanceof Element)) return;
  const el = e.target.closest('a[href], button, summary');
  if (!el || el.closest('.consent, [data-statistics-setting]')) return;
  // Opening a question is interest in it; closing it says nothing.
  if (el.tagName === 'SUMMARY' && el.parentElement.open) return;
  const url = el.tagName === 'A' ? el.href : '';
  const email = url.startsWith('mailto:');
  const name = /^https?:\/\/(apps|itunes)\.apple\.com\//.test(url) ? 'app_store_click' : email ? 'email_click' : 'button_click';
  const details = { link_text: label(el), content_type: area(el) };
  if (url && !email) details.link_url = url;
  gtag('event', name, details);
}

/* ---------- Go ---------- */

if (!automated) {
  if (choice === 'on' || (choice === null && !signalsNo && !asksFirst())) start();
  else if (choice === null && !signalsNo) ask();
  showSetting();
  setting?.querySelector('button').addEventListener('click', () => decide(counting ? 'off' : 'on'));
  // Capturing, so a click still counts if something below stops it travelling.
  document.addEventListener('click', countClick, true);
}
