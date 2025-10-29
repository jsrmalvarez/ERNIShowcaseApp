# ERNI Showcase App

A React + TypeScript showcase application for displaying demo applications with a clean, minimalist design and easy customization.

## 🚀 Features

- **Responsive Grid Layout**: Displays demo apps in a responsive grid (2-6 columns based on screen size)
- **Admin Mode**: Add, edit, and remove applications without backend requirements
- **State Management**: Uses Zustand for efficient state management
- **Local Storage**: Optional persistence using browser localStorage
- **Accessibility**: Full keyboard navigation and screen reader support
- **GitHub Pages Ready**: Configured for easy deployment to GitHub Pages
- **Easy Theming**: Single `brand.ts` file for complete customization

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Zustand** for state management
- **React Router** for navigation
- **Tailwind CSS** for styling
- **Webpack 5** for bundling (no Vite complexity)

## 📦 Installation & Development

### Prerequisites
- Node.js 16+ and npm

### Setup
```bash
# Clone the repository
git clone https://github.com/jsrmalvarez/ERNIShowcaseApp.git
cd ERNIShowcaseApp

# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start at `http://localhost:3000` with hot reload enabled.

### Building for Production
```bash
# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 🎨 Customization & Theming

All branding and theming is centralized in `src/brand.ts`. You can easily customize:

### Brand Information
```typescript
export const brand = {
  name: 'Your Company Showcase',
  tagline: 'Discover our innovative applications',
  logo: '/path/to/your/logo.png',
  // ...
}
```

### Color Palette
```typescript
colors: {
  primary: '#your-primary-color',
  secondary: '#your-secondary-color',
  accent: '#your-accent-color',
  // ...
}
```

### Default Applications
```typescript
initialApps: [
  {
    id: '1',
    name: 'Your Demo App',
    url: 'https://your-demo-url.com',
    description: 'Description of your demo',
    icon: '🚀',
  },
  // ...
]
```

### Typography
```typescript
fonts: {
  primary: "'Your-Font', 'Fallback', sans-serif",
  heading: "'Your-Heading-Font', sans-serif",
}
```

## 📱 Usage

### Public View
- Browse demo applications in a responsive grid
- Click any card to open the application in a new tab
- Fully accessible with keyboard navigation

### Admin Mode
- Click the "Admin" button in the header to enter admin mode
- Add new applications using the form
- Edit existing applications by clicking the edit button on any card
- Delete applications with confirmation
- Reset to default applications
- All changes are saved to localStorage

### Data Management
- **In-Memory Storage**: All changes are stored in browser localStorage
- **No Backend Required**: Perfect for static hosting
- **Import/Export**: Easy to extend with JSON import/export functionality

## 🚀 Deployment

### GitHub Pages
The app is pre-configured for GitHub Pages deployment:

1. Update the `homepage` field in `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/your-repo-name"
   ```

2. Update the `publicPath` in `webpack.config.js`:
   ```javascript
   publicPath: '/your-repo-name/',
   ```

3. Update the router basename in `src/App.tsx`:
   ```typescript
   <Router basename="/your-repo-name">
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

### Other Hosting Platforms
For other static hosting platforms (Netlify, Vercel, etc.):
1. Set `publicPath: '/'` in webpack.config.js
2. Set `basename="/"` in the Router
3. Build and upload the `dist` folder

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── AppCard.tsx     # Individual app display card
│   ├── AppForm.tsx     # Add/edit application form
│   ├── AppGrid.tsx     # Responsive grid layout
│   └── Header.tsx      # Main navigation header
├── pages/              # Route components
│   ├── HomePage.tsx    # Public showcase view
│   └── AdminPage.tsx   # Admin management view
├── store/              # State management
│   └── appStore.ts     # Zustand store for apps
├── App.tsx             # Main app component with routing
├── brand.ts            # Branding and theme configuration
├── index.tsx           # Application entry point
└── index.css           # Global styles and Tailwind imports

public/
├── assets/             # Static assets (logo, favicon)
│   ├── ERNI_logo_color-2048x532.png
│   └── favicon.png
├── index.html          # HTML template
└── manifest.json       # PWA manifest
```

## 🎯 Accessibility Features

- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Focus Management**: Clear focus indicators and logical tab order
- **Color Contrast**: Meets WCAG guidelines for text contrast
- **Responsive Design**: Works across all device sizes

## 🔧 Configuration Files

- `webpack.config.js`: Build configuration with GitHub Pages support
- `tailwind.config.js`: Tailwind CSS configuration with brand variables
- `tsconfig.json`: TypeScript configuration
- `package.json`: Dependencies and scripts

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Live Demo**: [https://jsrmalvarez.github.io/ERNIShowcaseApp](https://jsrmalvarez.github.io/ERNIShowcaseApp)
- **Repository**: [https://github.com/jsrmalvarez/ERNIShowcaseApp](https://github.com/jsrmalvarez/ERNIShowcaseApp)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS