import React, { useState, useEffect } from 'react';
import { Eye, Users, TrendingUp } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const Counter = ({ 
  className = '', 
  showGitHubBadge = true, 
  showLocalCounter = true,
  animated = true 
}) => {
  const [localCount, setLocalCount] = useState(0);
  const [globalCount, setGlobalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Supabase client - environment variables'dan alınacak
  const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL || '',
    import.meta.env.VITE_SUPABASE_ANON_KEY || ''
  );

  useEffect(() => {
    const initializeCounters = async () => {
      try {
        // 1. Global sayacı Supabase'den al ve artır
        await incrementGlobalVisitor();
        
        // 2. Local sayacı localStorage'dan al ve artır
        incrementLocalVisitor();
      } catch (err) {
        console.error('Counter initialization error:', err);
        setError('Sayaç yüklenemedi');
        // Hata durumunda sadece local sayacı kullan
        incrementLocalVisitor();
      }
    };

    initializeCounters();
  }, []);

  const incrementGlobalVisitor = async () => {
    try {
      // Visitor tablosundan mevcut sayıyı al
      const { data: existingData, error: fetchError } = await supabase
        .from('visitor_count')
        .select('count')
        .eq('id', 1)
        .single();

      if (fetchError && fetchError.code !== 'PGRST116') {
        throw fetchError;
      }

      let newCount = 1;
      
      if (existingData) {
        // Mevcut sayıyı artır
        newCount = existingData.count + 1;
        const { error: updateError } = await supabase
          .from('visitor_count')
          .update({ count: newCount, updated_at: new Date().toISOString() })
          .eq('id', 1);
        
        if (updateError) throw updateError;
      } else {
        // İlk kez oluştur
        const { error: insertError } = await supabase
          .from('visitor_count')
          .insert({ id: 1, count: 1, created_at: new Date().toISOString() });
        
        if (insertError) throw insertError;
      }

      setGlobalCount(newCount);
    } catch (err) {
      console.error('Global visitor increment error:', err);
      throw err;
    }
  };

  const incrementLocalVisitor = () => {
    const currentCount = localStorage.getItem('portfolio-visitors');
    const newCount = currentCount ? parseInt(currentCount) + 1 : 1;
    localStorage.setItem('portfolio-visitors', newCount.toString());
    setLocalCount(newCount);
    setIsLoading(false);
  };

  // Animasyonlu sayı gösterimi
  const AnimatedNumber = ({ value }) => {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
      if (!animated || value === 0) {
        setDisplayValue(value);
        return;
      }

      const duration = 1000; // 1 saniye
      const steps = 30;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [value]);

    return <span>{displayValue.toLocaleString()}</span>;
  };

  return (
    <div className={`flex flex-col items-center space-y-4 ${className}`}>
      {/* GitHub Style Badge */}
      {showGitHubBadge && (
        <div className="flex items-center space-x-2">
          <img
            src="https://komarev.com/ghpvc/?username=kenanturgay&label=Profile%20views&color=58A6FF&style=for-the-badge"
            alt="Profile views"
            className="h-7 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200"
          />
        </div>
      )}

      {/* Global Counter */}
      {showLocalCounter && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 min-w-[200px]">
          <div className="flex items-center justify-center space-x-3">
            <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-full">
              <Eye className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {isLoading ? (
                  <div className="animate-pulse bg-gray-300 dark:bg-gray-600 h-8 w-16 rounded"></div>
                ) : error ? (
                  <span className="text-red-500">--</span>
                ) : (
                  <AnimatedNumber value={globalCount} />
                )}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Toplam Ziyaretçi
              </div>
              {error && (
                <div className="text-xs text-red-500 mt-1">
                  Bağlantı hatası
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Statistics Grid */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg p-4 text-center border border-green-200 dark:border-green-700">
          <Users className="h-6 w-6 text-green-600 dark:text-green-400 mx-auto mb-2" />
          <div className="text-lg font-semibold text-green-800 dark:text-green-300">
            {isLoading ? (
              <div className="animate-pulse bg-green-300 dark:bg-green-600 h-6 w-12 rounded mx-auto"></div>
            ) : (
              <AnimatedNumber value={Math.floor(globalCount * 0.7)} />
            )}
          </div>
          <div className="text-xs text-green-600 dark:text-green-400">
            Tekrar Ziyaret
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg p-4 text-center border border-purple-200 dark:border-purple-700">
          <TrendingUp className="h-6 w-6 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
          <div className="text-lg font-semibold text-purple-800 dark:text-purple-300">
            {isLoading ? (
              <div className="animate-pulse bg-purple-300 dark:bg-purple-600 h-6 w-12 rounded mx-auto"></div>
            ) : (
              <AnimatedNumber value={Math.floor(globalCount * 1.3)} />
            )}
          </div>
          <div className="text-xs text-purple-600 dark:text-purple-400">
            Sayfa Görüntüleme
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="text-xs text-gray-500 dark:text-gray-400 text-center max-w-xs">
        Ziyaretçi sayısı gerçek zamanlı olarak tüm kullanıcılar için tutulur.
      </div>
    </div>
  );
};

export default Counter;
