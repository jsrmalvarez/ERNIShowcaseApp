// Brand configuration - Easily customize your app's theme
export const brand = {
  // App Information
  name: 'ERNI Showcase',
  tagline: 'Discover our innovative demo applications',
  
  // Visual Identity
  logo: process.env.NODE_ENV === 'production' 
    ? '/ERNIShowcaseApp/assets/ERNI_logo_color-2048x532.png'
    : '/assets/ERNI_logo_color-2048x532.png',
  favicon: process.env.NODE_ENV === 'production' 
    ? '/ERNIShowcaseApp/assets/favicon.png'
    : '/assets/favicon.png',
  
  // Color Palette (CSS custom properties will be set based on these)
  colors: {
    primary: '#0070f3',      // Main brand color
    secondary: '#1a1a1a',    // Secondary text/elements
    accent: '#00d2ff',       // Accent color for highlights
    neutral: '#f5f5f5',      // Background/neutral tone
    success: '#10b981',      // Success state
    warning: '#f59e0b',      // Warning state
    error: '#ef4444',        // Error state
    white: '#ffffff',
    black: '#000000',
  },
  
  // Typography
  fonts: {
    primary: "'Inter', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif",
    heading: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
  },
  
  // Layout
  layout: {
    maxWidth: '1200px',
    gridGap: '1.5rem',
    borderRadius: '0.75rem',
  },
} as const;

export type DemoApp = {
  id: string;
  name: string;
  url: string;
  description?: string;
  icon?: string;
};

// Apply CSS custom properties for easy theming
export const applyCSSVariables = (): void => {
  const root = document.documentElement;
  
  // Apply color variables
  (Object.entries(brand.colors) as [string, string][]).forEach(([key, value]) => {
    root.style.setProperty(`--color-${key}`, value);
  });
  
  // Apply font variables
  (Object.entries(brand.fonts) as [string, string][]).forEach(([key, value]) => {
    root.style.setProperty(`--font-${key}`, value);
  });
  
  // Apply layout variables
  (Object.entries(brand.layout) as [string, string][]).forEach(([key, value]) => {
    root.style.setProperty(`--layout-${key}`, value);
  });
};