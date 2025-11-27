import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, DollarSign, Briefcase, Calendar, CheckCircle, Sparkles } from 'lucide-react';
import Button from '../components/Button';
import { MOCK_JOBS } from '../constants';
import { analyzeCandidateFit } from '../services/geminiService';

const JobDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const job = MOCK_JOBS.find(j => j.id === id);
  const [aiAnalysis, setAiAnalysis] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  if (!job) {
    return <div className="p-8 text-center text-slate-500 dark:text-slate-400">Job not found.</div>;
  }

  const handleAIAnalysis = async () => {
    setIsAnalyzing(true);
    // Mock user skills for the demo
    const userSkills = "React, TypeScript, CSS, Communication";
    const result = await analyzeCandidateFit(job.description, userSkills);
    setAiAnalysis(result);
    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-8 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white dark:bg-slate-900 rounded-t-xl p-8 shadow-sm border-b border-slate-100 dark:border-slate-800 transition-colors">
          <Link to="/jobs" className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 mb-4 inline-block">&larr; Back to Jobs</Link>
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{job.title}</h1>
              <div className="text-xl text-slate-600 dark:text-slate-300 mb-4">{job.company}</div>
              <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                  <MapPin className="h-4 w-4" /> {job.location}
                </div>
                <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                  <Briefcase className="h-4 w-4" /> {job.type}
                </div>
                <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                  <DollarSign className="h-4 w-4" /> {job.salary}
                </div>
              </div>
            </div>
            <Button size="lg">Apply Now</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm transition-colors">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Job Description</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">{job.description}</p>
              
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-8 mb-4">Requirements</h3>
              <ul className="space-y-2">
                {job.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                    <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI Insight Card */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950 dark:to-blue-950 p-6 rounded-xl border border-indigo-100 dark:border-indigo-900 transition-colors">
              <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300 font-bold mb-3">
                <Sparkles className="h-5 w-5" /> AI Compatibility
              </div>
              <p className="text-sm text-indigo-900 dark:text-indigo-200 mb-4">
                Not sure if you're a good fit? Let our AI analyze your profile against this job description.
              </p>
              
              {!aiAnalysis ? (
                <Button 
                  onClick={handleAIAnalysis} 
                  isLoading={isAnalyzing}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                >
                  Analyze My Fit
                </Button>
              ) : (
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg text-sm text-slate-700 dark:text-slate-300 shadow-sm border border-indigo-100 dark:border-indigo-900 animate-in fade-in duration-500">
                  <div className="whitespace-pre-line">{aiAnalysis}</div>
                </div>
              )}
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 transition-colors">
              <h3 className="font-bold text-slate-900 dark:text-white mb-4">Company Info</h3>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center text-xl font-bold text-slate-500 dark:text-slate-300">
                  {job.company.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">{job.company}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Technology • 50-200 Employees</div>
                </div>
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                A leading company in the tech space, focused on innovation and growth.
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4 dark:bg-transparent dark:text-slate-300 dark:border-slate-600 dark:hover:bg-slate-800">View Company Profile</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;