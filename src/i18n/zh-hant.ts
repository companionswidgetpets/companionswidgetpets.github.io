import type { Dictionary } from './en.ts';

const dictionary: Dictionary = {
  format: {
    listSeparator: '、',
  },

  app: {
    name: 'Companions - Widget Pets',
    tagline: '住在你主畫面上的小小魚缸。',
    subtitle: '你的魚就在小工具裡，整天游來游去。',
    oneLiner:
      'Companions 是一款免費的 iPhone App，把一個會動的小魚缸放進主畫面小工具：挑好你的魚、幫牠們取名字，每次拿起手機，都能看到牠們游來游去。',
    madeIn: '韓國',
  },

  og: {
    titleHtml: '小小的魚缸，就住在你的主畫面上。',
    text: '你的魚就在小工具裡，整天游來游去。',
    facts: 'App Store 免費下載 · iPhone、iPad、Mac 和 Apple Watch',
    imageAlt: (appName: string, tagline: string) => `${appName}：${tagline}`,
  },

  ld: {
    jobTitle: '獨立 App 開發者',
    alternateNames: ['Companions 魚缸小工具', 'Companions 養魚小工具', 'Companions 桌面魚缸小工具', 'Companions 療癒魚缸'],
    offer: '免費下載，內含基本魚種和淡水魚套組；更多魚可透過單次購買的套組，或解鎖「全部魚種」取得。',
    features: (c: { species: number; packs: number; props: number }) => [
      '會動的魚缸主畫面小工具，有小型、中型、大型三種尺寸',
      `${c.species} 種魚、${c.packs} 個套組，每個魚缸最多可養五隻魚`,
      `八種魚缸樣式，還有 ${c.props} 種裝飾任你擺放`,
      '複雜功能：在魚缸一角顯示時間、日期、天氣、步數目標或月相',
      '支援待機模式、Apple Watch 和 Mac（透過 iPhone 小工具）',
      '用代碼或圖片和朋友分享魚缸',
      '免帳號、無廣告、不追蹤',
    ],
  },

  common: {
    skipToContent: '跳至主要內容',
    breadcrumb: '導覽路徑',
    updated: (date: string) => `更新於 ${date}`,
  },

  nav: {
    site: '網站',
    homeLabel: 'Companions 首頁',
    menu: '選單',
    help: '說明',
    blog: '部落格',
    fish: '魚種',
    styles: '樣式',
    whatsNew: '新功能',
    support: '支援',
    press: '媒體資料',
    download: '下載 App',
    get: '下載',
  },

  footer: {
    facts: (os: string) => `免費 · 需要 ${os} 或以上版本 · iPhone、iPad、Mac 和 Apple Watch`,
    columnSite: 'Companions',
    columnAbout: '關於',
    home: '首頁',
    help: '說明與常見問題',
    blog: '部落格',
    packs: '魚種與套組',
    styles: '魚缸樣式',
    whatsNew: '新功能',
    press: '媒體資料',
    support: '支援',
    privacy: '隱私權政策',
    email: '寫信給我們',
    madeWith: '在韓國用 ♡ 打造',
    legal: (year: number, owner: string) =>
      `© ${year} ${owner}。Apple、Apple 標誌、iPhone、iPad、Mac、Apple Watch 和 App Store 是 Apple Inc. 的商標。`,
    language: '語言',
  },

  badge: {
    label: '在 App Store 下載 Companions',
    alt: '在 App Store 下載',
  },

  tank: {
    label: (size: 'small' | 'medium' | 'large' | 'watch', style: string, count: number) => {
      const where = { small: '小型', medium: '中型', large: '大型', watch: 'Apple Watch 上的' }[size];
      return `${where}「${style}」魚缸，${count > 0 ? `裡面有 ${count} 隻魚` : '裡面還沒有魚'}`;
    },
    namedFish: (name: string, species: string) => `名叫「${name}」的${species}`,
  },

  hero: {
    label: '簡介',
    titleHtml: '小小的魚缸，<br />就住在你的主畫面上。',
    tankLabel: 'Companions 小工具：小丑魚、神像魚、藍倒吊和海馬，在蕨類與海綿之間游來游去',
    phoneAlt: 'iPhone 主畫面，左上角是 Companions 魚缸小工具',
    scroll: '往下滑',
  },

  home: {
    title: (appName: string) => `${appName}：iPhone 主畫面上的魚缸小工具`,
    description: (species: number) =>
      `Companions 是免費的 iPhone 魚缸小工具：從 ${species} 種魚中挑選、幫牠們取名字，看牠們在主畫面、待機模式、Mac 和 Apple Watch 上游來游去。不用餵食、不用換水，也沒有罪惡感。`,

    places: {
      kicker: '隨時看得到',
      title: '住在你最常看的地方。',
      lead: '小工具只要加一次，之後每次瞄一眼手機，你的魚都在那裡。同樣的魚、同樣的水，不必打開 App。',
      homeScreen: {
        title: '主畫面',
        text: '小型、中型、大型都有，八種樣式任你選。可以只放一個魚缸，也能擺上一整排，而且每種尺寸都能養不同的魚。',
      },
      standby: {
        title: '待機模式',
        text: '充電時把 iPhone 橫向擺好，魚缸就會待在時鐘旁邊，陪你一整晚。',
        date: '1 週二',
      },
      watch: {
        title: 'Apple Watch',
        text: 'Companions 的 Apple Watch App 會同步 iPhone 上的小型魚缸，把它帶到你的手腕上。手錶有自己的時鐘，所以這個魚缸裡就只有魚。',
      },
      ipad: {
        title: 'iPad',
        text: 'iPad 版是完整、獨立的 Companions App。在大螢幕上打造你的魚缸，再把小工具加到主畫面，完全不需要 iPhone。',
      },
      mac: {
        title: 'Mac',
        text: '透過接續互通把 iPhone 小工具帶到 Mac 桌面，或直接從 Mac App 加入。在一個個視窗之間，你的魚一直陪著你。',
      },
    },

    fish: {
      kicker: (species: number, packs: number) => `${species} 種魚，${packs} 個套組`,
      title: '來認識這些魚。',
      lead: '每個魚缸一開始就有熱帶魚、沙丁魚和河豚，淡水魚套組也免費送你。其他的魚收錄在各個套組裡，買一次就永久擁有，也可以用「全部魚種」一次全部解鎖。每隻魚都有自己的游法和步調，偶爾還會吐個小泡泡。',
      more: '所有魚種和套組',
    },

    customize: {
      kicker: '專屬於你',
      title: '你的魚缸，你作主。',
      lead: '八種水色，19 種裝飾隨你擺，角落放點實用資訊，再配上一個相襯的 App 圖像。',
      props: {
        kicker: (count: number) => `${count} 種裝飾`,
        title: '布置缸底',
        text: '蕨類、珊瑚、貝殼、鳳梨屋、摩艾屋。拖到你想放的位置，調整大小、翻轉、還原都可以。想存幾個魚缸就存幾個，隨時切換。',
      },
      complications: {
        kicker: '複雜功能',
        title: '角落的實用小資訊',
        text: '時間、日期、今天的天氣、你的步數目標，或今晚的月亮，以白色呈現在水中。解鎖「全部魚種」即可使用。',
      },
      icons: {
        kicker: '六款 App 圖像',
        title: '連圖像都能搭',
        names: { minimal: '極簡', twilight: '暮色', pond: '池塘', reed: '蘆葦', blossom: '櫻花', dark: '深色' },
        text: (names: string) => `${names}：到「設定」挑一款最適合你主畫面的。`,
      },
    },

    calm: {
      kicker: '最好養的寵物',
      title: '不用餵食，不用換水，零罪惡感。',
      lead: '就是幾隻色彩繽紛、一直都在的小夥伴。',
      cards: [
        {
          title: '牠們永遠不會死',
          text: '離開一週、一個月，甚至一年都沒關係。回來時，你的魚還是和你離開時一模一樣，悠游自在。',
        },
        {
          title: '免帳號，無廣告',
          text: '不用註冊，不會追蹤你，也不必花錢才能繼續玩。你的魚缸只留在你的裝置上。',
        },
        {
          title: '想餵就餵',
          text: '點一下刀叉，撒一小撮飼料到水裡，看牠們追著飼料游。不想餵也沒關係，誰都不會介意。',
        },
        {
          title: '牠們會打招呼',
          text: '有些早上，打開 App 時會有魚跟你打招呼。點一下玻璃，就會冒出一串泡泡。想用誰的名字幫牠們取名都可以。',
        },
      ],
    },

    questions: {
      kicker: '常見問題',
      title: '你大概想問這些。',
      readFull: '看完整回答',
      all: '所有問題與解答',
      readMore: '了解更多',
    },

    blog: {
      kicker: '部落格精選',
      title: '讓主畫面更好玩的小點子。',
      all: '逛逛部落格',
    },
  },

  sizes: {
    kicker: '三種尺寸，八種水色',
    title: '同一個魚缸，大小隨你選。',
    lead: '小工具有小型、中型、大型三種尺寸，每種尺寸都有自己的一組魚。選一種樣式，所有魚缸都會跟著換。',
    pickerLabel: '魚缸樣式',
    large: '大型',
    medium: '中型',
    small: '小型',
    captionHtml: (style: string) =>
      `這是${style}魚缸的三種尺寸。樣式只要換一次，主畫面上的每個小工具都會跟著變。`,
  },

  packGrid: {
    comesWithApp: 'App 內建',
    pack: '套組',
  },

  styleRow: {
    label: (style: string) => `「${style}」魚缸樣式`,
  },

  help: {
    title: '說明與常見問題',
    description:
      'Companions 魚缸小工具常見問題：如何把小工具加到主畫面、魚種與套組、魚缸樣式、複雜功能、待機模式、Apple Watch、Mac、購買與隱私。',
    kicker: '說明',
    h1: '常見問題，一次解答。',
    leadHtml: (email: string) =>
      `大家常問的 Companions 問題，全都整理在這裡。找不到你想問的嗎？寫信到 ${email}，會有真人回覆你。`,
    categoriesLabel: '分類',
    categories: {
      'getting-started': '開始使用',
      widgets: '小工具',
      'fish-and-packs': '魚種與套組',
      'tanks-and-styles': '魚缸、樣式與裝飾',
      complications: '複雜功能',
      'other-devices': '待機模式、Apple Watch、Mac 與 iPad',
      'privacy-and-purchases': '購買與隱私',
      troubleshooting: '看起來不太對勁時',
    },
    fullAnswer: '完整解答',
    related: '相關內容',
    kindQuestion: '問題',
    kindArticle: '文章',
    kindPage: '頁面',
    stuckTitle: '還是搞不定？',
    stuckHtml: (email: string, helpUrl: string) =>
      `寫信到 ${email}，附上你的 iPhone 機型和 iOS 版本，我們會幫你解決。<a href="${helpUrl}">回到所有問題</a>。`,
  },

  blog: {
    title: '部落格：iPhone 小工具推薦、桌面美化靈感與教學',
    description:
      'iPhone 魚缸、電子寵物和可愛小工具 App 推薦，主畫面美化靈感、魚類小知識，還有一步步帶你上手的 Companions 魚缸小工具教學。',
    kicker: '部落格',
    h1: '讓主畫面更好玩的小點子。',
    lead: '值得一試的小工具和電子寵物 App、主畫面美化靈感、魚類小知識，還有一步步的教學。全都出自打造 Companions 的兩個人之手。',
    topicsLabel: '主題',
    categories: {
      'app-picks': {
        name: 'App 推薦',
        lead: '值得在 iPhone 上留個位置的小工具、電子寵物和療癒系 App。',
      },
      'home-screen': {
        name: '主畫面美化',
        lead: '配色、排版和小工具，讓每次解鎖都開心一點。',
      },
      fish: {
        name: '魚與魚缸',
        lead: '魚類小知識、取名靈感，還有可以動手打造的主題魚缸。',
      },
      guides: {
        name: 'Companions 教學',
        lead: '一步步帶你了解小工具、待機模式、Apple Watch、Mac 和 App 裡的一切。',
      },
      troubleshooting: {
        name: '疑難排解',
        lead: '小工具不聽話時，照順序檢查這些地方。',
      },
    },
    by: (author: string) => `文／${author}`,
    readingTime: (minutes: number) => `閱讀約 ${minutes} 分鐘`,
    onThisPage: '本文目錄',
    more: '延伸閱讀',
    cta: (species: number) =>
      `從 ${species} 種手繪的魚裡挑出你的魚、幫牠們取名字，就能看牠們整天在小工具裡游來游去。免費下載就有八種魚、所有魚缸樣式和全部三種小工具尺寸。`,
    feedTitle: 'Companions 部落格',
    feed: 'RSS 訂閱',
  },

  packs: {
    title: '所有魚種與套組一覽',
    description: (species: number, free: number) =>
      `Companions 魚缸小工具的 ${species} 種魚，依套組一次看：哪 ${free} 種免費、每個套組有哪些魚，以及單次購買的套組和「全部魚種」怎麼運作。`,
    kicker: (species: number, packs: number) => `${species} 種魚 · ${packs} 個套組`,
    h1: '每一種魚，每一個套組。',
    lead: (free: number) =>
      `Companions 免費附贈 ${free} 種魚：每個魚缸一開始就有的三種，加上淡水魚套組的五種。其他套組在 App 內買一次就永久擁有。「全部魚種」會一次解鎖所有套組，包括日後推出的新套組，魚缸的複雜功能也一併解鎖。`,
    listName: 'Companions 魚種套組',
    howTitle: '套組如何運作',
    howHtml: [
      '套組透過 App Store 單次購買，以你當地的貨幣計價。在 iPhone 上買過，只要使用同一個 Apple 帳號，在 iPad 上也能使用；換了新裝置，到「設定」點一下「回復購買項目」就能找回來。套組沒有期限，魚缸裡的東西也永遠不會被收回。',
      '<strong>全部魚種</strong>有兩種方案：單次購買、永久解鎖，或是需要多久就訂多久的月費方案。不論哪一種，都會解鎖所有套組、日後新增的每個套組，以及複雜功能（魚缸角落的時間、日期、天氣、步數和月亮）。月費方案到期沒有續訂的話，已經加入的魚會繼續游；只是要從那些套組加入新的魚，得等續訂之後。',
      '價格會以你當地的貨幣，顯示在 App 的「設定」中。',
    ],
  },

  pack: {
    title: (pack: string, fish: string) => `${pack}：${fish}`,
    description: (c: { tagline: string; pack: string; count: number; fish: string; free: boolean }) =>
      `${c.tagline}Companions 魚缸小工具的「${c.pack}」共有 ${c.count} 種魚：${c.fish}。${c.free ? '隨 App 免費附贈。' : '可在 App 內單次購買，也包含在「全部魚種」中。'}`,
    kickerFree: 'App 內建',
    kickerPaid: '魚種套組',
    tankLabel: (style: string, pack: string, fish: string) => `「${style}」魚缸裡的${pack}：${fish}`,
    tankCaption: (pack: string, style: string) => `${pack}，放在中型小工具的「${style}」魚缸裡。`,
    fishAlt: (fish: string) => `Companions 中的${fish}插圖`,
    fishText: (fish: string, swim: 'swimmer' | 'floater' | 'creeper' | 'crawler', scale: number) => {
      const how = {
        swimmer: '在中層水域游動，輕快地滑行，身體帶著一點上下起伏',
        floater: '與其說是游，不如說是漂：魚會待的地方，牠都可能停在那裡，慢慢漂動',
        creeper: '待在缸底一點一點地挪動，慢到幾乎看不出在動，身體還會朝前進的方向微微傾斜',
        crawler: '在缸底快步爬行，腳一動，身體就跟著微微上下晃',
      }[swim];
      const size =
        scale > 1
          ? `體型畫得比標準的魚大 ${Math.round((scale - 1) * 100)}%。`
          : scale < 1
            ? '體型畫得比標準的魚稍小一些。'
            : '';
      return `${fish}${how}。${size}`;
    },
    howTitle: '如何加入這些魚',
    step1Html: '打開 Companions，點一下魚缸下方托盤尾端的 <strong>+</strong>。',
    step2Html: (pack: string) => `在列表中找到<strong>${pack}</strong>，點一下其中一隻魚。`,
    step3FreeHtml: '牠會「撲通」一聲掉進水裡。幫牠取個名字，或保留原本的名字。',
    step3PaidHtml:
      '如果套組還沒解鎖，點一下<strong>解鎖</strong>，單次購買這個套組，或購買「全部魚種」解鎖所有套組。接著魚就會「撲通」一聲掉進水裡。幫牠取個名字，或保留原本的名字。',
    after: '一個魚缸可以養五隻魚，而且每種小工具尺寸都有自己的一組魚，所以小型、中型、大型魚缸可以各養各的。',
    namesTitle: '其他語言的名稱',
    namesIntro: (languages: number) => `Companions 已翻譯成 ${languages} 種語言。以下是 App 中這些魚在各語言的名稱：`,
    languageHeader: '語言',
    others: '其他套組',
  },

  styles: {
    title: '八種魚缸樣式一覽',
    description: (styles: string) =>
      `Companions 魚缸小工具的所有水色：${styles}。看看每種樣式長什麼樣子、適合哪些魚，以及如何更換魚缸樣式。`,
    kicker: (count: number) => `${count} 種樣式`,
    h1: '一樣的玻璃，不一樣的水。',
    lead: '樣式決定水和缸底的顏色；玻璃、缸緣和反光都不會變，所以小型、中型、大型魚缸看起來就是同一個魚缸，只是變大了。在「編輯魚缸」頁面更換魚缸的樣式，所有顯示這個魚缸的小工具都會跟著改變。',
    tankLabel: (style: string) => `「${style}」魚缸樣式，中型小工具`,
    counter: (index: number, count: number) => `第 ${index} 種樣式，共 ${count} 種`,
    blurbs: {
      minimal:
        'App 推出時就有的藍色魚缸：上層是較淺的蔚藍，到中段轉為明亮的天藍，底下是一片白色薄霧。明亮、乾淨，大多數的魚放在這裡都最好看。',
      deepOcean:
        '上層透光處是藍寶石色，往下經過海軍藍，到底部變成幾乎全黑的靛藍。水母在這裡彷彿會發光，珊瑚礁魚則格外搶眼。',
      pond: '水面是陽光照耀下的綠，往下加深成葉綠色，接近溫暖的沙底時帶上一點橄欖綠。最適合錦鯉、鱒魚和池塘生物。',
      reed: '偏藍綠的冷調綠色，在色溫上和「極簡」最接近，底下是柔和的淺褐色缸底。在兩者之間切換，感覺像是光線變了，而不是換了一個魚缸。',
      blossom:
        '水面是淡淡的櫻花粉，往下漸漸轉為柔和的玫瑰粉，底下是和「極簡」一樣的白色薄霧。粉色刻意偏冷，讓橘色和紅色的魚依然鮮明。',
      dark: '在主畫面上能多黑就多黑，專為全黑配置打造：水面是中性的炭灰，往下沉到缸底下方的純黑，玻璃反光也調暗了，安安靜靜地待在深色圖像之間。',
      pumpkin:
        '水面是柔和的南瓜橘，往下漸漸轉為更深的橘色，底下是一片白色薄霧。刻意不偏黃，讓金魚和黃金錦鯉依然顯眼。',
      lavender:
        '把「極簡」和「櫻花」的色相轉到薰衣草花的顏色：以這麼淺的色調來說，已經是最鮮豔的薰衣草紫，底下一樣是白色薄霧。適合七彩神仙和雷達魚。',
    },
    howTitle: '如何更換魚缸樣式',
    stepsHtml: [
      '打開 Companions，點一下頁面頂端的 <strong>⋯</strong> 按鈕，再點<strong>編輯這個魚缸</strong>。',
      '打開「編輯魚缸」頁面頂端的樣式選單，挑一種水色。手指一點，魚缸就跟著變。',
      '點一下<strong>關閉</strong>。魚缸會自動儲存，主畫面上的小工具也會跟著更新。',
    ],
    after:
      '樣式屬於每個魚缸，而不是整個 App：在「我的魚缸」頁面，你可以同時擁有「櫻花」小型魚缸和「深色」大型魚缸，並切換小工具要顯示哪一個。',
  },

  whatsNew: {
    title: '新功能與更新紀錄',
    description: (version: string, date: string) =>
      `Companions 魚缸小工具 App 的更新紀錄，逐一列出每個版本的新功能。目前最新版本為 ${version}，於 ${date}推出。`,
    kicker: '新功能',
    h1: '每個版本，依序排好。',
    lead: (version: string, date: string) =>
      `目前最新版本是 Companions ${version}，於 ${date}推出。更新會透過 App Store 提供。`,
    heading: (version: string, title: string) => `${version}：${title}`,
    entryTitle: (version: string, title: string) => `Companions ${version}：${title}`,
    versionKicker: (version: string) => `版本 ${version}`,
    all: '所有版本',
  },

  support: {
    title: '客服支援',
    description: (email: string) =>
      `Companions 魚缸小工具的客服支援：常見問題的解決方法，以及如何透過 ${email} 聯絡開發者。`,
    kicker: '支援',
    h1: '有問題，我們幫你搞定。',
    leadHtml: (email: string) =>
      `Companions 由兩個人打造，每一封信都由我們其中一人親自回覆。寫信到 ${email}，或使用 App「設定」中的「電子郵件」按鈕，它會自動幫你填好相關資訊。`,
    contactName: 'Companions 客服',
    beforeTitle: '寫信之前',
    beforeHtml: (helpUrl: string) => `大部分的問題，在<a href="${helpUrl}">說明頁面</a>上都找得到答案。最常被問到的有這些：`,
    includeTitle: '信中請附上',
    include: [
      '你的 iPhone 機型和 iOS 版本（設定 › 一般 › 關於本機）。',
      'Companions 的版本，顯示在 App「設定」的最下方。',
      '你原本預期的結果，以及實際發生的狀況。附上截圖或螢幕錄影會非常有幫助。',
    ],
    purchasesTitle: '購買與退款',
    purchasesHtml: (reportUrl: string) =>
      `套組和「全部魚種」都是由 Apple 透過 App Store 販售，所以退款也要透過 Apple 辦理：前往 <a href="${reportUrl}" rel="noopener">reportaproblem.apple.com</a>，登入後選擇該筆購買項目。如果你買過的套組顯示為鎖定，請打開 App 的「設定」，點一下<strong>回復購買項目</strong>；並確認你登入的是當初購買時使用的 Apple 帳號。`,
    privacyTitle: '隱私權',
    privacyHtml: (privacyUrl: string) =>
      `Companions 會把你的魚缸留在你的裝置上，不會收集任何個人資料。詳細內容請參閱<a href="${privacyUrl}">隱私權政策</a>。`,
    wishTitle: '有什麼想看到的嗎？',
    wish: '一種魚、一個裝飾、一種樣式，或是小工具該出現的新地方：都歡迎告訴我們。很多套組一開始都只是一封來信。',
  },

  press: {
    title: '媒體資料',
    description:
      'Companions 是 iPhone 主畫面上的魚缸小工具。這裡有基本資料、介紹文字、App 圖像和螢幕截圖，歡迎撰寫報導或介紹時使用。',
    kicker: '媒體資料',
    h1: '要介紹 Companions 嗎？',
    leadHtml: (email: string) =>
      `這裡的所有內容都可以引用，圖片也可以在報導或介紹本 App 時自由使用。其他需求請寫信到 ${email}。`,
    sentenceTitle: '一句話介紹',
    paragraphTitle: '一段話介紹',
    paragraph: (c: { species: number; props: number; languages: number; developer: string }) =>
      `Companions 是一款免費的 iPhone App，把一個小魚缸放進主畫面小工具裡。你可以從 ${c.species} 種手繪魚種中挑選、幫每隻魚取名字，每次解鎖手機，牠們都會用自己的方式和步調游來游去：在小工具裡、在手機充電時的待機模式中、在 Mac 桌面上，也在 Apple Watch 上。不需要餵食，也不會死掉；想餵的話，餵魚就是一個可以玩的小遊戲。魚缸有八種水色樣式，還有 ${c.props} 種裝飾可以擺放，角落也能顯示時間、日期、天氣、步數目標或月亮。App 內建八種魚，其他的魚收錄在單次購買的套組裡，也可以透過「全部魚種」一次全部取得。Companions 不需要帳號、沒有廣告，也不追蹤，並提供 ${c.languages} 種語言。由 ${c.developer} 和 Shea 在韓國打造。`,
    factsTitle: '基本資料',
    facts: {
      name: '名稱',
      what: '簡介',
      whatValue: 'iPhone App 和主畫面小工具：一個會動的魚缸，放進你挑的魚，整天都能看牠們游',
      price: '價格',
      priceValue: '免費。魚種套組為單次 App 內購買項目；「全部魚種」可永久買斷或以月費方案解鎖全部內容',
      platforms: '平台',
      platformsValue: (os: string) => `iPhone 和 iPad（${os} 或以上版本）、Apple Watch App、Mac（透過 Mac 上的 iPhone 小工具）`,
      fish: '魚種',
      fishValue: (species: number, packs: number) => `${species} 種魚，分為 ${packs} 個套組；其中八種隨 App 附贈`,
      styles: '魚缸樣式',
      props: '裝飾',
      propsValue: (count: number) => `${count} 種裝飾，可擺放在缸底`,
      complications: '複雜功能',
      complicationsValue: '時間、日期、天氣、步數目標和月相，顯示在魚缸一角',
      languages: '語言',
      firstReleased: '首次推出',
      currentVersion: '目前版本',
      currentVersionValue: (version: string, date: string) => `${version}（${date}）`,
      developer: '開發者',
      developerValue: (developer: string) => `${developer}（設計與程式）、Shea（美術），韓國`,
      appStore: 'App Store',
      contact: '聯絡方式',
    },
    iconTitle: 'App 圖像',
    iconText: '1024 像素的 App Store 圖像。請勿更改顏色，也不要裁成其他形狀。',
    iconAlt: 'Companions 的 App 圖像：淡藍色水中的一條金魚尾巴',
    screenshotsTitle: '螢幕截圖',
    screenshotsText: 'App Store 上的螢幕截圖，依序排列。點一下即可開啟原尺寸檔案。',
    screenshotAlt: (index: number) => `Companions 的 App Store 螢幕截圖（第 ${index} 張）`,
    downloadTitle: '下載',
  },

  privacy: {
    title: '隱私權政策',
    description:
      'Companions 不會收集、販售或分享任何個人資料。你的魚缸只留在你的裝置上；唯一會送出的只有匿名使用統計，而且你可以把它關閉。',
    kicker: '隱私權政策',
    h1: '你的魚，只屬於你。',
    meta: (date: string) => `最後更新：${date}。這份政策和 App「設定」中顯示的內容相同。`,

    sections: [
      {
        title: "簡單來說",
        html: "<p>Companions 不會收集、販售或分享任何個人資料。不需要建立帳號，沒有廣告，也沒有任何形式的追蹤，App 所知道的關於你魚缸的一切都只留在你的裝置上。Companions 唯一會送出的，是讓我了解 App 哪些部分有人使用的匿名使用統計；你可以隨時在「設定」中關閉。</p>",
      },
      {
        title: "Companions 儲存的內容",
        html: "<p>Companions 儲存的只有魚缸本身：</p>\n<ul>\n<li>魚缸裡的魚，以及每一隻的種類</li>\n<li>你為每一隻魚取的名字</li>\n<li>每一隻魚的隨機識別碼，讓 App 能分辨同一種類的兩隻魚</li>\n</ul>\n<p>名字會按照你輸入的樣子儲存。如果你用朋友或家人的名字為魚命名，這個名字也和其他所有資料一樣只會留在你的裝置上，不會存放在其他任何地方。</p>",
      },
      {
        title: "儲存位置",
        html: "<p>你的魚缸儲存在你的裝置上，位於 Companions App 和它的主畫面小工具共用的儲存空間中，這樣小工具才能顯示你的魚。Companions 絕不會把這些資料上傳到任何地方。</p>\n<p>如果你使用 iCloud 備份或透過電腦備份裝置，Apple 的備份可能會連同你其他 App 的資料一起包含 Companions 的資料。這些備份由你在 iOS 的「設定」中自行管理，並受 Apple 隱私權政策規範，而非本政策。</p>",
      },
      {
        title: "小工具",
        html: "<p>Companions 小工具會在主畫面或鎖定畫面上顯示你魚缸裡的魚。和所有小工具一樣，任何看得到你螢幕的人都看得到它。如果你使用「旁白」，小工具也會讀出魚的名字。小工具只會從裝置上的共用儲存空間讀取魚缸資料，不會把任何內容傳送到任何地方。</p>",
      },
      {
        title: "使用統計",
        html: "<p>為了了解大家使用 Companions 的哪些部分，App 會把匿名使用統計傳送到 Google 營運的服務 Google Analytics for Firebase。這些統計是像開啟 App、顯示某個畫面、加入一隻魚、選擇魚缸樣式或解鎖套組這類事件，再加上一些一般資訊：裝置型號、iOS 版本與語言、App 版本，以及依據你的網路連線推估的國家和地區（連線位址不會被儲存）。每次安裝 App 都會取得一個隨機識別碼，讓重複使用計為同一個人；這個識別碼不會和你本人、你的 Apple 帳號或你的魚及其名字連結，Companions 也不會使用廣告識別碼，或要求追蹤你的許可。</p>\n<p>你可以隨時用「設定」中的「分享使用資料」開關關閉這項功能，之後就不會再傳送任何內容。Google 如何處理這些統計資料，請參閱 <a href=\"https://policies.google.com/privacy\" rel=\"noopener\">policies.google.com/privacy</a> 上的 Google 隱私權政策。</p>",
      },
      {
        title: "權限",
        html: "<p>Companions 會要求三項系統權限，每項都只在你第一次選擇需要它的功能時要求；不授予任何權限，App 也能正常使用。</p>\n<ul>\n<li><strong>將照片加入照片圖庫：</strong>你第一次將魚缸的 QR Code 儲存到「照片」時，iOS 會要求這項權限。它只允許 App 加入圖片，無法查看你已有的照片。</li>\n<li><strong>從「健康」讀取步數：</strong>你第一次選擇「步數目標」複雜功能時，iOS 會要求這項權限。App 只讀取今天的步數，用於在魚缸中顯示，絕不會寫入「健康」。步數和你設定的目標只儲存在裝置的共享儲存空間中，以便小工具顯示，不會儲存到其他任何地方。</li>\n<li><strong>使用 App 期間的位置：</strong>你選擇「月相」或「天氣」複雜功能後，在「設定」中點一下「定位」時，iOS 會要求這項權限。App 用它來判斷月亮在你所在地的朝向（只記住南北半球），並從 Apple 天氣服務取得你所在地的天氣；該服務只會收到用於預報的大致位置。Companions 不會儲存你的位置，也不會將它傳送到其他任何地方。</li>\n</ul>\n<p>Companions 不會取用你的相機、麥克風、聯絡資訊、行事曆或通知，也不會要求追蹤你在其他 App 和網站上的活動。</p>",
      },
      {
        title: "第三方服務",
        html: "<p>除了上文所述的 Google Analytics for Firebase 之外，Companions 不含任何第三方軟體開發套件 (SDK)：沒有當機回報，也沒有廣告。</p>\n<p>App 的下載與更新、你購買的套組，以及你選擇留下的評分或評論，都由 App Store 處理。Companions 絕不會看到你的付款資料。這些互動都受 Apple 隱私權政策規範。</p>",
      },
      {
        title: "你選擇分享的內容",
        html: "<p>「設定」中有幾個按鈕會開啟其他 App，而且只有在你點一下時才會這麼做：</p>\n<ul>\n<li><strong>「電子郵件」</strong>會開啟你的郵件 App，並新增一封寄給我的郵件。你寫的內容都由你的電子郵件服務商寄出，我只會收到你寄出的內容。</li>\n<li><strong>「分享 Companions」</strong>會開啟 iOS 分享表單，其中包含 App 的連結。Companions 不會知道你分享給了誰。</li>\n<li><strong>「為 Companions 評分」</strong>會請 Apple 顯示評分提示。評分由 Apple 處理，Companions 不會收到。</li>\n<li>主頁面選單中的<strong>「分享這個魚缸」</strong>會產生一組只包含魚缸的水和裝飾的代碼，不含任何關於你或你的魚的資訊，並開啟分享表單讓你傳送。</li>\n</ul>",
      },
      {
        title: "由你掌控",
        html: "<p>你的魚缸完全由你掌控：</p>\n<ul>\n<li>隨時都可以在魚缸下方的托盤中重新命名或移除任何一隻魚</li>\n<li>移除一隻魚，就會把牠從你的裝置上刪除</li>\n<li>用「設定」中的「分享使用資料」開關關閉使用統計</li>\n<li>刪除 Companions App 後，魚缸以及 App 儲存在你裝置上的其他所有資料都會一併刪除（先前製作的裝置備份在被取代之前，可能仍保有一份副本）</li>\n</ul>",
      },
      {
        title: "兒童",
        html: "<p>Companions 不會向任何人收集個人資料，無論年齡大小。上文所述的使用統計是匿名的，絕不會包含名字、在 App 中輸入的內容，或任何可用來識別兒童或其他任何人的資訊。</p>",
      },
    ],

    website: {
      title: '本網站',
      countedHtml: (githubUrl: string, googleUrl: string) =>
        `<p>本網站是一組由 GitHub Pages 代管的靜態網頁；字型和圖片也都直接由本網站提供。GitHub 如何處理網頁伺服器記錄，請參閱 <a href="${githubUrl}" rel="noopener">GitHub 隱私權聲明</a>。</p>
<p>為了了解有多少人造訪、訪客從哪裡來，以及哪些頁面和按鈕有人使用，本網站使用 Google 營運的服務 Google Analytics。它會記錄你在本網站開啟的頁面、點按的連結和按鈕、把你帶來這裡的網站，以及一些一般資訊：你的瀏覽器、裝置類型和語言，以及依據你的網路連線推估的國家和城市（連線位址不會被儲存）。為了讓重複造訪計為同一位訪客，它會用你瀏覽器中的兩個 Cookie 保存一個隨機識別碼，最長保存兩年：一個是 <code>_ga</code>，另一個的名稱以 <code>_ga_</code> 開頭。這個識別碼不會和你的姓名、App 或你的魚連結，以上資料也都不會用於廣告。</p>
<p>如果你瀏覽器的時鐘設定為歐洲時區，本網站會先詢問你；除非你允許，否則不會從 Google 載入任何內容。如果你的瀏覽器送出 Global Privacy Control 或 Do Not Track（不追蹤）訊號，統計功能也會維持關閉，不會詢問。無論你在哪裡，都可以隨時在這裡改變主意；關閉統計功能時，Cookie 也會一併移除。Google 如何處理這些統計資料，請參閱 <a href="${googleUrl}" rel="noopener">policies.google.com/privacy</a> 上的 Google 隱私權政策。</p>`,
      uncountedHtml: (githubUrl: string) =>
        `<p>本網站是一組由 GitHub Pages 代管的靜態網頁。它不設定任何 Cookie、不執行任何分析工具，也不嵌入任何第三方內容；字型和圖片都直接由本網站提供。GitHub 如何處理網頁伺服器記錄，請參閱 <a href="${githubUrl}" rel="noopener">GitHub 隱私權聲明</a>。</p>`,
      statisticsHtml: (state: string) => `在這個瀏覽器中，網站統計${state}。`,
      on: '已開啟',
      off: '已關閉',
      turnOn: '開啟',
      turnOff: '關閉',
      updated: (date: string) => `本節僅說明本網站，最後更新於 ${date}。`,
    },

    changes: {
      title: "本政策的變更",
      html: "<p>如果 Companions 處理資料的方式有所改變，本政策會在 App 內更新，頂端的日期也會隨之修改。最新版本隨時都可以在「設定」中查看。</p>",
    },
    contact: {
      title: "聯絡方式",
      html: (email: string) =>
        "<p>如果你對本政策或 Companions 處理資料的方式有任何疑問，請寄電子郵件到 " + email + "，或使用「設定」中的「電子郵件」按鈕。</p>",
    },
  },

  consent: {
    label: '網站統計',
    html: (privacyUrl: string) =>
      `<strong>可以把你的造訪算進網站統計嗎？</strong>這會用到 Google Analytics（會設定 Cookie），用來了解哪些頁面和按鈕有人使用，絕不用於廣告。<a href="${privacyUrl}">了解運作方式</a>`,
    no: '不用了，謝謝',
    allow: '允許',
  },

  notFound: {
    title: '找不到頁面',
    description: '這一頁游走了。去說明頁面或首頁看看吧。',
    h1: '這一頁游走了。',
    lead: '這個網址什麼都沒有。不過別擔心，魚都好好的。',
    home: '回到首頁',
    help: '說明與常見問題',
  },
};

export default dictionary;
