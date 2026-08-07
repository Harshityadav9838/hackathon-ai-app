import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import ChallengeDay from './pages/ChallengeDay';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100%', position: 'relative', zIndex: 1 }}>
        
        {/* 🌌 Volumetric Ambient Fog Clouds (Left Purple & Right Cyan) */}
        <div className="ambient-fog-left" />
        <div className="ambient-fog-right" />

        {/* 💫 Floating 3D Spatial Metallic/Glass Rings */}
        <svg className="floating-ring floating-ring-1" width="80" height="80" viewBox="0 0 100 100">
          <ellipse cx="50" cy="50" rx="40" ry="20" fill="none" stroke="rgba(168, 85, 247, 0.6)" strokeWidth="6" transform="rotate(-25 50 50)" />
        </svg>

        <svg className="floating-ring floating-ring-2" width="70" height="70" viewBox="0 0 100 100">
          <ellipse cx="50" cy="50" rx="35" ry="18" fill="none" stroke="rgba(6, 182, 212, 0.6)" strokeWidth="5" transform="rotate(35 50 50)" />
        </svg>

        {/* Header Navigation */}
        <Header theme={theme} toggleTheme={toggleTheme} />

        {/* Main Content Area */}
        <main style={{ flex: 1, padding: '1.25rem 1rem', width: '100%', maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 5 }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/day/12" element={<ChallengeDay />} />
            <Route path="*" element={<LandingPage />} />
          </Routes>
        </main>

        {/* Mobile Bottom Nav */}
        <BottomNav />

      </div>
    </BrowserRouter>
  );
}
