
export type DemoApp = {
  id: string;
  name: string;
  url: string;
  description?: string;
  icon?: string;
  tags: string[];
};

// Default demo applications for the showcase
export const defaultApps: DemoApp[] = [
  {
    id: '1',
    name: 'React Dashboard',
    url: 'https://react-dashboard-demo.netlify.app',
    description: 'A comprehensive dashboard built with React and Chart.js',
    icon: '📊',
    tags: ['react', 'dashboard', 'charts'],
  },
  {
    id: '2',
    name: 'Vue Portfolio',
    url: 'https://vue-portfolio-demo.netlify.app',
    description: 'A stunning portfolio website created with Vue.js',
    icon: '🎨',
    tags: ['vue', 'portfolio', 'design'],
  },
  {
    id: '3',
    name: 'Angular CRM',
    url: 'https://angular-crm-demo.netlify.app',
    description: 'Customer relationship management system using Angular',
    icon: '👥',
    tags: ['angular', 'crm', 'business'],
  },
  {
    id: '4',
    name: 'Next.js Blog',
    url: 'https://nextjs-blog-demo.netlify.app',
    description: 'A modern blog platform powered by Next.js and Markdown',
    icon: '📝',
    tags: ['nextjs', 'blog', 'markdown'],
  },
  {
    id: '5',
    name: 'Svelte Store',
    url: 'https://svelte-store-demo.netlify.app',
    description: 'E-commerce storefront built with Svelte and SvelteKit',
    icon: '🛒',
    tags: ['svelte', 'ecommerce', 'store'],
  },
  {
    id: '6',
    name: 'React Native Mobile',
    url: 'https://expo.dev/@demo/react-native-app',
    description: 'Cross-platform mobile app showcasing React Native capabilities',
    icon: '📱',
    tags: ['react-native', 'mobile', 'cross-platform'],
  },
];