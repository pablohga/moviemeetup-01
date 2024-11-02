import React, { useState } from 'react';
import { User, Settings, Edit, Camera, Mail, Link as LinkIcon } from 'lucide-react';
import type { IUser } from '../../types';

interface ProfileHeaderProps {
  user: IUser;
}

export function ProfileHeader({ user }: ProfileHeaderProps) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <div className="flex flex-col md:flex-row md:items-start justify-between">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
          <div className="relative">
            {user.avatarUrl ? (
              <img
                src={user.avatarUrl}
                alt={user.username}
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
            ) : (
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center border-4 border-white shadow-lg">
                <User className="w-16 h-16 text-white" />
              </div>
            )}
            <button 
              className="absolute bottom-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
              aria-label="Alterar foto de perfil"
            >
              <Camera className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-900">{user.username}</h1>
            <p className="text-gray-600 mt-1">
              Membro desde {new Date(user.createdAt).toLocaleDateString()}
            </p>
            {user.bio && (
              <p className="mt-4 text-gray-700 max-w-2xl">{user.bio}</p>
            )}
            <div className="flex items-center justify-center md:justify-start space-x-4 mt-4">
              <button className="flex items-center text-gray-600 hover:text-indigo-600">
                <Mail className="w-4 h-4 mr-1" />
                Mensagem
              </button>
              <button className="flex items-center text-gray-600 hover:text-indigo-600">
                <LinkIcon className="w-4 h-4 mr-1" />
                Compartilhar
              </button>
            </div>
          </div>
        </div>

        <div className="flex mt-6 md:mt-0 space-x-4 justify-center md:justify-start">
          <button
            onClick={() => setIsEditing(true)}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <Edit className="w-4 h-4 mr-2" />
            Editar Perfil
          </button>
          <button 
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <Settings className="w-4 h-4 mr-2" />
            Configurações
          </button>
        </div>
      </div>

      {user.favoriteGenres && user.favoriteGenres.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {user.favoriteGenres.map((genre) => (
            <span
              key={genre}
              className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium"
            >
              {genre}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}