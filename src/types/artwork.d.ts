
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
  year: number;
  images: string[];
  line: string;
  station: string;
  featured?: boolean;
  isVideo?: boolean;
}
