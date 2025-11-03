import React, { useMemo, useState } from 'react';
import { useAppStore } from '../store/appStore';
import { DemoApp } from '../data/defaultApps';
import { Header } from '../components/Header';
import { AppGrid } from '../components/AppGrid';

interface HomePageProps {
  onToggleAdminMode: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onToggleAdminMode }) => {
  const { apps } = useAppStore();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Collect all unique tags and their counts
  const tagCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    if (apps && Array.isArray(apps)) {
      apps.forEach(app => {
        if (app && app.tags && Array.isArray(app.tags)) {
          app.tags.forEach(tag => {
            counts[tag] = (counts[tag] || 0) + 1;
          });
        }
      });
    }
    return counts;
  }, [apps]);

  const allTags = useMemo(() => Object.keys(tagCounts).sort(), [tagCounts]);

  // Filter apps by selected tags
  const filteredApps: DemoApp[] = useMemo(() => {
    if (!apps || !Array.isArray(apps)) return [];
    if (selectedTags.length === 0) return apps;
    return apps.filter(app => app && app.tags && Array.isArray(app.tags) && app.tags.some(tag => selectedTags.includes(tag)));
  }, [apps, selectedTags]);

  const handleTagChange = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onToggleMode={onToggleAdminMode} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection. Click on any card to open the application in a new tab.
          </p>
        </div>

        {/* Tag filter control */}
        {allTags.length > 0 && (
          <div className="flex flex-wrap gap-4 mb-8 justify-center items-center">
            {allTags.map(tag => (
              <label key={tag} className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full shadow border border-gray-200 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedTags.includes(tag)}
                  onChange={() => handleTagChange(tag)}
                  className="accent-primary"
                />
                <span className="text-sm font-medium text-gray-700">{tag}</span>
                <span className="text-xs text-gray-500 bg-gray-100 rounded px-2 py-0.5">{tagCounts[tag]}</span>
              </label>
            ))}
          </div>
        )}

        <AppGrid apps={filteredApps} />
      </main>
    </div>
  );
};