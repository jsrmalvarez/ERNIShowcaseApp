import React from 'react';
import { brand } from '@brand';
import { Link } from 'react-router-dom';

export const BrandHeader: React.FC = () => {
  return (
    <header className="py-6 flex flex-col gap-4">
      <div className="flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-brand-accent rounded px-2 py-1">
          <span className="text-xl font-bold brand-gradient-text">{brand.logoText ?? brand.name}</span>
        </Link>
        <nav className="flex items-center gap-3 text-sm">
          <Link to="/admin" className="px-3 py-1 rounded bg-brand-subtle text-brand-fg/90 hover:bg-brand-accent hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-accent">
            Admin
          </Link>
        </nav>
      </div>
      {brand.tagline && (
        <p className="text-sm text-gray-400 max-w-prose">{brand.tagline}</p>
      )}
    </header>
  );
};
