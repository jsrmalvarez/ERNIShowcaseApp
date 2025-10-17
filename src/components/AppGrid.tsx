import React from 'react';
import { useAppsStore } from '@store/useAppsStore';
import { AppCard } from './AppCard';

export const AppGrid: React.FC = () => {
  const apps = useAppsStore(s => s.apps);
  return (
    <div
      className="app-grid"
      style={{
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))'
      }}
      role="list"
      aria-label="Showcase applications"
    >
      {apps.map(app => (
        <AppCard key={app.id} app={app} />
      ))}
      {apps.length === 0 && (
        <p className="text-sm text-gray-400 col-span-full">No apps yet. Add some via Admin.</p>
      )}
    </div>
  );
};
