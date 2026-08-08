import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import ChallengeDay from './pages/ChallengeDay';
import AnimatedBackground from './components/AnimatedBackground';

export default function App() {
  // Theme state: default 'dark' (late-night mobile mode), persists in localStorage
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

    <AnimatedBackground />

    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        position: "relative",
        zIndex: 1,
background: "transparent",
      }}
    >

      <Header theme={theme} toggleTheme={toggleTheme} />

      <main
        style={{
          flex: 1,
          padding: "1rem",
          width: "100%",
          maxWidth: "600px",
          margin: "0 auto"
        }}
      >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/day/12" element={<ChallengeDay />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </main>

      <BottomNav />

    </div>

  </BrowserRouter>
);
