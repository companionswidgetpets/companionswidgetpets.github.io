import type { Dictionary } from './en.ts';

/** "1 pez", "2 peces": the number with the right form of the word after it. */
const n = (count: number, one: string, other: string) => `${count} ${count === 1 ? one : other}`;

const dictionary: Dictionary = {
  format: {
    listSeparator: ', ',
  },

  app: {
    name: 'Companions - Widget Pets',
    tagline: 'Un pequeño acuario en tu pantalla de inicio.',
    subtitle: 'Tus peces nadan por tu widget todo el día.',
    oneLiner:
      'Companions es una app gratuita para iPhone que pone un pequeño acuario animado en un widget de la pantalla de inicio: elige tus peces, ponles nombre y velos nadar cada vez que mires el teléfono.',
    madeIn: 'Corea del Sur',
  },

  og: {
    titleHtml: 'Un pequeño acuario en tu pantalla de&nbsp;inicio.',
    text: 'Tus peces nadan por tu widget todo el día.',
    facts: 'Gratis en el App Store · iPhone, iPad, Mac y Apple Watch',
    imageAlt: (appName: string, tagline: string) => `${appName}: ${tagline}`,
  },

  ld: {
    jobTitle: 'Desarrollador independiente de apps',
    alternateNames: ['Companions widget de acuario', 'Companions widget de peces', 'Companions pecera virtual'],
    offer:
      'Descarga gratuita con los peces básicos y el Pack de agua dulce; hay más peces en packs de pago único o con Todos los peces, que lo desbloquea todo.',
    features: (c: { species: number; packs: number; props: number }) => [
      'Widget de acuario animado para la pantalla de inicio, en tamaño pequeño, mediano y grande',
      `${n(c.species, 'especie', 'especies')} de peces en ${n(c.packs, 'pack', 'packs')}; cada pecera admite hasta cinco peces`,
      `Ocho estilos de pecera y ${n(c.props, 'adorno', 'adornos')} para colocar`,
      'Complicaciones de hora, fecha, clima, meta de pasos y fase lunar en una esquina de la pecera',
      'Funciona en el modo En reposo, en el Apple Watch y en Mac (widgets del iPhone)',
      'Comparte peceras con tus amigos como códigos o imágenes',
      'Sin cuenta, sin publicidad y sin rastreo',
    ],
  },

  common: {
    skipToContent: 'Saltar al contenido',
    breadcrumb: 'Ruta de navegación',
    updated: (date: string) => `Actualizado el ${date}`,
  },

  nav: {
    site: 'Sitio',
    homeLabel: 'Inicio de Companions',
    menu: 'Menú',
    help: 'Ayuda',
    blog: 'Blog',
    fish: 'Peces',
    styles: 'Estilos',
    whatsNew: 'Novedades',
    support: 'Soporte',
    press: 'Kit de prensa',
    download: 'Descargar',
    get: 'Obtener',
  },

  footer: {
    facts: (os: string) => `Gratis · ${os} o posterior · iPhone, iPad, Mac y Apple Watch`,
    columnSite: 'Companions',
    columnAbout: 'Acerca de',
    home: 'Inicio',
    help: 'Ayuda y preguntas frecuentes',
    blog: 'Blog',
    packs: 'Peces y packs',
    styles: 'Estilos de pecera',
    whatsNew: 'Novedades',
    press: 'Kit de prensa',
    support: 'Soporte',
    privacy: 'Política de privacidad',
    email: 'Escríbenos',
    madeWith: 'Desarrollado con ♡ en Corea del Sur',
    legal: (year: number, owner: string) =>
      `© ${year} ${owner}. Apple, el logotipo de Apple, iPhone, iPad, Mac, Apple Watch y App Store son marcas comerciales de Apple Inc.`,
    language: 'Idioma',
  },

  badge: {
    label: 'Descarga Companions en el App Store',
    alt: 'Descárgalo en el App Store',
  },

  tank: {
    label: (size: 'small' | 'medium' | 'large' | 'watch', style: string, count: number) => {
      const tank = {
        small: 'Una pecera pequeña',
        medium: 'Una pecera mediana',
        large: 'Una pecera grande',
        watch: 'La pecera del Apple Watch',
      }[size];
      return count === 0 ? `${tank} de estilo ${style}, sin peces` : `${tank} de estilo ${style} con ${n(count, 'pez', 'peces')}`;
    },
    namedFish: (name: string, species: string) => `${name} (${species})`,
  },

  hero: {
    label: 'Presentación',
    titleHtml: 'Un pequeño acuario<br />en tu pantalla de&nbsp;inicio.',
    tankLabel:
      'El widget de Companions: un pez payaso, un ídolo moro, un cirujano azul y un caballito de mar nadando entre helechos y una esponja',
    phoneAlt: 'La pantalla de inicio de un iPhone con el widget de acuario de Companions en la esquina superior izquierda',
    scroll: 'Desplázate',
  },

  home: {
    title: (appName: string) => `${appName}: un acuario en la pantalla de inicio del iPhone`,
    description: (species: number) =>
      `Companions es un widget de acuario gratuito para iPhone: elige entre ${n(species, 'pez', 'peces')}, ponles nombre y míralos nadar en tu pantalla de inicio, en el modo En reposo, en tu Mac y en el Apple Watch. Sin darles de comer, sin limpiar y sin culpa.`,

    places: {
      kicker: 'Siempre a la vista',
      title: 'Vive donde miras.',
      lead: 'Agrega el widget una vez y tus peces estarán ahí cada vez que mires el teléfono. Los mismos peces, la misma agua, sin tener que abrir la app.',
      homeScreen: {
        title: 'Pantalla de inicio',
        text: 'Pequeño, mediano o grande, en cualquiera de los ocho estilos. Ten una sola pecera o toda una colección, con peces distintos en cada tamaño.',
      },
      standby: {
        title: 'Modo En reposo',
        text: 'Pon tu iPhone de lado mientras se carga y la pecera te hará compañía toda la noche, junto al reloj.',
        date: 'mar 1',
      },
      watch: {
        title: 'Apple Watch',
        text: 'La app de Companions para el Apple Watch muestra tu pecera pequeña en la muñeca, sincronizada desde el iPhone. Como el reloj ya da la hora, ahí la pecera solo muestra peces.',
      },
      ipad: {
        title: 'iPad',
        text: 'Una app de Companions completa e independiente para iPad. Crea tu acuario en la pantalla grande y agrega widgets a tu pantalla de inicio, sin necesidad de un iPhone.',
      },
      mac: {
        title: 'Mac',
        text: 'Lleva los widgets de tu iPhone al escritorio de tu Mac con Continuidad, o agrégalos desde la app para Mac. Tus peces te acompañan entre ventana y ventana.',
      },
    },

    fish: {
      kicker: (species: number, packs: number) => `${n(species, 'especie', 'especies')} en ${n(packs, 'pack', 'packs')}`,
      title: 'Conoce a los peces.',
      lead: 'Toda pecera empieza con un Tropical, una Sardina y un Globo, y el Pack de agua dulce viene gratis. El resto llega en packs que compras una vez y son tuyos para siempre, o de golpe con Todos los peces. Cada pez nada a su manera y a su ritmo, y de vez en cuando suelta alguna burbujita.',
      more: 'Ver los peces y los packs',
    },

    customize: {
      kicker: 'Hazla tuya',
      title: 'Tu pecera, a tu manera.',
      lead: 'Ocho aguas distintas, diecinueve adornos para colocar como quieras, algo útil en una esquina y un ícono de la app a juego.',
      props: {
        kicker: (count: number) => n(count, 'adorno', 'adornos'),
        title: 'Decora el fondo',
        text: 'Helechos, corales, conchas, una casa piña, un moái. Arrástralos donde mejor queden, cambia su tamaño, voltéalos y deshaz lo que no te convenza. Guarda tantas peceras como quieras y pasa de una a otra.',
      },
      complications: {
        kicker: 'Complicaciones',
        title: 'Algo útil en una esquina',
        text: 'La hora, la fecha, el clima de hoy, tu meta de pasos o la Luna de esta noche, en blanco sobre el agua. Vienen incluidas con Todos los peces.',
      },
      icons: {
        kicker: 'Seis íconos',
        title: 'Un ícono a juego',
        names: { minimal: 'Minimalista', twilight: 'Crepúsculo', pond: 'Estanque', reed: 'Junco', blossom: 'Flor', dark: 'Oscuro' },
        text: (names: string) => `${names}: elige en Configuración el que mejor combine con tu pantalla de inicio.`,
      },
    },

    calm: {
      kicker: 'La mascota más fácil',
      title: 'Sin darles de comer. Sin limpiar. Sin culpa.',
      lead: 'Solo unos cuantos compañeros llenos de color que siempre están ahí.',
      cards: [
        {
          title: 'Aquí nada se muere',
          text: 'Olvídate de ellos una semana, un mes, un año. Tus peces seguirán exactamente como los dejaste, nadando.',
        },
        {
          title: 'Sin cuenta ni anuncios',
          text: 'No tienes que registrarte, nada te rastrea y no hay que pagar para seguir jugando. Tu pecera se queda en tu dispositivo.',
        },
        {
          title: 'Dales de comer si quieres',
          text: 'Toca el tenedor y el cuchillo, echa una pizca de comida al agua y mira cómo la persiguen. Si no lo haces, no pasa nada.',
        },
        {
          title: 'Te saludan',
          text: 'Algunas mañanas, un pez te saluda cuando abres la app. Toca el vidrio y sube una nube de burbujas. Ponles el nombre de quien quieras.',
        },
      ],
    },

    questions: {
      kicker: 'Preguntas y respuestas',
      title: 'Por si te lo preguntabas.',
      readFull: 'Leer la respuesta completa',
      all: 'Todas las preguntas y respuestas',
      readMore: 'Leer más',
    },

    blog: {
      kicker: 'Del blog',
      title: 'Ideas para alegrar tu pantalla de inicio.',
      all: 'Ir al blog',
    },
  },

  sizes: {
    kicker: 'Tres tamaños, ocho aguas',
    title: 'Una pecera, del tamaño que quieras.',
    lead: 'El widget viene en tamaño pequeño, mediano y grande, y cada tamaño tiene sus propios peces. Elige un estilo y todas las peceras cambian a juego.',
    pickerLabel: 'Estilo de pecera',
    large: 'Grande',
    medium: 'Mediano',
    small: 'Pequeño',
    captionHtml: (style: string) =>
      `El estilo ${style} en los tres tamaños. Cámbialo una vez y todos los widgets de tu pantalla de inicio cambian con él.`,
  },

  packGrid: {
    comesWithApp: 'Viene con la app',
    pack: 'Pack',
  },

  styleRow: {
    label: (style: string) => `El estilo de pecera ${style}`,
  },

  help: {
    title: 'Ayuda y preguntas frecuentes',
    description:
      'Respuestas a las dudas más comunes sobre el widget de acuario Companions: cómo agregarlo a la pantalla de inicio, peces y packs, estilos de pecera, complicaciones, modo En reposo, Apple Watch, Mac, compras y privacidad.',
    kicker: 'Ayuda',
    h1: 'Tus dudas, resueltas.',
    leadHtml: (email: string) =>
      `Todo lo que la gente pregunta sobre Companions, en un solo lugar. ¿No encuentras tu pregunta? Escribe a ${email} y te responderá una persona.`,
    categoriesLabel: 'Categorías',
    categories: {
      'getting-started': 'Primeros pasos',
      widgets: 'El widget',
      'fish-and-packs': 'Peces y packs',
      'tanks-and-styles': 'Peceras, estilos y adornos',
      complications: 'Complicaciones',
      'other-devices': 'Modo En reposo, Apple Watch, Mac y iPad',
      'privacy-and-purchases': 'Compras y privacidad',
      troubleshooting: 'Cuando algo no se ve bien',
    },
    fullAnswer: 'Respuesta completa',
    related: 'Relacionado',
    kindQuestion: 'Pregunta',
    kindArticle: 'Artículo',
    kindPage: 'Página',
    stuckTitle: '¿Sigues sin solución?',
    stuckHtml: (email: string, helpUrl: string) =>
      `Escribe a ${email} con el modelo de tu iPhone y la versión de iOS, y lo resolvemos. <a href="${helpUrl}">Volver a todas las preguntas</a>.`,
  },

  blog: {
    title: 'Blog: widgets para iPhone, apps recomendadas y guías',
    description:
      'Ideas para personalizar tu pantalla de inicio, las mejores apps de widgets y mascotas virtuales para iPhone, datos curiosos de peces y guías de Companions.',
    kicker: 'Blog',
    h1: 'Ideas para alegrar tu pantalla de inicio.',
    lead: 'Apps de widgets y de mascotas que vale la pena probar, ideas para tu pantalla de inicio, datos curiosos de peces y guías paso a paso. Lo escribimos las dos personas que hacemos Companions.',
    topicsLabel: 'Temas',
    categories: {
      'app-picks': {
        name: 'Apps recomendadas',
        lead: 'Widgets, mascotas virtuales y apps relajantes que merecen un lugar en tu iPhone.',
      },
      'home-screen': {
        name: 'Ideas para la pantalla de inicio',
        lead: 'Colores, diseños y widgets para una pantalla de inicio que dé gusto desbloquear.',
      },
      fish: {
        name: 'Peces y acuarios',
        lead: 'Datos curiosos, ideas de nombres para tus peces y peceras temáticas que puedes crear.',
      },
      guides: {
        name: 'Guías de Companions',
        lead: 'Paso a paso: el widget, el modo En reposo, el Apple Watch, tu Mac y todo lo que hay en la app.',
      },
      troubleshooting: {
        name: 'Solución de problemas',
        lead: 'Cuando un widget hace de las suyas: qué revisar y en qué orden.',
      },
    },
    by: (author: string) => `Por ${author}`,
    readingTime: (minutes: number) => `${minutes} min de lectura`,
    onThisPage: 'En esta página',
    more: 'Sigue leyendo',
    cta: (species: number) =>
      `Elige tus peces entre ${n(species, 'especie dibujada', 'especies dibujadas')} a mano, ponles nombre y míralos nadar en tu widget todo el día. Gratis, con ocho peces, todos los estilos de pecera y los tres tamaños de widget.`,
    feedTitle: 'El blog de Companions',
    feed: 'Feed RSS',
  },

  packs: {
    title: 'Peces y packs: la lista completa',
    description: (species: number, free: number) =>
      `${species === 1 ? 'El pez' : `Los ${species} peces`} del widget de acuario Companions, pack por pack: ${free === 1 ? 'el que viene gratis' : `los ${free} que vienen gratis`}, qué trae cada pack y cómo funcionan los packs de pago único y Todos los peces.`,
    kicker: (species: number, packs: number) => `${n(species, 'especie', 'especies')} · ${n(packs, 'pack', 'packs')}`,
    h1: 'Cada pez, cada pack.',
    lead: (free: number) =>
      `Companions viene con ${n(free, 'pez', 'peces')}: los tres con los que empieza toda pecera y los cinco del Pack de agua dulce. Los demás packs se compran una sola vez, dentro de la app, y son tuyos para siempre. Con Todos los peces desbloqueas todos los packs a la vez, incluidos los que están por llegar, y con ellos las complicaciones de la pecera.`,
    listName: 'Packs de peces de Companions',
    howTitle: 'Cómo funcionan los packs',
    howHtml: [
      'Un pack es una compra única a través del App Store, en tu moneda local. Si lo compras en tu iPhone, también es tuyo en tu iPad con la misma Cuenta de Apple, y “Restaurar compra”, en Configuración, lo recupera en un dispositivo nuevo. Nada caduca y nunca desaparece nada de tus peceras.',
      '<strong>Todos los peces</strong> se ofrece de dos maneras: una compra de por vida, con un solo pago, o un plan mensual mientras te interese. En los dos casos desbloquea todos los packs, los que se agreguen más adelante y las complicaciones (la hora, la fecha, el clima, los pasos y la Luna en una esquina de la pecera). Si el plan mensual vence, los peces que ya agregaste siguen nadando; lo único que queda en espera hasta que lo renueves es agregar peces nuevos de esos packs.',
      'Los precios aparecen en la app, en Configuración, en tu propia moneda.',
    ],
  },

  pack: {
    title: (pack: string, fish: string) => `${pack}: ${fish}`,
    /** "el Pack de arrecife", but "el pack Peces básicos" for a name that does not start with "Pack". */
    description: (c: { tagline: string; pack: string; count: number; fish: string; free: boolean }) =>
      `${c.tagline} En el widget de acuario Companions, ${/^pack\b/i.test(c.pack) ? 'el' : 'el pack'} ${c.pack} incluye ${n(c.count, 'pez', 'peces')}: ${c.fish}. ${c.free ? 'Viene gratis con la app.' : 'Es una compra única dentro de la app, o parte de Todos los peces.'}`,
    kickerFree: 'Viene con la app',
    kickerPaid: 'Pack de peces',
    tankLabel: (style: string, pack: string, fish: string) => `${pack} en una pecera de estilo ${style}: ${fish}`,
    tankCaption: (pack: string, style: string) => `${pack} en una pecera de estilo ${style}, en tamaño de widget mediano.`,
    fishAlt: (fish: string) => `${fish}, tal como se ve en Companions`,
    fishText: (fish: string, swim: 'swimmer' | 'floater' | 'creeper' | 'crawler', scale: number) => {
      const how = {
        swimmer: ' nada a media agua y se desliza con brío, subiendo y bajando un poco',
        floater: ', más que nadar, flota: se queda en cualquier punto del agua donde podría estar un pez y se deja llevar despacio',
        creeper:
          ' no se despega del fondo y avanza por él poco a poco, tan despacio que casi no se nota que se mueve, inclinándose un poco hacia donde va',
        crawler: ' corretea por el fondo, subiendo y bajando un poco al ritmo de sus patas',
      }[swim];
      const size =
        scale > 1
          ? ` En la pecera, su tamaño es un ${Math.round((scale - 1) * 100)} % mayor que el de un pez estándar.`
          : scale < 1
            ? ' En la pecera, su tamaño es un poco menor que el de un pez estándar.'
            : '';
      return `${fish}${how}.${size}`;
    },
    howTitle: 'Cómo agregar estos peces',
    step1Html: 'Abre Companions y toca el <strong>+</strong> al final de la bandeja que hay debajo de la pecera.',
    step2Html: (pack: string) => `Busca <strong>${pack}</strong> en la lista y toca un pez.`,
    step3FreeHtml: 'Cae al agua con un chapuzón. Ponle un nombre o déjale el que trae.',
    step3PaidHtml:
      'Si el pack está bloqueado, toca <strong>Desbloquear</strong> y compra el pack una sola vez, o bien Todos los peces, que incluye todos los packs. Después, el pez cae al agua con un chapuzón. Ponle un nombre o déjale el que trae.',
    after:
      'Una pecera admite cinco peces, y cada tamaño de widget tiene los suyos, así que las peceras pequeña, mediana y grande pueden tener peces distintos.',
    namesTitle: 'Nombres en otros idiomas',
    namesIntro: (languages: number) =>
      `Companions está disponible en ${n(languages, 'idioma', 'idiomas')}. Así llama la app a estos peces en cada uno:`,
    languageHeader: 'Idioma',
    others: 'Otros packs',
  },

  styles: {
    title: 'Los ocho estilos de pecera',
    description: (styles: string) =>
      `Todos los estilos del widget de acuario Companions: ${styles}. Cómo se ve cada uno, con qué peces luce más y cómo cambiar el estilo de una pecera.`,
    kicker: (count: number) => n(count, 'estilo', 'estilos'),
    h1: 'El mismo vidrio, otra agua.',
    lead: 'Un estilo cambia el color del agua y del fondo; el vidrio, su borde y sus reflejos no cambian, así que las peceras pequeña, mediana y grande se ven como una misma pecera en distintos tamaños. Cambia el estilo de una pecera en la página Editar pecera y todos los widgets que la muestran cambian con ella.',
    tankLabel: (style: string) => `El estilo de pecera ${style}, en tamaño de widget mediano`,
    counter: (index: number, count: number) => `Estilo ${index} de ${count}`,
    blurbs: {
      minimal:
        'La pecera azul con la que se estrenó la app: arriba, un celeste más claro; por el medio, un azul cielo intenso; abajo, una bruma blanca. Luminosa, limpia y la que mejor les sienta a la mayoría de los peces.',
      deepOcean:
        'Zafiro arriba, donde entra la luz, y de ahí baja por el azul marino hasta un índigo casi negro en el fondo. Aquí las medusas brillan y los peces de arrecife resaltan.',
      pond: 'Un verde soleado en la superficie que se oscurece hasta el verde hoja y se vuelve algo oliva al llegar a un fondo de arena cálida. Ideal para los koi, las truchas y las criaturas de estanque.',
      reed: 'Un verde más frío, que tira a verde azulado, el pariente más cercano del estilo Minimalista en temperatura de color, sobre un fondo beige apagado. Pasar de uno a otro parece más un cambio de luz que otra pecera.',
      blossom:
        'Un rosa pálido de flor de cerezo en la superficie que se asienta en un rosa suave, sobre la misma bruma blanca del estilo Minimalista. Es un rosa más bien frío, para que los peces naranjas y rojos no pierdan fuerza.',
      dark: 'Tan negro como lo permite la pantalla de inicio, para quienes lo llevan todo en negro: un gris carbón neutro en la superficie que baja hasta un negro puro en el fondo, con los reflejos del vidrio atenuados para que pase desapercibido entre íconos oscuros.',
      pumpkin:
        'Un naranja calabaza suave en la superficie que se asienta en un naranja más intenso, sobre una bruma blanca. Sin llegar al amarillo, para que los peces dorados y los koi de oro sigan destacando.',
      lavender:
        'Los estilos Minimalista y Flor, con el tono llevado a la flor de lavanda: lo más intenso que puede ser un color lavanda tan claro, sobre la misma bruma blanca. Al pez disco y al pez dardo les sienta de maravilla.',
    },
    howTitle: 'Cómo cambiar el estilo de una pecera',
    stepsHtml: [
      'Abre Companions, toca el botón <strong>⋯</strong> en la parte superior de la página y luego <strong>Editar esta pecera</strong>.',
      'Abre el menú de estilos en la parte superior de la página Editar pecera y elige un agua. La pecera cambia bajo tu dedo.',
      'Toca <strong>Cerrar</strong>. La pecera se guarda sola y el widget de tu pantalla de inicio se actualiza con el nuevo estilo.',
    ],
    after:
      'Los estilos son de cada pecera, no de la app: en la página Mis peceras puedes tener una pecera pequeña con el estilo Flor y una grande con el estilo Oscuro, una junto a la otra, y cambiar cuál muestra tu widget.',
  },

  whatsNew: {
    title: 'Novedades',
    description: (version: string, date: string) =>
      `Las novedades del widget de acuario Companions, versión por versión. La versión actual es la ${version}, publicada el ${date}.`,
    kicker: 'Novedades',
    h1: 'Todas las versiones, en orden.',
    lead: (version: string, date: string) =>
      `La versión actual es Companions ${version}, publicada el ${date}. Las actualizaciones llegan a través del App Store.`,
    heading: (version: string, title: string) => `${version}: ${title}`,
    entryTitle: (version: string, title: string) => `Companions ${version}: ${title}`,
    versionKicker: (version: string) => `Versión ${version}`,
    all: 'Todas las versiones',
  },

  support: {
    title: 'Soporte y contacto',
    description: (email: string) =>
      `Ayuda con el widget de acuario Companions: soluciones a los problemas más comunes y cómo escribirle al desarrollador a ${email}.`,
    kicker: 'Soporte',
    h1: 'Lo resolvemos.',
    leadHtml: (email: string) =>
      `Detrás de Companions hay dos personas, y uno de los dos responde personalmente cada correo. Escribe a ${email} o usa el botón Correo electrónico de la Configuración de la app, que completa los datos por ti.`,
    contactName: 'Soporte de Companions',
    beforeTitle: 'Antes de escribir',
    beforeHtml: (helpUrl: string) =>
      `La mayoría de las preguntas tienen respuesta en las <a href="${helpUrl}">páginas de ayuda</a>. Las que más nos llegan:`,
    includeTitle: 'Qué incluir',
    include: [
      'El modelo de tu iPhone y la versión de iOS (Configuración › General › Información).',
      'La versión de Companions, que aparece al final de la Configuración de la app.',
      'Qué esperabas que pasara y qué pasó en cambio. Una captura o una grabación de pantalla ayuda muchísimo.',
    ],
    purchasesTitle: 'Compras y reembolsos',
    purchasesHtml: (reportUrl: string) =>
      `Apple vende los packs y Todos los peces a través del App Store, así que los reembolsos se tramitan con Apple: visita <a href="${reportUrl}" rel="noopener">reportaproblem.apple.com</a>, inicia sesión y elige la compra. Si un pack que compraste aparece bloqueado, abre Configuración en la app y toca <strong>Restaurar compra</strong>; asegúrate de haber iniciado sesión con la Cuenta de Apple con la que lo compraste.`,
    privacyTitle: 'Privacidad',
    privacyHtml: (privacyUrl: string) =>
      `Companions guarda tu pecera en tu dispositivo y no recopila ninguna información personal. En la <a href="${privacyUrl}">política de privacidad</a> encontrarás todos los detalles.`,
    wishTitle: '¿Hay algo que te encantaría ver?',
    wish: 'Un pez, un adorno, un estilo, un lugar donde debería vivir el widget: cuéntanoslo. Muchos de los packs empezaron con un correo.',
  },

  press: {
    title: 'Kit de prensa',
    description:
      'Datos, descripción, ícono y capturas de pantalla de Companions, el widget de acuario para la pantalla de inicio del iPhone, para quien escriba sobre la app.',
    kicker: 'Kit de prensa',
    h1: '¿Vas a escribir sobre Companions?',
    leadHtml: (email: string) =>
      `Puedes citar todo lo que hay aquí y usar libremente las imágenes en artículos sobre la app. Para cualquier otra cosa, escribe a ${email}.`,
    sentenceTitle: 'En una frase',
    paragraphTitle: 'En un párrafo',
    paragraph: (c: { species: number; props: number; languages: number; developer: string }) =>
      `Companions es una app gratuita para iPhone que lleva una pequeña pecera a un widget de la pantalla de inicio. Eliges tus peces entre ${n(c.species, 'especie dibujada', 'especies dibujadas')} a mano, a cada uno le pones un nombre y nadan a su manera y a su ritmo cada vez que desbloqueas el teléfono: en el widget, en el modo En reposo mientras el teléfono se carga, en el escritorio de tu Mac y en el Apple Watch. No hay que darles de comer y ninguno puede morir; alimentarlos es solo un juego, para quien quiera. Las peceras tienen ocho estilos de agua y ${n(c.props, 'adorno', 'adornos')} para colocar, y pueden mostrar en una esquina la hora, la fecha, el clima, tu meta de pasos o la Luna. Ocho peces vienen con la app; los demás llegan en packs de pago único o todos juntos con Todos los peces. Companions no tiene cuentas, ni publicidad, ni rastreo, y está traducida a ${n(c.languages, 'idioma', 'idiomas')}. La crean ${c.developer} y Shea en Corea del Sur.`,
    factsTitle: 'Datos',
    facts: {
      name: 'Nombre',
      what: 'Qué es',
      whatValue: 'Una app para iPhone y un widget de pantalla de inicio: un acuario animado que llenas de peces y miras todo el día',
      price: 'Precio',
      priceValue:
        'Gratis. Los packs de peces son compras únicas dentro de la app; Todos los peces lo desbloquea todo, como compra de por vida o con un plan mensual',
      platforms: 'Plataformas',
      platformsValue: (os: string) => `iPhone y iPad (${os} o posterior), app para Apple Watch, Mac con los widgets del iPhone`,
      fish: 'Peces',
      fishValue: (species: number, packs: number) =>
        `${n(species, 'especie', 'especies')} en ${n(packs, 'pack', 'packs')}; ocho vienen con la app`,
      styles: 'Estilos de pecera',
      props: 'Adornos',
      propsValue: (count: number) => `${n(count, 'adorno', 'adornos')} para colocar en el fondo`,
      complications: 'Complicaciones',
      complicationsValue: 'Hora, fecha, clima, meta de pasos y fase lunar, en una esquina de la pecera',
      languages: 'Idiomas',
      firstReleased: 'Lanzamiento',
      currentVersion: 'Versión actual',
      currentVersionValue: (version: string, date: string) => `${version} (${date})`,
      developer: 'Desarrollo',
      developerValue: (developer: string) => `${developer} (diseño y programación) y Shea (ilustración), Corea del Sur`,
      appStore: 'App Store',
      contact: 'Contacto',
    },
    iconTitle: 'Ícono',
    iconText: 'El ícono del App Store a 1024 píxeles. Por favor, no le cambies el color ni la forma.',
    iconAlt: 'El ícono de la app Companions: la cola de un pez dorado en agua azul pálido',
    screenshotsTitle: 'Capturas de pantalla',
    screenshotsText: 'Las capturas del App Store, en orden. Haz clic en una para abrir el archivo a tamaño completo.',
    screenshotAlt: (index: number) => `Captura ${index} de Companions en el App Store`,
    downloadTitle: 'Descargar',
  },

  privacy: {
    title: 'Política de privacidad',
    description:
      'Companions no recopila, vende ni comparte ninguna información personal. Tu pecera se queda en tu dispositivo; lo único que se envía son estadísticas de uso anónimas, que puedes desactivar.',
    kicker: 'Política de privacidad',
    h1: 'Tus peces son cosa tuya.',
    meta: (date: string) => `Última actualización: ${date}. Es la misma política que aparece en la app, en Configuración.`,

    sections: [
      {
        title: "En resumen",
        html: "<p>Companions no recopila, vende ni comparte ninguna información personal. No hay ninguna cuenta que crear, ni publicidad, ni rastreo de ningún tipo, y todo lo que la app sabe de tu pecera se queda en tu dispositivo. Lo único que Companions envía son estadísticas de uso anónimas, para que yo pueda ver qué partes de la app se usan; puedes desactivarlas en Configuración en cualquier momento.</p>",
      },
      {
        title: "Qué guarda Companions",
        html: "<p>Lo único que Companions guarda es la pecera en sí:</p>\n<ul>\n<li>Los peces de tu pecera y la especie de cada uno</li>\n<li>El nombre que le pones a cada pez</li>\n<li>Un identificador aleatorio para cada pez, para que la app pueda distinguir dos peces de la misma especie</li>\n</ul>\n<p>Los nombres se guardan exactamente como los escribes. Si le pones a un pez el nombre de un amigo o de un familiar, ese nombre se conserva en tu dispositivo como todo lo demás, y en ningún otro lugar.</p>",
      },
      {
        title: "Dónde se guarda",
        html: "<p>Tu pecera se guarda en tu dispositivo, en un espacio de almacenamiento compartido entre la app Companions y su widget de pantalla de inicio, para que el widget pueda mostrar tus peces. Companions nunca sube estos datos a ninguna parte.</p>\n<p>Si haces una copia de seguridad de tu dispositivo en iCloud o en una computadora, la copia de seguridad de Apple puede incluir los datos de Companions junto con los del resto de tus apps. Esas copias las controlas tú desde la Configuración de iOS y se rigen por la política de privacidad de Apple, no por esta.</p>",
      },
      {
        title: "Widgets",
        html: "<p>El widget de Companions muestra los peces de tu pecera en la pantalla de inicio o en la pantalla bloqueada. Como cualquier widget, es visible para cualquiera que pueda ver tu pantalla. Si usas VoiceOver, el widget también lee en voz alta los nombres de tus peces. El widget lee tu pecera desde el almacenamiento compartido de tu dispositivo; no envía nada a ninguna parte.</p>",
      },
      {
        title: "Estadísticas de uso",
        html: "<p>Para saber qué partes de Companions usa la gente, la app envía estadísticas de uso anónimas a Google Analytics para Firebase, un servicio operado por Google. Se trata de eventos como abrir la app, mostrar una pantalla, agregar un pez, elegir un estilo de pecera o desbloquear un pack, junto con datos generales: el modelo del dispositivo, la versión de iOS y el idioma, la versión de la app, y el país y la región estimados a partir de tu conexión a internet, cuya dirección no se guarda. Cada instalación de la app recibe un identificador aleatorio para que el uso repetido cuente como una sola persona; no está vinculado contigo, con tu cuenta de Apple ni con tus peces y sus nombres, y Companions no usa el identificador de publicidad ni pide permiso para rastrearte.</p>\n<p>Puedes desactivar todo esto con el interruptor Compartir estadísticas de uso en Configuración, y no se envía nada más. La forma en que Google trata estas estadísticas se describe en su política de privacidad, en <a href=\"https://policies.google.com/privacy\" rel=\"noopener\">policies.google.com/privacy</a>.</p>",
      },
      {
        title: "Permisos",
        html: "<p>Companions solicita tres permisos del sistema, cada uno la primera vez que eliges algo que lo necesita, y funciona sin ninguno de ellos.</p>\n<ul>\n<li><strong>Agregar fotos a tu fototeca:</strong> iOS te lo pide la primera vez que guardas el código QR de una pecera en Fotos. Ese permiso solo le permite a la app agregar imágenes, no ver las fotos que ya tienes.</li>\n<li><strong>Leer tus pasos desde Salud:</strong> iOS te lo pide la primera vez que eliges la complicación Meta de pasos. La app lee solo el recuento de pasos de hoy, para mostrarlo en tu pecera, y nunca escribe en Salud. El recuento y la meta que fijes se guardan en el almacenamiento compartido de tu dispositivo para que el widget pueda mostrarlos, y en ningún otro sitio.</li>\n<li><strong>Tu ubicación mientras la app está abierta:</strong> iOS te lo pide cuando tocas Ubicación en Configuración, tras elegir la complicación Fase lunar o Clima. La app la usa para saber cómo se ve la Luna desde donde estás, guardando solo el hemisferio, y para obtener el clima de tu zona del servicio meteorológico de Apple, que recibe tu ubicación aproximada para el pronóstico y nada más. Companions no guarda tu ubicación ni la envía a ningún otro sitio.</li>\n</ul>\n<p>Companions no accede a tu cámara, micrófono, contactos, calendario ni notificaciones, y no pide permiso para rastrear tu actividad en otras apps o sitios web.</p>",
      },
      {
        title: "Servicios de terceros",
        html: "<p>Aparte de Google Analytics para Firebase, descrito arriba, Companions no contiene ningún kit de desarrollo de software de terceros: ni informes de errores ni publicidad.</p>\n<p>La App Store se encarga de la descarga y las actualizaciones de la app, de los packs que compres y de las calificaciones o reseñas que decidas dejar. Companions nunca ve tus datos de pago. Esas interacciones se rigen por la política de privacidad de Apple.</p>",
      },
      {
        title: "Lo que decides compartir",
        html: "<p>Algunos botones de Configuración abren otras apps, y solo cuando los tocas:</p>\n<ul>\n<li><strong>Correo electrónico</strong> abre tu app de correo con un mensaje nuevo dirigido a mí. Todo lo que escribas lo envía tu proveedor de correo, y yo solo recibo lo que envías.</li>\n<li><strong>Compartir Companions</strong> abre la hoja para compartir de iOS con un enlace a la app. Companions no ve con quién lo compartes.</li>\n<li><strong>Calificar Companions</strong> le pide a Apple que muestre su aviso para calificar la app. Apple gestiona la calificación; Companions no la recibe.</li>\n<li><strong>Compartir esta pecera</strong>, en el menú de la página principal, crea un código que solo contiene el agua y los adornos de la pecera, nada sobre ti ni sobre tus peces, y abre la hoja para compartir para que lo envíes.</li>\n</ul>",
      },
      {
        title: "Tu control",
        html: "<p>Tienes el control total de tu pecera:</p>\n<ul>\n<li>Renombra o quita el pez que quieras, en cualquier momento, desde la bandeja de la parte inferior de la pecera</li>\n<li>Quitar un pez lo elimina de tu dispositivo</li>\n<li>Desactiva las estadísticas de uso con el interruptor Compartir estadísticas de uso en Configuración</li>\n<li>Eliminar la app Companions elimina la pecera y todo lo demás que la app guardó en tu dispositivo (una copia de seguridad del dispositivo hecha con anterioridad puede seguir conteniendo esos datos hasta que se reemplace)</li>\n</ul>",
      },
      {
        title: "Menores",
        html: "<p>Companions no recopila información personal de nadie, sea cual sea su edad. Las estadísticas de uso descritas arriba son anónimas y nunca incluyen nombres, nada de lo que se escribe en la app ni nada que pueda identificar a un niño, ni a nadie más.</p>",
      },
    ],

    website: {
      title: 'Este sitio web',
      countedHtml: (githubUrl: string, googleUrl: string) =>
        `<p>Este sitio web es un conjunto de páginas estáticas alojadas en GitHub Pages; las fuentes y las imágenes se sirven desde el propio sitio. El tratamiento que hace GitHub de los registros de su servidor web se describe en la <a href="${githubUrl}" rel="noopener">declaración de privacidad de GitHub</a>.</p>
<p>Para saber cuántas personas lo visitan, de dónde llegan y qué páginas y botones se usan, el sitio web utiliza Google Analytics, un servicio operado por Google. Registra las páginas que abres aquí y los enlaces y botones que seleccionas, el sitio desde el que llegaste y datos generales: tu navegador, el tipo de dispositivo y el idioma, y el país y la ciudad estimados a partir de tu conexión a internet, cuya dirección no se guarda. Para que las visitas repetidas cuenten como un solo visitante, guarda un identificador aleatorio en dos cookies de tu navegador, <code>_ga</code> y otra cuyo nombre comienza con <code>_ga_</code>, durante un máximo de dos años. El identificador no está vinculado a tu nombre, a la app ni a tus peces, y nada de esto se usa con fines publicitarios.</p>
<p>Si el reloj de tu navegador está configurado en una zona horaria de Europa, el sitio web te pregunta primero, y no se carga nada de Google a menos que lo permitas. Además, si tu navegador envía una señal Global Privacy Control o Do Not Track, las estadísticas se quedan desactivadas sin preguntarte. Estés donde estés, puedes cambiar de opinión aquí en cualquier momento, y al desactivar las estadísticas también se eliminan las cookies. La forma en que Google trata estas estadísticas se describe en su política de privacidad, en <a href="${googleUrl}" rel="noopener">policies.google.com/privacy</a>.</p>`,
      uncountedHtml: (githubUrl: string) =>
        `<p>Este sitio web es un conjunto de páginas estáticas alojadas en GitHub Pages. No guarda cookies, no usa herramientas de estadísticas y no incrusta nada de terceros; las fuentes y las imágenes se sirven desde el propio sitio. El tratamiento que hace GitHub de los registros de su servidor web se describe en la <a href="${githubUrl}" rel="noopener">declaración de privacidad de GitHub</a>.</p>`,
      statisticsHtml: (state: string) => `Las estadísticas del sitio web están ${state} en este navegador.`,
      on: 'activadas',
      off: 'desactivadas',
      turnOn: 'Activar',
      turnOff: 'Desactivar',
      updated: (date: string) => `Esta sección se refiere solo al sitio web y se actualizó por última vez el ${date}.`,
    },

    changes: {
      title: "Cambios en esta política",
      html: "<p>Si Companions cambia alguna vez la forma en que trata los datos, esta política se actualizará en la app y se revisará la fecha que aparece arriba. La versión vigente está siempre disponible desde Configuración.</p>",
    },
    contact: {
      title: "Contacto",
      html: (email: string) =>
        "<p>Si tienes alguna pregunta sobre esta política o sobre cómo trata Companions tus datos, escríbeme a " + email + " o usa el botón Correo electrónico en Configuración.</p>",
    },
  },

  consent: {
    label: 'Estadísticas del sitio web',
    html: (privacyUrl: string) =>
      `<strong>¿Nos dejas contar tu visita?</strong> El sitio usaría Google Analytics, que guarda cookies, para ver qué páginas y botones se usan. Nunca con fines publicitarios. <a href="${privacyUrl}">Cómo funciona</a>`,
    no: 'No, gracias',
    allow: 'Permitir',
  },

  notFound: {
    title: 'Página no encontrada',
    description: 'Esta página se fue nadando. Prueba con las páginas de ayuda o con la página de inicio.',
    h1: 'Esta página se fue nadando.',
    lead: 'No hay nada en esta dirección. Eso sí, los peces están perfectamente.',
    home: 'Volver al inicio',
    help: 'Ayuda y preguntas frecuentes',
  },
};

export default dictionary;
