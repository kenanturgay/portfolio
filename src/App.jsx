import React, { useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SocialLinks from './components/SocialLinks';
import SimpleCounter from './components/SimpleCounter';
import { useLanguage } from './contexts/LanguageContext';

function App() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState('hero');

  return (
    <div className="min-h-screen  bg-white dark:bg-black relative overflow-hidden">
      <div className="fixed inset-0 bg-noise opacity-5"></div>
      <div className="fixed inset-0 bg-gradient-to-b from-primary-50/20 dark:from-primary-900/20 via-white dark:via-black to-white dark:to-black"></div>
      
      <div className="relative">
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
        
        {/* Hero Section */}
        <section 
          id="hero" 
          className={`min-h-screen pt-32 pb-20 relative overflow-hidden ${activeSection !== 'hero' ? 'hidden' : ''}`}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary-50/20 dark:from-primary-900/20 to-transparent"></div>
          
          {/* Animated Text Marquee */}
          <div className="absolute top-1/3 w-full overflow-hidden mask-gradient pointer-events-none">
            <div className="whitespace-nowrap animate-marquee flex">
              {[...Array(3)].map((_, i) => (
                <span key={i} className="text-[200px] font-bold text-gray-100/5 dark:text-white/5 mx-4">SOFTWARE DEVELOPER</span>
              ))}
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center flex flex-col items-center">
              <div className="mb-16 space-y-8">
                <div className="relative inline-block">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-pink-500 rounded-full opacity-75 blur-lg"></div>
                  <img
                    src="/profile-pic.png"
                    alt={t('hero.name')}
                    className="relative w-40 h-40 rounded-full object-cover border-2 border-gray-100/10 dark:border-white/10"
                  />
                </div>
                <div>
                  <p className="text-gray-600 dark:text-white/70 uppercase tracking-widest mb-4">{t('hero.greeting')}</p>
                  <h1 className="text-7xl sm:text-8xl font-bold mb-6 leading-none">
                    <span className="gradient-text">{t('hero.name')}</span>
                  </h1>
                  <p className="text-xl text-gray-600 dark:text-white/70 max-w-2xl mx-auto leading-relaxed">
                    {t('hero.description')}
                  </p>
                </div>
              </div>

              <div className="flex justify-center mb-10">
                <SocialLinks />
              </div>

              {/* Visitor Counter */}
              <div className="flex justify-center mb-10">
                <SimpleCounter className="max-w-sm" />
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button 
                  onClick={() => setActiveSection('contact')}
                  className="btn-primary"
                >
                  {t('hero.buttons.contact')}
                </button>
                <button 
                  onClick={() => setActiveSection('projects')}
                  className="btn-secondary"
                >
                  {t('hero.buttons.projects')}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Other Sections */}
        <section id="about" className={`${activeSection !== 'about' ? 'hidden' : ''}`}>
          <About />
        </section>
        <section id="experience" className={`${activeSection !== 'experience' ? 'hidden' : ''}`}>
          <Experience />
        </section>
        <section id="skills" className={`${activeSection !== 'skills' ? 'hidden' : ''}`}>
          <Skills />
        </section>
        <section id="projects" className={`${activeSection !== 'projects' ? 'hidden' : ''}`}>
          <Projects />
        </section>
        <section id="contact" className={`${activeSection !== 'contact' ? 'hidden' : ''}`}>
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;