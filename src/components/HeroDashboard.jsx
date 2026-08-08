import React from "react";
import "../styles/dark-dashboard.css";

export default function HeroDashboard() {
  return (
    <section className="dd-page" aria-label="Hero dashboard">
      <div className="floating-assets" aria-hidden="true">
        <img src="/ring1.svg" className="floating ring" alt="" />
        <img src="/cube1.svg" className="floating cube" alt="" />
      </div>

      <div className="dd-container">
        <header className="dd-topbar">
          <div className="logo">AB TALKS <span>VIBECODATHON</span></div>
          <nav className="dd-nav" aria-label="Top navigation">
            <button className="dd-nav-btn">Challenge</button>
            <button className="dd-nav-btn">Leaderboard</button>
            <button className="dd-nav-btn">Submissions</button>
            <button className="dd-nav-btn">Account</button>
          </nav>
        </header>

        <div className="dd-main">
          <div className="challenge-card">
            <div className="challenge-left">
              <div className="small-label">YOUR CHALLENGE:</div>
              <h1>
                Open Theme <span className="rocket" role="img" aria-label="rocket">🚀</span>
              </h1>
              <div className="tags">
                <span className="tag">#AI</span>
                <span className="tag">#BuildInPublic</span>
                <span className="tag">#48Hours</span>
              </div>
            </div>

            <div className="challenge-right">
              <div className="timer-ring" role="img" aria-label="countdown ring">
                <div className="timer-inner">
                  <div className="time">45:12:30</div>
                  <div className="timer-label">Time Left</div>
                </div>
              </div>
            </div>
          </div>

          <div className="stats-row">
            <div className="stat-card">
              <div className="stat-num">48</div>
              <div className="stat-label">Hours</div>
            </div>

            <div className="stat-card">
              <div className="stat-num">₹20K</div>
              <div className="stat-label">Prize Pool</div>
            </div>

            <div className="stat-card">
              <div className="stat-num">500+</div>
              <div className="stat-label">Participants</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
