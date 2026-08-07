import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Flame, 
  CheckCircle2, 
  Calendar, 
  Trophy, 
  Briefcase, 
  ArrowRight, 
  Clock, 
  Sparkles, 
  AlertTriangle,
  RotateCcw,
  Zap,
  TrendingUp
} from 'lucide-react';
import EdgeCaseSwitcher from '../components/EdgeCaseSwitcher';

export default function DashboardPage() {
  // Edge case state: 'active' (Day 12 streak) | 'first_day' (0 streak) | 'missed_day' (missed streak recovery)
  const [edgeCase, setEdgeCase] = useState('active');

  return (
    <div style={{ paddingBottom: '90px' }}>
      
      {/* 🧪 Edge Case Tester for Judges */}
      <EdgeCaseSwitcher edgeCase={edgeCase} setEdgeCase={setEdgeCase} />

      {/* 👤 Student Welcome Banner */}
      <div style={{ marginBottom: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
            Welcome back 👋
          </span>
          <span className="badge badge-purple">AI Engineer Track</span>
        </div>
        <h1 style={{ fontSize: '1.6rem', fontWeight: 800, letterSpacing: '-0.5px' }}>
          Harshit Yadav
        </h1>
      </div>

      {/* 🔥 STREAK CARD (Handles Edge Cases) */}
      {edgeCase === 'active' && (
        <div className="glass-panel" style={{ padding: '1.5rem', marginBottom: '1.25rem', borderColor: 'var(--accent-amber)', background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(239, 68, 68, 0.08) 100%)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div className="animate-float" style={{ fontSize: '1.8rem' }}>🔥</div>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, fontFamily: 'var(--font-mono)', color: 'var(--accent-amber)', lineHeight: 1 }}>
                  12 DAYS
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                  CURRENT STREAK
                </div>
              </div>
            </div>
            <span className="badge badge-amber">Consistent Builder</span>
          </div>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
            You're on a 12-day streak! Complete today's challenge to reach Day 13.
          </p>
        </div>
      )}

      {edgeCase === 'first_day' && (
        <div className="glass-panel" style={{ padding: '1.5rem', marginBottom: '1.25rem', borderColor: 'var(--accent-emerald)', background: 'rgba(52, 211, 153, 0.08)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ fontSize: '1.8rem' }}>🌟</div>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, fontFamily: 'var(--font-mono)', color: 'var(--accent-emerald)', lineHeight: 1 }}>
                  0 DAYS
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                  FIRST DAY KICKOFF
                </div>
              </div>
            </div>
            <span className="badge badge-emerald">New Builder</span>
          </div>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
            Welcome to Day 1! Complete your first challenge tonight to ignite your 60-day streak.
          </p>
        </div>
      )}

      {edgeCase === 'missed_day' && (
        <div className="glass-panel" style={{ padding: '1.5rem', marginBottom: '1.25rem', borderColor: 'var(--accent-red)', background: 'rgba(248, 113, 113, 0.08)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ fontSize: '1.8rem' }}>⚠️</div>
              <div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent-red)', lineHeight: 1 }}>
                  MISSED DAY 11
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                  STREAK AT RISK
                </div>
              </div>
            </div>
            <span className="badge badge-red">Grace Period</span>
          </div>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.4, marginBottom: '0.75rem' }}>
            Don't worry! Complete Day 12's challenge before 11:59 PM to activate <strong>Streak Protection</strong> and save your streak!
          </p>
          <button className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '0.78rem', width: '100%' }}>
            <RotateCcw size={14} />
            <span>Use Streak Shield & Recover</span>
          </button>
        </div>
      )}

      {/* 🚀 TODAY'S TASK CARD */}
      <div className="glass-panel" style={{ padding: '1.25rem', marginBottom: '1.25rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Calendar size={16} color="var(--accent-purple)" />
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--accent-purple)' }}>
              TODAY'S TASK • DAY 12
            </span>
          </div>
          <span className="badge badge-amber">
            <Clock size={12} /> Due 11:59 PM
          </span>
        </div>

        <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.4rem' }}>
          Build a Fullstack REST API with AI Rate Limiting
        </h3>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.5, marginBottom: '1rem' }}>
          Create an Express/Node API with sliding window rate limiting and error handling.
        </p>

        <Link to="/day/12" className="btn btn-primary" style={{ width: '100%', textDecoration: 'none' }}>
          <span>View Day 12 & Submit Proof (/day/12)</span>
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* 📊 PROGRESS OVERVIEW */}
      <div className="glass-panel" style={{ padding: '1.25rem', marginBottom: '1.25rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>Overall Challenge Completion</span>
          <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--accent-purple)', fontFamily: 'var(--font-mono)' }}>
            {edgeCase === 'first_day' ? '0 / 60 Days (0%)' : '12 / 60 Days (20%)'}
          </span>
        </div>

        {/* Progress Bar */}
        <div style={{ height: '10px', width: '100%', background: 'var(--bg-input)', borderRadius: '9999px', overflow: 'hidden', marginBottom: '1rem' }}>
          <div style={{
            height: '100%',
            width: edgeCase === 'first_day' ? '0%' : '20%',
            background: 'var(--gradient-primary)',
            borderRadius: '9999px',
            transition: 'width 0.5s ease'
          }} />
        </div>

        {/* Standing & Recruiter Score Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <div style={{ background: 'var(--bg-input)', padding: '10px', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>STUDENT STANDING</div>
            <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--accent-amber)', marginTop: '2px' }}>
              {edgeCase === 'first_day' ? 'Starter' : 'Top 10% Builder'}
            </div>
          </div>

          <div style={{ background: 'var(--bg-input)', padding: '10px', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>RECRUITER VISIBILITY</div>
            <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--accent-emerald)', marginTop: '2px' }}>
              {edgeCase === 'first_day' ? '30%' : '88% High'}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
