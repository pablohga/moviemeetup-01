import React from 'react';
import { Star, ThumbsUp, ThumbsDown, MessageSquare } from 'lucide-react';

export function ContentRatings() {
  const ratings = [
    {
      id: '1',
      title: 'Duna: Parte 2',
      rating: 4.8,
      totalRatings: 1250,
      coverUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800',
      reviews: [
        {
          id: '1',
          user: 'João Silva',
          rating: 5,
          comment: 'Uma experiência cinematográfica incrível! Os efeitos visuais e a trilha sonora são espetaculares.',
          likes: 42,
          dislikes: 3,
          date: new Date('2024-03-15')
        },
        {
          id: '2',
          user: 'Maria Santos',
          rating: 4,
          comment: 'Ótima continuação do primeiro filme. A história se desenvolve muito bem.',
          likes: 28,
          dislikes: 1,
          date: new Date('2024-03-14')
        }
      ]
    }
  ];

  return (
    <div className="space-y-8">
      {ratings.map((item) => (
        <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Content Header */}
          <div className="flex items-start p-6 border-b">
            <img
              src={item.coverUrl}
              alt={item.title}
              className="w-32 h-48 object-cover rounded-md"
            />
            
            <div className="ml-6 flex-1">
              <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
              
              <div className="mt-2 flex items-center">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="ml-1 text-2xl font-bold text-gray-900">
                    {item.rating}
                  </span>
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  ({item.totalRatings} avaliações)
                </span>
              </div>

              {/* Rating Distribution */}
              <div className="mt-4 space-y-2">
                {[5, 4, 3, 2, 1].map((stars) => (
                  <div key={stars} className="flex items-center">
                    <span className="w-12 text-sm text-gray-600">
                      {stars} {stars === 1 ? 'star' : 'stars'}
                    </span>
                    <div className="flex-1 h-2 mx-4 bg-gray-200 rounded-full">
                      <div
                        className="h-full bg-yellow-400 rounded-full"
                        style={{
                          width: `${
                            (item.reviews.filter((r) => r.rating === stars).length /
                              item.reviews.length) *
                            100
                          }%`
                        }}
                      />
                    </div>
                    <span className="w-12 text-sm text-gray-600">
                      {Math.round(
                        (item.reviews.filter((r) => r.rating === stars).length /
                          item.reviews.length) *
                          100
                      )}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Avaliações Recentes
            </h4>

            <div className="space-y-6">
              {item.reviews.map((review) => (
                <div key={review.id} className="border-b pb-6 last:border-b-0 last:pb-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                        <span className="text-indigo-600 font-medium">
                          {review.user[0]}
                        </span>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          {review.user}
                        </p>
                        <div className="flex items-center mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating
                                  ? 'text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                          <span className="ml-2 text-sm text-gray-600">
                            {review.date.toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-gray-600">{review.comment}</p>

                  <div className="mt-4 flex items-center space-x-4">
                    <button className="flex items-center text-gray-600 hover:text-indigo-600">
                      <ThumbsUp className="w-4 h-4 mr-1" />
                      <span className="text-sm">{review.likes}</span>
                    </button>
                    <button className="flex items-center text-gray-600 hover:text-indigo-600">
                      <ThumbsDown className="w-4 h-4 mr-1" />
                      <span className="text-sm">{review.dislikes}</span>
                    </button>
                    <button className="flex items-center text-gray-600 hover:text-indigo-600">
                      <MessageSquare className="w-4 h-4 mr-1" />
                      <span className="text-sm">Responder</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}