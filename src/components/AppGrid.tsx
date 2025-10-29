import React from 'react';
import { useAppStore } from '../store/appStore';
import { AppCard } from './AppCard';

interface AppGridProps {
  isAdminMode?: boolean;
  onEditApp?: (appId: string) => void;
}

export const AppGrid: React.FC<AppGridProps> = ({ 
  isAdminMode = false, 
  onEditApp 
}) => {
  const { apps, removeApp } = useAppStore();

  const handleDeleteApp = (appId: string, appName: string) => {
    if (window.confirm(`Are you sure you want to delete "${appName}"?`)) {
      removeApp(appId);
    }
  };

  if (apps.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="text-6xl mb-4">📱</div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          No Apps Yet
        </h2>
        <p className="text-gray-500 max-w-md">
          {isAdminMode 
            ? "Start by adding your first demo app using the form above."
            : "No demo applications are currently available. Please check back later."
          }
        </p>
      </div>
    );
  }

  return (
    <div 
      className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6"
      role="grid"
      aria-label={isAdminMode ? "Demo applications management grid" : "Demo applications grid"}
    >
      {apps.map((app) => (
        <div key={app.id} role="gridcell">
          <AppCard
            app={app}
            isAdminMode={isAdminMode}
            onEdit={onEditApp ? () => onEditApp(app.id) : undefined}
            onDelete={isAdminMode ? () => handleDeleteApp(app.id, app.name) : undefined}
          />
        </div>
      ))}
    </div>
  );
};