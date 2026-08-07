import React from 'react';
import { Zap, Sun, Moon, Trophy, Calendar, Layers } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Header({ theme, toggleTheme }) {
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

        {/* Desktop Top Links Navigation */}
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

        {/* Right Header Actions */}
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

          {/* User Profile Avatar: Harshit Yadav */}
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
              background: 'var(--gradient-primary)',
              color: '#fff',
              fontWeight: 800,
              fontSize: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              H
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, lineHeight: 1 }}>Harshit Yadav</span>
              <span style={{ fontSize: '0.62rem', color: 'var(--accent-emerald)', fontWeight: 700 }}>● Active</span>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
