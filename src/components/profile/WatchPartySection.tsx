import React from 'react';
import { Calendar, Users, Clock, Plus } from 'lucide-react';
import type { IWatchParty } from '../../types';

export function WatchPartySection() {
  const upcomingParties = [
    {
      id: '1',
      title: 'Maratona Marvel',
      mediaTitle: 'Vingadores: Ultimato',
      status: 'scheduled',
      scheduledFor: new Date('2024-03-25T19:00:00'),
      participants: Array(12).fill(null),
      mediaCoverUrl: 'https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?auto=format&fit=crop&q=80&w=300'
    },
    {
      id: '2',
      title: 'Sessão Senhor dos Anéis',
      mediaTitle: 'O Senhor dos Anéis: A Sociedade do Anel',
      status: 'active',
      scheduledFor: new Date('2024-03-20T20:00:00'),
      participants: Array(8).fill(null),
      mediaCoverUrl: 'https://images.unsplash.com/photo-1506466010722-395aa2bef877?auto=format&fit=crop&q=80&w=300'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Watch Parties</h2>
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
            <Plus className="w-4 h-4 mr-2" />
            Nova Watch Party
          </button>
        </div>

        <div className="grid gap-4">
          {upcomingParties.map((party) => (
            <div 
              key={party.id}
              className="flex gap-4 p-4 border rounded-lg hover:border-indigo-200 transition-colors"
            >
              <img
                src={party.mediaCoverUrl}
                alt={party.mediaTitle}
                className="w-24 h-36 object-cover rounded-md"
              />
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">{party.title}</h3>
                    <p className="text-sm text-gray-600">{party.mediaTitle}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    party.status === 'active' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {party.status === 'active' ? 'Ao vivo' : 'Agendada'}
                  </span>
                </div>
                
                <div className="mt-4 flex items-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {party.scheduledFor.toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    {party.participants.length} participantes
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {party.scheduledFor.toLocaleTimeString()}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}