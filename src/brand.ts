export interface BrandConfig {
  name: string;
  tagline?: string;
  logoText?: string;
  fontFamily: string;
  colors: {
    bg: string;
    fg: string;
    accent: string;
    accent2: string;
    card: string;
    cardShadow: string;
    headerBg: string;
    headerFg: string;
    link: string;
    border: string;
  };
}

export const brand: BrandConfig = {
  name: 'ERNI Showcase',
  tagline: 'Explore ERNI demo apps',
  logoText: 'ERNI',
  fontFamily: 'Montserrat, Open Sans, Arial, sans-serif',
  colors: {
    bg: '#F5F7FA',
    fg: '#222B45',
    accent: '#003366',
    accent2: '#009FE3',
    card: '#FFFFFF',
    cardShadow: 'rgba(0, 51, 102, 0.08)',
    headerBg: '#003366',
    headerFg: '#FFFFFF',
    link: '#009FE3',
    border: '#E4E9F2'
  }
};

export function injectBrandCSSVariables(cfg: BrandConfig = brand) {
  const root = document.documentElement;
  root.style.setProperty('--brand-bg', cfg.colors.bg);
  root.style.setProperty('--brand-fg', cfg.colors.fg);
  root.style.setProperty('--brand-accent', cfg.colors.accent);
  root.style.setProperty('--brand-accent2', cfg.colors.accent2);
  root.style.setProperty('--brand-card', cfg.colors.card);
  root.style.setProperty('--brand-card-shadow', cfg.colors.cardShadow);
  root.style.setProperty('--brand-header-bg', cfg.colors.headerBg);
  root.style.setProperty('--brand-header-fg', cfg.colors.headerFg);
  root.style.setProperty('--brand-link', cfg.colors.link);
  root.style.setProperty('--brand-border', cfg.colors.border);
  root.style.setProperty('--brand-font', cfg.fontFamily);
}
