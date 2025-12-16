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