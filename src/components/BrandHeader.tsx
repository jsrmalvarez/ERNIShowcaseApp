import React from 'react';
import { brand } from '@brand';
import { Link } from 'react-router-dom';



export const BrandHeader: React.FC = () => {
  return (
    <header className="bg-white py-6 px-4 flex flex-col gap-3 border-b border-brand-border" style={{ fontFamily: 'var(--brand-font)' }}>
      <div className="flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 group focus:outline-none">
          <img src="/assets/ERNI_logo_color-2048x532.png" alt="ERNI Logo" className="h-8 w-auto" style={{ minWidth: 32 }} />          
        </Link>
        <nav className="flex items-center gap-3 text-sm">          
          <Link to="/admin"
            className="px-5 py-2 rounded-full bg-brand-accent text-white font-semibold shadow-sm hover:bg-brand-accent2 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-accent2"
            style={{ letterSpacing: '0.02em' }}
          >
            Admin
          </Link>
        </nav>
      </div>
      {brand.tagline && (
        <p className="text-sm text-brand-fg/80 max-w-prose font-medium">{brand.tagline}</p>
      )}
    </header>
  );
};
