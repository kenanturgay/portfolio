import React, { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';

const SimpleCounter = ({ className = '' }) => {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // CountAPI.xyz - Ücretsiz sayaç servisi
    const incrementCounter = async () => {
      try {
        const response = await fetch(
          'https://api.countapi.xyz/hit/kenanturgay-portfolio/visits'
        );
        const data = await response.json();
        setCount(data.value);
      } catch (error) {
        console.error('Counter error:', error);
        // Fallback: localStorage
        const localCount = localStorage.getItem('portfolio-visits') || '0';
        const newCount = parseInt(localCount) + 1;
        localStorage.setItem('portfolio-visits', newCount.toString());
        setCount(newCount);
      } finally {
        setIsLoading(false);
      }
    };

    incrementCounter();
  }, []);

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6 ${className}`}>
      <div className="flex items-center justify-center space-x-3">
        <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-full">
          <Eye className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {isLoading ? (
              <div className="animate-pulse bg-gray-300 dark:bg-gray-600 h-8 w-16 rounded"></div>
            ) : (
              count.toLocaleString()
            )}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Toplam Ziyaretçi
          </div>
        </div>
      </div>
      
      {/* GitHub Badge */}
      <div className="flex justify-center mt-4">
        <img
          src="https://komarev.com/ghpvc/?username=kenanturgay&label=Profile%20views&color=58A6FF&style=for-the-badge"
          alt="Profile views"
          className="h-7 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200"
        />
      </div>
      
      <div className="text-xs text-gray-500 dark:text-gray-400 text-center mt-3">
        Gerçek zamanlı ziyaretçi sayısı
      </div>
    </div>
  );
};

export default SimpleCounter;
