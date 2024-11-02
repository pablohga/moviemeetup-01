import React from 'react';
import { Calendar, Users, Clock, Star } from 'lucide-react';

export function WatchPartyHistory() {
  const pastParties = [
    {
      id: '1',
      title: 'Harry Potter Maratona',
      description: 'Pedra Filosofal + Câmara Secreta',
      date: new Date('2024-02-15T19:00:00'),
      participants: 15,
      rating: 4.8,
      coverUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=300'
    },
    {
      id: '2',
      title: 'Star Wars: Uma Nova Esperança',
      description: 'Episódio IV',
      date: new Date('2024-02-10T20:00:00'),
      participants: 10,
      rating: 4.9,
      coverUrl: 'https://images.unsplash.com/photo-1533613220915-609f661a6fe1?auto=format&fit=crop&q=80&w=300'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Histórico de Watch Parties</h2>

      <div className="space-y-4">
        {pastParties.map((party) => (
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
                
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="text-sm font-medium text-gray-600">{party.rating}</span>
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

              <div className="mt-4">
                <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
                  Ver Detalhes
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}