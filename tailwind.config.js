/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: 'var(--brand-bg)',
          fg: 'var(--brand-fg)',
          accent: 'var(--brand-accent)',
          accent2: 'var(--brand-accent2)',
          card: 'var(--brand-card)',
          cardShadow: 'var(--brand-card-shadow)',
          headerBg: 'var(--brand-header-bg)',
          headerFg: 'var(--brand-header-fg)',
          link: 'var(--brand-link)',
          border: 'var(--brand-border)'
        }
      },
      fontFamily: {
        brand: ['var(--brand-font)', 'sans-serif']
      }
    }
  },
  plugins: []
};
