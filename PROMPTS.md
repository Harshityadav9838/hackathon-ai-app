# AI Prompt & Vibe-Coding Log (`PROMPTS.md`)

> **Verification Record** — AI-usage log for the ABTalks 60-Day Coding Challenge app, documenting how the project was vibe-coded end-to-end with an AI pair programmer.

---

## 📑 Overview

- **Project**: ABTalks 60-Day Coding Challenge — mobile-first (390px) React app
- **Stack**: React 19 + Vite 8 + react-router-dom 7 + lucide-react
- **AI Pair Programmer**: Google Antigravity AI Agent (Gemini 3.6 Flash / Pro)
- **Execution Mode**: Autonomous agentic coding — direct workspace file edits, command execution, live diagnostics, and iterative feedback with the user
- **Routes shipped**: `/` (Landing), `/dashboard` (Student Dashboard), `/day/12` (Challenge Day) — with a wildcard fallback to Landing

---

## 📝 Prompt History & Iterations

### Phase 1 — Project Setup & Submission Checklist
**User prompt (paraphrased):**
> Set up a public GitHub repo, a live deployed URL, and an AI-usage log (`PROMPTS.md`) — these are the required deliverables.

**AI actions:**
- Scaffolded the Vite + React project and initialized git.
- Created `PROMPTS.md` and `README.md` as living documents to track requirements.
- Connected the local repo to a remote GitHub repository and pushed the initial commit to `main`.

---

### Phase 2 — Problem Statement & Architecture Plan
**User prompt (paraphrased):**
> ABTalks runs a 60-day coding challenge for Indian college students. Ship at minimum a Landing Page (`/`), Student Dashboard (`/dashboard`), and a Challenge Day view (`/day/12`). Design mobile-first at 390px, and handle edge cases like a student's first day or a missed day.

**AI actions:**
- Drafted an implementation plan covering route structure, component breakdown, and a mobile-first (390px) layout strategy.
- Installed `react-router-dom` for client-side routing between the three mandatory routes.
- Identified the edge cases to design for up front: zero-streak (first day), active streak, and missed-day/grace-period states.

---

### Phase 3 — Core Build: Routing, Theming & Pages
**User prompt (paraphrased):**
> Generate the code for all three pages and push it to the repo.

**AI actions:**
- Built `App.jsx` as the routing shell: mounts `Header`, `BottomNav`, and an `AnimatedBackground`, and switches between pages via `<Routes>`.
- Implemented a dark/light theme toggle in `App.jsx` using `useState` + `useEffect`, persisted to `localStorage` and applied via a `data-theme` attribute on `<html>`.
- Built out the three routed pages:
  - **`LandingPage.jsx`** — first-touch marketing page: trust markers, 60-day roadmap, track selection, and a mobile-first call-to-action.
  - **`DashboardPage.jsx`** — the largest page in the app; the logged-in home screen with the streak card, today's task, overall completion progress, and recruiter-visibility scoring.
  - **`ChallengeDay.jsx`** — the single-day challenge view: task instructions, deliverables, and a submission form for a GitHub commit URL + LinkedIn post URL, plus a generated LinkedIn post draft.
- Built supporting components: `Header.jsx` (nav + theme toggle), `BottomNav.jsx` (mobile tab bar), `AnimatedBackground.jsx` / `AnimatedBackground.css` (ambient dark-mode visuals), `HeroDashboard.jsx` (landing-page preview graphic), and `EdgeCaseSwitcher.jsx` (lets a reviewer toggle between streak states live).
- Added `vercel.json` with an SPA rewrite rule so client-side routes resolve correctly on Vercel.

---

### Phase 4 — Edge Cases & Polish
**User prompt (paraphrased):**
> Make sure the dashboard clearly shows what a first-day student sees versus an active-streak student versus someone who missed a day.

**AI actions:**
- Implemented `EdgeCaseSwitcher.jsx` as an interactive control on the dashboard so the three states are directly demonstrable:
  - 🔥 Active streak (Day 12)
  - 🌟 First day / zero streak
  - ⚠️ Missed-day grace period
- Wired the switcher into `DashboardPage.jsx` state so the streak card, progress bar, and messaging update accordingly.

---

## 🛠️ AI Tools & Capabilities Used
- **File writes** — full component/page generation (`.jsx`, `.css`).
- **Command execution** — dependency installs, dependency audits, git commit/push.
- **Iterative diagnostics** — build/lint checks (`oxlint`) between generation passes.

## 💡 Summary of AI Impact
- Code in this repo was ~100% AI-generated from conversational prompts, with the user directing scope, requirements, and edge cases; the agent handled implementation, file structure, and deployment config.
- Final state: three working routes, dark/light theming, mobile-first (390px) layout, and an interactive edge-case demo — building and running cleanly under Vite.
