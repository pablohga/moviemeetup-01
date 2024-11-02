import React from 'react';
import { Users, Calendar, Clock, Star, Filter } from 'lucide-react';

export function ExploreWatchParties() {
  const watchParties = [
    {
      id: '1',
      title: 'Maratona Marvel',
      content: 'Vingadores: Ultimato',
      host: 'João Silva',
      participants: 42,
      scheduledFor: new Date('2024-03-25T19:00:00'),
      status: 'scheduled',
      coverUrl: 'https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?auto=format&fit=crop&w=800'
    },
    {
      id: '2',
      title: 'Sessão Senhor dos Anéis',
      content: 'A Sociedade do Anel',
      host: 'Maria Santos',
      participants: 28,
      scheduledFor: new Date('2024-03-20T20:00:00'),
      status: 'active',
      coverUrl: 'https://images.unsplash.com/photo-1506466010722-395aa2bef877?auto=format&fit=crop&w=800'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex items-center gap-4 pb-4 border-b">
        <button className="px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-full">
          Todos
        </button>
        <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-full">
          Filmes
        </button>
        <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-full">
          Séries
        </button>
        <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-full">
          Ao Vivo
        </button>
      </div>

      {/* Watch Parties List */}
      <div className="space-y-4">
        {watchParties.map((party) => (
          <div
            key={party.id}
            className="flex gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={party.coverUrl}
              alt={party.title}
              className="w-48 h-32 object-cover rounded-md"
            />
            
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">{party.title}</h3>
                  <p className="text-sm text-gray-600">{party.content}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Organizado por {party.host}
                  </p>
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
                  <Clock className="w-4 h-4 mr-2" />
                  {party.scheduledFor.toLocaleTimeString()}
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  {party.participants} participantes
                </div>
              </div>

              <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Participar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}