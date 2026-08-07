import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Send, 
  Copy, 
  Sparkles, 
  ArrowLeft, 
  FileCode2, 
  ShieldCheck, 
  Clock,
  AlertCircle,
  GitBranch,
  Share2
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ChallengeDay() {
  const [githubUrl, setGithubUrl] = useState('https://github.com/Harshityadav9838/hackathon-ai-app');
  const [linkedinUrl, setLinkedinUrl] = useState('https://linkedin.com/posts/harshit-day12-challenge');
  const [submitted, setSubmitted] = useState(false);
  const [copiedLinkedInDraft, setCopiedLinkedInDraft] = useState(false);

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
    <div style={{ paddingBottom: '90px' }}>
      
      {/* Back Link */}
      <div style={{ marginBottom: '1rem' }}>
        <Link to="/dashboard" style={{ color: 'var(--text-secondary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', fontWeight: 600 }}>
          <ArrowLeft size={16} />
          <span>Back to Dashboard (/dashboard)</span>
        </Link>
      </div>

      {/* 📅 Task Header */}
      <div style={{ marginBottom: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <span className="badge badge-amber">DAY 12 OF 60</span>
          <span className="badge badge-purple">AI Engineer Track</span>
        </div>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3 }}>
          Build a Fullstack REST API with Rate Limiting
        </h1>
      </div>

      {/* 📄 TASK DETAILS & INSTRUCTIONS */}
      <div className="glass-panel" style={{ padding: '1.25rem', marginBottom: '1.25rem' }}>
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
      <div className="glass-panel" style={{ padding: '1.25rem', marginBottom: '1.25rem' }}>
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
      </div>

    </div>
  );
}
