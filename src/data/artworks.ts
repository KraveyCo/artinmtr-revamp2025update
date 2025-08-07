export interface Artwork {
  id: string;
  title: {
    en: string;
    tc: string;
  };
  artist: {
    en: string;
    tc: string;
  };
  line: string;
  station: string;
  year: number;
  description: {
    en: string;
    tc: string;
  };
  images: string[];
  featured?: boolean;
  isVideo?: boolean;
  videoUrl?: string;
}

export interface Station {
  id: string;
  name: {
    en: string;
    tc: string;
  };
  line: string;
}

export const mtrLines = [
  { id: 'island', name: { en: 'Island Line', tc: '港島線' }, color: '#0860A8' },
  { id: 'tsuenwan', name: { en: 'Tsuen Wan Line', tc: '荃灣線' }, color: '#FF0000' },
  { id: 'kwuntong', name: { en: 'Kwun Tong Line', tc: '觀塘線' }, color: '#00A040' },
  { id: 'tko', name: { en: 'Tseung Kwan O Line', tc: '將軍澳線' }, color: '#7D47BB' },
  { id: 'tungchung', name: { en: 'Tung Chung Line', tc: '東涌線' }, color: '#F4BD19' },
  { id: 'eastrail', name: { en: 'East Rail Line', tc: '東鐵線' }, color: '#5EB6E4' },
  { id: 'southisland', name: { en: 'South Island Line', tc: '南港島線' }, color: '#CBD300' }
];

export const stations: Station[] = [
  { id: 'central', name: { en: 'Central', tc: '中環' }, line: 'island' },
  { id: 'admiralty', name: { en: 'Admiralty', tc: '金鐘' }, line: 'island' },
  { id: 'wanchai', name: { en: 'Wan Chai', tc: '灣仔' }, line: 'island' },
  { id: 'causebay', name: { en: 'Causeway Bay', tc: '銅鑼灣' }, line: 'island' },
  { id: 'mongkok', name: { en: 'Mong Kok', tc: '旺角' }, line: 'kwuntong' },
  { id: 'princeedward', name: { en: 'Prince Edward', tc: '太子' }, line: 'kwuntong' },
  { id: 'tsuenwan', name: { en: 'Tsuen Wan', tc: '荃灣' }, line: 'tsuenwan' },
  { id: 'taikooshing', name: { en: 'Tai Koo Shing', tc: '太古城' }, line: 'island' },
  { id: 'northpoint', name: { en: 'North Point', tc: '北角' }, line: 'island' },
  { id: 'diamondhill', name: { en: 'Diamond Hill', tc: '鑽石山' }, line: 'kwuntong' },
  { id: 'hunghom', name: { en: 'Hung Hom', tc: '紅磡' }, line: 'eastrail' },
  { id: 'tkostation', name: { en: 'Tseung Kwan O', tc: '將軍澳' }, line: 'tko' },
  { id: 'oceanpark', name: { en: 'Ocean Park', tc: '海洋公園' }, line: 'southisland' },
  { id: 'quarrybay', name: { en: 'Quarry Bay', tc: '鰂魚涌' }, line: 'island' },
  { id: 'lamtin', name: { en: 'Lam Tin', tc: '藍田' }, line: 'kwuntong' },
  { id: 'tsingyi', name: { en: 'Tsing Yi', tc: '青衣' }, line: 'tungchung' },
  { id: 'tungchung', name: { en: 'Tung Chung', tc: '東涌' }, line: 'tungchung' },
  { id: 'lokmachau', name: { en: 'Lok Ma Chau', tc: '落馬洲' }, line: 'eastrail' }
];

