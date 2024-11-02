import React from 'react';
import { Film, Users, Star, Clock } from 'lucide-react';

export function StatsSection() {
  const stats = [
    {
      icon: <Film className="w-8 h-8 text-indigo-600" />,
      label: 'Watch Parties',
      value: '24',
      subtext: 'Organizadas'
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      label: 'Amigos',
      value: '156',
      subtext: 'Conectados'
    },
    {
      icon: <Star className="w-8 h-8 text-indigo-600" />,
      label: 'Avaliação',
      value: '4.8',
      subtext: 'Média'
    },
    {
      icon: <Clock className="w-8 h-8 text-indigo-600" />,
      label: 'Horas',
      value: '342',
      subtext: 'Assistidas'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center"
        >
          <div className="mb-2">{stat.icon}</div>
          <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
          <div className="text-sm text-gray-600">
            {stat.label}
            <br />
            {stat.subtext}
          </div>
        </div>
      ))}
    </div>
  );
}