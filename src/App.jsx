import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Clock, 
  Sparkles, 
  Code2, 
  Cpu, 
  Rocket, 
  CheckCircle2, 
  Terminal, 
  Layout, 
  Bot, 
  Database, 
  ShieldCheck,
  Send,
  Layers
} from 'lucide-react';

export default function App() {
  const [timeLeft, setTimeLeft] = useState(48 * 3600); // 48 hours in seconds
  const [promptText, setPromptText] = useState('');
  const [activeTab, setActiveTab] = useState('overview');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedPrompt, setSubmittedPrompt] = useState(null);

  // Format seconds to HH:MM:SS
  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handlePromptSubmit = (e) => {
    e.preventDefault();
    if (!promptText.trim()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setSubmittedPrompt(promptText);
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Header Navigation */}
      <header style={{
        borderBottom: '1px solid var(--border-light)',
        background: 'rgba(9, 13, 22, 0.8)',
        backdropFilter: 'blur(12px)',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              background: 'var(--gradient-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--shadow-glow)'
            }}>
              <Zap size={22} color="#fff" />
            </div>
            <div>
              <h1 style={{ fontSize: '1.25rem', fontWeight: 800, fontFamily: 'var(--font-display)', letterSpacing: '-0.5px' }}>
                ANTIGRAVITY <span className="text-gradient">AI HACKATHON HUB</span>
              </h1>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>48-Hour Rapid Prototype Engine</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div className="badge badge-purple" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 14px' }}>
              <Clock size={14} className="animate-pulse-glow" />
              <span>48:00:00 TIMER READY</span>
            </div>
            <div className="badge badge-emerald">
              <ShieldCheck size={14} />
              <span>VITE + REACT ACTIVE</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="container" style={{ flex: 1, padding: '2.5rem 2rem' }}>
        {/* Banner Section */}
        <section className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '250px',
            height: '250px',
            background: 'var(--gradient-primary)',
            borderRadius: '50%',
            filter: 'blur(90px)',
            opacity: 0.35,
            pointerEvents: 'none'
          }} />

          <div style={{ maxWidth: '800px', position: 'relative', zIndex: 1 }}>
            <span className="badge badge-purple" style={{ marginBottom: '1rem' }}>
              <Sparkles size={14} /> Hackathon Ready Engine
            </span>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, fontFamily: 'var(--font-display)', marginBottom: '1rem', lineHeight: 1.2 }}>
              Ready to turn your <span className="text-gradient">Hackathon Prompt</span> into a winning submission!
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '1.8rem' }}>
              As soon as the prompt unlocks, paste it below. I will immediately analyze the problem, generate the complete solution architecture, and build full-stack features right here.
            </p>

            {/* Input Box for Hackathon Prompt */}
            <form onSubmit={handlePromptSubmit} style={{ display: 'flex', gap: '12px' }}>
              <div style={{ flex: 1, position: 'relative' }}>
                <input 
                  type="text"
                  placeholder="Paste your unlocked hackathon prompt or topic here..."
                  value={promptText}
                  onChange={(e) => setPromptText(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '14px 20px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-input)',
                    border: '1px solid var(--border-light)',
                    color: '#fff',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all var(--transition-fast)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
                />
              </div>
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? <Sparkles size={18} className="animate-pulse-glow" /> : <Send size={18} />}
                <span>{isSubmitting ? 'Analyzing...' : 'Submit Prompt'}</span>
              </button>
            </form>
          </div>
        </section>

        {submittedPrompt && (
          <div className="glass-panel" style={{ padding: '1.5rem 2rem', marginBottom: '2rem', borderColor: 'var(--accent-primary)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--accent-secondary)', fontWeight: 700, marginBottom: '0.5rem' }}>
              <CheckCircle2 size={20} />
              <span>Prompt Received & Logged</span>
            </div>
            <p style={{ color: 'var(--text-primary)', fontSize: '1.1rem', fontStyle: 'italic' }}>"{submittedPrompt}"</p>
          </div>
        )}

        {/* Feature Modules Grid */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 700, fontFamily: 'var(--font-display)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Layers size={20} color="var(--accent-primary)" />
            <span>Pre-Configured Architecture Modules</span>
          </h3>
        </div>

        <div className="grid-3">
          <div className="glass-panel" style={{ padding: '1.8rem' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(99, 102, 241, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem', color: 'var(--accent-primary)' }}>
              <Bot size={24} />
            </div>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>Autonomous AI Agents</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.2rem' }}>
              Multi-step task orchestration, reasoning loops, automated report generation, and tool usage.
            </p>
            <div style={{ display: 'flex', gap: '6px' }}>
              <span className="badge badge-purple">Gemini API</span>
              <span className="badge badge-emerald">Ready</span>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '1.8rem' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(168, 85, 247, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem', color: 'var(--accent-secondary)' }}>
              <Database size={24} />
            </div>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>Data & RAG Engine</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.2rem' }}>
              Real-time vector search, document indexing, smart query synthesis, and analytics visualization.
            </p>
            <div style={{ display: 'flex', gap: '6px' }}>
              <span className="badge badge-purple">Vector Search</span>
              <span className="badge badge-emerald">Ready</span>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '1.8rem' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(6, 182, 212, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem', color: 'var(--accent-cyan)' }}>
              <Layout size={24} />
            </div>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>Glassmorphism Dashboard</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.2rem' }}>
              Cyber dark aesthetics, responsive grid, micro-animations, interactive charts & custom widgets.
            </p>
            <div style={{ display: 'flex', gap: '6px' }}>
              <span className="badge badge-purple">React + CSS</span>
              <span className="badge badge-emerald">Active</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid var(--border-light)',
        padding: '1.5rem 2rem',
        textAlign: 'center',
        color: 'var(--text-muted)',
        fontSize: '0.85rem'
      }}>
        Powered by Antigravity AI Engine • 48-Hour Hackathon Workspace Ready
      </footer>
    </div>
  );
}
