import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Clock,
  Trophy,
  Users,
  Sparkles,
  ArrowRight,
  Calendar,
  ChevronRight,
  TrendingUp,
  MoreHorizontal,
  Shield,
  Zap,
  Award,
  Lock,
  AlertCircle
} from 'lucide-react';
import EdgeCaseSwitcher from '../components/EdgeCaseSwitcher';

export default function DashboardPage() {
  const [edgeCase, setEdgeCase] = useState('active');

  const [currentTheme, setCurrentTheme] = useState(() => {
    return document.documentElement.getAttribute('data-theme') || 'dark';
  });

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const activeTheme =
        document.documentElement.getAttribute('data-theme') || 'dark';

      setCurrentTheme(activeTheme);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    return () => observer.disconnect();
  }, []);

const DEADLINE_KEY = 'abtalks_challenge_deadline';

  const [deadline] = useState(() => {
    const stored = localStorage.getItem(DEADLINE_KEY);
    if (stored) return new Date(stored);
    const today8pm = new Date();
    today8pm.setHours(20, 0, 0, 0);
    localStorage.setItem(DEADLINE_KEY, today8pm.toISOString());
    return today8pm;
  });
  const [timerSeconds, setTimerSeconds] = useState(() =>
    Math.max(0, Math.floor((deadline.getTime() - Date.now()) / 1000))
  );
  const [deadlinePassed, setDeadlinePassed] = useState(() => timerSeconds <= 0);

  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = Math.max(0, Math.floor((deadline.getTime() - Date.now()) / 1000));
      setTimerSeconds(remaining);
      if (remaining <= 0) {
        setDeadlinePassed(true);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [deadline]);

  const formatTimer = (totalSec) => {
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;

    return `${String(h).padStart(2, '0')}:${String(m).padStart(
      2,
      '0'
    )}:${String(s).padStart(2, '0')}`;
  };

  return (
    <div style={{ paddingBottom: '95px', position: 'relative' }}>

      {/* Theme Background */}
      {currentTheme === 'dark' ? (
        <>
          <div
            className="animate-fog"
            style={{
              position: 'absolute',
              top: '-50px',
              left: '-10%',
              width: '500px',
              height: '500px',
              background:
                'radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, rgba(56, 189, 248, 0.15) 50%, transparent 70%)',
              pointerEvents: 'none',
              zIndex: 0
            }}
          />

          <div
            className="spatial-ring animate-ring-1"
            style={{
              width: '90px',
              height: '90px',
              top: '10px',
              right: '-20px',
              zIndex: 1
            }}
          />

          <div
            className="spatial-ring animate-ring-2"
            style={{
              width: '75px',
              height: '75px',
              bottom: '160px',
              left: '-25px',
              zIndex: 1
            }}
          />

          <div
            className="spatial-ring animate-ring-1"
            style={{
              width: '60px',
              height: '60px',
              bottom: '60px',
              right: '-15px',
              zIndex: 1
            }}
          />
        </>
      ) : (
        <>
          <div
            className="animate-fog"
            style={{
              position: 'absolute',
              top: '-40px',
              right: '-8%',
              width: '520px',
              height: '520px',
              background:
                'radial-gradient(circle, rgba(99, 102, 241, 0.18) 0%, rgba(6, 182, 212, 0.12) 50%, transparent 70%)',
              pointerEvents: 'none',
              zIndex: 0
            }}
          />

          <div
            className="spatial-cube animate-cube-1"
            style={{ top: '10px', right: '-20px' }}
          />

          <div
            className="spatial-cube animate-cube-2"
            style={{ bottom: '150px', left: '-25px' }}
          />

          <div
            className="spatial-pyramid animate-pyramid-1"
            style={{ top: '210px', right: '-15px' }}
          />
        </>
      )}

      {/* Edge Case Tester */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <EdgeCaseSwitcher
          edgeCase={edgeCase}
          setEdgeCase={setEdgeCase}
        />
      </div>

      {/* DARK THEME */}
      {currentTheme === 'dark' && (
        <>
          {/* Hero */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(290px, 1fr))',
              gap: '1.25rem',
              marginBottom: '1.5rem',
              position: 'relative',
              zIndex: 2
            }}
          >
            <div
              className="glass-panel"
              style={{
                padding: '1.6rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    color: 'var(--text-muted)',
                    letterSpacing: '0.5px',
                    marginBottom: '6px'
                  }}
                >
                  YOUR CHALLENGE:
                </div>

                <h1
                  style={{
                    fontSize: '1.8rem',
                    fontWeight: 800,
                    marginBottom: '0.8rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  Open Theme
                  <span
                    className="animate-float"
                    style={{ display: 'inline-block' }}
                  >
                    🚀
                  </span>
                </h1>

                <div
                  style={{
                    display: 'flex',
                    gap: '8px',
                    flexWrap: 'wrap',
                    marginBottom: '1rem'
                  }}
                >
                  <span className="neon-tag neon-tag-purple">#AI</span>
                  <span className="neon-tag neon-tag-pink">
                    #BuildInPublic
                  </span>
                  <span className="neon-tag neon-tag-cyan">
                    #48Hours
                  </span>
                </div>
              </div>

              <Link
                to="/day/12"
                className="btn btn-primary"
                style={{
                  textDecoration: 'none',
                  width: '100%'
                }}
              >
                <span>Start Challenge</span>
                <Sparkles size={16} />
              </Link>
            </div>

            {/* Timer */}
            <div
              className="glass-panel"
              style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
              }}
            >
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: 'var(--text-muted)',
                  marginBottom: '0.8rem'
                }}
              >
                COUNTDOWN TIMER
              </div>

        <div
                className="circular-timer-ring"
                style={{
                  marginBottom: '0.8rem',
                  opacity: deadlinePassed ? 0.55 : 1,
                  filter: deadlinePassed ? 'grayscale(1)' : 'none'
                }}
              >
                <div
                  style={{
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase'
                  }}
                >
                  {deadlinePassed ? 'Status' : 'Time Left'}
                </div>

                <div
                  style={{
                    fontSize: deadlinePassed ? '1rem' : '1.25rem',
                    fontWeight: 800,
                    fontFamily: 'var(--font-mono)',
                    color: deadlinePassed ? '#ef4444' : 'var(--text-primary)',
                    marginTop: '2px'
                  }}
                >
                  {deadlinePassed ? 'ENDED' : formatTimer(timerSeconds)}
                </div>
              </div>

              {deadlinePassed ? (
                <div
                  style={{
                    fontSize: '0.78rem',
                    color: '#ef4444',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <AlertCircle size={12} />
                  Deadline Finished
                </div>
              ) : (
                <div
                  style={{
                    fontSize: '0.78rem',
                    color: 'var(--accent-emerald)',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <Clock size={12} />
                  Deadline: Sunday 8:00 PM IST
                </div>
              )}
            </div>
          </div>

          {/* Metrics */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.25rem',
              marginBottom: '1.5rem',
              position: 'relative',
              zIndex: 2
            }}
          >
            <div
              className="glass-panel card-neon-cyan"
              style={{ padding: '1.5rem' }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.8rem'
                }}
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '12px',
                    background: 'rgba(56, 189, 248, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyan)'
                  }}
                >
                  <Clock size={20} />
                </div>

                <span className="neon-tag neon-tag-cyan">
                  Build Window
                </span>
              </div>

              <div
                style={{
                  fontSize: '2.2rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--accent-cyan)',
                  lineHeight: 1
                }}
              >
                48
              </div>

              <div
                style={{
                  fontSize: '0.82rem',
                  color: 'var(--text-secondary)',
                  marginTop: '4px'
                }}
              >
                Hours
              </div>
            </div>

            <div
              className="glass-panel card-neon-purple"
              style={{ padding: '1.5rem' }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.8rem'
                }}
              >
                <Trophy
                  size={20}
                  color="var(--accent-purple)"
                />

                <span className="neon-tag neon-tag-purple">
                  Grand Prize
                </span>
              </div>

              <div
                style={{
                  fontSize: '2.2rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--accent-purple)',
                  lineHeight: 1
                }}
              >
                ₹20K
              </div>

              <div
                style={{
                  fontSize: '0.82rem',
                  color: 'var(--text-secondary)',
                  marginTop: '4px'
                }}
              >
                Prize Pool
              </div>
            </div>

            <div
              className="glass-panel card-neon-pink"
              style={{ padding: '1.5rem' }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.8rem'
                }}
              >
                <Users
                  size={20}
                  color="var(--accent-pink)"
                />

                <span className="neon-tag neon-tag-pink">
                  Active Hackers
                </span>
              </div>

              <div
                style={{
                  fontSize: '2.2rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--accent-pink)',
                  lineHeight: 1
                }}
              >
                500+
              </div>

              <div
                style={{
                  fontSize: '0.82rem',
                  color: 'var(--text-secondary)',
                  marginTop: '4px'
                }}
              >
                Participants
              </div>
            </div>
          </div>
        </>
      )}

      {/* LIGHT THEME */}
      {currentTheme === 'light' && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.25rem',
            marginBottom: '1.5rem',
            position: 'relative',
            zIndex: 2
          }}
        >
          <div
            className="glass-panel"
            style={{
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  color: 'var(--text-muted)',
                  letterSpacing: '0.5px',
                  marginBottom: '6px'
                }}
              >
                YOUR CHALLENGE:
              </div>

              <h1
                style={{
                  fontSize: '2.2rem',
                  fontWeight: 800,
                  marginBottom: '0.8rem'
                }}
              >
                Open Theme
              </h1>

              <div
                style={{
                  display: 'flex',
                  gap: '8px',
                  flexWrap: 'wrap',
                  marginBottom: '1rem'
                }}
              >
                <span className="light-pill light-pill-purple">
                  #AI
                </span>
                <span className="light-pill light-pill-cyan">
                  #BuildInPublic
                </span>
                <span className="light-pill light-pill-blue">
                  #XR
                </span>
                <span className="light-pill light-pill-emerald">
                  #Innovate
                </span>
              </div>

              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.92rem',
                  lineHeight: 1.5,
                  marginBottom: '1.5rem'
                }}
              >
                Build groundbreaking spatial experiences.
              </p>
            </div>

            <Link
              to="/day/12"
              className="btn-start-project"
              style={{ textDecoration: 'none' }}
            >
              <span>START PROJECT</span>
              <Sparkles size={16} />
            </Link>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem'
            }}
          >
            <div
              className="glass-panel"
              style={{
                padding: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              <Clock
                size={22}
                color="var(--accent-purple)"
              />

              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <h3
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 800
                    }}
                  >
                    48 Hours Left
                  </h3>

                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-secondary)',
                      fontWeight: 700
                    }}
                  >
                    {formatTimer(timerSeconds)}
                  </span>
                </div>

                <div
                  style={{
                    height: '6px',
                    width: '100%',
                    background: 'rgba(0,0,0,0.06)',
                    borderRadius: '9999px',
                    marginTop: '8px',
                    overflow: 'hidden'
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: '75%',
                      background: 'var(--gradient-neon)',
                      borderRadius: '9999px'
                    }}
                  />
                </div>
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1.25rem'
              }}
            >
              <div
                className="glass-panel"
                style={{ padding: '1.25rem' }}
              >
                <Trophy
                  size={18}
                  color="var(--accent-purple)"
                />

                <div
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    fontFamily: 'var(--font-mono)',
                    marginTop: '8px'
                  }}
                >
                  ₹20K
                </div>

                <div
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: 'var(--text-secondary)'
                  }}
                >
                  Prize Pool
                </div>

                <span
                  className="badge badge-purple"
                  style={{
                    fontSize: '0.62rem',
                    marginTop: '6px'
                  }}
                >
                  Grand Prize
                </span>
              </div>

              <div
                className="glass-panel"
                style={{ padding: '1.25rem' }}
              >
                <Users
                  size={18}
                  color="var(--accent-cyan)"
                />

                <div
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    fontFamily: 'var(--font-mono)',
                    marginTop: '8px'
                  }}
                >
                  500+
                </div>

                <div
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: 'var(--text-secondary)'
                  }}
                >
                  Participants
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* STREAK */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          marginBottom: '1.5rem'
        }}
      >
        {edgeCase === 'active' && (
          <div
            className="glass-panel"
            style={{
              padding: '1.25rem',
              border: '1px solid var(--accent-purple)'
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                <div style={{ fontSize: '1.8rem' }}>🔥</div>

                <div>
                  <div
                    style={{
                      fontSize: '1.4rem',
                      fontWeight: 800,
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--accent-purple)'
                    }}
                  >
                    12 DAYS STREAK
                  </div>

                  <div
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    Overall Completion: 12 / 60 Days (20%)
                  </div>
                </div>
              </div>

              <span className="badge badge-purple">
                Consistent Builder
              </span>
            </div>
          </div>
        )}

        {edgeCase === 'first_day' && (
          <div
            className="glass-panel"
            style={{
              padding: '1.25rem',
              border: '1px solid var(--accent-emerald)'
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                <div style={{ fontSize: '1.8rem' }}>🌟</div>

                <div>
                  <div
                    style={{
                      fontSize: '1.4rem',
                      fontWeight: 800,
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--accent-emerald)'
                    }}
                  >
                    0 DAYS STREAK
                  </div>

                  <div
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    Day 1 Kickoff • Start your 60-day journey!
                  </div>
                </div>
              </div>

              <span className="badge badge-emerald">
                New Builder
              </span>
            </div>
          </div>
        )}

        {edgeCase === 'missed_day' && (
          <div
            className="glass-panel"
            style={{
              padding: '1.25rem',
              border: '1px solid var(--accent-pink)'
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                <div style={{ fontSize: '1.8rem' }}>⚠️</div>

                <div>
                  <div
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 800,
                      color: 'var(--accent-pink)'
                    }}
                  >
                    MISSED DAY 11
                  </div>

                  <div
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    Complete Day 12 to activate Streak Shield!
                  </div>
                </div>
              </div>

              <span className="badge badge-purple">
                Grace Period
              </span>
            </div>
          </div>
        )}
      </div>

      {/* MOMENTUM */}
      <div
        className="glass-panel"
        style={{
          padding: '1.25rem',
          marginBottom: '1.25rem',
          position: 'relative',
          zIndex: 2
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem'
          }}
        >
          <span className="badge badge-emerald">
            MOMENTUM STATUS
          </span>

          <span
            className="badge badge-purple"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <Shield size={12} />
            Shield
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            marginBottom: '1.1rem'
          }}
        >
          <div
            style={{
              width: '54px',
              height: '54px',
              borderRadius: '50%',
              border: '2px solid var(--accent-emerald)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-emerald)'
            }}
          >
            <Zap size={22} />
          </div>

          <div>
            <div
              style={{
                fontSize: '1.3rem',
                fontWeight: 800
              }}
            >
              12{' '}
              <span
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)'
                }}
              >
                DAY STREAK
              </span>
            </div>

            <div
              style={{
                fontSize: '0.78rem',
                color: 'var(--text-muted)'
              }}
            >
              Consistency active. Continue your momentum.
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            gap: '6px',
            marginBottom: '1rem'
          }}
        >
          {[
            ['THU', 'Aug 6'],
            ['FRI', 'Aug 7'],
            ['SAT', 'Aug 8'],
            ['SUN', 'Today'],
            ['MON', 'Aug 10'],
            ['TUE', 'Aug 11'],
            ['WED', 'Aug 12']
          ].map(([day, date], i) => (
            <div
              key={i}
              style={{
                textAlign: 'center',
                padding: '8px 4px',
                borderRadius: '10px',
                background:
                  date === 'Today'
                    ? 'rgba(52, 211, 153, 0.1)'
                    : 'var(--bg-input)',
                border:
                  date === 'Today'
                    ? '1px solid var(--accent-emerald)'
                    : '1px solid transparent'
              }}
            >
              <div
                style={{
                  fontSize: '0.62rem',
                  fontWeight: 700,
                  color: 'var(--text-muted)'
                }}
              >
                {day}
              </div>

              <div
                style={{
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  marginBottom: '4px'
                }}
              >
                {date}
              </div>

              {date === 'Today' ? (
                <span
                  style={{
                    color: 'var(--accent-emerald)',
                    fontWeight: 800
                  }}
                >
                  ?
                </span>
              ) : (
                <Lock
                  size={12}
                  color="var(--text-muted)"
                  style={{ margin: '0 auto' }}
                />
              )}
            </div>
          ))}
        </div>

        <div
          style={{
            fontSize: '0.75rem',
            color: 'var(--accent-emerald)',
            marginBottom: '4px'
          }}
        >
          ● Submit before 2:00 AM protocol deadline.
        </div>

        <div
          style={{
            fontSize: '0.75rem',
            color: 'var(--accent-amber)'
          }}
        >
          🌙 Late Night Protocol Active
        </div>
      </div>

      {/* WEEKLY ACTIVITY */}
      <div
        className="glass-panel"
        style={{
          padding: '1.25rem',
          marginBottom: '1.25rem',
          position: 'relative',
          zIndex: 2
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <Calendar
              size={16}
              color="var(--accent-emerald)"
            />
            <span
              style={{
                fontSize: '0.85rem',
                fontWeight: 800
              }}
            >
              WEEKLY ACTIVITY LEDGER
            </span>
          </div>

          <span
            style={{
              fontSize: '0.75rem',
              color: 'var(--accent-emerald)',
              fontWeight: 700
            }}
          >
            0/7 Tasks Shipped This Week
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            gap: '8px',
            alignItems: 'flex-end',
            height: '90px',
            marginBottom: '0.8rem'
          }}
        >
          {[0, 0, 0, 0, 0, 0, 0].map((h, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: '100%',
                borderRadius: '8px',
                background: 'var(--bg-input)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'flex-end'
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: `${h}%`,
                  borderRadius: '8px',
                  background: 'var(--gradient-neon)'
                }}
              />
            </div>
          ))}
        </div>

        <p
          style={{
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            fontStyle: 'italic',
            textAlign: 'center'
          }}
        >
          Hover over any day pillar to view detailed submission proof
          stats.
        </p>
      </div>

      {/* OVERALL PROGRESS */}
      <div
        className="glass-panel"
        style={{
          padding: '1.25rem',
          marginBottom: '1.25rem',
          position: 'relative',
          zIndex: 2
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1.2rem'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <TrendingUp
              size={16}
              color="var(--accent-emerald)"
            />
            <span
              style={{
                fontSize: '0.85rem',
                fontWeight: 800
              }}
            >
              OVERALL PROGRESS METER
            </span>
          </div>

          <span className="badge badge-amber">
            60-DAY JOURNEY
          </span>
        </div>

        <div className="progress-ring-outer">
          <div
            style={{
              textAlign: 'center',
              position: 'relative',
              zIndex: 1
            }}
          >
            <div style={{ fontSize: '1.6rem', fontWeight: 800 }}>
              20%
            </div>

            <div
              style={{
                fontSize: '0.65rem',
                fontWeight: 700,
                color: 'var(--text-muted)'
              }}
            >
              COMPLETED
            </div>
          </div>
        </div>

        <div
          style={{
            textAlign: 'center',
            marginTop: '1rem',
            marginBottom: '0.4rem'
          }}
        >
          <span style={{ fontSize: '1.3rem', fontWeight: 800 }}>
            12
          </span>

          <span
            style={{
              fontSize: '0.9rem',
              color: 'var(--text-muted)'
            }}
          >
            {' '}
            / 60
          </span>
        </div>

        <div
          style={{
            textAlign: 'center',
            fontSize: '0.75rem',
            color: 'var(--accent-emerald)',
            fontWeight: 700,
            marginBottom: '0.6rem'
          }}
        >
          DAYS COMPLETED
        </div>

        <p
          style={{
            textAlign: 'center',
            fontSize: '0.78rem',
            color: 'var(--text-secondary)',
            marginBottom: '1rem'
          }}
        >
          Every daily task builds your permanent proof of work. Keep
          pushing forward!
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0.8rem'
          }}
        >
          {[
            ['12', 'Days completed'],
            ['48', 'Days remaining'],
            ['12', 'Current streak'],
            ['14', 'Best streak']
          ].map(([value, label], i) => (
            <div
              key={i}
              style={{
                padding: '0.8rem',
                borderRadius: '10px',
                background: 'var(--bg-input)',
                textAlign: 'center'
              }}
            >
              <div
                style={{
                  fontSize: '1rem',
                  fontWeight: 800
                }}
              >
                {value}
              </div>

              <div
                style={{
                  fontSize: '0.68rem',
                  color: 'var(--text-muted)'
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LEADERBOARD */}
      <div
        className="glass-panel"
        style={{
          padding: '1.25rem',
          marginBottom: '1.25rem',
          position: 'relative',
          zIndex: 2
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <Trophy
              size={16}
              color="var(--accent-amber)"
            />

            <span
              style={{
                fontSize: '0.85rem',
                fontWeight: 800
              }}
            >
              YOUR STANDING & LEADERBOARD
            </span>
          </div>

          <span className="badge badge-emerald">
            Top 8%
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0.8rem',
            borderRadius: '10px',
            background: 'var(--bg-input)',
            marginBottom: '1rem'
          }}
        >
          <div>
            <div
              style={{
                fontSize: '0.68rem',
                color: 'var(--text-muted)',
                fontWeight: 700
              }}
            >
              CURRENT RANK
            </div>

            <div
              style={{
                fontSize: '1.3rem',
                fontWeight: 800
              }}
            >
              #24
              <span
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)'
                }}
              >
                / 300
              </span>
            </div>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div
              style={{
                fontSize: '0.68rem',
                color: 'var(--text-muted)',
                fontWeight: 700
              }}
            >
              TOTAL EXPERIENCE
            </div>

            <div
              style={{
                fontSize: '1.3rem',
                fontWeight: 800
              }}
            >
              <Zap
                size={16}
                color="var(--accent-amber)"
              />{' '}
              1,240 XP
            </div>
          </div>
        </div>

        {[
          {
            rank: '#22',
            name: 'Alex Rivers',
            handle: '@arivers',
            streak: '14d',
            xp: '1390 XP',
            you: false
          },
          {
            rank: '#24',
            name: 'Developer',
            handle: '@student_dev',
            streak: '12d',
            xp: '1240 XP',
            you: true
          },
          {
            rank: '#24',
            name: 'Priya Sharma',
            handle: '@psharma_code',
            streak: '12d',
            xp: '1290 XP',
            you: false
          }
        ].map((p, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '0.7rem',
              borderRadius: '10px',
              border: p.you
                ? '1px solid var(--accent-emerald)'
                : '1px solid transparent',
              background: p.you
                ? 'rgba(52, 211, 153, 0.06)'
                : 'transparent',
              marginBottom: i < 2 ? '6px' : 0
            }}
          >
            <span
              style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                color: 'var(--text-muted)',
                width: '28px'
              }}
            >
              {p.rank}
            </span>

            <div
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                background: 'var(--gradient-neon)',
                color: '#fff',
                fontSize: '0.75rem',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {p.name.charAt(0)}
            </div>

            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 700
                }}
              >
                {p.name}

                {p.you && (
                  <span
                    className="badge badge-emerald"
                    style={{
                      fontSize: '0.6rem',
                      padding: '2px 6px',
                      marginLeft: '6px'
                    }}
                  >
                    YOU
                  </span>
                )}
              </div>

              <div
                style={{
                  fontSize: '0.7rem',
                  color: 'var(--text-muted)'
                }}
              >
                {p.handle}
              </div>
            </div>

            <div
              style={{
                textAlign: 'right',
                fontSize: '0.72rem'
              }}
            >
              <div
                style={{
                  color: 'var(--accent-amber)',
                  fontWeight: 700
                }}
              >
                {p.streak}
              </div>

              <div style={{ color: 'var(--text-muted)' }}>
                {p.xp}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ACHIEVEMENTS */}
      <div
        className="glass-panel"
        style={{
          padding: '1.25rem',
          marginBottom: '1.25rem',
          position: 'relative',
          zIndex: 2
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <Award
              size={16}
              color="var(--accent-amber)"
            />

            <span
              style={{
                fontSize: '0.85rem',
                fontWeight: 800
              }}
            >
              ACHIEVEMENTS & BADGES
            </span>
          </div>

          <span
            style={{
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              fontWeight: 700
            }}
          >
            3 / 5 UNLOCKED
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            gap: '1rem',
            overflowX: 'auto',
            paddingBottom: '4px'
          }}
        >
          {[
            {
              icon: '🏁',
              title: 'First Commit',
              desc: 'Shipped Day 1 coding task and published proof',
              achieved: 'Achieved on Day 1'
            },
            {
              icon: '🔥',
              title: '7 Day Streak',
              desc: 'Maintained an uninterrupted coding streak',
              achieved: 'Achieved on Day 7'
            }
          ].map((b, i) => (
            <div
              key={i}
              style={{
                minWidth: '220px',
                padding: '1rem',
                borderRadius: '14px',
                background: 'var(--bg-input)',
                border: '1px solid var(--border-color)'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '0.6rem'
                }}
              >
                <div style={{ fontSize: '1.6rem' }}>
                  {b.icon}
                </div>

                <span
                  className="badge badge-emerald"
                  style={{ fontSize: '0.6rem' }}
                >
                  UNLOCKED
                </span>
              </div>

              <div
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 800,
                  marginBottom: '4px'
                }}
              >
                {b.title}
              </div>

              <div
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '6px'
                }}
              >
                {b.desc}
              </div>

              <div
                style={{
                  fontSize: '0.68rem',
                  color: 'var(--text-muted)'
                }}
              >
                {b.achieved}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM 3 CARDS */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
          position: 'relative',
          zIndex: 2
        }}
      >
        {/* Hackathon Activity */}
        <div
          className="glass-panel"
          style={{ padding: '1.25rem' }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '0.8rem'
            }}
          >
            <h3
              style={{
                fontSize: '1rem',
                fontWeight: 700
              }}
            >
              Hackathon Activity
            </h3>

            <MoreHorizontal
              size={16}
              color="var(--text-muted)"
            />
          </div>

          <div
            style={{
              display: 'flex',
              gap: '12px',
              fontSize: '0.78rem',
              fontWeight: 700,
              borderBottom:
                '1px solid var(--border-color)',
              paddingBottom: '6px',
              marginBottom: '10px'
            }}
          >
            <span
              style={{
                color: 'var(--accent-purple)',
                borderBottom:
                  '2px solid var(--accent-purple)',
                paddingBottom: '4px'
              }}
            >
              Project Submissions
            </span>

            <span style={{ color: 'var(--text-muted)' }}>
              Leaderboard
            </span>

            <span style={{ color: 'var(--text-muted)' }}>
              Live feed
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px',
              background: 'rgba(0,0,0,0.03)',
              borderRadius: '10px'
            }}
          >
            <div
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: '#000',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800
              }}
            >
              N
            </div>

            <div>
              <div
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 700
                }}
              >
                NeoVision
              </div>

              <div
                style={{
                  fontSize: '0.72rem',
                  color: 'var(--text-muted)'
                }}
              >
                Project ram
              </div>
            </div>
          </div>

          <p
            style={{
              fontSize: '0.75rem',
              color: 'var(--text-secondary)',
              marginTop: '6px'
            }}
          >
            Building right now - Build groundbreaking spatial
            experiences.
          </p>
        </div>

        {/* Your Team */}
        <div
          className="glass-panel"
          style={{ padding: '1.25rem' }}
        >
          <h3
            style={{
              fontSize: '1rem',
              fontWeight: 700,
              marginBottom: '0.8rem'
            }}
          >
            Your Team: NeoVision
          </h3>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
              marginBottom: '6px'
            }}
          >
            <span>Members</span>
            <span>Progress</span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1rem'
            }}
          >
            <div
              style={{
                display: 'flex',
                marginLeft: '6px'
              }}
            >
              <div
                style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  background: '#6366f1',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 700
                }}
              >
                SC
              </div>

              <div
                style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  background: '#a855f7',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  marginLeft: '-6px'
                }}
              >
                HY
              </div>

              <div
                style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  background: '#06b6d4',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  marginLeft: '-6px'
                }}
              >
                AK
              </div>
            </div>

            <div
              style={{
                width: '100px',
                height: '6px',
                background: 'rgba(0,0,0,0.06)',
                borderRadius: '9999px',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  height: '100%',
                  width: '85%',
                  background: 'var(--gradient-neon)'
                }}
              />
            </div>
          </div>

          <Link
            to="/day/12"
            className="btn btn-secondary"
            style={{
              width: '100%',
              fontSize: '0.82rem',
              textDecoration: 'none'
            }}
          >
            <span>Submit Day 12</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Upcoming Events */}
        <div
          className="glass-panel"
          style={{ padding: '1.25rem' }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '0.8rem'
            }}
          >
            <h3
              style={{
                fontSize: '1rem',
                fontWeight: 700
              }}
            >
              Upcoming Events
            </h3>

            <MoreHorizontal
              size={16}
              color="var(--text-muted)"
            />
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '6px 0',
                borderBottom:
                  '1px solid var(--border-color)'
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 700
                  }}
                >
                  Workshops
                </div>

                <div
                  style={{
                    fontSize: '0.72rem',
                    color: 'var(--text-muted)'
                  }}
                >
                  21 Jan 2023 - 1:30 am
                </div>
              </div>

              <ChevronRight
                size={16}
                color="var(--text-muted)"
              />
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '6px 0'
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 700
                  }}
                >
                  Demos
                </div>

                <div
                  style={{
                    fontSize: '0.72rem',
                    color: 'var(--text-muted)'
                  }}
                >
                  6 Jun 2023 - 3:00 pm
                </div>
              </div>

              <ChevronRight
                size={16}
                color="var(--text-muted)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
