import React from 'react';
import { Users, UserPlus, MessageCircle } from 'lucide-react';
import type { IUser } from '../../types';

export function SocialSection() {
  // Mock data - replace with actual data fetching
  const friends: IUser[] = [];
  const pendingRequests: IUser[] = [];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Amigos</h2>
        <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
          Ver todos
        </button>
      </div>

      <div className="space-y-4">
        {friends.map((friend) => (
          <div key={friend.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {friend.avatarUrl ? (
                <img
                  src={friend.avatarUrl}
                  alt={friend.username}
                  className="w-10 h-10 rounded-full"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <Users className="w-5 h-5 text-gray-400" />
                </div>
              )}
              <div>
                <p className="font-medium text-gray-900">{friend.username}</p>
                <p className="text-sm text-gray-600">Online</p>
              </div>
            </div>
            <button className="p-2 text-gray-600 hover:text-indigo-600">
              <MessageCircle className="w-5 h-5" />
            </button>
          </div>
        ))}

        {pendingRequests.length > 0 && (
          <div className="border-t pt-4 mt-4">
            <h3 className="text-sm font-medium text-gray-900 mb-3">
              Solicitações Pendentes
            </h3>
            {pendingRequests.map((request) => (
              <div key={request.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {request.avatarUrl ? (
                    <img
                      src={request.avatarUrl}
                      alt={request.username}
                      className="w-10 h-10 rounded-full"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <UserPlus className="w-5 h-5 text-gray-400" />
                    </div>
                  )}
                  <p className="font-medium text-gray-900">{request.username}</p>
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700">
                    Aceitar
                  </button>
                  <button className="px-3 py-1 border border-gray-300 text-gray-700 rounded-md text-sm hover:bg-gray-50">
                    Recusar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}