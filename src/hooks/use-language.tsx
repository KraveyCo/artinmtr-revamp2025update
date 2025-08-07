import React, { createContext, useContext, useState, ReactNode } from 'react';

// Translation data
const translations = {
  en: {
    'Art in MTR': 'Art in MTR',
    'Home': 'Home',
    'Gallery': 'Gallery',
    'About': 'About',
    'Search': 'Search',
    'Art in MTR Program': 'Art in MTR Program',
    'Featured Artworks': 'Featured Artworks',
    'FEATURED ARTWORK': 'FEATURED ARTWORK',
    'Discover': 'Discover',
    'Browse by Line': 'Browse by Line',
    'Browse by Station': 'Browse by Station',
    'Search Artworks': 'Search Artworks',
    'Island Line': 'Island Line',
    'Tsuen Wan Line': 'Tsuen Wan Line',
    'Kwun Tong Line': 'Kwun Tong Line',
    'Tseung Kwan O Line': 'Tseung Kwan O Line',
    'Tung Chung Line': 'Tung Chung Line',
    'East Rail Line': 'East Rail Line',
    'South Island Line': 'South Island Line',
    'Back to Gallery': 'Back to Gallery',
    'Artist': 'Artist',
    'Location': 'Location',
    'Year': 'Year',
    'Description': 'Description',
    'Learn More': 'Learn More',
    'Message from the CEO': 'Message from the CEO',
    'Completion Date': 'Completion Date',
    'Welcome to Art in MTR, a pioneering initiative that transforms Hong Kong\'s metro stations into vibrant galleries. Since its inception, this program has been dedicated to making art accessible to millions of daily commuters, enriching their journey with cultural experiences.': 'Welcome to Art in MTR, a pioneering initiative that transforms Hong Kong\'s metro stations into vibrant galleries. Since its inception, this program has been dedicated to making art accessible to millions of daily commuters, enriching their journey with cultural experiences.',
    'Our collection features over 60 permanent art installations across various MTR stations, showcasing works from both local and international artists. These pieces reflect Hong Kong\'s unique cultural heritage, contemporary life, and the dynamic spirit of our city.': 'Our collection features over 60 permanent art installations across various MTR stations, showcasing works from both local and international artists. These pieces reflect Hong Kong\'s unique cultural heritage, contemporary life, and the dynamic spirit of our city.',
    'Through this digital platform, we invite you to explore these artistic treasures, learn about the artists behind them, and discover the stories that make each installation unique. Whether you\'re a daily commuter or an art enthusiast, there\'s always something new to discover in Hong Kong\'s underground art gallery.': 'Through this digital platform, we invite you to explore these artistic treasures, learn about the artists behind them, and discover the stories that make each installation unique. Whether you\'re a daily commuter or an art enthusiast, there\'s always something new to discover in Hong Kong\'s underground art gallery.',
    'Explore the art in Hong Kong\'s MTR stations – a unique underground gallery showcasing local and international artists. Each piece connects culture, history and daily commuter life.': 'Explore the art in Hong Kong\'s MTR stations – a unique underground gallery showcasing local and international artists. Each piece connects culture, history and daily commuter life.',
    '© 2023 Art in MTR. All rights reserved.': '© 2023 Art in MTR. All rights reserved.',
    'Privacy Policy': 'Privacy Policy',
    'Terms of Service': 'Terms of Service',
    'Contact Us': 'Contact Us',
    'Follow Us': 'Follow Us',
    'Facebook': 'Facebook',
    'Instagram': 'Instagram',
    'Twitter': 'Twitter',
    'Quick Links': 'Quick Links',
    'Contact': 'Contact',
    'MTR Corporation Limited': 'MTR Corporation Limited',
    'MTR Headquarters Building': 'MTR Headquarters Building',
    'Telford Plaza, Kowloon Bay': 'Telford Plaza, Kowloon Bay',
    'Hong Kong': 'Hong Kong',
    'Apply Filters': 'Apply Filters',
    'Clear Filters': 'Clear Filters',
    'Back to Home': 'Back to Home'
  },
  tc: {
    'Art in MTR': '港鐵藝術',
    'Home': '主頁',
    'Gallery': '藝廊',
    'About': '關於',
    'Search': '搜尋',
    'Art in MTR Program': '港鐵藝術計劃',
    'Featured Artworks': '精選作品',
    'FEATURED ARTWORK': '精選藝術品',
    'Discover': '發現',
    'Browse by Line': '按路線瀏覽',
    'Browse by Station': '按車站瀏覽',
    'Search Artworks': '搜尋藝術品',
    'Island Line': '港島線',
    'Tsuen Wan Line': '荃灣線',
    'Kwun Tong Line': '觀塘線',
    'Tseung Kwan O Line': '將軍澳線',
    'Tung Chung Line': '東涌線',
    'East Rail Line': '東鐵線',
    'South Island Line': '南港島線',
    'Back to Gallery': '返回藝廊',
    'Artist': '藝術家',
    'Location': '位置',
    'Year': '年份',
    'Description': '描述',
    'Learn More': '了解更多',
    'Message from the CEO': '行政總裁的話',
    'Completion Date': '完成日期',
    'Welcome to Art in MTR, a pioneering initiative that transforms Hong Kong\'s metro stations into vibrant galleries. Since its inception, this program has been dedicated to making art accessible to millions of daily commuters, enriching their journey with cultural experiences.': '歡迎來到港鐵藝術，這是一個將香港地鐵站轉變為充滿活力的藝廊的先驅計劃。自成立以來，該計劃一直致力於讓數百萬日常通勤者接觸藝術，豐富他們的旅程，增添文化體驗。',
    'Our collection features over 60 permanent art installations across various MTR stations, showcasing works from both local and international artists. These pieces reflect Hong Kong\'s unique cultural heritage, contemporary life, and the dynamic spirit of our city.': '我們的收藏包括在各種港鐵站內超過60個永久藝術裝置，展示本地和國際藝術家的作品。這些作品反映了香港獨特的文化遺產、當代生活和城市的活力精神。',
    'Through this digital platform, we invite you to explore these artistic treasures, learn about the artists behind them, and discover the stories that make each installation unique. Whether you\'re a daily commuter or an art enthusiast, there\'s always something new to discover in Hong Kong\'s underground art gallery.': '通過這個數碼平台，我們邀請您探索這些藝術寶藏，了解背後的藝術家，並發現使每個裝置獨特的故事。無論您是日常通勤者還是藝術愛好者，在香港的地下藝廊中總有新事物等待發現。',
    'Explore the art in Hong Kong\'s MTR stations – a unique underground gallery showcasing local and international artists. Each piece connects culture, history and daily commuter life.': '探索香港地鐵站內的藝術——這是一個獨特的地下藝廊，展示著本地和國際藝術家的作品。每件作品都連接著文化、歷史和日常通勤生活。',
    '© 2023 Art in MTR. All rights reserved.': '© 2023 港鐵藝術。保留所有權利。',
    'Privacy Policy': '私隱政策',
    'Terms of Service': '服務條款',
    'Contact Us': '聯絡我們',
    'Follow Us': '關注我們',
    'Facebook': 'Facebook',
    'Instagram': 'Instagram',
    'Twitter': 'Twitter',
    'Quick Links': '快速連結',
    'Contact': '聯絡',
    'MTR Corporation Limited': '香港鐵路有限公司',
    'MTR Headquarters Building': '港鐵總部大樓',
    'Telford Plaza, Kowloon Bay': '德福廣場，觀塘',
    'Hong Kong': '香港',
    'Apply Filters': '套用篩選',
    'Clear Filters': '清除篩選',
    'Back to Home': '返回主頁'
  }
};

// Context type
type LanguageContextType = {
  currentLanguage: 'en' | 'tc';
  toggleLanguage: () => void;
  t: (key: string) => string;
};

// Create context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Provider component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'tc'>('en');

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === 'en' ? 'tc' : 'en');
  };

  const t = (key: string): string => {
    return translations[currentLanguage][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook for using the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
