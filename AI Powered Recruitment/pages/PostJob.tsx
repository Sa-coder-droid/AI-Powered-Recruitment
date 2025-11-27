import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import Button from '../components/Button';
import { generateJobDescription } from '../services/geminiService';

const PostJob: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    type: 'Full-time',
    keywords: '',
    description: ''
  });
  const [isGenerating, setIsGenerating] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenerateAI = async () => {
    if (!formData.title || !formData.company) {
      alert("Please enter at least a Job Title and Company Name.");
      return;
    }
    setIsGenerating(true);
    const generated = await generateJobDescription(formData.title, formData.company, formData.keywords);
    setFormData(prev => ({ ...prev, description: generated }));
    setIsGenerating(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Job Posted! (Demo Only)");
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden transition-colors">
        <div className="px-8 py-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Post a New Job</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Fill in the details to reach thousands of qualified candidates.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Job Title</label>
              <input 
                type="text" 
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-2 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition-colors"
                placeholder="e.g. Senior Frontend Engineer"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Company Name</label>
              <input 
                type="text" 
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full p-2 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition-colors"
                placeholder="e.g. TechCorp Inc."
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Location</label>
              <input 
                type="text" 
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-2 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition-colors"
                placeholder="e.g. New York, NY (Remote)"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Employment Type</label>
              <select 
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full p-2 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition-colors"
              >
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Contract</option>
                <option>Freelance</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Keywords for AI (Optional)</label>
            <input 
              type="text" 
              name="keywords"
              value={formData.keywords}
              onChange={handleChange}
              className="w-full p-2 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition-colors"
              placeholder="e.g. React, Node.js, Agile, Team Lead (Used to generate description)"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Job Description</label>
              <button 
                type="button" 
                onClick={handleGenerateAI}
                disabled={isGenerating}
                className="text-xs flex items-center gap-1 text-indigo-600 dark:text-indigo-400 font-bold hover:text-indigo-800 dark:hover:text-indigo-300 disabled:opacity-50"
              >
                <Sparkles className="h-3 w-3" />
                {isGenerating ? 'Generating...' : 'Auto-Generate with AI'}
              </button>
            </div>
            <textarea 
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={10}
              className="w-full p-2 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-md focus:ring-2 focus:ring-blue-500 outline-none font-mono text-sm transition-colors"
              placeholder="Detailed job description..."
              required
            ></textarea>
          </div>

          <div className="pt-4 flex justify-end gap-3">
             <Button type="button" variant="outline" className="dark:bg-transparent dark:text-slate-300 dark:border-slate-600 dark:hover:bg-slate-800">Save Draft</Button>
             <Button type="submit">Post Job</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostJob;