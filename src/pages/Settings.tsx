import React from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  Bell, 
  Lock, 
  Monitor, 
  Volume2, 
  Globe, 
  UserCircle,
  Shield,
  Trash2
} from 'lucide-react';

export function Settings() {
  const { user } = useAuth();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Configurações</h1>

      <div className="space-y-6">
        {/* Profile Settings */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <UserCircle className="w-5 h-5 mr-2" />
            Perfil
          </h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Nome de usuário
              </label>
              <input
                type="text"
                id="username"
                defaultValue={user?.username}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                defaultValue={user?.email}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>
        </section>

        {/* Notification Settings */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Bell className="w-5 h-5 mr-2" />
            Notificações
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900">Notificações por email</h3>
                <p className="text-sm text-gray-500">Receba atualizações sobre watch parties</p>
              </div>
              <button
                type="button"
                className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 bg-indigo-600"
                role="switch"
                aria-checked="true"
              >
                <span className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
              </button>
            </div>
          </div>
        </section>

        {/* Privacy Settings */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Lock className="w-5 h-5 mr-2" />
            Privacidade
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900">Perfil público</h3>
                <p className="text-sm text-gray-500">Permitir que outros usuários vejam seu perfil</p>
              </div>
              <button
                type="button"
                className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 bg-gray-200"
                role="switch"
                aria-checked="false"
              >
                <span className="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
              </button>
            </div>
          </div>
        </section>

        {/* Playback Settings */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Monitor className="w-5 h-5 mr-2" />
            Reprodução
          </h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="quality" className="block text-sm font-medium text-gray-700">
                Qualidade de vídeo
              </label>
              <select
                id="quality"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option>Automático</option>
                <option>1080p</option>
                <option>720p</option>
                <option>480p</option>
              </select>
            </div>
          </div>
        </section>

        {/* Audio Settings */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Volume2 className="w-5 h-5 mr-2" />
            Áudio
          </h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="input-device" className="block text-sm font-medium text-gray-700">
                Dispositivo de entrada
              </label>
              <select
                id="input-device"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option>Microfone padrão</option>
              </select>
            </div>
          </div>
        </section>

        {/* Account Management */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Shield className="w-5 h-5 mr-2" />
            Gerenciamento da Conta
          </h2>
          <div className="space-y-4">
            <button className="flex items-center text-red-600 hover:text-red-700">
              <Trash2 className="w-5 h-5 mr-2" />
              Excluir conta
            </button>
          </div>
        </section>
      </div>

      {/* Save Button */}
      <div className="mt-8 flex justify-end">
        <button className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Salvar alterações
        </button>
      </div>
    </div>
  );
}