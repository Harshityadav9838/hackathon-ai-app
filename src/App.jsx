import React from 'react';
import { Sparkles, Rocket } from 'lucide-react';

export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <div className="glass-panel" style={{
        padding: '3rem 2.5rem',
        maxWidth: '640px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.25rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          width: '56px',
          height: '56px',
          borderRadius: '16px',
          background: 'var(--gradient-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'var(--shadow-glow)'
        }}>
          <Rocket size={28} color="#fff" />
        </div>

        <span className="badge badge-purple">
          <Sparkles size={14} /> Hackathon Ready Workspace
        </span>

        <h1 style={{
          fontSize: '2.2rem',
          fontWeight: 800,
          fontFamily: 'var(--font-display)',
          lineHeight: 1.2
        }}>
          Ready for your <span className="text-gradient">Hackathon Project</span>
        </h1>

        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
          Paste your unlocked hackathon prompt or topic in our chat, and I will build your complete project live right here!
        </p>

        <div style={{ display: 'flex', gap: '8px', marginTop: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <span className="badge badge-emerald">PROMPTS.md Ready</span>
          <span className="badge badge-purple">React 19 + Vite</span>
          <span className="badge badge-purple">Vercel Deployable</span>
        </div>
      </div>
    </div>
  );
}
