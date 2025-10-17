import React from 'react';
import type { DemoApp } from '@store/useAppsStore';

interface Props {
  app: DemoApp;
}

export const AppCard: React.FC<Props> = ({ app }) => {
  return (
    <div
      className="group relative rounded-lg border border-brand-subtle bg-brand-subtle/40 backdrop-blur-sm p-4 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow focus-within:ring-2 focus-within:ring-brand-accent"
      role="listitem"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          {app.icon && (
            <span aria-hidden className="text-xl" title={app.name}>{app.icon}</span>
          )}
          <h3 className="font-semibold text-lg leading-tight group-hover:text-brand-accent">
            {app.name}
          </h3>
        </div>
      </div>
      {app.description && (
        <p className="text-sm text-gray-300 line-clamp-3">{app.description}</p>
      )}
      <div className="mt-auto flex">
        <a
          href={app.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-brand-accent hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent focus:ring-offset-brand-bg rounded px-2 py-1"
          aria-label={`Open ${app.name} in new tab`}
        >
          <span>Open</span>
          <span aria-hidden>↗</span>
        </a>
      </div>
    </div>
  );
};
