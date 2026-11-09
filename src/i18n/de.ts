import type { Dictionary } from './en.ts';

/** A count with the right form of its noun: "1 Fisch", "5 Fische". */
const count = (n: number, one: string, other: string) => `${n} ${n === 1 ? one : other}`;

const dictionary: Dictionary = {
  /** How this language writes a few small things. */
  format: {
    listSeparator: ', ',
  },

  app: {
    /** The app's name on the App Store. */
    name: 'Companions - Widget Pets',
    tagline: 'Dein kleines Aquarium auf dem Home-Bildschirm.',
    subtitle: 'Deine Fische schwimmen direkt im Widget, den ganzen Tag.',
    oneLiner:
      'Companions ist eine kostenlose iPhone-App, die ein kleines animiertes Aquarium als Widget auf deinen Home-Bildschirm bringt: Such dir deine Fische aus, gib ihnen Namen und sieh ihnen beim Schwimmen zu, wann immer du aufs Handy schaust.',
    madeIn: 'Südkorea',
  },

  /** The link preview card (public/og/<language>.png, drawn by `npm run og`). */
  og: {
    titleHtml: 'Dein kleines Aquarium auf&nbsp;dem Home-Bildschirm.',
    text: 'Deine Fische schwimmen direkt im Widget, den ganzen Tag.',
    facts: 'Kostenlos im App Store · iPhone, iPad, Mac und Apple Watch',
    imageAlt: (appName: string, tagline: string) => `${appName}: ${tagline}`,
  },

  /** Words that search engines read but visitors do not see (structured data). */
  ld: {
    jobTitle: 'Unabhängiger App-Entwickler',
    alternateNames: [
      'Companions Aquarium-Widget',
      'Companions Fisch-Widget',
      'Companions virtuelles Aquarium',
      'Companions iPhone-Widget',
    ],
    offer:
      'Kostenloser Download mit den Standardfischen und dem Süßwasser-Paket; weitere Fische gibt es in Paketen zum Einmalkauf oder mit der Freischaltung „Alle Fische“.',
    features: (c: { species: number; packs: number; props: number }) => [
      'Animiertes Aquarium als Home-Bildschirm-Widget in Klein, Mittel und Groß',
      `${count(c.species, 'Fischart', 'Fischarten')} in ${count(c.packs, 'Paket', 'Paketen')}, bis zu fünf Fische pro Aquarium`,
      `Acht Aquarium-Stile und ${count(c.props, 'Deko-Teil', 'Deko-Teile')} zum Anordnen`,
      'Komplikationen für Uhrzeit, Datum, Wetter, Schrittziel und Mondphase in einer Ecke des Aquariums',
      'Läuft auch im Standby, auf der Apple Watch und auf dem Mac (iPhone-Widgets)',
      'Aquarien als Code oder Bild mit Freunden teilen',
      'Kein Konto, keine Werbung, kein Tracking',
    ],
  },

  common: {
    skipToContent: 'Zum Inhalt springen',
    breadcrumb: 'Navigationspfad',
    updated: (date: string) => `Aktualisiert am ${date}`,
  },

  nav: {
    /** Accessible names of the navigation landmarks. */
    site: 'Website',
    homeLabel: 'Startseite von Companions',
    menu: 'Menü',
    /** The top bar. Keep these to a word or two: they share one narrow pill. */
    help: 'Hilfe',
    guides: 'Anleitungen',
    fish: 'Fische',
    styles: 'Stile',
    whatsNew: 'Neues',
    support: 'Support',
    press: 'Pressekit',
    /** The App Store button in the top bar, and its one-word form on small phones. */
    download: 'App laden',
    get: 'Laden',
  },

  footer: {
    facts: (os: string) => `Kostenlos · ${os} oder neuer · iPhone, iPad, Mac und Apple Watch`,
    columnSite: 'Companions',
    columnAbout: 'Über uns',
    home: 'Startseite',
    help: 'Hilfe und Fragen',
    guides: 'Anleitungen',
    packs: 'Fische und Pakete',
    styles: 'Aquarium-Stile',
    whatsNew: 'Neues',
    press: 'Pressekit',
    support: 'Support',
    privacy: 'Datenschutzrichtlinie',
    email: 'Schreib uns',
    /** The line under the two faces, as at the foot of the app's Settings page. */
    madeWith: 'Mit ♡ in Südkorea entwickelt',
    legal: (year: number, owner: string) =>
      `© ${year} ${owner}. Apple, das Apple-Logo, iPhone, iPad, Mac, Apple Watch und App Store sind Marken der Apple Inc.`,
    /** The accessible name of the list of languages. */
    language: 'Sprache',
  },

  badge: {
    label: 'Companions im App Store laden',
    alt: 'Laden im App Store',
  },

  /** A live tank's description for screen readers. */
  tank: {
    label: (size: 'small' | 'medium' | 'large' | 'watch', style: string, fish: number) => {
      const tank = {
        small: 'Kleines Aquarium',
        medium: 'Mittleres Aquarium',
        large: 'Großes Aquarium',
        watch: 'Aquarium auf der Apple Watch',
      }[size];
      return `${tank} im Stil „${style}“ mit ${count(fish, 'Fisch', 'Fischen')}`;
    },
    /** A fish that has been given a name: "Bubbles (Clown)". */
    namedFish: (name: string, species: string) => `${name} (${species})`,
  },

  hero: {
    label: 'Einführung',
    /** The headline, in two lines. */
    titleHtml: 'Dein kleines Aquarium<br />auf dem Home-Bildschirm.',
    tankLabel:
      'Das Companions-Widget: Ein Clownfisch, ein Halfterfisch, ein Doktorfisch und ein Seepferdchen schwimmen zwischen Farnen und einem Schwamm',
    phoneAlt: 'Der Home-Bildschirm eines iPhone mit dem Aquarium-Widget von Companions oben links in der Ecke',
    scroll: 'Scrollen',
  },

  home: {
    title: (appName: string) => `${appName}: Aquarium-Widget für den iPhone-Home-Bildschirm`,
    description: (species: number) =>
      `Companions ist ein kostenloses Aquarium-Widget fürs iPhone: Wähle aus ${count(species, 'Fisch', 'Fischen')}, gib ihnen Namen und sieh ihnen zu – auf dem Home-Bildschirm, im Standby, auf dem Mac und auf der Apple Watch. Kein Füttern, kein Putzen, kein schlechtes Gewissen.`,

    places: {
      kicker: 'Immer im Blick',
      title: 'Es lebt dort, wo du hinschaust.',
      lead: 'Füge das Widget einmal hinzu, und deine Fische sind jedes Mal da, wenn du aufs Handy schaust. Dieselben Fische, dasselbe Wasser – und die App musst du dafür nicht öffnen.',
      homeScreen: {
        title: 'Home-Bildschirm',
        text: 'Klein, mittel oder groß, in einem von acht Stilen. Behalte ein einziges Aquarium oder gleich ein ganzes Regal voll – und in jeder Größe schwimmen andere Fische.',
      },
      standby: {
        title: 'Standby',
        text: 'Stell dein iPhone beim Laden quer auf, und das Aquarium leistet dir die Nacht über Gesellschaft, gleich neben der Uhr.',
        /** The date under the clock in the little StandBy picture, as iOS writes it. */
        date: 'Di., 1.',
      },
      watch: {
        title: 'Apple Watch',
        text: 'Die Companions-App für die Apple Watch zeigt dein kleines Aquarium am Handgelenk, synchronisiert von deinem iPhone. Die Uhrzeit zeigt die Uhr schon selbst, im Aquarium schwimmen also nur Fische.',
      },
      ipad: {
        title: 'iPad',
        text: 'Eine vollwertige, eigenständige Companions-App fürs iPad. Richte dein Aquarium auf dem großen Bildschirm ein und füge Widgets zum Home-Bildschirm hinzu – ganz ohne iPhone.',
      },
      mac: {
        title: 'Mac',
        text: 'Dank Integration (Continuity) holst du deine iPhone-Widgets auf den Schreibtisch deines Mac – oder du fügst sie aus der Mac-App hinzu. So leisten dir deine Fische zwischen den Fenstern Gesellschaft.',
      },
    },

    fish: {
      kicker: (species: number, packs: number) =>
        `${count(species, 'Art', 'Arten')} in ${count(packs, 'Paket', 'Paketen')}`,
      title: 'Lern die Fische kennen.',
      lead: 'Jedes Aquarium beginnt mit einem Zierfisch, einer Sardine und einem Kugelfisch, und das Süßwasser-Paket gibt es kostenlos dazu. Alle anderen kommen in Paketen, die du einmal kaufst und behältst – oder alle zusammen mit „Alle Fische“. Jeder Fisch schwimmt auf seine eigene Art, in seinem eigenen Tempo, und lässt ab und zu ein Bläschen steigen.',
      more: 'Jeder Fisch, jedes Paket',
    },

    customize: {
      kicker: 'Ganz deins',
      title: 'Dein Aquarium, deine Regeln.',
      lead: 'Acht Sorten Wasser, neunzehn Deko-Teile, die du anordnest, wie du magst, etwas Nützliches in der Ecke und ein App-Symbol, das dazu passt.',
      props: {
        kicker: (props: number) => count(props, 'Deko-Teil', 'Deko-Teile'),
        title: 'Dekoriere den Boden',
        text: 'Farne, Korallen, Muscheln, ein Ananashaus, ein Moai. Zieh sie dorthin, wo du sie haben willst, ändere ihre Größe, spiegle sie oder widerrufe den letzten Schritt. Sichere so viele Aquarien, wie du magst, und wechsle zwischen ihnen hin und her.',
      },
      complications: {
        kicker: 'Komplikationen',
        title: 'Etwas Nützliches in der Ecke',
        text: 'Die Uhrzeit, das Datum, das Wetter von heute, dein Schrittziel oder der Mond von heute Nacht, in Weiß über dem Wasser. In „Alle Fische“ enthalten.',
      },
      icons: {
        kicker: 'Sechs App-Symbole',
        title: 'Das passende Symbol dazu',
        /** The six app icons, by the names the app gives them in Settings. */
        names: { minimal: 'Minimal', twilight: 'Dämmerung', pond: 'Teich', reed: 'Schilf', blossom: 'Blüte', dark: 'Dunkel' },
        text: (names: string) => `${names}: Such dir in den Einstellungen das aus, das zu deinem Home-Bildschirm passt.`,
      },
    },

    calm: {
      kicker: 'Das pflegeleichte Haustier',
      title: 'Kein Füttern. Kein Putzen. Kein schlechtes Gewissen.',
      lead: 'Nur ein paar bunte Gefährten, die immer da sind.',
      cards: [
        {
          title: 'Hier stirbt niemand',
          text: 'Bleib eine Woche weg, einen Monat, ein Jahr. Deine Fische sind genau so, wie du sie zurückgelassen hast: Sie schwimmen.',
        },
        {
          title: 'Kein Konto, keine Werbung',
          text: 'Keine Anmeldung, kein Tracking und nichts, was du kaufen müsstest, um weiterzuspielen. Dein Aquarium bleibt auf deinem Gerät.',
        },
        {
          title: 'Füttern darfst du trotzdem',
          text: 'Tippe auf Messer und Gabel, streu eine Prise Futter ins Wasser und sieh zu, wie sie hinterherjagen. Und wenn du es lässt, nimmt es dir keiner übel.',
        },
        {
          title: 'Sie sagen Hallo',
          text: 'An manchen Morgen begrüßt dich ein Fisch, wenn du die App öffnest. Tippe ans Glas, und ein Schwung Bläschen steigt auf. Benenn sie, nach wem du willst.',
        },
      ],
    },

    questions: {
      kicker: 'Fragen und Antworten',
      title: 'Bevor du fragst.',
      readFull: 'Die ganze Antwort lesen',
      all: 'Alle Fragen und Antworten',
      /** The link after each answer in the structured data search engines read. */
      readMore: 'Weiterlesen',
    },

    guides: {
      kicker: 'Anleitungen',
      title: 'Hol mehr aus deinem Aquarium heraus.',
      all: 'Alle Anleitungen',
    },
  },

  /** The three widget sizes with the style picker, on the home page. */
  sizes: {
    kicker: 'Drei Größen, acht Stile',
    title: 'Ein Aquarium. Jede Widget-Größe.',
    lead: 'Das Widget gibt es in Klein, Mittel und Groß, und jede Größe hat ihre eigenen Fische. Wähle einen Stil, und alle Aquarien ziehen mit.',
    pickerLabel: 'Aquarium-Stil',
    large: 'Groß',
    medium: 'Mittel',
    small: 'Klein',
    /** `style` is the chosen style's name, already in bold; the page swaps it as the
        visitor picks another, so the name stands on its own after "Der Stil". */
    captionHtml: (style: string) =>
      `Der Stil ${style} in allen drei Größen. Ändere ihn einmal, und jedes Widget auf deinem Home-Bildschirm zieht mit.`,
  },

  packGrid: {
    comesWithApp: 'In der App enthalten',
    pack: 'Paket',
  },

  styleRow: {
    label: (style: string) => `Aquarium-Stil „${style}“`,
  },

  help: {
    title: 'Hilfe und häufige Fragen',
    description:
      'Antworten auf häufige Fragen zum Aquarium-Widget Companions: Widget zum Home-Bildschirm hinzufügen, Fische und Pakete, Aquarium-Stile, Komplikationen, Standby, Apple Watch, Mac, Käufe und Datenschutz.',
    kicker: 'Hilfe',
    h1: 'Fragen? Antworten.',
    /** `email` is the support address, already a link. */
    leadHtml: (email: string) =>
      `Alles, was zu Companions gefragt wird, an einem Ort. Deine Frage ist nicht dabei? Schreib an ${email}, und dir antwortet ein Mensch.`,
    categoriesLabel: 'Kategorien',
    categories: {
      'getting-started': 'Erste Schritte',
      widgets: 'Das Widget',
      'fish-and-packs': 'Fische und Pakete',
      'tanks-and-styles': 'Aquarien, Stile und Deko',
      complications: 'Komplikationen',
      'other-devices': 'Standby, Apple Watch, Mac und iPad',
      'privacy-and-purchases': 'Käufe und Datenschutz',
      troubleshooting: 'Wenn etwas nicht stimmt',
    },
    fullAnswer: 'Ausführliche Antwort',
    related: 'Passend dazu',
    /** What kind of page a related link leads to. */
    kindQuestion: 'Frage',
    kindGuide: 'Anleitung',
    kindPage: 'Seite',
    stuckTitle: 'Kommst du nicht weiter?',
    /** `email` is the support address, already a link; `helpUrl` is the help index. */
    stuckHtml: (email: string, helpUrl: string) =>
      `Schreib an ${email} und nenn uns dein iPhone-Modell und deine iOS-Version, dann kümmern wir uns darum. <a href="${helpUrl}">Zurück zu allen Fragen</a>.`,
  },

  guides: {
    title: 'Anleitungen zum Aquarium-Widget',
    description:
      'Schritt-für-Schritt-Anleitungen zum Aquarium-Widget Companions: Widget auf dem iPhone-Home-Bildschirm, im Standby, auf der Apple Watch und dem Mac einrichten, Aquarien gestalten, Komplikationen, Füttern und Teilen.',
    kicker: 'Anleitungen',
    h1: 'Hol mehr aus deinem Aquarium heraus.',
    lead: 'Etwas mehr Lesestoff: wie das Widget funktioniert, wie du es überall einrichtest und welche Kleinigkeiten sich zu wissen lohnen.',
    by: (author: string) => `Von ${author}`,
    onThisPage: 'Auf dieser Seite',
    more: 'Weitere Anleitungen',
  },

  packs: {
    title: 'Alle Fische und Pakete im Überblick',
    description: (species: number, free: number) =>
      `Alle ${species} Fische im Aquarium-Widget Companions, Paket für Paket: welche ${free} es kostenlos gibt, was in jedem Paket steckt und wie die Pakete zum Einmalkauf und „Alle Fische“ funktionieren.`,
    kicker: (species: number, packs: number) =>
      `${count(species, 'Art', 'Arten')} · ${count(packs, 'Paket', 'Pakete')}`,
    h1: 'Jeder Fisch, jedes Paket.',
    lead: (free: number) =>
      `Companions bringt ${count(free, 'Fisch', 'Fische')} mit: die drei, mit denen jedes Aquarium beginnt, und die fünf aus dem Süßwasser-Paket. Die übrigen Pakete kaufst du einmal in der App und behältst sie für immer. „Alle Fische“ schaltet alle Pakete auf einmal frei, auch die, die noch kommen, und dazu die Komplikationen fürs Aquarium.`,
    /** The name of the list of packs, for search engines. */
    listName: 'Fischpakete in Companions',
    howTitle: 'So funktionieren die Pakete',
    howHtml: [
      'Ein Paket kaufst du einmalig über den App Store, in deiner Landeswährung. Kaufst du es auf dem iPhone, gehört es dir mit demselben Apple Account auch auf dem iPad; auf einem neuen Gerät holst du es mit „Käufe wiederherstellen“ in den Einstellungen zurück. Nichts läuft ab, und aus einem Aquarium wird dir nie etwas weggenommen.',
      '<strong>Alle Fische</strong> gibt es auf zwei Arten: lebenslang als einmaligen Kauf oder als Monatsabo, solange du es möchtest. So oder so bekommst du alle Pakete, alle künftigen Pakete und die Komplikationen (Uhrzeit, Datum, Wetter, Schritte und Mond in einer Ecke des Aquariums). Läuft ein Monatsabo aus, schwimmen die Fische, die du schon hinzugefügt hast, einfach weiter; nur neue Fische aus diesen Paketen kannst du erst wieder hinzufügen, wenn das Abo verlängert ist.',
      'Die Preise siehst du in der App unter „Einstellungen“, in deiner eigenen Währung.',
    ],
  },

  /** One pack's page. */
  pack: {
    /** `fish` is the pack's fish names, already joined as a list. */
    title: (pack: string, fish: string) => `${pack}: ${fish}`,
    description: (c: { tagline: string; pack: string; count: number; fish: string; free: boolean }) =>
      `${c.tagline} ${c.pack}: ${count(c.count, 'Fisch', 'Fische')} für das Aquarium-Widget Companions – ${c.fish}. ${c.free ? 'Kostenlos in der App enthalten.' : 'Einmaliger In-App-Kauf oder Teil von „Alle Fische“.'}`,
    kickerFree: 'In der App enthalten',
    kickerPaid: 'Fischpaket',
    tankLabel: (style: string, pack: string, fish: string) => `Aquarium im Stil „${style}“ – ${pack}: ${fish}`,
    tankCaption: (pack: string, style: string) => `${pack}, hier im Stil „${style}“ und in mittlerer Widget-Größe.`,
    fishAlt: (fish: string) => `${fish}, gezeichnet wie in Companions`,
    /**
     * A line about one fish: how it moves (`swim`) and, when `scale` is not 1, how big it
     * is drawn beside a standard fish. The name cannot be given an article or a case, so
     * it stands before a colon, as on a profile card, and what follows needs no pronoun.
     */
    fishText: (fish: string, swim: 'swimmer' | 'floater' | 'creeper' | 'crawler', scale: number) => {
      const how = {
        swimmer: 'schwimmt durchs freie Wasser und gleitet zügig dahin, mit einem leichten Auf und Ab',
        floater:
          'schwebt, statt zu schwimmen – überall dort im Wasser, wo auch ein Fisch sein könnte – und lässt sich langsam treiben',
        creeper:
          'bleibt am Boden und schiebt sich dort Stück für Stück voran, so langsam, dass man die Bewegung kaum sieht, und immer leicht in Kriechrichtung geneigt',
        crawler: 'trippelt flink über den Boden und wippt dabei im Takt der Beine leicht auf und ab',
      }[swim];
      const size =
        scale > 1
          ? ` – und wird ${Math.round((scale - 1) * 100)} % größer gezeichnet als ein Fisch in Standardgröße`
          : scale < 1
            ? ' – und wird eine Spur kleiner gezeichnet als ein Fisch in Standardgröße'
            : '';
      return `${fish}: ${how}${size}.`;
    },
    howTitle: 'So fügst du diese Fische hinzu',
    step1Html: 'Öffne Companions und tippe auf das <strong>+</strong> am Ende der Leiste unter dem Aquarium.',
    step2Html: (pack: string) =>
      `Such in der Liste den Abschnitt <strong>${pack}</strong> und tippe dort auf einen Fisch.`,
    step3FreeHtml: 'Mit einem Platsch landet er im Wasser. Gib ihm einen Namen oder behalte den, den er mitbringt.',
    step3PaidHtml:
      'Ist das Paket gesperrt, tippe auf <strong>Freischalten</strong> und kaufe das Paket einmalig – oder „Alle Fische“ für sämtliche Pakete. Dann landet der Fisch mit einem Platsch im Wasser. Gib ihm einen Namen oder behalte den, den er mitbringt.',
    after:
      'In ein Aquarium passen fünf Fische, und jede Widget-Größe hat ihre eigenen. Das kleine, das mittlere und das große Aquarium kannst du also unterschiedlich besetzen.',
    namesTitle: 'Namen in anderen Sprachen',
    namesIntro: (languages: number) =>
      `Companions ist in ${count(languages, 'Sprache', 'Sprachen')} übersetzt. So heißen diese Fische in der App:`,
    languageHeader: 'Sprache',
    others: 'Weitere Pakete',
  },

  styles: {
    title: 'Die acht Aquarium-Stile fürs Widget',
    /** `styles` is the styles' names, already joined as a list. */
    description: (styles: string) =>
      `Alle Stile, in denen es das Aquarium-Widget Companions gibt: ${styles}. Wie jeder aussieht, welche Fische dazu passen und wie du den Stil eines Aquariums änderst.`,
    kicker: (styles: number) => count(styles, 'Stil', 'Stile'),
    h1: 'Dasselbe Glas, anderes Wasser.',
    lead: 'Ein Stil färbt das Wasser und den Boden; das Glas, sein Rand und seine Glanzlichter bleiben gleich. So wirken das kleine, das mittlere und das große Aquarium wie ein und dasselbe, nur größer. Ändere den Stil eines Aquariums auf der Seite „Aquarium bearbeiten“, und jedes Widget, das dieses Aquarium zeigt, zieht mit.',
    tankLabel: (style: string) => `Aquarium-Stil „${style}“, mittlere Widget-Größe`,
    counter: (index: number, total: number) => `Stil ${index} von ${total}`,
    blurbs: {
      minimal:
        'Das blaue Aquarium, mit dem die App gestartet ist: oben ein helleres Azur, das zur Mitte hin in ein leuchtendes Himmelblau übergeht, darunter weißer Dunst. Hell, klar – und der Stil, in dem die meisten Fische am besten aussehen.',
      deepOcean:
        'Saphirblau, wo oben das Licht einfällt, dann durch Marineblau hinab in ein Indigo, das am Grund fast schwarz ist. Quallen leuchten darin, Rifffische stechen hervor.',
      pond: 'Sonniges Grün an der Oberfläche, das sich zu Blattgrün vertieft und einen Hauch Oliv annimmt, wo es auf einen Boden aus warmem Sand trifft. Wie gemacht für Koi, Forellen und die Teichtiere.',
      reed: 'Ein kühleres, ins Petrol spielendes Grün, in der Farbtemperatur der nächste Verwandte von „Minimal“, über einem gedeckten, sandbraunen Boden. Wechselst du zwischen den beiden, wirkt es eher wie anderes Licht als wie ein anderes Aquarium.',
      blossom:
        'Zartes Kirschblütenrosa an der Oberfläche, das in ein sanftes Rosé übergeht, über demselben weißen Dunst wie bei „Minimal“. Bewusst ein kühles Rosa, damit sich orange und rote Fische weiter klar abheben.',
      dark: 'So schwarz, wie es der Home-Bildschirm zulässt – für alle, die ihn ganz in Schwarz halten: neutrales Anthrazit an der Oberfläche, das bis zu echtem Schwarz unter dem Boden abfällt. Die Glanzlichter im Glas sind gedimmt, damit das Aquarium ruhig zwischen dunklen Symbolen sitzt.',
      pumpkin:
        'Sanftes Kürbisorange an der Oberfläche, das in ein tieferes Orange übergeht, über weißem Dunst. Es bleibt knapp vor Gelb, damit der Goldfisch und der Gold-Koi weiter auffallen.',
      lavender:
        '„Minimal“ und „Blüte“, im Farbton zur Lavendelblüte gedreht: so kräftig, wie ein derart helles Lavendel nur sein kann, über demselben weißen Dunst. Diskus und Grundel passen gut hinein.',
    },
    howTitle: 'So änderst du den Stil eines Aquariums',
    stepsHtml: [
      'Öffne Companions, tippe oben auf der Seite auf die Taste <strong>⋯</strong> und dann auf <strong>Dieses Aquarium bearbeiten</strong>.',
      'Öffne oben auf der Seite „Aquarium bearbeiten“ das Stil-Menü und such dir ein Wasser aus. Das Aquarium wechselt direkt unter deinem Finger.',
      'Tippe auf <strong>Schließen</strong>. Das Aquarium wird von selbst gesichert, und das Widget auf deinem Home-Bildschirm zieht nach.',
    ],
    after:
      'Stile gehören zu den Aquarien, nicht zur App: Auf der Seite „Meine Aquarien“ kannst du ein kleines Aquarium im Stil „Blüte“ und ein großes im Stil „Dunkel“ nebeneinander behalten und umschalten, welches dein Widget zeigt.',
  },

  whatsNew: {
    title: 'Neues und Updates',
    /** `date` is the release date, already written out in the reader's language. */
    description: (version: string, date: string) =>
      `Versionshinweise zur Aquarium-Widget-App Companions, Version für Version. Aktuell ist Version ${version}, erschienen am ${date}.`,
    kicker: 'Neues',
    h1: 'Alle Versionen, der Reihe nach.',
    lead: (version: string, date: string) =>
      `Die aktuelle Version ist Companions ${version}, erschienen am ${date}. Updates kommen über den App Store.`,
    /** A release's heading in the list: "4.5: Andere Fische in jedem Aquarium". */
    heading: (version: string, title: string) => `${version}: ${title}`,
    /** A release's own page title. */
    entryTitle: (version: string, title: string) => `Companions ${version}: ${title}`,
    versionKicker: (version: string) => `Version ${version}`,
    all: 'Alle Versionen',
  },

  support: {
    title: 'Support und Kontakt',
    description: (email: string) =>
      `Hilfe zum Aquarium-Widget Companions: Lösungen für häufige Probleme und der direkte Draht zum Entwickler unter ${email}.`,
    kicker: 'Support',
    h1: 'Das kriegen wir hin.',
    /** `email` is the support address, already a link. */
    leadHtml: (email: string) =>
      `Hinter Companions stehen zwei Menschen, und jede E-Mail beantwortet einer von uns persönlich. Schreib an ${email} oder nutze die Taste „E-Mail“ in den Einstellungen der App: Sie trägt die Details gleich für dich ein.`,
    /** The page's name for search engines. */
    contactName: 'Companions-Support',
    beforeTitle: 'Bevor du schreibst',
    beforeHtml: (helpUrl: string) =>
      `Die meisten Fragen beantworten schon die <a href="${helpUrl}">Hilfeseiten</a>. Diese hören wir am häufigsten:`,
    includeTitle: 'Das gehört in deine E-Mail',
    include: [
      'Dein iPhone-Modell und deine iOS-Version (Einstellungen › Allgemein › Info).',
      'Die Companions-Version. Sie steht ganz unten in den Einstellungen der App.',
      'Was du erwartet hast und was stattdessen passiert ist. Ein Bildschirmfoto oder eine Bildschirmaufnahme hilft enorm.',
    ],
    purchasesTitle: 'Käufe und Rückerstattungen',
    /** `reportUrl` is Apple's refund page, reportaproblem.apple.com. */
    purchasesHtml: (reportUrl: string) =>
      `Pakete und „Alle Fische“ verkauft Apple über den App Store, deshalb laufen auch Rückerstattungen über Apple: Geh auf <a href="${reportUrl}" rel="noopener">reportaproblem.apple.com</a>, melde dich an und wähle den Kauf aus. Wird ein gekauftes Paket als gesperrt angezeigt, öffne die Einstellungen in der App und tippe auf <strong>Käufe wiederherstellen</strong>; achte darauf, dass du mit dem Apple Account angemeldet bist, mit dem du es gekauft hast.`,
    privacyTitle: 'Datenschutz',
    privacyHtml: (privacyUrl: string) =>
      `Companions behält dein Aquarium auf deinem Gerät und erhebt keine personenbezogenen Daten. Die Einzelheiten stehen in der <a href="${privacyUrl}">Datenschutzrichtlinie</a>.`,
    wishTitle: 'Hast du einen Wunsch?',
    wish: 'Ein Fisch, ein Deko-Teil, ein Stil, ein Ort, an dem das Widget leben sollte: Erzähl uns davon. Viele Pakete haben als E-Mail angefangen.',
  },

  press: {
    title: 'Pressekit: Fakten, App-Symbol und Screenshots',
    description:
      'Fakten, Beschreibung, App-Symbol und Screenshots zu Companions, dem Aquarium-Widget für den iPhone-Home-Bildschirm – für alle, die darüber schreiben.',
    kicker: 'Pressekit',
    h1: 'Du schreibst über Companions?',
    /** `email` is the support address, already a link. */
    leadHtml: (email: string) =>
      `Alles hier darf zitiert werden, und die Bilder kannst du für Berichte über die App frei verwenden. Für alles Weitere schreib an ${email}.`,
    sentenceTitle: 'In einem Satz',
    paragraphTitle: 'In einem Absatz',
    paragraph: (c: { species: number; props: number; languages: number; developer: string }) =>
      `Companions ist eine kostenlose iPhone-App, die ein kleines Aquarium in einem Widget auf dem Home-Bildschirm hält. Du suchst dir deine Fische aus ${count(c.species, 'handgezeichneten Art', 'handgezeichneten Arten')} aus, gibst jedem einen Namen, und sie schwimmen auf ihre eigene Art und in ihrem eigenen Tempo, jedes Mal, wenn du dein Handy entsperrst: im Widget, im Standby, während das iPhone lädt, auf dem Schreibtisch deines Mac und auf der Apple Watch. Füttern muss man nichts, und sterben kann nichts; das Füttern ist ein Spiel, das du spielen kannst, wenn du magst. Die Aquarien gibt es in acht Wasser-Stilen mit ${count(c.props, 'Deko-Teil', 'Deko-Teilen')} zum Anordnen, und in einer Ecke können sie die Uhrzeit, das Datum, das Wetter, dein Schrittziel oder den Mond zeigen. Acht Fische sind in der App enthalten; die übrigen kommen in Paketen, die man einmal kauft, oder alle zusammen mit „Alle Fische“. Companions kommt ohne Konto, ohne Werbung und ohne Tracking aus und ist in ${count(c.languages, 'Sprache', 'Sprachen')} übersetzt. Entwickelt wird die App von ${c.developer} und Shea in Südkorea.`,
    factsTitle: 'Fakten',
    facts: {
      name: 'Name',
      what: 'Was es ist',
      whatValue:
        'Eine iPhone-App mit Home-Bildschirm-Widget: ein animiertes Aquarium, das du mit Fischen besetzt und den ganzen Tag im Blick hast',
      price: 'Preis',
      priceValue:
        'Kostenlos. Fischpakete sind einmalige In-App-Käufe; „Alle Fische“ schaltet alles frei, lebenslang als einmaliger Kauf oder als Monatsabo',
      platforms: 'Plattformen',
      platformsValue: (os: string) =>
        `iPhone und iPad (${os} oder neuer), App für die Apple Watch, Mac über die iPhone-Widgets auf dem Mac`,
      fish: 'Fische',
      fishValue: (species: number, packs: number) =>
        `${count(species, 'Art', 'Arten')} in ${count(packs, 'Paket', 'Paketen')}; acht sind in der App enthalten`,
      styles: 'Aquarium-Stile',
      props: 'Deko',
      propsValue: (props: number) => `${count(props, 'Deko-Teil', 'Deko-Teile')} zum Anordnen auf dem Boden`,
      complications: 'Komplikationen',
      complicationsValue: 'Uhrzeit, Datum, Wetter, Schrittziel und Mondphase in einer Ecke des Aquariums',
      languages: 'Sprachen',
      firstReleased: 'Erstveröffentlichung',
      currentVersion: 'Aktuelle Version',
      currentVersionValue: (version: string, date: string) => `${version} (${date})`,
      developer: 'Entwickler',
      developerValue: (developer: string) => `${developer} (Design und Code) und Shea (Illustration), Südkorea`,
      appStore: 'App Store',
      contact: 'Kontakt',
    },
    iconTitle: 'App-Symbol',
    iconText:
      'Das App-Symbol aus dem App Store, 1024 Pixel groß. Bitte färbe es nicht um und bring es nicht in eine andere Form.',
    iconAlt: 'Das App-Symbol von Companions: die Schwanzflosse eines Goldfischs in hellblauem Wasser',
    screenshotsTitle: 'Screenshots',
    screenshotsText:
      'Die Screenshots aus dem App Store, in ihrer Reihenfolge. Klick auf einen, um die Datei in voller Größe zu öffnen.',
    screenshotAlt: (index: number) => `Companions im App Store: Screenshot ${index}`,
    downloadTitle: 'Download',
  },

  privacy: {
    title: 'Datenschutzrichtlinie',
    description:
      'Companions erhebt, verkauft oder teilt keinerlei personenbezogene Daten. Dein Aquarium bleibt auf deinem Gerät; gesendet werden nur anonyme Nutzungsstatistiken, und die kannst du abschalten.',
    kicker: 'Datenschutzrichtlinie',
    h1: 'Deine Fische gehen nur dich etwas an.',
    /** `date` is already written out in the reader's language. */
    meta: (date: string) =>
      `Zuletzt aktualisiert: ${date}. Dies ist dieselbe Richtlinie, die du in der App unter „Einstellungen“ findest.`,

    /**
     * The app's own policy, section by section, in the app's German wording word for word
     * (it is the policy of record); only the tags are added.
     */
    sections: [
      {
        title: 'Kurz gesagt',
        html: `<p>Companions erhebt, verkauft oder teilt keinerlei personenbezogene Daten. Es gibt kein Konto, das du anlegen müsstest, keine Werbung und keinerlei Tracking, und alles, was die App über dein Aquarium weiß, bleibt auf deinem Gerät. Das Einzige, was Companions überhaupt sendet, sind anonyme Nutzungsstatistiken, damit ich sehen kann, welche Teile der App genutzt werden; das kannst du in den Einstellungen jederzeit abschalten.</p>`,
      },
      {
        title: 'Was Companions speichert',
        html: `<p>Das Einzige, was Companions speichert, ist das Aquarium selbst:</p>
<ul>
<li>Die Fische in deinem Aquarium und die Art jedes einzelnen</li>
<li>Der Name, den du jedem Fisch gibst</li>
<li>Eine zufällige Kennung für jeden Fisch, damit die App zwei Fische derselben Art auseinanderhalten kann</li>
</ul>
<p>Namen werden genau so gespeichert, wie du sie eingibst. Wenn du einen Fisch nach jemandem aus deinem Freundes- oder Familienkreis benennst, bleibt dieser Name wie alles andere auf deinem Gerät – und nirgendwo sonst.</p>`,
      },
      {
        title: 'Wo deine Daten gespeichert werden',
        html: `<p>Dein Aquarium wird auf deinem Gerät gespeichert, in einem Speicherbereich, den sich die Companions-App und ihr Home-Bildschirm-Widget teilen, damit das Widget deine Fische anzeigen kann. Companions lädt diese Daten nirgendwohin hoch.</p>
<p>Wenn du dein Gerät mit iCloud-Backup oder auf einem Computer sicherst, kann das Backup von Apple die Daten von Companions zusammen mit denen deiner anderen Apps enthalten. Diese Backups verwaltest du selbst in den iOS-Einstellungen, und für sie gilt die Datenschutzrichtlinie von Apple, nicht diese hier.</p>`,
      },
      {
        title: 'Widgets',
        html: `<p>Das Companions-Widget zeigt die Fische in deinem Aquarium auf dem Home-Bildschirm oder Sperrbildschirm an. Wie jedes Widget ist es für alle sichtbar, die deinen Bildschirm sehen können. Wenn du VoiceOver verwendest, liest das Widget auch die Namen deiner Fische vor. Das Widget liest dein Aquarium aus dem gemeinsam genutzten Speicher auf deinem Gerät; es sendet keine Daten nach außen.</p>`,
      },
      {
        title: 'Nutzungsstatistiken',
        html: `<p>Um zu erfahren, welche Teile von Companions genutzt werden, sendet die App anonyme Nutzungsstatistiken an Google Analytics für Firebase, einen Dienst von Google. Dabei handelt es sich um Ereignisse wie das Öffnen der App, das Anzeigen eines Bildschirms, das Hinzufügen eines Fisches, die Wahl eines Aquarium-Stils oder das Freischalten eines Pakets, zusammen mit allgemeinen Angaben: Gerätemodell, iOS-Version und Sprache, Version der App sowie Land und Region, die anhand deiner Internetverbindung geschätzt werden, deren Adresse nicht gespeichert wird. Jede Installation der App erhält eine zufällige Kennung, damit wiederholte Nutzung als eine Person zählt; sie ist weder mit dir, deinem Apple Account noch mit deinen Fischen und ihren Namen verknüpft, und Companions verwendet weder die Werbe-ID noch bittet es um die Erlaubnis, dich zu tracken.</p>
<p>Du kannst das mit dem Schalter „Nutzungsdaten teilen“ in den Einstellungen abschalten; danach wird nichts mehr gesendet. Wie Google mit diesen Statistiken umgeht, steht in der Datenschutzerklärung von Google unter <a href="https://policies.google.com/privacy" rel="noopener">policies.google.com/privacy</a>.</p>`,
      },
      {
        title: 'Berechtigungen',
        html: `<p>Companions fordert drei Systemberechtigungen an, jede erst, wenn du zum ersten Mal etwas wählst, das sie braucht, und funktioniert auch ohne jede davon.</p>
<ul>
<li><strong>Fotos zu deiner Fotomediathek hinzufügen:</strong> iOS fragt danach, wenn du zum ersten Mal den QR-Code eines Aquariums in der Fotos-App sicherst. Die Berechtigung erlaubt der App nur, Bilder hinzuzufügen, nicht deine vorhandenen Fotos zu sehen.</li>
<li><strong>Deine Schritte aus Health lesen:</strong> iOS fragt danach, wenn du zum ersten Mal die Komplikation „Schrittziel“ wählst. Die App liest nur die heutige Schrittzahl, um sie in deinem Aquarium zu zeigen, und schreibt nie in Health. Die Schrittzahl und dein Ziel werden im gemeinsamen Speicher auf deinem Gerät abgelegt, damit das Widget sie zeigen kann, und sonst nirgends.</li>
<li><strong>Dein Standort, während die App geöffnet ist:</strong> iOS fragt danach, wenn du nach der Wahl der Komplikation „Mondphase“ oder „Wetter“ unter „Einstellungen“ auf „Standort“ tippst. Die App nutzt ihn, um zu bestimmen, wie der Mond an deinem Ort am Himmel steht – gemerkt wird nur die Hemisphäre –, und um das Wetter dort vom Wetterdienst von Apple abzurufen, der dafür deinen ungefähren Standort erhält und sonst nichts. Companions speichert deinen Standort nicht und sendet ihn nirgendwo sonst hin.</li>
</ul>
<p>Die App greift nicht auf Kamera, Mikrofon, Kontakte, Kalender oder Mitteilungen zu und bittet nicht um die Erlaubnis, dich über andere Apps oder Websites hinweg zu tracken.</p>`,
      },
      {
        title: 'Dienste von Drittanbietern',
        html: `<p>Abgesehen von Google Analytics für Firebase, wie oben beschrieben, enthält Companions keine Software Development Kits (SDKs) von Drittanbietern: keine Absturzberichte und keine Werbung.</p>
<p>Der App Store übernimmt das Laden und Aktualisieren der App, die Pakete, die du kaufst, sowie alle Bewertungen und Rezensionen, die du hinterlässt. Companions sieht deine Zahlungsdaten nie. Für diese Vorgänge gilt die Datenschutzrichtlinie von Apple.</p>`,
      },
      {
        title: 'Was du selbst teilst',
        html: `<p>Einige Tasten in den Einstellungen öffnen andere Apps – und nur, wenn du sie antippst:</p>
<ul>
<li><strong>„E-Mail“</strong> öffnet deine Mail-App mit einer neuen Nachricht an mich. Alles, was du schreibst, wird von deinem E-Mail-Anbieter gesendet, und ich erhalte nur, was du abschickst.</li>
<li><strong>„Companions teilen“</strong> öffnet das Teilen-Menü von iOS mit einem Link zur App. Companions erfährt nicht, mit wem du die App teilst.</li>
<li><strong>„Companions bewerten“</strong> bittet Apple, seine Bewertungsanfrage anzuzeigen. Die Bewertung läuft über Apple; Companions erhält sie nicht.</li>
<li><strong>„Dieses Aquarium teilen“</strong> im Menü der Hauptseite erzeugt einen Code, der nur das Wasser und die Deko des Aquariums enthält – nichts über dich oder deine Fische – und öffnet das Teilen-Menü, damit du ihn verschicken kannst.</li>
</ul>`,
      },
      {
        title: 'Deine Kontrolle',
        html: `<p>Du hast die volle Kontrolle über dein Aquarium:</p>
<ul>
<li>Benenne jeden Fisch jederzeit um oder entferne ihn über die Leiste unten am Aquarium</li>
<li>Wenn du einen Fisch entfernst, wird er von deinem Gerät gelöscht</li>
<li>Schalte die Nutzungsstatistiken mit dem Schalter „Nutzungsdaten teilen“ in den Einstellungen ab</li>
<li>Wenn du die Companions-App löschst, werden das Aquarium und alles andere gelöscht, was die App auf deinem Gerät gespeichert hat (ein zuvor erstelltes Backup deines Geräts kann noch eine Kopie enthalten, bis es ersetzt wird)</li>
</ul>`,
      },
      {
        title: 'Kinder',
        html: `<p>Companions erhebt von niemandem personenbezogene Daten – unabhängig vom Alter. Die oben beschriebenen Nutzungsstatistiken sind anonym und enthalten niemals Namen, in die App eingegebene Texte oder irgendetwas, das ein Kind oder irgendjemand sonst identifizieren könnte.</p>`,
      },
    ],

    /** The one section the app's policy does not have: what this website itself does. */
    website: {
      title: 'Diese Website',
      /** Shown while the website counts visits with Google Analytics. `githubUrl` and
          `googleUrl` are the two companies' privacy statements. */
      countedHtml: (githubUrl: string, googleUrl: string) =>
        `<p>Diese Website besteht aus statischen Seiten, die von GitHub Pages ausgeliefert werden; die Schriften und Bilder kommen von der Website selbst. Wie GitHub mit Webserver-Protokollen umgeht, steht in der <a href="${githubUrl}" rel="noopener">Datenschutzerklärung von GitHub</a>.</p>
<p>Um zu erfahren, wie viele Menschen die Website besuchen, woher sie kommen und welche Seiten und Schaltflächen genutzt werden, verwendet die Website Google Analytics, einen Dienst von Google. Erfasst werden die Seiten, die du öffnest, die Links und Schaltflächen, die du hier anklickst, die Website, von der du gekommen bist, sowie allgemeine Angaben: dein Browser, dein Gerätetyp und deine Sprache sowie Land und Stadt, die anhand deiner Internetverbindung geschätzt werden, deren Adresse nicht gespeichert wird. Damit wiederholte Besuche als ein Besucher zählen, legt Google Analytics eine zufällige Kennung in zwei Cookies in deinem Browser ab, <code>_ga</code> und einem weiteren, dessen Name mit <code>_ga_</code> beginnt, für bis zu zwei Jahre. Die Kennung ist weder mit deinem Namen noch mit der App oder deinen Fischen verknüpft, und nichts davon wird für Werbung verwendet.</p>
<p>Ist die Uhr deines Browsers auf eine Zeitzone in Europa eingestellt, fragt die Website vorher, und von Google wird nichts geladen, solange du es nicht erlaubst. Ausgeschaltet bleibt die Statistik auch ohne Nachfrage, wenn dein Browser ein Signal „Global Privacy Control“ oder „Do Not Track“ sendet. Egal, wo du bist: Hier kannst du deine Entscheidung jederzeit ändern, und wenn du die Statistiken ausschaltest, werden auch die Cookies entfernt. Wie Google mit diesen Statistiken umgeht, steht in der Datenschutzerklärung von Google unter <a href="${googleUrl}" rel="noopener">policies.google.com/privacy</a>.</p>`,
      /** Shown while the website counts nothing. */
      uncountedHtml: (githubUrl: string) =>
        `<p>Diese Website besteht aus statischen Seiten, die von GitHub Pages ausgeliefert werden. Sie setzt keine Cookies, verwendet keine Analysedienste und bindet nichts von Dritten ein; die Schriften und Bilder kommen von der Website selbst. Wie GitHub mit Webserver-Protokollen umgeht, steht in der <a href="${githubUrl}" rel="noopener">Datenschutzerklärung von GitHub</a>.</p>`,
      /** The switch under the section. `state` is `on` or `off` below, already in bold. */
      statisticsHtml: (state: string) => `Die Website-Statistiken sind in diesem Browser ${state}.`,
      on: 'eingeschaltet',
      off: 'ausgeschaltet',
      turnOn: 'Einschalten',
      turnOff: 'Ausschalten',
      updated: (date: string) =>
        `Dieser Abschnitt betrifft nur die Website und wurde zuletzt am ${date} aktualisiert.`,
    },

    changes: {
      title: 'Änderungen an dieser Richtlinie',
      html: `<p>Sollte sich jemals ändern, wie Companions mit Daten umgeht, wird diese Richtlinie in der App aktualisiert und das Datum oben angepasst. Die aktuelle Version findest du jederzeit in den Einstellungen.</p>`,
    },
    contact: {
      title: 'Kontakt',
      /** `email` is the support address, already a link. */
      html: (email: string) =>
        `<p>Wenn du Fragen zu dieser Richtlinie oder dazu hast, wie Companions mit deinen Daten umgeht, schreib mir an ${email} oder verwende die Taste „E-Mail“ in den Einstellungen.</p>`,
    },
  },

  /** The bar that asks visitors in Europe before their visit is counted. */
  consent: {
    label: 'Website-Statistiken',
    /** `privacyUrl` is the privacy page's "This website" section. */
    html: (privacyUrl: string) =>
      `<strong>Darf diese Website deinen Besuch zählen?</strong> Sie würde dafür Google Analytics verwenden, das Cookies setzt, um zu sehen, welche Seiten und Schaltflächen genutzt werden. Niemals für Werbung. <a href="${privacyUrl}">So funktioniert es</a>`,
    no: 'Nein danke',
    allow: 'Erlauben',
  },

  notFound: {
    title: 'Seite nicht gefunden',
    description: 'Diese Seite ist davongeschwommen. Versuch es mit den Hilfeseiten oder der Startseite.',
    h1: 'Diese Seite ist davongeschwommen.',
    lead: 'Unter dieser Adresse gibt es nichts. Den Fischen geht es aber gut.',
    home: 'Zurück zur Startseite',
    help: 'Hilfe und Fragen',
  },
};

export default dictionary;
