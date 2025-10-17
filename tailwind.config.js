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
          subtle: 'var(--brand-subtle)'
        }
      }
    }
  },
  plugins: []
};
