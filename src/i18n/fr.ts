/**
 * Every word of the website that is not in a Markdown file, in French (of France).
 * Same shape as en.ts, which is the source and explains each entry.
 *
 * App labels, fish, pack and style names are the app's own French words. The privacy
 * policy's sections, "changes" and "contact" are the app's French policy word for word
 * (with its own punctuation); only the tags are added.
 */
import type { Dictionary } from './en.ts';

/** French counts: zero and one take the singular, two and up the plural. */
const plural = (n: number, one: string, other: string) => (n < 2 ? one : other);

const dictionary: Dictionary = {
  format: {
    listSeparator: ', ',
  },

  app: {
    name: 'Companions - Widget aquarium',
    tagline: 'Un tout petit aquarium sur votre écran d’accueil.',
    subtitle: 'Vos poissons nagent dans votre widget, à longueur de journée.',
    oneLiner:
      'Companions est une app iPhone gratuite qui installe un petit aquarium animé dans un widget de l’écran d’accueil : choisissez vos poissons, donnez-leur un nom et regardez-les nager chaque fois que vous jetez un œil à votre téléphone.',
    madeIn: 'Corée du Sud',
  },

  og: {
    titleHtml: 'Un tout petit aquarium sur l’écran&nbsp;d’accueil.',
    text: 'Vos poissons nagent dans votre widget, à longueur de journée.',
    facts: 'Gratuit sur l’App Store · iPhone, iPad, Mac et Apple Watch',
    imageAlt: (appName: string, tagline: string) => `${appName} : ${tagline}`,
  },

  ld: {
    jobTitle: 'Développeur d’apps indépendant',
    alternateNames: ['Companions widget aquarium', 'Companions widget poissons', 'Companions aquarium virtuel'],
    offer:
      'Téléchargement gratuit, avec les poissons de base et le Pack Eau douce ; les autres poissons s’ajoutent avec des packs achetés une fois pour toutes, ou tous d’un coup avec l’offre Tous les poissons.',
    features: (c: { species: number; packs: number; props: number }) => [
      'Widget aquarium animé pour l’écran d’accueil, en petit, moyen et grand format',
      `${c.species} ${plural(c.species, 'espèce', 'espèces')} de poissons en ${c.packs} ${plural(c.packs, 'pack', 'packs')}, jusqu’à cinq poissons par aquarium`,
      `Huit styles d’aquarium et ${c.props} ${plural(c.props, 'décoration', 'décorations')} à disposer`,
      'Complications dans un coin de l’aquarium : heure, date, météo, objectif de pas et phase lunaire',
      'Compatible avec le mode En veille (StandBy), l’Apple Watch et le Mac (widgets pour iPhone)',
      'Partage d’aquariums entre amis, sous forme de code ou d’image',
      'Sans compte, sans publicité, sans suivi',
    ],
  },

  common: {
    skipToContent: 'Aller au contenu',
    breadcrumb: 'Fil d’Ariane',
    updated: (date: string) => `Mis à jour le ${date}`,
  },

  nav: {
    site: 'Site',
    homeLabel: 'Accueil de Companions',
    menu: 'Menu',
    help: 'Aide',
    blog: 'Blog',
    fish: 'Poissons',
    styles: 'Styles',
    whatsNew: 'Nouveautés',
    support: 'Assistance',
    press: 'Kit presse',
    download: 'Télécharger',
    get: 'Obtenir',
  },

  footer: {
    facts: (os: string) => `Gratuit · ${os} ou version ultérieure · iPhone, iPad, Mac et Apple Watch`,
    columnSite: 'Companions',
    columnAbout: 'À propos',
    home: 'Accueil',
    help: 'Aide et questions fréquentes',
    blog: 'Blog',
    packs: 'Poissons et packs',
    styles: 'Styles d’aquarium',
    whatsNew: 'Nouveautés',
    press: 'Kit presse',
    support: 'Assistance',
    privacy: 'Politique de confidentialité',
    email: 'Nous écrire',
    madeWith: 'Développé avec ♡ en Corée du Sud',
    legal: (year: number, owner: string) =>
      `© ${year} ${owner}. Apple, le logo Apple, iPhone, iPad, Mac, Apple Watch et App Store sont des marques d’Apple Inc.`,
    language: 'Langue',
  },

  badge: {
    label: 'Télécharger Companions dans l’App Store',
    alt: 'Télécharger dans l’App Store',
  },

  tank: {
    label: (size: 'small' | 'medium' | 'large' | 'watch', style: string, count: number) => {
      const tank = {
        small: `Petit aquarium de style ${style}`,
        medium: `Aquarium moyen de style ${style}`,
        large: `Grand aquarium de style ${style}`,
        watch: `Aquarium de style ${style} sur l’Apple Watch`,
      }[size];
      return `${tank}, avec ${count} ${plural(count, 'poisson', 'poissons')}`;
    },
    namedFish: (name: string, species: string) => `${name} (${species})`,
  },

  hero: {
    label: 'Présentation',
    titleHtml: 'Un tout petit aquarium<br />sur l’écran&nbsp;d’accueil.',
    tankLabel:
      'Le widget Companions : un poisson-clown, une idole des Maures, un chirurgien bleu et un hippocampe nagent parmi des fougères et une éponge',
    phoneAlt: 'L’écran d’accueil d’un iPhone, avec le widget aquarium Companions en haut à gauche',
    scroll: 'Faire défiler',
  },

  home: {
    title: (appName: string) => `${appName} : vos poissons sur l’écran d’accueil de l’iPhone`,
    description: (species: number) =>
      `Companions est un widget aquarium gratuit pour iPhone : choisissez parmi ${species} ${plural(species, 'poisson', 'poissons')}, donnez-leur un nom et regardez-les nager sur votre écran d’accueil, en mode En veille, sur votre Mac et sur votre Apple Watch. Pas de repas, pas de ménage, pas de remords.`,

    places: {
      kicker: 'Toujours en vue',
      title: 'Il vit là où vous posez les yeux.',
      lead: 'Ajoutez le widget une fois, et vos poissons sont là à chaque coup d’œil sur votre téléphone. Les mêmes poissons, la même eau, sans avoir à ouvrir l’app.',
      homeScreen: {
        title: 'Écran d’accueil',
        text: 'Petit, moyen ou grand, dans l’un des huit styles. Gardez un seul aquarium ou toute une étagère, avec des poissons différents pour chaque taille.',
      },
      standby: {
        title: 'Mode En veille',
        text: 'Posez votre iPhone sur le côté pendant qu’il charge : l’aquarium vous tient compagnie toute la nuit, à côté de l’horloge.',
        date: 'mar. 1',
      },
      watch: {
        title: 'Apple Watch',
        text: 'L’app Companions pour Apple Watch met votre petit aquarium à votre poignet, synchronisé depuis votre iPhone. La montre a déjà son horloge : dans l’aquarium, il n’y a donc que les poissons.',
      },
      ipad: {
        title: 'iPad',
        text: 'Une app Companions complète et autonome pour iPad. Composez votre aquarium sur grand écran et ajoutez des widgets à votre écran d’accueil, sans avoir besoin d’un iPhone.',
      },
      mac: {
        title: 'Mac',
        text: 'Affichez les widgets de votre iPhone sur le bureau de votre Mac grâce à Continuité, ou ajoutez-les depuis l’app pour Mac. Vos poissons vous tiennent compagnie entre deux fenêtres.',
      },
    },

    fish: {
      kicker: (species: number, packs: number) =>
        `${species} ${plural(species, 'espèce', 'espèces')} en ${packs} ${plural(packs, 'pack', 'packs')}`,
      title: 'Faites connaissance avec les poissons.',
      lead: 'Chaque aquarium commence avec trois poissons (Tropical, Sardine et Ballon), et le Pack Eau douce est offert. Les autres arrivent par packs, achetés une fois et gardés pour toujours, ou d’un seul coup avec l’offre Tous les poissons. Chaque poisson nage à sa façon, à son rythme, et lâche de temps en temps une petite bulle.',
      more: 'Tous les poissons, pack par pack',
    },

    customize: {
      kicker: 'À votre image',
      title: 'Votre aquarium, à votre façon.',
      lead: 'Huit couleurs d’eau, dix-neuf décorations à disposer à votre guise, une info utile dans un coin et une icône d’app assortie.',
      props: {
        kicker: (count: number) => `${count} ${plural(count, 'décoration', 'décorations')}`,
        title: 'Décorez le fond',
        text: 'Fougères, coraux, coquillages, une maison ananas, un moaï. Faites-les glisser où bon vous semble, redimensionnez, retournez, annulez. Enregistrez autant d’aquariums que vous le souhaitez et passez de l’un à l’autre.',
      },
      complications: {
        kicker: 'Complications',
        title: 'Une info utile dans un coin',
        text: 'L’heure, la date, la météo du jour, votre objectif de pas ou la Lune de ce soir, en blanc sur l’eau. Avec l’offre Tous les poissons.',
      },
      icons: {
        kicker: 'Six icônes d’app',
        title: 'Une icône assortie',
        names: { minimal: 'Minimal', twilight: 'Crépuscule', pond: 'Étang', reed: 'Roseau', blossom: 'Fleur', dark: 'Sombre' },
        text: (names: string) => `${names} : choisissez dans les Réglages celle qui va le mieux avec votre écran d’accueil.`,
      },
    },

    calm: {
      kicker: 'La compagnie, sans les corvées',
      title: 'Pas de repas. Pas de ménage. Pas de remords.',
      lead: 'Juste quelques compagnons hauts en couleur, toujours là.',
      cards: [
        {
          title: 'Ici, rien ne meurt',
          text: 'Partez une semaine, un mois, un an. Vous retrouverez vos poissons exactement comme vous les avez laissés : en train de nager.',
        },
        {
          title: 'Ni compte, ni pub',
          text: 'Aucune inscription, aucun suivi, rien à acheter pour continuer à jouer. Votre aquarium reste sur votre appareil.',
        },
        {
          title: 'Nourrissez-les si ça vous chante',
          text: 'Touchez la fourchette et le couteau, lâchez une pincée de nourriture dans l’eau et regardez-les se précipiter dessus. Si vous passez votre tour, personne ne vous en voudra.',
        },
        {
          title: 'Ils vous disent bonjour',
          text: 'Certains matins, un poisson vous salue à l’ouverture de l’app. Touchez la vitre, et un nuage de bulles s’élève. Donnez-leur le nom de qui vous voulez.',
        },
      ],
    },

    questions: {
      kicker: 'Vos questions, nos réponses',
      title: 'Vous alliez nous le demander.',
      readFull: 'Lire la réponse complète',
      all: 'Toutes les questions et réponses',
      readMore: 'En savoir plus',
    },

    blog: {
      kicker: 'Sur le blog',
      title: 'Des idées pour égayer votre écran d’accueil.',
      all: 'Lire le blog',
    },
  },

  sizes: {
    kicker: 'Trois tailles, huit eaux',
    title: 'Un aquarium. Toutes les tailles de widget.',
    lead: 'Le widget existe en petit, moyen et grand format, et chaque taille garde ses propres poissons. Choisissez un style, et tous les aquariums l’adoptent aussitôt.',
    pickerLabel: 'Style d’aquarium',
    large: 'Grand',
    medium: 'Moyen',
    small: 'Petit',
    captionHtml: (style: string) =>
      `L’aquarium ${style} dans les trois tailles. Il suffit de changer de style une fois pour que tous les widgets de votre écran d’accueil suivent.`,
  },

  packGrid: {
    comesWithApp: 'Inclus dans l’app',
    pack: 'Pack',
  },

  styleRow: {
    label: (style: string) => `Le style d’aquarium ${style}`,
  },

  help: {
    title: 'Aide et questions fréquentes',
    description:
      'Les réponses aux questions courantes sur le widget aquarium Companions : l’ajouter à l’écran d’accueil, poissons et packs, styles d’aquarium, complications, mode En veille, Apple Watch, Mac, achats et confidentialité.',
    kicker: 'Aide',
    h1: 'Vos questions, nos réponses.',
    leadHtml: (email: string) =>
      `Tout ce qu’on nous demande sur Companions, réuni au même endroit. Vous ne trouvez pas votre question ? Écrivez à ${email} : une vraie personne vous répondra.`,
    categoriesLabel: 'Catégories',
    categories: {
      'getting-started': 'Premiers pas',
      widgets: 'Le widget',
      'fish-and-packs': 'Poissons et packs',
      'tanks-and-styles': 'Aquariums, styles et décorations',
      complications: 'Complications',
      'other-devices': 'Mode En veille, Apple Watch, Mac et iPad',
      'privacy-and-purchases': 'Achats et confidentialité',
      troubleshooting: 'Quand quelque chose cloche',
    },
    fullAnswer: 'Réponse complète',
    related: 'Voir aussi',
    kindQuestion: 'Question',
    kindArticle: 'Article',
    kindPage: 'Page',
    stuckTitle: 'Toujours un souci ?',
    stuckHtml: (email: string, helpUrl: string) =>
      `Écrivez à ${email} en indiquant votre modèle d’iPhone et votre version d’iOS, et on va arranger ça. <a href="${helpUrl}">Retour à toutes les questions</a>.`,
  },

  blog: {
    title: 'Blog : widgets iPhone, idées d’écran d’accueil et guides',
    description:
      'Les meilleures apps de widgets pour iPhone (aquarium, animaux virtuels, widgets mignons), des idées d’écran d’accueil, des anecdotes sur les poissons et des guides Companions pas à pas.',
    kicker: 'Blog',
    h1: 'Des idées pour égayer votre écran d’accueil.',
    lead: 'Des apps de widgets et d’animaux virtuels qui valent le détour, des idées d’écran d’accueil, des anecdotes sur les poissons et des guides pas à pas, par les deux créateurs de Companions.',
    topicsLabel: 'Thèmes',
    categories: {
      'app-picks': {
        name: 'Apps à découvrir',
        lead: 'Widgets, animaux virtuels, apps cosy : celles qui méritent une place sur votre iPhone.',
      },
      'home-screen': {
        name: 'Idées d’écran d’accueil',
        lead: 'Couleurs, dispositions et widgets pour un écran d’accueil qu’on a plaisir à déverrouiller.',
      },
      fish: {
        name: 'Poissons et aquariums',
        lead: 'Des anecdotes sur les poissons, des idées de noms et des aquariums à thème à composer.',
      },
      guides: {
        name: 'Mode d’emploi',
        lead: 'Pas à pas : le widget, le mode En veille, l’Apple Watch, le Mac et tout ce que fait l’app.',
      },
      troubleshooting: {
        name: 'Dépannage',
        lead: 'Quand un widget fait des siennes : ce qu’il faut vérifier, dans l’ordre.',
      },
    },
    by: (author: string) => `Par ${author}`,
    readingTime: (minutes: number) => `${minutes} min de lecture`,
    onThisPage: 'Sur cette page',
    more: 'À lire aussi',
    cta: (species: number) =>
      `Choisissez vos poissons parmi ${species} ${plural(species, 'espèce dessinée', 'espèces dessinées')} à la main, donnez-leur un nom et regardez-les nager dans votre widget toute la journée. Gratuit, avec huit poissons, tous les styles d’aquarium et les trois tailles de widget.`,
    feedTitle: 'Le blog de Companions',
    feed: 'Flux RSS',
  },

  packs: {
    title: 'Tous les poissons et tous les packs',
    description: (species: number, free: number) =>
      `Les poissons du widget aquarium Companions, pack par pack : ${species} ${plural(species, 'espèce', 'espèces')}, dont ${free} ${plural(free, 'gratuite', 'gratuites')}, le contenu de chaque pack, et comment fonctionnent les packs à achat unique et l’offre Tous les poissons.`,
    kicker: (species: number, packs: number) =>
      `${species} ${plural(species, 'espèce', 'espèces')} · ${packs} ${plural(packs, 'pack', 'packs')}`,
    h1: 'Tous les poissons, tous les packs.',
    lead: (free: number) =>
      `Companions est livré avec ${free} ${plural(free, 'poisson', 'poissons')} : les trois avec lesquels chaque aquarium démarre et les cinq du Pack Eau douce. Les autres packs s’achètent une seule fois, dans l’app, et se gardent pour toujours. L’offre Tous les poissons débloque tous les packs d’un coup, y compris ceux à venir, et avec eux les complications de l’aquarium.`,
    listName: 'Les packs de poissons de Companions',
    howTitle: 'Comment fonctionnent les packs',
    howHtml: [
      'Un pack est un achat unique, réglé via l’App Store dans votre devise. Achetez-le sur votre iPhone et il vous appartient aussi sur votre iPad, avec le même compte Apple ; sur un nouvel appareil, il suffit de toucher « Restaurer l’achat » dans les Réglages pour le retrouver. Rien n’expire, et rien n’est jamais retiré d’un aquarium.',
      'L’offre <strong>Tous les poissons</strong> existe en deux formules : un déblocage à vie, en un seul achat, ou un abonnement mensuel, aussi longtemps que vous le souhaitez. Dans les deux cas, elle débloque tous les packs, tous ceux qui s’ajouteront plus tard, et les complications (l’heure, la date, la météo, les pas et la Lune dans un coin de l’aquarium). Si un abonnement mensuel prend fin, les poissons déjà ajoutés continuent de nager ; seul l’ajout de nouveaux poissons de ces packs est suspendu jusqu’à ce que vous le renouveliez.',
      'Les prix s’affichent dans votre devise, dans les Réglages de l’app.',
    ],
  },

  pack: {
    title: (pack: string, fish: string) => `${pack} : ${fish}`,
    description: (c: { tagline: string; pack: string; count: number; fish: string; free: boolean }) =>
      `${c.tagline} Dans le widget aquarium Companions, « ${c.pack} » réunit ${c.count} ${plural(c.count, 'poisson', 'poissons')} : ${c.fish}. ${c.free ? 'Inclus gratuitement avec l’app.' : 'Achat intégré unique, ou inclus dans l’offre Tous les poissons.'}`,
    kickerFree: 'Inclus dans l’app',
    kickerPaid: 'Pack de poissons',
    tankLabel: (style: string, pack: string, fish: string) => `${pack} dans un aquarium de style ${style} : ${fish}`,
    tankCaption: (pack: string, style: string) => `${pack} dans un aquarium de style ${style}, en widget moyen.`,
    fishAlt: (fish: string) => `${fish}, illustration tirée de Companions`,
    // The name cannot take an article or agree with anything, so it stands in guillemets
    // as the subject, and nothing in the sentence depends on its gender.
    fishText: (fish: string, swim: 'swimmer' | 'floater' | 'creeper' | 'crawler', scale: number) => {
      const how = {
        swimmer: 'nage entre deux eaux et file à bonne allure, en montant et en descendant un peu',
        floater:
          'flotte plutôt que de nager : à n’importe quelle hauteur, comme un poisson, mais en dérivant lentement',
        creeper:
          'reste sur le fond et y progresse si lentement qu’on perçoit à peine son mouvement, en s’inclinant un peu dans le sens de la marche',
        crawler: 'arpente le fond à petits pas pressés, en tressautant un peu au rythme de ses pattes',
      }[swim];
      const size =
        scale > 1
          ? ` À l’écran, sa taille dépasse de ${Math.round((scale - 1) * 100)} % celle d’un poisson standard.`
          : scale < 1
            ? ' À l’écran, sa taille est un peu inférieure à celle d’un poisson standard.'
            : '';
      return `« ${fish} » ${how}.${size}`;
    },
    howTitle: 'Comment ajouter ces poissons',
    step1Html: 'Ouvrez Companions et touchez le <strong>+</strong> au bout du plateau, sous l’aquarium.',
    step2Html: (pack: string) => `Trouvez <strong>${pack}</strong> dans la liste, puis touchez un poisson.`,
    step3FreeHtml: 'Il tombe dans l’eau avec un petit plouf. Donnez-lui un nom, ou gardez celui qu’il a déjà.',
    step3PaidHtml:
      'Si le pack est verrouillé, touchez <strong>Débloquer</strong> et achetez le pack une fois pour toutes, ou l’offre Tous les poissons pour avoir tous les packs. Le poisson tombe alors dans l’eau avec un petit plouf. Donnez-lui un nom, ou gardez celui qu’il a déjà.',
    after:
      'Un aquarium accueille cinq poissons, et chaque taille de widget garde les siens : le petit, le moyen et le grand aquarium peuvent donc être peuplés différemment.',
    namesTitle: 'Les noms dans d’autres langues',
    namesIntro: (languages: number) =>
      `Companions est traduit en ${languages} ${plural(languages, 'langue', 'langues')}. Voici les noms que l’app donne à ces poissons :`,
    languageHeader: 'Langue',
    others: 'Autres packs',
  },

  styles: {
    title: 'Les huit styles d’aquarium',
    description: (styles: string) =>
      `Toutes les eaux du widget aquarium Companions : ${styles}. À quoi ressemble chaque style, quels poissons lui vont bien, et comment changer le style d’un aquarium.`,
    kicker: (count: number) => `${count} ${plural(count, 'style', 'styles')}`,
    h1: 'La même vitre, une autre eau.',
    lead: 'Un style colore l’eau et le fond ; la vitre, son rebord et ses reflets ne changent pas, si bien que le petit, le moyen et le grand aquarium ont l’air d’être le même aquarium, en plus grand. Changez le style d’un aquarium sur la page « Modifier l’aquarium », et tous les widgets qui l’affichent suivent.',
    tankLabel: (style: string) => `Le style d’aquarium ${style}, en widget moyen`,
    counter: (index: number, count: number) => `Style ${index} sur ${count}`,
    blurbs: {
      minimal:
        'L’aquarium bleu des débuts de l’app : un azur plus clair en haut, qui se fond en un bleu ciel éclatant vers le milieu, sur une brume blanche. Lumineux, net, et celui qui met le mieux en valeur la plupart des poissons.',
      deepOcean:
        'Du saphir en haut, là où entre la lumière, puis du bleu marine, jusqu’à un indigo presque noir au fond. Les méduses y brillent ; les poissons de récif ressortent à merveille.',
      pond: 'Un vert ensoleillé en surface, qui fonce en vert feuille puis tire un peu sur l’olive à l’approche d’un fond de sable chaud. Idéal pour les koïs, les truites et les créatures d’étang.',
      reed: 'Un vert plus froid, qui tire sur le bleu canard, le plus proche cousin de Minimal côté température, sur un fond beige discret. Passer de l’un à l’autre donne l’impression d’un changement de lumière, pas d’aquarium.',
      blossom:
        'Un rose pâle de fleur de cerisier en surface, qui s’adoucit en un rose tendre, sur la même brume blanche que Minimal. Un rose qui reste du côté froid, pour que les poissons orange et rouges gardent tout leur éclat.',
      dark: 'Aussi noir que l’écran d’accueil le permet, pour les écrans tout en noir : un anthracite neutre en surface, qui descend jusqu’au noir pur sous le fond, avec des reflets de vitre atténués, pour rester discret parmi les icônes sombres.',
      pumpkin:
        'Un orange citrouille tout doux en surface, qui fonce en un orange plus profond, sur une brume blanche. Il s’arrête avant le jaune, pour que le carassin et le koï doré continuent de se détacher.',
      lavender:
        'Minimal et Fleur, en version lavande : un mauve aussi éclatant que le permet une teinte aussi claire, sur la même brume blanche. Les discus et les fléchettes s’y plaisent.',
    },
    howTitle: 'Comment changer le style d’un aquarium',
    stepsHtml: [
      'Ouvrez Companions et touchez le bouton <strong>⋯</strong> en haut de la page, puis <strong>Modifier cet aquarium</strong>.',
      'Ouvrez le menu des styles en haut de la page « Modifier l’aquarium » et choisissez une eau. L’aquarium change sous votre doigt.',
      'Touchez <strong>Fermer</strong>. L’aquarium s’enregistre tout seul, et le widget de votre écran d’accueil se met à jour.',
    ],
    after:
      'Le style appartient à l’aquarium, pas à l’app : sur la page « Mes aquariums », vous pouvez garder côte à côte un petit aquarium Fleur et un grand aquarium Sombre, et choisir celui qu’affiche votre widget.',
  },

  whatsNew: {
    title: 'Nouveautés et notes de version',
    description: (version: string, date: string) =>
      `Les notes de version du widget aquarium Companions, mise à jour après mise à jour. La version actuelle est la ${version}, sortie le ${date}.`,
    kicker: 'Nouveautés',
    h1: 'Toutes les versions, dans l’ordre.',
    lead: (version: string, date: string) =>
      `La version actuelle, Companions ${version}, est sortie le ${date}. Les mises à jour arrivent par l’App Store.`,
    heading: (version: string, title: string) => `${version} : ${title}`,
    entryTitle: (version: string, title: string) => `Companions ${version} : ${title}`,
    versionKicker: (version: string) => `Version ${version}`,
    all: 'Toutes les versions',
  },

  support: {
    title: 'Assistance et contact',
    description: (email: string) =>
      `Besoin d’aide avec le widget aquarium Companions ? Les solutions aux problèmes courants, et comment joindre le développeur à ${email}.`,
    kicker: 'Assistance',
    h1: 'On va arranger ça.',
    leadHtml: (email: string) =>
      `Derrière Companions, nous sommes deux, et l’un de nous répond personnellement à chaque e-mail. Écrivez à ${email}, ou utilisez le bouton E-mail des Réglages de l’app, qui remplit les informations utiles à votre place.`,
    contactName: 'Assistance Companions',
    beforeTitle: 'Avant de nous écrire',
    beforeHtml: (helpUrl: string) =>
      `La plupart des questions trouvent leur réponse dans les <a href="${helpUrl}">pages d’aide</a>. Celles qui reviennent le plus souvent :`,
    includeTitle: 'Ce qu’il faut nous indiquer',
    include: [
      'Votre modèle d’iPhone et votre version d’iOS (Réglages › Général › Informations).',
      'La version de Companions, affichée tout en bas des Réglages de l’app.',
      'Ce que vous attendiez, et ce qui s’est passé à la place. Une capture d’écran ou un enregistrement de l’écran nous aide énormément.',
    ],
    purchasesTitle: 'Achats et remboursements',
    purchasesHtml: (reportUrl: string) =>
      `Les packs et l’offre Tous les poissons sont vendus par Apple via l’App Store : les remboursements passent donc par Apple. Rendez-vous sur <a href="${reportUrl}" rel="noopener">reportaproblem.apple.com</a>, connectez-vous et choisissez l’achat concerné. Si un pack que vous avez acheté s’affiche comme verrouillé, ouvrez les Réglages de l’app et touchez <strong>Restaurer l’achat</strong> ; assurez-vous d’utiliser le compte Apple qui a servi à l’achat.`,
    privacyTitle: 'Confidentialité',
    privacyHtml: (privacyUrl: string) =>
      `Companions garde votre aquarium sur votre appareil et ne collecte aucune information personnelle. Tous les détails sont dans la <a href="${privacyUrl}">politique de confidentialité</a>.`,
    wishTitle: 'Une idée à nous souffler ?',
    wish: 'Un poisson, une décoration, un style, un endroit où le widget devrait vivre : dites-le-nous. Bien des packs sont nés d’un e-mail.',
  },

  press: {
    title: 'Kit presse',
    description:
      'Fiche technique, description, icône et captures d’écran de Companions, le widget aquarium pour l’écran d’accueil de l’iPhone, pour qui veut écrire à son sujet.',
    kicker: 'Kit presse',
    h1: 'Vous écrivez sur Companions ?',
    leadHtml: (email: string) =>
      `Tout ce qui figure ici peut être cité, et les images utilisées librement, pour parler de l’app. Pour toute autre demande, écrivez à ${email}.`,
    sentenceTitle: 'En une phrase',
    paragraphTitle: 'En un paragraphe',
    paragraph: (c: { species: number; props: number; languages: number; developer: string }) =>
      `Companions est une app iPhone gratuite qui loge un petit aquarium dans un widget de l’écran d’accueil. Vous choisissez vos poissons parmi ${c.species} ${plural(c.species, 'espèce dessinée', 'espèces dessinées')} à la main, vous donnez un nom à chacun, et ils nagent à leur façon, à leur rythme, chaque fois que vous déverrouillez votre téléphone : dans le widget, en mode En veille pendant que le téléphone charge, sur le bureau de votre Mac et sur votre Apple Watch. Pas besoin de les nourrir, et rien ne peut mourir ; le repas est un jeu, si le cœur vous en dit. Les aquariums se déclinent en huit styles d’eau, avec ${c.props} ${plural(c.props, 'décoration', 'décorations')} à disposer, et peuvent afficher dans un coin l’heure, la date, la météo, votre objectif de pas ou la Lune. Huit poissons sont fournis avec l’app ; les autres arrivent par packs achetés une seule fois, ou tous ensemble avec l’offre Tous les poissons. Companions fonctionne sans compte, sans publicité et sans suivi, et existe en ${c.languages} ${plural(c.languages, 'langue', 'langues')}. Il est conçu en Corée du Sud par ${c.developer} et Shea.`,
    factsTitle: 'Fiche technique',
    facts: {
      name: 'Nom',
      what: 'Principe',
      whatValue:
        'Une app iPhone et un widget pour l’écran d’accueil : un aquarium animé que vous peuplez de poissons et que vous regardez toute la journée',
      price: 'Prix',
      priceValue:
        'Gratuit. Les packs de poissons sont des achats intégrés uniques ; l’offre Tous les poissons débloque tout, en achat à vie ou en abonnement mensuel',
      platforms: 'Plateformes',
      platformsValue: (os: string) =>
        `iPhone et iPad (${os} ou version ultérieure), app pour Apple Watch, Mac via les widgets pour iPhone`,
      fish: 'Poissons',
      fishValue: (species: number, packs: number) =>
        `${species} ${plural(species, 'espèce', 'espèces')} en ${packs} ${plural(packs, 'pack', 'packs')} ; huit poissons inclus avec l’app`,
      styles: 'Styles d’aquarium',
      props: 'Décorations',
      propsValue: (count: number) => `${count} ${plural(count, 'décoration', 'décorations')} à disposer sur le fond`,
      complications: 'Complications',
      complicationsValue: 'Heure, date, météo, objectif de pas et phase lunaire, dans un coin de l’aquarium',
      languages: 'Langues',
      firstReleased: 'Lancement',
      currentVersion: 'Version actuelle',
      currentVersionValue: (version: string, date: string) => `${version} (${date})`,
      developer: 'Développeur',
      developerValue: (developer: string) => `${developer} (design et code) et Shea (illustrations), Corée du Sud`,
      appStore: 'App Store',
      contact: 'Contact',
    },
    iconTitle: 'Icône',
    iconText: 'L’icône de l’App Store, en 1024 pixels. Merci de ne pas en modifier les couleurs ni la forme.',
    iconAlt: 'L’icône de l’app Companions : la queue d’un poisson rouge dans une eau bleu pâle',
    screenshotsTitle: 'Captures d’écran',
    screenshotsText:
      'Les captures d’écran de l’App Store, dans l’ordre. Cliquez sur l’une d’elles pour obtenir le fichier en taille réelle.',
    screenshotAlt: (index: number) => `Capture d’écran ${index} de Companions sur l’App Store`,
    downloadTitle: 'Télécharger',
  },

  privacy: {
    title: 'Politique de confidentialité',
    description:
      'Companions ne collecte, ne vend ni ne partage aucune information personnelle. Votre aquarium reste sur votre appareil ; seules des statistiques d’utilisation anonymes sont envoyées, et vous pouvez les désactiver.',
    kicker: 'Politique de confidentialité',
    h1: 'Vos poissons ne regardent que vous.',
    meta: (date: string) =>
      `Dernière mise à jour : ${date}. C’est la même politique que celle affichée dans l’app, dans les Réglages.`,

    // The app's own policy in French, word for word, with the app's own punctuation.
    sections: [
      {
        title: "En bref",
        html: "<p>Companions ne collecte, ne vend ni ne partage aucune information personnelle. Il n'y a aucun compte à créer, aucune publicité et aucun suivi d'aucune sorte, et tout ce que l'app sait de votre aquarium reste sur votre appareil. La seule chose que Companions envoie, ce sont des statistiques d'utilisation anonymes, pour que je puisse voir quelles parties de l'app sont utilisées ; vous pouvez les désactiver à tout moment dans les Réglages.</p>",
      },
      {
        title: "Ce que Companions enregistre",
        html: "<p>La seule chose que Companions enregistre est l'aquarium lui-même :</p>\n<ul>\n<li>Les poissons de votre aquarium, et l'espèce de chacun</li>\n<li>Le nom que vous donnez à chaque poisson</li>\n<li>Un identifiant aléatoire pour chaque poisson, afin que l'app puisse distinguer deux poissons de la même espèce</li>\n</ul>\n<p>Les noms sont enregistrés exactement comme vous les saisissez. Si vous donnez à un poisson le nom d'un ami ou d'un membre de votre famille, ce nom est conservé sur votre appareil comme tout le reste, et nulle part ailleurs.</p>",
      },
      {
        title: "Où sont conservées vos données",
        html: "<p>Votre aquarium est enregistré sur votre appareil, dans un espace de stockage partagé entre l'app Companions et son widget d'écran d'accueil, afin que le widget puisse afficher vos poissons. Companions n'envoie jamais ces données nulle part.</p>\n<p>Si vous sauvegardez votre appareil avec la sauvegarde iCloud ou sur un ordinateur, la sauvegarde d'Apple peut inclure les données de Companions avec celles de vos autres apps. Ces sauvegardes sont sous votre contrôle dans les Réglages iOS et relèvent de la politique de confidentialité d'Apple, pas de celle-ci.</p>",
      },
      {
        title: "Widgets",
        html: "<p>Le widget Companions affiche les poissons de votre aquarium sur votre écran d'accueil ou votre écran verrouillé. Comme tout widget, il est visible par toute personne qui peut voir votre écran. Si vous utilisez VoiceOver, le widget lit aussi les noms de vos poissons à voix haute. Le widget lit votre aquarium depuis le stockage partagé de votre appareil ; il n'envoie rien nulle part.</p>",
      },
      {
        title: "Statistiques d'utilisation",
        html: "<p>Pour savoir quelles parties de Companions sont utilisées, l'app envoie des statistiques d'utilisation anonymes à Google Analytics pour Firebase, un service exploité par Google. Il s'agit d'événements tels que l'ouverture de l'app, l'affichage d'un écran, l'ajout d'un poisson, le choix d'un style d'aquarium ou le déblocage d'un pack, accompagnés d'informations générales : le modèle de l'appareil, la version d'iOS et la langue, la version de l'app, ainsi que le pays et la région estimés d'après votre connexion Internet, dont l'adresse n'est pas conservée. Chaque installation de l'app reçoit un identifiant aléatoire afin qu'une utilisation répétée compte comme une seule personne ; il n'est lié ni à vous, ni à votre compte Apple, ni à vos poissons et à leurs noms, et Companions n'utilise pas l'identifiant publicitaire et ne demande pas l'autorisation de vous suivre.</p>\n<p>Vous pouvez désactiver tout cela avec l'interrupteur Partager les données d'utilisation dans les Réglages ; plus rien n'est alors envoyé. Le traitement de ces statistiques par Google est décrit dans ses règles de confidentialité, à l'adresse <a href=\"https://policies.google.com/privacy\" rel=\"noopener\">policies.google.com/privacy</a>.</p>",
      },
      {
        title: "Autorisations",
        html: "<p>Companions demande trois autorisations système, chacune la première fois que vous choisissez quelque chose qui en a besoin, et fonctionne sans aucune d'elles.</p>\n<ul>\n<li><strong>Ajouter des photos à votre photothèque :</strong> iOS vous la demande la première fois que vous enregistrez le code QR d'un aquarium dans Photos. Elle permet uniquement à l'app d'ajouter des images, pas de voir les photos que vous avez déjà.</li>\n<li><strong>Lire vos pas dans Santé :</strong> iOS vous la demande la première fois que vous choisissez la complication Objectif de pas. L'app ne lit que le nombre de pas du jour, pour l'afficher dans votre aquarium, et n'écrit jamais dans Santé. Ce nombre et l'objectif que vous fixez sont conservés dans l'espace de stockage partagé de votre appareil pour que le widget puisse les afficher, et nulle part ailleurs.</li>\n<li><strong>Votre position quand l'app est ouverte :</strong> iOS vous la demande lorsque vous touchez Localisation sous Réglages, après avoir choisi la complication Phase lunaire ou Météo. L'app s'en sert pour savoir dans quel sens la Lune apparaît là où vous êtes, en ne retenant que l'hémisphère, et pour obtenir la météo de votre région auprès du service météo d'Apple, qui reçoit votre position approximative pour la prévision et rien d'autre. Companions n'enregistre pas votre position et ne l'envoie nulle part ailleurs.</li>\n</ul>\n<p>L'app n'accède ni à votre appareil photo, ni à votre micro, à vos contacts, à votre calendrier ou à vos notifications, et ne demande pas l'autorisation de vous suivre dans d'autres apps ou sites web.</p>",
      },
      {
        title: "Services tiers",
        html: "<p>En dehors de Google Analytics pour Firebase, décrit ci-dessus, Companions ne contient aucun kit de développement tiers : ni rapport de plantage, ni publicité.</p>\n<p>L'App Store gère le téléchargement et la mise à jour de l'app, les packs que vous achetez, ainsi que les notes et avis que vous choisissez de laisser. Companions ne voit jamais vos informations de paiement. Ces interactions sont régies par la politique de confidentialité d'Apple.</p>",
      },
      {
        title: "Ce que vous choisissez de partager",
        html: "<p>Quelques boutons des Réglages passent la main à d'autres apps, et seulement quand vous les touchez :</p>\n<ul>\n<li><strong>E-mail</strong> ouvre votre app de messagerie avec un nouveau message qui m'est adressé. Tout ce que vous écrivez est envoyé par votre fournisseur de messagerie, et je ne reçois que ce que vous envoyez.</li>\n<li><strong>Partager Companions</strong> ouvre la feuille de partage iOS avec un lien vers l'app. Companions ne voit pas avec qui vous le partagez.</li>\n<li><strong>Noter Companions</strong> demande à Apple d'afficher son invite de notation. Apple gère la note ; Companions ne la reçoit pas.</li>\n<li><strong>Partager cet aquarium</strong>, dans le menu de la page principale, crée un code qui ne contient que l'eau et les décorations de l'aquarium, rien sur vous ni sur vos poissons, et ouvre la feuille de partage pour que vous l'envoyiez.</li>\n</ul>",
      },
      {
        title: "Votre contrôle",
        html: "<p>Vous gardez le contrôle total de votre aquarium :</p>\n<ul>\n<li>Renommez ou retirez n'importe quel poisson à tout moment depuis le plateau au bas de l'aquarium</li>\n<li>Retirer un poisson le supprime de votre appareil</li>\n<li>Désactivez les statistiques d'utilisation avec l'interrupteur Partager les données d'utilisation dans les Réglages</li>\n<li>Supprimer l'app Companions supprime l'aquarium et tout ce que l'app avait enregistré sur votre appareil (une sauvegarde de l'appareil effectuée auparavant peut encore en conserver une copie jusqu'à ce qu'elle soit remplacée)</li>\n</ul>",
      },
      {
        title: "Enfants",
        html: "<p>Companions ne collecte d'informations personnelles auprès de personne, quel que soit son âge. Les statistiques d'utilisation décrites ci-dessus sont anonymes et ne contiennent jamais de noms, rien de ce qui est saisi dans l'app, ni quoi que ce soit qui puisse identifier un enfant, ou qui que ce soit d'autre.</p>",
      },
    ],

    website: {
      title: 'Ce site web',
      countedHtml: (githubUrl: string, googleUrl: string) =>
        `<p>Ce site web est un ensemble de pages statiques hébergées sur GitHub Pages ; les polices et les images proviennent du site lui-même. La façon dont GitHub traite, de son côté, les journaux de ses serveurs web est décrite dans la <a href="${githubUrl}" rel="noopener">déclaration de confidentialité de GitHub</a>.</p>
<p>Pour savoir combien de personnes le visitent, d’où elles viennent et quelles pages et quels boutons sont utilisés, ce site web utilise Google Analytics, un service exploité par Google. Celui-ci enregistre les pages que vous ouvrez et les liens et boutons sur lesquels vous appuyez ici, le site d’où vous venez et des informations générales : votre navigateur, votre type d’appareil et votre langue, ainsi que le pays et la ville estimés d’après votre connexion Internet, dont l’adresse n’est pas conservée. Pour que des visites répétées comptent comme un seul visiteur, il conserve un identifiant aléatoire dans deux cookies de votre navigateur, <code>_ga</code> et un second dont le nom commence par <code>_ga_</code>, pendant deux ans au plus. Cet identifiant n’est lié ni à votre nom, ni à l’app, ni à vos poissons, et rien de tout cela ne sert à la publicité.</p>
<p>Si l’horloge de votre navigateur est réglée sur un fuseau horaire d’Europe, le site vous demande d’abord votre accord, et rien n’est chargé depuis Google tant que vous ne l’avez pas donné. Les statistiques restent également désactivées, sans que la question vous soit posée, si votre navigateur envoie un signal Global Privacy Control ou Do Not Track. Où que vous soyez, vous pouvez changer d’avis ici à tout moment, et désactiver les statistiques supprime aussi les cookies. Le traitement de ces statistiques par Google est décrit dans ses règles de confidentialité, à l’adresse <a href="${googleUrl}" rel="noopener">policies.google.com/privacy</a>.</p>`,
      uncountedHtml: (githubUrl: string) =>
        `<p>Ce site web est un ensemble de pages statiques hébergées sur GitHub Pages. Il ne dépose aucun cookie, n’effectue aucune mesure d’audience et n’intègre aucun contenu tiers ; les polices et les images proviennent du site lui-même. La façon dont GitHub traite, de son côté, les journaux de ses serveurs web est décrite dans la <a href="${githubUrl}" rel="noopener">déclaration de confidentialité de GitHub</a>.</p>`,
      statisticsHtml: (state: string) => `Les statistiques du site sont ${state} dans ce navigateur.`,
      on: 'activées',
      off: 'désactivées',
      turnOn: 'Activer',
      turnOff: 'Désactiver',
      updated: (date: string) =>
        `Cette section ne concerne que le site web ; sa dernière mise à jour date du ${date}.`,
    },

    changes: {
      title: "Modifications de cette politique",
      html: "<p>Si Companions change un jour sa façon de traiter les données, cette politique sera mise à jour dans l'app et la date en haut de page révisée. La version en vigueur est toujours accessible depuis les Réglages.</p>",
    },
    contact: {
      title: "Contact",
      html: (email: string) =>
        "<p>Si vous avez des questions sur cette politique ou sur la façon dont Companions traite vos données, écrivez-moi à " + email + " ou utilisez le bouton E-mail des Réglages.</p>",
    },
  },

  consent: {
    label: 'Statistiques du site',
    html: (privacyUrl: string) =>
      `<strong>Ce site peut-il compter votre visite ?</strong> Il utiliserait Google Analytics, qui dépose des cookies, pour voir quelles pages et quels boutons sont utilisés. Jamais à des fins publicitaires. <a href="${privacyUrl}">Comment ça marche</a>`,
    no: 'Non merci',
    allow: 'Autoriser',
  },

  notFound: {
    title: 'Page introuvable',
    description: 'Cette page a pris le large. Essayez les pages d’aide ou la page d’accueil.',
    h1: 'Cette page a pris le large.',
    lead: 'Il n’y a rien à cette adresse. Les poissons, eux, vont très bien.',
    home: 'Retour à l’accueil',
    help: 'Aide et questions fréquentes',
  },
};

export default dictionary;
