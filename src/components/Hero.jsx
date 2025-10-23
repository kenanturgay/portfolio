import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import SocialLinks from './SocialLinks';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = ({ setActiveSection }) => {
  const { language } = useLanguage();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const { data, error } = await supabase
        .from('profile')
        .select('*')
        .maybeSingle();

      if (error) throw error;
      setProfile(data);
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  if (!profile) return null;

  const title = profile[`title_${language}`] || profile.title_en;
  const description = profile[`description_${language}`] || profile.description_en;

  return (
    <section className="min-h-screen pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/20 dark:from-primary-900/20 to-transparent"></div>

      <div className="absolute top-1/3 w-full overflow-hidden mask-gradient pointer-events-none">
        <div className="whitespace-nowrap animate-marquee flex">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="text-[200px] font-bold text-gray-100/5 dark:text-white/5 mx-4">
              SOFTWARE DEVELOPER
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center flex flex-col items-center">
          <div className="mb-16 space-y-8">
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-pink-500 rounded-full opacity-75 blur-lg"></div>
              <img
                src={profile.profile_image || '/profile-pic.png'}
                alt={profile.full_name}
                className="relative w-40 h-40 rounded-full object-cover border-2 border-gray-100/10 dark:border-white/10"
              />
            </div>
            <div>
              <p className="text-gray-600 dark:text-white/70 uppercase tracking-widest mb-4">
                {language === 'tr' ? 'Merhaba, Ben' : language === 'ar' ? 'مرحبا، أنا' : 'Hello, I am'}
              </p>
              <h1 className="text-7xl sm:text-8xl font-bold mb-6 leading-none">
                <span className="gradient-text">{profile.full_name}</span>
              </h1>
              <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
                {title}
              </h2>
              <p className="text-xl text-gray-600 dark:text-white/70 max-w-2xl mx-auto leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          <div className="flex justify-center mb-10">
            <SocialLinks />
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button
              onClick={() => setActiveSection('contact')}
              className="btn-primary"
            >
              {language === 'tr' ? 'İletişime Geç' : language === 'ar' ? 'اتصل بي' : 'Contact Me'}
            </button>
            <button
              onClick={() => setActiveSection('projects')}
              className="btn-secondary"
            >
              {language === 'tr' ? 'Projelerimi Gör' : language === 'ar' ? 'عرض المشاريع' : 'View Projects'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
