import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Zap, Sun, Moon, Calendar, Layers, User, Settings, HelpCircle, LogOut, ChevronDown, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Header({ theme, toggleTheme }) {
  const [userName, setUserName] = useState(() => {
    return localStorage.getItem('abtalks_user_name') || 'Student Builder';
  });

  const [notifications, setNotifications] = useState(() => {
    return localStorage.getItem('abtalks_notifications') !== 'false';
  });

  const [isEditing, setIsEditing] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleNameChange = (e) => {
    const val = e.target.value;
    setUserName(val);
    localStorage.setItem('abtalks_user_name', val);
  };

  const toggleNotifications = () => {
    setNotifications((prev) => {
      const next = !prev;
      localStorage.setItem('abtalks_notifications', String(next));
      return next;
    });
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>

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

          <div ref={menuRef} style={{ position: 'relative' }}>
            <div
              onClick={() => setMenuOpen((prev) => !prev)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '4px 10px 4px 4px',
                borderRadius: '9999px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                cursor: 'pointer'
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
                    onClick={(e) => e.stopPropagation()}
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
                    onClick={(e) => { e.stopPropagation(); setIsEditing(true); }}
                    title="Click to edit logged in user name"
                    style={{ fontSize: '0.78rem', fontWeight: 700, lineHeight: 1, cursor: 'pointer' }}>
                    {userName}
                  </span>
                )}
                <span style={{ fontSize: '0.62rem', color: 'var(--accent-emerald)', fontWeight: 700 }}>
                  ● Logged In
                </span>
              </div>

              <ChevronDown size={14} color="var(--text-muted)" style={{ transform: menuOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            </div>

            {menuOpen && (
              <div className="glass-panel" style={{
                position: 'absolute',
                top: 'calc(100% + 8px)',
                right: 0,
                width: '200px',
                padding: '8px',
                zIndex: 200
              }}>
                <button onClick={() => { setMenuOpen(false); setIsEditing(true); }} className="header-menu-item">
                  <User size={16} />
                  <span>Account</span>
                </button>

                <button onClick={() => { setMenuOpen(false); setSettingsOpen(true); }} className="header-menu-item">
                  <Settings size={16} />
                  <span>Settings</span>
                </button>

                <a href="mailto:support@abtalks.dev" onClick={() => setMenuOpen(false)} className="header-menu-item">
                  <HelpCircle size={16} />
                  <span>Help</span>
                </a>

                <div style={{ height: '1px', background: 'var(--border-color)', margin: '6px 0' }} />

                <button
                  onClick={() => {
                    localStorage.removeItem('abtalks_user_name');
                    setUserName('Student Builder');
                    setMenuOpen(false);
                  }}
                  className="header-menu-item">
                  <LogOut size={16} />
                  <span>Log Out</span>
                </button>
              </div>
            )}
          </div>

        </div>
      </div>

      {settingsOpen && createPortal(
        <div
          onClick={() => setSettingsOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 300,
            padding: '1rem'
          }}>
          <div
            onClick={(e) => e.stopPropagation()}
            className="glass-panel"
            style={{ width: '100%', maxWidth: '380px', padding: '1.5rem' }}>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>Settings</h3>
              <button onClick={() => setSettingsOpen(false)} className="header-menu-item" style={{ width: 'auto', padding: '6px' }}>
                <X size={18} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>Display Name</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Shown across the app</div>
                </div>
                <input
                  type="text"
                  value={userName}
                  onChange={handleNameChange}
                  style={{
                    width: '130px',
                    padding: '6px 10px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-input)',
                    color: 'var(--text-primary)',
                    fontSize: '0.8rem'
                  }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>Appearance</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Switch between dark and light</div>
                </div>
                <button onClick={toggleTheme} className="btn btn-secondary" style={{ padding: '6px 14px', borderRadius: '9999px', fontSize: '0.78rem' }}>
                  {theme === 'dark' ? 'Dark' : 'Light'}
                </button>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>Notifications</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Deadline & streak reminders</div>
                </div>
                <button
                  onClick={toggleNotifications}
                  aria-label="Toggle notifications"
                  style={{
                    width: '42px',
                    height: '24px',
                    borderRadius: '9999px',
                    border: 'none',
                    cursor: 'pointer',
                    background: notifications ? 'var(--gradient-primary)' : 'rgba(148,163,184,0.3)',
                    position: 'relative',
                    transition: 'background 0.2s'
                  }}>
                  <span style={{
                    position: 'absolute',
                    top: '3px',
                    left: notifications ? '21px' : '3px',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    background: '#fff',
                    transition: 'left 0.2s'
                  }} />
                </button>
              </div>

            </div>
          </div>
        </div>,
      document.body
      )}
    </header>
  );
}
