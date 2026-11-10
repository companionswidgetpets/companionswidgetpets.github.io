import type { Dictionary } from './en.ts';

/** Singular or plural, as Portuguese counts: "1 peixe", "5 peixes". */
const plural = new Intl.PluralRules('pt-BR');
const n = (count: number, one: string, other: string) => (plural.select(count) === 'one' ? one : other);

const dictionary: Dictionary = {
  format: {
    listSeparator: ', ',
  },

  app: {
    name: 'Companions - Widget Pets',
    tagline: 'Um pequeno aquário na sua Tela de Início.',
    subtitle: 'Seus peixes nadam no próprio widget, o dia inteiro.',
    oneLiner:
      'O Companions é um app gratuito para iPhone que coloca um pequeno aquário animado em um widget da Tela de Início: escolha seus peixes, dê um nome a cada um e veja todos eles nadando sempre que olhar o celular.',
    madeIn: 'Coreia do Sul',
  },

  og: {
    titleHtml: 'Um pequeno aquário na sua Tela&nbsp;de&nbsp;Início.',
    text: 'Seus peixes nadam no próprio widget, o dia inteiro.',
    facts: 'Grátis na App Store · iPhone, iPad, Mac e Apple Watch',
    imageAlt: (appName: string, tagline: string) => `${appName}: ${tagline}`,
  },

  ld: {
    jobTitle: 'Desenvolvedor independente de apps',
    alternateNames: ['Companions widget de aquário', 'Companions widget de peixes', 'Companions aquário virtual para iPhone'],
    offer:
      'Download gratuito com os peixes iniciais e o Pacote Água Doce; os outros peixes vêm em pacotes de compra única ou com o desbloqueio Todos os Peixes.',
    features: (c: { species: number; packs: number; props: number }) => [
      'Widget de aquário animado para a Tela de Início, nos tamanhos pequeno, médio e grande',
      `${c.species} ${n(c.species, 'espécie de peixe', 'espécies de peixes')} em ${c.packs} ${n(c.packs, 'pacote', 'pacotes')}; cada aquário comporta até cinco peixes`,
      `Oito estilos de aquário e ${c.props} ${n(c.props, 'enfeite', 'enfeites')} para arrumar`,
      'Complicações de hora, data, clima, meta de passos e fase da Lua em um canto do aquário',
      'Compatível com o modo Em Espera (StandBy), o Apple Watch e o Mac (widgets do iPhone)',
      'Compartilhamento de aquários com amigos, por código ou imagem',
      'Sem conta, sem publicidade, sem rastreamento',
    ],
  },

  common: {
    skipToContent: 'Pular para o conteúdo',
    breadcrumb: 'Trilha de navegação',
    updated: (date: string) => `Atualizado em ${date}`,
  },

  nav: {
    site: 'Site',
    homeLabel: 'Página inicial do Companions',
    menu: 'Menu',
    help: 'Ajuda',
    blog: 'Blog',
    fish: 'Peixes',
    styles: 'Estilos',
    whatsNew: 'Novidades',
    support: 'Suporte',
    press: 'Kit de imprensa',
    download: 'Baixar',
    get: 'Obter',
  },

  footer: {
    facts: (os: string) => `Grátis · ${os} ou posterior · iPhone, iPad, Mac e Apple Watch`,
    columnSite: 'Companions',
    columnAbout: 'Sobre',
    home: 'Início',
    help: 'Ajuda e dúvidas',
    blog: 'Blog',
    packs: 'Peixes e pacotes',
    styles: 'Estilos de aquário',
    whatsNew: 'Novidades',
    press: 'Kit de imprensa',
    support: 'Suporte',
    privacy: 'Política de privacidade',
    email: 'Mande um e-mail',
    madeWith: 'Desenvolvido com ♡ na Coreia do Sul',
    legal: (year: number, owner: string) =>
      `© ${year} ${owner}. Apple, o logotipo da Apple, iPhone, iPad, Mac, Apple Watch e App Store são marcas comerciais da Apple Inc.`,
    language: 'Idioma',
  },

  badge: {
    label: 'Baixar o Companions na App Store',
    alt: 'Baixar na App Store',
  },

  tank: {
    label: (size: 'small' | 'medium' | 'large' | 'watch', style: string, count: number) => {
      const tank = {
        small: 'Aquário pequeno',
        medium: 'Aquário médio',
        large: 'Aquário grande',
        watch: 'Aquário do Apple Watch',
      }[size];
      const fish = count === 0 ? 'sem peixes' : `com ${count} ${n(count, 'peixe', 'peixes')}`;
      return `${tank} no estilo ${style}, ${fish}`;
    },
    namedFish: (name: string, species: string) => `${name}, da espécie ${species}`,
  },

  hero: {
    label: 'Apresentação',
    titleHtml: 'Um pequeno aquário<br />na sua Tela&nbsp;de&nbsp;Início.',
    tankLabel:
      'O widget do Companions: um peixe-palhaço, um ídolo-mourisco, um cirurgião-patela e um cavalo-marinho nadando entre samambaias e uma esponja',
    phoneAlt: 'A Tela de Início de um iPhone com o widget de aquário do Companions no canto superior esquerdo',
    scroll: 'Role',
  },

  home: {
    title: (appName: string) => `${appName}: um pequeno aquário na Tela de Início do iPhone`,
    description: (species: number) =>
      `O Companions é um widget de aquário gratuito para iPhone: escolha entre ${species} ${n(species, 'peixe', 'peixes')}, dê um nome a cada um e veja todos nadando na Tela de Início, no modo Em Espera (StandBy), no Mac e no Apple Watch. Sem ração, sem faxina, sem culpa.`,

    places: {
      kicker: 'Sempre à vista',
      title: 'Mora onde você olha.',
      lead: 'Adicione o widget uma vez e seus peixes estarão lá sempre que você der uma olhada no celular. Os mesmos peixes, a mesma água, sem precisar abrir o app.',
      homeScreen: {
        title: 'Tela de Início',
        text: 'Pequeno, médio ou grande, em qualquer um dos oito estilos. Tenha um aquário só ou uma prateleira cheia deles, com peixes diferentes em cada tamanho.',
      },
      standby: {
        title: 'Modo Em Espera',
        text: 'Apoie o iPhone na horizontal enquanto ele carrega e o aquário fica com você a noite toda, ao lado do relógio.',
        date: 'ter., 1',
      },
      watch: {
        title: 'Apple Watch',
        text: 'O app do Companions para Apple Watch mostra seu aquário pequeno no pulso, sincronizado com o iPhone. O relógio já mostra a hora por conta própria, então no aquário ficam só os peixes.',
      },
      ipad: {
        title: 'iPad',
        text: 'Um app completo do Companions para iPad, que funciona sozinho. Monte seu aquário na tela grande e adicione widgets à Tela de Início, sem precisar de um iPhone.',
      },
      mac: {
        title: 'Mac',
        text: 'Leve os widgets do iPhone para a Mesa do Mac com a Continuidade, ou adicione-os pelo app para Mac. Seus peixes fazem companhia entre uma janela e outra.',
      },
    },

    fish: {
      kicker: (species: number, packs: number) =>
        `${species} ${n(species, 'espécie', 'espécies')} em ${packs} ${n(packs, 'pacote', 'pacotes')}`,
      title: 'Conheça os peixes.',
      lead: 'Todo aquário começa com um Tropical, uma Sardinha e um Baiacu, e o Pacote Água Doce vem de graça. Os outros vêm em pacotes de compra única, que ficam com você para sempre, ou todos juntos, com Todos os Peixes. Cada peixe nada do seu jeito, no seu ritmo, e volta e meia solta uma bolhinha.',
      more: 'Todos os peixes e pacotes',
    },

    customize: {
      kicker: 'Deixe com a sua cara',
      title: 'Seu aquário, do seu jeito.',
      lead: 'Oito águas, dezenove enfeites para arrumar como você quiser, algo útil no canto e um ícone do app para combinar.',
      props: {
        kicker: (count: number) => `${count} ${n(count, 'enfeite', 'enfeites')}`,
        title: 'Decore o fundo do aquário',
        text: 'Samambaias, corais, conchas, uma casa de abacaxi, um moai. Arraste para onde quiser, mude o tamanho, vire, desfaça. Salve aquários à vontade e alterne entre eles.',
      },
      complications: {
        kicker: 'Complicações',
        title: 'Algo útil no canto',
        text: 'A hora, a data, o clima de hoje, sua meta de passos ou a Lua desta noite, em branco sobre a água. Incluídas em Todos os Peixes.',
      },
      icons: {
        kicker: 'Seis ícones do app',
        title: 'Um ícone para combinar',
        names: { minimal: 'Minimalista', twilight: 'Crepúsculo', pond: 'Lago', reed: 'Junco', blossom: 'Flor', dark: 'Escuro' },
        text: (names: string) => `${names}: escolha nos Ajustes o que mais combina com a sua Tela de Início.`,
      },
    },

    calm: {
      kicker: 'O pet que não dá trabalho',
      title: 'Sem ração. Sem faxina. Sem culpa.',
      lead: 'Só alguns companheiros coloridos, sempre por perto.',
      cards: [
        {
          title: 'Aqui ninguém morre',
          text: 'Suma por uma semana, um mês, um ano. Seus peixes vão estar exatamente como você deixou: nadando.',
        },
        {
          title: 'Sem conta, sem anúncios',
          text: 'Nada de cadastro, ninguém rastreando você, nada que você precise comprar para continuar brincando. Seu aquário fica no seu dispositivo.',
        },
        {
          title: 'Dê comida, se quiser',
          text: 'Toque no garfo e na faca, solte uma pitada de ração na água e veja os peixes correrem atrás. Se pular essa parte, ninguém liga.',
        },
        {
          title: 'Eles dão oi',
          text: 'Em algumas manhãs, um peixe dá bom-dia quando você abre o app. Toque no vidro e sobe uma nuvenzinha de bolhas. Dê a eles o nome de quem você quiser.',
        },
      ],
    },

    questions: {
      kicker: 'Perguntas e respostas',
      title: 'Antes que você pergunte.',
      readFull: 'Ler a resposta completa',
      all: 'Todas as perguntas e respostas',
      readMore: 'Leia mais',
    },

    blog: {
      kicker: 'Do blog',
      title: 'Ideias para uma Tela de Início mais alegre.',
      all: 'Ler o blog',
    },
  },

  sizes: {
    kicker: 'Três tamanhos, oito águas',
    title: 'Um aquário. Qualquer tamanho de widget.',
    lead: 'O widget vem nos tamanhos pequeno, médio e grande, e cada tamanho tem seus próprios peixes. Escolha um estilo e todos os aquários mudam com ele.',
    pickerLabel: 'Estilo do aquário',
    large: 'Grande',
    medium: 'Médio',
    small: 'Pequeno',
    captionHtml: (style: string) =>
      `O estilo ${style} nos três tamanhos. Mude o estilo uma vez e todos os widgets da sua Tela de Início acompanham.`,
  },

  packGrid: {
    comesWithApp: 'Já vem com o app',
    pack: 'Pacote',
  },

  styleRow: {
    label: (style: string) => `Aquário no estilo ${style}`,
  },

  help: {
    title: 'Ajuda e perguntas frequentes',
    description:
      'Respostas para as dúvidas mais comuns sobre o Companions, o widget de aquário para iPhone: como adicionar o widget à Tela de Início, peixes e pacotes, estilos, complicações, modo Em Espera, Apple Watch, Mac, compras e privacidade.',
    kicker: 'Ajuda',
    h1: 'Tire suas dúvidas.',
    leadHtml: (email: string) =>
      `Tudo o que as pessoas perguntam sobre o Companions, em um só lugar. Não achou a sua dúvida? Escreva para ${email} e uma pessoa de verdade responde.`,
    categoriesLabel: 'Categorias',
    categories: {
      'getting-started': 'Primeiros passos',
      widgets: 'O widget',
      'fish-and-packs': 'Peixes e pacotes',
      'tanks-and-styles': 'Aquários, estilos e enfeites',
      complications: 'Complicações',
      'other-devices': 'Modo Em Espera, Apple Watch, Mac e iPad',
      'privacy-and-purchases': 'Compras e privacidade',
      troubleshooting: 'Quando algo dá errado',
    },
    fullAnswer: 'Resposta completa',
    related: 'Veja também',
    kindQuestion: 'Pergunta',
    kindArticle: 'Artigo',
    kindPage: 'Página',
    stuckTitle: 'Ainda não deu certo?',
    stuckHtml: (email: string, helpUrl: string) =>
      `Escreva para ${email} informando o modelo do seu iPhone e a versão do iOS, e a gente resolve. <a href="${helpUrl}">Voltar para todas as perguntas</a>.`,
  },

  blog: {
    title: 'Blog: widgets para iPhone, dicas de apps e guias',
    description:
      'Os melhores apps de widgets para iPhone (de aquário, de pets virtuais e os mais fofos), ideias para personalizar a Tela de Início, curiosidades sobre peixes e guias do Companions.',
    kicker: 'Blog',
    h1: 'Ideias para uma Tela de Início mais alegre.',
    lead: 'Apps de widgets e de pets virtuais que valem a pena, ideias para a Tela de Início, curiosidades sobre peixes e guias passo a passo, escritos pelas duas pessoas que fazem o Companions.',
    topicsLabel: 'Temas',
    categories: {
      'app-picks': {
        name: 'Dicas de apps',
        lead: 'Apps de widgets, de pets virtuais e outros apps aconchegantes que merecem um lugar no seu iPhone.',
      },
      'home-screen': {
        name: 'Ideias para a Tela de Início',
        lead: 'Cores, layouts e widgets para uma Tela de Início que dá gosto ver toda vez que você desbloqueia o iPhone.',
      },
      fish: {
        name: 'Peixes e aquários',
        lead: 'Curiosidades sobre peixes, ideias de nomes e aquários temáticos para montar.',
      },
      guides: {
        name: 'Guias do Companions',
        lead: 'O passo a passo do widget, do modo Em Espera, do Apple Watch, do Mac e de tudo o que o app faz.',
      },
      troubleshooting: {
        name: 'Solução de problemas',
        lead: 'Quando um widget dá problema: o que verificar, na ordem.',
      },
    },
    by: (author: string) => `Por ${author}`,
    readingTime: (minutes: number) => `${minutes} min de leitura`,
    onThisPage: 'Nesta página',
    more: 'Leia também',
    cta: (species: number) =>
      `Escolha seus peixes entre ${species} ${n(species, 'espécie desenhada', 'espécies desenhadas')} à mão, dê um nome a cada um e veja todos nadando no seu widget o dia inteiro. Grátis, com oito peixes, todos os estilos de aquário e os três tamanhos de widget.`,
    feedTitle: 'O blog do Companions',
    feed: 'Feed RSS',
  },

  packs: {
    title: 'Todos os peixes e pacotes',
    description: (species: number, free: number) =>
      `${n(species, 'O peixe', `Os ${species} peixes`)} do Companions, o widget de aquário, pacote por pacote: ${n(free, 'qual vem de graça', `quais ${free} vêm de graça`)}, o que cada pacote traz e como funcionam os pacotes de compra única e o desbloqueio Todos os Peixes.`,
    kicker: (species: number, packs: number) =>
      `${species} ${n(species, 'espécie', 'espécies')} · ${packs} ${n(packs, 'pacote', 'pacotes')}`,
    h1: 'Cada peixe, cada pacote.',
    lead: (free: number) =>
      `O Companions já vem com ${free} ${n(free, 'peixe', 'peixes')}: os três com que todo aquário começa e os cinco do Pacote Água Doce. Os outros pacotes são comprados uma única vez, dentro do app, e são seus para sempre. Todos os Peixes desbloqueia todos os pacotes de uma vez, incluindo os que ainda vão chegar, e com eles as complicações do aquário.`,
    listName: 'Pacotes de peixes do Companions',
    howTitle: 'Como funcionam os pacotes',
    howHtml: [
      'Um pacote é uma compra única feita pela App Store, na moeda do seu país. Compre no iPhone e ele também é seu no iPad, com a mesma Conta Apple; em um dispositivo novo, é só tocar em Restaurar Compras, nos Ajustes, para recuperá-lo. Nada expira, e nada que já está em um aquário é tirado de você.',
      '<strong>Todos os Peixes</strong> vem em duas versões: um desbloqueio vitalício, de compra única, ou um plano mensal, pelo tempo que você quiser. Nos dois casos, ele libera todos os pacotes, os que forem adicionados depois e as complicações (a hora, a data, o clima, os passos e a Lua em um canto do aquário). Se o plano mensal expirar, os peixes que você já adicionou continuam nadando; só não dá para adicionar novos peixes desses pacotes até você renovar.',
      'Os preços aparecem no app, nos Ajustes, na sua moeda.',
    ],
  },

  pack: {
    title: (pack: string, fish: string) => `${pack}: ${fish}`,
    description: (c: { tagline: string; pack: string; count: number; fish: string; free: boolean }) =>
      `${c.tagline} No Companions, o widget de aquário, “${c.pack}” traz ${c.count} ${n(c.count, 'peixe', 'peixes')}: ${c.fish}. ${c.free ? 'Já vem com o app, de graça.' : 'É uma compra única dentro do app, ou vem com Todos os Peixes.'}`,
    kickerFree: 'Já vem com o app',
    kickerPaid: 'Pacote de peixes',
    tankLabel: (style: string, pack: string, fish: string) => `${pack} em um aquário no estilo ${style}: ${fish}`,
    tankCaption: (pack: string, style: string) => `${pack} em um aquário no estilo ${style}, no tamanho médio do widget.`,
    fishAlt: (fish: string) => `${fish}, no traço do Companions`,
    /**
     * The name cannot take an article (its gender is unknown), so it stands in apposition
     * to "a espécie", and nothing in the sentence agrees with it.
     */
    fishText: (fish: string, swim: 'swimmer' | 'floater' | 'creeper' | 'crawler', scale: number) => {
      const how = {
        swimmer: 'nada no meio da água, deslizando ligeiro, num leve sobe e desce',
        floater: 'flutua em vez de nadar: paira em qualquer ponto da água onde um peixe poderia estar e vai à deriva, bem devagar',
        creeper:
          'fica no fundo e avança por ele aos pouquinhos, tão devagar que mal dá para ver que se mexe, inclinando-se de leve para o lado em que vai',
        crawler: 'anda pelo fundo em passinhos apressados, subindo e descendo de leve a cada passo das perninhas',
      }[swim];
      const size =
        scale > 1
          ? `, e aparece ${Math.round((scale - 1) * 100)}% maior que um peixe de tamanho padrão`
          : scale < 1
            ? ', e aparece um pouquinho menor que um peixe de tamanho padrão'
            : '';
      return `A espécie ${fish} ${how}${size}.`;
    },
    howTitle: 'Como adicionar esses peixes',
    step1Html: 'Abra o Companions e toque no <strong>+</strong> no fim da bandeja, logo abaixo do aquário.',
    step2Html: (pack: string) => `Encontre <strong>${pack}</strong> na lista e toque em um peixe.`,
    step3FreeHtml: 'Ele cai na água com um tchibum. Dê um nome a ele ou deixe o que veio de fábrica.',
    step3PaidHtml:
      'Se o pacote estiver bloqueado, toque em <strong>Desbloquear</strong> e compre só esse pacote, uma única vez, ou Todos os Peixes, que libera todos eles. Aí o peixe cai na água com um tchibum. Dê um nome a ele ou deixe o que veio de fábrica.',
    after:
      'Um aquário comporta cinco peixes, e cada tamanho de widget tem seu próprio conjunto; assim, os aquários pequeno, médio e grande podem ter peixes diferentes.',
    namesTitle: 'Nomes em outros idiomas',
    namesIntro: (languages: number) =>
      `O Companions está traduzido para ${languages} ${n(languages, 'idioma', 'idiomas')}. Estes são os nomes que o app usa para esses peixes:`,
    languageHeader: 'Idioma',
    others: 'Outros pacotes',
  },

  styles: {
    title: 'Os oito estilos de aquário',
    description: (styles: string) =>
      `Todas as águas do Companions, o widget de aquário: ${styles}. Como é cada uma, quais peixes combinam com ela e como mudar o estilo de um aquário.`,
    kicker: (count: number) => `${count} ${n(count, 'estilo', 'estilos')}`,
    h1: 'O mesmo vidro, outra água.',
    lead: 'O estilo dá cor à água e ao fundo; o vidro, a borda e os reflexos continuam iguais, então os aquários pequeno, médio e grande parecem o mesmo aquário, só que maior. Mude o estilo de um aquário na página “Editar aquário” e todos os widgets que mostram esse aquário acompanham.',
    tankLabel: (style: string) => `Aquário no estilo ${style}, no tamanho médio do widget`,
    counter: (index: number, count: number) => `Estilo ${index} de ${count}`,
    blurbs: {
      minimal:
        'O aquário azul com que o app foi lançado: um azul mais claro no alto, que vai virando um azul-celeste vivo no meio, sobre uma névoa branca. Luminoso, limpo, e o estilo em que a maioria dos peixes fica mais bonita.',
      deepOcean:
        'Azul-safira no alto, por onde a luz entra, descendo pelo azul-marinho até um índigo quase preto no fundo. As águas-vivas brilham nele; os peixes de recife saltam aos olhos.',
      pond: 'Verde ensolarado na superfície, que escurece até um verde-folha e puxa de leve para o oliva ao encontrar um fundo de areia em tom quente. Feito para kois, trutas e as criaturas do lago.',
      reed: 'Um verde mais frio, puxado para o azul-petróleo, o primo mais próximo do Minimalista em temperatura de cor, sobre um fundo bege discreto. Alternar entre os dois parece uma mudança de luz, não uma troca de aquário.',
      blossom:
        'Um rosa pálido de flor de cerejeira na superfície, que se acomoda em um rosado suave, sobre a mesma névoa branca do Minimalista. Puxa para o lado frio do rosa, para que os peixes laranja e vermelhos não percam o destaque.',
      dark: 'Tão preto quanto a Tela de Início permite, para quem monta a tela toda em preto: um cinza-carvão neutro na superfície, que desce até o preto puro abaixo do fundo, com os reflexos do vidro atenuados para ficar discreto entre ícones escuros.',
      pumpkin:
        'Um laranja-abóbora suave na superfície, que se aprofunda em um laranja mais intenso, sobre uma névoa branca. Não chega ao amarelo, para que o Kinguio e o Koi ouro continuem se destacando.',
      lavender:
        'Os estilos Minimalista e Flor com o matiz levado para a cor da lavanda: o lavanda mais vivo que um tom tão claro permite, sobre a mesma névoa branca. O Disco e o Dardo combinam com ele.',
    },
    howTitle: 'Como mudar o estilo de um aquário',
    stepsHtml: [
      'Abra o Companions, toque no botão <strong>⋯</strong> no alto da página e depois em <strong>Editar Este Aquário</strong>.',
      'Abra o menu de estilos no alto da página “Editar aquário” e escolha uma água. O aquário muda na hora, debaixo do seu dedo.',
      'Toque em <strong>Fechar</strong>. O aquário é salvo automaticamente, e o widget da sua Tela de Início se atualiza para combinar.',
    ],
    after:
      'Os estilos pertencem aos aquários, não ao app: na página Meus Aquários, você pode ter lado a lado um aquário pequeno no estilo Flor e um aquário grande no estilo Escuro, e trocar qual deles o seu widget mostra.',
  },

  whatsNew: {
    title: 'Novidades',
    description: (version: string, date: string) =>
      `O que mudou em cada versão do Companions, o widget de aquário para iPhone. A versão atual é a ${version}, lançada em ${date}.`,
    kicker: 'Novidades',
    h1: 'Todas as versões, em ordem.',
    lead: (version: string, date: string) =>
      `A versão atual é o Companions ${version}, lançado em ${date}. As atualizações chegam pela App Store.`,
    heading: (version: string, title: string) => `${version}: ${title}`,
    entryTitle: (version: string, title: string) => `Companions ${version}: ${title}`,
    versionKicker: (version: string) => `Versão ${version}`,
    all: 'Todas as versões',
  },

  support: {
    title: 'Suporte',
    description: (email: string) =>
      `Ajuda com o Companions, o widget de aquário: soluções para os problemas mais comuns e como falar com o desenvolvedor pelo e-mail ${email}.`,
    kicker: 'Suporte',
    h1: 'A gente resolve.',
    leadHtml: (email: string) =>
      `O Companions é feito por duas pessoas, e um de nós responde pessoalmente a cada e-mail. Escreva para ${email} ou use o botão E-mail nos Ajustes do app, que já preenche os detalhes para você.`,
    contactName: 'Suporte do Companions',
    beforeTitle: 'Antes de escrever',
    beforeHtml: (helpUrl: string) =>
      `A maioria das dúvidas já está respondida nas <a href="${helpUrl}">páginas de ajuda</a>. As mais frequentes:`,
    includeTitle: 'O que informar',
    include: [
      'O modelo do seu iPhone e a versão do iOS (Ajustes › Geral › Sobre).',
      'A versão do Companions, que aparece no fim dos Ajustes do app.',
      'O que você esperava e o que aconteceu de fato. Uma captura de tela ou uma gravação da tela ajuda muito.',
    ],
    purchasesTitle: 'Compras e reembolsos',
    purchasesHtml: (reportUrl: string) =>
      `Os pacotes e o desbloqueio Todos os Peixes são vendidos pela Apple, na App Store, então quem cuida dos reembolsos é a Apple: acesse <a href="${reportUrl}" rel="noopener">reportaproblem.apple.com</a>, inicie a sessão e escolha a compra. Se um pacote que você comprou aparecer como bloqueado, abra os Ajustes do app e toque em <strong>Restaurar Compras</strong>; confira se você iniciou a sessão com a mesma Conta Apple usada na compra.`,
    privacyTitle: 'Privacidade',
    privacyHtml: (privacyUrl: string) =>
      `O Companions guarda seu aquário no seu dispositivo e não coleta nenhuma informação pessoal. Os detalhes estão na <a href="${privacyUrl}">política de privacidade</a>.`,
    wishTitle: 'Tem algo que você adoraria ver?',
    wish: 'Um peixe, um enfeite, um estilo, um lugar onde o widget deveria morar: conte para a gente. Muitos dos pacotes nasceram de um e-mail.',
  },

  press: {
    title: 'Kit de imprensa',
    description:
      'Ficha técnica, descrição, ícone e capturas de tela do Companions, o widget de aquário para a Tela de Início do iPhone, para quem for escrever sobre o app.',
    kicker: 'Kit de imprensa',
    h1: 'Vai escrever sobre o Companions?',
    leadHtml: (email: string) =>
      `Tudo o que está aqui pode ser citado, e as imagens podem ser usadas livremente em matérias sobre o app. Para qualquer outra coisa, escreva para ${email}.`,
    sentenceTitle: 'Em uma frase',
    paragraphTitle: 'Em um parágrafo',
    paragraph: (c: { species: number; props: number; languages: number; developer: string }) =>
      `O Companions é um app gratuito para iPhone que mantém um pequeno aquário em um widget da Tela de Início. Você escolhe seus peixes entre ${c.species} ${n(c.species, 'espécie desenhada', 'espécies desenhadas')} à mão e dá um nome a cada um, e eles nadam cada um do seu jeito, no seu ritmo, sempre que você desbloqueia o celular: no widget, no modo Em Espera enquanto o iPhone carrega, na Mesa do Mac e no Apple Watch. Não é preciso alimentar ninguém e nada pode morrer; dar comida é uma brincadeira para quem quiser. Os aquários vêm em oito estilos de água, com ${c.props} ${n(c.props, 'enfeite', 'enfeites')} para arrumar, e podem mostrar em um canto a hora, a data, o clima, sua meta de passos ou a Lua. Oito peixes já vêm com o app; os outros chegam em pacotes comprados uma única vez, ou todos juntos, com Todos os Peixes. O Companions não tem conta, publicidade nem rastreamento, e está traduzido para ${c.languages} ${n(c.languages, 'idioma', 'idiomas')}. É feito por ${c.developer} e Shea, na Coreia do Sul.`,
    factsTitle: 'Ficha técnica',
    facts: {
      name: 'Nome',
      what: 'O que é',
      whatValue:
        'Um app para iPhone com widget para a Tela de Início: um aquário animado que você enche de peixes e fica olhando o dia todo',
      price: 'Preço',
      priceValue:
        'Grátis. Os pacotes de peixes são compras únicas dentro do app; Todos os Peixes desbloqueia tudo, como compra vitalícia ou plano mensal',
      platforms: 'Plataformas',
      platformsValue: (os: string) =>
        `iPhone e iPad (${os} ou posterior), app para Apple Watch, Mac por meio dos widgets do iPhone no Mac`,
      fish: 'Peixes',
      fishValue: (species: number, packs: number) =>
        `${species} ${n(species, 'espécie', 'espécies')} em ${packs} ${n(packs, 'pacote', 'pacotes')}; oito já vêm com o app`,
      styles: 'Estilos de aquário',
      props: 'Enfeites',
      propsValue: (count: number) =>
        `${count} ${n(count, 'peça de decoração', 'peças de decoração')} para arrumar no fundo do aquário`,
      complications: 'Complicações',
      complicationsValue: 'Hora, data, clima, meta de passos e fase da Lua, em um canto do aquário',
      languages: 'Idiomas',
      firstReleased: 'Lançamento',
      currentVersion: 'Versão atual',
      currentVersionValue: (version: string, date: string) => `${version} (${date})`,
      developer: 'Desenvolvimento',
      developerValue: (developer: string) => `${developer} (design e código) e Shea (arte), Coreia do Sul`,
      appStore: 'App Store',
      contact: 'Contato',
    },
    iconTitle: 'Ícone',
    iconText: 'O ícone da App Store em 1024 pixels. Por favor, não mude as cores nem coloque o ícone em outro formato.',
    iconAlt: 'O ícone do app Companions: a cauda de um kinguio em água azul-clara',
    screenshotsTitle: 'Capturas de tela',
    screenshotsText: 'As capturas de tela da App Store, em ordem. Clique em uma delas para abrir o arquivo em tamanho original.',
    screenshotAlt: (index: number) => `Captura de tela ${index} do Companions na App Store`,
    downloadTitle: 'Download',
  },

  privacy: {
    title: 'Política de privacidade',
    description:
      'O Companions não coleta, vende nem compartilha nenhuma informação pessoal. Seu aquário fica no seu dispositivo; a única coisa enviada são estatísticas de uso anônimas, que você pode desativar.',
    kicker: 'Política de privacidade',
    h1: 'Seus peixes são só da sua conta.',
    meta: (date: string) => `Última atualização: ${date}. Esta é a mesma política que aparece nos Ajustes do app.`,

    /** The app's own policy, in the app's own Portuguese, word for word; only the tags are added. */
    sections: [
      {
        title: "Em resumo",
        html: "<p>O Companions não coleta, vende nem compartilha nenhuma informação pessoal. Não há conta para criar, nem publicidade, nem rastreamento de nenhum tipo, e tudo o que o app sabe sobre o seu aquário fica no seu dispositivo. A única coisa que o Companions envia são estatísticas de uso anônimas, para que eu possa ver quais partes do app são usadas; você pode desativá-las nos Ajustes a qualquer momento.</p>",
      },
      {
        title: "O que o Companions guarda",
        html: "<p>A única coisa que o Companions guarda é o próprio aquário:</p>\n<ul>\n<li>Os peixes do seu aquário e a espécie de cada um</li>\n<li>O nome que você dá a cada peixe</li>\n<li>Um identificador aleatório para cada peixe, para que o app consiga distinguir dois peixes da mesma espécie</li>\n</ul>\n<p>Os nomes são salvos exatamente como você digita. Se você der a um peixe o nome de um amigo ou de alguém da família, esse nome fica no seu dispositivo como todo o resto, e em nenhum outro lugar.</p>",
      },
      {
        title: "Onde os dados ficam",
        html: "<p>Seu aquário é salvo no seu dispositivo, em uma área de armazenamento compartilhada entre o app Companions e o widget da Tela de Início, para que o widget possa mostrar seus peixes. O Companions nunca envia esses dados para lugar nenhum.</p>\n<p>Se você fizer backup do dispositivo com o Backup do iCloud ou em um computador, o backup da Apple pode incluir os dados do Companions junto com os dos outros apps. Esses backups são controlados por você nos Ajustes do iOS e estão sujeitos à política de privacidade da Apple, não a esta.</p>",
      },
      {
        title: "Widgets",
        html: "<p>O widget do Companions mostra os peixes do seu aquário na Tela de Início ou na Tela Bloqueada. Como qualquer widget, ele fica visível para qualquer pessoa que consiga ver a sua tela. Se você usa o VoiceOver, o widget também lê os nomes dos seus peixes em voz alta. O widget lê os dados do aquário no armazenamento compartilhado do seu dispositivo; ele não envia nada para lugar nenhum.</p>",
      },
      {
        title: "Estatísticas de uso",
        html: "<p>Para saber quais partes do Companions as pessoas usam, o app envia estatísticas de uso anônimas ao Google Analytics para Firebase, um serviço operado pelo Google. São eventos como abrir o app, exibir uma tela, adicionar um peixe, escolher um estilo de aquário ou desbloquear um pacote, junto com informações gerais: o modelo do dispositivo, a versão do iOS e o idioma, a versão do app, e o país e a região estimados a partir da sua conexão com a internet, cujo endereço não é guardado. Cada instalação do app recebe um identificador aleatório para que o uso repetido conte como uma só pessoa; ele não é vinculado a você, à sua Conta Apple nem aos seus peixes e seus nomes, e o Companions não usa o identificador de publicidade nem pede permissão para rastrear você.</p>\n<p>Você pode desativar tudo isso com o botão Compartilhar Dados de Uso nos Ajustes, e nada mais é enviado. A forma como o Google trata essas estatísticas está descrita na política de privacidade do Google, em <a href=\"https://policies.google.com/privacy\" rel=\"noopener\">policies.google.com/privacy</a>.</p>",
      },
      {
        title: "Permissões",
        html: "<p>O Companions pede três permissões do sistema, cada uma na primeira vez que você escolhe algo que precisa dela, e funciona sem nenhuma delas.</p>\n<ul>\n<li><strong>Adicionar fotos à sua fototeca:</strong> o iOS pede na primeira vez que você salva o código QR de um aquário no app Fotos. Essa permissão só permite que o app adicione imagens, não que veja as fotos que você já tem.</li>\n<li><strong>Ler seus passos no app Saúde:</strong> o iOS pede na primeira vez que você escolhe a complicação Meta de passos. O app lê apenas a contagem de passos de hoje, para mostrá-la no seu aquário, e nunca grava nada no Saúde. A contagem e a meta que você define ficam no armazenamento compartilhado do seu dispositivo para que o widget possa mostrá-las, e em nenhum outro lugar.</li>\n<li><strong>Sua localização enquanto o app está aberto:</strong> o iOS pede quando você toca em Localização, em Ajustes, depois de escolher a complicação Fase da Lua ou Clima. O app a usa para saber como a Lua aparece de onde você está, guardando apenas o hemisfério, e para obter o clima da sua região do serviço de meteorologia da Apple, que recebe sua localização aproximada para a previsão e nada mais. O Companions não armazena sua localização nem a envia para nenhum outro lugar.</li>\n</ul>\n<p>O Companions não acessa sua câmera, microfone, contatos, calendário nem notificações, e não pede permissão para rastrear sua atividade em outros apps ou sites.</p>",
      },
      {
        title: "Serviços de terceiros",
        html: "<p>Além do Google Analytics para Firebase, descrito acima, o Companions não contém nenhum kit de desenvolvimento de software de terceiros: nenhum relatório de falhas e nenhuma publicidade.</p>\n<p>A App Store cuida do download e da atualização do app, dos pacotes que você compra e das avaliações e resenhas que você decidir deixar. O Companions nunca vê os seus dados de pagamento. Essas interações são regidas pela política de privacidade da Apple.</p>",
      },
      {
        title: "O que você escolhe compartilhar",
        html: "<p>Alguns botões nos Ajustes abrem outros apps, e só quando você toca neles:</p>\n<ul>\n<li><strong>E-mail</strong> abre seu app de e-mail com uma nova mensagem endereçada a mim. Tudo o que você escrever é enviado pelo seu provedor de e-mail, e eu recebo apenas o que você mandar.</li>\n<li><strong>Compartilhar o Companions</strong> abre o menu de compartilhamento do iOS com um link para o app. O Companions não vê com quem você compartilha.</li>\n<li><strong>Avaliar o Companions</strong> pede à Apple que exiba a janela de avaliação da App Store. A Apple cuida da avaliação; o Companions não tem acesso a ela.</li>\n<li><strong>Compartilhar Este Aquário</strong>, no menu da página principal, cria um código que contém apenas a água e os enfeites do aquário, nada sobre você ou seus peixes, e abre o menu de compartilhamento para você enviá-lo.</li>\n</ul>",
      },
      {
        title: "O controle é seu",
        html: "<p>Você tem controle total sobre o seu aquário:</p>\n<ul>\n<li>Renomeie ou remova qualquer peixe a qualquer momento pela bandeja na parte de baixo do aquário</li>\n<li>Um peixe removido é apagado do seu dispositivo</li>\n<li>Desative as estatísticas de uso com o botão Compartilhar Dados de Uso nos Ajustes</li>\n<li>Apagar o app Companions apaga o aquário e tudo o mais que o app guardou no seu dispositivo (um backup do dispositivo feito antes ainda pode conter uma cópia até ser substituído)</li>\n</ul>",
      },
      {
        title: "Crianças",
        html: "<p>O Companions não coleta informações pessoais de ninguém, de nenhuma idade. As estatísticas de uso descritas acima são anônimas e nunca incluem nomes, nada do que é digitado no app nem nada que possa identificar uma criança, ou qualquer outra pessoa.</p>",
      },
    ],

    /** The one section the app's policy does not have: what this website itself does. */
    website: {
      title: 'Este site',
      countedHtml: (githubUrl: string, googleUrl: string) =>
        `<p>Este site é um conjunto de páginas estáticas hospedadas no GitHub Pages; as fontes e as imagens são carregadas do próprio site. A forma como o GitHub trata os registros do servidor web está descrita na <a href="${githubUrl}" rel="noopener">declaração de privacidade do GitHub</a>.</p>
<p>Para saber quantas pessoas visitam o site, de onde elas vêm e quais páginas e botões são usados, o site usa o Google Analytics, um serviço operado pelo Google. Ele registra as páginas que você abre e os links e botões em que você clica ou toca aqui, o site de onde você veio e informações gerais: seu navegador, o tipo de dispositivo e o idioma, e o país e a cidade estimados a partir da sua conexão com a internet, cujo endereço não é guardado. Para que visitas repetidas contem como um só visitante, ele mantém um identificador aleatório em dois cookies no seu navegador, <code>_ga</code> e outro cujo nome começa com <code>_ga_</code>, por até dois anos. O identificador não é vinculado ao seu nome, ao app nem aos seus peixes, e nada disso é usado para publicidade.</p>
<p>Se o relógio do seu navegador estiver ajustado para um fuso horário da Europa, o site pergunta antes, e nada é carregado do Google a menos que você permita. As estatísticas também ficam desativadas, sem que o site pergunte, se o seu navegador enviar um sinal Global Privacy Control ou Do Not Track. Esteja onde estiver, você pode mudar de ideia aqui a qualquer momento, e desativar as estatísticas também remove os cookies. A forma como o Google trata essas estatísticas está descrita na política de privacidade do Google, em <a href="${googleUrl}" rel="noopener">policies.google.com/privacy</a>.</p>`,
      uncountedHtml: (githubUrl: string) =>
        `<p>Este site é um conjunto de páginas estáticas hospedadas no GitHub Pages. Ele não grava cookies, não coleta estatísticas e não incorpora nada de terceiros; as fontes e as imagens são carregadas do próprio site. A forma como o GitHub trata os registros do servidor web está descrita na <a href="${githubUrl}" rel="noopener">declaração de privacidade do GitHub</a>.</p>`,
      statisticsHtml: (state: string) => `As estatísticas do site estão ${state} neste navegador.`,
      on: 'ativadas',
      off: 'desativadas',
      turnOn: 'Ativar',
      turnOff: 'Desativar',
      updated: (date: string) => `Esta seção trata apenas do site e foi atualizada pela última vez em ${date}.`,
    },

    changes: {
      title: "Alterações nesta política",
      html: "<p>Se o Companions algum dia mudar a forma como trata os dados, esta política será atualizada no app e a data no topo será revisada. A versão atual está sempre disponível nos Ajustes.</p>",
    },
    contact: {
      title: "Contato",
      html: (email: string) =>
        "<p>Se você tiver alguma dúvida sobre esta política ou sobre como o Companions trata seus dados, mande um e-mail para " + email + " ou use o botão E-mail nos Ajustes.</p>",
    },
  },

  consent: {
    label: 'Estatísticas do site',
    html: (privacyUrl: string) =>
      `<strong>Este site pode contar a sua visita?</strong> Ele usaria o Google Analytics, que grava cookies, para ver quais páginas e botões são usados. Nunca para publicidade. <a href="${privacyUrl}">Como funciona</a>`,
    no: 'Melhor não',
    allow: 'Permitir',
  },

  notFound: {
    title: 'Página não encontrada',
    description: 'Essa página saiu nadando. Dê uma olhada nas páginas de ajuda ou volte para a página inicial.',
    h1: 'Essa página saiu nadando.',
    lead: 'Não há nada neste endereço. Já os peixes estão muito bem.',
    home: 'Voltar ao início',
    help: 'Ajuda e dúvidas',
  },
};

export default dictionary;
