import React from 'react';
import { Zap, Sun, Moon, Smartphone } from 'lucide-react';

export default function Header({ theme, toggleTheme }) {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'var(--bg-header)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border-color)',
      padding: '0.75rem 1.25rem'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        
        {/* Brand Logo & Name */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            background: 'var(--gradient-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'var(--shadow-glow)'
          }}>
            <Zap size={20} color="#ffffff" />
          </div>
          <div>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, letterSpacing: '-0.5px', lineHeight: 1 }}>
              ABTalks
            </div>
            <div style={{ fontSize: '0.68rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
              60-Day Challenge
            </div>
          </div>
        </div>

        {/* Header Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          
          {/* Mobile 390px Badge */}
          <div className="badge badge-purple" style={{ display: 'none', minWidth: '90px' }}>
            <Smartphone size={12} />
            <span>390px Mobile</span>
          </div>

          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="btn btn-secondary"
            style={{
              padding: '6px 12px',
              borderRadius: '9999px',
              fontSize: '0.8rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
            {theme === 'dark' ? <Sun size={16} color="#fbbf24" /> : <Moon size={16} color="#6366f1" />}
            <span style={{ fontWeight: 700, textTransform: 'capitalize' }}>
              {theme === 'dark' ? 'Light' : 'Dark'}
            </span>
          </button>

          {/* User Profile Avatar */}
          <div style={{
            width: '32px',
            height: '32px',
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

        </div>
      </div>
    </header>
  );
}
