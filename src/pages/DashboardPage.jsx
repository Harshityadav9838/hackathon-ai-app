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

  // Detect current active theme on html root tag
  const [currentTheme, setCurrentTheme] = useState(() => {
    return document.documentElement.getAttribute('data-theme') || 'dark';
  });

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const activeTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      setCurrentTheme(activeTheme);
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  // Live countdown timer calculation (45:12:30 / 47:18:02)
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
      
      {/* 🌌 Theme-Specific Background Effects */}
      {currentTheme === 'dark' ? (
        <>
          {/* Volumetric Cyber Neon Fog & 3D Spatial Rings (Dark Theme Image 2 Match) */}
          <div className="animate-fog" style={{
            position: 'absolute',
            top: '-50px',
            left: '-10%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, rgba(56, 189, 248, 0.15) 50%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 0
          }} />
          <div className="spatial-ring animate-ring-1" style={{ width: '90px', height: '90px', top: '10px', right: '-20px', zIndex: 1 }} />
          <div className="spatial-ring animate-ring-2" style={{ width: '75px', height: '75px', bottom: '160px', left: '-25px', zIndex: 1 }} />
          <div className="spatial-ring animate-ring-1" style={{ width: '60px', height: '60px', bottom: '60px', right: '-15px', zIndex: 1 }} />
        </>
      ) : (
        <>
          {/* Volumetric Radial Light Beams & 3D Floating Glass Cubes (Light Theme Image 1 Match) */}
          <div className="animate-fog" style={{
            position: 'absolute',
            top: '-40px',
            right: '-8%',
            width: '520px',
            height: '520px',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.18) 0%, rgba(6, 182, 212, 0.12) 50%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 0
          }} />
          <div className="spatial-cube animate-cube-1" style={{ top: '10px', right: '-20px' }} />
          <div className="spatial-cube animate-cube-2" style={{ bottom: '150px', left: '-25px' }} />
          <div className="spatial-pyramid animate-pyramid-1" style={{ top: '210px', right: '-15px' }} />
        </>
      )}

      {/* 🧪 Edge Case Tester Bar for Judges */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <EdgeCaseSwitcher edgeCase={edgeCase} setEdgeCase={setEdgeCase} />
      </div>

      {/* ========================================================================= */}
      {/* 🌙 DARK THEME UI (Exact Match with Image 2 Mockup) */}
      {/* ========================================================================= */}
      {currentTheme === 'dark' && (
        <>
          {/* Top Row: Hero Open Theme + Circular Neon Progress Timer */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '1.25rem', marginBottom: '1.5rem', position: 'relative', zIndex: 2 }}>
            
            {/* Left Hero Card */}
            <div className="glass-panel" style={{ padding: '1.6rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--text-muted)', letterSpacing: '0.5px', marginBottom: '6px' }}>
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
                </div>
              </div>

              <Link to="/day/12" className="btn btn-primary" style={{ textDecoration: 'none', width: '100%' }}>
                <span>Start Challenge</span>
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

          {/* Middle Row: 3 Cyber-Neon Metric Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginBottom: '1.5rem', position: 'relative', zIndex: 2 }}>
            <div className="glass-panel card-neon-cyan" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '12px', background: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-cyan)' }}>
                  <Clock size={20} />
                </div>
                <span className="neon-tag neon-tag-cyan">Build Window</span>
              </div>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', lineHeight: 1 }}>48</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '4px' }}>Hours</div>
            </div>

            <div className="glass-panel card-neon-purple" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '12px', background: 'rgba(168, 85, 247, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-purple)' }}>
                  <Trophy size={20} />
                </div>
                <span className="neon-tag neon-tag-purple">Grand Prize</span>
              </div>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, fontFamily: 'var(--font-mono)', color: 'var(--accent-purple)', lineHeight: 1 }}>₹20K</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '4px' }}>Prize Pool</div>
            </div>

            <div className="glass-panel card-neon-pink" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '12px', background: 'rgba(244, 114, 182, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-pink)' }}>
                  <Users size={20} />
                </div>
                <span className="neon-tag neon-tag-pink">Active Hackers</span>
              </div>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, fontFamily: 'var(--font-mono)', color: 'var(--accent-pink)', lineHeight: 1 }}>500+</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '4px' }}>Participants</div>
            </div>
          </div>
        </>
      )}

      {/* ========================================================================= */}
      {/* ☀️ LIGHT THEME UI (Exact Match with Image 1 Mockup) */}
      {/* ========================================================================= */}
      {currentTheme === 'light' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem', marginBottom: '1.5rem', position: 'relative', zIndex: 2 }}>
          
          {/* Left Hero Card */}
          <div className="glass-panel" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--text-muted)', letterSpacing: '0.5px', marginBottom: '6px' }}>
                YOUR CHALLENGE:
              </div>
              
              <h1 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '0.8rem' }}>
                Open Theme
              </h1>

              {/* Solid Colored Pills */}
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
            
            {/* 48 Hours Left */}
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
                <div style={{ height: '6px', width: '100%', background: 'rgba(0,0,0,0.06)', borderRadius: '9999px', marginTop: '8px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: '75%', background: 'var(--gradient-neon)', borderRadius: '9999px' }} />
                </div>
              </div>
            </div>

            {/* ₹20K Prize Pool + 500+ Participants */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              <div className="glass-panel" style={{ padding: '1.25rem' }}>
                <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: 'rgba(168, 85, 247, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-purple)', marginBottom: '0.6rem' }}>
                  <Trophy size={18} />
                </div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-mono)' }}>₹20K</div>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Prize Pool</div>
                <span className="badge badge-purple" style={{ fontSize: '0.62rem', marginTop: '6px' }}>Grand Prize</span>
              </div>

              <div className="glass-panel" style={{ padding: '1.25rem' }}>
                <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: 'rgba(6, 182, 212, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-cyan)', marginBottom: '0.6rem' }}>
                  <Users size={18} />
                </div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-mono)' }}>500+</div>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Participants</div>
                <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginTop: '4px', display: 'block' }}>Active Hackers</span>
              </div>
            </div>

          </div>

        </div>
      )}

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
