import React from 'react';
import { Star, Users, Calendar, Play } from 'lucide-react';

export function RecommendedContent() {
  const recommendations = [
    {
      id: '1',
      title: 'Duna: Parte 2',
      type: 'movie',
      rating: 4.8,
      coverUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800',
      description: 'Continue a jornada épica de Paul Atreides enquanto ele se une aos Fremen.',
      activeWatchParties: 5,
      nextWatchParty: new Date('2024-03-25T19:00:00')
    },
    {
      id: '2',
      title: 'The Last of Us',
      type: 'series',
      rating: 4.9,
      coverUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800',
      description: 'Uma série pós-apocalíptica baseada no aclamado jogo.',
      activeWatchParties: 3,
      nextWatchParty: new Date('2024-03-26T20:00:00')
    }
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendations.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="relative h-48">
              <img
                src={item.coverUrl}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <div className="flex items-center mt-1">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="text-sm text-white">{item.rating}</span>
                </div>
              </div>
            </div>
            
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-4">{item.description}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  <span>{item.activeWatchParties} watch parties ativas</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>Próxima em {item.nextWatchParty.toLocaleDateString()}</span>
                </div>
              </div>

              <button className="mt-4 w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                <Play className="w-4 h-4 mr-2" />
                Participar da Próxima
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}