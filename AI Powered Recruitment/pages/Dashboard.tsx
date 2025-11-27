import React from 'react';
import { UserRole } from '../types';
import { MOCK_APPLICATIONS, MOCK_JOBS } from '../constants';
import { FileText, Briefcase, TrendingUp, Users } from 'lucide-react';
import Button from '../components/Button';

interface DashboardProps {
  role: UserRole;
}

const Dashboard: React.FC<DashboardProps> = ({ role }) => {
  if (role === UserRole.SEEKER) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">My Dashboard</h1>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 transition-colors">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-lg">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white">{MOCK_APPLICATIONS.length}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Applications Submitted</div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 transition-colors">
             <div className="flex items-center gap-4">
              <div className="p-3 bg-yellow-100 dark:bg-yellow-900/40 text-yellow-600 dark:text-yellow-400 rounded-lg">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white">1</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Interviews Scheduled</div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 transition-colors">
             <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 rounded-lg">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white">5</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Profile Views</div>
              </div>
            </div>
          </div>
        </div>

        {/* Applications List */}
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden transition-colors">
          <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Recent Applications</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
              <thead className="bg-slate-50 dark:bg-slate-800/50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Job Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Company</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Date Applied</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-slate-900 divide-y divide-slate-200 dark:divide-slate-800">
                {MOCK_APPLICATIONS.map((app) => (
                  <tr key={app.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900 dark:text-white">{app.jobTitle}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">{app.company}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">{app.appliedAt}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${app.status === 'Interview' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-400' : 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-400'}`}>
                        {app.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  // Employer View
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Employer Dashboard</h1>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">Post New Job</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 transition-colors">
            <div className="text-slate-500 dark:text-slate-400 text-sm mb-1">Active Job Posts</div>
            <div className="text-3xl font-bold text-slate-900 dark:text-white">3</div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 transition-colors">
            <div className="text-slate-500 dark:text-slate-400 text-sm mb-1">Total Applicants</div>
            <div className="text-3xl font-bold text-slate-900 dark:text-white">42</div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 transition-colors">
            <div className="text-slate-500 dark:text-slate-400 text-sm mb-1">Shortlisted</div>
            <div className="text-3xl font-bold text-slate-900 dark:text-white">8</div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 transition-colors">
            <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">Your Job Listings</h2>
            </div>
            <div className="divide-y divide-slate-200 dark:divide-slate-800">
                {MOCK_JOBS.slice(0, 3).map(job => (
                    <div key={job.id} className="p-6 flex items-center justify-between">
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{job.title}</h3>
                            <div className="text-sm text-slate-500 dark:text-slate-400">{job.location} • Posted {job.postedAt}</div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-center">
                                <div className="text-xl font-bold text-slate-900 dark:text-white">12</div>
                                <div className="text-xs text-slate-500 dark:text-slate-400">Applicants</div>
                            </div>
                            <Button variant="outline" size="sm" className="dark:bg-transparent dark:text-slate-300 dark:border-slate-600 dark:hover:bg-slate-800">Manage</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Dashboard;