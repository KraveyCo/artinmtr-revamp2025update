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
  description: {
    en: string;
    tc: string;
  };
  images: string[];
  videoUrl?: string;
  isVideo: boolean;
  line: string;
  station: string;
  year: string;
  featured: boolean;
}

export interface MTRLine {
  id: string;
  name: {
    en: string;
    tc: string;
  };
  color: string;
}

export interface Station {
  id: string;
  name: {
    en: string;
    tc: string;
  };
  line: string;
} 