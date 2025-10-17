import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrandHeader } from '@components/BrandHeader';
import { AppGrid } from '@components/AppGrid';
import AdminPage from './pages/AdminPage';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-brand-bg text-brand-fg">
      <div className="max-w-5xl mx-auto w-full px-4">
        <BrandHeader />
        <Routes>
          <Route path="/" element={<AppGrid />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
