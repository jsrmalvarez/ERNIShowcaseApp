import React from 'react';
import { brand } from '../brand';

interface HeaderProps {
  isAdminMode?: boolean;
  onToggleMode?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  isAdminMode = false, 
  onToggleMode 
}) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and title */}
          <div className="flex items-center gap-4">
            <img 
              src={brand.logo} 
              alt={`${brand.name} logo`}
              className="h-8 w-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                {brand.name}
              </h1>
              {!isAdminMode && (
                <p className="text-sm text-gray-500">
                  {brand.tagline}
                </p>
              )}
            </div>
          </div>

          {/* Admin toggle button */}
          {onToggleMode && (
            <button
              onClick={onToggleMode}
              className={`
                px-4 py-2 rounded-lg font-medium transition-all duration-200
                ${isAdminMode 
                  ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                  : 'bg-primary text-white hover:bg-primary/90'
                }
              `}
              aria-label={isAdminMode ? 'Exit admin mode' : 'Enter admin mode'}
            >
              {isAdminMode ? (
                <>
                  <span className="mr-2">👁️</span>
                  View Mode
                </>
              ) : (
                <>
                  <span className="mr-2">⚙️</span>
                  Admin
                </>
              )}
            </button>
          )}
        </div>

        {/* Admin mode indicator */}
        {isAdminMode && (
          <div className="pb-4">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <div className="flex items-center">
                <span className="text-yellow-600 mr-2">⚠️</span>
                <span className="text-sm font-medium text-yellow-800">
                  Admin Mode Active
                </span>
                <span className="text-sm text-yellow-700 ml-2">
                  - You can add, edit, and remove applications
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};