export const artworks: Artwork[] = [
  {
    id: 'a1',
    title: {
      en: 'The Journey',
      tc: '旅程'
    },
    artist: {
      en: 'Danny Lee',
      tc: '李展輝'
    },
    line: 'island',
    station: 'central',
    year: 2018,
    description: {
      en: 'A large-scale installation at Central Station featuring flowing forms that represent the journey of commuters through Hong Kong\'s bustling transportation hub.',
      tc: '中環站的大型裝置藝術，以流動的形態代表乘客在香港繁忙交通樞紐中的旅程。'
    },
    images: [
      'https://images.pexels.com/photos/1234567/mtr-central-station-artwork-1.jpg',
      'https://images.pexels.com/photos/1234568/mtr-central-station-artwork-2.jpg',
      'https://images.pexels.com/photos/1234569/mtr-central-station-artwork-3.jpg',
      'https://images.pexels.com/photos/1234570/mtr-central-station-artwork-4.jpg',
      'https://images.pexels.com/photos/1234571/mtr-central-station-artwork-5.jpg'
    ],
    featured: true,
    isVideo: true,
    videoUrl: 'https://videos.pexels.com/video-files/mtr-central-journey-installation.mp4'
  },
  {
    id: 'a2',
    title: {
      en: 'Heritage Wall',
      tc: '文化牆'
    },
    artist: {
      en: 'Wong Mei Ling',
      tc: '黃美玲'
    },
    line: 'eastrail',
    station: 'hunghom',
    year: 2015,
    description: {
      en: 'A ceramic mosaic wall at Hung Hom Station celebrating Hong Kong\'s cultural heritage with traditional patterns and motifs that reflect the neighborhood\'s rich history.',
      tc: '紅磡站的陶瓷馬賽克牆，以傳統圖案和主題慶祝香港文化遺產，反映社區豐富的歷史。'
    },
    images: [
      'https://images.pexels.com/photos/1234572/mtr-hunghom-heritage-wall-1.jpg',
      'https://images.pexels.com/photos/1234573/mtr-hunghom-heritage-wall-2.jpg',
      'https://images.pexels.com/photos/1234574/mtr-hunghom-heritage-wall-3.jpg',
      'https://images.pexels.com/photos/1234575/mtr-hunghom-heritage-wall-4.jpg',
      'https://images.pexels.com/photos/1234576/mtr-hunghom-heritage-wall-5.jpg'
    ],
    featured: true
  },
  {
    id: 'a3',
    title: {
      en: 'Celestial Journey',
      tc: '天際旅程'
    },
    artist: {
      en: 'David Chan',
      tc: '陳大衛'
    },
    line: 'island',
    station: 'admiralty',
    year: 2019,
    description: {
      en: 'An immersive ceiling installation at Admiralty Station representing the journey through space and time, connecting the earthly experience with cosmic wonder.',
      tc: '金鐘站的身臨其境天花板裝置，代表穿越時空的旅程，將世俗體驗與宇宙奇觀連接起來。'
    },
    images: [
      'https://images.pexels.com/photos/1234577/mtr-admiralty-celestial-1.jpg',
      'https://images.pexels.com/photos/1234578/mtr-admiralty-celestial-2.jpg',
      'https://images.pexels.com/photos/1234579/mtr-admiralty-celestial-3.jpg',
      'https://images.pexels.com/photos/1234580/mtr-admiralty-celestial-4.jpg',
      'https://images.pexels.com/photos/1234581/mtr-admiralty-celestial-5.jpg'
    ],
    featured: true
  },
  {
    id: 'a4',
    title: {
      en: 'Urban Symphony',
      tc: '都市交響曲'
    },
    artist: {
      en: 'Sarah Wang',
      tc: '王莎拉'
    },
    line: 'kwuntong',
    station: 'diamondhill',
    year: 2017,
    description: {
      en: 'A vibrant mosaic wall at Diamond Hill Station depicting the sounds and rhythms of city life, rendered in dynamic colors and patterns.',
      tc: '鑽石山站充滿活力的馬賽克牆，以動態的色彩和圖案描繪城市生活的聲音和節奏。'
    },
    images: [
      'https://images.pexels.com/photos/1234582/mtr-diamondhill-symphony-1.jpg',
      'https://images.pexels.com/photos/1234583/mtr-diamondhill-symphony-2.jpg',
      'https://images.pexels.com/photos/1234584/mtr-diamondhill-symphony-3.jpg',
      'https://images.pexels.com/photos/1234585/mtr-diamondhill-symphony-4.jpg',
      'https://images.pexels.com/photos/1234586/mtr-diamondhill-symphony-5.jpg'
    ]
  },
  {
    id: 'a5',
    title: {
      en: 'Harbor Reflections',
      tc: '海港倒影'
    },
    artist: {
      en: 'Michael Zhang',
      tc: '張明'
    },
    line: 'southisland',
    station: 'admiralty',
    year: 2020,
    description: {
      en: 'A series of reflective panels at Admiralty Station that capture and transform the movement of passengers, inspired by the waters of Victoria Harbor.',
      tc: '金鐘站的一系列反光板，捕捉並轉化乘客的動態，靈感來自維多利亞港的水域。'
    },
    images: [
      'https://images.pexels.com/photos/1234587/mtr-admiralty-harbor-1.jpg',
      'https://images.pexels.com/photos/1234588/mtr-admiralty-harbor-2.jpg',
      'https://images.pexels.com/photos/1234589/mtr-admiralty-harbor-3.jpg',
      'https://images.pexels.com/photos/1234590/mtr-admiralty-harbor-4.jpg',
      'https://images.pexels.com/photos/1234591/mtr-admiralty-harbor-5.jpg'
    ]
  },
  {
    id: 'a6',
    title: {
      en: 'Light Trails',
      tc: '光跡軌道'
    },
    artist: {
      en: 'Sarah Chen',
      tc: '陳曉華'
    },
    line: 'southisland',
    station: 'oceanpark',
    year: 2022,
    description: {
      en: 'An immersive light installation at Ocean Park Station that creates dynamic patterns inspired by train movements and the surrounding marine environment.',
      tc: '海洋公園站的沉浸式燈光裝置，創造受列車移動和周邊海洋環境啟發的動態圖案。'
    },
    images: [
      'https://images.pexels.com/photos/1234592/mtr-oceanpark-light-1.jpg',
      'https://images.pexels.com/photos/1234593/mtr-oceanpark-light-2.jpg',
      'https://images.pexels.com/photos/1234594/mtr-oceanpark-light-3.jpg',
      'https://images.pexels.com/photos/1234595/mtr-oceanpark-light-4.jpg',
      'https://images.pexels.com/photos/1234596/mtr-oceanpark-light-5.jpg'
    ],
    featured: true
  },
  {
    id: 'a7',
    title: {
      en: 'Memory Lane',
      tc: '記憶長廊'
    },
    artist: {
      en: 'Michael Wong',
      tc: '黃志明'
    },
    line: 'island',
    station: 'causebay',
    year: 2021,
    description: {
      en: 'A nostalgic installation at Causeway Bay Station featuring historical photographs and memories of Hong Kong\'s railway heritage and urban development.',
      tc: '銅鑼灣站的懷舊裝置，展示香港鐵路遺產和城市發展的歷史照片和記憶。'
    },
    images: [
      'https://images.pexels.com/photos/1234597/mtr-causebay-memory-1.jpg',
      'https://images.pexels.com/photos/1234598/mtr-causebay-memory-2.jpg',
      'https://images.pexels.com/photos/1234599/mtr-causebay-memory-3.jpg',
      'https://images.pexels.com/photos/1234600/mtr-causebay-memory-4.jpg',
      'https://images.pexels.com/photos/1234601/mtr-causebay-memory-5.jpg'
    ],
    featured: false
  },
  {
    id: 'a8',
    title: {
      en: 'Digital Harmony',
      tc: '數碼和諧'
    },
    artist: {
      en: 'Lisa Zhang',
      tc: '張麗莎'
    },
    line: 'kwuntong',
    station: 'mongkok',
    year: 2023,
    description: {
      en: 'An interactive digital installation at Mong Kok Station that responds to passenger movement with cascading data patterns, creating harmony between technology and human interaction.',
      tc: '旺角站的互動式數字裝置，通過瀑布式的數據圖案對乘客移動做出反應，創造科技與人際互動的和諧。'
    },
    images: [
      'https://images.pexels.com/photos/1234602/mtr-mongkok-digital-1.jpg',
      'https://images.pexels.com/photos/1234603/mtr-mongkok-digital-2.jpg',
      'https://images.pexels.com/photos/1234604/mtr-mongkok-digital-3.jpg',
      'https://images.pexels.com/photos/1234605/mtr-mongkok-digital-4.jpg',
      'https://images.pexels.com/photos/1234606/mtr-mongkok-digital-5.jpg'
    ],
    featured: true
  },
  {
    id: 'a9',
    title: {
      en: 'Nature\'s Canvas',
      tc: '自然畫布'
    },
    artist: {
      en: 'David Lee',
      tc: '李志強'
    },
    line: 'tko',
    station: 'tkostation',
    year: 2022,
    description: {
      en: 'A large-scale installation at Tseung Kwan O Station that brings elements of nature into the urban environment, creating a peaceful contrast to the bustling city.',
      tc: '將軍澳站的大型裝置，將自然元素帶入城市環境，為繁忙的城市創造寧靜的對比。'
    },
    images: [
      'https://images.pexels.com/photos/1234607/mtr-tko-nature-1.jpg',
      'https://images.pexels.com/photos/1234608/mtr-tko-nature-2.jpg',
      'https://images.pexels.com/photos/1234609/mtr-tko-nature-3.jpg',
      'https://images.pexels.com/photos/1234610/mtr-tko-nature-4.jpg',
      'https://images.pexels.com/photos/1234611/mtr-tko-nature-5.jpg'
    ],
    featured: false
  },
  {
    id: 'a10',
    title: {
      en: 'Future City',
      tc: '未來城市'
    },
    artist: {
      en: 'Emily Tan',
      tc: '譚曉明'
    },
    line: 'kwuntong',
    station: 'lamtin',
    year: 2023,
    description: {
      en: 'A futuristic installation at Lam Tin Station that envisions the evolution of urban spaces and Hong Kong\'s transportation system.',
      tc: '藍田站的未來主義裝置，展望城市空間和香港交通系統的演變。'
    },
    images: [
      'https://images.pexels.com/photos/1234612/mtr-lamtin-future-1.jpg',
      'https://images.pexels.com/photos/1234613/mtr-lamtin-future-2.jpg',
      'https://images.pexels.com/photos/1234614/mtr-lamtin-future-3.jpg',
      'https://images.pexels.com/photos/1234615/mtr-lamtin-future-4.jpg',
      'https://images.pexels.com/photos/1234616/mtr-lamtin-future-5.jpg'
    ],
    featured: true
  },
  {
    id: 'a11',
    title: {
      en: 'Rhythmic Waves',
      tc: '韻律波浪'
    },
    artist: {
      en: 'Liu Wei',
      tc: '劉偉'
    },
    line: 'tungchung',
    station: 'tungchung',
    year: 2022,
    description: {
      en: 'A dynamic installation inspired by ocean waves, creating a sense of movement and flow through the station.',
      tc: '一個受海浪啟發的動態裝置，在站內創造出流動感和韻律感。'
    },
    images: [
      'https://images.pexels.com/photos/1234617/mtr-tungchung-rhythmic-1.jpg',
      'https://images.pexels.com/photos/1234618/mtr-tungchung-rhythmic-2.jpg',
      'https://images.pexels.com/photos/1234619/mtr-tungchung-rhythmic-3.jpg',
      'https://images.pexels.com/photos/1234620/mtr-tungchung-rhythmic-4.jpg',
      'https://images.pexels.com/photos/1234621/mtr-tungchung-rhythmic-5.jpg'
    ],
    featured: true
  },
  {
    id: 'a12',
    title: {
      en: 'Urban Poetry',
      tc: '都市詩篇'
    },
    artist: {
      en: 'Zhang Mei',
      tc: '張美'
    },
    line: 'kwuntong',
    station: 'mongkok',
    year: 2021,
    description: {
      en: 'A poetic interpretation of urban life through abstract patterns and flowing forms.',
      tc: '通過抽象圖案和流動形式，詩意地詮釋都市生活。'
    },
    images: [
      'https://images.pexels.com/photos/1234622/mtr-mongkok-poetry-1.jpg',
      'https://images.pexels.com/photos/1234623/mtr-mongkok-poetry-2.jpg',
      'https://images.pexels.com/photos/1234624/mtr-mongkok-poetry-3.jpg',
      'https://images.pexels.com/photos/1234625/mtr-mongkok-poetry-4.jpg',
      'https://images.pexels.com/photos/1234626/mtr-mongkok-poetry-5.jpg'
    ],
    featured: false
  },
  {
    id: 'a13',
    title: {
      en: 'Digital Harmony',
      tc: '數碼和諧'
    },
    artist: {
      en: 'Wang Chen',
      tc: '王晨'
    },
    line: 'island',
    station: 'central',
    year: 2023,
    description: {
      en: 'An interactive digital installation that creates harmony between technology and human interaction.',
      tc: '一個互動式數字裝置，創造科技與人際互動的和諧。'
    },
    images: [
      'https://images.pexels.com/photos/1234627/mtr-central-digital-1.jpg',
      'https://images.pexels.com/photos/1234628/mtr-central-digital-2.jpg',
      'https://images.pexels.com/photos/1234629/mtr-central-digital-3.jpg',
      'https://images.pexels.com/photos/1234630/mtr-central-digital-4.jpg',
      'https://images.pexels.com/photos/1234631/mtr-central-digital-5.jpg'
    ],
    featured: true,
    isVideo: true,
    videoUrl: 'https://videos.pexels.com/video-files/mtr-central-digital-harmony.mp4'
  },
  {
    id: 'a14',
    title: {
      en: 'Cultural Mosaic',
      tc: '文化馬賽克'
    },
    artist: {
      en: 'Lee Siu Ming',
      tc: '李小明'
    },
    line: 'eastrail',
    station: 'lokmachau',
    year: 2022,
    description: {
      en: 'A vibrant mosaic celebrating Hong Kong\'s diverse cultural heritage and traditions.',
      tc: '一個充滿活力的馬賽克，慶祝香港豐富的文化遺產和傳統。'
    },
    images: [
      'https://images.pexels.com/photos/1234632/mtr-lokmachau-cultural-1.jpg',
      'https://images.pexels.com/photos/1234633/mtr-lokmachau-cultural-2.jpg',
      'https://images.pexels.com/photos/1234634/mtr-lokmachau-cultural-3.jpg',
      'https://images.pexels.com/photos/1234635/mtr-lokmachau-cultural-4.jpg',
      'https://images.pexels.com/photos/1234636/mtr-lokmachau-cultural-5.jpg'
    ],
    featured: false
  },
  {
    id: 'a15',
    title: {
      en: 'Light Trails',
      tc: '光跡軌道'
    },
    artist: {
      en: 'Chen Wei Ming',
      tc: '陳偉明'
    },
    line: 'southisland',
    station: 'oceanpark',
    year: 2023,
    description: {
      en: 'An immersive light installation that creates dynamic patterns inspired by train movements.',
      tc: '一個沉浸式燈光裝置，創造受列車移動啟發的動態圖案。'
    },
    images: [
      'https://images.pexels.com/photos/1234637/mtr-oceanpark-light-1.jpg',
      'https://images.pexels.com/photos/1234638/mtr-oceanpark-light-2.jpg',
      'https://images.pexels.com/photos/1234639/mtr-oceanpark-light-3.jpg',
      'https://images.pexels.com/photos/1234640/mtr-oceanpark-light-4.jpg',
      'https://images.pexels.com/photos/1234641/mtr-oceanpark-light-5.jpg'
    ],
    featured: true
  },
  {
    id: 'a16',
    title: {
      en: 'Nature\'s Canvas',
      tc: '自然畫布'
    },
    artist: {
      en: 'Wong Mei Ling',
      tc: '黃美玲'
    },
    line: 'tko',
    station: 'tseungkwan',
    year: 2022,
    description: {
      en: 'A large-scale installation that brings elements of nature into the urban environment.',
      tc: '一個大型裝置，將自然元素帶入城市環境。'
    },
    images: [
      'https://images.pexels.com/photos/1234642/mtr-tseungkwan-nature-1.jpg',
      'https://images.pexels.com/photos/1234643/mtr-tseungkwan-nature-2.jpg',
      'https://images.pexels.com/photos/1234644/mtr-tseungkwan-nature-3.jpg',
      'https://images.pexels.com/photos/1234645/mtr-tseungkwan-nature-4.jpg',
      'https://images.pexels.com/photos/1234646/mtr-tseungkwan-nature-5.jpg'
    ],
    featured: false
  },
  {
    id: 'a17',
    title: {
      en: 'Urban Symphony',
      tc: '都市交響曲'
    },
    artist: {
      en: 'Zhang Wei',
      tc: '張偉'
    },
    line: 'tsuenwan',
    station: 'tsuenwan',
    year: 2023,
    description: {
      en: 'A musical installation that transforms the sounds of the city into a harmonious composition.',
      tc: '一個音樂裝置，將城市聲音轉化為和諧的樂章。'
    },
    images: [
      'https://images.pexels.com/photos/1234647/mtr-tsuenwan-symphony-1.jpg',
      'https://images.pexels.com/photos/1234648/mtr-tsuenwan-symphony-2.jpg',
      'https://images.pexels.com/photos/1234649/mtr-tsuenwan-symphony-3.jpg',
      'https://images.pexels.com/photos/1234650/mtr-tsuenwan-symphony-4.jpg',
      'https://images.pexels.com/photos/1234651/mtr-tsuenwan-symphony-5.jpg'
    ],
    featured: true
  },
  {
    id: 'a18',
    title: {
      en: 'Memory Lane',
      tc: '記憶長廊'
    },
    artist: {
      en: 'Liu Mei',
      tc: '劉美'
    },
    line: 'island',
    station: 'quarrybay',
    year: 2022,
    description: {
      en: 'A nostalgic installation featuring historical photographs and memories of Hong Kong\'s past.',
      tc: '一個懷舊裝置，展示香港歷史照片和過往記憶。'
    },
    images: [
      'https://images.pexels.com/photos/1234652/mtr-quarrybay-memory-1.jpg',
      'https://images.pexels.com/photos/1234653/mtr-quarrybay-memory-2.jpg',
      'https://images.pexels.com/photos/1234654/mtr-quarrybay-memory-3.jpg',
      'https://images.pexels.com/photos/1234655/mtr-quarrybay-memory-4.jpg',
      'https://images.pexels.com/photos/1234656/mtr-quarrybay-memory-5.jpg'
    ],
    featured: false
  },
  {
    id: 'a19',
    title: {
      en: 'Future City',
      tc: '未來城市'
    },
    artist: {
      en: 'David Wong',
      tc: '黃大衛'
    },
    line: 'kwuntong',
    station: 'lamtin',
    year: 2023,
    description: {
      en: 'A futuristic installation that envisions the evolution of urban spaces.',
      tc: '一個未來主義裝置，展望城市空間的演變。'
    },
    images: [
      'https://images.pexels.com/photos/1234657/mtr-lamtin-future-1.jpg',
      'https://images.pexels.com/photos/1234658/mtr-lamtin-future-2.jpg',
      'https://images.pexels.com/photos/1234659/mtr-lamtin-future-3.jpg',
      'https://images.pexels.com/photos/1234660/mtr-lamtin-future-4.jpg',
      'https://images.pexels.com/photos/1234661/mtr-lamtin-future-5.jpg'
    ],
    featured: true
  },
  {
    id: 'a20',
    title: {
      en: 'Harmony in Motion',
      tc: '動態和諧'
    },
    artist: {
      en: 'Sarah Chen',
      tc: '陳曉華'
    },
    line: 'tungchung',
    station: 'tsingyi',
    year: 2023,
    description: {
      en: 'A kinetic installation that explores the balance between movement and stillness.',
      tc: '一個動態裝置，探索動與靜之間的平衡。'
    },
    images: [
      'https://images.pexels.com/photos/1234662/mtr-tsingyi-harmony-1.jpg',
      'https://images.pexels.com/photos/1234663/mtr-tsingyi-harmony-2.jpg',
      'https://images.pexels.com/photos/1234664/mtr-tsingyi-harmony-3.jpg',
      'https://images.pexels.com/photos/1234665/mtr-tsingyi-harmony-4.jpg',
      'https://images.pexels.com/photos/1234666/mtr-tsingyi-harmony-5.jpg'
    ],
    featured: false
  }
];
