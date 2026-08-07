import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Flame, 
  Clock, 
  Trophy, 
  Users, 
  Rocket, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Calendar,
  Layers,
  ChevronRight,
  TrendingUp,
  UserCheck,
  Video
} from 'lucide-react';
import EdgeCaseSwitcher from '../components/EdgeCaseSwitcher';

export default function DashboardPage() {
  const [edgeCase, setEdgeCase] = useState('active');

  // Live countdown timer calculation for Circular Progress Widget (45:12:30)
  const [timerSeconds, setTimerSeconds] = useState(45 * 3600 + 12 * 60 + 30);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimerSeconds(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTimer = (totalSec) => {
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  return (
    <div style={{ paddingBottom: '95px', position: 'relative' }}>
      
      {/* 🌌 Volumetric Ambient Neon Fog (Dark Mode) */}
      <div className="animate-fog" style={{
        position: 'absolute',
        top: '-50px',
        left: '-10%',
        width: '450px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(168, 85, 247, 0.22) 0%, rgba(56, 189, 248, 0.12) 50%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      {/* 🔮 3D Floating Spatial Rings (Matching Mockup Images 100%) */}
      <div className="spatial-ring animate-ring-1" style={{ width: '90px', height: '90px', top: '20px', right: '-20px', zIndex: 1 }} />
      <div className="spatial-ring animate-ring-2" style={{ width: '70px', height: '70px', bottom: '150px', left: '-25px', zIndex: 1 }} />

      {/* 🧪 Edge Case Tester Bar for Judges */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <EdgeCaseSwitcher edgeCase={edgeCase} setEdgeCase={setEdgeCase} />
      </div>

      {/* 🚀 TOP HERO ROW: Open Theme Spotlight Card + Circular Neon Countdown Timer */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '1.25rem', marginBottom: '1.5rem', position: 'relative', zIndex: 2 }}>
        
        {/* Left Card: YOUR CHALLENGE: Open Theme */}
        <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.5px', marginBottom: '6px' }}>
              YOUR CHALLENGE:
            </div>
            
            <h1 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              Open Theme <span className="animate-float" style={{ display: 'inline-block' }}>🚀</span>
            </h1>

            {/* Glowing Neon Tags */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '1rem' }}>
              <span className="neon-tag neon-tag-purple">#AI</span>
              <span className="neon-tag neon-tag-pink">#BuildInPublic</span>
              <span className="neon-tag neon-tag-cyan">#48Hours</span>
              <span className="neon-tag neon-tag-emerald">#Innovate</span>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.5, marginBottom: '1.25rem' }}>
              Build groundbreaking spatial & web experiences using AI in 48 hours.
            </p>
          </div>

          <Link to="/day/12" className="btn btn-primary" style={{ textDecoration: 'none', width: '100%' }}>
            <span>START PROJECT</span>
            <Sparkles size={16} />
          </Link>
        </div>

        {/* Right Card: Circular Neon Countdown Progress Timer Widget */}
        <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.8rem' }}>
            COUNTDOWN TIMER
          </div>

          {/* ⭕ Circular Neon Progress Ring */}
          <div className="circular-timer-ring" style={{ marginBottom: '0.8rem' }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              Time Left
            </div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, fontFamily: 'var(--font-mono)', color: 'var(--text-primary)', marginTop: '2px' }}>
              {formatTimer(timerSeconds)}
            </div>
          </div>

          <div style={{ fontSize: '0.78rem', color: 'var(--accent-emerald)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Clock size={12} /> Deadline: Sunday 8:00 PM IST
          </div>
        </div>

      </div>

      {/* 📊 MIDDLE ROW: 3 Cyber-Neon Metric Cards (Matching Mockup 100%) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginBottom: '1.5rem', position: 'relative', zIndex: 2 }}>
        
        {/* Card 1: 48 Hours */}
        <div className="glass-panel card-neon-cyan" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '12px', background: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-cyan)' }}>
              <Clock size={20} />
            </div>
            <span className="neon-tag neon-tag-cyan">Build Window</span>
          </div>

          <div style={{ fontSize: '2.2rem', fontWeight: 800, fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', lineHeight: 1 }}>
            48
          </div>
          <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
            Hours Total
          </div>
        </div>

        {/* Card 2: ₹20K Prize Pool */}
        <div className="glass-panel card-neon-purple" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '12px', background: 'rgba(168, 85, 247, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-purple)' }}>
              <Trophy size={20} />
            </div>
            <span className="neon-tag neon-tag-purple">Grand Prize</span>
          </div>

          <div style={{ fontSize: '2.2rem', fontWeight: 800, fontFamily: 'var(--font-mono)', color: 'var(--accent-purple)', lineHeight: 1 }}>
            ₹20K
          </div>
          <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
            Prize Pool
          </div>
        </div>

        {/* Card 3: 500+ Participants */}
        <div className="glass-panel card-neon-pink" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '12px', background: 'rgba(244, 114, 182, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-pink)' }}>
              <Users size={20} />
            </div>
            <span className="neon-tag neon-tag-pink">Active Hackers</span>
          </div>

          <div style={{ fontSize: '2.2rem', fontWeight: 800, fontFamily: 'var(--font-mono)', color: 'var(--accent-pink)', lineHeight: 1 }}>
            500+
          </div>
          <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
            Building Right Now
          </div>
        </div>

      </div>

      {/* 🔥 STREAK CARD & EDGE CASES (Student Platform Section) */}
      <div style={{ position: 'relative', zIndex: 2, marginBottom: '1.5rem' }}>
        {edgeCase === 'active' && (
          <div className="glass-panel" style={{ padding: '1.25rem', border: '1px solid var(--accent-amber)', background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(239, 68, 68, 0.08) 100%)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div className="animate-flame" style={{ fontSize: '1.8rem' }}>🔥</div>
                <div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, fontFamily: 'var(--font-mono)', color: 'var(--accent-amber)', lineHeight: 1 }}>
                    12 DAYS STREAK
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Overall Progress: 12 / 60 Days (20%)</div>
                </div>
              </div>
              <span className="badge badge-amber">Consistent Builder</span>
            </div>
          </div>
        )}

        {edgeCase === 'first_day' && (
          <div className="glass-panel" style={{ padding: '1.25rem', border: '1px solid var(--accent-emerald)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ fontSize: '1.8rem' }}>🌟</div>
                <div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, fontFamily: 'var(--font-mono)', color: 'var(--accent-emerald)', lineHeight: 1 }}>
                    0 DAYS STREAK
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Day 1 Kickoff • Start your 60-day journey!</div>
                </div>
              </div>
              <span className="badge badge-emerald">New Builder</span>
            </div>
          </div>
        )}

        {edgeCase === 'missed_day' && (
          <div className="glass-panel" style={{ padding: '1.25rem', border: '1px solid var(--accent-pink)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ fontSize: '1.8rem' }}>⚠️</div>
                <div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--accent-pink)', lineHeight: 1 }}>
                    MISSED DAY 11
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Complete Day 12 to activate Streak Shield!</div>
                </div>
              </div>
              <span className="badge badge-red">Grace Period</span>
            </div>
          </div>
        )}
      </div>

      {/* 📑 BOTTOM ACTIVITY & TEAM SECTION (Matching Mockup 100%) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', position: 'relative', zIndex: 2 }}>
        
        {/* Hackathon Activity */}
        <div className="glass-panel" style={{ padding: '1.25rem' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.8rem', display: 'flex', alignItems: 'center', justify: 'space-between' }}>
            <span>Hackathon Activity</span>
            <span className="badge badge-purple">Live Feed</span>
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px', background: 'var(--bg-input)', borderRadius: '10px' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--gradient-primary)', color: '#fff', fontSize: '0.75rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                N
              </div>
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700 }}>NeoVision Team</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Submitted spatial prototype</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px', background: 'var(--bg-input)', borderRadius: '10px' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--gradient-neon)', color: '#fff', fontSize: '0.75rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                H
              </div>
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700 }}>Harshit Yadav</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--accent-emerald)' }}>Day 12 Proof Verified</div>
              </div>
            </div>
          </div>
        </div>

        {/* Your Team: NeoVision */}
        <div className="glass-panel" style={{ padding: '1.25rem' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.8rem', display: 'flex', alignItems: 'center', justify: 'space-between' }}>
            <span>Your Team: NeoVision</span>
            <span className="badge badge-emerald">Progress 85%</span>
          </h3>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', marginLeft: '6px' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#6366f1', color: '#fff', fontSize: '0.75rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--bg-card)' }}>SC</div>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#a855f7', color: '#fff', fontSize: '0.75rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--bg-card)', marginLeft: '-8px' }}>HY</div>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#38bdf8', color: '#fff', fontSize: '0.75rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--bg-card)', marginLeft: '-8px' }}>AK</div>
            </div>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>3 Active Members</span>
          </div>

          <Link to="/day/12" className="btn btn-secondary" style={{ width: '100%', fontSize: '0.82rem', textDecoration: 'none' }}>
            <span>Go to Day 12 Submission</span>
            <ArrowRight size={14} />
          </Link>
        </div>

      </div>

    </div>
  );
}
