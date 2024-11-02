import React, { useState } from 'react';
import { RecommendedContent } from '../components/discover/RecommendedContent';
import { ExploreWatchParties } from '../components/discover/ExploreWatchParties';
import { ContentRatings } from '../components/discover/ContentRatings';
import { Search, Filter } from 'lucide-react';

export function Discover() {
  const [activeTab, setActiveTab] = useState('recommended');

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Descobrir</h1>
          <p className="text-gray-600 mt-1">
            Encontre novos conteúdos e watch parties para participar
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar conteúdo..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
          
          <button className="p-2 text-gray-600 hover:text-gray-900">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200 mb-8">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('recommended')}
            className={`pb-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'recommended'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Recomendados
          </button>
          <button
            onClick={() => setActiveTab('explore')}
            className={`pb-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'explore'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Explorar
          </button>
          <button
            onClick={() => setActiveTab('ratings')}
            className={`pb-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'ratings'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Avaliações
          </button>
        </nav>
      </div>

      {/* Content */}
      <div>
        {activeTab === 'recommended' && <RecommendedContent />}
        {activeTab === 'explore' && <ExploreWatchParties />}
        {activeTab === 'ratings' && <ContentRatings />}
      </div>
    </div>
  );
}