import React from 'react';
import { Calendar, Users, Clock, MoreVertical } from 'lucide-react';

export function ActiveWatchParties() {
  const activeParties = [
    {
      id: '1',
      title: 'Maratona Marvel',
      description: 'Vingadores: Ultimato + Cenas deletadas',
      date: new Date('2024-03-25T19:00:00'),
      participants: 12,
      status: 'scheduled',
      coverUrl: 'https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?auto=format&fit=crop&q=80&w=300'
    },
    {
      id: '2',
      title: 'Sessão Senhor dos Anéis',
      description: 'A Sociedade do Anel - Versão Estendida',
      date: new Date('2024-03-20T20:00:00'),
      participants: 8,
      status: 'active',
      coverUrl: 'https://images.unsplash.com/photo-1506466010722-395aa2bef877?auto=format&fit=crop&q=80&w=300'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Watch Parties Ativas</h2>

      <div className="space-y-4">
        {activeParties.map((party) => (
          <div
            key={party.id}
            className="flex gap-4 p-4 border rounded-lg hover:border-indigo-200 transition-colors"
          >
            <img
              src={party.coverUrl}
              alt={party.title}
              className="w-24 h-36 object-cover rounded-md"
            />
            
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">{party.title}</h3>
                  <p className="text-sm text-gray-600">{party.description}</p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    party.status === 'active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {party.status === 'active' ? 'Ao vivo' : 'Agendada'}
                  </span>
                  <button className="p-1 hover:bg-gray-100 rounded-full">
                    <MoreVertical className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
              </div>

              <div className="mt-4 flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {party.date.toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  {party.participants} participantes
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {party.date.toLocaleTimeString()}
                </div>
              </div>

              <div className="mt-4 flex items-center space-x-4">
                <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                  Editar
                </button>
                <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                  Convidar
                </button>
                <button className="text-sm text-red-600 hover:text-red-700 font-medium">
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}