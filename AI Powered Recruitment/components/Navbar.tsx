import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Briefcase, User, Menu, X, LayoutDashboard, Sun, Moon } from 'lucide-react';
import { UserRole } from '../types';
import Button from './Button';

interface NavbarProps {
  currentUserRole: UserRole;
  onToggleRole: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentUserRole, onToggleRole }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  // Dark Mode Logic
  const [isDark, setIsDark] = React.useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const navLinks = [
    { name: 'Jobs', path: '/jobs', roles: [UserRole.SEEKER, UserRole.ADMIN] },
    { name: 'Post a Job', path: '/post-job', roles: [UserRole.EMPLOYER, UserRole.ADMIN] },
    { name: 'Dashboard', path: '/dashboard', roles: [UserRole.SEEKER, UserRole.EMPLOYER, UserRole.ADMIN] },
    { name: 'Docs', path: '/docs', roles: [UserRole.SEEKER, UserRole.EMPLOYER, UserRole.ADMIN] },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Briefcase className="h-8 w-8 text-blue-600 dark:text-blue-500" />
              <span className="ml-2 text-xl font-bold text-slate-900 dark:text-white">JobNexus</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navLinks.map((link) => (
                (link.roles.includes(currentUserRole)) && (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${
                      isActive(link.path)
                        ? 'border-blue-500 text-gray-900 dark:text-white'
                        : 'border-transparent text-gray-500 dark:text-gray-400 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-200'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            <button 
              onClick={toggleTheme}
              className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <div className="flex items-center space-x-2 bg-slate-100 dark:bg-slate-800 rounded-full px-3 py-1">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase">View as:</span>
              <button
                onClick={onToggleRole}
                className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
              >
                {currentUserRole === UserRole.SEEKER ? 'Job Seeker' : 'Employer'}
              </button>
            </div>
            <Link to="/login">
              <Button variant="outline" size="sm" className="dark:bg-transparent dark:text-slate-200 dark:border-slate-700 dark:hover:bg-slate-800">Log In</Button>
            </Link>
            <Link to="/register">
              <Button variant="primary" size="sm">Sign Up</Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="-mr-2 flex items-center sm:hidden gap-2">
            <button 
              onClick={toggleTheme}
              className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
               (link.roles.includes(currentUserRole)) && (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                    isActive(link.path)
                      ? 'bg-blue-50 dark:bg-slate-800 border-blue-500 text-blue-700 dark:text-blue-400'
                      : 'border-transparent text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-800 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-200'
                  }`}
                >
                  {link.name}
                </Link>
               )
            ))}
          </div>
          <div className="pt-4 pb-4 border-t border-gray-200 dark:border-slate-800">
            <div className="flex items-center px-4 mb-3">
              <button
                  onClick={onToggleRole}
                  className="text-sm font-medium text-blue-600 dark:text-blue-400 w-full text-left"
                >
                  Switch Role (Current: {currentUserRole})
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;