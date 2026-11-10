/**
 * Every word of the website that is not in a Markdown file under src/content/, in English.
 * This file is the source: each other language has a file of exactly the same shape beside
 * it (ja.ts, de.ts …), checked against this one by `npm run check:i18n`.
 *
 * Conventions:
 * - A key ending in `Html` is put on the page as HTML and may hold tags; everything else is
 *   plain text (write real characters, never entities such as &amp;).
 * - A function takes the facts that vary (a count, a name, a date already written out in the
 *   reader's language, a link) and returns the finished sentence, so each language can
 *   order its words and choose its plurals freely.
 * - Links are handed in as arguments, already pointing at the right language, so no path
 *   is ever written out in these files.
 * - Fish, pack, prop and style names are not here: they come from the app, in
 *   src/data/*.json, in every language.
 */

const en = {
  /** How this language writes a few small things. */
  format: {
    /** Between the items of a plain list: "Minimal, Deep Ocean, Pond". */
    listSeparator: ', ',
  },

  app: {
    /** The app's name on the App Store. */
    name: 'Companions - Widget Pets',
    tagline: 'A tiny aquarium on your Home Screen.',
    subtitle: 'Your fish swim around right on your widget, all day long.',
    oneLiner:
      'Companions is a free iPhone app that puts a little animated aquarium in a Home Screen widget: pick your fish, name them, and watch them swim every time you look at your phone.',
    madeIn: 'South Korea',
  },

  /** The link preview card (public/og/<language>.png, drawn by `npm run og`). */
  og: {
    titleHtml: 'A tiny aquarium on your Home&nbsp;Screen.',
    text: 'Your fish swim around right on your widget, all day long.',
    facts: 'Free on the App Store · iPhone, iPad, Mac and Apple Watch',
    imageAlt: (appName: string, tagline: string) => `${appName}: ${tagline}`,
  },

  /** Words that search engines read but visitors do not see (structured data). */
  ld: {
    jobTitle: 'Independent app developer',
    /** Other things people call the app when they search for it. */
    alternateNames: ['Companions aquarium widget', 'Companions fish tank widget'],
    offer:
      'Free download with the starter fish and the Freshwater Pack; more fish come in one-time packs or the All Fish unlock.',
    features: (c: { species: number; packs: number; props: number }) => [
      'Animated aquarium Home Screen widget in small, medium and large',
      `${c.species} fish species in ${c.packs} packs, each tank keeps up to five fish`,
      `Eight tank styles and ${c.props} props to arrange`,
      'Time, date, weather, step goal and Moon phase complications in a tank corner',
      'StandBy, Apple Watch and Mac (iPhone widgets) support',
      'Share tanks with friends as codes or pictures',
      'No account, no advertising, no tracking',
    ],
  },

  common: {
    skipToContent: 'Skip to content',
    breadcrumb: 'Breadcrumb',
    updated: (date: string) => `Updated ${date}`,
  },

  nav: {
    /** Accessible names of the navigation landmarks. */
    site: 'Site',
    homeLabel: 'Companions home',
    menu: 'Menu',
    /** The top bar. Keep these to a word or two: they share one narrow pill. */
    help: 'Help',
    blog: 'Blog',
    fish: 'Fish',
    styles: 'Styles',
    whatsNew: "What's new",
    support: 'Support',
    press: 'Press kit',
    /** The App Store button in the top bar, and its one-word form on small phones. */
    download: 'Get the app',
    get: 'Get',
  },

  footer: {
    facts: (os: string) => `Free · ${os} or later · iPhone, iPad, Mac and Apple Watch`,
    columnSite: 'Companions',
    columnAbout: 'About',
    home: 'Home',
    help: 'Help and questions',
    blog: 'Blog',
    packs: 'Fish and packs',
    styles: 'Tank styles',
    whatsNew: "What's new",
    press: 'Press kit',
    support: 'Support',
    privacy: 'Privacy policy',
    email: 'Email us',
    /** The line under the two faces, as at the foot of the app's Settings page. */
    madeWith: 'Developed with ♡ in South Korea',
    legal: (year: number, owner: string) =>
      `© ${year} ${owner}. Apple, the Apple logo, iPhone, iPad, Mac, Apple Watch and App Store are trademarks of Apple Inc.`,
    /** The accessible name of the list of languages. */
    language: 'Language',
  },

  badge: {
    label: 'Download Companions on the App Store',
    alt: 'Download on the App Store',
  },

  /** A live tank's description for screen readers. */
  tank: {
    label: (size: 'small' | 'medium' | 'large' | 'watch', style: string, count: number) =>
      `A ${size} ${style} tank with ${count} fish`,
    /** A fish that has been given a name: "Bubbles, a Clownfish". */
    namedFish: (name: string, species: string) => `${name}, a ${species}`,
  },

  hero: {
    label: 'Introduction',
    /** The headline, in two lines. */
    titleHtml: 'A tiny aquarium<br />on your Home&nbsp;Screen.',
    tankLabel:
      'The Companions widget: a clownfish, a Moorish idol, a regal tang and a seahorse swimming among ferns and a sponge',
    phoneAlt: 'An iPhone Home Screen with the Companions aquarium widget in the top-left corner',
    scroll: 'Scroll',
  },

  home: {
    title: (appName: string) => `${appName}: a tiny aquarium on your iPhone Home Screen`,
    description: (species: number) =>
      `Companions is a free iPhone aquarium widget: pick from ${species} fish, name them, and watch them swim on your Home Screen, in StandBy, on your Mac and on Apple Watch. No feeding, no cleaning, no guilt.`,

    places: {
      kicker: 'Always in view',
      title: 'It lives where you look.',
      lead: 'Add the widget once and your fish are there every time you glance at your phone. Same fish, same water, no need to open the app.',
      homeScreen: {
        title: 'Home Screen',
        text: 'Small, medium or large, in any of eight styles. Keep one tank or a shelf of them, and a different set of fish in each size.',
      },
      standby: {
        title: 'StandBy',
        text: 'Stand your iPhone on its side while it charges and the tank keeps you company through the night, beside the clock.',
        /** The date under the clock in the little StandBy picture, as iOS writes it. */
        date: 'Tue 1',
      },
      watch: {
        title: 'Apple Watch',
        text: 'The Companions watch app shows your small tank on your wrist, synced from your iPhone. The watch keeps its own clock, so the tank is just fish.',
      },
      ipad: {
        title: 'iPad',
        text: 'A full, standalone Companions app for iPad. Build your aquarium on the big screen and add widgets to your Home Screen, with no iPhone needed.',
      },
      mac: {
        title: 'Mac',
        text: 'Bring your iPhone widgets to your Mac desktop with Continuity, or add them from the Mac app. Your fish keep you company between windows.',
      },
    },

    fish: {
      kicker: (species: number, packs: number) => `${species} species in ${packs} packs`,
      title: 'Meet the fish.',
      lead: 'Every tank starts with a Tang, a Sardine and a Puffer, and the Freshwater Pack comes free. The rest arrive in packs you buy once and keep, or all together with All Fish. Each fish swims in its own way, at its own pace, and lets out the odd little bubble.',
      more: 'Every fish, every pack',
    },

    customize: {
      kicker: 'Make it yours',
      title: 'Your tank, your way.',
      lead: 'Eight waters, nineteen props to arrange however you like, something useful in the corner, and an app icon to match.',
      props: {
        kicker: (count: number) => `${count} props`,
        title: 'Decorate the bed',
        text: 'Ferns, corals, shells, a pineapple house, a Moai. Drag them where you want them, resize, flip, undo. Save as many tanks as you like and swap between them.',
      },
      complications: {
        kicker: 'Complications',
        title: 'Something useful in the corner',
        text: "The time, the date, today's weather, your step goal or tonight's Moon, in white over the water. Included with All Fish.",
      },
      icons: {
        kicker: 'Six app icons',
        title: 'An icon to match',
        /** The six app icons, by the names the app gives them in Settings. */
        names: { minimal: 'Minimal', twilight: 'Twilight', pond: 'Pond', reed: 'Reed', blossom: 'Blossom', dark: 'Dark' },
        text: (names: string) => `${names}: pick the one that suits your Home Screen, in Settings.`,
      },
    },

    calm: {
      kicker: 'The easy kind of pet',
      title: 'No feeding. No cleaning. No guilt.',
      lead: 'Just a few bright companions who are always there.',
      cards: [
        {
          title: 'Nothing ever dies',
          text: 'Leave for a week, a month, a year. Your fish are exactly as you left them, swimming.',
        },
        {
          title: 'No account, no ads',
          text: 'Nothing to sign up for, nothing tracking you, nothing to buy to keep playing. Your tank stays on your device.',
        },
        {
          title: 'Feed them if you like',
          text: 'Tap the fork and knife, pinch some food into the water and watch them chase it. Skip it and nobody minds.',
        },
        {
          title: 'They say hello',
          text: 'Some mornings a fish greets you as the app opens. Tap the glass and a puff of bubbles rises. Name them after anyone you like.',
        },
      ],
    },

    questions: {
      kicker: 'Questions, answered',
      title: 'Before you ask.',
      readFull: 'Read the full answer',
      all: 'All questions and answers',
      /** The link after each answer in the structured data search engines read. */
      readMore: 'Read more',
    },

    blog: {
      kicker: 'From the blog',
      title: 'Ideas for a happier Home Screen.',
      all: 'Read the blog',
    },
  },

  /** The three widget sizes with the style picker, on the home page. */
  sizes: {
    kicker: 'Three sizes, eight waters',
    title: 'One tank. Any widget size.',
    lead: 'The widget comes in small, medium and large, and each size keeps its own fish. Pick a style and every tank changes to match.',
    pickerLabel: 'Tank style',
    large: 'Large',
    medium: 'Medium',
    small: 'Small',
    /** `style` is the chosen style's name, already in bold; the page swaps it as the
        visitor picks another, so the sentence must read well around any style's name. */
    captionHtml: (style: string) =>
      `The ${style} tank in all three sizes. Change the style once and every widget on your Home Screen follows.`,
  },

  packGrid: {
    comesWithApp: 'Comes with the app',
    pack: 'Pack',
  },

  styleRow: {
    label: (style: string) => `The ${style} tank style`,
  },

  help: {
    title: 'Help and questions',
    description:
      'Answers to common questions about the Companions aquarium widget: adding the widget to your Home Screen, fish and packs, tank styles, complications, StandBy, Apple Watch, Mac, purchases and privacy.',
    kicker: 'Help',
    h1: 'Questions, answered.',
    /** `email` is the support address, already a link. */
    leadHtml: (email: string) =>
      `Everything people ask about Companions, in one place. Can't find yours? Email ${email} and a person will answer.`,
    categoriesLabel: 'Categories',
    categories: {
      'getting-started': 'Getting started',
      widgets: 'The widget',
      'fish-and-packs': 'Fish and packs',
      'tanks-and-styles': 'Tanks, styles and props',
      complications: 'Complications',
      'other-devices': 'StandBy, Apple Watch, Mac and iPad',
      'privacy-and-purchases': 'Purchases and privacy',
      troubleshooting: 'When something looks wrong',
    },
    fullAnswer: 'Full answer',
    related: 'Related',
    /** What kind of page a related link leads to. */
    kindQuestion: 'Question',
    kindArticle: 'Article',
    kindPage: 'Page',
    stuckTitle: 'Still stuck?',
    /** `email` is the support address, already a link; `helpUrl` is the help index. */
    stuckHtml: (email: string, helpUrl: string) =>
      `Email ${email} with your iPhone model and iOS version and we'll sort it out. <a href="${helpUrl}">Back to all questions</a>.`,
  },

  blog: {
    title: 'Blog: iPhone widget ideas, app picks and guides',
    description:
      'The best aquarium, pet and cute widget apps for iPhone, aesthetic Home Screen ideas, fish facts and step-by-step guides to the Companions aquarium widget.',
    kicker: 'Blog',
    h1: 'Ideas for a happier Home Screen.',
    lead: 'Widget and pet apps worth trying, Home Screen ideas, fish facts and step-by-step guides, from the two people who make Companions.',
    /** The accessible name of the row of topic links. */
    topicsLabel: 'Topics',
    /** The blog's topics: each one's name, and the line under its heading on the blog's page. */
    categories: {
      'app-picks': {
        name: 'App picks',
        lead: 'Widget, pet and cozy apps worth a place on your iPhone.',
      },
      'home-screen': {
        name: 'Home Screen ideas',
        lead: 'Colours, layouts and widgets for a Home Screen you enjoy unlocking.',
      },
      fish: {
        name: 'Fish and aquariums',
        lead: 'Fish facts, name ideas and themed tanks to build.',
      },
      guides: {
        name: 'Companions guides',
        lead: 'Step by step through the widget, StandBy, Apple Watch, Mac and everything in the app.',
      },
      troubleshooting: {
        name: 'Troubleshooting',
        lead: 'When a widget misbehaves: what to check, in order.',
      },
    },
    by: (author: string) => `By ${author}`,
    /** How long a post takes to read, in whole minutes. */
    readingTime: (minutes: number) => `${minutes} min read`,
    onThisPage: 'On this page',
    more: 'Keep reading',
    /** The box at the end of every post, under the app's name and tagline. */
    cta: (species: number) =>
      `Pick your fish from ${species} hand-drawn species, name them, and watch them swim in your widget all day. Free, with eight fish, every tank style and all three widget sizes.`,
    /** The blog's name in feed readers. */
    feedTitle: 'The Companions blog',
    /** The link to the blog's RSS feed. */
    feed: 'RSS feed',
  },

  packs: {
    title: 'Every fish and every pack',
    description: (species: number, free: number) =>
      `All ${species} fish in the Companions aquarium widget, pack by pack: which ${free} come free, what each pack holds, and how the one-time packs and All Fish work.`,
    kicker: (species: number, packs: number) => `${species} species · ${packs} packs`,
    h1: 'Every fish, every pack.',
    lead: (free: number) =>
      `Companions comes with ${free} fish: the three every tank starts with and the five of the Freshwater Pack. The other packs are bought once, in the app, and kept for good. All Fish unlocks every pack at once, including packs still to come, and the tank complications with them.`,
    /** The name of the list of packs, for search engines. */
    listName: 'Fish packs in Companions',
    howTitle: 'How packs work',
    howHtml: [
      'A pack is a one-time purchase through the App Store, in your local currency. Buy it on your iPhone and it is yours on your iPad too, under the same Apple Account; Restore Purchases in Settings brings it back on a new device. Nothing expires, and nothing in a tank is ever taken away.',
      "<strong>All Fish</strong> comes two ways: a one-time lifetime unlock, or a monthly plan while you want it. Either way it opens every pack, every pack added later, and the complications (the time, date, weather, steps and Moon in a tank's corner). If a monthly plan lapses, the fish you already added keep swimming; only adding new ones from those packs waits until it is renewed.",
      'Prices are shown in the app, under Settings, in your own currency.',
    ],
  },

  /** One pack's page. */
  pack: {
    /** `fish` is the pack's fish names, already joined as a list. */
    title: (pack: string, fish: string) => `${pack}: ${fish}`,
    description: (c: { tagline: string; pack: string; count: number; fish: string; free: boolean }) =>
      `${c.tagline} The ${c.pack} in the Companions aquarium widget holds ${c.count} fish: ${c.fish}. ${c.free ? 'It comes with the app for free.' : 'A one-time in-app purchase, or part of All Fish.'}`,
    kickerFree: 'Comes with the app',
    kickerPaid: 'Fish pack',
    tankLabel: (style: string, pack: string, fish: string) => `A ${style} tank with the ${pack}: ${fish}`,
    tankCaption: (pack: string, style: string) => `The ${pack} in a ${style} tank, medium widget size.`,
    fishAlt: (fish: string) => `${fish} as drawn in Companions`,
    /**
     * A sentence about one fish: how it moves (`swim`) and, when `scale` is not 1, how big
     * it is drawn beside a standard fish (1.2 is 20% bigger, 0.9 is a touch smaller).
     * `fish` is the name as the app shows it; it cannot be inflected, so build the
     * sentence around it.
     */
    fishText: (fish: string, swim: 'swimmer' | 'floater' | 'creeper' | 'crawler', scale: number) => {
      const how = {
        swimmer: 'swims mid-water, gliding briskly with a little rise and fall',
        floater: 'floats rather than swims: it hangs anywhere a fish might, drifting slowly',
        creeper:
          'keeps to the bed and inches along it, so slowly it is hardly seen to move, leaning a little with its way',
        crawler: 'walks the bed at a scuttle, a touch up and down as its legs go',
      }[swim];
      const size =
        scale > 1
          ? `, and is drawn ${Math.round((scale - 1) * 100)}% bigger than a standard fish`
          : scale < 1
            ? ', and is drawn a touch smaller than a standard fish'
            : '';
      return `The ${fish.toLowerCase()} ${how}${size}.`;
    },
    howTitle: 'How to add these fish',
    step1Html: 'Open Companions and tap the <strong>+</strong> at the end of the tray under the tank.',
    step2Html: (pack: string) => `Find the <strong>${pack}</strong> in the list and tap a fish.`,
    step3FreeHtml: 'It drops into the water with a splash. Give it a name, or keep the one it came with.',
    step3PaidHtml:
      'If the pack is locked, tap <strong>Unlock</strong> and buy the pack once, or All Fish for every pack. Then the fish drops into the water with a splash. Give it a name, or keep the one it came with.',
    after:
      'A tank holds five fish, and each widget size keeps its own set, so the small, medium and large tanks can be stocked differently.',
    namesTitle: 'Names in other languages',
    namesIntro: (languages: number) =>
      `Companions is translated into ${languages} languages. These are the names the app uses for these fish:`,
    languageHeader: 'Language',
    others: 'Other packs',
  },

  styles: {
    title: 'The eight tank styles',
    /** `styles` is the styles' names, already joined as a list. */
    description: (styles: string) =>
      `Every water the Companions aquarium widget comes in: ${styles}. What each looks like, which fish suit it, and how to change the style of a tank.`,
    kicker: (count: number) => `${count} styles`,
    h1: 'The same glass, different water.',
    lead: "A style colours the water and the bed; the glass, its rim and its highlights stay the same, so the small, medium and large tanks read as the same tank, just bigger. Change a tank's style on the Edit Tank page and every widget showing that tank follows.",
    tankLabel: (style: string) => `The ${style} tank style, medium widget size`,
    counter: (index: number, count: number) => `Style ${index} of ${count}`,
    blurbs: {
      minimal:
        'The blue tank the app launched with: lighter azure at the top, settling into a bright sky blue through the middle, over a white mist. Bright, clean, and the one most fish look best in.',
      deepOcean:
        'Sapphire where the light gets in at the top, falling through navy to an indigo that is all but black at the bottom. Jellyfish glow in it; reef fish pop.',
      pond: 'Sunlit green at the surface deepening to leaf green, turning a touch olive as it meets a bed of warm sand. Made for koi, trout and the pond creatures.',
      reed: 'A cooler, teal-leaning green, the nearest cousin to Minimal in temperature, over a muted tan bed. Switching between the two reads as a change of light rather than a different tank.',
      blossom:
        'Pale cherry-blossom pink at the surface settling into a soft rose, over the same white mist as Minimal. Kept on the cool side of pink so orange and red fish keep their edge.',
      dark: 'As black as the Home Screen allows, for all-black setups: neutral charcoal at the surface falling to true black under the bed, with the glass highlights turned down so it sits quietly among dark icons.',
      pumpkin:
        'Soft pumpkin orange at the surface settling into a deeper orange, over a white mist. Kept short of yellow so the goldfish and the gold koi still stand out.',
      lavender:
        'Minimal and Blossom with the hue turned to the lavender flower: as vivid as a lavender this light can be, over the same white mist. Discus and dartfish suit it.',
    },
    howTitle: "How to change a tank's style",
    stepsHtml: [
      'Open Companions and tap the <strong>⋯</strong> button at the top of the page, then <strong>Edit this tank</strong>.',
      'Open the style menu at the top of the Edit Tank page and pick a water. The tank changes under your finger.',
      'Tap <strong>Close</strong>. The tank saves itself, and the widget on your Home Screen updates to match.',
    ],
    after:
      'Styles belong to tanks, not to the app: on the My Tanks page you can keep a Blossom small tank and a Dark large tank side by side, and switch which one your widget shows.',
  },

  whatsNew: {
    title: "What's new",
    /** `date` is the release date, already written out in the reader's language. */
    description: (version: string, date: string) =>
      `Release notes for the Companions aquarium widget app, version by version. The current version is ${version}, released ${date}.`,
    kicker: "What's new",
    h1: 'Every version, in order.',
    lead: (version: string, date: string) =>
      `The current version is Companions ${version}, released ${date}. Updates arrive through the App Store.`,
    /** A release's heading in the list: "4.5: Different fish for every tank". */
    heading: (version: string, title: string) => `${version}: ${title}`,
    /** A release's own page title. */
    entryTitle: (version: string, title: string) => `Companions ${version}: ${title}`,
    versionKicker: (version: string) => `Version ${version}`,
    all: 'All versions',
  },

  support: {
    title: 'Support',
    description: (email: string) =>
      `Help with the Companions aquarium widget: common fixes, and how to reach the developer at ${email}.`,
    kicker: 'Support',
    h1: "We'll sort it out.",
    /** `email` is the support address, already a link. */
    leadHtml: (email: string) =>
      `Companions is made by two people, and one of us answers every email personally. Write to ${email}, or use the Email button in the app's Settings, which fills in the details for you.`,
    /** The page's name for search engines. */
    contactName: 'Companions support',
    beforeTitle: 'Before you write',
    beforeHtml: (helpUrl: string) =>
      `Most questions are answered on the <a href="${helpUrl}">help pages</a>. The ones we hear most:`,
    includeTitle: 'What to include',
    include: [
      'Your iPhone model and iOS version (Settings › General › About).',
      "The Companions version, shown at the bottom of the app's Settings.",
      'What you expected and what happened instead. A screenshot or a screen recording helps enormously.',
    ],
    purchasesTitle: 'Purchases and refunds',
    /** `reportUrl` is Apple's refund page, reportaproblem.apple.com. */
    purchasesHtml: (reportUrl: string) =>
      `Packs and All Fish are sold by Apple through the App Store, so refunds go through Apple: visit <a href="${reportUrl}" rel="noopener">reportaproblem.apple.com</a>, sign in, and choose the purchase. If a pack you bought shows as locked, open Settings in the app and tap <strong>Restore Purchases</strong>; make sure you are signed in with the Apple Account that bought it.`,
    privacyTitle: 'Privacy',
    privacyHtml: (privacyUrl: string) =>
      `Companions keeps your tank on your device and collects no personal information. The <a href="${privacyUrl}">privacy policy</a> has the details.`,
    wishTitle: "Something you'd love to see?",
    wish: 'A fish, a prop, a style, a place the widget should live: tell us. Many of the packs began as an email.',
  },

  press: {
    title: 'Press kit',
    description:
      'Facts, description, icon and screenshots for Companions, the aquarium Home Screen widget for iPhone, for anyone writing about it.',
    kicker: 'Press kit',
    h1: 'Writing about Companions?',
    /** `email` is the support address, already a link. */
    leadHtml: (email: string) =>
      `Everything here may be quoted and the pictures used freely in coverage of the app. For anything else, email ${email}.`,
    sentenceTitle: 'In one sentence',
    paragraphTitle: 'In a paragraph',
    paragraph: (c: { species: number; props: number; languages: number; developer: string }) =>
      `Companions is a free iPhone app that keeps a little fish tank in a Home Screen widget. You pick your fish from ${c.species} hand-drawn species, give each a name, and they swim in their own way at their own pace, every time you unlock your phone: in the widget, in StandBy while the phone charges, on your Mac desktop and on Apple Watch. There is nothing to feed and nothing can die; feeding is a game you can play if you like. Tanks come in eight water styles with ${c.props} props to arrange, and can carry the time, the date, the weather, your step goal or the Moon in a corner. Eight fish come with the app; the rest arrive in packs bought once, or all together with All Fish. Companions has no account, no advertising and no tracking, and is translated into ${c.languages} languages. It is made by ${c.developer} and Shea in South Korea.`,
    factsTitle: 'Facts',
    facts: {
      name: 'Name',
      what: 'What it is',
      whatValue: 'An iPhone app and Home Screen widget: an animated aquarium you stock with fish and watch all day',
      price: 'Price',
      priceValue:
        'Free. Fish packs are one-time in-app purchases; All Fish unlocks everything as a lifetime purchase or a monthly plan',
      platforms: 'Platforms',
      platformsValue: (os: string) => `iPhone and iPad (${os} or later), Apple Watch app, Mac via iPhone widgets on Mac`,
      fish: 'Fish',
      fishValue: (species: number, packs: number) => `${species} species in ${packs} packs; eight come with the app`,
      styles: 'Tank styles',
      props: 'Props',
      propsValue: (count: number) => `${count} decorations to arrange on the bed`,
      complications: 'Complications',
      complicationsValue: 'Time, date, weather, step goal and Moon phase, in a corner of the tank',
      languages: 'Languages',
      firstReleased: 'First released',
      currentVersion: 'Current version',
      currentVersionValue: (version: string, date: string) => `${version} (${date})`,
      developer: 'Developer',
      developerValue: (developer: string) => `${developer} (design and code) and Shea (art), South Korea`,
      appStore: 'App Store',
      contact: 'Contact',
    },
    iconTitle: 'Icon',
    iconText: "The App Store icon at 1024 pixels. Please don't recolour it or put it in another shape.",
    iconAlt: "The Companions app icon: a goldfish's tail in pale blue water",
    screenshotsTitle: 'Screenshots',
    screenshotsText: 'The App Store screenshots, in order. Click one for the full-size file.',
    screenshotAlt: (index: number) => `Companions App Store screenshot ${index}`,
    downloadTitle: 'Download',
  },

  privacy: {
    title: 'Privacy policy',
    description:
      'Companions does not collect, sell or share any personal information. Your tank stays on your device; the only thing sent anywhere is anonymous usage statistics, which you can turn off.',
    kicker: 'Privacy policy',
    h1: 'Your fish are your business.',
    /** `date` is already written out in the reader's language. */
    meta: (date: string) => `Last updated: ${date}. This is the same policy shown in the app under Settings.`,

    /**
     * The app's own policy (PrivacyPolicyView.swift), section by section. It is the policy
     * of record, so every language here must be the app's wording in that language, word
     * for word; only the tags (paragraphs, lists, bold lead-ins, links) are added.
     */
    sections: [
      {
        title: 'The short version',
        html: `<p>Companions does not collect, sell or share any personal information. There is no account to create, no advertising and no tracking of any kind, and everything the app knows about your tank stays on your device. The only thing Companions sends anywhere is anonymous usage statistics, so I can see which parts of the app are used; you can turn that off in Settings at any time.</p>`,
      },
      {
        title: 'What Companions stores',
        html: `<p>The only thing Companions saves is the tank itself:</p>
<ul>
<li>The fish in your tank, and which species each one is</li>
<li>The name you give each fish</li>
<li>A random identifier for each fish, so the app can tell two fish of the same species apart</li>
</ul>
<p>Names are stored exactly as you type them. If you name a fish after a friend or family member, that name is kept on your device like everything else, and nowhere else.</p>`,
      },
      {
        title: 'Where it is stored',
        html: `<p>Your tank is saved on your device, in a storage area that is shared between the Companions app and its Home Screen widget so the widget can show your fish. Companions never uploads this data anywhere.</p>
<p>If you back up your device with iCloud Backup or to a computer, Apple's backup may include Companions' data along with the rest of your apps. Those backups are controlled by you in iOS Settings and are covered by Apple's privacy policy, not this one.</p>`,
      },
      {
        title: 'Widgets',
        html: `<p>The Companions widget shows the fish in your tank on your Home Screen or Lock Screen. Like any widget, it is visible to anyone who can see your screen. If you use VoiceOver, the widget also reads out your fish's names. The widget reads your tank from the shared storage on your device; it does not send anything anywhere.</p>`,
      },
      {
        title: 'Usage statistics',
        html: `<p>To learn which parts of Companions people use, the app sends anonymous usage statistics to Google Analytics for Firebase, a service run by Google. These are events such as the app being opened, a screen being shown, a fish being added, a tank style being chosen or a pack being unlocked, together with general details: the device model, iOS version and language, the app's version, and the country and region estimated from your internet connection, whose address is not stored. Each installation of the app is given a random identifier so that repeat use counts as one person; it is not linked to you, your Apple Account or your fish and their names, and Companions does not use the advertising identifier or ask permission to track you.</p>
<p>You can turn this off with the Share Usage Data switch in Settings, and nothing further is sent. Google's handling of these statistics is described in its privacy policy at <a href="https://policies.google.com/privacy" rel="noopener">policies.google.com/privacy</a>.</p>`,
      },
      {
        title: 'Permissions',
        html: `<p>Companions asks for three system permissions, each the first time you choose something that needs it, and works without any of them.</p>
<ul>
<li><strong>Adding photos to your library:</strong> iOS asks the first time you save a tank's QR code to Photos. The permission only lets the app add pictures, not see the photos you already have.</li>
<li><strong>Reading your steps from Health:</strong> iOS asks the first time you choose the Step Goal complication. The app reads only today's step count, to draw it in your tank, and never writes to Health. The count and the goal you set are kept in the shared storage on your device so the widget can show them, and nowhere else.</li>
<li><strong>Your location while the app is open:</strong> iOS asks when you tap Location under Settings on the Complications sheet, after choosing the Moon Phase or the Weather complication. The app uses it to tell which way up the Moon appears where you are, keeping only which hemisphere that is, and to fetch the weather there from Apple's Weather service, which receives your approximate location for the forecast and nothing else. Companions does not store your location or send it anywhere else.</li>
</ul>
<p>Companions does not access your camera, microphone, contacts, calendar or notifications, and it does not request permission to track you across other apps or websites.</p>`,
      },
      {
        title: 'Third-party services',
        html: `<p>Apart from Google Analytics for Firebase, described above, Companions contains no third-party software development kits: no crash reporting and no advertising.</p>
<p>The App Store handles downloading and updating the app, any packs you buy, and any ratings or reviews you choose to leave. Companions never sees your payment details. Those interactions are governed by Apple's privacy policy.</p>`,
      },
      {
        title: 'Things you choose to share',
        html: `<p>A few buttons in Settings hand off to other apps, and only when you tap them:</p>
<ul>
<li><strong>Email</strong> opens your mail app with a new message addressed to me. Anything you write is sent by your mail provider, and I receive only what you send.</li>
<li><strong>Share Companions</strong> opens the iOS share sheet with a link to the app. Companions does not see who you share it with.</li>
<li><strong>Rate Companions</strong> asks Apple to show its rating prompt. Apple handles the rating; Companions does not receive it.</li>
<li><strong>Share this tank</strong>, on the main page's menu, makes a code that holds only the tank's water and props, nothing about you or your fish, and opens the share sheet for you to send it.</li>
</ul>`,
      },
      {
        title: 'Your control',
        html: `<p>You are in full control of your tank:</p>
<ul>
<li>Rename or remove any fish at any time from the tray at the bottom of the tank</li>
<li>Removing a fish deletes it from your device</li>
<li>Turn off usage statistics with the Share Usage Data switch in Settings</li>
<li>Deleting the Companions app deletes the tank and everything else the app stored on your device (a device backup made earlier may still hold a copy until it is replaced)</li>
</ul>`,
      },
      {
        title: 'Children',
        html: `<p>Companions does not collect personal information from anyone, of any age. The usage statistics described above are anonymous and never include names, anything typed into the app or anything that could identify a child, or anyone else.</p>`,
      },
    ],

    /** The one section the app's policy does not have: what this website itself does. */
    website: {
      title: 'This website',
      /** Shown while the website counts visits with Google Analytics. `githubUrl` and
          `googleUrl` are the two companies' privacy statements. */
      countedHtml: (githubUrl: string, googleUrl: string) =>
        `<p>This website is a set of static pages served by GitHub Pages; the fonts and pictures are served from the site itself. GitHub's own handling of web server logs is described in <a href="${githubUrl}" rel="noopener">GitHub's privacy statement</a>.</p>
<p>To learn how many people visit, where they come from and which pages and buttons are used, the website uses Google Analytics, a service run by Google. It records the pages you open and the links and buttons you press here, the site that sent you, and general details: your browser, device type and language, and the country and city estimated from your internet connection, whose address is not stored. So that repeat visits count as one visitor, it keeps a random identifier in two cookies in your browser, <code>_ga</code> and one whose name begins <code>_ga_</code>, for up to two years. The identifier is not linked to your name, to the app or to your fish, and none of this is used for advertising.</p>
<p>If your browser's clock is set to a time zone in Europe, the website asks first, and nothing is loaded from Google unless you allow it. It also stays off, without asking, if your browser sends a Global Privacy Control or Do Not Track signal. Wherever you are, you can change your mind here at any time, and turning the statistics off removes the cookies as well. Google's handling of these statistics is described in its privacy policy at <a href="${googleUrl}" rel="noopener">policies.google.com/privacy</a>.</p>`,
      /** Shown while the website counts nothing. */
      uncountedHtml: (githubUrl: string) =>
        `<p>This website is a set of static pages served by GitHub Pages. It sets no cookies, runs no analytics and embeds nothing from third parties; the fonts and pictures are served from the site itself. GitHub's own handling of web server logs is described in <a href="${githubUrl}" rel="noopener">GitHub's privacy statement</a>.</p>`,
      /** The switch under the section. `state` is `on` or `off` below, already in bold. */
      statisticsHtml: (state: string) => `Website statistics are ${state} in this browser.`,
      on: 'on',
      off: 'off',
      turnOn: 'Turn on',
      turnOff: 'Turn off',
      updated: (date: string) => `This section is about the website only, and was last updated on ${date}.`,
    },

    changes: {
      title: 'Changes to this policy',
      html: `<p>If Companions ever changes how it handles data, this policy will be updated in the app and the date at the top revised. The current version is always available from Settings.</p>`,
    },
    contact: {
      title: 'Contact',
      /** `email` is the support address, already a link. */
      html: (email: string) =>
        `<p>If you have any questions about this policy or about how Companions handles your data, email me at ${email} or use the Email button in Settings.</p>`,
    },
  },

  /** The bar that asks visitors in Europe before their visit is counted. */
  consent: {
    label: 'Website statistics',
    /** `privacyUrl` is the privacy page's "This website" section. */
    html: (privacyUrl: string) =>
      `<strong>May this website count your visit?</strong> It would use Google Analytics, which sets cookies, to see which pages and buttons are used. Never for advertising. <a href="${privacyUrl}">How it works</a>`,
    no: 'No thanks',
    allow: 'Allow',
  },

  notFound: {
    title: 'Page not found',
    description: 'That page swam off. Try the help pages or the home page.',
    h1: 'That page swam off.',
    lead: "There's nothing at this address. The fish, however, are fine.",
    home: 'Back to the start',
    help: 'Help and questions',
  },
};

export default en;
export type Dictionary = typeof en;
