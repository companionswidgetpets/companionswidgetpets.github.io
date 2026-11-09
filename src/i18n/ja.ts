import type { Dictionary } from './en.ts';

/**
 * 日本語。The shape is that of en.ts, entry for entry.
 *
 * App labels, fish, pack, prop and style names and the whole of the privacy policy
 * (`privacy.sections`, `changes`, `contact`) are the app's own Japanese, word for word.
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
    facts: 'App Storeで無料 · iPhone、iPad、Mac、Apple Watch',
    imageAlt: (appName: string, tagline: string) => `${appName}：${tagline}`,
  },

  ld: {
    jobTitle: '個人アプリ開発者',
    alternateNames: ['Companions 水槽ウィジェット', 'Companions アクアリウムウィジェット', 'Companions 魚ウィジェット'],
    offer:
      '無料でダウンロードでき、基本の魚と淡水魚パックが付いています。ほかの魚は、買い切りのパックか「すべての魚」のロック解除で追加できます。',
    features: (c: { species: number; packs: number; props: number }) => [
      '魚が泳ぐ水槽のホーム画面ウィジェット（小・中・大）',
      `${c.packs}パックに${c.species}種類の魚、水槽ごとに5匹まで`,
      `8種類の水槽スタイルと、自由に並べられる${c.props}種類の飾り`,
      '水槽の隅に表示できる、時刻、日付、天気、歩数目標、月の満ち欠けのコンプリケーション',
      'スタンバイ、Apple Watch、Mac（iPhoneウィジェット）に対応',
      '水槽をコードや画像で友達と共有',
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
    guides: 'ガイド',
    fish: '魚たち',
    styles: 'スタイル',
    whatsNew: '新機能',
    support: 'サポート',
    press: 'プレスキット',
    download: 'アプリを入手',
    get: '入手',
  },

  footer: {
    facts: (os: string) => `無料 · ${os}以降 · iPhone、iPad、Mac、Apple Watch`,
    columnSite: 'Companions',
    columnAbout: 'アプリについて',
    home: 'ホーム',
    help: 'ヘルプとよくある質問',
    guides: 'ガイド',
    packs: '魚とパック',
    styles: '水槽のスタイル',
    whatsNew: '新機能',
    press: 'プレスキット',
    support: 'サポート',
    privacy: 'プライバシーポリシー',
    email: 'メールで問い合わせる',
    madeWith: '韓国で♡を込めて作りました',
    legal: (year: number, owner: string) =>
      `© ${year} ${owner}. Apple、Appleのロゴ、iPhone、iPad、Mac、Apple Watch、App Storeは、Apple Inc.の商標です。`,
    language: '言語',
  },

  badge: {
    label: 'CompanionsをApp Storeからダウンロード',
    alt: 'App Storeからダウンロード',
  },

  tank: {
    label: (size: 'small' | 'medium' | 'large' | 'watch', style: string, count: number) => {
      const tank = size === 'watch' ? 'Apple Watchの水槽' : `水槽（${{ small: '小', medium: '中', large: '大' }[size]}）`;
      return `「${style}」スタイルの${tank}、魚${count}匹`;
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
      `Companionsは、iPhoneのホーム画面に小さなアクアリウムを置ける無料のウィジェットアプリ。${species}種類から選んで名前をつけた魚たちが、ホーム画面、スタンバイ、Mac、Apple Watchで泳ぎます。エサやりも掃除も、罪悪感もなし。`,

    places: {
      kicker: 'ふと見れば、そこに',
      title: 'いつも目にする場所で、暮らしています。',
      lead: 'ウィジェットを一度追加すれば、iPhoneに目をやるたびに魚たちがそこにいます。同じ魚、同じ水。アプリを開く必要はありません。',
      homeScreen: {
        title: 'ホーム画面',
        text: '小・中・大の3サイズに、8種類のスタイル。水槽はひとつだけ置いても、ずらりと並べてもかまいません。サイズごとに違う魚を入れられます。',
      },
      standby: {
        title: 'スタンバイ',
        text: '充電中のiPhoneを横向きに立てておけば、時計のとなりで、水槽がひと晩じゅう寄り添ってくれます。',
        date: '1日(火)',
      },
      watch: {
        title: 'Apple Watch',
        text: 'Apple Watch用のCompanionsアプリが、iPhoneから同期した水槽（小）を手首に映します。時刻はApple Watchが表示するので、水槽にいるのは魚だけです。',
      },
      ipad: {
        title: 'iPad',
        text: 'iPadだけで使える、フル機能のCompanionsアプリです。大きな画面で水槽を作って、ホーム画面にウィジェットを追加できます。iPhoneは必要ありません。',
      },
      mac: {
        title: 'Mac',
        text: '連係機能でiPhoneのウィジェットをMacのデスクトップに置くことも、Macアプリから追加することもできます。ウインドウのあいだで、魚たちが寄り添ってくれます。',
      },
    },

    fish: {
      kicker: (species: number, packs: number) => `${packs}パックに${species}種類`,
      title: '魚たちをご紹介します。',
      lead: 'どの水槽にも最初から熱帯魚、イワシ、フグがいて、淡水魚パックも無料で付いてきます。ほかの魚は、一度買えばずっと使えるパックで、または「すべての魚」でまとめて手に入ります。魚はそれぞれの泳ぎ方、それぞれのペースで泳ぎ、ときどき小さな泡をぷくりと吐きます。',
      more: '魚とパックをすべて見る',
    },

    customize: {
      kicker: '自分好みに',
      title: '自分だけの水槽を、思いのままに。',
      lead: '水は8種類、好きなように並べられる飾りは19種類。隅には役立つ表示をひとつ、アプリアイコンもおそろいで。',
      props: {
        kicker: (count: number) => `${count}種類の飾り`,
        title: '水槽の底を飾りつけ',
        text: 'シダ、サンゴ、貝がら、パイナップルの家、モアイ。好きな場所にドラッグして、大きさを変えたり、反転したり、取り消したり。水槽はいくつでも保存できて、いつでも切り替えられます。',
      },
      complications: {
        kicker: 'コンプリケーション',
        title: '隅に、役立つ表示をひとつ',
        text: '時刻、日付、今日の天気、歩数目標、今夜の月のいずれかを、水に重ねて白く表示します。「すべての魚」に含まれています。',
      },
      icons: {
        kicker: '6種類のアプリアイコン',
        title: 'アイコンもおそろいに',
        names: { minimal: 'ミニマル', twilight: '黄昏', pond: '池', reed: '葦', blossom: '桜', dark: 'ダーク' },
        text: (names: string) => `${names}。ホーム画面に合うものを、アプリの「設定」で選べます。`,
      },
    },

    calm: {
      kicker: 'お世話いらずのペット',
      title: 'エサやりなし。掃除なし。罪悪感もなし。',
      lead: 'いつもそこにいてくれる、色あざやかな数匹の仲間たち。それだけです。',
      cards: [
        {
          title: '死んでしまうことはありません',
          text: '1週間、1か月、1年。どれだけ留守にしても、魚たちは最後に見たときのまま泳いでいます。',
        },
        {
          title: 'アカウントも広告もなし',
          text: '登録は不要で、トラッキングもなく、遊び続けるために買わなければならないものもありません。水槽はお使いのデバイスの中にとどまります。',
        },
        {
          title: 'エサは、あげたいときだけ',
          text: 'フォークとナイフをタップして、水にエサをひとつまみ。追いかける魚たちを眺められます。あげなくても、誰も気にしません。',
        },
        {
          title: 'あいさつしてくれます',
          text: 'アプリを開くと、魚があいさつしてくれる朝もあります。ガラスをタップすれば、泡がぷくぷくと立ちのぼります。名前は、好きな誰かにちなんでつけられます。',
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

    guides: {
      kicker: 'ガイド',
      title: '水槽を、もっと楽しむために。',
      all: 'すべてのガイドを見る',
    },
  },

  sizes: {
    kicker: '3つのサイズ、8種類の水',
    title: '水槽はひとつ。ウィジェットは、どのサイズでも。',
    lead: 'ウィジェットは小・中・大の3サイズ。魚はサイズごとに別々です。スタイルを選ぶと、すべての水槽がそろって切り替わります。',
    pickerLabel: '水槽のスタイル',
    large: '大',
    medium: '中',
    small: '小',
    captionHtml: (style: string) =>
      `「${style}」スタイルの水槽を、3つのサイズで。スタイルを一度変えれば、ホーム画面のすべてのウィジェットに反映されます。`,
  },

  packGrid: {
    comesWithApp: 'アプリに付属',
    pack: '追加パック',
  },

  styleRow: {
    label: (style: string) => `水槽のスタイル「${style}」`,
  },

  help: {
    title: 'ヘルプとよくある質問',
    description:
      '水槽ウィジェット「Companions」のよくある質問と回答。ホーム画面へのウィジェットの追加、魚とパック、水槽のスタイル、コンプリケーション、スタンバイ、Apple Watch、Mac、購入、プライバシーについてお答えします。',
    kicker: 'ヘルプ',
    h1: 'その疑問、お答えします。',
    leadHtml: (email: string) =>
      `Companionsについてよく聞かれることを、ひとつにまとめました。探している答えが見つからないときは、${email}までメールをお送りください。人間がお返事します。`,
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
    kindGuide: 'ガイド',
    kindPage: 'ページ',
    stuckTitle: 'まだ解決しませんか？',
    stuckHtml: (email: string, helpUrl: string) =>
      `お使いのiPhoneの機種とiOSのバージョンを添えて、${email}までメールをお送りください。一緒に解決しましょう。<a href="${helpUrl}">すべての質問に戻る</a>`,
  },

  guides: {
    title: '水槽ウィジェットの使い方ガイド',
    description:
      '水槽ウィジェット「Companions」の使い方を、手順を追って解説します。iPhoneのホーム画面、スタンバイ、Apple Watch、Macへの追加から、水槽づくり、コンプリケーション、エサやり、共有まで。',
    kicker: 'ガイド',
    h1: '水槽を、もっと楽しむために。',
    lead: 'じっくり読みたい方のための読みものです。ウィジェットのしくみ、いろいろな場所への設定方法、知っておくと役立つちょっとしたことをまとめました。',
    by: (author: string) => `文：${author}`,
    onThisPage: '目次',
    more: 'ほかのガイド',
  },

  packs: {
    title: '魚の種類とパック一覧',
    description: (species: number, free: number) =>
      `水槽ウィジェット「Companions」の全${species}種類の魚を、パックごとに紹介します。無料で付いてくる${free}種類、各パックの中身、買い切りのパックと「すべての魚」のしくみがわかります。`,
    kicker: (species: number, packs: number) => `${species}種類 · ${packs}パック`,
    h1: '魚もパックも、ぜんぶここに。',
    lead: (free: number) =>
      `Companionsには、最初から${free}種類の魚が付いています。どの水槽にも最初からいる3種類と、淡水魚パックの5種類です。ほかのパックは、アプリ内で一度買えばずっと使えます。「すべての魚」なら、今後追加されるパックも含めてすべてのパックをまとめてロック解除でき、水槽のコンプリケーションも使えるようになります。`,
    listName: 'Companionsの魚のパック',
    howTitle: 'パックのしくみ',
    howHtml: [
      'パックは、App Storeを通じて一度だけ購入する買い切りで、お住まいの地域の通貨で支払えます。iPhoneで買ったパックは、同じApple AccountのiPadでも使えます。新しいデバイスでは、「設定」の「購入を復元」で元どおりになります。期限が切れることはなく、水槽に入れたものがなくなることもありません。',
      '「<strong>すべての魚</strong>」には2つのプランがあります。一度の購入でずっと使える「永久」と、使いたいあいだだけ続ける「月額」です。どちらでも、今あるパックと今後追加されるパックのすべて、そしてコンプリケーション（水槽の隅に表示する時刻、日付、天気、歩数、月）が使えるようになります。月額プランが切れても、すでに追加した魚はそのまま泳ぎ続けます。それらのパックから新しい魚を追加できるのは、プランを更新してからです。',
      '価格は、アプリの「設定」に、お使いの通貨で表示されます。',
    ],
  },

  pack: {
    title: (pack: string, fish: string) => `${pack}：${fish}`,
    description: (c: { tagline: string; pack: string; count: number; fish: string; free: boolean }) =>
      `${c.tagline}水槽ウィジェット「Companions」の「${c.pack}」には、${c.fish}の${c.count}種類が入っています。${c.free ? 'アプリに無料で付いてきます。' : 'アプリ内課金の買い切りパックで、「すべての魚」にも含まれています。'}`,
    kickerFree: 'アプリに付属',
    kickerPaid: '魚の追加パック',
    tankLabel: (style: string, pack: string, fish: string) => `「${style}」スタイルの水槽で泳ぐ「${pack}」の魚：${fish}`,
    tankCaption: (pack: string, style: string) => `「${style}」スタイルの水槽に入れた「${pack}」。ウィジェットのサイズは中です。`,
    fishAlt: (fish: string) => `Companionsの「${fish}」のイラスト`,
    fishText: (fish: string, swim: 'swimmer' | 'floater' | 'creeper' | 'crawler', scale: number) => {
      const how = {
        swimmer: `${fish}は水槽の中ほどを、小さく上下しながらすいすいと泳ぎます。`,
        floater: `${fish}は泳ぐというより、浮かんでいます。魚が行けるところならどこにでもいて、ゆっくりとただよいます。`,
        creeper: `${fish}は水槽の底から離れず、動いているのがわからないほどゆっくりと這っていきます。進む向きに、体を少し傾けます。`,
        crawler: `${fish}は水槽の底をちょこちょこと歩き、脚の動きに合わせて小さく上下します。`,
      }[swim];
      const size =
        scale > 1
          ? `標準サイズの魚より${Math.round((scale - 1) * 100)}%大きく描かれています。`
          : scale < 1
            ? '標準サイズの魚よりほんの少し小さく描かれています。'
            : '';
      return `${how}${size}`;
    },
    howTitle: 'この魚たちを追加するには',
    step1Html: 'Companionsを開き、水槽の下にあるトレイの端の<strong>+</strong>をタップします。',
    step2Html: (pack: string) => `一覧から「<strong>${pack}</strong>」を探して、魚をタップします。`,
    step3FreeHtml: '魚がぱしゃんと水に飛び込みます。名前をつけても、最初の名前のままでもかまいません。',
    step3PaidHtml:
      'パックがロックされている場合は、「<strong>ロック解除</strong>」をタップして、そのパックを一度だけ購入するか、すべてのパックが使える「すべての魚」を購入します。すると、魚がぱしゃんと水に飛び込みます。名前をつけても、最初の名前のままでもかまいません。',
    after: '水槽に入る魚は5匹まで。魚はウィジェットのサイズごとに別々なので、小・中・大の水槽にそれぞれ違う魚を入れられます。',
    namesTitle: 'ほかの言語での名前',
    namesIntro: (languages: number) =>
      `Companionsは${languages}の言語に翻訳されています。この魚たちは、アプリではそれぞれ次の名前で呼ばれています。`,
    languageHeader: '言語',
    others: 'ほかのパック',
  },

  styles: {
    title: '8種類の水槽スタイル',
    description: (styles: string) =>
      `水槽ウィジェット「Companions」で選べる水のスタイルは、${styles}。それぞれの見た目、似合う魚、水槽のスタイルの変え方を紹介します。`,
    kicker: (count: number) => `${count}種類のスタイル`,
    h1: 'ガラスは同じ、水はさまざま。',
    lead: 'スタイルで変わるのは、水と底の色です。ガラスとそのふち、光沢は変わらないので、小・中・大のどの水槽も、大きさが違うだけの同じ水槽に見えます。「水槽を編集」ページで水槽のスタイルを変えると、その水槽を表示しているすべてのウィジェットに反映されます。',
    tankLabel: (style: string) => `水槽のスタイル「${style}」、ウィジェットのサイズは中`,
    counter: (index: number, count: number) => `スタイル${index}（全${count}種類）`,
    blurbs: {
      minimal:
        'アプリが登場したときからある、青い水槽です。水面近くの淡い空色が、中ほどで明るいスカイブルーに落ち着き、底には白いもやがかかっています。明るく、すっきりしていて、ほとんどの魚がいちばんきれいに見えるスタイルです。',
      deepOcean:
        '光が差し込む水面近くはサファイア色。そこからネイビーへと沈み、底ではほとんど黒に近い藍色になります。クラゲはほのかに光り、サンゴ礁の魚はぱっと映えます。',
      pond: '水面は日差しを浴びた明るい緑で、深くなるにつれて木の葉のような緑に変わり、あたたかい色の砂の底に近づくと、ほんのりオリーブがかります。錦鯉やニジマス、池の生きものたちのためのスタイルです。',
      reed: '青みに寄せた涼しげな緑で、色の温度は「ミニマル」にいちばん近いスタイルです。底は落ち着いた薄茶色。この2つを切り替えると、別の水槽になったというより、光の加減が変わったように見えます。',
      blossom:
        '水面の淡い桜色が、下へいくほどやわらかなローズに落ち着きます。底には「ミニマル」と同じ白いもや。オレンジや赤の魚がぼやけないよう、ピンクは涼しげな色みに抑えてあります。',
      dark: '黒で統一したホーム画面のために、ホーム画面で出せるかぎりの黒にしたスタイルです。水面のニュートラルなチャコールが、底の下では完全な黒になります。ガラスの光沢も抑えてあるので、ダークなアイコンのあいだに静かになじみます。',
      pumpkin:
        '水面のやわらかなパンプキンオレンジが、下へいくほど深いオレンジに落ち着きます。底には白いもや。金魚や黄金の鯉が埋もれないよう、黄色の手前でとどめてあります。',
      lavender:
        '「ミニマル」や「桜」の色みを、ラベンダーの花の色に振ったスタイルです。この明るさのラベンダーとしては精一杯あざやかにしてあり、底には同じ白いもやがかかっています。ディスカスやアケボノハゼがよく似合います。',
    },
    howTitle: '水槽のスタイルを変えるには',
    stepsHtml: [
      'Companionsを開き、ページ上部の<strong>⋯</strong>ボタンをタップして、「<strong>この水槽を編集</strong>」を選びます。',
      '「水槽を編集」ページの上部にあるスタイルのメニューを開いて、水を選びます。選んだそばから、水槽が切り替わります。',
      '「<strong>閉じる</strong>」をタップします。水槽は自動で保存され、ホーム画面のウィジェットにも反映されます。',
    ],
    after:
      'スタイルは、アプリ全体ではなく水槽ごとに決まります。「マイ水槽」ページでは、「桜」の水槽（小）と「ダーク」の水槽（大）を並べて持っておき、ウィジェットに表示する水槽を切り替えられます。',
  },

  whatsNew: {
    title: '新機能とアップデート情報',
    description: (version: string, date: string) =>
      `水槽ウィジェットアプリ「Companions」のリリースノートを、バージョンごとに掲載しています。最新バージョンは${version}（${date}公開）です。`,
    kicker: '新機能',
    h1: 'すべてのバージョンを、順番に。',
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
      `Companionsは2人で作っています。届いたメールには、そのどちらかが必ず自分でお返事します。${email}宛てにお送りいただくか、アプリの「設定」にある「メール」ボタンをお使いください。ボタンからなら、必要な情報が自動で入力されます。`,
    contactName: 'Companionsサポート',
    beforeTitle: 'メールを送る前に',
    beforeHtml: (helpUrl: string) =>
      `ほとんどの疑問には、<a href="${helpUrl}">ヘルプページ</a>でお答えしています。特によくいただく質問はこちらです。`,
    includeTitle: 'メールに書いてほしいこと',
    include: [
      'お使いのiPhoneの機種とiOSのバージョン（「設定」›「一般」›「情報」で確認できます）。',
      'Companionsのバージョン（アプリの「設定」のいちばん下に表示されています）。',
      'どうなるはずだったのか、実際にはどうなったのか。スクリーンショットや画面収録があると、とても助かります。',
    ],
    purchasesTitle: '購入と返金',
    purchasesHtml: (reportUrl: string) =>
      `パックと「すべての魚」は、AppleがApp Storeを通じて販売しているため、返金もAppleが受け付けます。<a href="${reportUrl}" rel="noopener">reportaproblem.apple.com</a>にアクセスしてサインインし、対象の購入を選んでください。購入したパックがロックされたままのときは、アプリの「設定」を開いて「<strong>購入を復元</strong>」をタップしてください。その際、購入したときと同じApple Accountでサインインしていることを確認してください。`,
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
    h1: 'Companionsの記事を書く方へ',
    leadHtml: (email: string) =>
      `ここにある文章はすべて引用でき、画像もアプリの紹介記事に自由にお使いいただけます。それ以外のご用件は、${email}までメールでご連絡ください。`,
    sentenceTitle: 'ひとことで言うと',
    paragraphTitle: '一段落で言うと',
    paragraph: (c: { species: number; props: number; languages: number; developer: string }) =>
      `Companionsは、ホーム画面のウィジェットに小さな水槽を置ける無料のiPhoneアプリです。手描きの${c.species}種類から魚を選んで、1匹ずつ名前をつけます。魚たちは、iPhoneのロックを解除するたびに、それぞれの泳ぎ方、それぞれのペースで泳いでいます。ウィジェットの中でも、充電中のスタンバイでも、Macのデスクトップでも、Apple Watchでも。エサをあげる必要はなく、死んでしまうこともありません。エサやりは、気が向いたときに楽しめる遊びです。水槽の水のスタイルは8種類。${c.props}種類の飾りを自由に並べられ、隅には時刻、日付、天気、歩数目標、月のいずれかを表示できます。8種類の魚は最初からアプリに付いていて、ほかの魚は買い切りのパックで、または「すべての魚」でまとめて手に入ります。Companionsにはアカウントも、広告も、トラッキングもありません。${c.languages}の言語に翻訳されています。韓国で、${c.developer}とSheaが作っています。`,
    factsTitle: '基本情報',
    facts: {
      name: 'アプリ名',
      what: '概要',
      whatValue: 'iPhoneアプリとホーム画面ウィジェット。好きな魚を入れて一日じゅう眺められる、魚が泳ぐ水槽',
      price: '価格',
      priceValue: '無料。魚の追加パックは買い切りのアプリ内課金。「すべての魚」は、永久プランまたは月額プランですべてをロック解除',
      platforms: '対応プラットフォーム',
      platformsValue: (os: string) => `iPhoneとiPad（${os}以降）、Apple Watchアプリ、Mac（MacのiPhoneウィジェットを利用）`,
      fish: '魚',
      fishValue: (species: number, packs: number) => `${packs}パックに${species}種類。うち8種類はアプリに付属`,
      styles: '水槽のスタイル',
      props: '飾り',
      propsValue: (count: number) => `水槽の底に並べられる${count}種類の飾り`,
      complications: 'コンプリケーション',
      complicationsValue: '時刻、日付、天気、歩数目標、月の満ち欠けを水槽の隅に表示',
      languages: '対応言語',
      firstReleased: '初回リリース日',
      currentVersion: '現在のバージョン',
      currentVersionValue: (version: string, date: string) => `${version}（${date}）`,
      developer: '開発者',
      developerValue: (developer: string) => `${developer}（デザインとコード）とShea（アート）、韓国`,
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
    sections: [/*@SECTIONS@*/],

    website: {
      title: 'このWebサイト',
      countedHtml: (githubUrl: string, googleUrl: string) =>
        `<p>このWebサイトは、GitHub Pagesから配信される静的なページで構成されており、フォントと画像もこのサイト自体から配信されます。GitHubによるWebサーバのログの取り扱いについては、<a href="${githubUrl}" rel="noopener">GitHubのプライバシーステートメント</a>に記載されています。</p>
<p>訪問した人の数、どこから来たのか、どのページやボタンが使われているのかを知るために、このWebサイトはGoogleが運営するサービス「Google Analytics」を使用しています。記録されるのは、このサイトで開いたページ、押したリンクやボタン、リンク元のサイトと、ブラウザ、デバイスの種類と言語、およびインターネット接続から推定した国と都市（接続元のアドレスは保存されません）といった一般的な情報です。繰り返しの訪問が1人の訪問者として数えられるように、ランダムな識別子が、ブラウザの2つのCookie（<code>_ga</code>と、名前が<code>_ga_</code>で始まるもの）に最長2年間保存されます。この識別子は、お名前、アプリ、魚とは結び付けられず、これらの情報が広告に使われることは一切ありません。</p>
<p>ブラウザの時計がヨーロッパのタイムゾーンに設定されている場合、このWebサイトは最初に確認を行い、許可されないかぎりGoogleからは何も読み込みません。また、ブラウザがGlobal Privacy ControlまたはDo Not Trackの信号を送信している場合は、確認を行わずにオフのままにします。どこからアクセスしていても、この設定はここでいつでも変更でき、統計をオフにするとCookieも削除されます。Googleによるこれらの統計の取り扱いについては、<a href="${googleUrl}" rel="noopener">policies.google.com/privacy</a>のGoogleプライバシーポリシーをご覧ください。</p>`,
      uncountedHtml: (githubUrl: string) =>
        `<p>このWebサイトは、GitHub Pagesから配信される静的なページで構成されています。Cookieは設定せず、アクセス解析も行わず、サードパーティのコンテンツも一切埋め込んでいません。フォントと画像も、このサイト自体から配信されます。GitHubによるWebサーバのログの取り扱いについては、<a href="${githubUrl}" rel="noopener">GitHubのプライバシーステートメント</a>に記載されています。</p>`,
      statisticsHtml: (state: string) => `このブラウザでは、Webサイトの統計は${state}になっています。`,
      on: 'オン',
      off: 'オフ',
      turnOn: 'オンにする',
      turnOff: 'オフにする',
      updated: (date: string) => `このセクションはWebサイトのみに関するもので、最終更新日は${date}です。`,
    },

    changes: {
      title: '/*@CHANGES_TITLE@*/',
      html: `/*@CHANGES_HTML@*/`,
    },
    contact: {
      title: '/*@CONTACT_TITLE@*/',
      html: (email: string) => `/*@CONTACT_HTML@*/`,
    },
  },

  consent: {
    label: 'Webサイトの統計',
    html: (privacyUrl: string) =>
      `<strong>このWebサイトへの訪問を、数えてもよいですか？</strong>どのページやボタンが使われているかを知るために、Cookieを設定するGoogle Analyticsを使用します。広告に使うことは決してありません。<a href="${privacyUrl}">くわしいしくみ</a>`,
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
