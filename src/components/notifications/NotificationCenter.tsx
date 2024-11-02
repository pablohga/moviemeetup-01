import React, { useState } from 'react';
import { Bell, Calendar, X, Check, Clock } from 'lucide-react';

export function NotificationCenter() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications] = useState([
    {
      id: '1',
      type: 'invite',
      title: 'Convite para Watch Party',
      message: 'João te convidou para assistir "Duna: Parte 2"',
      time: new Date('2024-03-20T15:30:00'),
      read: false,
      actions: ['accept', 'decline']
    },
    {
      id: '2',
      type: 'reminder',
      title: 'Lembrete de Watch Party',
      message: 'A watch party "Maratona Marvel" começará em 30 minutos',
      time: new Date('2024-03-20T14:00:00'),
      read: true,
      actions: ['join']
    }
  ]);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-gray-600 hover:text-gray-900"
      >
        <Bell className="w-5 h-5" />
        {notifications.some(n => !n.read) && (
          <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {notifications.filter(n => !n.read).length}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-lg overflow-hidden z-50">
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Notificações</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 border-b ${
                  notification.read ? 'bg-white' : 'bg-indigo-50'
                }`}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    {notification.type === 'invite' ? (
                      <Calendar className="w-5 h-5 text-indigo-600" />
                    ) : (
                      <Clock className="w-5 h-5 text-indigo-600" />
                    )}
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      {notification.title}
                    </p>
                    <p className="mt-1 text-sm text-gray-600">
                      {notification.message}
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      {notification.time.toLocaleString()}
                    </p>

                    {notification.actions && (
                      <div className="mt-3 flex space-x-3">
                        {notification.actions.includes('accept') && (
                          <button className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                            <Check className="w-4 h-4 mr-1" />
                            Aceitar
                          </button>
                        )}
                        {notification.actions.includes('decline') && (
                          <button className="inline-flex items-center px-3 py-1 border border-gray-300 text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                            <X className="w-4 h-4 mr-1" />
                            Recusar
                          </button>
                        )}
                        {notification.actions.includes('join') && (
                          <button className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                            Entrar Agora
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-gray-50">
            <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
              Ver todas as notificações
            </button>
          </div>
        </div>
      )}
    </div>
  );
}