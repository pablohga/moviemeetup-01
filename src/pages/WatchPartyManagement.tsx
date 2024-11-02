import React from 'react';
import { CreateWatchParty } from '../components/watch-party/CreateWatchParty';
import { ActiveWatchParties } from '../components/watch-party/ActiveWatchParties';
import { WatchPartyHistory } from '../components/watch-party/WatchPartyHistory';
import { WatchPartySettings } from '../components/watch-party/WatchPartySettings';
import { Plus, Search, Filter } from 'lucide-react';

export function WatchPartyManagement() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Gerenciamento de Watch Parties</h1>
          <p className="text-gray-600 mt-1">Crie e gerencie suas sessões de filmes e séries</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar watch parties..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
          
          <button className="p-2 text-gray-600 hover:text-gray-900">
            <Filter className="w-5 h-5" />
          </button>
          
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
            <Plus className="w-4 h-4 mr-2" />
            Nova Watch Party
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        <CreateWatchParty />
        <ActiveWatchParties />
        <WatchPartyHistory />
        <WatchPartySettings />
      </div>
    </div>
  );
}