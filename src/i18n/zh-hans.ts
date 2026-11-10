import type { Dictionary } from './en.ts';

const dictionary: Dictionary = {
  format: {
    listSeparator: '、',
  },

  app: {
    name: 'Companions - Widget Pets',
    tagline: '一个小小的鱼缸，住在你的主屏幕上。',
    subtitle: '你的鱼儿就在小组件里游来游去，从早游到晚。',
    oneLiner:
      'Companions 是一款免费的 iPhone App，把一个会动的小鱼缸放进主屏幕小组件：挑选你喜欢的鱼，给它们起名字，每次看手机，都能看到它们在游。',
    madeIn: '韩国',
  },

  og: {
    titleHtml: '一个小小的鱼缸，住在你的主屏幕上。',
    text: '你的鱼儿就在小组件里游来游去，从早游到晚。',
    facts: 'App Store 免费下载 · iPhone、iPad、Mac 和 Apple Watch',
    imageAlt: (appName: string, tagline: string) => `${appName}：${tagline}`,
  },

  ld: {
    jobTitle: '独立 App 开发者',
    alternateNames: ['Companions 鱼缸小组件', 'Companions 水族箱小组件', 'Companions 桌面养鱼小组件'],
    offer: '免费下载，自带基础鱼种和淡水套装；更多的鱼可以通过一次性购买的套装获得，也可以用“全部鱼类”一次全部解锁。',
    features: (c: { species: number; packs: number; props: number }) => [
      '会动的鱼缸主屏幕小组件，有小、中、大三种尺寸',
      `${c.packs} 个套装共 ${c.species} 种鱼，每个鱼缸最多养五条`,
      `八种鱼缸样式，${c.props} 个可以随意摆放的装饰`,
      '鱼缸一角的复杂功能：时间、日期、天气、步数目标和月相',
      '支持待机显示、Apple Watch 和 Mac（iPhone 小组件）',
      '以代码或图片的形式把鱼缸分享给朋友',
      '无需账户，没有广告，没有跟踪',
    ],
  },

  common: {
    skipToContent: '跳到主要内容',
    breadcrumb: '面包屑导航',
    updated: (date: string) => `更新于 ${date}`,
  },

  nav: {
    site: '网站',
    homeLabel: 'Companions 首页',
    menu: '菜单',
    help: '帮助',
    blog: '博客',
    fish: '鱼类',
    styles: '样式',
    whatsNew: '更新日志',
    support: '支持',
    press: '媒体资料',
    download: '下载 App',
    get: '下载',
  },

  footer: {
    facts: (os: string) => `免费 · 需要 ${os} 或更高版本 · iPhone、iPad、Mac 和 Apple Watch`,
    columnSite: 'Companions',
    columnAbout: '关于',
    home: '首页',
    help: '帮助与常见问题',
    blog: '博客',
    packs: '鱼和套装',
    styles: '鱼缸样式',
    whatsNew: '更新日志',
    press: '媒体资料',
    support: '支持',
    privacy: '隐私政策',
    email: '给我们发邮件',
    madeWith: '在韩国用 ♡ 打造',
    legal: (year: number, owner: string) =>
      `© ${year} ${owner}。Apple、Apple 标志、iPhone、iPad、Mac、Apple Watch 和 App Store 是 Apple Inc. 的商标。`,
    language: '语言',
  },

  badge: {
    label: '在 App Store 下载 Companions',
    alt: 'App Store 下载',
  },

  tank: {
    label: (size: 'small' | 'medium' | 'large' | 'watch', style: string, count: number) => {
      const fish = `里面有 ${count} 条鱼`;
      if (size === 'watch') return `Apple Watch 上的“${style}”样式鱼缸，${fish}`;
      const tank = { small: '小号鱼缸', medium: '中号鱼缸', large: '大号鱼缸' }[size];
      return `“${style}”样式的${tank}，${fish}`;
    },
    namedFish: (name: string, species: string) => `${name}（${species}）`,
  },

  hero: {
    label: '简介',
    titleHtml: '一个小小的鱼缸，<br />住在你的主屏幕上。',
    tankLabel: 'Companions 小组件：小丑鱼、镰鱼、蓝唐王鱼和海马在蕨类和海绵之间游来游去',
    phoneAlt: 'iPhone 主屏幕，左上角是 Companions 鱼缸小组件',
    scroll: '向下滚动',
  },

  home: {
    title: (appName: string) => `${appName}：iPhone 主屏幕上的鱼缸小组件`,
    description: (species: number) =>
      `Companions 是一款免费的 iPhone 鱼缸小组件：从 ${species} 种鱼里挑选你喜欢的，给它们起名字，看它们在主屏幕、待机显示、Mac 和 Apple Watch 上游来游去。不用喂食，不用换水，也不怕养死。`,

    places: {
      kicker: '随时可见',
      title: '你看向哪里，它就在哪里。',
      lead: '小组件只要添加一次，以后每次瞄一眼手机，你的鱼都在。同样的鱼，同一缸水，不用打开 App。',
      homeScreen: {
        title: '主屏幕',
        text: '小、中、大三种尺寸，八种样式任选。可以只养一缸，也可以摆上一整排，每种尺寸还能养一批不同的鱼。',
      },
      standby: {
        title: '待机显示',
        text: '充电时把 iPhone 横放，鱼缸就待在时钟旁边，陪你度过一整夜。',
        date: '1日周二',
      },
      watch: {
        title: 'Apple Watch',
        text: 'Companions 的手表 App 把你的小号鱼缸搬到手腕上，内容从 iPhone 同步。手表本身就会显示时间，所以这里的鱼缸只有鱼。',
      },
      ipad: {
        title: 'iPad',
        text: 'iPad 上的 Companions 是一个完整、独立的 App。在大屏幕上布置你的鱼缸，再把小组件添加到主屏幕，全程不需要 iPhone。',
      },
      mac: {
        title: 'Mac',
        text: '通过“连续互通”把 iPhone 小组件带到 Mac 桌面，或者直接从 Mac 版 App 添加。鱼儿就在窗口之间陪着你。',
      },
    },

    fish: {
      kicker: (species: number, packs: number) => `${species} 种鱼，${packs} 个套装`,
      title: '来认识一下鱼儿们。',
      lead: '每个鱼缸一开始就有热带鱼、沙丁鱼和河豚，淡水套装也免费送你。其余的鱼按套装购买，买一次就永久拥有；也可以用“全部鱼类”一次全部解锁。每条鱼都有自己的游法和节奏，时不时还会吐个小泡泡。',
      more: '查看所有鱼和套装',
    },

    customize: {
      kicker: '随心布置',
      title: '你的鱼缸，你说了算。',
      lead: '八种水色，十九个装饰随你摆，角落里还能放点实用的信息，再配上一个相称的 App 图标。',
      props: {
        kicker: (count: number) => `${count} 个装饰`,
        title: '布置缸底',
        text: '蕨类、珊瑚、贝壳、菠萝屋、摩艾屋。拖到想放的地方，还能缩放、翻转、撤销。想存多少个鱼缸都行，随时切换。',
      },
      complications: {
        kicker: '复杂功能',
        title: '角落里放点有用的',
        text: '时间、日期、今天的天气、你的步数目标或今晚的月亮，以白色浮在水上。包含在“全部鱼类”中。',
      },
      icons: {
        kicker: '六款 App 图标',
        title: '配一个相称的图标',
        names: { minimal: '极简', twilight: '暮色', pond: '池塘', reed: '芦苇', blossom: '樱花', dark: '深色' },
        text: (names: string) => `${names}：在“设置”里挑一个和你的主屏幕最搭的。`,
      },
    },

    calm: {
      kicker: '最省心的宠物',
      title: '不用喂食，不用换水，没有负担。',
      lead: '就是几个色彩鲜亮的小伙伴，一直陪着你。',
      cards: [
        {
          title: '永远养不死',
          text: '离开一个星期、一个月，甚至一年，你的鱼都还是你离开时的样子，照常游着。',
        },
        {
          title: '不用注册，没有广告',
          text: '不用注册账号，不会跟踪你，也不用花钱才能接着玩。你的鱼缸只保存在你自己的设备上。',
        },
        {
          title: '想喂就喂',
          text: '轻点刀叉图标，捏一撮鱼食撒进水里，看它们追着抢食。不喂也没关系，谁都不会介意。',
        },
        {
          title: '它们会打招呼',
          text: '有些早上打开 App，会有一条鱼向你问好。轻点鱼缸玻璃，就会冒出一串泡泡。想用谁的名字给它们起名都行。',
        },
      ],
    },

    questions: {
      kicker: '常见问题',
      title: '问之前，先看看这里。',
      readFull: '查看完整回答',
      all: '全部问题与解答',
      readMore: '了解更多',
    },

    blog: {
      kicker: '博客',
      title: '让主屏幕更有趣的小点子。',
      all: '去博客看看',
    },
  },

  sizes: {
    kicker: '三种尺寸，八种水色',
    title: '一个鱼缸，尺寸随你挑。',
    lead: '小组件有小、中、大三种尺寸，每种尺寸各养各的鱼。选一种样式，每个鱼缸都会跟着变。',
    pickerLabel: '鱼缸样式',
    large: '大',
    medium: '中',
    small: '小',
    captionHtml: (style: string) =>
      `“${style}”样式的鱼缸，大、中、小三种尺寸。样式只需改一次，主屏幕上的所有小组件都会跟着换。`,
  },

  packGrid: {
    comesWithApp: 'App 自带',
    pack: '套装',
  },

  styleRow: {
    label: (style: string) => `“${style}”鱼缸样式`,
  },

  help: {
    title: '鱼缸小组件帮助与常见问题',
    description:
      'Companions 鱼缸小组件常见问题解答：怎么把小组件添加到 iPhone 主屏幕，鱼和套装、鱼缸样式、复杂功能、待机显示、Apple Watch、Mac，以及购买与隐私。',
    kicker: '帮助',
    h1: '有问必答。',
    leadHtml: (email: string) =>
      `关于 Companions，大家常问的问题都整理在这里了。没找到你的问题？发邮件到 ${email}，会有真人回复你。`,
    categoriesLabel: '分类',
    categories: {
      'getting-started': '新手入门',
      widgets: '小组件',
      'fish-and-packs': '鱼和套装',
      'tanks-and-styles': '鱼缸、样式和装饰',
      complications: '复杂功能',
      'other-devices': '待机显示、Apple Watch、Mac 和 iPad',
      'privacy-and-purchases': '购买与隐私',
      troubleshooting: '遇到问题怎么办',
    },
    fullAnswer: '完整回答',
    related: '相关内容',
    kindQuestion: '问题',
    kindArticle: '文章',
    kindPage: '页面',
    stuckTitle: '还是没解决？',
    stuckHtml: (email: string, helpUrl: string) =>
      `发邮件到 ${email}，附上你的 iPhone 型号和 iOS 版本，我们来帮你解决。<a href="${helpUrl}">返回全部问题</a>。`,
  },

  blog: {
    title: 'iPhone 小组件推荐、桌面美化灵感与使用教程',
    description:
      'iPhone 鱼缸小组件、电子宠物和可爱小组件 App 推荐，主屏幕配色与布局灵感，有趣的鱼类小知识，还有 Companions 的手把手使用教程。',
    kicker: '博客',
    h1: '让主屏幕更有趣的小点子。',
    lead: '值得一试的小组件和电子宠物 App、主屏幕美化灵感、鱼类小知识，还有手把手的使用教程。写这些的，就是做 Companions 的我们俩。',
    topicsLabel: '话题',
    categories: {
      'app-picks': {
        name: 'App 推荐',
        lead: '值得放在 iPhone 上的小组件、电子宠物和治愈系 App。',
      },
      'home-screen': {
        name: '主屏幕美化',
        lead: '配色、布局和小组件，让每次解锁都开心一点。',
      },
      fish: {
        name: '鱼和鱼缸',
        lead: '鱼类小知识、取名灵感，还有值得动手搭一搭的主题鱼缸。',
      },
      guides: {
        name: 'Companions 使用教程',
        lead: '一步步带你玩转小组件、待机显示、Apple Watch、Mac 和 App 里的一切。',
      },
      troubleshooting: {
        name: '疑难解答',
        lead: '小组件不听话时，按顺序检查这些地方。',
      },
    },
    by: (author: string) => `作者：${author}`,
    readingTime: (minutes: number) => `阅读约 ${minutes} 分钟`,
    onThisPage: '本文目录',
    more: '延伸阅读',
    cta: (species: number) =>
      `从 ${species} 种手绘的鱼中挑选，给它们起个名字，它们就会整天在你的小组件里游来游去。App 免费，自带八种鱼、全部鱼缸样式和三种小组件尺寸。`,
    feedTitle: 'Companions 博客',
    feed: 'RSS 订阅',
  },

  packs: {
    title: '所有鱼种和套装一览',
    description: (species: number, free: number) =>
      `按套装逐一介绍 Companions 养鱼小组件里的全部 ${species} 种鱼：哪 ${free} 种免费、每个套装里有哪些鱼，以及一次性套装和“全部鱼类”各是怎么回事。`,
    kicker: (species: number, packs: number) => `${species} 种鱼 · ${packs} 个套装`,
    h1: '每一种鱼，每一个套装。',
    lead: (free: number) =>
      `Companions 自带 ${free} 种鱼：每个鱼缸一开始就有的三种，加上淡水套装里的五种。其他套装在 App 内一次购买，永久拥有。“全部鱼类”会一次解锁所有套装，包括今后推出的新套装，鱼缸的复杂功能也一并解锁。`,
    listName: 'Companions 中的鱼类套装',
    howTitle: '套装怎么买、怎么用',
    howHtml: [
      '套装通过 App Store 一次性购买，以你当地的货币结算。在 iPhone 上买了，只要是同一个 Apple 账户，iPad 上也能用；换了新设备，在“设置”里轻点“恢复购买”就能找回来。买下的东西不会过期，鱼缸里的东西也永远不会消失。',
      '“<strong>全部鱼类</strong>”有两种买法：一次性买断的永久解锁，或者想用多久就订多久的包月方案。无论哪种，都会解锁所有套装、以后新增的每个套装，以及复杂功能（鱼缸一角的时间、日期、天气、步数和月亮）。如果包月方案到期没有续订，已经添加的鱼会照常游；只是要从这些套装里添加新鱼，得等续订之后。',
      '价格会以你当地的货币显示在 App 的“设置”中。',
    ],
  },

  pack: {
    title: (pack: string, fish: string) => `${pack}：${fish}`,
    description: (c: { tagline: string; pack: string; count: number; fish: string; free: boolean }) =>
      `${c.tagline}Companions 鱼缸小组件的“${c.pack}”共有 ${c.count} 种鱼：${c.fish}。${c.free ? '随 App 免费附送。' : '可在 App 内一次性购买，也包含在“全部鱼类”中。'}`,
    kickerFree: 'App 自带',
    kickerPaid: '鱼类套装',
    tankLabel: (style: string, pack: string, fish: string) => `“${style}”样式的鱼缸，养着“${pack}”的鱼：${fish}`,
    tankCaption: (pack: string, style: string) => `“${style}”样式鱼缸中的“${pack}”，中号小组件尺寸。`,
    fishAlt: (fish: string) => `Companions 中的${fish}插画`,
    fishText: (fish: string, swim: 'swimmer' | 'floater' | 'creeper' | 'crawler', scale: number) => {
      const how = {
        swimmer: '在中层水域轻快地游来游去，带着一点上下起伏',
        floater: '与其说在游，不如说在漂：鱼能待的地方它都能悬停，慢悠悠地漂着',
        creeper: '贴着缸底一点一点往前挪，慢得几乎看不出在动，身子还会顺着前进的方向微微倾斜',
        crawler: '在缸底迈着小碎步快走，随着腿的起落轻轻颠动',
      }[swim];
      const size =
        scale > 1
          ? `。它画得比标准大小的鱼大 ${Math.round((scale - 1) * 100)}%`
          : scale < 1
            ? '。它画得比标准大小的鱼略小一点'
            : '';
      return `${fish}${how}${size}。`;
    },
    howTitle: '怎么添加这些鱼',
    step1Html: '打开 Companions，轻点鱼缸下方托盘末尾的 <strong>+</strong>。',
    step2Html: (pack: string) => `在列表中找到“<strong>${pack}</strong>”，然后轻点一条鱼。`,
    step3FreeHtml: '鱼会“扑通”一声掉进水里。给它起个名字，或者就用它自带的名字。',
    step3PaidHtml:
      '如果套装还没解锁，轻点“<strong>解锁</strong>”，一次性买下这个套装，或者购买“全部鱼类”解锁所有套装。然后鱼会“扑通”一声掉进水里。给它起个名字，或者就用它自带的名字。',
    after: '一个鱼缸能养五条鱼。每种小组件尺寸各养各的，所以小号、中号和大号鱼缸里可以放不同的鱼。',
    namesTitle: '其他语言里的名字',
    namesIntro: (languages: number) => `Companions 支持 ${languages} 种语言。App 中这些鱼在各语言里的名字如下：`,
    languageHeader: '语言',
    others: '其他套装',
  },

  styles: {
    title: '八种鱼缸样式一览',
    description: (styles: string) =>
      `Companions 鱼缸小组件的所有水色：${styles}。每种样式是什么样子、适合哪些鱼，以及怎么更换鱼缸样式。`,
    kicker: (count: number) => `${count} 种样式`,
    h1: '同样的玻璃，不一样的水。',
    lead: '样式决定水和缸底的颜色；玻璃、缸沿和高光始终不变，所以小号、中号和大号鱼缸看起来就是同一个鱼缸，只是大小不同。在“编辑鱼缸”页面更换样式后，所有显示这个鱼缸的小组件都会跟着变。',
    tankLabel: (style: string) => `“${style}”鱼缸样式，中号小组件尺寸`,
    counter: (index: number, count: number) => `第 ${index} 种样式，共 ${count} 种`,
    blurbs: {
      minimal:
        'App 刚上线时就有的那缸蓝：顶部是浅一些的蔚蓝，到中段沉成明亮的天蓝，底下是一层白雾。明亮、干净，大多数鱼在这里最好看。',
      deepOcean:
        '顶部透光的地方是宝石蓝，往下经过藏青，到底部成了近乎全黑的靛蓝。水母在里面发着光，珊瑚礁鱼格外显眼。',
      pond: '水面是阳光照透的绿，往下加深成叶绿，快到暖色的沙底时带上一点橄榄色。最适合锦鲤、鳟鱼和池塘生物。',
      reed: '偏冷、带点青的绿，色温上是“极简”最近的亲戚，配一层柔和的浅褐色缸底。在这两种样式之间切换，更像是换了光线，而不是换了鱼缸。',
      blossom:
        '水面是淡淡的樱花粉，往下沉成柔和的玫瑰色，底下是和“极简”一样的白雾。粉色特意调得偏冷，橙色和红色的鱼才依然醒目。',
      dark: '黑到主屏幕所能允许的极限，专为全黑的主题搭配准备：水面是中性的炭灰，到缸底下方成了纯黑；玻璃高光也调暗了，好让它安静地待在深色图标之间。',
      pumpkin:
        '水面是柔和的南瓜橙，往下沉成更深的橙色，底下是一层白雾。颜色特意不往黄里调，金鱼和黄金锦鲤才依然显眼。',
      lavender:
        '把“极简”和“樱花”的色相转到薰衣草花的颜色：在这么浅的色调里，薰衣草紫能有多鲜艳就有多鲜艳，底下是同样的白雾。七彩神仙鱼和雷达鱼很适合它。',
    },
    howTitle: '怎么更换鱼缸样式',
    stepsHtml: [
      '打开 Companions，轻点页面顶部的 <strong>⋯</strong> 按钮，再轻点“<strong>编辑这个鱼缸</strong>”。',
      '打开“编辑鱼缸”页面顶部的样式菜单，选一种水色。鱼缸会在你指尖下立刻变样。',
      '轻点“<strong>关闭</strong>”。鱼缸会自动保存，主屏幕上的小组件也会随之更新。',
    ],
    after:
      '样式属于每个鱼缸，而不是整个 App：在“我的鱼缸”页面，你可以同时留着一个“樱花”样式的小号鱼缸和一个“深色”样式的大号鱼缸，并切换小组件显示哪一个。',
  },

  whatsNew: {
    title: '更新日志',
    description: (version: string, date: string) =>
      `Companions 鱼缸小组件 App 各个版本的更新说明。当前版本为 ${version}，发布于 ${date}。`,
    kicker: '更新日志',
    h1: '所有版本，按时间排列。',
    lead: (version: string, date: string) =>
      `当前版本是 Companions ${version}，发布于 ${date}。更新通过 App Store 推送。`,
    heading: (version: string, title: string) => `${version}：${title}`,
    entryTitle: (version: string, title: string) => `Companions ${version}：${title}`,
    versionKicker: (version: string) => `版本 ${version}`,
    all: '全部版本',
  },

  support: {
    title: '支持与联系',
    description: (email: string) =>
      `Companions 鱼缸小组件的支持页面：常见问题的解决办法，以及怎样通过 ${email} 联系开发者。`,
    kicker: '支持',
    h1: '有问题，交给我们。',
    leadHtml: (email: string) =>
      `Companions 由两个人制作，每封邮件都由我们其中一人亲自回复。写信到 ${email}，或者在 App 的“设置”中使用“电子邮件”按钮，它会自动帮你填好相关信息。`,
    contactName: 'Companions 支持',
    beforeTitle: '写信之前',
    beforeHtml: (helpUrl: string) =>
      `大多数问题在<a href="${helpUrl}">帮助页面</a>里都有解答。最常见的几个问题：`,
    includeTitle: '邮件里请附上',
    include: [
      '你的 iPhone 型号和 iOS 版本（设置 › 通用 › 关于本机）。',
      'Companions 的版本号，显示在 App 的“设置”页面底部。',
      '你预期会发生什么，实际又发生了什么。如果能附上截屏或屏幕录制，会有很大帮助。',
    ],
    purchasesTitle: '购买与退款',
    purchasesHtml: (reportUrl: string) =>
      `套装和“全部鱼类”由 Apple 通过 App Store 销售，所以退款也要通过 Apple 办理：访问 <a href="${reportUrl}" rel="noopener">reportaproblem.apple.com</a>，登录后选择对应的购买项目。如果你买过的套装显示为已锁定，请打开 App 的“设置”，轻点“<strong>恢复购买</strong>”，并确认登录的是当初购买时使用的 Apple 账户。`,
    privacyTitle: '隐私',
    privacyHtml: (privacyUrl: string) =>
      `Companions 把你的鱼缸保存在你的设备上，不收集任何个人信息。详情请看<a href="${privacyUrl}">隐私政策</a>。`,
    wishTitle: '想让我们加点什么？',
    wish: '一条鱼、一个装饰、一种样式，或者小组件还该出现在哪里：都可以告诉我们。不少套装最初就来自一封邮件。',
  },

  press: {
    title: '媒体资料',
    description:
      'iPhone 主屏幕水族箱小组件 Companions 的媒体资料：基本信息、介绍文字、图标和截屏，供撰写报道时使用。',
    kicker: '媒体资料',
    h1: '想写写 Companions？',
    leadHtml: (email: string) =>
      `这里的所有内容都可以引用，图片也可以在报道这款 App 时自由使用。其他事宜，请发邮件到 ${email}。`,
    sentenceTitle: '一句话介绍',
    paragraphTitle: '一段话介绍',
    paragraph: (c: { species: number; props: number; languages: number; developer: string }) =>
      `Companions 是一款免费的 iPhone App，把一个小鱼缸养在主屏幕小组件里。你可以从 ${c.species} 种手绘的鱼中挑选，给每条鱼起个名字；每次解锁手机，它们都按各自的方式和节奏游着：在小组件里，在手机充电时的待机显示中，在 Mac 桌面上，也在 Apple Watch 上。不需要喂食，鱼也永远不会死；喂鱼只是一个想玩就玩的小游戏。鱼缸有八种水色样式和 ${c.props} 个可以随意摆放的装饰，一角还能显示时间、日期、天气、步数目标或月亮。App 自带八种鱼；其余的鱼按套装一次性购买，也可以用“全部鱼类”一次全部解锁。Companions 不需要账户，没有广告，也没有跟踪，已翻译成 ${c.languages} 种语言。它由 ${c.developer} 和 Shea 在韩国制作。`,
    factsTitle: '基本信息',
    facts: {
      name: '名称',
      what: '简介',
      whatValue: 'iPhone App 及主屏幕小组件：一个会动的鱼缸，放进你挑的鱼，一整天都能看着它们游',
      price: '价格',
      priceValue: '免费。鱼类套装为一次性 App 内购买；“全部鱼类”可解锁全部内容，有永久买断和包月方案两种方式',
      platforms: '平台',
      platformsValue: (os: string) =>
        `iPhone 和 iPad（${os} 或更高版本）、Apple Watch App；Mac 可通过 iPhone 小组件使用`,
      fish: '鱼',
      fishValue: (species: number, packs: number) => `${species} 种，分为 ${packs} 个套装；其中八种为 App 自带`,
      styles: '鱼缸样式',
      props: '装饰',
      propsValue: (count: number) => `${count} 个可以摆在缸底的装饰`,
      complications: '复杂功能',
      complicationsValue: '时间、日期、天气、步数目标和月相，显示在鱼缸一角',
      languages: '语言',
      firstReleased: '首次发布',
      currentVersion: '当前版本',
      currentVersionValue: (version: string, date: string) => `${version}（${date}）`,
      developer: '开发者',
      developerValue: (developer: string) => `${developer}（设计与代码）和 Shea（美术），韩国`,
      appStore: 'App Store',
      contact: '联系方式',
    },
    iconTitle: '图标',
    iconText: '1024 像素的 App Store 图标。请不要改变它的颜色，也不要把它裁成其他形状。',
    iconAlt: 'Companions 的 App 图标：浅蓝色水中的一条金鱼尾巴',
    screenshotsTitle: '截屏',
    screenshotsText: 'App Store 上的截屏，按原顺序排列。点击任意一张可查看原尺寸文件。',
    screenshotAlt: (index: number) => `Companions 的 App Store 截屏，第 ${index} 张`,
    downloadTitle: '下载',
  },

  privacy: {
    title: '隐私政策',
    description:
      'Companions 不会收集、出售或共享任何个人信息。你的鱼缸只保存在你的设备上；唯一会发送出去的是匿名使用统计数据，而且你可以把它关闭。',
    kicker: '隐私政策',
    h1: '你的鱼，是你的私事。',
    meta: (date: string) => `最后更新：${date}。本政策与 App 内“设置”中显示的政策相同。`,

    // The app's own policy, word for word from its Simplified Chinese strings; only the
    // tags are added.
    sections: [
      {
        title: "简而言之",
        html: "<p>Companions 不会收集、出售或共享任何个人信息。不需要创建账户，没有广告，也没有任何形式的跟踪，有关你鱼缸的所有信息都只保存在你的设备上。Companions 唯一会发送的，是用来了解 App 哪些部分被使用的匿名使用统计数据；你可以随时在“设置”中关闭。</p>",
      },
      {
        title: "Companions 存储的内容",
        html: "<p>Companions 保存的只有鱼缸本身：</p>\n<ul>\n<li>鱼缸里的鱼，以及每条鱼的种类</li>\n<li>你给每条鱼起的名字</li>\n<li>每条鱼的随机标识符，以便 App 区分同一种类的两条鱼</li>\n</ul>\n<p>名字会按你输入的原样保存。如果你用朋友或家人的名字给鱼命名，这个名字也和其他所有数据一样只保存在你的设备上，不会保存在其他任何地方。</p>",
      },
      {
        title: "存储位置",
        html: "<p>你的鱼缸保存在你的设备上，位于 Companions App 与其主屏幕小组件共用的存储区域中，这样小组件才能显示你的鱼。Companions 绝不会把这些数据上传到任何地方。</p>\n<p>如果你使用 iCloud 云备份或通过电脑备份设备，Apple 的备份可能会将 Companions 的数据连同你其他 App 的数据一起包含在内。这些备份由你在 iOS 设置中自行管理，并受 Apple 隐私政策而非本政策的约束。</p>",
      },
      {
        title: "小组件",
        html: "<p>Companions 小组件会在主屏幕或锁定屏幕上显示你鱼缸里的鱼。和所有小组件一样，任何能看到你屏幕的人都能看到它。如果你使用“旁白”，小组件还会读出鱼的名字。小组件只会从设备上的共享存储中读取鱼缸数据，不会向任何地方发送任何内容。</p>",
      },
      {
        title: "使用统计",
        html: "<p>为了解 Companions 的哪些部分被使用，App 会向 Google 运营的服务 Google Analytics for Firebase 发送匿名使用统计数据。这些数据包括打开 App、显示某个屏幕、添加一条鱼、选择鱼缸样式或解锁套装等事件，以及一些一般信息：设备型号、iOS 版本和语言、App 版本，还有根据你的互联网连接推算出的国家和地区（连接地址不会被保存）。每次安装 App 都会分配一个随机标识符，以便把重复使用计为同一个人；它不会与你本人、你的 Apple 账户或你的鱼及其名字关联，Companions 也不会使用广告标识符或请求跟踪许可。</p>\n<p>你可以随时通过“设置”中的“共享使用数据”开关关闭此功能，之后不会再发送任何内容。Google 如何处理这些统计数据，请参阅 <a href=\"https://policies.google.com/privacy\" rel=\"noopener\">policies.google.com/privacy</a> 上的 Google 隐私权政策。</p>",
      },
      {
        title: "权限",
        html: "<p>Companions 会请求三项系统权限，每项都只在你第一次选择需要它的功能时请求；不授予任何权限，App 也能正常使用。</p>\n<ul>\n<li><strong>将照片添加到照片图库：</strong>你第一次将鱼缸的二维码存储到“照片”时，iOS 会请求这项权限。它只允许 App 添加图片，无法查看你已有的照片。</li>\n<li><strong>从“健康”读取步数：</strong>你第一次选择“步数目标”复杂功能时，iOS 会请求这项权限。App 只读取今天的步数，用于在鱼缸中显示，绝不会向“健康”写入数据。步数和你设定的目标只保存在设备的共享储存空间中，以便小组件显示，不会保存到其他任何地方。</li>\n<li><strong>使用 App 期间的位置：</strong>你选择“月相”或“天气”复杂功能后，在“设置”中轻点“定位”时，iOS 会请求这项权限。App 用它来判断月亮在你所在地的朝向（只记住南北半球），并从 Apple 天气服务获取你所在地的天气；该服务只会收到用于预报的大致位置。Companions 不会存储你的位置，也不会将它发送到其他任何地方。</li>\n</ul>\n<p>Companions 不会访问你的相机、麦克风、通讯录、日历或通知，也不会请求权限来跟踪你在其他 App 和网站上的活动。</p>",
      },
      {
        title: "第三方服务",
        html: "<p>除上文所述的 Google Analytics for Firebase 之外，Companions 不包含任何第三方软件开发工具包 (SDK)：没有崩溃报告，也没有广告。</p>\n<p>App 的下载与更新、你购买的套装，以及你选择留下的评分或评论，均由 App Store 处理。Companions 从不会看到你的付款信息。这些操作均受 Apple 隐私政策约束。</p>",
      },
      {
        title: "你主动分享的内容",
        html: "<p>“设置”中有几个按钮会跳转到其他 App，而且只有在你轻点它们时才会跳转：</p>\n<ul>\n<li><strong>“电子邮件”</strong>会打开你的邮件 App，并新建一封写给我的邮件。你写的所有内容都由你的邮件服务商发送，我只会收到你发出的内容。</li>\n<li><strong>“分享 Companions”</strong>会打开 iOS 共享表单，其中包含 App 的链接。Companions 不会知道你分享给了谁。</li>\n<li><strong>“为 Companions 评分”</strong>会请求 Apple 显示评分弹窗。评分由 Apple 处理，Companions 不会收到你的评分。</li>\n<li>主页面菜单中的<strong>“分享这个鱼缸”</strong>会生成一个只包含鱼缸的水和装饰的代码，不含任何关于你或你的鱼的信息，并打开共享表单供你发送。</li>\n</ul>",
      },
      {
        title: "你的控制权",
        html: "<p>你的鱼缸完全由你掌控：</p>\n<ul>\n<li>随时可以在鱼缸下方的托盘中重命名或移除任何一条鱼</li>\n<li>移除一条鱼会将它从你的设备上删除</li>\n<li>通过“设置”中的“共享使用数据”开关关闭使用统计</li>\n<li>删除 Companions App 后，鱼缸以及 App 存储在你设备上的其他所有数据都会被删除（之前创建的设备备份在被替换之前可能仍保留一份副本）</li>\n</ul>",
      },
      {
        title: "儿童",
        html: "<p>Companions 不会收集任何人的个人信息，无论年龄大小。上文所述的使用统计数据是匿名的，绝不会包含名字、在 App 中输入的内容，或任何可用于识别儿童或其他任何人的信息。</p>",
      },
    ],

    website: {
      title: '本网站',
      countedHtml: (githubUrl: string, googleUrl: string) =>
        `<p>本网站是一组托管在 GitHub Pages 上的静态页面；字体和图片都由本网站自己提供。GitHub 如何处理网页服务器日志，请参阅 <a href="${githubUrl}" rel="noopener">GitHub 隐私声明</a>。</p>
<p>为了解有多少人访问、访客从哪里来，以及哪些页面和按钮被使用，本网站使用了 Google 运营的服务 Google Analytics。它会记录你在本网站打开的页面、点击的链接和按钮、你来自哪个网站，以及一些一般信息：你的浏览器、设备类型和语言，还有根据你的互联网连接推算出的国家和城市（连接地址不会被保存）。为了把重复访问计为同一位访客，它会用你浏览器中的两个 Cookie 保存一个随机标识符，最长两年：一个名为 <code>_ga</code>，另一个的名称以 <code>_ga_</code> 开头。这个标识符不会与你的姓名、App 或你的鱼关联，以上信息也都不会用于广告。</p>
<p>如果你浏览器的时钟设置为欧洲的某个时区，本网站会先征求你的同意；除非你允许，否则不会从 Google 加载任何内容。如果你的浏览器发送了“全球隐私控制”（Global Privacy Control）或“请勿跟踪”（Do Not Track）信号，统计也会保持关闭，并且不会询问你。无论你身在何处，都可以随时在这里改变主意；关闭统计时，这些 Cookie 也会一并删除。Google 如何处理这些统计数据，请参阅 <a href="${googleUrl}" rel="noopener">policies.google.com/privacy</a> 上的 Google 隐私权政策。</p>`,
      uncountedHtml: (githubUrl: string) =>
        `<p>本网站是一组托管在 GitHub Pages 上的静态页面。它不设置 Cookie，不运行任何统计分析，也不嵌入任何第三方内容；字体和图片都由本网站自己提供。GitHub 如何处理网页服务器日志，请参阅 <a href="${githubUrl}" rel="noopener">GitHub 隐私声明</a>。</p>`,
      statisticsHtml: (state: string) => `本浏览器中的网站统计${state}。`,
      on: '已开启',
      off: '已关闭',
      turnOn: '开启',
      turnOff: '关闭',
      updated: (date: string) => `本节仅涉及本网站，最后更新于 ${date}。`,
    },

    changes: {
      title: "本政策的变更",
      html: "<p>如果 Companions 处理数据的方式发生变化，本政策会在 App 内更新，顶部的日期也会随之修改。当前版本随时可在“设置”中查看。</p>",
    },
    contact: {
      title: "联系方式",
      html: (email: string) =>
        "<p>如果你对本政策或 Companions 如何处理你的数据有任何疑问，请发送电子邮件至 " + email + "，或使用“设置”中的“电子邮件”按钮。</p>",
    },
  },

  consent: {
    label: '网站统计',
    html: (privacyUrl: string) =>
      `<strong>可以统计你的这次访问吗？</strong>本网站会使用 Google Analytics（它会设置 Cookie）来了解哪些页面和按钮被使用，绝不用于广告。<a href="${privacyUrl}">了解详情</a>`,
    no: '不用了',
    allow: '允许',
  },

  notFound: {
    title: '找不到页面',
    description: '这个页面游走了。去帮助页面或首页看看吧。',
    h1: '这个页面游走了。',
    lead: '这个地址什么都没有。不过放心，鱼都好好的。',
    home: '回到首页',
    help: '帮助与常见问题',
  },
};

export default dictionary;
