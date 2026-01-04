
export interface Player {
  id: number;
  name: string;
  position: string;
  number: number;
  image: string;
}

export interface Match {
  id: number;
  matchday?: number;
  opponent: string;
  opponentLogo: string;
  date: string;
  time: string;
  venue: string;
  isHome: boolean;
  score?: {
    home: number;
    away: number;
  };
  status: 'upcoming' | 'finished';
}

export interface LeagueEntry {
  pos: number;
  team: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  gf: number;
  ga: number;
  gd: number;
  pts: number;
  form: ('W' | 'D' | 'L')[];
  logo?: string;
}

export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

export type Language = 'ar' | 'fr';

export interface Translations {
  [key: string]: {
    ar: string;
    fr: string;
  };
}
