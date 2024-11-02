import React from 'react';
import { useAuth } from '../context/AuthContext';
import { ProfileHeader } from '../components/profile/ProfileHeader';
import { WatchPartySection } from '../components/profile/WatchPartySection';
import { FavoritesSection } from '../components/profile/FavoritesSection';
import { SocialSection } from '../components/profile/SocialSection';
import { NotificationsSection } from '../components/profile/NotificationsSection';
import { StatsSection } from '../components/profile/StatsSection';
import { Settings } from 'lucide-react';

export function Profile() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600">Por favor, faça login para ver seu perfil</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <ProfileHeader user={user} />
      
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <StatsSection />
          <WatchPartySection />
          <FavoritesSection />
        </div>
        
        <div className="space-y-8">
          <SocialSection />
          <NotificationsSection />
        </div>
      </div>
    </div>
  );
}