import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, LayoutDashboard, Calendar } from 'lucide-react';

export default function BottomNav() {
  return (
    <nav style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: 'var(--bg-nav)',
      backdropFilter: 'blur(20px)',
      borderTop: '1px solid var(--border-color)',
      padding: '8px 16px 12px 16px'
    }}>
      <div style={{
        maxWidth: '500px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
      }}>
        
        {/* Route / : Landing Page */}
        <NavLink 
          to="/"
          end
          style={({ isActive }) => ({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            textDecoration: 'none',
            color: isActive ? 'var(--accent-purple)' : 'var(--text-muted)',
            fontSize: '0.72rem',
            fontWeight: isActive ? 700 : 500,
            transition: 'color 0.2s ease',
            flex: 1,
            minWidth: 0
          })}>
          <Home size={20} />
          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%' }}>Home ( / )</span>
        </NavLink>

        {/* Route /dashboard : Student Dashboard */}
        <NavLink 
          to="/dashboard"
          style={({ isActive }) => ({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            textDecoration: 'none',
            color: isActive ? 'var(--accent-purple)' : 'var(--text-muted)',
            fontSize: '0.72rem',
            fontWeight: isActive ? 700 : 500,
            transition: 'color 0.2s ease',
            flex: 1, 
            minWidth: 0
          })}>
          <LayoutDashboard size={20} />
          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%' }}>Dashboard</span>
        </NavLink>

        {/* Route /day/12 : Challenge Day 12 */}
        <NavLink 
          to="/day/12"
          style={({ isActive }) => ({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            textDecoration: 'none',
            color: isActive ? 'var(--accent-purple)' : 'var(--text-muted)',
            fontSize: '0.72rem',
            fontWeight: isActive ? 700 : 500,
            transition: 'color 0.2s ease',
            flex: 1, 
            minWidth: 0
          })}>
          <Calendar size={20} />
          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%' }}>Day 12</span>
        </NavLink>

      </div>
    </nav>
  );
}
