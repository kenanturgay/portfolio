import React, { useState } from 'react';
import { Menu, X, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import ThemeToggle from './ThemeToggle';
import LanguageSelector from './LanguageSelector';

const Navbar = ({ activeSection, setActiveSection }) => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['about', 'experience', 'skills', 'projects', 'contact'];

  const handleNavigation = (e, id) => {
    e.preventDefault();
    setActiveSection(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed w-full glass shadow-lg z-50 transition-all duration-300 backdrop-blur-sm bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a 
            href="#" 
            onClick={(e) => handleNavigation(e, 'hero')}
            className="text-xl font-bold gradient-text cursor-pointer"
          >
            {t('hero.name')}
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => handleNavigation(e, item)}
                className={`nav-link ${activeSection === item ? 'text-primary-500 dark:text-primary-400' : ''}`}
              >
                {t(`nav.${item}`)}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/login')}
              className="hidden md:flex items-center gap-2 px-3 py-1.5 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <Lock className="w-4 h-4" />
              <span>Admin</span>
            </button>
            <LanguageSelector />
            <ThemeToggle />
            <button
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'} overflow-hidden`}>
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => handleNavigation(e, item)}
                className={`block px-4 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors ${
                  activeSection === item ? 'text-primary-500 bg-white/5' : ''
                }`}
              >
                {t(`nav.${item}`)}
              </a>
            ))}
            <button
              onClick={() => {
                navigate('/login');
                setIsOpen(false);
              }}
              className="w-full flex items-center gap-2 px-4 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <Lock className="w-4 h-4" />
              <span>Admin Girişi</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;