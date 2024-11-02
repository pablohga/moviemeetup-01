import React from 'react';
import { Bell, MessageCircle, Calendar, Star } from 'lucide-react';

export function NotificationsSection() {
  const notifications = [
    {
      id: '1',
      type: 'invitation',
      title: 'Nova Watch Party',
      message: 'João te convidou para assistir "Duna: Parte 2"',
      read: false,
      createdAt: new Date('2024-03-19T14:30:00')
    },
    {
      id: '2',
      type: 'mention',
      title: 'Menção em comentário',
      message: 'Maria mencionou você em um comentário',
      read: true,
      createdAt: new Date('2024-03-19T10:15:00')
    }
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'invitation':
        return <Calendar className="w-5 h-5" />;
      case 'mention':
        return <MessageCircle className="w-5 h-5" />;
      case 'partyStart':
        return <Star className="w-5 h-5" />;
      default:
        return <Bell className="w-5 h-5" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Notificações
      </h2>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`flex items-start space-x-3 p-3 rounded-lg ${
              notification.read ? 'bg-white' : 'bg-indigo-50'
            }`}
          >
            <div className={`text-${notification.read ? 'gray' : 'indigo'}-600`}>
              {getNotificationIcon(notification.type)}
            </div>
            <div>
              <p className="font-medium text-gray-900">{notification.title}</p>
              <p className="text-sm text-gray-600">{notification.message}</p>
              <p className="text-xs text-gray-500 mt-1">
                {notification.createdAt.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}