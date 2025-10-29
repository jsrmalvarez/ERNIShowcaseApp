import React from 'react';
import { Header } from '../components/Header';
import { AppGrid } from '../components/AppGrid';

interface HomePageProps {
  onToggleAdminMode: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onToggleAdminMode }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header onToggleMode={onToggleAdminMode} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Demo Applications
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of innovative demo applications. Click on any card to open the application in a new tab.
          </p>
        </div>
        
        <AppGrid />
      </main>
    </div>
  );
};