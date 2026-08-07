import React from 'react';
import { Flame, Sparkles, AlertTriangle } from 'lucide-react';

export default function EdgeCaseSwitcher({ edgeCase, setEdgeCase }) {
  return (
    <div className="glass-panel" style={{
      padding: '10px 14px',
      marginBottom: '1.25rem',
      borderColor: 'rgba(99, 102, 241, 0.3)',
      background: 'rgba(99, 102, 241, 0.06)'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '8px'
      }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
          🧪 JUDGE EDGE CASE TESTER:
        </div>

        <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '2px' }}>
          
          <button 
            onClick={() => setEdgeCase('active')}
            className={`badge ${edgeCase === 'active' ? 'badge-amber' : 'badge-purple'}`}
            style={{ cursor: 'pointer', border: 'none' }}>
            <Flame size={12} />
            <span>🔥 Active Streak (Day 12)</span>
          </button>

          <button 
            onClick={() => setEdgeCase('first_day')}
            className={`badge ${edgeCase === 'first_day' ? 'badge-emerald' : 'badge-purple'}`}
            style={{ cursor: 'pointer', border: 'none' }}>
            <Sparkles size={12} />
            <span>🌟 First Day (0 Streak)</span>
          </button>

          <button 
            onClick={() => setEdgeCase('missed_day')}
            className={`badge ${edgeCase === 'missed_day' ? 'badge-red' : 'badge-purple'}`}
            style={{ cursor: 'pointer', border: 'none' }}>
            <AlertTriangle size={12} />
            <span>⚠️ Missed Day Recovery</span>
          </button>

        </div>
      </div>
    </div>
  );
}
