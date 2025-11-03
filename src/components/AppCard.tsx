import React from 'react';
import { DemoApp } from '../data/defaultApps';

interface AppCardProps {
  app: DemoApp;
  onEdit?: () => void;
  onDelete?: () => void;
  isAdminMode?: boolean;
}

export const AppCard: React.FC<AppCardProps> = ({ 
  app, 
  onEdit, 
  onDelete, 
  isAdminMode = false 
}) => {
  const handleCardClick = () => {
    if (!isAdminMode) {
      window.open(app.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      className={`
        relative group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 
        ${!isAdminMode ? 'cursor-pointer hover:scale-105' : ''}
        border border-gray-200 overflow-hidden
      `}
      onClick={handleCardClick}
      role={!isAdminMode ? 'button' : 'article'}
      tabIndex={!isAdminMode ? 0 : -1}
      onKeyDown={(e) => {
        if (!isAdminMode && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          handleCardClick();
        }
      }}
      aria-label={!isAdminMode ? `Open ${app.name} in new tab` : undefined}
    >
      {/* Admin controls */}
      {isAdminMode && (
        <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity z-10">
          {onEdit && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onEdit();
              }}
              className="p-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              aria-label={`Edit ${app.name}`}
            >
              ✏️
            </button>
          )}
          {onDelete && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete();
              }}
              className="p-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              aria-label={`Delete ${app.name}`}
            >
              🗑️
            </button>
          )}
        </div>
      )}

      {/* Card content */}
      <div className="p-6">
        {/* Icon and title */}
        <div className="flex items-center gap-3 mb-3">
          {app.icon && (
            <div className="text-3xl flex-shrink-0" role="img" aria-label="App icon">
              {app.icon}
            </div>
          )}
          <h3 className="text-xl font-semibold text-gray-800 line-clamp-2">
            {app.name}
          </h3>
        </div>

        {/* Description */}
        {app.description && (
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
            {app.description}
          </p>
        )}

        {/* URL indicator */}
        <div className="flex items-center text-xs text-gray-400 mt-auto">
          <span className="truncate">
            {new URL(app.url).hostname}
          </span>
          {!isAdminMode && (
            <svg 
              className="w-4 h-4 ml-2 flex-shrink-0" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
              />
            </svg>
          )}
        </div>
      </div>

      {/* Hover overlay for non-admin mode */}
      {!isAdminMode && (
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      )}
    </div>
  );
};