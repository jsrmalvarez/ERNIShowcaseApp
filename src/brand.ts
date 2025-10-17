export interface BrandConfig {
  name: string;
  tagline?: string;
  logoText?: string; // For simple text logo
  colors: {
    bg: string;
    fg: string;
    accent: string;
    subtle: string;
  };
}

export const brand: BrandConfig = {
  name: 'Showcase',
  tagline: 'Explore internal demos',
  logoText: 'Showcase',
  colors: {
    bg: '#0f1115',
    fg: '#ffffff',
    accent: '#3b82f6',
    subtle: '#1f2329'
  }
};

export function injectBrandCSSVariables(cfg: BrandConfig = brand) {
  const root = document.documentElement;
  root.style.setProperty('--brand-bg', cfg.colors.bg);
  root.style.setProperty('--brand-fg', cfg.colors.fg);
  root.style.setProperty('--brand-accent', cfg.colors.accent);
  root.style.setProperty('--brand-subtle', cfg.colors.subtle);
}
