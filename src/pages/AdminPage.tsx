import React, { useState } from 'react';
import { Header } from '../components/Header';
import { AppForm } from '../components/AppForm';
import { AppGrid } from '../components/AppGrid';
import { useAppStore } from '../store/appStore';
import { DemoApp } from '../brand';

interface AdminPageProps {
  onToggleAdminMode: () => void;
}

export const AdminPage: React.FC<AdminPageProps> = ({ onToggleAdminMode }) => {
  const { apps, resetToDefaults } = useAppStore();
  const [editingApp, setEditingApp] = useState<DemoApp | null>(null);

  const handleEditApp = (appId: string) => {
    const app = apps.find(a => a.id === appId);
    if (app) {
      setEditingApp(app);
    }
  };

  const handleFormSuccess = () => {
    setEditingApp(null);
  };

  const handleResetToDefaults = () => {
    if (window.confirm('Are you sure you want to reset to default applications? This will remove all custom apps.')) {
      resetToDefaults();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isAdminMode onToggleMode={onToggleAdminMode} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Application Management
              </h2>
              <p className="text-lg text-gray-600">
                Add, edit, or remove demo applications from the showcase.
              </p>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={handleResetToDefaults}
                className="px-4 py-2 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors"
                title="Reset to default applications"
              >
                <span className="mr-2">🔄</span>
                Reset to Defaults
              </button>
            </div>
          </div>
          
          {/* Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="text-2xl mr-3">📱</div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{apps.length}</div>
                  <div className="text-sm text-gray-500">Total Apps</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="text-2xl mr-3">🔗</div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {apps.filter(app => app.url).length}
                  </div>
                  <div className="text-sm text-gray-500">With URLs</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="text-2xl mr-3">📝</div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {apps.filter(app => app.description).length}
                  </div>
                  <div className="text-sm text-gray-500">With Descriptions</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add/Edit Form */}
        <AppForm 
          editingApp={editingApp}
          onCancel={() => setEditingApp(null)}
          onSuccess={handleFormSuccess}
        />

        {/* Apps Grid */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Current Applications
          </h3>
          <AppGrid 
            isAdminMode 
            onEditApp={handleEditApp}
          />
        </div>
      </main>
    </div>
  );
};