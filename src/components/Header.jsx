import React, { useState, useEffect } from 'react';
import { Zap, Sun, Moon, Calendar, Layers, UserCheck } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Header({ theme, toggleTheme }) {
  // Dynamic User Profile State (Persisted in localStorage)
  const [userName, setUserName] = useState(() => {
    return localStorage.getItem('abtalks_user_name') || 'Student Builder';
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleNameChange = (e) => {
    const val = e.target.value;
    setUserName(val);
    localStorage.setItem('abtalks_user_name', val);
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'var(--bg-header)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--border-color)',
      padding: '0.85rem 1.25rem'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        
        {/* Brand Logo & Name */}
        <NavLink to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '12px',
            background: 'var(--gradient-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'var(--shadow-purple)'
          }}>
            <Zap size={22} color="#ffffff" />
          </div>
          <div>
            <div style={{ fontSize: '1.15rem', fontWeight: 800, letterSpacing: '-0.5px', lineHeight: 1, color: 'var(--text-primary)' }}>
              AB TALKS
            </div>
            <div style={{ fontSize: '0.65rem', color: 'var(--accent-purple)', fontWeight: 800, letterSpacing: '0.5px' }}>
              60-DAY CHALLENGE
            </div>
          </div>
        </NavLink>

        {/* Desktop Top Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }} className="desktop-nav">
          <NavLink to="/" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 600 }}>
            Home
          </NavLink>

          <NavLink to="/dashboard" style={{ textDecoration: 'none', color: 'var(--text-primary)', fontSize: '0.85rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Layers size={15} color="var(--accent-purple)" />
            <span>Dashboard</span>
          </NavLink>

          <NavLink to="/day/12" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Calendar size={15} />
            <span>Day 12</span>
          </NavLink>
        </div>

        {/* Right Actions: Theme Toggle + Dynamic Logged-in User Profile */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          
          {/* Dual Theme Switcher */}
          <button 
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="btn btn-secondary"
            style={{
              padding: '6px 14px',
              borderRadius: '9999px',
              fontSize: '0.8rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
            {theme === 'dark' ? <Sun size={16} color="#fbbf24" /> : <Moon size={16} color="#6366f1" />}
            <span style={{ fontWeight: 700, textTransform: 'capitalize' }}>
              {theme === 'dark' ? 'Light' : 'Dark'} Mode
            </span>
          </button>

          {/* Dynamic Logged-In User Profile Component */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '4px 10px 4px 4px',
            borderRadius: '9999px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)'
          }}>
            <div style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              background: 'var(--gradient-neon)',
              color: '#fff',
              fontWeight: 800,
              fontSize: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textTransform: 'uppercase'
            }}>
              {userName ? userName.charAt(0) : 'U'}
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {isEditing ? (
                <input 
                  type="text" 
                  value={userName} 
                  onChange={handleNameChange}
                  onBlur={() => setIsEditing(false)}
                  autoFocus
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-primary)',
                    outline: 'none',
                    width: '90px'
                  }}
                />
              ) : (
                <span 
                  onClick={() => setIsEditing(true)}
                  title="Click to edit logged in user name"
                  style={{ fontSize: '0.78rem', fontWeight: 700, lineHeight: 1, cursor: 'pointer' }}>
                  {userName}
                </span>
              )}
              <span style={{ fontSize: '0.62rem', color: 'var(--accent-emerald)', fontWeight: 700 }}>
                ● Logged In
              </span>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
