import React from 'react';
import type { DemoApp } from '@store/useAppsStore';

interface Props {
  app: DemoApp;
}


export const AppCard: React.FC<Props> = ({ app }) => {
  return (
    <div
      className="erni-card group relative p-5 flex flex-col gap-3 transition-shadow hover:shadow-lg focus-within:ring-2 focus-within:ring-brand-accent"
      role="listitem"
      style={{ fontFamily: 'var(--brand-font)' }}
    >
      <div className="flex items-center gap-3 mb-2">
        {app.icon && (
          <span aria-hidden className="text-2xl" title={app.name}>{app.icon}</span>
        )}
        <h3 className="font-semibold text-lg leading-tight text-brand-accent group-hover:text-brand-accent2">
          {app.name}
        </h3>
      </div>
      {app.description && (
        <p className="text-sm text-brand-fg/80 line-clamp-3">{app.description}</p>
      )}
      <div className="mt-auto flex">
        <a
          href={app.url}
          target="_blank"
          rel="noopener noreferrer"
          className="erni-link inline-flex items-center gap-1 text-sm font-medium px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-brand-accent2"
          aria-label={`Open ${app.name} in new tab`}
        >
          <span>Open</span>
          <span aria-hidden>↗</span>
        </a>
      </div>
    </div>
  );
};
