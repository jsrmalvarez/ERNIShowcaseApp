import React from 'react';
import { brand } from '@brand';
import { Link } from 'react-router-dom';


export const BrandHeader: React.FC = () => {
  return (
    <header className="erni-header py-6 px-4 flex flex-col gap-3 rounded-b-lg shadow-sm" style={{ fontFamily: 'var(--brand-font)' }}>
      <div className="flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-brand-accent2 rounded px-2 py-1">
          <span className="text-2xl font-bold brand-gradient-text tracking-wide">{brand.logoText ?? brand.name}</span>
        </Link>
        <nav className="flex items-center gap-3 text-sm">
          <Link to="/admin" className="px-4 py-2 rounded bg-brand-accent2 text-white font-semibold hover:bg-brand-link transition-colors focus:outline-none focus:ring-2 focus:ring-brand-link">
            Admin
          </Link>
        </nav>
      </div>
      {brand.tagline && (
        <p className="text-sm text-brand-header-fg/80 max-w-prose font-medium">{brand.tagline}</p>
      )}
    </header>
  );
};
