import React from 'react';

const Documentation: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 py-12 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert">
        <h1>Project Documentation</h1>
        <p className="lead">
          This demo application implements the frontend interface for the JobNexus Portal. 
          Below are the architectural details and design decisions requested.
        </p>

        <hr />

        <h3>1. System Architecture</h3>
        <p>
            The system is designed as a Microservices-ready Monolith.
        </p>
        <ul>
            <li><strong>Frontend:</strong> Single Page Application (SPA) using React 18, TypeScript, and Tailwind CSS.</li>
            <li><strong>Backend:</strong> Node.js with Express.js. REST API design.</li>
            <li><strong>Database:</strong> PostgreSQL for transactional data (Users, Jobs), Redis for session caching.</li>
            <li><strong>AI Service:</strong> Google Gemini API integration for generating content and analysis.</li>
        </ul>

        <h3>2. Database Schema (Simplified)</h3>
        <pre className="bg-slate-900 dark:bg-black text-slate-50 p-4 rounded-lg overflow-x-auto">
{`
-- Users Table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL, -- 'seeker', 'employer'
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Jobs Table
CREATE TABLE jobs (
  id SERIAL PRIMARY KEY,
  employer_id INT REFERENCES users(id),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  location VARCHAR(100),
  salary_range VARCHAR(100),
  is_active BOOLEAN DEFAULT TRUE
);

-- Applications Table
CREATE TABLE applications (
  id SERIAL PRIMARY KEY,
  job_id INT REFERENCES jobs(id),
  seeker_id INT REFERENCES users(id),
  status VARCHAR(50) DEFAULT 'applied',
  resume_url VARCHAR(255),
  applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`}
        </pre>

        <h3>3. Tech Stack Decision</h3>
        <p><strong>Option A (MERN Stack with PostgreSQL)</strong> was chosen.</p>
        <ul>
            <li><strong>React:</strong> Industry standard, huge ecosystem, easy component reuse.</li>
            <li><strong>Node/Express:</strong> Fast development cycle, unified language (JS/TS) across stack.</li>
            <li><strong>PostgreSQL:</strong> Preferred over MongoDB for this use case because job/application data is highly relational and structured.</li>
        </ul>

        <h3>4. API Endpoints</h3>
        <table className="min-w-full divide-y divide-slate-300 dark:divide-slate-700 border dark:border-slate-700">
            <thead className="bg-slate-50 dark:bg-slate-800">
                <tr>
                    <th className="px-3 py-2 text-left text-sm font-semibold text-slate-900 dark:text-slate-200">Method</th>
                    <th className="px-3 py-2 text-left text-sm font-semibold text-slate-900 dark:text-slate-200">Endpoint</th>
                    <th className="px-3 py-2 text-left text-sm font-semibold text-slate-900 dark:text-slate-200">Description</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                <tr>
                    <td className="px-3 py-2 text-sm text-green-600 dark:text-green-400 font-mono">POST</td>
                    <td className="px-3 py-2 text-sm font-mono text-slate-800 dark:text-slate-300">/api/v1/auth/login</td>
                    <td className="px-3 py-2 text-sm text-slate-700 dark:text-slate-400">Authenticate user & return JWT</td>
                </tr>
                <tr>
                    <td className="px-3 py-2 text-sm text-blue-600 dark:text-blue-400 font-mono">GET</td>
                    <td className="px-3 py-2 text-sm font-mono text-slate-800 dark:text-slate-300">/api/v1/jobs</td>
                    <td className="px-3 py-2 text-sm text-slate-700 dark:text-slate-400">Fetch jobs list with pagination</td>
                </tr>
                <tr>
                    <td className="px-3 py-2 text-sm text-green-600 dark:text-green-400 font-mono">POST</td>
                    <td className="px-3 py-2 text-sm font-mono text-slate-800 dark:text-slate-300">/api/v1/jobs</td>
                    <td className="px-3 py-2 text-sm text-slate-700 dark:text-slate-400">Create new job listing</td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default Documentation;