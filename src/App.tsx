import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AdminPage } from './pages/AdminPage';
import { applyCSSVariables } from './brand';

const App: React.FC = () => {
  const [isAdminMode, setIsAdminMode] = useState(false);

  // Apply CSS variables on mount
  useEffect(() => {
    applyCSSVariables();
  }, []);

  const toggleAdminMode = () => {
    setIsAdminMode(!isAdminMode);
  };

  // Use different basename for development vs production
  const basename = process.env.NODE_ENV === 'production' ? '/ERNIShowcaseApp' : '';

  return (
    <Router basename={basename}>
      <Routes>
        <Route 
          path="/" 
          element={
            isAdminMode ? (
              <AdminPage onToggleAdminMode={toggleAdminMode} />
            ) : (
              <HomePage onToggleAdminMode={toggleAdminMode} />
            )
          } 
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;