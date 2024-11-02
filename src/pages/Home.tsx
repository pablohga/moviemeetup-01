import React from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  Play, 
  Users, 
  Calendar,
  ArrowRight,
  Star,
  Clock,
  TrendingUp
} from 'lucide-react';

export function Home() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Assista junto, mesmo à distância
            </h1>
            <p className="text-xl mb-8 text-indigo-100">
              Crie watch parties para filmes, séries e jogos. Convide amigos, sincronize a reprodução e interaja em tempo real.
            </p>
            <button className="inline-flex items-center px-6 py-3 text-lg font-medium rounded-lg bg-white text-indigo-600 hover:bg-indigo-50 transition-colors">
              Começar agora
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Destaques do Dia</h2>
          <a href="#" className="text-indigo-600 hover:text-indigo-700 font-medium">
            Ver todos
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredContent.map((item) => (
            <FeaturedCard key={item.id} {...item} />
          ))}
        </div>
      </section>

      {/* Live Watch Parties */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Watch Parties ao Vivo</h2>
          <a href="#" className="text-indigo-600 hover:text-indigo-700 font-medium">
            Ver todas
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {liveWatchParties.map((party) => (
            <WatchPartyCard key={party.id} {...party} />
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Por que escolher o MovieMeetup?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Play className="w-8 h-8 text-indigo-600" />}
              title="Sincronização Perfeita"
              description="Assista em sincronia com seus amigos, sem atrasos ou dessincronização."
            />
            <FeatureCard
              icon={<Users className="w-8 h-8 text-indigo-600" />}
              title="Chat em Tempo Real"
              description="Interaja com voz, vídeo e texto durante as sessões de watch party."
            />
            <FeatureCard
              icon={<Calendar className="w-8 h-8 text-indigo-600" />}
              title="Agendamento Fácil"
              description="Agende watch parties e convide amigos com antecedência."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Sobre</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Sobre nós</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Carreiras</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contato</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Ajuda</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Termos de Uso</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacidade</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Cookies</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Receba novidades e atualizações do MovieMeetup
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="flex-1 px-4 py-2 rounded-l-md text-gray-900"
                />
                <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-r-md">
                  Assinar
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
}

function FeaturedCard({
  title,
  imageUrl,
  rating,
  category,
}: {
  id: string;
  title: string;
  imageUrl: string;
  rating: number;
  category: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-indigo-600">{category}</span>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 mr-1" />
            <span className="text-sm text-gray-600">{rating}</span>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
    </div>
  );
}

function WatchPartyCard({
  title,
  host,
  participants,
  startTime,
  imageUrl,
}: {
  id: string;
  title: string;
  host: string;
  participants: number;
  startTime: string;
  imageUrl: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-32 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            <span>{participants} participantes</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{startTime}</span>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t">
          <span className="text-sm text-gray-600">
            Organizado por <span className="font-medium">{host}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

// Mock data
const featuredContent = [
  {
    id: '1',
    title: 'Stranger Things',
    imageUrl: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=800',
    rating: 4.8,
    category: 'Série'
  },
  {
    id: '2',
    title: 'The Last of Us',
    imageUrl: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=800',
    rating: 4.9,
    category: 'Série'
  },
  {
    id: '3',
    title: 'Duna',
    imageUrl: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=800',
    rating: 4.7,
    category: 'Filme'
  }
];

const liveWatchParties = [
  {
    id: '1',
    title: 'Maratona Marvel',
    host: 'João Silva',
    participants: 42,
    startTime: 'Agora',
    imageUrl: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=800'
  },
  {
    id: '2',
    title: 'Game of Thrones S01',
    host: 'Maria Santos',
    participants: 28,
    startTime: 'Em 30min',
    imageUrl: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=800'
  },
  {
    id: '3',
    title: 'Breaking Bad Finale',
    host: 'Pedro Costa',
    participants: 56,
    startTime: 'Em 1h',
    imageUrl: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=800'
  }
];