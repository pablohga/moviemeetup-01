import React from 'react';
import { Star, Film, Tv, Gamepad } from 'lucide-react';

export function FavoritesSection() {
  const favorites = [
    {
      id: '1',
      type: 'movie',
      title: 'Interestelar',
      rating: 4.9,
      coverUrl: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: '2',
      type: 'series',
      title: 'Breaking Bad',
      rating: 4.8,
      coverUrl: 'https://images.unsplash.com/photo-1562329265-95a6d7a83440?auto=format&fit=crop&q=80&w=400'
    },
    {
      id: '3',
      type: 'game',
      title: 'The Last of Us',
      rating: 4.7,
      coverUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=400'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Favoritos</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {favorites.map((item) => (
          <div key={item.id} className="relative group">
            <img
              src={item.coverUrl}
              alt={item.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-0 p-4 w-full">
                <h4 className="text-white font-medium">{item.title}</h4>
                <div className="flex items-center mt-1">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="text-white text-sm">{item.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}