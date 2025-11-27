import React from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Briefcase } from 'lucide-react';
import Button from '../components/Button';
import { MOCK_JOBS } from '../constants';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 dark:from-blue-900 dark:to-indigo-950 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Find Your Next <span className="text-blue-200">Dream Job</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-blue-100 mb-10">
            Connect with top employers and use our AI-powered tools to perfect your application and land the interview.
          </p>
          
          <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-lg p-2 shadow-lg flex flex-col md:flex-row gap-2 transition-colors">
            <div className="flex-grow flex items-center px-4 py-2 bg-slate-50 dark:bg-slate-700 rounded-md transition-colors">
              <Search className="h-5 w-5 text-slate-400 dark:text-slate-400 mr-2" />
              <input 
                type="text" 
                placeholder="Job title, keywords..." 
                className="w-full bg-transparent border-none focus:ring-0 text-slate-900 dark:text-white placeholder-slate-400 outline-none"
              />
            </div>
            <div className="flex-grow flex items-center px-4 py-2 bg-slate-50 dark:bg-slate-700 rounded-md transition-colors">
              <MapPin className="h-5 w-5 text-slate-400 dark:text-slate-400 mr-2" />
              <input 
                type="text" 
                placeholder="Location" 
                className="w-full bg-transparent border-none focus:ring-0 text-slate-900 dark:text-white placeholder-slate-400 outline-none"
              />
            </div>
            <Link to="/jobs">
              <Button size="lg" className="w-full md:w-auto h-full">Search Jobs</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white dark:bg-slate-900 py-12 border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-500">10k+</div>
              <div className="text-slate-500 dark:text-slate-400 mt-1">Active Jobs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-500">5k+</div>
              <div className="text-slate-500 dark:text-slate-400 mt-1">Companies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-500">98%</div>
              <div className="text-slate-500 dark:text-slate-400 mt-1">Hiring Success</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Featured Opportunities</h2>
            <Link to="/jobs" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium">View all jobs &rarr;</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MOCK_JOBS.slice(0, 4).map(job => (
              <div key={job.id} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">
                    {job.company.charAt(0)}
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                    {job.type}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{job.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{job.company}</p>
                <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  {job.location}
                </div>
                <Link to={`/jobs/${job.id}`}>
                  <Button variant="outline" size="sm" className="w-full dark:bg-transparent dark:text-slate-200 dark:border-slate-600 dark:hover:bg-slate-700">View Details</Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 dark:bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Ready to start your journey?</h2>
            <p className="text-slate-300 max-w-xl">Join thousands of professionals who have found their dream careers through JobNexus. Create your profile today.</p>
          </div>
          <div className="flex gap-4">
            <Link to="/register">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">Get Started</Button>
            </Link>
            <Link to="/post-job">
              <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800">Post a Job</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;