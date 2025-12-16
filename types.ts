export interface SiteConfig {
  title: string;
  url: string;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string; // Lucide icon name matching
  sites: SiteConfig[];
}

export type ViewState = 'home' | 'directory' | 'help' | 'safety' | 'privacy' | 'feedback' | 'terms';

export interface TenorMediaFormat {
  url: string;
  duration: number;
  preview: string;
  dims: number[];
  size: number;
}

export interface TenorGif {
  id: string;
  title: string;
  media_formats: {
    gif?: TenorMediaFormat;
    tinygif?: TenorMediaFormat;
    mp4?: TenorMediaFormat;
  };
  content_description: string;
  itemurl: string;
  hasaudio: boolean;
  flags: string[];
  bg_color: string;
  url: string;
}

export interface TenorResponse {
  results: TenorGif[];
  next: string;
}
