import type { Dictionary } from './en.ts';

/**
 * Picks the particle that follows a name: josa('깃대돔', '은', '는') is '은',
 * josa('흰동가리', '은', '는') is '는'. Fish and pack names arrive as the app writes them,
 * so the choice is made from the name's last character.
 */
function josa(word: string, afterConsonant: string, afterVowel: string): string {
  const text = String(word).trim();
  const last = text.slice(-1);
  const code = last.charCodeAt(0);
  // A Hangul syllable ends in a consonant when (code - 0xAC00) % 28 is not 0.
  if (code >= 0xac00 && code <= 0xd7a3) return (code - 0xac00) % 28 ? afterConsonant : afterVowel;
  // A digit is read aloud: 영, 일, 삼, 육, 칠, 팔 end in a consonant ("민물 팩 2를").
  if (/[0-9]/.test(last)) return '013678'.includes(last) ? afterConsonant : afterVowel;
  // A name still in Latin letters: l, m, n and ng are heard as a final consonant.
  return /(?:[lmn]|ng)$/i.test(text) ? afterConsonant : afterVowel;
}

const dictionary: Dictionary = {
  /** How this language writes a few small things. */
  format: {
    listSeparator: ', ',
  },

  app: {
    /** The app's name on the App Store. */
    name: 'Companions - Widget Pets',
    tagline: '홈 화면에 사는 작은 어항.',
    subtitle: '내 물고기가 하루 종일 위젯 속을 헤엄쳐 다닙니다.',
    oneLiner:
      'Companions는 홈 화면 위젯에 살아 움직이는 작은 어항을 담아 주는 무료 iPhone 앱으로, 물고기를 골라 이름을 지어 주면 휴대폰을 볼 때마다 헤엄치는 모습을 만날 수 있습니다.',
    madeIn: '대한민국',
  },

  /** The link preview card. */
  og: {
    titleHtml: '홈&nbsp;화면에 사는 작은&nbsp;어항.',
    text: '내 물고기가 하루 종일 위젯 속을 헤엄쳐 다닙니다.',
    facts: 'App Store에서 무료 · iPhone, iPad, Mac, Apple Watch',
    imageAlt: (appName: string, tagline: string) => `${appName}: ${tagline}`,
  },

  /** Words that search engines read but visitors do not see (structured data). */
  ld: {
    jobTitle: '인디 앱 개발자',
    alternateNames: ['Companions 어항 위젯', 'Companions 물고기 위젯', 'Companions 아쿠아리움 위젯', 'Companions 아이폰 홈 화면 위젯'],
    offer:
      '무료로 다운로드하면 기본 물고기와 민물 팩이 들어 있습니다. 다른 물고기는 한 번만 구입하는 팩이나 ‘모든 물고기’ 잠금 해제로 만날 수 있습니다.',
    features: (c: { species: number; packs: number; props: number }) => [
      '소형, 중형, 대형 크기의 움직이는 어항 홈 화면 위젯',
      `${c.packs}개 팩에 담긴 물고기 ${c.species}종, 어항마다 최대 5마리`,
      `어항 스타일 8가지와 자유롭게 배치하는 장식 ${c.props}개`,
      '어항 한쪽 구석에 표시하는 시간, 날짜, 날씨, 걸음 목표, 달의 위상 컴플리케이션',
      '스탠바이, Apple Watch, Mac(iPhone 위젯) 지원',
      '코드나 이미지로 친구에게 어항 공유',
      '계정, 광고, 추적 없음',
    ],
  },

  common: {
    skipToContent: '본문 바로가기',
    breadcrumb: '현재 위치',
    updated: (date: string) => `${date} 업데이트`,
  },

  nav: {
    site: '사이트',
    homeLabel: 'Companions 홈',
    menu: '메뉴',
    /** The top bar: these share one narrow pill. */
    help: '도움말',
    guides: '가이드',
    fish: '물고기',
    styles: '스타일',
    whatsNew: '새로운 기능',
    support: '지원',
    press: '프레스 킷',
    download: '앱 받기',
    get: '받기',
  },

  footer: {
    facts: (os: string) => `무료 · ${os} 이상 · iPhone, iPad, Mac, Apple Watch`,
    columnSite: 'Companions',
    columnAbout: '정보',
    home: '홈',
    help: '도움말 및 자주 묻는 질문',
    guides: '가이드',
    packs: '물고기와 팩',
    styles: '어항 스타일',
    whatsNew: '새로운 기능',
    press: '프레스 킷',
    support: '지원',
    privacy: '개인정보 처리방침',
    email: '이메일 보내기',
    /** As at the foot of the app's Settings page. */
    madeWith: '대한민국에서 ♡을 담아 만들었습니다',
    legal: (year: number, owner: string) =>
      `© ${year} ${owner}. Apple, Apple 로고, iPhone, iPad, Mac, Apple Watch 및 App Store는 Apple Inc.의 상표입니다.`,
    language: '언어',
  },

  badge: {
    label: 'App Store에서 Companions 다운로드하기',
    alt: 'App Store에서 다운로드하기',
  },

  /** A live tank's description for screen readers. */
  tank: {
    label: (size: 'small' | 'medium' | 'large' | 'watch', style: string, count: number) => {
      const sizes = { small: '소형', medium: '중형', large: '대형', watch: 'Apple Watch' };
      return `${style} 스타일 ${sizes[size]} 어항, 물고기 ${count}마리`;
    },
    /** A fish that has been given a name: "버블(흰동가리)". */
    namedFish: (name: string, species: string) => `${name}(${species})`,
  },

  hero: {
    label: '소개',
    /** The headline, in two lines. */
    titleHtml: '홈&nbsp;화면에 사는<br />작은&nbsp;어항.',
    tankLabel: 'Companions 위젯: 고사리와 해면 사이를 헤엄치는 흰동가리, 깃대돔, 블루탱, 해마',
    phoneAlt: '왼쪽 위에 Companions 어항 위젯이 놓인 iPhone 홈 화면',
    scroll: '스크롤',
  },

  home: {
    title: (appName: string) => `${appName}: iPhone 홈 화면에 사는 작은 어항 위젯`,
    description: (species: number) =>
      `Companions는 무료 iPhone 어항 위젯입니다. 물고기 ${species}종 중에서 골라 이름을 지어 주면 홈 화면과 스탠바이, Mac, Apple Watch에서 헤엄치는 모습을 볼 수 있습니다. 먹이도, 청소도, 미안할 일도 없습니다.`,

    places: {
      kicker: '언제나 눈앞에',
      title: '눈길 닿는 곳에 삽니다.',
      lead: '위젯을 한 번만 추가해 두면 휴대폰을 볼 때마다 물고기가 그 자리에 있습니다. 같은 물고기, 같은 물 그대로이고, 앱을 열 필요도 없습니다.',
      homeScreen: {
        title: '홈 화면',
        text: '소형, 중형, 대형 가운데 원하는 크기로, 여덟 가지 스타일 가운데 마음에 드는 것으로 둘 수 있습니다. 어항은 하나만 두어도, 여러 개를 모아 두어도 좋고, 크기마다 물고기를 다르게 넣을 수도 있습니다.',
      },
      standby: {
        title: '스탠바이',
        text: '충전 중인 iPhone을 가로로 세워 두면, 어항이 시계 옆에서 밤새 함께해 줍니다.',
        /** The date under the clock in the little StandBy picture, as iOS writes it. */
        date: '1일 (화)',
      },
      watch: {
        title: 'Apple Watch',
        text: 'Companions의 Apple Watch 앱은 iPhone에서 동기화한 소형 어항을 손목 위에 보여 줍니다. 시계는 워치에 이미 있으니, 어항에는 물고기만 담았습니다.',
      },
      ipad: {
        title: 'iPad',
        text: 'iPad에서 단독으로 쓰는 온전한 Companions 앱입니다. 큰 화면에서 어항을 꾸미고 홈 화면에 위젯을 추가해 보세요. iPhone이 없어도 됩니다.',
      },
      mac: {
        title: 'Mac',
        text: '연속성 기능으로 iPhone 위젯을 Mac 데스크탑에 가져오거나, Mac 앱에서 바로 추가할 수 있습니다. 창과 창 사이에서 물고기가 곁을 지켜 줍니다.',
      },
    },

    fish: {
      kicker: (species: number, packs: number) => `${packs}개 팩에 담긴 ${species}종`,
      title: '물고기를 만나 보세요.',
      lead: '모든 어항은 열대어, 정어리, 복어와 함께 시작하고, 민물 팩은 무료로 들어 있습니다. 나머지는 한 번 구입해 계속 쓰는 팩으로, 또는 ‘모든 물고기’로 한꺼번에 만날 수 있습니다. 물고기마다 저만의 방식과 속도로 헤엄치고, 이따금 작은 공기 방울을 뽀글 내뿜기도 합니다.',
      more: '물고기와 팩 모두 보기',
    },

    customize: {
      kicker: '나만의 어항 꾸미기',
      title: '내 어항은 내 마음대로.',
      lead: '여덟 가지 물빛, 원하는 대로 배치하는 열아홉 개의 장식, 한쪽 구석의 쓸모 있는 정보, 그리고 여기에 어울리는 앱 아이콘까지.',
      props: {
        kicker: (count: number) => `장식 ${count}개`,
        title: '바닥을 꾸며 보세요',
        text: '고사리, 산호, 조개껍데기, 파인애플 집, 모아이까지. 원하는 자리로 끌어다 놓고, 크기를 바꾸고, 뒤집고, 실행 취소도 할 수 있습니다. 어항은 원하는 만큼 저장해 두고 바꿔 가며 쓸 수 있습니다.',
      },
      complications: {
        kicker: '컴플리케이션',
        title: '한쪽 구석에는 쓸모 있는 정보를',
        text: '시간, 날짜, 오늘의 날씨, 걸음 목표, 오늘 밤의 달을 물 위에 흰색으로 띄워 줍니다. ‘모든 물고기’에 포함되어 있습니다.',
      },
      icons: {
        kicker: '앱 아이콘 6가지',
        title: '어울리는 아이콘까지',
        /** The six app icons, by the names the app gives them in Settings. */
        names: { minimal: '미니멀', twilight: '황혼', pond: '연못', reed: '갈대', blossom: '벚꽃', dark: '다크' },
        text: (names: string) => `${names} 중에서 내 홈 화면에 어울리는 아이콘을 설정에서 골라 보세요.`,
      },
    },

    calm: {
      kicker: '손 갈 일 없는 힐링 펫',
      title: '먹이도, 청소도, 미안할 일도 없습니다.',
      lead: '늘 곁에 있어 주는 화사한 친구 몇 마리, 그게 전부입니다.',
      cards: [
        {
          title: '물고기는 절대 죽지 않습니다',
          text: '일주일, 한 달, 일 년을 떠나 있어도 괜찮습니다. 물고기는 두고 간 모습 그대로 헤엄치고 있습니다.',
        },
        {
          title: '계정도 광고도 없습니다',
          text: '가입할 것도, 따라붙는 추적도, 계속 즐기려면 꼭 사야 하는 것도 없습니다. 어항은 내 기기 안에만 머뭅니다.',
        },
        {
          title: '먹이는 주고 싶을 때만',
          text: '포크와 나이프 버튼을 누르고 먹이를 한 꼬집 집어 물에 뿌리면, 물고기들이 먹이를 쫓아다닙니다. 건너뛰어도 아무도 서운해하지 않습니다.',
        },
        {
          title: '먼저 인사를 건넵니다',
          text: '어떤 아침에는 앱을 열 때 물고기가 인사를 건넵니다. 유리를 톡 누르면 공기 방울이 뽀글뽀글 피어오릅니다. 이름은 누구의 이름을 따서 지어도 좋습니다.',
        },
      ],
    },

    questions: {
      kicker: '자주 묻는 질문',
      title: '물어보실 줄 알고 미리 답해 둡니다.',
      readFull: '전체 답변 읽기',
      all: '질문과 답변 모두 보기',
      /** The link after each answer in the structured data search engines read. */
      readMore: '더 보기',
    },

    guides: {
      kicker: '가이드',
      title: '어항을 더 알차게 즐기는 방법.',
      all: '가이드 모두 보기',
    },
  },

  /** The three widget sizes with the style picker, on the home page. */
  sizes: {
    kicker: '3가지 크기, 8가지 물빛',
    title: '어항 하나를 원하는 위젯 크기로.',
    lead: '위젯은 소형, 중형, 대형으로 준비되어 있고, 크기마다 물고기를 따로 둡니다. 스타일을 고르면 모든 어항이 그에 맞춰 바뀝니다.',
    pickerLabel: '어항 스타일',
    large: '대형',
    medium: '중형',
    small: '소형',
    /** `style` is the chosen style's name, already in bold; the page swaps it live, so the
        name is always followed by the word 스타일 and never by a particle. */
    captionHtml: (style: string) =>
      `${style} 스타일 어항을 세 가지 크기로 담았습니다. 스타일을 한 번만 바꾸면 홈 화면의 모든 위젯이 함께 바뀝니다.`,
  },

  packGrid: {
    comesWithApp: '앱에 기본 포함',
    pack: '팩',
  },

  styleRow: {
    label: (style: string) => `${style} 어항 스타일`,
  },

  help: {
    title: '도움말 및 자주 묻는 질문',
    description:
      'Companions 어항 위젯에 관해 자주 묻는 질문과 답변입니다. 홈 화면에 위젯 추가하기, 물고기와 팩, 어항 스타일, 컴플리케이션, 스탠바이, Apple Watch, Mac, 구입, 개인정보 보호를 다룹니다.',
    kicker: '도움말',
    h1: '궁금한 점에 답해 드립니다.',
    /** `email` is the support address, already a link. */
    leadHtml: (email: string) =>
      `Companions에 대해 많이 묻는 질문을 한곳에 모았습니다. 찾는 답이 없다면 ${email} 주소로 이메일을 보내 주세요. 사람이 직접 답해 드립니다.`,
    categoriesLabel: '카테고리',
    categories: {
      'getting-started': '시작하기',
      widgets: '위젯',
      'fish-and-packs': '물고기와 팩',
      'tanks-and-styles': '어항, 스타일, 장식',
      complications: '컴플리케이션',
      'other-devices': '스탠바이, Apple Watch, Mac, iPad',
      'privacy-and-purchases': '구입 및 개인정보 보호',
      troubleshooting: '뭔가 이상해 보일 때',
    },
    fullAnswer: '전체 답변',
    related: '관련 항목',
    /** What kind of page a related link leads to. */
    kindQuestion: '질문',
    kindGuide: '가이드',
    kindPage: '페이지',
    stuckTitle: '그래도 해결되지 않는다면',
    /** `email` is the support address, already a link; `helpUrl` is the help index. */
    stuckHtml: (email: string, helpUrl: string) =>
      `iPhone 모델과 iOS 버전을 적어 ${email} 주소로 이메일을 보내 주세요. 저희가 해결해 드리겠습니다. <a href="${helpUrl}">모든 질문 목록</a>으로 돌아갈 수도 있습니다.`,
  },

  guides: {
    title: '어항 위젯 사용 가이드',
    description:
      'Companions 어항 위젯을 차근차근 알려 드리는 가이드입니다. iPhone 홈 화면, 스탠바이, Apple Watch, Mac에 위젯을 추가하는 방법부터 어항 꾸미기, 컴플리케이션, 먹이 주기, 공유까지 담았습니다.',
    kicker: '가이드',
    h1: '어항을 더 알차게 즐기는 방법.',
    lead: '조금 긴 읽을거리입니다. 위젯이 어떻게 작동하는지, 여러 기기에 어떻게 설정하는지, 그리고 알아 두면 좋은 소소한 것들을 담았습니다.',
    by: (author: string) => `글: ${author}`,
    onThisPage: '목차',
    more: '다른 가이드',
  },

  packs: {
    title: '물고기 종류와 팩 한눈에 보기',
    description: (species: number, free: number) =>
      `Companions 어항 위젯의 물고기 ${species}종을 팩별로 모두 소개합니다. 무료로 제공되는 ${free}종, 팩마다 들어 있는 물고기, 한 번만 구입하는 팩과 ‘모든 물고기’의 이용 방법을 알려 드립니다.`,
    kicker: (species: number, packs: number) => `${species}종 · ${packs}개 팩`,
    h1: '물고기도, 팩도 빠짐없이.',
    lead: (free: number) =>
      `Companions에는 물고기 ${free}종이 기본으로 들어 있습니다. 모든 어항이 처음부터 함께하는 3종과 민물 팩의 5종입니다. 나머지 팩은 앱에서 한 번 구입하면 계속 쓸 수 있습니다. ‘모든 물고기’는 앞으로 추가될 팩까지 모든 팩을 한 번에 잠금 해제하며, 어항 컴플리케이션도 함께 열어 줍니다.`,
    /** The name of the list of packs, for search engines. */
    listName: 'Companions의 물고기 팩',
    howTitle: '팩 이용 방법',
    howHtml: [
      '팩은 App Store를 통해 현지 통화로 한 번만 결제하는 일회성 구입 항목입니다. iPhone에서 구입하면 같은 Apple 계정을 쓰는 iPad에서도 내 것이 되고, 새 기기에서는 설정의 ‘구입 항목 복원’으로 다시 불러올 수 있습니다. 만료되는 것은 없으며, 어항에 넣어 둔 것을 도로 가져가는 일도 없습니다.',
      '<strong>모든 물고기</strong>는 두 가지 방식으로 이용할 수 있습니다. 한 번 결제하는 평생 잠금 해제, 그리고 원하는 동안만 이용하는 월간 구독입니다. 어느 쪽이든 모든 팩과 앞으로 추가될 모든 팩, 그리고 컴플리케이션(어항 한쪽 구석에 띄우는 시간, 날짜, 날씨, 걸음 수, 달)이 열립니다. 월간 구독이 끝나더라도 이미 추가한 물고기는 계속 헤엄칩니다. 해당 팩에서 새 물고기를 추가하는 것만 구독을 갱신할 때까지 기다리게 됩니다.',
      '가격은 앱의 설정에서 현지 통화로 확인할 수 있습니다.',
    ],
  },

  /** One pack's page. */
  pack: {
    /** `fish` is the pack's fish names, already joined as a list. */
    title: (pack: string, fish: string) => `${pack}: ${fish}`,
    description: (c: { tagline: string; pack: string; count: number; fish: string; free: boolean }) =>
      `${c.tagline} Companions 어항 위젯의 ${c.pack}에는 ${c.fish}까지 물고기 ${c.count}종이 들어 있습니다. ${c.free ? '앱에 기본으로 포함되어 무료입니다.' : '한 번만 구입하면 되는 앱 내 구입 항목이며, ‘모든 물고기’에도 포함됩니다.'}`,
    kickerFree: '앱에 기본 포함',
    kickerPaid: '물고기 팩',
    tankLabel: (style: string, pack: string, fish: string) => `${style} 스타일 어항 속 ${pack}: ${fish}`,
    tankCaption: (pack: string, style: string) => `${style} 스타일 어항에 담은 ${pack}, 중형 위젯 크기입니다.`,
    fishAlt: (fish: string) => `Companions 속 ${fish} 그림`,
    /**
     * A sentence or two about one fish: how it moves (`swim`) and, when `scale` is not 1,
     * how big it is drawn beside a standard fish. The name takes 은 or 는 by its ending.
     */
    fishText: (fish: string, swim: 'swimmer' | 'floater' | 'creeper' | 'crawler', scale: number) => {
      const how = {
        swimmer: '물 중간쯤에서 살짝 오르내리며 경쾌하게 미끄러지듯 헤엄칩니다.',
        floater: '헤엄친다기보다 떠다닙니다. 물고기가 있을 만한 곳이면 어디든 머물며 천천히 흘러 다닙니다.',
        creeper: '바닥에 붙어 조금씩 기어갑니다. 움직이는 줄도 모를 만큼 느리고, 가는 방향으로 몸이 살짝 기웁니다.',
        crawler: '바닥을 종종걸음으로 걸어 다니며, 다리를 움직일 때마다 몸이 살짝 위아래로 흔들립니다.',
      }[swim];
      const size =
        scale > 1
          ? ` 표준 크기 물고기보다 ${Math.round((scale - 1) * 100)}% 크게 그려져 있습니다.`
          : scale < 1
            ? ' 표준 크기 물고기보다 살짝 작게 그려져 있습니다.'
            : '';
      return `${fish}${josa(fish, '은', '는')} ${how}${size}`;
    },
    howTitle: '이 물고기들을 추가하는 방법',
    step1Html: 'Companions를 열고 어항 아래 트레이 끝에 있는 <strong>+</strong>를 누르세요.',
    step2Html: (pack: string) => `목록에서 <strong>${pack}</strong>${josa(pack, '을', '를')} 찾아 물고기를 누르세요.`,
    step3FreeHtml: '물고기가 첨벙 하고 물속으로 들어옵니다. 이름을 새로 지어 주거나, 원래 이름을 그대로 두세요.',
    step3PaidHtml:
      '팩이 잠겨 있다면 <strong>잠금 해제</strong>를 누르고 팩을 한 번 구입하거나, 모든 팩이 열리는 ‘모든 물고기’를 구입하세요. 그러면 물고기가 첨벙 하고 물속으로 들어옵니다. 이름을 새로 지어 주거나, 원래 이름을 그대로 두세요.',
    after:
      '어항 하나에는 물고기를 다섯 마리까지 넣을 수 있고, 위젯 크기마다 물고기를 따로 두기 때문에 소형, 중형, 대형 어항을 저마다 다르게 채울 수 있습니다.',
    namesTitle: '다른 언어로 된 이름',
    namesIntro: (languages: number) =>
      `Companions는 ${languages}개 언어로 번역되어 있습니다. 앱에서는 이 물고기들을 다음과 같은 이름으로 부릅니다.`,
    languageHeader: '언어',
    others: '다른 팩',
  },

  styles: {
    title: '어항 스타일 8가지',
    /** `styles` is the styles' names, already joined as a list. */
    description: (styles: string) =>
      `Companions 어항 위젯에 담을 수 있는 모든 물빛: ${styles}. 스타일마다 어떤 모습인지, 어떤 물고기가 어울리는지, 어항 스타일은 어떻게 바꾸는지 알려 드립니다.`,
    kicker: (count: number) => `스타일 ${count}가지`,
    h1: '같은 유리, 다른 물빛.',
    lead: '스타일은 물과 바닥의 색을 바꿉니다. 유리와 테두리, 반짝이는 하이라이트는 그대로여서 소형, 중형, 대형 어항이 크기만 다른 같은 어항으로 보입니다. ‘어항 편집’ 페이지에서 어항의 스타일을 바꾸면 그 어항을 보여 주는 모든 위젯이 함께 바뀝니다.',
    tankLabel: (style: string) => `${style} 어항 스타일, 중형 위젯 크기`,
    counter: (index: number, count: number) => `스타일 ${index}/${count}`,
    blurbs: {
      minimal:
        '앱이 처음 나왔을 때부터 함께한 파란 어항입니다. 위쪽의 옅은 푸른빛이 가운데로 내려오며 밝은 하늘색으로 자리 잡고, 그 아래로 하얀 안개가 깔립니다. 밝고 깨끗해서 대부분의 물고기가 가장 예뻐 보이는 스타일입니다.',
      deepOcean:
        '빛이 스며드는 위쪽은 사파이어빛이고, 아래로 갈수록 남색을 지나 바닥에서는 검정에 가까운 짙은 쪽빛으로 가라앉습니다. 해파리는 은은하게 빛나고, 산호초 물고기는 한층 또렷해 보입니다.',
      pond: '수면의 햇살 머금은 초록이 나뭇잎 같은 초록으로 깊어지다가, 따뜻한 모래 바닥에 닿으며 살짝 올리브빛을 띱니다. 비단잉어와 송어, 그리고 연못 생물들을 위해 만든 스타일입니다.',
      reed: '청록에 가까운 서늘한 초록으로, 색 온도로 보면 ‘미니멀’과 가장 가까운 사촌입니다. 바닥은 차분한 황갈색입니다. 두 스타일을 오가면 다른 어항이라기보다 빛이 달라진 것처럼 느껴집니다.',
      blossom:
        '수면의 옅은 벚꽃 분홍이 부드러운 장밋빛으로 내려앉고, 그 아래에는 ‘미니멀’과 같은 하얀 안개가 깔립니다. 주황색과 빨간색 물고기가 묻히지 않도록 분홍 중에서도 차가운 쪽으로 맞췄습니다.',
      dark: '온통 검은 화면 구성을 위해, 홈 화면이 허락하는 한 가장 검게 만들었습니다. 수면의 무채색 차콜이 바닥 아래에서는 완전한 검정으로 떨어지고, 유리의 하이라이트도 낮춰서 어두운 아이콘들 사이에 조용히 어우러집니다.',
      pumpkin:
        '수면의 부드러운 호박빛 주황이 더 짙은 주황으로 내려앉고, 그 아래에는 하얀 안개가 깔립니다. 금붕어와 황금잉어가 여전히 돋보이도록 노란빛까지는 가지 않았습니다.',
      lavender:
        '‘미니멀’과 ‘벚꽃’의 색조를 라벤더꽃 쪽으로 돌린 스타일입니다. 이만큼 밝은 라벤더색이 낼 수 있는 가장 선명한 빛깔 아래로, 같은 하얀 안개가 깔립니다. 디스커스와 다트피시가 잘 어울립니다.',
    },
    howTitle: '어항 스타일 바꾸는 방법',
    stepsHtml: [
      'Companions를 열고 페이지 위쪽의 <strong>⋯</strong> 버튼을 누른 다음 <strong>이 어항 편집</strong>을 누르세요.',
      '‘어항 편집’ 페이지 위쪽의 스타일 메뉴를 열고 원하는 물빛을 고르세요. 손끝에서 바로 어항이 바뀝니다.',
      '<strong>닫기</strong>를 누르세요. 어항은 알아서 저장되고, 홈 화면의 위젯도 그에 맞게 바뀝니다.',
    ],
    after:
      '스타일은 앱 전체가 아니라 어항마다 따로 정해집니다. ‘나의 어항’ 페이지에 ‘벚꽃’ 소형 어항과 ‘다크’ 대형 어항을 나란히 두고, 위젯에 보여 줄 어항을 바꿔 가며 쓸 수 있습니다.',
  },

  whatsNew: {
    title: '새로운 기능과 업데이트 내역',
    /** `date` is the release date, already written out in the reader's language. */
    description: (version: string, date: string) =>
      `Companions 어항 위젯 앱의 업데이트 내역을 버전별로 정리했습니다. 현재 버전은 ${date}에 출시된 ${version}입니다.`,
    kicker: '새로운 기능',
    h1: '모든 버전을 순서대로.',
    lead: (version: string, date: string) =>
      `현재 버전은 ${date}에 출시된 Companions ${version}입니다. 업데이트는 App Store를 통해 제공됩니다.`,
    /** A release's heading in the list: "4.5: 어항마다 다른 물고기". */
    heading: (version: string, title: string) => `${version}: ${title}`,
    /** A release's own page title. */
    entryTitle: (version: string, title: string) => `Companions ${version}: ${title}`,
    versionKicker: (version: string) => `버전 ${version}`,
    all: '모든 버전 보기',
  },

  support: {
    title: '지원 및 문의',
    description: (email: string) =>
      `Companions 어항 위젯을 쓰다가 도움이 필요하다면 자주 쓰이는 해결 방법을 확인하거나, ${email} 주소로 개발자에게 직접 문의해 주세요.`,
    kicker: '지원',
    h1: '저희가 해결해 드리겠습니다.',
    /** `email` is the support address, already a link. */
    leadHtml: (email: string) =>
      `Companions는 두 사람이 만들고 있으며, 모든 이메일에 저희 중 한 사람이 직접 답장합니다. ${email} 주소로 이메일을 보내 주시거나 앱 설정의 이메일 버튼을 이용해 주세요. 버튼을 이용하면 필요한 정보가 알아서 채워집니다.`,
    /** The page's name for search engines. */
    contactName: 'Companions 지원',
    beforeTitle: '문의하기 전에',
    beforeHtml: (helpUrl: string) =>
      `대부분의 질문은 <a href="${helpUrl}">도움말 페이지</a>에서 답을 찾을 수 있습니다. 가장 자주 받는 질문은 다음과 같습니다.`,
    includeTitle: '함께 적어 주시면 좋은 내용',
    include: [
      'iPhone 모델과 iOS 버전. 설정 › 일반 › 정보에서 확인할 수 있습니다.',
      'Companions 버전. 앱의 설정 맨 아래에 표시되어 있습니다.',
      '기대한 동작과 실제로 일어난 일. 스크린샷이나 화면 기록이 있으면 큰 도움이 됩니다.',
    ],
    purchasesTitle: '구입 및 환불',
    /** `reportUrl` is Apple's refund page, reportaproblem.apple.com. */
    purchasesHtml: (reportUrl: string) =>
      `팩과 ‘모든 물고기’는 App Store를 통해 Apple이 판매하므로 환불도 Apple을 통해 진행됩니다. <a href="${reportUrl}" rel="noopener">reportaproblem.apple.com</a>에 접속해 로그인한 다음 해당 구입 항목을 선택하세요. 구입한 팩이 잠긴 것으로 표시된다면 앱의 설정을 열고 <strong>구입 항목 복원</strong>을 누르세요. 이때 팩을 구입한 Apple 계정으로 로그인되어 있는지 확인해 주세요.`,
    privacyTitle: '개인정보 보호',
    privacyHtml: (privacyUrl: string) =>
      `Companions는 어항을 기기 안에만 보관하며 개인정보를 수집하지 않습니다. 자세한 내용은 <a href="${privacyUrl}">개인정보 처리방침</a>에서 확인할 수 있습니다.`,
    wishTitle: '보고 싶은 것이 있다면',
    wish: '물고기든, 장식이든, 스타일이든, 위젯이 살았으면 하는 곳이든 무엇이든 알려 주세요. 지금의 팩 가운데 여럿이 이메일 한 통에서 시작되었습니다.',
  },

  press: {
    title: '프레스 킷',
    description:
      'iPhone 홈 화면 어항 위젯 Companions를 글로 소개하려는 분들을 위해 기본 정보, 소개 글, 아이콘, 스크린샷을 모았습니다.',
    kicker: '프레스 킷',
    h1: 'Companions를 소개하려는 분들께',
    /** `email` is the support address, already a link. */
    leadHtml: (email: string) =>
      `이 페이지의 모든 내용은 앱을 소개하는 글에 자유롭게 인용하실 수 있고, 이미지도 자유롭게 사용하실 수 있습니다. 그 밖의 문의는 ${email} 주소로 이메일을 보내 주세요.`,
    sentenceTitle: '한 문장으로',
    paragraphTitle: '한 문단으로',
    paragraph: (c: { species: number; props: number; languages: number; developer: string }) =>
      `Companions는 홈 화면 위젯 안에 작은 어항을 담아 두는 무료 iPhone 앱입니다. 손으로 그린 물고기 ${c.species}종 가운데 마음에 드는 물고기를 골라 하나하나 이름을 지어 주면, 휴대폰 잠금을 풀 때마다 저마다의 방식과 속도로 헤엄치는 모습을 볼 수 있습니다. 위젯에서도, 충전 중인 스탠바이에서도, Mac 데스크탑과 Apple Watch에서도 마찬가지입니다. 먹이를 줄 필요도 없고 죽는 일도 없습니다. 먹이 주기는 하고 싶을 때 즐기는 놀이일 뿐입니다. 어항은 8가지 물빛 스타일에 장식 ${c.props}개를 배치해 꾸밀 수 있고, 한쪽 구석에 시간, 날짜, 날씨, 걸음 목표, 달을 띄울 수 있습니다. 물고기 8종은 앱에 기본으로 들어 있고, 나머지는 한 번 구입하는 팩으로, 또는 ‘모든 물고기’로 한꺼번에 만날 수 있습니다. Companions에는 계정도, 광고도, 추적도 없으며 ${c.languages}개 언어로 번역되어 있습니다. ${c.developer}, Shea 두 사람이 대한민국에서 만들고 있습니다.`,
    factsTitle: '기본 정보',
    facts: {
      name: '이름',
      what: '소개',
      whatValue: 'iPhone 앱이자 홈 화면 위젯. 물고기를 채워 넣고 하루 종일 바라보는 움직이는 어항',
      price: '가격',
      priceValue: '무료. 물고기 팩은 일회성 앱 내 구입이며, ‘모든 물고기’는 평생 구입 또는 월간 구독으로 전체를 잠금 해제',
      platforms: '플랫폼',
      platformsValue: (os: string) => `iPhone 및 iPad(${os} 이상), Apple Watch 앱, Mac(iPhone 위젯을 Mac에 표시)`,
      fish: '물고기',
      fishValue: (species: number, packs: number) => `${packs}개 팩에 ${species}종, 그중 8종은 앱에 기본 포함`,
      styles: '어항 스타일',
      props: '장식',
      propsValue: (count: number) => `바닥에 배치하는 장식 ${count}개`,
      complications: '컴플리케이션',
      complicationsValue: '어항 한쪽 구석에 띄우는 시간, 날짜, 날씨, 걸음 목표, 달의 위상',
      languages: '언어',
      firstReleased: '첫 출시',
      currentVersion: '현재 버전',
      currentVersionValue: (version: string, date: string) => `${version}(${date})`,
      developer: '개발자',
      developerValue: (developer: string) => `${developer}(디자인 및 코드), Shea(아트), 대한민국`,
      appStore: 'App Store',
      contact: '문의',
    },
    iconTitle: '아이콘',
    iconText: '1024픽셀 크기의 App Store 아이콘입니다. 색을 바꾸거나 다른 모양에 넣지 말아 주세요.',
    iconAlt: 'Companions 앱 아이콘: 옅은 푸른 물속의 금붕어 꼬리',
    screenshotsTitle: '스크린샷',
    screenshotsText: 'App Store 스크린샷을 순서대로 모았습니다. 클릭하면 원본 크기 파일이 열립니다.',
    screenshotAlt: (index: number) => `Companions App Store 스크린샷 ${index}`,
    downloadTitle: '다운로드',
  },

  privacy: {
    title: '개인정보 처리방침',
    description:
      'Companions는 어떠한 개인정보도 수집하거나 판매, 공유하지 않습니다. 어항은 기기 안에만 남으며, 외부로 보내는 것은 언제든지 끌 수 있는 익명 사용 통계뿐입니다.',
    kicker: '개인정보 처리방침',
    h1: '내 어항 속 일은 나만 압니다.',
    /** `date` is already written out in the reader's language. */
    meta: (date: string) => `최종 업데이트: ${date}. 앱의 설정에서 볼 수 있는 처리방침과 같은 내용입니다.`,

    /**
     * The app's own policy, section by section, in the app's Korean wording word for word;
     * only the tags (paragraphs, lists, bold lead-ins, links) are added.
     */
    sections: [
      {
        title: '간단히 말하면',
        html: `<p>Companions는 어떠한 개인정보도 수집하거나 판매, 공유하지 않습니다. 만들어야 할 계정도, 광고도, 그 어떤 종류의 추적도 없으며, 앱이 어항에 대해 알고 있는 모든 것은 기기 안에만 남습니다. Companions가 외부로 보내는 것은 앱의 어떤 부분이 사용되는지 알기 위한 익명 사용 통계뿐이며, 설정에서 언제든지 끌 수 있습니다.</p>`,
      },
      {
        title: 'Companions가 저장하는 정보',
        html: `<p>Companions가 저장하는 것은 어항 그 자체뿐입니다:</p>
<ul>
<li>어항에 있는 물고기와 각 물고기의 종</li>
<li>각 물고기에 지어 준 이름</li>
<li>같은 종의 물고기 두 마리를 서로 구분하기 위한, 물고기별 무작위 식별자</li>
</ul>
<p>이름은 입력한 그대로 저장됩니다. 친구나 가족의 이름을 물고기에 붙였다면, 그 이름도 다른 모든 정보와 마찬가지로 기기에만 보관되며 다른 어디에도 저장되지 않습니다.</p>`,
      },
      {
        title: '저장 위치',
        html: `<p>어항은 기기 안의 저장 공간에 저장되며, 이 공간은 위젯이 물고기를 표시할 수 있도록 Companions 앱과 홈 화면 위젯이 함께 사용합니다. Companions는 이 데이터를 어디에도 업로드하지 않습니다.</p>
<p>iCloud 백업이나 컴퓨터로 기기를 백업하는 경우, Apple의 백업에 다른 앱들의 데이터와 함께 Companions의 데이터가 포함될 수 있습니다. 이러한 백업은 iOS 설정에서 직접 관리하며, 이 방침이 아닌 Apple의 개인정보 보호 정책이 적용됩니다.</p>`,
      },
      {
        title: '위젯',
        html: `<p>Companions 위젯은 어항의 물고기를 홈 화면이나 잠금 화면에 보여 줍니다. 다른 위젯과 마찬가지로, 화면을 볼 수 있는 사람이라면 누구나 볼 수 있습니다. VoiceOver를 사용하는 경우 위젯이 물고기의 이름을 소리로 읽어 주기도 합니다. 위젯은 기기의 공유 저장 공간에서 어항을 읽어 올 뿐, 어디로도 아무것도 전송하지 않습니다.</p>`,
      },
      {
        title: '사용 통계',
        html: `<p>Companions의 어떤 부분이 사용되는지 알기 위해, 앱은 Google이 운영하는 서비스인 Firebase용 Google 애널리틱스에 익명 사용 통계를 보냅니다. 앱 열기, 화면 표시, 물고기 추가, 어항 스타일 선택, 팩 잠금 해제와 같은 이벤트와 함께 기기 모델, iOS 버전과 언어, 앱 버전, 그리고 인터넷 연결로부터 추정한 국가와 지역(연결 주소는 저장되지 않습니다) 같은 일반적인 정보가 전송됩니다. 앱을 설치할 때마다 무작위 식별자가 부여되어 반복 사용이 한 사람으로 집계됩니다. 이 식별자는 사용자 본인이나 Apple 계정, 물고기와 그 이름과 연결되지 않으며, Companions는 광고 식별자를 사용하거나 추적 권한을 요청하지 않습니다.</p>
<p>설정의 ‘사용 통계 공유’ 스위치로 언제든지 끌 수 있으며, 그 뒤로는 아무것도 전송되지 않습니다. Google이 이 통계를 처리하는 방식은 <a href="https://policies.google.com/privacy" rel="noopener">policies.google.com/privacy</a>의 Google 개인정보처리방침에 설명되어 있습니다.</p>`,
      },
      {
        title: '권한',
        html: `<p>Companions는 세 가지 시스템 권한을 요청하며, 각 권한은 그것이 필요한 기능을 처음 선택할 때 요청됩니다. 어떤 권한도 허용하지 않아도 앱은 사용할 수 있습니다.</p>
<ul>
<li><strong>사진 보관함에 사진 추가:</strong> 어항의 QR 코드를 처음 사진 앱에 저장할 때 iOS가 요청합니다. 이 권한으로 앱은 이미지를 추가할 수만 있고 이미 있는 사진은 볼 수 없습니다.</li>
<li><strong>건강 앱에서 걸음 수 읽기:</strong> ‘걸음 목표’ 컴플리케이션을 처음 선택할 때 iOS가 요청합니다. 앱은 어항에 표시하기 위해 오늘의 걸음 수만 읽으며, 건강 앱에 기록하지 않습니다. 걸음 수와 설정한 목표는 위젯이 표시할 수 있도록 기기의 공유 저장 공간에만 보관됩니다.</li>
<li><strong>앱 사용 중 위치:</strong> ‘달의 위상’ 또는 ‘날씨’ 컴플리케이션을 선택한 뒤 설정의 ‘위치 정보’를 탭하면 iOS가 요청합니다. 앱은 현재 위치에서 보이는 달의 모양을 알기 위해(북반구인지 남반구인지만 기억합니다), 그리고 Apple 날씨 서비스에서 현재 위치의 날씨를 가져오기 위해 위치를 사용합니다. 이 서비스는 예보에 필요한 대략적인 위치만 받습니다. Companions는 위치를 저장하지 않으며 다른 곳으로 보내지 않습니다.</li>
</ul>
<p>카메라, 마이크, 연락처, 캘린더, 알림에 접근하지 않으며, 다른 앱이나 웹 사이트에서의 활동을 추적하기 위한 권한도 요청하지 않습니다.</p>`,
      },
      {
        title: '타사 서비스',
        html: `<p>위에서 설명한 Firebase용 Google 애널리틱스를 제외하면, Companions에는 타사 소프트웨어 개발 키트(SDK)가 포함되어 있지 않습니다. 충돌 보고도, 광고도 없습니다.</p>
<p>앱의 다운로드와 업데이트, 구입한 팩, 그리고 직접 남기는 평가나 리뷰는 App Store가 처리합니다. Companions는 결제 정보를 절대 볼 수 없습니다. 이러한 상호작용에는 Apple의 개인정보 보호 정책이 적용됩니다.</p>`,
      },
      {
        title: '직접 공유하는 정보',
        html: `<p>설정의 몇 가지 버튼은 다른 앱으로 연결되며, 직접 누를 때에만 동작합니다:</p>
<ul>
<li><strong>이메일</strong>을 누르면 저에게 보내는 새 메시지가 담긴 메일 앱이 열립니다. 작성한 내용은 사용 중인 메일 서비스를 통해 전송되며, 저는 보내 주신 내용만 받습니다.</li>
<li><strong>Companions 공유</strong>를 누르면 앱 링크가 담긴 iOS 공유 시트가 열립니다. Companions는 누구에게 공유했는지 알 수 없습니다.</li>
<li><strong>Companions 평가</strong>를 누르면 Apple의 평가 요청 창이 표시됩니다. 평가는 Apple이 처리하며, Companions는 그 내용을 받지 않습니다.</li>
<li>메인 페이지 메뉴의 <strong>이 어항 공유</strong>를 누르면 어항의 물과 장식만 담긴 코드가 만들어지고(사용자나 물고기에 관한 정보는 담기지 않습니다), 이를 보낼 수 있도록 공유 시트가 열립니다.</li>
</ul>`,
      },
      {
        title: '데이터 관리',
        html: `<p>어항의 모든 것은 직접 관리할 수 있습니다:</p>
<ul>
<li>어항 아래의 트레이에서 언제든지 물고기의 이름을 바꾸거나 제거할 수 있습니다</li>
<li>물고기를 제거하면 기기에서 삭제됩니다</li>
<li>설정의 ‘사용 통계 공유’ 스위치로 사용 통계를 끌 수 있습니다</li>
<li>Companions 앱을 삭제하면 어항과 앱이 기기에 저장한 모든 정보가 삭제됩니다(이전에 만든 기기 백업에는 새 백업으로 교체되기 전까지 복사본이 남아 있을 수 있습니다)</li>
</ul>`,
      },
      {
        title: '어린이',
        html: `<p>Companions는 나이를 불문하고 누구의 개인정보도 수집하지 않습니다. 위에서 설명한 사용 통계는 익명이며, 이름이나 앱에 입력한 내용, 어린이나 다른 누군가를 식별할 수 있는 정보는 절대 포함되지 않습니다.</p>`,
      },
    ],

    /** The one section the app's policy does not have: what this website itself does. */
    website: {
      title: '이 웹 사이트',
      /** Shown while the website counts visits with Google Analytics. */
      countedHtml: (githubUrl: string, googleUrl: string) =>
        `<p>이 웹 사이트는 GitHub Pages가 제공하는 정적 페이지로 이루어져 있으며, 글꼴과 이미지는 사이트 자체에서 제공됩니다. GitHub가 웹 서버 로그를 처리하는 방식은 <a href="${githubUrl}" rel="noopener">GitHub 개인정보 처리방침</a>에 설명되어 있습니다.</p>
<p>얼마나 많은 사람이 방문하는지, 어디에서 오는지, 어떤 페이지와 버튼이 사용되는지 알기 위해 이 웹 사이트는 Google이 운영하는 서비스인 Google Analytics를 사용합니다. 이 서비스는 여기에서 연 페이지와 누른 링크 및 버튼, 이곳으로 연결해 준 사이트, 그리고 일반적인 정보를 기록합니다. 일반적인 정보란 브라우저, 기기 유형과 언어, 그리고 인터넷 연결로부터 추정한 국가와 도시(연결 주소는 저장되지 않습니다)를 말합니다. 반복 방문이 방문자 한 명으로 집계되도록, 브라우저의 쿠키 두 개(<code>_ga</code>와 이름이 <code>_ga_</code>로 시작하는 쿠키)에 무작위 식별자를 최대 2년 동안 보관합니다. 이 식별자는 이름이나 앱, 물고기와 연결되지 않으며, 이 가운데 어떤 것도 광고에 사용되지 않습니다.</p>
<p>브라우저의 시계가 유럽의 시간대로 설정되어 있으면 웹 사이트가 먼저 동의를 구하며, 허용하지 않는 한 Google에서 아무것도 불러오지 않습니다. 브라우저가 Global Privacy Control 또는 Do Not Track(추적 안 함) 신호를 보내는 경우에도, 묻지 않고 꺼진 상태로 유지됩니다. 어디에 있든 여기에서 언제든지 선택을 바꿀 수 있으며, 통계를 끄면 쿠키도 함께 삭제됩니다. Google이 이 통계를 처리하는 방식은 <a href="${googleUrl}" rel="noopener">policies.google.com/privacy</a>의 Google 개인정보처리방침에 설명되어 있습니다.</p>`,
      /** Shown while the website counts nothing. */
      uncountedHtml: (githubUrl: string) =>
        `<p>이 웹 사이트는 GitHub Pages가 제공하는 정적 페이지로 이루어져 있습니다. 쿠키를 설정하지 않고, 분석 도구를 실행하지 않으며, 타사의 어떤 것도 삽입하지 않습니다. 글꼴과 이미지는 사이트 자체에서 제공됩니다. GitHub가 웹 서버 로그를 처리하는 방식은 <a href="${githubUrl}" rel="noopener">GitHub 개인정보 처리방침</a>에 설명되어 있습니다.</p>`,
      /** The switch under the section. `state` is `on` or `off` below, already in bold:
          "웹 사이트 통계가 켜져 있습니다" / "꺼져 있습니다". */
      statisticsHtml: (state: string) => `이 브라우저에서는 웹 사이트 통계가 ${state} 있습니다.`,
      on: '켜져',
      off: '꺼져',
      turnOn: '켜기',
      turnOff: '끄기',
      updated: (date: string) => `이 항목은 웹 사이트에만 해당하며, ${date}에 마지막으로 업데이트되었습니다.`,
    },

    changes: {
      title: '처리방침 변경',
      html: `<p>Companions가 데이터를 처리하는 방식이 바뀌는 경우, 앱 안의 이 방침을 업데이트하고 상단의 날짜를 갱신합니다. 최신 버전은 언제든지 설정에서 확인할 수 있습니다.</p>`,
    },
    contact: {
      title: '문의',
      /** `email` is the support address, already a link. */
      html: (email: string) =>
        `<p>이 방침이나 Companions의 데이터 처리 방식에 대해 궁금한 점이 있으면 ${email} 주소로 이메일을 보내 주시거나 설정의 이메일 버튼을 이용해 주세요.</p>`,
    },
  },

  /** The bar that asks visitors in Europe before their visit is counted. */
  consent: {
    label: '웹 사이트 통계',
    /** `privacyUrl` is the privacy page's "This website" section. */
    html: (privacyUrl: string) =>
      `<strong>이 웹 사이트에서 방문을 집계해도 되겠습니까?</strong> 어떤 페이지와 버튼이 사용되는지 알기 위해, 쿠키를 설정하는 Google Analytics를 사용하게 됩니다. 광고에는 절대 사용하지 않습니다. <a href="${privacyUrl}">작동 방식 보기</a>`,
    no: '허용 안 함',
    allow: '허용',
  },

  notFound: {
    title: '페이지를 찾을 수 없습니다',
    description: '찾으시는 페이지가 헤엄쳐 가 버렸습니다. 도움말이나 홈 페이지에서 다시 찾아보세요.',
    h1: '그 페이지는 헤엄쳐 가 버렸습니다.',
    lead: '이 주소에는 아무것도 없습니다. 그래도 물고기들은 무사합니다.',
    home: '처음으로 돌아가기',
    help: '도움말 보기',
  },
};

export default dictionary;
