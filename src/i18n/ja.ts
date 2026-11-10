import type { Dictionary } from './en.ts';

/**
 * 日本語。The shape is that of en.ts, entry for entry.
 *
 * App labels, fish, pack, prop and style names and the whole of the privacy policy
 * (`privacy.sections`, `changes`, `contact`) are the app's own Japanese, word for word.
 * Bold app labels sit inside 「」 (「<strong>…</strong>」); the term sheet for the help
 * pages and guides follows the same conventions.
 */
const dictionary: Dictionary = {
  format: {
    listSeparator: '、',
  },

  app: {
    name: 'Companions - Widget Pets',
    tagline: 'ホーム画面に、小さな水槽を。',
    subtitle: 'ウィジェットの中で、魚たちが一日じゅう泳いでいます。',
    oneLiner:
      'Companionsは、ホーム画面のウィジェットに魚が泳ぐ小さな水槽を置ける、無料のiPhoneアプリです。好きな魚を選んで名前をつければ、iPhoneを見るたびに泳ぐ姿を眺められます。',
    madeIn: '韓国',
  },

  og: {
    titleHtml: 'ホーム画面に、小さな水槽を。',
    text: 'ウィジェットの中で、魚たちが一日じゅう泳いでいます。',
    facts: 'App Storeで無料 · iPhone、iPad、Mac、Apple Watch対応',
    imageAlt: (appName: string, tagline: string) => `${appName}：${tagline}`,
  },

  ld: {
    jobTitle: '個人アプリ開発者',
    alternateNames: ['Companions 水槽ウィジェット', 'Companions アクアリウムウィジェット', 'Companions 魚ウィジェット'],
    offer:
      '無料でダウンロードでき、基本の魚と淡水魚パックが付いています。ほかの魚は、買い切りのパックか「すべての魚」のロック解除で増やせます。',
    features: (c: { species: number; packs: number; props: number }) => [
      'ホーム画面に置ける、魚が泳ぐ水槽ウィジェット（小・中・大）',
      `全${c.species}種類の魚（${c.packs}パック）、1つの水槽に5匹まで`,
      `8種類の水槽スタイルと、自由に並べられる${c.props}種類の飾り`,
      '時刻、日付、天気、歩数目標、月の満ち欠けを水槽の隅に表示するコンプリケーション',
      'スタンバイ、Apple Watch、Mac（iPhoneウィジェット）に対応',
      '水槽をコードや画像にして友達と共有',
      'アカウントなし、広告なし、トラッキングなし',
    ],
  },

  common: {
    skipToContent: '本文へスキップ',
    breadcrumb: 'パンくずリスト',
    updated: (date: string) => `${date}更新`,
  },

  nav: {
    site: 'サイト',
    homeLabel: 'Companionsのホーム',
    menu: 'メニュー',
    help: 'ヘルプ',
    blog: 'ブログ',
    fish: '魚たち',
    styles: 'スタイル',
    whatsNew: '新機能',
    support: 'サポート',
    press: 'プレスキット',
    download: 'アプリを入手',
    get: '入手',
  },

  footer: {
    facts: (os: string) => `無料 · ${os}以降 · iPhone、iPad、Mac、Apple Watch対応`,
    columnSite: 'Companions',
    columnAbout: 'アプリについて',
    home: 'ホーム',
    help: 'ヘルプとよくある質問',
    blog: 'ブログ',
    packs: '魚とパック',
    styles: '水槽のスタイル',
    whatsNew: '新機能',
    press: 'プレスキット',
    support: 'サポート',
    privacy: 'プライバシーポリシー',
    email: 'メールでお問い合わせ',
    madeWith: '韓国で♡を込めて作りました',
    legal: (year: number, owner: string) =>
      `© ${year} ${owner}。Apple、Appleのロゴ、iPhone、iPad、Mac、Apple Watch、App Storeは、Apple Inc.の商標です。`,
    language: '言語',
  },

  badge: {
    label: 'CompanionsをApp Storeからダウンロード',
    alt: 'App Storeからダウンロード',
  },

  tank: {
    label: (size: 'small' | 'medium' | 'large' | 'watch', style: string, count: number) => {
      const where = { small: '小', medium: '中', large: '大', watch: 'Apple Watch' }[size];
      return `魚が${count}匹いる、「${style}」スタイルの水槽（${where}）`;
    },
    namedFish: (name: string, species: string) => `${name}（${species}）`,
  },

  hero: {
    label: 'Companionsの紹介',
    titleHtml: 'ホーム画面に、<br />小さな水槽を。',
    tankLabel: 'Companionsのウィジェット：シダと海綿のあいだを、クマノミ、ツノダシ、南洋ハギ、竜の落し子が泳いでいます',
    phoneAlt: '左上にCompanionsの水槽ウィジェットを置いた、iPhoneのホーム画面',
    scroll: 'スクロール',
  },

  home: {
    title: (appName: string) => `${appName}｜iPhoneホーム画面の小さな水槽ウィジェット`,
    description: (species: number) =>
      `iPhoneのホーム画面で魚が泳ぐ、無料のアクアリウムウィジェット「Companions」。${species}種類から選んで名前をつけた魚が、ホーム画面、スタンバイ、Mac、Apple Watchで泳ぎます。エサやりも掃除も、罪悪感もいりません。`,

    places: {
      kicker: 'ふと見れば、そこに',
      title: 'いつも目に入る場所で、暮らしています。',
      lead: 'ウィジェットを一度追加すれば、iPhoneに目をやるたびに魚たちがそこにいます。同じ魚に、同じ水。アプリを開く必要もありません。',
      homeScreen: {
        title: 'ホーム画面',
        text: '小・中・大の3サイズに、8種類のスタイル。水槽はひとつだけでも、棚いっぱいに集めてもかまいません。サイズごとに違う魚を入れておけます。',
      },
      standby: {
        title: 'スタンバイ',
        text: '充電中のiPhoneを横向きに立てておけば、時計のとなりで、水槽がひと晩じゅう寄り添ってくれます。',
        date: '1日(火)',
      },
      watch: {
        title: 'Apple Watch',
        text: 'Apple Watch用のCompanionsアプリで、iPhoneから同期した水槽（小）を手首で眺められます。時刻はApple Watchがもともと表示しているので、水槽にいるのは魚だけです。',
      },
      ipad: {
        title: 'iPad',
        text: 'iPad単体で使える、フル機能のCompanionsアプリです。大きな画面で水槽を作って、ホーム画面にウィジェットを追加できます。iPhoneは必要ありません。',
      },
      mac: {
        title: 'Mac',
        text: '連係機能でiPhoneのウィジェットをMacのデスクトップに置くことも、Macアプリから追加することもできます。ウインドウの合間で、魚たちがそばにいてくれます。',
      },
    },

    fish: {
      kicker: (species: number, packs: number) => `${species}種類・${packs}パック`,
      title: '魚たちを紹介します。',
      lead: 'どの水槽にも最初から熱帯魚、イワシ、フグがいて、淡水魚パックも無料で付いてきます。ほかの魚は、一度買えばずっと自分のものになるパックで、または「すべての魚」でまとめてお迎えできます。魚はそれぞれの泳ぎ方、それぞれのペースで泳ぎ、ときどき小さな泡をぷくっと吐きます。',
      more: '魚とパックをすべて見る',
    },

    customize: {
      kicker: '自分好みに',
      title: '自分だけの水槽を、思いのままに。',
      lead: '水は8種類、好きなように並べられる飾りは19種類。隅には役立つ表示をひとつ、アプリアイコンもおそろいで。',
      props: {
        kicker: (count: number) => `${count}種類の飾り`,
        title: '水槽の底を飾りつけ',
        text: 'シダ、サンゴ、貝がら、パイナップルの家、モアイ。好きな場所にドラッグして、大きさを変えたり、反転させたり。失敗しても取り消せます。水槽はいくつでも保存でき、いつでも切り替えられます。',
      },
      complications: {
        kicker: 'コンプリケーション',
        title: '隅に、役立つ表示をひとつ',
        text: '時刻、日付、今日の天気、歩数目標、今夜の月のどれかひとつを、水に重ねて白で表示します。「すべての魚」に含まれています。',
      },
      icons: {
        kicker: '6種類のアプリアイコン',
        title: 'アイコンもおそろいに',
        names: { minimal: 'ミニマル', twilight: '黄昏', pond: '池', reed: '葦', blossom: '桜', dark: 'ダーク' },
        text: (names: string) => `${names}の6種類から、ホーム画面に合うものをアプリの「設定」で選べます。`,
      },
    },

    calm: {
      kicker: 'お世話いらずのペット',
      title: 'エサやりも、掃除も、罪悪感もいりません。',
      lead: 'いつもそこにいてくれる、色あざやかな数匹の仲間たち。それだけです。',
      cards: [
        {
          title: '死んでしまうことはありません',
          text: '1週間でも、1か月でも、1年でも。久しぶりに開いても、魚たちは最後に見たときのまま泳いでいます。',
        },
        {
          title: 'アカウントも広告もなし',
          text: '登録は不要で、トラッキングもなし。遊び続けるために、何かを買わなければならないこともありません。水槽はお使いのデバイスの中にとどまります。',
        },
        {
          title: 'エサは、あげたいときだけ',
          text: 'フォークとナイフのボタンをタップして、水にエサをひとつまみ。魚たちが追いかける姿を眺められます。あげなくても、文句を言う魚はいません。',
        },
        {
          title: 'あいさつしてくれます',
          text: '朝、アプリを開くと、魚があいさつしてくれることもあります。ガラスをタップすれば、泡がぷくぷくと立ちのぼります。名前は、誰にちなんでつけても自由です。',
        },
      ],
    },

    questions: {
      kicker: 'よくある質問',
      title: '聞かれる前に、お答えします。',
      readFull: 'くわしい回答を読む',
      all: 'すべての質問と回答を見る',
      readMore: '続きを読む',
    },

    blog: {
      kicker: 'ブログから',
      title: 'ホーム画面を、もっと楽しく。',
      all: 'ブログを読む',
    },
  },

  sizes: {
    kicker: '3つのサイズ、8種類の水',
    title: '水槽はひとつ。ウィジェットは、どのサイズでも。',
    lead: 'ウィジェットは小・中・大の3サイズ。サイズごとに、それぞれ別の魚を入れておけます。スタイルを選ぶと、すべての水槽がそろって切り替わります。',
    pickerLabel: '水槽のスタイル',
    large: '大',
    medium: '中',
    small: '小',
    captionHtml: (style: string) =>
      `「${style}」スタイルの水槽を、3つのサイズで。スタイルを一度変えれば、ホーム画面のウィジェットもすべて切り替わります。`,
  },

  packGrid: {
    comesWithApp: 'アプリに付属',
    pack: '追加パック',
  },

  styleRow: {
    label: (style: string) => `水槽のスタイル「${style}」`,
  },

  help: {
    title: '水槽ウィジェットのよくある質問・ヘルプ',
    description:
      '水槽ウィジェット「Companions」のよくある質問と回答。ホーム画面へのウィジェットの追加方法から、魚とパック、水槽のスタイル、コンプリケーション、スタンバイ、Apple Watch、Mac、購入、プライバシーまでお答えします。',
    kicker: 'ヘルプ',
    h1: 'その疑問、お答えします。',
    leadHtml: (email: string) =>
      `Companionsについてよく聞かれることを、ここにまとめました。知りたいことが見つからないときは、${email}までメールをお送りください。私たちが直接お返事します。`,
    categoriesLabel: 'カテゴリ',
    categories: {
      'getting-started': 'はじめに',
      widgets: 'ウィジェット',
      'fish-and-packs': '魚とパック',
      'tanks-and-styles': '水槽・スタイル・飾り',
      complications: 'コンプリケーション',
      'other-devices': 'スタンバイ・Apple Watch・Mac・iPad',
      'privacy-and-purchases': '購入とプライバシー',
      troubleshooting: 'うまくいかないときは',
    },
    fullAnswer: 'くわしい回答',
    related: '関連項目',
    kindQuestion: '質問',
    kindArticle: '記事',
    kindPage: 'ページ',
    stuckTitle: 'それでも解決しないときは',
    stuckHtml: (email: string, helpUrl: string) =>
      `お使いのiPhoneの機種とiOSのバージョンを添えて、${email}までメールをお送りください。解決までお手伝いします。<a href="${helpUrl}">すべての質問に戻る</a>`,
  },

  blog: {
    title: 'iPhoneのおすすめウィジェットとおしゃれなホーム画面',
    description:
      'iPhoneのアクアリウムアプリやペット育成アプリ、かわいいウィジェットのおすすめから、おしゃれなホーム画面のアイデア、魚の豆知識、水槽ウィジェット「Companions」の使い方まで。',
    kicker: 'ブログ',
    h1: 'ホーム画面を、もっと楽しく。',
    lead: '試してみたいウィジェットアプリや育成アプリ、ホーム画面のアイデア、魚の豆知識、手順つきの使い方ガイド。Companionsを作っている2人が書いています。',
    topicsLabel: 'トピック',
    categories: {
      'app-picks': {
        name: 'おすすめアプリ',
        lead: 'iPhoneに入れておきたいウィジェットアプリ、ペット育成アプリ、癒し系アプリを集めました。',
      },
      'home-screen': {
        name: 'ホーム画面カスタマイズ',
        lead: 'ロックを解除するたびにうれしくなる、ホーム画面の色づかいや配置、ウィジェットのアイデア。',
      },
      fish: {
        name: '魚とアクアリウム',
        lead: '魚の豆知識、名前のアイデア、テーマのある水槽づくり。',
      },
      guides: {
        name: 'Companionsの使い方',
        lead: 'ウィジェット、スタンバイ、Apple Watch、Mac、そしてアプリのあらゆる機能を、手順を追って紹介します。',
      },
      troubleshooting: {
        name: 'トラブル対処法',
        lead: 'ウィジェットがうまく動かないときに、確かめることを順番にまとめました。',
      },
    },
    by: (author: string) => `文：${author}`,
    readingTime: (minutes: number) => `${minutes}分で読めます`,
    onThisPage: '目次',
    more: 'あわせて読みたい',
    cta: (species: number) =>
      `手描きの${species}種類から魚を選んで名前をつければ、ウィジェットの中で一日じゅう泳いでくれます。無料でも、8種類の魚とすべての水槽スタイル、3つのウィジェットサイズが使えます。`,
    feedTitle: 'Companionsのブログ',
    feed: 'RSSフィード',
  },

  packs: {
    title: '魚の種類とパック一覧',
    description: (species: number, free: number) =>
      `水槽ウィジェット「Companions」の全${species}種類の魚を、パックごとに紹介します。無料で付いてくる${free}種類、各パックの中身、買い切りのパックと「すべての魚」のしくみがわかります。`,
    kicker: (species: number, packs: number) => `${species}種類・${packs}パック`,
    h1: '魚もパックも、ぜんぶここに。',
    lead: (free: number) =>
      `Companionsには、${free}種類の魚が付いてきます。どの水槽にも最初からいる3種類と、淡水魚パックの5種類です。ほかのパックはアプリ内で一度買えば、ずっと使えます。「すべての魚」なら、今後追加されるパックも含めたすべてのパックと、水槽のコンプリケーションがまとめてロック解除されます。`,
    listName: 'Companionsの魚パック',
    howTitle: 'パックのしくみ',
    howHtml: [
      'パックはApp Storeを通じた買い切りで、お住まいの地域の通貨で購入できます。iPhoneで買ったパックは、同じAppleアカウントのiPadでも使えます。新しいデバイスでは、「設定」の「購入を復元」で元どおりになります。期限はなく、水槽に入れたものが取り上げられることもありません。',
      '「<strong>すべての魚</strong>」には2つの買い方があります。一度の購入でずっと使える「永久」と、使いたいあいだだけ続ける「月額」プランです。どちらでも、今あるパックと今後追加されるパックのすべて、そしてコンプリケーション（水槽の隅に表示する時刻、日付、天気、歩数、月）が使えるようになります。月額プランが切れても、すでに追加した魚はそのまま泳ぎ続けます。プランを更新するまで、それらのパックから新しい魚を追加できなくなるだけです。',
      '価格は、アプリの「設定」に、お住まいの地域の通貨で表示されます。',
    ],
  },

  pack: {
    title: (pack: string, fish: string) => `${pack}：${fish}`,
    description: (c: { tagline: string; pack: string; count: number; fish: string; free: boolean }) =>
      `${c.tagline}水槽ウィジェット「Companions」の「${c.pack}」には、${c.fish}の${c.count}種類が入っています。${c.free ? 'アプリに無料で付いてきます。' : 'アプリ内課金の買い切りパックで、「すべての魚」にも含まれています。'}`,
    kickerFree: 'アプリに付属',
    kickerPaid: '魚の追加パック',
    tankLabel: (style: string, pack: string, fish: string) => `「${pack}」を入れた「${style}」スタイルの水槽：${fish}`,
    tankCaption: (pack: string, style: string) => `「${pack}」を「${style}」スタイルの水槽に入れた例。ウィジェットのサイズは中です。`,
    fishAlt: (fish: string) => `Companionsの「${fish}」のイラスト`,
    fishText: (fish: string, swim: 'swimmer' | 'floater' | 'creeper' | 'crawler', scale: number) => {
      const how = {
        swimmer: `${fish}は水槽の中ほどを、小さく浮き沈みしながら、すいすいと泳ぎます。`,
        floater: `${fish}は、泳ぐというより浮かんでいます。魚がいそうな場所ならどこにでもふわりととどまり、ゆっくりとただよいます。`,
        creeper: `${fish}は水槽の底から離れず、動いているのがほとんどわからないほどゆっくりと這っていきます。進む向きに、少しだけ体を傾けます。`,
        crawler: `${fish}は水槽の底をちょこちょこと歩き、脚の動きに合わせて小さく上下します。`,
      }[swim];
      const size =
        scale > 1
          ? `標準の大きさの魚より${Math.round((scale - 1) * 100)}%大きく描かれています。`
          : scale < 1
            ? '標準の大きさの魚より、ほんの少し小さく描かれています。'
            : '';
      return `${how}${size}`;
    },
    howTitle: 'この魚たちを追加するには',
    step1Html: 'Companionsを開き、水槽の下にあるトレイのいちばん端の「<strong>+</strong>」をタップします。',
    step2Html: (pack: string) => `一覧から「<strong>${pack}</strong>」を探して、魚をタップします。`,
    step3FreeHtml: '魚がぽちゃんと水に飛び込みます。名前をつけても、もとの名前のままでもかまいません。',
    step3PaidHtml:
      'パックがロックされている場合は、「<strong>ロック解除</strong>」をタップして、そのパックを買い切りで購入するか、すべてのパックが使える「すべての魚」を購入します。すると、魚がぽちゃんと水に飛び込みます。名前をつけても、もとの名前のままでもかまいません。',
    after: '水槽に入る魚は5匹まで。魚はウィジェットのサイズごとに別々なので、小・中・大の水槽にそれぞれ違う魚を入れられます。',
    namesTitle: 'ほかの言語での名前',
    namesIntro: (languages: number) =>
      `Companionsは${languages}言語に翻訳されています。アプリでは、この魚たちをそれぞれ次の名前で呼んでいます。`,
    languageHeader: '言語',
    others: 'ほかのパック',
  },

  styles: {
    title: '全8種類の水槽スタイル',
    description: (styles: string) =>
      `水槽ウィジェット「Companions」で選べる水のスタイル（${styles}）をすべて紹介。それぞれの見た目や似合う魚、水槽のスタイルの変え方もわかります。`,
    kicker: (count: number) => `${count}種類のスタイル`,
    h1: 'ガラスは同じ、水はさまざま。',
    lead: 'スタイルで変わるのは、水と底の色です。ガラスとそのふち、光沢は変わらないので、小・中・大のどの水槽も、大きさが違うだけの同じ水槽に見えます。「水槽を編集」画面で水槽のスタイルを変えると、その水槽を表示しているウィジェットがすべて切り替わります。',
    tankLabel: (style: string) => `「${style}」スタイルの水槽（ウィジェットのサイズ：中）`,
    counter: (index: number, count: number) => `${count}種類中${index}番目のスタイル`,
    blurbs: {
      minimal:
        'アプリの配信開始当初からある、青い水槽です。水面近くの淡い青が、中ほどで明るいスカイブルーに落ち着き、底には白いもやがかかっています。明るく、すっきりしていて、たいていの魚がいちばんきれいに見えるスタイルです。',
      deepOcean:
        '光が差し込む水面近くはサファイア色。そこからネイビーへと沈み、底ではほとんど黒に近い藍色になります。クラゲはほのかに光り、サンゴ礁の魚はぱっと映えます。',
      pond: '水面は日差しを浴びた明るい緑。深くなるにつれて木の葉の緑へと濃くなり、あたたかな色の砂の底に近づくと、ほんのりオリーブがかります。錦鯉やニジマス、池の生きものたちのためのスタイルです。',
      reed: '青みに寄せた、涼しげな緑。色温度は「ミニマル」にいちばん近く、底は落ち着いた薄茶色です。この2つを切り替えると、別の水槽になったというより、光の加減が変わったように見えます。',
      blossom:
        '水面の淡い桜色が、下へいくほどやわらかなローズに落ち着きます。底には「ミニマル」と同じ白いもや。ピンクを青みに寄せてあるので、オレンジや赤の魚もくっきり映えます。',
      dark: '黒で統一したホーム画面のために、表示できるかぎりの黒にしたスタイルです。水面のニュートラルなチャコールグレーが、底のあたりでは真っ黒になります。ガラスの光沢も控えめにしてあるので、暗い色のアイコンのあいだに静かになじみます。',
      pumpkin:
        '水面のやわらかなパンプキンオレンジが、下へいくほど深いオレンジに落ち着きます。底には白いもや。黄色の手前でとどめてあるので、金魚や黄金の鯉も埋もれません。',
      lavender:
        '「ミニマル」「桜」と同じつくりで、色みをラベンダーの花の色にしたスタイルです。この明るさで出せるかぎりあざやかなラベンダーで、底には同じ白いもやがかかっています。ディスカスやアケボノハゼがよく似合います。',
    },
    howTitle: '水槽のスタイルを変えるには',
    stepsHtml: [
      'Companionsを開き、画面上部の「<strong>⋯</strong>」ボタンをタップして、「<strong>この水槽を編集</strong>」を選びます。',
      '「水槽を編集」画面の上部にあるスタイルのメニューを開いて、水を選びます。選んだそばから、水槽が切り替わります。',
      '「<strong>閉じる</strong>」をタップします。水槽は自動で保存され、ホーム画面のウィジェットも同じ見た目に切り替わります。',
    ],
    after:
      'スタイルはアプリ全体ではなく、水槽ごとに決まります。「マイ水槽」画面では、「桜」の水槽（小）と「ダーク」の水槽（大）を並べておいて、ウィジェットに表示する水槽を切り替えられます。',
  },

  whatsNew: {
    title: '新機能とアップデート情報',
    description: (version: string, date: string) =>
      `水槽ウィジェットアプリ「Companions」のリリースノート（アップデート履歴）を、バージョンごとに掲載しています。最新バージョンは${version}（${date}公開）です。`,
    kicker: '新機能',
    h1: 'これまでのバージョンを、順番に。',
    lead: (version: string, date: string) =>
      `最新バージョンはCompanions ${version}（${date}公開）です。アップデートはApp Storeから届きます。`,
    heading: (version: string, title: string) => `${version}：${title}`,
    entryTitle: (version: string, title: string) => `Companions ${version}：${title}`,
    versionKicker: (version: string) => `バージョン${version}`,
    all: 'すべてのバージョンを見る',
  },

  support: {
    title: 'サポート・お問い合わせ',
    description: (email: string) =>
      `水槽ウィジェット「Companions」のサポートページです。よくあるトラブルの解決方法と、開発者への連絡先（${email}）をご案内します。`,
    kicker: 'サポート',
    h1: '一緒に解決しましょう。',
    leadHtml: (email: string) =>
      `Companionsは2人で作っています。どのメールにも、2人のどちらかが直接お返事します。${email}宛てにお送りいただくか、アプリの「設定」にある「メール」ボタンをお使いください。ボタンからなら、必要な情報が自動で入力されます。`,
    contactName: 'Companionsサポート',
    beforeTitle: 'メールを送る前に',
    beforeHtml: (helpUrl: string) =>
      `たいていの疑問には、<a href="${helpUrl}">ヘルプページ</a>でお答えしています。特によくいただく質問はこちらです。`,
    includeTitle: 'メールに書いていただきたいこと',
    include: [
      'お使いのiPhoneの機種とiOSのバージョン（「設定」›「一般」›「情報」で確認できます）。',
      'Companionsのバージョン（アプリの「設定」のいちばん下に表示されています）。',
      'どうなるはずだったのか、実際にはどうなったのか。スクリーンショットや画面収録があると、とても助かります。',
    ],
    purchasesTitle: '購入と返金',
    purchasesHtml: (reportUrl: string) =>
      `パックと「すべての魚」は、AppleがApp Storeを通じて販売しているため、返金もAppleが受け付けます。<a href="${reportUrl}" rel="noopener">reportaproblem.apple.com</a>にアクセスしてサインインし、対象の購入を選んでください。購入したパックがロックされたままのときは、アプリの「設定」を開いて「<strong>購入を復元</strong>」をタップしてください。その際、購入したときと同じAppleアカウントでサインインしていることを確認してください。`,
    privacyTitle: 'プライバシー',
    privacyHtml: (privacyUrl: string) =>
      `Companionsは水槽をお使いのデバイスに保存し、個人情報は一切収集しません。くわしくは<a href="${privacyUrl}">プライバシーポリシー</a>をご覧ください。`,
    wishTitle: 'あったらいいな、と思うものはありますか？',
    wish: '魚、飾り、スタイル、ウィジェットを置きたい場所。なんでも教えてください。パックの多くは、1通のメールから生まれました。',
  },

  press: {
    title: 'プレスキット',
    description:
      'iPhoneのホーム画面に置けるアクアリウムウィジェット「Companions」のプレスキット。記事を書く方のために、基本情報、紹介文、アイコン、スクリーンショットをまとめました。',
    kicker: 'プレスキット',
    h1: 'Companionsを紹介してくださる方へ',
    leadHtml: (email: string) =>
      `ここにある文章はすべて引用でき、画像もアプリの紹介記事に自由にお使いいただけます。それ以外のご用件は、${email}までメールでご連絡ください。`,
    sentenceTitle: 'ひとことで言うと',
    paragraphTitle: 'もう少しくわしく',
    paragraph: (c: { species: number; props: number; languages: number; developer: string }) =>
      `Companionsは、ホーム画面のウィジェットに小さな水槽を置ける無料のiPhoneアプリです。ユーザーは手描きの${c.species}種類から魚を選び、1匹ずつ名前をつけます。魚たちはそれぞれの泳ぎ方、それぞれのペースで泳ぎ、iPhoneのロックを解除するたびに、ウィジェットの中、充電中のスタンバイ、Macのデスクトップ、Apple Watchでその姿を見せてくれます。エサをあげる必要はなく、死んでしまうこともありません。エサやりは、気が向いたときに楽しめる遊びです。水槽の水のスタイルは8種類。${c.props}種類の飾りを自由に並べられ、隅には時刻、日付、天気、歩数目標、月のいずれかを表示できます。8種類の魚は最初からアプリに付いていて、ほかの魚は買い切りのパックで、または「すべての魚」でまとめて手に入ります。Companionsにはアカウントも広告もトラッキングもありません。${c.languages}言語に翻訳されています。韓国で、${c.developer}とSheaが作っています。`,
    factsTitle: '基本情報',
    facts: {
      name: 'アプリ名',
      what: '概要',
      whatValue: 'iPhoneアプリとホーム画面ウィジェット。好きな魚を入れて一日じゅう眺められる、動く水槽',
      price: '価格',
      priceValue: '無料。魚の追加パックは買い切りのアプリ内課金。「すべての魚」は、買い切りの永久プランまたは月額プランで、すべてをロック解除',
      platforms: '対応デバイス',
      platformsValue: (os: string) => `iPhoneとiPad（${os}以降）、Apple Watchアプリ、Mac（MacのiPhoneウィジェットを利用）`,
      fish: '魚',
      fishValue: (species: number, packs: number) => `${species}種類（${packs}パック）。うち8種類はアプリに付属`,
      styles: '水槽のスタイル',
      props: '飾り',
      propsValue: (count: number) => `水槽の底に並べられる${count}種類の飾り`,
      complications: 'コンプリケーション',
      complicationsValue: '時刻、日付、天気、歩数目標、月の満ち欠けを水槽の隅に表示',
      languages: '対応言語',
      firstReleased: '初回リリース',
      currentVersion: '最新バージョン',
      currentVersionValue: (version: string, date: string) => `${version}（${date}）`,
      developer: '開発者',
      developerValue: (developer: string) => `${developer}（デザインとプログラミング）とShea（アート）、韓国`,
      appStore: 'App Store',
      contact: 'お問い合わせ',
    },
    iconTitle: 'アイコン',
    iconText: 'App Storeのアイコン（1024ピクセル）です。色を変えたり、別の形にはめ込んだりするのはご遠慮ください。',
    iconAlt: 'Companionsのアプリアイコン：淡い青の水の中の、金魚の尾びれ',
    screenshotsTitle: 'スクリーンショット',
    screenshotsText: 'App Storeに掲載しているスクリーンショットを、順番どおりに並べました。クリックすると、フルサイズのファイルが開きます。',
    screenshotAlt: (index: number) => `CompanionsのApp Storeスクリーンショット（${index}枚目）`,
    downloadTitle: 'ダウンロード',
  },

  privacy: {
    title: 'プライバシーポリシー',
    description:
      'Companionsは、個人情報を一切収集・販売・共有しません。水槽はお使いのデバイスの中にとどまり、外部に送信されるのは匿名の利用統計だけです。これもオフにできます。',
    kicker: 'プライバシーポリシー',
    h1: '魚のことは、水槽の中だけの話。',
    meta: (date: string) => `最終更新日：${date}。アプリの「設定」に表示されるものと同じポリシーです。`,

    /* The app's own policy, word for word (see the glossary); only the tags are added. */
    sections: [
      {
        title: "かんたんに言うと",
        html: "<p>Companionsは、個人情報を一切収集・販売・共有しません。作成するアカウントも、広告も、いかなる種類のトラッキングもなく、アプリが水槽について知っていることはすべて、お使いのデバイスの中にとどまります。Companionsが外部に送信するのは、アプリのどの部分が使われているかを知るための匿名の利用統計だけで、これは設定からいつでもオフにできます。</p>",
      },
      {
        title: "Companionsが保存する情報",
        html: "<p>Companionsが保存するのは、水槽そのものだけです：</p>\n<ul>\n<li>水槽にいる魚と、それぞれの種類</li>\n<li>それぞれの魚に付けた名前</li>\n<li>同じ種類の魚を見分けるための、魚ごとのランダムな識別子</li>\n</ul>\n<p>名前は入力したとおりに保存されます。友達や家族の名前を魚に付けた場合も、その名前はほかのすべての情報と同じくデバイス内にのみ保存され、ほかの場所には保存されません。</p>",
      },
      {
        title: "保存場所",
        html: "<p>水槽はお使いのデバイス内に保存されます。保存先は、ウィジェットが魚を表示できるように、Companionsアプリとホーム画面ウィジェットが共有している保存領域です。Companionsがこのデータをどこかにアップロードすることはありません。</p>\n<p>iCloudバックアップやコンピュータでデバイスをバックアップしている場合、Appleのバックアップには、ほかのアプリのデータとともにCompanionsのデータが含まれることがあります。これらのバックアップはiOSの設定でご自身が管理するもので、このポリシーではなくAppleのプライバシーポリシーが適用されます。</p>",
      },
      {
        title: "ウィジェット",
        html: "<p>Companionsのウィジェットは、水槽の魚をホーム画面やロック画面に表示します。ほかのウィジェットと同じように、画面を見ることができる人には誰にでも表示されます。VoiceOverを使っている場合は、ウィジェットが魚の名前を読み上げることもあります。ウィジェットはデバイス内の共有保存領域から水槽を読み込むだけで、どこにも何も送信しません。</p>",
      },
      {
        title: "利用統計",
        html: "<p>Companionsのどの部分が使われているかを知るために、アプリはGoogleが運営するサービス「Google アナリティクス for Firebase」に匿名の利用統計を送信します。送信されるのは、アプリを開いた、画面を表示した、魚を追加した、水槽のスタイルを選んだ、パックをロック解除したといったイベントと、デバイスのモデル、iOSのバージョンと言語、アプリのバージョン、およびインターネット接続から推定した国と地域（接続元のアドレスは保存されません）といった一般的な情報です。アプリのインストールごとにランダムな識別子が割り当てられ、繰り返しの利用が1人として数えられます。この識別子は、ご自身やAppleアカウント、魚とその名前とは結び付けられず、Companionsは広告識別子を使用したり、トラッキングの許可を求めたりすることもありません。</p>\n<p>設定の「利用統計を共有」スイッチでいつでもオフにでき、それ以降は何も送信されません。Googleによるこれらの統計の取り扱いについては、<a href=\"https://policies.google.com/privacy\" rel=\"noopener\">policies.google.com/privacy</a>のGoogleプライバシーポリシーをご覧ください。</p>",
      },
      {
        title: "アクセス許可",
        html: "<p>Companionsが求めるシステムのアクセス許可は3つで、いずれも、それを必要とする機能を初めて選んだときに確認されます。どれも許可しなくてもアプリは使えます。</p>\n<ul>\n<li><strong>写真ライブラリへの写真の追加：</strong>水槽のQRコードを初めて写真アプリに保存するときにiOSが確認します。許可されるのは画像の追加だけで、すでにある写真をアプリが見ることはできません。</li>\n<li><strong>ヘルスケアからの歩数の読み取り：</strong>「歩数目標」のコンプリケーションを初めて選んだときにiOSが確認します。アプリが読み取るのは今日の歩数だけで、水槽に表示するために使います。ヘルスケアに書き込むことはありません。歩数と設定した目標は、ウィジェットが表示できるようにデバイス上の共有ストレージに保存され、それ以外の場所には保存されません。</li>\n<li><strong>アプリ使用中の位置情報：</strong>「月の満ち欠け」または「天気」のコンプリケーションを選んだあと、「設定」の「位置情報」をタップしたときにiOSが確認します。アプリは位置情報を、現在地から見た月の向きを知るため（記録するのは北半球か南半球かだけです）と、Appleの気象サービスから現在地の天気を取得するために使います。このサービスが受け取るのは予報に必要なおおよその位置だけです。Companionsは位置情報を保存せず、ほかのどこにも送信しません。</li>\n</ul>\n<p>カメラ、マイク、連絡先、カレンダー、通知にはアクセスせず、ほかのアプリやWebサイトを横断してトラッキングする許可も求めません。</p>",
      },
      {
        title: "サードパーティのサービス",
        html: "<p>上記のGoogle アナリティクス for Firebaseを除き、Companionsにはサードパーティのソフトウェア開発キット（SDK）は含まれていません。クラッシュレポートも広告もありません。</p>\n<p>アプリのダウンロードとアップデート、購入したパック、そしてご自身で残す評価やレビューは、App Storeが処理します。Companionsが支払い情報を見ることはありません。これらのやり取りにはAppleのプライバシーポリシーが適用されます。</p>",
      },
      {
        title: "ご自身で共有する情報",
        html: "<p>設定にあるいくつかのボタンは、タップしたときにだけ、ほかのアプリを開きます：</p>\n<ul>\n<li><strong>「メール」</strong>をタップすると、私宛ての新規メッセージが用意された状態でメールアプリが開きます。書いた内容はお使いのメールサービスから送信され、私が受け取るのは送信された内容だけです。</li>\n<li><strong>「Companionsを共有」</strong>をタップすると、アプリへのリンクが入ったiOSの共有シートが開きます。誰に共有したかをCompanionsが知ることはありません。</li>\n<li><strong>「Companionsを評価」</strong>をタップすると、Appleの評価ダイアログが表示されます。評価はAppleが処理し、Companionsはその内容を受け取りません。</li>\n<li>メインページのメニューの<strong>「この水槽を共有」</strong>をタップすると、水槽の水と飾りだけを含むコードが作られ（あなたや魚に関する情報は含まれません）、送信用の共有シートが開きます。</li>\n</ul>",
      },
      {
        title: "データの管理",
        html: "<p>水槽はすべてご自身で管理できます：</p>\n<ul>\n<li>水槽の下のトレイから、いつでも魚の名前を変えたり、水槽から出したりできます</li>\n<li>水槽から出した魚はデバイスから削除されます</li>\n<li>設定の「利用統計を共有」スイッチで、利用統計をオフにできます</li>\n<li>Companionsアプリを削除すると、水槽と、アプリがデバイスに保存したほかのすべてのデータが削除されます（以前に作成したデバイスのバックアップには、新しいバックアップで置き換えられるまでコピーが残る場合があります）</li>\n</ul>",
      },
      {
        title: "お子様のプライバシー",
        html: "<p>Companionsは、年齢を問わず誰からも個人情報を収集しません。上記の利用統計は匿名で、名前やアプリに入力した内容、お子様やほかの誰かを特定できる情報が含まれることは決してありません。</p>",
      },
    ],

    website: {
      title: 'このWebサイトについて',
      countedHtml: (githubUrl: string, googleUrl: string) =>
        `<p>このWebサイトは、GitHub Pagesから配信される静的なページでできています。フォントと画像も、このサイト自体から配信しています。GitHubによるWebサーバーのログの取り扱いについては、<a href="${githubUrl}" rel="noopener">GitHubのプライバシーステートメント</a>に記載されています。</p>
<p>訪問者の数や、どこから来たのか、どのページやボタンが使われているのかを知るために、このWebサイトはGoogleが運営するサービス「Google Analytics」を使用しています。記録されるのは、このサイトで開いたページ、押したリンクやボタン、リンク元のサイト、そして一般的な情報（ブラウザ、デバイスの種類と言語、インターネット接続から推定した国と都市）です。接続元のアドレスは保存されません。繰り返しの訪問を1人の訪問者として数えるため、ランダムな識別子を、ブラウザの2つのCookie（<code>_ga</code>と、名前が<code>_ga_</code>で始まるもの）に最長2年間保存します。この識別子は、お名前、アプリ、魚とは結び付けられず、これらの情報が広告に使われることも一切ありません。</p>
<p>ブラウザの時計がヨーロッパのタイムゾーンに設定されている場合、このWebサイトは最初に確認を行い、許可されないかぎりGoogleからは何も読み込みません。また、ブラウザがGlobal Privacy ControlまたはDo Not Trackの信号を送信している場合は、確認せずにオフのままにします。どこからアクセスしていても、この設定はここでいつでも変更でき、統計をオフにするとCookieも削除されます。Googleによるこれらの統計の取り扱いについては、<a href="${googleUrl}" rel="noopener">policies.google.com/privacy</a>のGoogleプライバシーポリシーをご覧ください。</p>`,
      uncountedHtml: (githubUrl: string) =>
        `<p>このWebサイトは、GitHub Pagesから配信される静的なページでできています。Cookieは設定せず、アクセス解析も行わず、サードパーティのコンテンツも一切埋め込んでいません。フォントと画像も、このサイト自体から配信しています。GitHubによるWebサーバーのログの取り扱いについては、<a href="${githubUrl}" rel="noopener">GitHubのプライバシーステートメント</a>に記載されています。</p>`,
      statisticsHtml: (state: string) => `このブラウザでは、Webサイトの統計は${state}になっています。`,
      on: 'オン',
      off: 'オフ',
      turnOn: 'オンにする',
      turnOff: 'オフにする',
      updated: (date: string) => `このセクションはWebサイトだけを対象としており、最終更新日は${date}です。`,
    },

    changes: {
      title: "このポリシーの変更",
      html: "<p>Companionsのデータの取り扱いが変わる場合は、アプリ内のこのポリシーを更新し、冒頭の日付を改めます。最新版はいつでも設定から確認できます。</p>",
    },
    contact: {
      title: "お問い合わせ",
      html: (email: string) =>
        "<p>このポリシーやCompanionsのデータの取り扱いについてご質問があれば、" + email + "宛てにメールを送るか、設定の「メール」ボタンをご利用ください。</p>",
    },
  },

  consent: {
    label: 'Webサイトの統計',
    html: (privacyUrl: string) =>
      `<strong>このWebサイトへのアクセスを計測してもよいですか？</strong>どのページやボタンが使われているかを知るために、Cookieを使うGoogle Analyticsで計測します。広告に使うことは決してありません。<a href="${privacyUrl}">くわしく見る</a>`,
    no: '許可しない',
    allow: '許可する',
  },

  notFound: {
    title: 'ページが見つかりません',
    description: 'お探しのページは、どこかへ泳いでいってしまいました。ヘルプページかホームをご覧ください。',
    h1: 'そのページ、泳いでいってしまいました。',
    lead: 'このアドレスには何もありません。でも、魚たちは元気です。',
    home: 'ホームに戻る',
    help: 'ヘルプとよくある質問',
  },
};

export default dictionary;
