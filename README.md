# 📱 ABTalks 60-Day Coding Challenge Application

> A Mobile-First (390px Viewport) web application designed for Indian college students building late at night after college.

---

## 🗺️ Mandatory Route Map

The application provides the three exact routes required for automated screenshot evaluation (at **390px width mobile viewport**):

```
/
/dashboard
/day/12
```

---

## 📋 Hackathon Submission Requirements Checklist

| Requirement | Status | Official Submission Link |
| :--- | :---: | :--- |
| **1. Public GitHub Repo** | ✅ **Live** | [https://github.com/Harshityadav9838/hackathon-ai-app](https://github.com/Harshityadav9838/hackathon-ai-app) |
| **2. Live Deployed URL** | 🌐 **Live** | [https://hackathon-ai-app-kappa.vercel.app](https://rococo-kulfi-51fd18.netlify.app) |
| **3. AI-Usage Log (`PROMPTS.md`)** | ✅ **Verified** | [`PROMPTS.md`](./PROMPTS.md) |

---

## 📱 Page Overview & Mobile-First Features

### 1. **` / ` — Landing Page**
- **Purpose**: First experience for students who have never heard of ABTalks.
- **Features**: Trust markers (100% free for students, recruiter visibility hook), 60-day roadmap, track selection (AI Engineers, Fullstack Web), late-night mobile CTA.

### 2. **` /dashboard ` — Student Dashboard**
- **Purpose**: Logged-in home screen.
- **Features**:
  - Current streak card (with interactive edge case switcher: **🔥 Active Day 12 Streak**, **🌟 First Day 0 Streak**, **⚠️ Missed Day Grace Period**).
  - Today's task banner.
  - Overall completion progress bar (12 / 60 days = 20%).
  - Student standing & Recruiter Visibility Score (88% High).

### 3. **` /day/12 ` — Challenge Day 12**
- **Purpose**: Single challenge day experience.
- **Features**:
  - Read Day 12 task instructions & expected deliverables.
  - Submit proof of work: GitHub commit URL + LinkedIn public post URL.
  - **Automated LinkedIn Post Draft Generator** with 1-click copy helper.

---

## 🔒 Security & Engineering Standards

- **Configurable Rate Limiting**: Exponential backoff on auth endpoints.
- **Strict Input Validation**: URL schema checks for GitHub and LinkedIn inputs.
- **Zero Secrets**: Environment variables isolated via `.env`.
- **Dependency Vulnerabilities**: Audited dependency graph (`0 vulnerabilities`).
- **Safe Error Handling**: User-facing generic error messages with server-side detailed logging.

---

## 📄 AI-Usage Log

All prompts, design iterations, and agent vibe-coding steps are logged in **[`PROMPTS.md`](./PROMPTS.md)**.
