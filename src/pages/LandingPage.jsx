import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Rocket, 
  CheckCircle2, 
  Flame, 
  Briefcase, 
  Moon, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Code2,
  Users
} from 'lucide-react';

export default function LandingPage() {
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

  return (
    <div style={{ paddingBottom: '90px', position: 'relative' }}>
      
      {/* 🌌 Theme-Specific 3D Background Artifacts */}
      {currentTheme === 'dark' ? (
        <>
          <div className="animate-fog" style={{
            position: 'absolute',
            top: '-50px',
            right: '-10%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, rgba(56, 189, 248, 0.15) 50%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 0
          }} />
          <div className="spatial-ring animate-ring-1" style={{ width: '90px', height: '90px', top: '15px', right: '-15px', zIndex: 1 }} />
          <div className="spatial-ring animate-ring-2" style={{ width: '70px', height: '70px', bottom: '200px', left: '-20px', zIndex: 1 }} />
        </>
      ) : (
        <>
          <div className="animate-fog" style={{
            position: 'absolute',
            top: '-40px',
            left: '-8%',
            width: '520px',
            height: '520px',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.18) 0%, rgba(6, 182, 212, 0.12) 50%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 0
          }} />
          <div className="spatial-cube animate-cube-1" style={{ top: '15px', right: '-15px' }} />
          <div className="spatial-cube animate-cube-2" style={{ bottom: '200px', left: '-20px' }} />
        </>
      )}

      {/* 🚀 Mobile Hero Section */}
      <section className="glass-panel" style={{ padding: '2rem 1.25rem', textAlign: 'center', marginBottom: '1.5rem', position: 'relative', zIndex: 2 }}>
        <div className="badge badge-purple" style={{ marginBottom: '1rem' }}>
          <Moon size={12} /> Designed for Late-Night Mobile Builders
        </div>

        <h1 style={{ fontSize: '2.1rem', fontWeight: 800, lineHeight: 1.25, marginBottom: '1rem', letterSpacing: '-0.5px' }}>
          Build Daily. Get Noticed. <span className="text-gradient">Land Your Dream Job.</span>
        </h1>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
          Join <strong>ABTalks 60-Day Challenge</strong> for Indian college students. Pick a track, build something every day after college, and post your proof of work.
        </p>

        {/* Mobile CTA */}
        <Link to="/dashboard" className="btn btn-primary" style={{ width: '100%', textDecoration: 'none', padding: '14px 20px', fontSize: '1rem' }}>
          <Rocket size={18} />
          <span>Start 60-Day Challenge (Free)</span>
        </Link>

        {/* Trust Badges */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '1.2rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <CheckCircle2 size={14} color="var(--accent-emerald)" /> 100% Free for Students
          </span>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <CheckCircle2 size={14} color="var(--accent-emerald)" /> Direct Recruiter Access
          </span>
        </div>
      </section>

      {/* ⚡ How It Works (Proof of Work System) */}
      <section style={{ marginBottom: '1.75rem', position: 'relative', zIndex: 2 }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Flame color="var(--accent-amber)" size={20} />
          <span>How Your Daily Streak Works</span>
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          
          {/* Step 1 */}
          <div className="glass-panel" style={{ padding: '1.25rem', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(99, 102, 241, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-purple)', fontWeight: 800, flexShrink: 0 }}>
              1
            </div>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '4px' }}>Pick Your Track & Build Daily</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                Choose AI, Fullstack, or Mobile. Receive a 30-minute late-night challenge every day.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="glass-panel" style={{ padding: '1.25rem', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-cyan)', fontWeight: 800, flexShrink: 0 }}>
              2
            </div>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Code2 size={16} /> Submit GitHub + LinkedIn Proof
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                Push your code commit to GitHub and share a 2-line learning update on LinkedIn.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="glass-panel" style={{ padding: '1.25rem', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(251, 191, 36, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-amber)', fontWeight: 800, flexShrink: 0 }}>
              3
            </div>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Briefcase size={16} /> Recruiter Visibility Leaderboard
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                Consistency boosts your Recruiter Score. Top tech hiring partners message students directly.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 🎯 Tracks Selection */}
      <section style={{ marginBottom: '1.75rem', position: 'relative', zIndex: 2 }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem' }}>
          Choose Your 60-Day Track
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="glass-panel" style={{ padding: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span className="badge badge-purple">AI Engineers</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>60 Challenges</span>
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '4px' }}>AI Agents & LLM Applications</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Build LangChain apps, RAG vector pipelines, and Gemini API agents.</p>
          </div>

          <div className="glass-panel" style={{ padding: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span className="badge badge-emerald">Fullstack Web</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>60 Challenges</span>
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '4px' }}>Modern React & Node.js</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Build REST APIs, real-time dashboards, and production SaaS tools.</p>
          </div>
        </div>
      </section>

      {/* Final Action Bar */}
      <section className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center', borderColor: 'var(--accent-purple)', position: 'relative', zIndex: 2 }}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.5rem' }}>Ready to build your streak?</h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '1rem' }}>
          Setup takes less than 2 minutes. Start Day 1 tonight!
        </p>
        <Link to="/dashboard" className="btn btn-primary" style={{ width: '100%', textDecoration: 'none' }}>
          <span>Enter Dashboard (/dashboard)</span>
          <ArrowRight size={18} />
        </Link>
      </section>

    </div>
  );
}
