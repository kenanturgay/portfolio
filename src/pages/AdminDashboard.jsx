import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { LayoutDashboard, LogOut } from 'lucide-react';

const AdminDashboard = () => {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex h-screen overflow-hidden">
        <aside className="w-64 bg-white dark:bg-gray-800 shadow-lg flex flex-col">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <LayoutDashboard className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">Admin Panel</h1>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">{user?.email}</p>
          </div>

          <div className="flex-1 p-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Admin panel geliştirme aşamasında...
            </p>
          </div>

          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={() => navigate('/')}
              className="w-full mb-2 flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
            >
              <LayoutDashboard className="w-5 h-5" />
              <span className="font-medium">Siteye Git</span>
            </button>
            <button
              onClick={handleSignOut}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Çıkış Yap</span>
            </button>
          </div>
        </aside>

        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Hoş Geldiniz!
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Admin paneline başarıyla giriş yaptınız.
            </p>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Veritabanı Kurulumu
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Admin paneli tam olarak çalışması için önce veritabanı kurulumu yapılmalıdır.
                </p>
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Veritabanı tablolarının kurulumu tamamlandı ✓</p>
                  <p className="text-sm">
                    Supabase Dashboard'da tabloları ve verileri yönetebilirsiniz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
