import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  Send, 
  Copy, 
  Sparkles, 
  ArrowLeft, 
  ArrowRight,
  FileCode2, 
  ShieldCheck, 
  Clock,
  AlertCircle,
  GitBranch,
  Share2,
  Target,
  BookOpen,
  Lightbulb,
  ExternalLink,
  ChevronDown,
  Circle
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ChallengeDay() {
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

  const [githubUrl, setGithubUrl] = useState('https://github.com/Harshityadav9838/hackathon-ai-app');
  const [linkedinUrl, setLinkedinUrl] = useState('https://linkedin.com/posts/harshit-day12-challenge');
  const [submitted, setSubmitted] = useState(false);
  const [copiedLinkedInDraft, setCopiedLinkedInDraft] = useState(false);
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (key) => {
    setOpenSection((prev) => (prev === key ? null : key));
  };

  // Auto-generated LinkedIn Post Draft
  const linkedinDraft = `🔥 Day 12 of 60 Completed! 

Today I built a Fullstack REST API with rate limiting and error handling for the #ABTalks 60-Day Challenge!

💻 Code: ${githubUrl || 'https://github.com/...'}
🚀 Progress: 12/60 Days Streak Active!

#ABTalks #60DaysOfCode #BuildInPublic #AI`;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!githubUrl || !linkedinUrl) return;
    setSubmitted(true);
  };

  const handleCopyDraft = () => {
    navigator.clipboard.writeText(linkedinDraft);
    setCopiedLinkedInDraft(true);
    setTimeout(() => setCopiedLinkedInDraft(false), 3000);
  };

  return (
    <div style={{ paddingBottom: '90px', position: 'relative' }}>
      
      {/* 🌌 Theme-Specific 3D Background Artifacts */}
      {currentTheme === 'dark' ? (
        <>
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
          <div className="spatial-ring animate-ring-1" style={{ width: '90px', height: '90px', top: '15px', right: '-15px', zIndex: 1 }} />
          <div className="spatial-ring animate-ring-2" style={{ width: '70px', height: '70px', bottom: '150px', left: '-20px', zIndex: 1 }} />
        </>
      ) : (
        <>
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
          <div className="spatial-cube animate-cube-1" style={{ top: '15px', right: '-15px' }} />
          <div className="spatial-cube animate-cube-2" style={{ bottom: '150px', left: '-20px' }} />
        </>
      )}

      {/* Back Link */}
      <div style={{ marginBottom: '1rem', position: 'relative', zIndex: 2 }}>
        <Link to="/dashboard" style={{ color: 'var(--text-secondary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', fontWeight: 600 }}>
          <ArrowLeft size={16} />
          <span>Back to Dashboard (/dashboard)</span>
        </Link>
      </div>

      {/* 📅 Task Header */}
      <div style={{ marginBottom: '1.25rem', position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <span className="badge badge-amber">DAY 12 OF 60</span>
          <span className="badge badge-purple">AI Engineer Track</span>
        </div>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3 }}>
          Build a Fullstack REST API with Rate Limiting
        </h1>
      </div>

      {/* 📊 Difficulty / Time / Skills */}
      <div className="glass-panel" style={{ padding: '1.1rem', marginBottom: '1.25rem', position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.6rem', textAlign: 'center' }}>
        <div>
          <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '4px' }}>DIFFICULTY</div>
          <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--accent-amber)' }}>Beginner</div>
        </div>
        <div>
          <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '4px' }}>TIME</div>
          <div style={{ fontSize: '0.85rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '4px', justifyContent: 'center' }}>
            <Clock size={13} /> 30 min
          </div>
        </div>
        <div>
          <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '4px' }}>SKILLS</div>
          <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--accent-emerald)' }}>Git • GitHub • API</div>
        </div>
      </div>

      {/* ✨ Today's Mission */}
      <div className="glass-panel" style={{ padding: '1.25rem', marginBottom: '1.25rem', position: 'relative', zIndex: 2 }}>
        <h2 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Sparkles size={17} color="var(--accent-emerald)" />
          <span>Today's Mission</span>
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
          {[
            'Implement rate-limiting middleware (sliding window / per-IP).',
            'Sanitize error messages so internal stack traces are never exposed.',
            'Write a short README documenting your approach.',
            'Push commit to GitHub and share LinkedIn proof post.',
          ].map((step, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '0.8rem', borderRadius: '12px', background: 'var(--bg-input)', border: '1px solid var(--border-color)' }}>
              <span style={{ width: '24px', height: '24px', borderRadius: '50%', border: '1px solid var(--accent-emerald)', color: 'var(--accent-emerald)', fontSize: '0.75rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {i + 1}
              </span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>{step}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 📚 Info Accordions */}
      <div className="glass-panel" style={{ marginBottom: '1.25rem', position: 'relative', zIndex: 2, overflow: 'hidden' }}>
        {[
          { key: 'before', icon: <BookOpen size={16} color="var(--accent-emerald)" />, title: 'Before You Start', body: 'Make sure Node.js, Git, and a code editor are installed. Have a GitHub account ready and be signed in to LinkedIn on this device.' },
          { key: 'learn', icon: <CheckCircle2 size={16} color="var(--accent-emerald)" />, title: "What You'll Learn", body: 'How sliding-window rate limiting works, how to structure Express middleware, and how to avoid leaking internal errors to clients.' },
          { key: 'tips', icon: <Lightbulb size={16} color="var(--accent-amber)" />, title: 'Pro Tips', body: 'Test your rate limiter with rapid repeated requests using curl or Postman. Log rejected requests separately from successful ones.' },
          { key: 'resources', icon: <ExternalLink size={16} color="var(--accent-cyan)" />, title: 'Resources', body: 'MDN: HTTP status codes • Express.js middleware docs • OWASP error-handling cheat sheet.' },
        ].map((section, i, arr) => (
          <div key={section.key} style={{ borderBottom: i < arr.length - 1 ? '1px solid var(--border-color)' : 'none' }}>
            <button
              onClick={() => toggleSection(section.key)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1rem 1.25rem',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text-primary)'
              }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', fontWeight: 700 }}>
                {section.icon}
                {section.title}
              </span>
              <ChevronDown size={16} color="var(--text-muted)" style={{ transform: openSection === section.key ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            </button>
            {openSection === section.key && (
              <div style={{ padding: '0 1.25rem 1rem', fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {section.body}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 📄 TASK DETAILS & INSTRUCTIONS */}
      <div className="glass-panel" style={{ padding: '1.25rem', marginBottom: '1.25rem', position: 'relative', zIndex: 2 }}>
        <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <FileCode2 size={18} color="var(--accent-purple)" />
          <span>What Needs To Be Built</span>
        </h2>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.5, marginBottom: '0.8rem' }}>
          Today's challenge focuses on building production-grade API safety. Build an API endpoint that enforces rate limiting and prevents information leakage.
        </p>

        <div style={{ background: 'var(--bg-input)', padding: '10px 12px', borderRadius: '10px', border: '1px solid var(--border-color)', marginBottom: '0.8rem' }}>
          <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--accent-amber)', marginBottom: '4px' }}>
            🎯 DELIVERABLES FOR TODAY:
          </div>
          <ul style={{ paddingLeft: '1.2rem', fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            <li>Implement rate-limiting middleware (sliding window / per-IP).</li>
            <li>Sanitize error messages so internal stack traces are never exposed.</li>
            <li>Push commit to GitHub & share LinkedIn proof post.</li>
          </ul>
        </div>
      </div>

      {/* 📝 PROOF OF WORK SUBMISSION FORM */}
      <div className="glass-panel" style={{ padding: '1.25rem', marginBottom: '1.25rem', position: 'relative', zIndex: 2 }}>
        <h2 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <ShieldCheck size={18} color="var(--accent-emerald)" />
          <span>Submit Proof of Work</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '1.25rem' }}>
          Both GitHub commit link and LinkedIn post link are required to maintain your streak.
        </p>

        {submitted ? (
          <div style={{ background: 'rgba(52, 211, 153, 0.12)', border: '1px solid var(--accent-emerald)', padding: '1.25rem', borderRadius: '14px', textAlign: 'center' }}>
            <CheckCircle2 size={36} color="var(--accent-emerald)" style={{ marginBottom: '8px' }} />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--accent-emerald)' }}>Day 12 Proof Submitted!</h3>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '4px', marginBottom: '1rem' }}>
              Your 12-day streak has been updated successfully. Recruiter score boosted to 88%!
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="btn btn-secondary" style={{ width: '100%', fontSize: '0.85rem' }}>
              Edit Day 12 Submission
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            
            {/* Input 1: GitHub Commit / Repo URL */}
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '4px', color: 'var(--text-secondary)' }}>
                1. GitHub Repository / Commit URL *
              </label>
              <div style={{ position: 'relative' }}>
                <input 
                  type="url"
                  placeholder="https://github.com/username/repo/commit/..."
                  value={githubUrl}
                  onChange={e => setGithubUrl(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '10px 12px 10px 38px',
                    borderRadius: '10px',
                    background: 'var(--bg-input)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-primary)',
                    fontSize: '0.85rem',
                    outline: 'none'
                  }}
                />
                <GitBranch size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              </div>
            </div>

            {/* Input 2: LinkedIn Post URL */}
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '4px', color: 'var(--text-secondary)' }}>
                2. LinkedIn Public Post URL *
              </label>
              <div style={{ position: 'relative' }}>
                <input 
                  type="url"
                  placeholder="https://linkedin.com/posts/..."
                  value={linkedinUrl}
                  onChange={e => setLinkedinUrl(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '10px 12px 10px 38px',
                    borderRadius: '10px',
                    background: 'var(--bg-input)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-primary)',
                    fontSize: '0.85rem',
                    outline: 'none'
                  }}
                />
                <Share2 size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--accent-cyan)' }} />
              </div>
            </div>

            {/* Automated LinkedIn Post Generator Helper */}
            <div style={{ background: 'var(--bg-input)', padding: '10px 12px', borderRadius: '10px', border: '1px dashed var(--accent-purple)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-purple)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Sparkles size={12} /> Auto LinkedIn Post Generator
                </span>
                <button 
                  type="button" 
                  onClick={handleCopyDraft}
                  className="btn btn-secondary" 
                  style={{ padding: '4px 8px', fontSize: '0.7rem' }}>
                  <Copy size={12} />
                  <span>{copiedLinkedInDraft ? 'Copied!' : 'Copy Draft'}</span>
                </button>
              </div>
              <pre style={{ fontSize: '0.72rem', color: 'var(--text-muted)', whiteSpace: 'pre-wrap', fontFamily: 'var(--font-mono)' }}>
                {linkedinDraft}
              </pre>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '12px', marginTop: '4px' }}>
              <Send size={16} />
              <span>Submit Day 12 & Keep Streak Alive</span>
            </button>
          </form>
     )}

        {/* 📋 Status Ledger */}
        <div style={{ marginTop: '1.25rem', paddingTop: '1.1rem', borderTop: '1px solid var(--border-color)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Circle size={8} fill="var(--accent-emerald)" color="var(--accent-emerald)" /> PENDING REVIEW
            </span>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 700 }}>Status Ledger</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem', marginBottom: '0.8rem' }}>
            <div style={{ padding: '0.8rem', borderRadius: '10px', background: 'var(--bg-input)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700 }}>GitHub Repository</div>
              <div style={{ fontSize: '0.72rem', color: githubUrl ? 'var(--accent-emerald)' : 'var(--text-muted)', marginTop: '2px' }}>
                {githubUrl ? 'Submitted' : 'Not Submitted'}
              </div>
            </div>
            <div style={{ padding: '0.8rem', borderRadius: '10px', background: 'var(--bg-input)' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700 }}>LinkedIn Update</div>
              <div style={{ fontSize: '0.72rem', color: linkedinUrl ? 'var(--accent-emerald)' : 'var(--text-muted)', marginTop: '2px' }}>
                {linkedinUrl ? 'Submitted' : 'Not Submitted'}
              </div>
            </div>
          </div>

          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
            Your submission is saved locally. Complete both proof links to finalize Day 12.
          </p>
        </div>
      </div>

      {/* 🎯 Almost There Summary */}
      {!submitted && (
        <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.8rem' }}>
            {(githubUrl ? 1 : 0) + (linkedinUrl ? 1 : 0) === 2 ? 'Ready to submit!' : 'Almost there.'}
          </h3>
          <span className="badge badge-purple" style={{ marginBottom: '1rem' }}>
            {(githubUrl ? 1 : 0) + (linkedinUrl ? 1 : 0)} / 2 submissions complete
          </span>
          <button onClick={handleSubmit} className="btn btn-primary" style={{ width: '100%', marginTop: '0.6rem' }}>
            <span>SUBMIT DAY 12 & UPDATE STREAK</span>
            <ArrowRight size={16} />
          </button>
        </div>
      )}

    </div>
  );
}
