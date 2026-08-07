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
  MoreHorizontal,
  Bell
} from 'lucide-react';
import EdgeCaseSwitcher from '../components/EdgeCaseSwitcher';

export default function DashboardPage() {
  const [edgeCase, setEdgeCase] = useState('active');

  // Live countdown timer calculation (47:18:02)
  const [timerSeconds, setTimerSeconds] = useState(47 * 3600 + 18 * 60 + 2);

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
      
      {/* 🌌 Volumetric Ambient Light Fog & Radial Flare */}
      <div className="animate-fog" style={{
        position: 'absolute',
        top: '-60px',
        left: '-12%',
        width: '550px',
        height: '550px',
        background: 'var(--flare-gradient)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      {/* 🔮 3D Floating Spatial Background Artifacts (Matching Mockups 100%) */}
      <div className="spatial-cube animate-cube-1" style={{ top: '15px', right: '-25px' }} />
      <div className="spatial-cube animate-cube-2" style={{ bottom: '140px', left: '-30px' }} />
      <div className="spatial-pyramid animate-pyramid-1" style={{ top: '220px', right: '-15px' }} />
      <div className="spatial-ring animate-ring-1" style={{ width: '95px', height: '95px', top: '10px', right: '40px', zIndex: 1 }} />
      <div className="spatial-ring animate-ring-2" style={{ width: '75px', height: '75px', bottom: '260px', left: '-15px', zIndex: 1 }} />

      {/* 🧪 Edge Case Tester Bar for Judges */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <EdgeCaseSwitcher edgeCase={edgeCase} setEdgeCase={setEdgeCase} />
      </div>

      {/* 🚀 TOP HERO GRID: Open Theme + 48 Hours Left / Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem', marginBottom: '1.5rem', position: 'relative', zIndex: 2 }}>
        
        {/* Left Hero Card: YOUR CHALLENGE: Open Theme */}
        <div className="glass-panel" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--text-muted)', letterSpacing: '0.5px', marginBottom: '6px' }}>
              YOUR CHALLENGE:
            </div>
            
            <h1 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '0.8rem' }}>
              Open Theme
            </h1>

            {/* Colored Pill Tags (#AI, #BuildInPublic, #XR, #Innovate) */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '1rem' }}>
              <span className="light-pill light-pill-purple">#AI</span>
              <span className="light-pill light-pill-cyan">#BuildInPublic</span>
              <span className="light-pill light-pill-blue">#XR</span>
              <span className="light-pill light-pill-emerald">#Innovate</span>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.5, marginBottom: '1.5rem' }}>
              Build groundbreaking spatial experiences.
            </p>
          </div>

          <div>
            <Link to="/day/12" className="btn-start-project" style={{ textDecoration: 'none' }}>
              <span>START PROJECT</span>
              <Sparkles size={16} />
            </Link>
          </div>
        </div>

        {/* Right Column: 48 Hours Left + ₹20K Prize Pool + 500+ Participants */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          {/* Card 1: 48 Hours Left with Linear Progress Bar */}
          <div className="glass-panel" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(129, 140, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-purple)', flexShrink: 0 }}>
              <Clock size={22} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>48 Hours Left</h3>
                <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', fontWeight: 700 }}>
                  Countdown: {formatTimer(timerSeconds)}
                </span>
              </div>
              
              {/* Linear Gradient Progress Bar */}
              <div style={{ height: '6px', width: '100%', background: 'rgba(0,0,0,0.06)', borderRadius: '9999px', marginTop: '8px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: '75%', background: 'var(--gradient-neon)', borderRadius: '9999px' }} />
              </div>
            </div>
          </div>

          {/* Cards 2 & 3: ₹20K Prize Pool + 500+ Participants */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
            
            {/* ₹20K Prize Pool */}
            <div className="glass-panel" style={{ padding: '1.25rem' }}>
              <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: 'rgba(168, 85, 247, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-purple)', marginBottom: '0.6rem' }}>
                <Trophy size={18} />
              </div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-mono)' }}>
                ₹20K
              </div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
                Prize Pool
              </div>
              <span className="badge badge-purple" style={{ fontSize: '0.62rem', marginTop: '6px' }}>
                Grand Prize
              </span>
            </div>

            {/* 500+ Participants */}
            <div className="glass-panel" style={{ padding: '1.25rem' }}>
              <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: 'rgba(6, 182, 212, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-cyan)', marginBottom: '0.6rem' }}>
                <Users size={18} />
              </div>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-mono)' }}>
                500+
              </div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
                Participants
              </div>
              <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginTop: '4px', display: 'block' }}>
                Active Hackers
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* 🔥 STREAK CARD & EDGE CASES (Student Platform Section) */}
      <div style={{ position: 'relative', zIndex: 2, marginBottom: '1.5rem' }}>
        {edgeCase === 'active' && (
          <div className="glass-panel" style={{ padding: '1.25rem', border: '1px solid var(--accent-purple)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ fontSize: '1.8rem' }}>🔥</div>
                <div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, fontFamily: 'var(--font-mono)', color: 'var(--accent-purple)', lineHeight: 1 }}>
                    12 DAYS STREAK
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Overall Completion: 12 / 60 Days (20%)</div>
                </div>
              </div>
              <span className="badge badge-purple">Consistent Builder</span>
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
              <span className="badge badge-purple">Grace Period</span>
            </div>
          </div>
        )}
      </div>

      {/* 📑 BOTTOM 3 CARDS: Hackathon Activity + Your Team: NeoVision + Upcoming Events */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', position: 'relative', zIndex: 2 }}>
        
        {/* Hackathon Activity */}
        <div className="glass-panel" style={{ padding: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>Hackathon Activity</h3>
            <MoreHorizontal size={16} color="var(--text-muted)" />
          </div>

          <div style={{ display: 'flex', gap: '12px', fontSize: '0.78rem', fontWeight: 700, borderBottom: '1px solid var(--border-color)', paddingBottom: '6px', marginBottom: '10px' }}>
            <span style={{ color: 'var(--accent-purple)', borderBottom: '2px solid var(--accent-purple)', paddingBottom: '4px' }}>Project Submissions</span>
            <span style={{ color: 'var(--text-muted)' }}>Leaderboard</span>
            <span style={{ color: 'var(--text-muted)' }}>Live feed</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px', background: 'rgba(0,0,0,0.03)', borderRadius: '10px' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#000', color: '#fff', fontSize: '0.75rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              N
            </div>
            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 700 }}>NeoVision</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Project ram</div>
            </div>
          </div>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '6px' }}>
            Cambaking Umaright now - Build groundbreaking spatial experiences.
          </p>
        </div>

        {/* Your Team: NeoVision */}
        <div className="glass-panel" style={{ padding: '1.25rem' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.8rem' }}>Your Team: NeoVision</h3>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
            <span>Members</span>
            <span>Progress</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justify: 'space-between', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', marginLeft: '6px' }}>
              <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#6366f1', color: '#fff', fontSize: '0.75rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--bg-card)' }}>SC</div>
              <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#a855f7', color: '#fff', fontSize: '0.75rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--bg-card)', marginLeft: '-6px' }}>HY</div>
              <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#06b6d4', color: '#fff', fontSize: '0.75rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--bg-card)', marginLeft: '-6px' }}>AK</div>
            </div>

            <div style={{ width: '100px', height: '6px', background: 'rgba(0,0,0,0.06)', borderRadius: '9999px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: '85%', background: 'var(--gradient-neon)' }} />
            </div>
          </div>

          <Link to="/day/12" className="btn btn-secondary" style={{ width: '100%', fontSize: '0.82rem', textDecoration: 'none' }}>
            <span>Submit Day 12</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Upcoming Events */}
        <div className="glass-panel" style={{ padding: '1.25rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>Upcoming Events</h3>
            <MoreHorizontal size={16} color="var(--text-muted)" />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid var(--border-color)' }}>
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700 }}>Workshops</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>21 Jan 2023 - 1:30 am</div>
              </div>
              <ChevronRight size={16} color="var(--text-muted)" />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 0' }}>
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700 }}>Demos</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>6 Jun 2023 - 3:00 pm</div>
              </div>
              <ChevronRight size={16} color="var(--text-muted)" />
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
