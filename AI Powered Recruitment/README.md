# JobNexus - Intelligent Job Portal Platform

## 1. Project Overview
**Purpose:** JobNexus is a dual-sided platform designed to streamline the recruitment process. It leverages Generative AI to assist employers in drafting compelling job descriptions and helps job seekers analyze their fit for specific roles.

**Target Users:**
*   **Job Seekers:** Professionals looking for new opportunities, tracking applications, and seeking career guidance.
*   **Employers:** Companies needing to post jobs, manage applicants, and streamline hiring.

**Key Goals:**
*   Reduce time-to-hire through efficient filtering.
*   Improve application quality using AI insights.
*   Provide a seamless, responsive mobile-first user experience.

## 2. Core Features (Implemented in Frontend Demo)
*   **Job Seeker:** Job Search with filters, Profile Management, AI Fit Analysis, Application Tracking.
*   **Employer:** Job Posting with AI drafting, Applicant Dashboard, Status Management.
*   **General:** Responsive UI, Dark/Light mode capable architecture, Real-time updates (simulated).

## 3. System Architecture
*   **Frontend:** React 18 (TypeScript), Tailwind CSS, Vite.
*   **Backend (Recommended):** Node.js with Express (Microservices capable).
*   **Database:** PostgreSQL (Relational data for users/jobs) + Redis (Caching).
*   **AI Engine:** Google Gemini API (via Node.js proxy or direct for demo).
*   **Auth:** JWT based authentication with OAuth2 providers (Google/LinkedIn).
*   **Hosting:** Vercel (Frontend), Render/AWS (Backend).

## 4. Database Design (ERD Schema)
**Tables:**
*   `users`: id, email, password_hash, role (seeker/employer), created_at
*   `profiles`: user_id, resume_url, skills (JSON), bio
*   `companies`: id, user_id (owner), name, logo_url, description
*   `jobs`: id, company_id, title, description, salary_range, type, location, status
*   `applications`: id, job_id, user_id, status (applied/interviewing/rejected), cover_letter

## 5. REST API Design (Key Endpoints)
*   `POST /auth/login` - Authenticate user
*   `GET /jobs` - List jobs with pagination & filters
*   `POST /jobs` - Create a new job (Employer only)
*   `POST /jobs/:id/apply` - Submit application
*   `POST /ai/generate-description` - GenAI helper for job posts

## 6. Deployment Guide
1.  **Frontend:** Connect GitHub repo to Vercel. Set `VITE_API_URL` environment variable.
2.  **Backend:** Deploy Docker container to AWS ECS or Render.
3.  **Database:** Provision RDS PostgreSQL instance.
4.  **CI/CD:** GitHub Actions to run tests and linting on push.

## 7. Technology Stack
**Selected: Option A (MERN - Modified)**
*   React (Frontend)
*   Node/Express (Backend)
*   PostgreSQL (Database - preferred over MongoDB for structured relationship data in job portals)
*   Gemini API (Intelligence)

## 8. How to Run This Demo
1.  Open the web preview.
2.  Add your Gemini API Key in the settings or environment (simulated in this demo).
3.  Toggle between "Seeker" and "Employer" mode in the Navbar to see different features.
