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
  
  // Initial demo apps (these will be loaded into the store)
  initialApps: [
    {
      id: '1',
      name: 'React Dashboard',
      url: 'https://react-dashboard-demo.netlify.app',
      description: 'A comprehensive dashboard built with React and Chart.js',
      icon: '📊',
    },
    {
      id: '2',
      name: 'Vue Portfolio',
      url: 'https://vue-portfolio-demo.netlify.app',
      description: 'A stunning portfolio website created with Vue.js',
      icon: '🎨',
    },
    {
      id: '3',
      name: 'Angular CRM',
      url: 'https://angular-crm-demo.netlify.app',
      description: 'Customer relationship management system using Angular',
      icon: '👥',
    },
    {
      id: '4',
      name: 'Next.js Blog',
      url: 'https://nextjs-blog-demo.netlify.app',
      description: 'A modern blog platform powered by Next.js and Markdown',
      icon: '📝',
    },
    {
      id: '5',
      name: 'Svelte Store',
      url: 'https://svelte-store-demo.netlify.app',
      description: 'E-commerce storefront built with Svelte and SvelteKit',
      icon: '🛒',
    },
    {
      id: '6',
      name: 'React Native Mobile',
      url: 'https://expo.dev/@demo/react-native-app',
      description: 'Cross-platform mobile app showcasing React Native capabilities',
      icon: '📱',
    },
  ] as DemoApp[],
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