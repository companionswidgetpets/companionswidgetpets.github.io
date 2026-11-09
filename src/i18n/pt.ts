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
    subtitle: 'Seus peixes nadam direto no widget, o dia inteiro.',
    oneLiner:
      'O Companions é um app gratuito para iPhone que coloca um pequeno aquário animado em um widget da Tela de Início: escolha seus peixes, dê um nome a cada um e veja todos nadando sempre que olhar para o celular.',
    madeIn: 'Coreia do Sul',
  },

  og: {
    titleHtml: 'Um pequeno aquário na sua Tela&nbsp;de&nbsp;Início.',
    text: 'Seus peixes nadam direto no widget, o dia inteiro.',
    facts: 'Grátis na App Store · iPhone, iPad, Mac e Apple Watch',
    imageAlt: (appName: string, tagline: string) => `${appName}: ${tagline}`,
  },

  ld: {
    jobTitle: 'Desenvolvedor independente de apps',
    alternateNames: ['Companions widget de aquário', 'Companions widget de peixes', 'Companions aquário virtual'],
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
    guides: 'Guias',
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
    guides: 'Guias',
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
      `O Companions é um widget de aquário gratuito para iPhone: escolha entre ${species} ${n(species, 'peixe', 'peixes')}, dê um nome a cada um e veja todos nadando na Tela de Início, no modo Em Espera (StandBy), no Mac e no Apple Watch. Sem dar comida, sem limpar, sem culpa.`,

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
        text: 'Deixe o iPhone de lado enquanto carrega e o aquário faz companhia a noite toda, ao lado do relógio.',
        date: 'ter., 1',
      },
      watch: {
        title: 'Apple Watch',
        text: 'O app do Companions para Apple Watch mostra seu aquário pequeno no pulso, sincronizado a partir do iPhone. O relógio já mostra a hora por conta própria, então no aquário ficam só os peixes.',
      },
      ipad: {
        title: 'iPad',
        text: 'Um app Companions completo e independente para iPad. Monte seu aquário na tela grande e adicione widgets à Tela de Início, sem precisar de um iPhone.',
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
      lead: 'Todo aquário começa com um Tropical, uma Sardinha e um Baiacu, e o Pacote Água Doce vem de graça. Os demais chegam em pacotes que você compra uma única vez e são seus para sempre, ou de uma vez só, com Todos os Peixes. Cada peixe nada do seu jeito, no seu ritmo, e de vez em quando solta uma bolhinha.',
      more: 'Todos os peixes e pacotes',
    },

    customize: {
      kicker: 'Deixe com a sua cara',
      title: 'Seu aquário, do seu jeito.',
      lead: 'Oito águas, dezenove enfeites para arrumar como você quiser, algo útil no canto e um ícone do app para combinar.',
      props: {
        kicker: (count: number) => `${count} ${n(count, 'enfeite', 'enfeites')}`,
        title: 'Decore o fundo do aquário',
        text: 'Samambaias, corais, conchas, uma casa de abacaxi, um moai. Arraste para onde quiser, redimensione, vire, desfaça. Salve quantos aquários quiser e alterne entre eles.',
      },
      complications: {
        kicker: 'Complicações',
        title: 'Algo útil no canto',
        text: 'A hora, a data, o clima de hoje, sua meta de passos ou a Lua desta noite, em branco sobre a água. Fazem parte de Todos os Peixes.',
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
      title: 'Sem dar comida. Sem limpar. Sem culpa.',
      lead: 'Só alguns companheiros coloridos, sempre por perto.',
      cards: [
        {
          title: 'Aqui ninguém morre',
          text: 'Suma por uma semana, um mês, um ano. Seus peixes vão estar exatamente como você deixou: nadando.',
        },
        {
          title: 'Sem conta, sem anúncios',
          text: 'Sem cadastro, sem ninguém rastreando você, sem nada para comprar para continuar brincando. Seu aquário fica no seu dispositivo.',
        },
        {
          title: 'Dê comida, se quiser',
          text: 'Toque no garfo e na faca, solte uma pitada de comida na água e veja os peixes correrem atrás. Se pular essa parte, ninguém liga.',
        },
        {
          title: 'Eles dão oi',
          text: 'Em algumas manhãs, um peixe cumprimenta você quando o app abre. Toque no vidro e sobe uma nuvenzinha de bolhas. Dê a eles o nome de quem você quiser.',
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

    guides: {
      kicker: 'Guias',
      title: 'Aproveite seu aquário ao máximo.',
      all: 'Todos os guias',
    },
  },

  sizes: {
    kicker: 'Três tamanhos, oito águas',
    title: 'Um aquário. Qualquer tamanho de widget.',
    lead: 'O widget vem nos tamanhos pequeno, médio e grande, e cada tamanho tem seus próprios peixes. Escolha um estilo e todos os aquários mudam junto.',
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
      'Respostas às dúvidas mais comuns sobre o Companions, o widget de aquário: como adicionar o widget à Tela de Início, peixes e pacotes, estilos de aquário, complicações, modo Em Espera (StandBy), Apple Watch, Mac, compras e privacidade.',
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
      'other-devices': 'Em Espera, Apple Watch, Mac e iPad',
      'privacy-and-purchases': 'Compras e privacidade',
      troubleshooting: 'Quando algo não parece certo',
    },
    fullAnswer: 'Resposta completa',
    related: 'Veja também',
    kindQuestion: 'Pergunta',
    kindGuide: 'Guia',
    kindPage: 'Página',
    stuckTitle: 'Ainda não deu certo?',
    stuckHtml: (email: string, helpUrl: string) =>
      `Escreva para ${email} informando o modelo do seu iPhone e a versão do iOS, e a gente resolve. <a href="${helpUrl}">Voltar para todas as perguntas</a>.`,
  },

  guides: {
    title: 'Guias',
    description:
      'Guias passo a passo do Companions, o widget de aquário: como colocá-lo na Tela de Início do iPhone, no modo Em Espera, no Apple Watch e no Mac, montar aquários, usar complicações, alimentar os peixes e compartilhar.',
    kicker: 'Guias',
    h1: 'Aproveite seu aquário ao máximo.',
    lead: 'Leituras mais longas: como o widget funciona, como configurá-lo em todos os lugares e os pequenos detalhes que vale a pena conhecer.',
    by: (author: string) => `Por ${author}`,
    onThisPage: 'Nesta página',
    more: 'Mais guias',
  },

  packs: {
    title: 'Todos os peixes e pacotes',
    description: (species: number, free: number) =>
      `${n(species, 'O peixe', `Os ${species} peixes`)} do Companions, o widget de aquário, pacote por pacote: ${n(free, 'qual vem de graça', `quais ${free} vêm de graça`)}, o que cada pacote traz e como funcionam os pacotes de compra única e o Todos os Peixes.`,
    kicker: (species: number, packs: number) =>
      `${species} ${n(species, 'espécie', 'espécies')} · ${packs} ${n(packs, 'pacote', 'pacotes')}`,
    h1: 'Cada peixe, cada pacote.',
    lead: (free: number) =>
      `O Companions já vem com ${free} ${n(free, 'peixe', 'peixes')}: os três com que todo aquário começa e os cinco do Pacote Água Doce. Os outros pacotes são comprados uma única vez, dentro do app, e são seus para sempre. Todos os Peixes desbloqueia todos os pacotes de uma vez, incluindo os que ainda vão chegar, e com eles as complicações do aquário.`,
    listName: 'Pacotes de peixes do Companions',
    howTitle: 'Como funcionam os pacotes',
    howHtml: [
      'Um pacote é uma compra única feita pela App Store, na moeda do seu país. Compre no iPhone e ele também é seu no iPad, com a mesma Conta Apple; em um dispositivo novo, Restaurar Compras, nos Ajustes, traz tudo de volta. Nada expira, e nada do que está em um aquário é tirado de você.',
      '<strong>Todos os Peixes</strong> existe em duas versões: um desbloqueio vitalício, de compra única, ou um plano mensal, pelo tempo que você quiser. Nos dois casos, ele libera todos os pacotes, os pacotes que forem adicionados depois e as complicações (a hora, a data, o clima, os passos e a Lua em um canto do aquário). Se o plano mensal expirar, os peixes que você já adicionou continuam nadando; só a adição de novos peixes desses pacotes fica esperando a renovação.',
      'Os preços aparecem no app, em Ajustes, na sua moeda.',
    ],
  },

  pack: {
    title: (pack: string, fish: string) => `${pack}: ${fish}`,
    description: (c: { tagline: string; pack: string; count: number; fish: string; free: boolean }) =>
      `${c.tagline} No widget de aquário Companions, “${c.pack}” traz ${c.count} ${n(c.count, 'peixe', 'peixes')}: ${c.fish}. ${c.free ? 'Já vem com o app, de graça.' : 'Compra única dentro do app, ou parte de Todos os Peixes.'}`,
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
        swimmer: 'nada a meia água, deslizando ligeiro, com um leve sobe e desce',
        floater: 'flutua em vez de nadar: paira em qualquer ponto onde um peixe poderia estar e deriva devagar',
        creeper:
          'fica no fundo e avança por ele aos pouquinhos, tão devagar que mal dá para ver o movimento, inclinando-se de leve para o lado em que vai',
        crawler: 'anda pelo fundo em passinhos apressados, com um leve sobe e desce a cada movimento das pernas',
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
    step3FreeHtml: 'Ele cai na água com um tchibum. Dê um nome a ele ou fique com o que já veio.',
    step3PaidHtml:
      'Se o pacote estiver bloqueado, toque em <strong>Desbloquear</strong> e compre o pacote uma única vez, ou Todos os Peixes para ter todos os pacotes. Aí o peixe cai na água com um tchibum. Dê um nome a ele ou fique com o que já veio.',
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
    lead: 'O estilo dá cor à água e ao fundo do aquário; o vidro, a borda e os reflexos continuam iguais, então os aquários pequeno, médio e grande parecem o mesmo aquário, só que maior. Mude o estilo de um aquário na página “Editar aquário” e todos os widgets que mostram esse aquário acompanham.',
    tankLabel: (style: string) => `Aquário no estilo ${style}, no tamanho médio do widget`,
    counter: (index: number, count: number) => `Estilo ${index} de ${count}`,
    blurbs: {
      minimal:
        'O aquário azul com que o app foi lançado: um azul mais claro no alto, que assenta em um azul-celeste vivo no meio, sobre uma névoa branca. Luminoso, limpo, e o estilo em que a maioria dos peixes fica mais bonita.',
      deepOcean:
        'Safira no alto, por onde a luz entra, descendo pelo azul-marinho até um índigo quase preto no fundo. As águas-vivas brilham nele; os peixes de recife saltam aos olhos.',
      pond: 'Verde ensolarado na superfície, que escurece até um verde-folha e puxa de leve para o oliva ao encontrar um fundo de areia em tom quente. Feito para kois, trutas e as criaturas do lago.',
      reed: 'Um verde mais frio, puxado para o azul-petróleo, o parente mais próximo do Minimalista em temperatura, sobre um fundo bege discreto. Alternar entre os dois parece uma mudança de luz, não uma troca de aquário.',
      blossom:
        'Um rosa pálido de flor de cerejeira na superfície, que assenta em um rosado suave, sobre a mesma névoa branca do Minimalista. Fica no lado frio do rosa para que os peixes laranja e vermelhos não percam o destaque.',
      dark: 'Tão preto quanto a Tela de Início permite, para quem monta a tela toda em preto: um cinza-carvão neutro na superfície, que desce até o preto puro abaixo do fundo, com os reflexos do vidro atenuados para ficar discreto entre ícones escuros.',
      pumpkin:
        'Um laranja-abóbora suave na superfície, que assenta em um laranja mais profundo, sobre uma névoa branca. Não chega ao amarelo, para que os peixes Kinguio e Koi ouro continuem se destacando.',
      lavender:
        'Os estilos Minimalista e Flor com o matiz virado para a flor de lavanda: tão vivo quanto um lavanda claro assim consegue ser, sobre a mesma névoa branca. Os peixes Disco e Dardo combinam com ele.',
    },
    howTitle: 'Como mudar o estilo de um aquário',
    stepsHtml: [
      'Abra o Companions, toque no botão <strong>⋯</strong> no alto da página e depois em <strong>Editar Este Aquário</strong>.',
      'Abra o menu de estilos no alto da página “Editar aquário” e escolha uma água. O aquário muda na hora, sob o seu dedo.',
      'Toque em <strong>Fechar</strong>. O aquário é salvo sozinho, e o widget na sua Tela de Início se atualiza para ficar igual.',
    ],
    after:
      'Os estilos pertencem aos aquários, não ao app: na página Meus Aquários, você pode ter lado a lado um aquário pequeno no estilo Flor e um aquário grande no estilo Escuro, e trocar qual deles o seu widget mostra.',
  },

  whatsNew: {
    title: 'Novidades',
    description: (version: string, date: string) =>
      `As novidades de cada versão do Companions, o app de widget de aquário. A versão atual é a ${version}, lançada em ${date}.`,
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
    includeTitle: 'O que incluir',
    include: [
      'O modelo do seu iPhone e a versão do iOS (Ajustes › Geral › Sobre).',
      'A versão do Companions, que aparece no fim dos Ajustes do app.',
      'O que você esperava e o que aconteceu de fato. Uma captura de tela ou uma gravação da tela ajuda demais.',
    ],
    purchasesTitle: 'Compras e reembolsos',
    purchasesHtml: (reportUrl: string) =>
      `Os pacotes e o Todos os Peixes são vendidos pela Apple, por meio da App Store, então os reembolsos são feitos pela Apple: acesse <a href="${reportUrl}" rel="noopener">reportaproblem.apple.com</a>, inicie a sessão e escolha a compra. Se um pacote que você comprou aparecer como bloqueado, abra os Ajustes no app e toque em <strong>Restaurar Compras</strong>; confira se a sessão está iniciada com a Conta Apple que fez a compra.`,
    privacyTitle: 'Privacidade',
    privacyHtml: (privacyUrl: string) =>
      `O Companions guarda seu aquário no seu dispositivo e não coleta nenhuma informação pessoal. Os detalhes estão na <a href="${privacyUrl}">política de privacidade</a>.`,
    wishTitle: 'Tem algo que você adoraria ver?',
    wish: 'Um peixe, um enfeite, um estilo, um lugar onde o widget deveria morar: conte para a gente. Muitos dos pacotes começaram com um e-mail.',
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
      `O Companions é um app gratuito para iPhone que mantém um pequeno aquário em um widget da Tela de Início. Você escolhe seus peixes entre ${c.species} ${n(c.species, 'espécie desenhada', 'espécies desenhadas')} à mão, dá um nome a cada um, e cada peixe nada do próprio jeito, no próprio ritmo, sempre que você desbloqueia o celular: no widget, no modo Em Espera enquanto o iPhone carrega, na Mesa do Mac e no Apple Watch. Não é preciso alimentar ninguém e nada pode morrer; dar comida é uma brincadeira para quem quiser. Os aquários vêm em oito estilos de água, com ${c.props} ${n(c.props, 'enfeite', 'enfeites')} para arrumar, e podem levar em um canto a hora, a data, o clima, sua meta de passos ou a Lua. Oito peixes já vêm com o app; os demais chegam em pacotes de compra única ou de uma vez só, com Todos os Peixes. O Companions não tem conta, publicidade nem rastreamento, e está traduzido para ${c.languages} ${n(c.languages, 'idioma', 'idiomas')}. É feito por ${c.developer} e Shea, na Coreia do Sul.`,
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
      firstReleased: 'Primeiro lançamento',
      currentVersion: 'Versão atual',
      currentVersionValue: (version: string, date: string) => `${version} (${date})`,
      developer: 'Desenvolvimento',
      developerValue: (developer: string) => `${developer} (design e código) e Shea (arte), Coreia do Sul`,
      appStore: 'App Store',
      contact: 'Contato',
    },
    iconTitle: 'Ícone',
    iconText: 'O ícone da App Store em 1024 pixels. Por favor, não mude as cores nem coloque o ícone em outro formato.',
    iconAlt: 'O ícone do app Companions: a cauda de um kinguio em uma água azul-clara',
    screenshotsTitle: 'Capturas de tela',
    screenshotsText: 'As capturas de tela da App Store, em ordem. Clique em uma delas para abrir o arquivo em tamanho real.',
    screenshotAlt: (index: number) => `Captura de tela ${index} do Companions na App Store`,
    downloadTitle: 'Download',
  },

  privacy: {
    title: 'Política de privacidade',
    description:
      'O Companions não coleta, vende nem compartilha nenhuma informação pessoal. Seu aquário fica no seu dispositivo; a única coisa enviada são estatísticas de uso anônimas, que você pode desativar.',
    kicker: 'Política de privacidade',
    h1: 'Seus peixes são só da sua conta.',
    meta: (date: string) => `Última atualização: ${date}. Esta é a mesma política exibida no app, em Ajustes.`,

    /** The app's own policy, in the app's own Portuguese, word for word; only the tags are added. */
    sections: [
      {
        title: 'Em resumo',
        html: `<p>O Companions não coleta, vende nem compartilha nenhuma informação pessoal. Não há conta para criar, nem publicidade, nem rastreamento de nenhum tipo, e tudo o que o app sabe sobre o seu aquário fica no seu dispositivo. A única coisa que o Companions envia são estatísticas de uso anônimas, para que eu possa ver quais partes do app são usadas; você pode desativá-las nos Ajustes a qualquer momento.</p>`,
      },
      {
        title: 'O que o Companions guarda',
        html: `<p>A única coisa que o Companions guarda é o próprio aquário:</p>
<ul>
<li>Os peixes do seu aquário e a espécie de cada um</li>
<li>O nome que você dá a cada peixe</li>
<li>Um identificador aleatório para cada peixe, para que o app consiga distinguir dois peixes da mesma espécie</li>
</ul>
<p>Os nomes são salvos exatamente como você digita. Se você der a um peixe o nome de um amigo ou de alguém da família, esse nome fica no seu dispositivo como todo o resto, e em nenhum outro lugar.</p>`,
      },
      {
        title: 'Onde os dados ficam',
        html: `<p>Seu aquário é salvo no seu dispositivo, em uma área de armazenamento compartilhada entre o app Companions e o widget da Tela de Início, para que o widget possa mostrar seus peixes. O Companions nunca envia esses dados para lugar nenhum.</p>
<p>Se você fizer backup do dispositivo com o Backup do iCloud ou em um computador, o backup da Apple pode incluir os dados do Companions junto com os dos outros apps. Esses backups são controlados por você nos Ajustes do iOS e estão sujeitos à política de privacidade da Apple, não a esta.</p>`,
      },
      {
        title: 'Widgets',
        html: `<p>O widget do Companions mostra os peixes do seu aquário na Tela de Início ou na Tela Bloqueada. Como qualquer widget, ele fica visível para qualquer pessoa que consiga ver a sua tela. Se você usa o VoiceOver, o widget também lê os nomes dos seus peixes em voz alta. O widget lê os dados do aquário no armazenamento compartilhado do seu dispositivo; ele não envia nada para lugar nenhum.</p>`,
      },
      {
        title: 'Estatísticas de uso',
        html: `<p>Para saber quais partes do Companions as pessoas usam, o app envia estatísticas de uso anônimas ao Google Analytics para Firebase, um serviço operado pelo Google. São eventos como abrir o app, exibir uma tela, adicionar um peixe, escolher um estilo de aquário ou desbloquear um pacote, junto com informações gerais: o modelo do dispositivo, a versão do iOS e o idioma, a versão do app, e o país e a região estimados a partir da sua conexão com a internet, cujo endereço não é guardado. Cada instalação do app recebe um identificador aleatório para que o uso repetido conte como uma só pessoa; ele não é vinculado a você, à sua Conta Apple nem aos seus peixes e seus nomes, e o Companions não usa o identificador de publicidade nem pede permissão para rastrear você.</p>
<p>Você pode desativar tudo isso com o botão Compartilhar Dados de Uso nos Ajustes, e nada mais é enviado. A forma como o Google trata essas estatísticas está descrita na política de privacidade do Google, em <a href="https://policies.google.com/privacy" rel="noopener">policies.google.com/privacy</a>.</p>`,
      },
      {
        title: 'Permissões',
        html: `<p>O Companions pede três permissões do sistema, cada uma na primeira vez que você escolhe algo que precisa dela, e funciona sem nenhuma delas.</p>
<ul>
<li><strong>Adicionar fotos à sua fototeca:</strong> o iOS pede na primeira vez que você salva o código QR de um aquário no app Fotos. Essa permissão só permite que o app adicione imagens, não que veja as fotos que você já tem.</li>
<li><strong>Ler seus passos no app Saúde:</strong> o iOS pede na primeira vez que você escolhe a complicação Meta de passos. O app lê apenas a contagem de passos de hoje, para mostrá-la no seu aquário, e nunca grava nada no Saúde. A contagem e a meta que você define ficam no armazenamento compartilhado do seu dispositivo para que o widget possa mostrá-las, e em nenhum outro lugar.</li>
<li><strong>Sua localização enquanto o app está aberto:</strong> o iOS pede quando você toca em Localização, em Ajustes, depois de escolher a complicação Fase da Lua ou Clima. O app a usa para saber como a Lua aparece de onde você está, guardando apenas o hemisfério, e para obter o clima da sua região do serviço de meteorologia da Apple, que recebe sua localização aproximada para a previsão e nada mais. O Companions não armazena sua localização nem a envia para nenhum outro lugar.</li>
</ul>
<p>O Companions não acessa sua câmera, microfone, contatos, calendário nem notificações, e não pede permissão para rastrear sua atividade em outros apps ou sites.</p>`,
      },
      {
        title: 'Serviços de terceiros',
        html: `<p>Além do Google Analytics para Firebase, descrito acima, o Companions não contém nenhum kit de desenvolvimento de software de terceiros: nenhum relatório de falhas e nenhuma publicidade.</p>
<p>A App Store cuida do download e da atualização do app, dos pacotes que você compra e das avaliações e resenhas que você decidir deixar. O Companions nunca vê os seus dados de pagamento. Essas interações são regidas pela política de privacidade da Apple.</p>`,
      },
      {
        title: 'O que você escolhe compartilhar',
        html: `<p>Alguns botões nos Ajustes abrem outros apps, e só quando você toca neles:</p>
<ul>
<li><strong>E-mail</strong> abre seu app de e-mail com uma nova mensagem endereçada a mim. Tudo o que você escrever é enviado pelo seu provedor de e-mail, e eu recebo apenas o que você mandar.</li>
<li><strong>Compartilhar o Companions</strong> abre o menu de compartilhamento do iOS com um link para o app. O Companions não vê com quem você compartilha.</li>
<li><strong>Avaliar o Companions</strong> pede à Apple que exiba a janela de avaliação da App Store. A Apple cuida da avaliação; o Companions não tem acesso a ela.</li>
<li><strong>Compartilhar Este Aquário</strong>, no menu da página principal, cria um código que contém apenas a água e os enfeites do aquário, nada sobre você ou seus peixes, e abre o menu de compartilhamento para você enviá-lo.</li>
</ul>`,
      },
      {
        title: 'O controle é seu',
        html: `<p>Você tem controle total sobre o seu aquário:</p>
<ul>
<li>Renomeie ou remova qualquer peixe a qualquer momento pela bandeja na parte de baixo do aquário</li>
<li>Um peixe removido é apagado do seu dispositivo</li>
<li>Desative as estatísticas de uso com o botão Compartilhar Dados de Uso nos Ajustes</li>
<li>Apagar o app Companions apaga o aquário e tudo o mais que o app guardou no seu dispositivo (um backup do dispositivo feito antes ainda pode conter uma cópia até ser substituído)</li>
</ul>`,
      },
      {
        title: 'Crianças',
        html: `<p>O Companions não coleta informações pessoais de ninguém, de nenhuma idade. As estatísticas de uso descritas acima são anônimas e nunca incluem nomes, nada do que é digitado no app nem nada que possa identificar uma criança, ou qualquer outra pessoa.</p>`,
      },
    ],

    /** The one section the app's policy does not have: what this website itself does. */
    website: {
      title: 'Este site',
      countedHtml: (githubUrl: string, googleUrl: string) =>
        `<p>Este site é um conjunto de páginas estáticas servidas pelo GitHub Pages; as fontes e as imagens são servidas pelo próprio site. A forma como o GitHub trata os registros do servidor web está descrita na <a href="${githubUrl}" rel="noopener">declaração de privacidade do GitHub</a>.</p>
<p>Para saber quantas pessoas visitam o site, de onde elas vêm e quais páginas e botões são usados, o site usa o Google Analytics, um serviço operado pelo Google. Ele registra as páginas que você abre e os links e botões em que você clica ou toca aqui, o site de onde você veio e informações gerais: seu navegador, o tipo de dispositivo e o idioma, e o país e a cidade estimados a partir da sua conexão com a internet, cujo endereço não é guardado. Para que visitas repetidas contem como um só visitante, ele mantém um identificador aleatório em dois cookies no seu navegador, <code>_ga</code> e outro cujo nome começa com <code>_ga_</code>, por até dois anos. O identificador não é vinculado ao seu nome, ao app nem aos seus peixes, e nada disso é usado para publicidade.</p>
<p>Se o relógio do seu navegador estiver ajustado para um fuso horário da Europa, o site pergunta antes, e nada é carregado do Google a menos que você permita. As estatísticas também ficam desativadas, sem que o site pergunte, se o seu navegador enviar um sinal Global Privacy Control ou Do Not Track. Onde quer que você esteja, você pode mudar de ideia aqui a qualquer momento, e desativar as estatísticas também remove os cookies. A forma como o Google trata essas estatísticas está descrita na política de privacidade do Google, em <a href="${googleUrl}" rel="noopener">policies.google.com/privacy</a>.</p>`,
      uncountedHtml: (githubUrl: string) =>
        `<p>Este site é um conjunto de páginas estáticas servidas pelo GitHub Pages. Ele não grava cookies, não usa nenhuma ferramenta de estatísticas e não incorpora nada de terceiros; as fontes e as imagens são servidas pelo próprio site. A forma como o GitHub trata os registros do servidor web está descrita na <a href="${githubUrl}" rel="noopener">declaração de privacidade do GitHub</a>.</p>`,
      statisticsHtml: (state: string) => `As estatísticas do site estão ${state} neste navegador.`,
      on: 'ativadas',
      off: 'desativadas',
      turnOn: 'Ativar',
      turnOff: 'Desativar',
      updated: (date: string) => `Esta seção trata apenas do site e foi atualizada pela última vez em ${date}.`,
    },

    changes: {
      title: 'Alterações nesta política',
      html: `<p>Se o Companions algum dia mudar a forma como trata os dados, esta política será atualizada no app e a data no topo será revisada. A versão atual está sempre disponível nos Ajustes.</p>`,
    },
    contact: {
      title: 'Contato',
      html: (email: string) =>
        `<p>Se você tiver alguma dúvida sobre esta política ou sobre como o Companions trata seus dados, mande um e-mail para ${email} ou use o botão E-mail nos Ajustes.</p>`,
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
    description: 'Essa página saiu nadando. Tente as páginas de ajuda ou a página inicial.',
    h1: 'Essa página saiu nadando.',
    lead: 'Não há nada neste endereço. Os peixes, porém, estão bem.',
    home: 'Voltar ao início',
    help: 'Ajuda e dúvidas',
  },
};

export default dictionary;
