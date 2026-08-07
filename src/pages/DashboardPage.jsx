import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Flame, 
  Clock, 
  Trophy, 
  Users, 
  Rocket, 
  ArrowRight, 
  Sparkles, 
  RotateCcw,
  ShieldCheck,
  Zap
} from 'lucide-react';
import EdgeCaseSwitcher from '../components/EdgeCaseSwitcher';

export default function DashboardPage() {
  const [edgeCase, setEdgeCase] = useState('active');

  return (
    <div style={{ paddingBottom: '90px' }}>
      
      {/* 🧪 Edge Case Tester for Judges */}
      <EdgeCaseSwitcher edgeCase={edgeCase} setEdgeCase={setEdgeCase} />

      {/* 🚀 HERO SPOTLIGHT CARD: Open Theme 🚀 (Matching Image 1 Design) */}
      <div className="glass-panel glass-panel-cyan" style={{ padding: '1.8rem', marginBottom: '1.5rem', position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          
          <div style={{ flex: 1, minWidth: '260px' }}>
            <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-secondary)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '6px' }}>
              YOUR CHALLENGE:
            </div>

            <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              Open Theme <span className="animate-float" style={{ display: 'inline-block' }}>🚀</span>
            </h1>

            {/* Glowing Neon Pill Tags (#AI, #BuildInPublic, #48Hours) */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '1.2rem' }}>
              <span className="badge neon-tag-cyan">#AI</span>
              <span className="badge neon-tag-magenta">#BuildInPublic</span>
              <span className="badge neon-tag-cyan">#48Hours</span>
            </div>

            <Link to="/day/12" className="btn btn-primary" style={{ textDecoration: 'none' }}>
              <span>VIEW FULL CHALLENGE DETAILS</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* ⏱️ CIRCULAR GLOWING PROGRESS TIMER WIDGET (Matching Image 1) */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(0,0,0,0.3)', padding: '1.2rem 1.5rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="timer-circle-container">
              <svg className="timer-circle-svg" viewBox="0 0 140 140">
                <defs>
                  <linearGradient id="timerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#d946ef" />
                  </linearGradient>
                </defs>
                <circle className="timer-circle-bg" cx="70" cy="70" r="55" />
                <circle className="timer-circle-progress" cx="70" cy="70" r="55" />
              </svg>

              <div style={{ position: 'absolute', textAlign: 'center' }}>
                <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>Time Left</div>
                <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-mono)' }}>45:12:30</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 📊 3 STATS CARDS ROW (Matching Image 1) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '1.5rem' }}>
        
        {/* Card 1: 48 Hours */}
        <div className="glass-panel glass-panel-cyan" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '12px', background: 'rgba(6, 182, 212, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-cyan)' }}>
              <Clock size={20} />
            </div>
          </div>
          <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-mono)' }}>48</div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '2px' }}>Hours</p>
        </div>

        {/* Card 2: ₹20K Prize Pool */}
        <div className="glass-panel glass-panel-magenta" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '12px', background: 'rgba(217, 70, 239, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-pink)' }}>
              <Trophy size={20} />
            </div>
          </div>
          <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--accent-pink)', fontFamily: 'var(--font-mono)' }}>₹20K</div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '2px' }}>Prize Pool</p>
        </div>

        {/* Card 3: 500+ Participants */}
        <div className="glass-panel glass-panel-cyan" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '12px', background: 'rgba(139, 92, 246, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-purple)' }}>
              <Users size={20} />
            </div>
          </div>
          <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--accent-purple)', fontFamily: 'var(--font-mono)' }}>500+</div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '2px' }}>Participants</p>
        </div>

      </div>

      {/* 🔥 STREAK STATUS CARD (Handles Edge Cases) */}
      {edgeCase === 'active' && (
        <div className="glass-panel" style={{ padding: '1.5rem', marginBottom: '1.25rem', borderColor: 'var(--accent-amber)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div className="animate-flame" style={{ fontSize: '2rem' }}>🔥</div>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, fontFamily: 'var(--font-mono)', color: 'var(--accent-amber)', lineHeight: 1 }}>
                  12 DAYS STREAK
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                  CURRENT ACTIVE STREAK
                </div>
              </div>
            </div>
            <span className="badge badge-amber">Consistent Builder</span>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            Complete Day 12's challenge on the Day 12 tab to reach Day 13!
          </p>
        </div>
      )}

      {edgeCase === 'first_day' && (
        <div className="glass-panel" style={{ padding: '1.5rem', marginBottom: '1.25rem', borderColor: 'var(--accent-emerald)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ fontSize: '2rem' }}>🌟</div>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, fontFamily: 'var(--font-mono)', color: 'var(--accent-emerald)', lineHeight: 1 }}>
                  0 DAYS KICKOFF
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                  FIRST DAY ONBOARDING
                </div>
              </div>
            </div>
            <span className="badge badge-emerald">New Builder</span>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            Welcome! Complete your Day 1 challenge tonight to start your streak.
          </p>
        </div>
      )}

      {edgeCase === 'missed_day' && (
        <div className="glass-panel" style={{ padding: '1.5rem', marginBottom: '1.25rem', borderColor: 'var(--accent-red)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ fontSize: '2rem' }}>⚠️</div>
              <div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent-red)', lineHeight: 1 }}>
                  MISSED DAY 11
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                  GRACE PERIOD ACTIVE
                </div>
              </div>
            </div>
            <span className="badge badge-red">Streak Risk</span>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
            Complete Day 12 before 11:59 PM to recover your streak!
          </p>
          <button className="btn btn-secondary" style={{ width: '100%', padding: '8px 14px' }}>
            <RotateCcw size={14} />
            <span>Use Streak Shield & Recover</span>
          </button>
        </div>
      )}

    </div>
  );
}
