import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import JobSearch from './pages/JobSearch';
import JobDetails from './pages/JobDetails';
import Dashboard from './pages/Dashboard';
import PostJob from './pages/PostJob';
import Documentation from './pages/Documentation';
import { UserRole } from './types';

const App: React.FC = () => {
  // Simulating authentication state and role
  const [currentUserRole, setCurrentUserRole] = useState<UserRole>(UserRole.SEEKER);

  const toggleRole = () => {
    setCurrentUserRole(prev => prev === UserRole.SEEKER ? UserRole.EMPLOYER : UserRole.SEEKER);
  };

  return (
    <Router>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 dark:bg-slate-950 dark:text-slate-50 transition-colors duration-200">
        <Navbar currentUserRole={currentUserRole} onToggleRole={toggleRole} />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/jobs" element={<JobSearch />} />
            <Route path="/jobs/:id" element={<JobDetails />} />
            
            {/* Conditional Routing based on role simulation */}
            <Route 
              path="/dashboard" 
              element={<Dashboard role={currentUserRole} />} 
            />
            
            <Route 
              path="/post-job" 
              element={
                currentUserRole === UserRole.EMPLOYER 
                  ? <PostJob /> 
                  : <Navigate to="/dashboard" replace />
              } 
            />

            <Route path="/docs" element={<Documentation />} />
            
            {/* Fallback routes */}
            <Route path="/login" element={<Navigate to="/dashboard" />} />
            <Route path="/register" element={<Navigate to="/dashboard" />} />
          </Routes>
        </main>
        
        <footer className="bg-slate-900 text-slate-400 py-8 px-4 mt-auto border-t border-slate-800">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
            <div>© 2024 JobNexus Platform. All rights reserved.</div>
            <div className="flex gap-4 mt-4 md:mt-0">
              <span className="hover:text-white cursor-pointer">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;