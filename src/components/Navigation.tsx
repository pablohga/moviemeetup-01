import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Film, 
  LogIn, 
  Plus,
  Search,
  Menu as MenuIcon,
  X,
  Play,
  Radio,
  Compass
} from 'lucide-react';
import { UserMenu } from './UserMenu';
import { LoginModal } from './auth/LoginModal';
import { NotificationCenter } from './notifications/NotificationCenter';

export function Navigation() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Mock active watch party for demo
  const activeWatchParty = {
    id: '1',
    title: 'Maratona Marvel'
  };

  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
              <Film className="w-8 h-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">MovieMeetup</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/discover" className="text-gray-600 hover:text-gray-900 flex items-center">
                <Compass className="w-4 h-4 mr-2" />
                Descobrir
              </Link>
              <Link to="/watch-party/1" className="text-gray-600 hover:text-gray-900 flex items-center">
                <Radio className="w-4 h-4 mr-2" />
                Interação em Tempo Real
              </Link>
              {isAuthenticated && activeWatchParty && (
                <button 
                  onClick={() => navigate(`/watch-party/${activeWatchParty.id}`)}
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
                >
                  <Play className="w-4 h-4 mr-2" />
                  {activeWatchParty.title}
                </button>
              )}
              <a href="#community" className="text-gray-600 hover:text-gray-900">Comunidade</a>
            </div>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              {isAuthenticated ? (
                <>
                  <button 
                    onClick={() => navigate('/watch-party/create')}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Criar Watch Party
                  </button>
                  <NotificationCenter />
                  <UserMenu />
                </>
              ) : (
                <button 
                  onClick={() => setIsLoginModalOpen(true)}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  <LogIn className="w-4 h-4 mr-2" />
                  Login
                </button>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-600 hover:text-gray-900"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <MenuIcon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/discover"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                <Compass className="w-4 h-4 inline-block mr-2" />
                Descobrir
              </Link>
              <Link 
                to="/watch-party/1" 
                className="block px-3 py-2 text-gray-600 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                <Radio className="w-4 h-4 inline-block mr-2" />
                Interação em Tempo Real
              </Link>
              {isAuthenticated && activeWatchParty && (
                <button 
                  onClick={() => {
                    navigate(`/watch-party/${activeWatchParty.id}`);
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 text-indigo-600 hover:text-indigo-700"
                >
                  <Play className="w-4 h-4 inline mr-2" />
                  {activeWatchParty.title}
                </button>
              )}
              <a href="#community" className="block px-3 py-2 text-gray-600 hover:text-gray-900">
                Comunidade
              </a>
              {isAuthenticated && (
                <button 
                  onClick={() => {
                    navigate('/watch-party/create');
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900"
                >
                  Criar Watch Party
                </button>
              )}
              {!isAuthenticated && (
                <button
                  onClick={() => {
                    setIsLoginModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        )}
      </nav>

      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </>
  );
}