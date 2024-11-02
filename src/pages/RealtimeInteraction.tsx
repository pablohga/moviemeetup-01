import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { 
  MessageSquare, 
  Video, 
  Mic, 
  MicOff,
  VideoOff,
  Users,
  Settings,
  MessageCircle,
  ThumbsUp,
  Heart,
  Laugh,
  Star,
  Send,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  AlertCircle
} from 'lucide-react';

export function RealtimeInteraction() {
  const { id } = useParams();
  const [message, setMessage] = useState('');
  const [isVideoEnabled, setIsVideoEnabled] = useState(true);
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [syncStatus, setSyncStatus] = useState('synchronized'); // 'synchronized' | 'syncing' | 'out-of-sync'
  const videoRef = useRef<HTMLVideoElement>(null);

  // Mock data
  const messages = [
    { id: 1, user: 'João Silva', content: 'Essa cena é incrível!', timestamp: new Date() },
    { id: 2, user: 'Maria Santos', content: 'Concordo! A cinematografia está perfeita', timestamp: new Date() }
  ];

  const participants = [
    { id: 1, name: 'João Silva', isHost: true, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    { id: 2, name: 'Maria Santos', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' }
  ];

  // Video control handlers
  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSkip = (seconds: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime += seconds;
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleVolumeToggle = () => {
    if (videoRef.current) {
      setIsMuted(!isMuted);
      videoRef.current.muted = !isMuted;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
  };

  // Sync status simulation
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate random sync status changes
      const statuses = ['synchronized', 'syncing', 'synchronized', 'synchronized'];
      const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
      setSyncStatus(randomStatus);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Main content area */}
      <div className="flex h-[calc(100vh-4rem)]">
        {/* Video area */}
        <div className="flex-1 relative">
          {/* Video player */}
          <div className="absolute inset-0 bg-black">
            <video
              ref={videoRef}
              className="w-full h-full object-contain"
              src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              poster="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=1920"
            />
          </div>

          {/* Sync status indicator */}
          {syncStatus !== 'synchronized' && (
            <div className={`absolute top-4 right-4 px-4 py-2 rounded-full flex items-center ${
              syncStatus === 'syncing' ? 'bg-yellow-500' : 'bg-red-500'
            }`}>
              <AlertCircle className="w-4 h-4 mr-2" />
              {syncStatus === 'syncing' ? 'Sincronizando...' : 'Fora de sincronia'}
            </div>
          )}

          {/* Video controls overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            {/* Progress bar */}
            <div className="mb-4">
              <div className="h-1 bg-gray-600 rounded-full">
                <div 
                  className="h-full bg-indigo-600 rounded-full"
                  style={{ width: `${(currentTime / (videoRef.current?.duration || 1)) * 100}%` }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              {/* Left controls */}
              <div className="flex items-center space-x-4">
                <button 
                  onClick={handlePlayPause}
                  className="p-2 hover:bg-white/10 rounded-full"
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6" />
                  ) : (
                    <Play className="w-6 h-6" />
                  )}
                </button>
                <button 
                  onClick={() => handleSkip(-10)}
                  className="p-2 hover:bg-white/10 rounded-full"
                >
                  <SkipBack className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => handleSkip(10)}
                  className="p-2 hover:bg-white/10 rounded-full"
                >
                  <SkipForward className="w-5 h-5" />
                </button>
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={handleVolumeToggle}
                    className="p-2 hover:bg-white/10 rounded-full"
                  >
                    {isMuted ? (
                      <VolumeX className="w-5 h-5" />
                    ) : (
                      <Volume2 className="w-5 h-5" />
                    )}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-24"
                  />
                </div>
              </div>

              {/* Center - time */}
              <div className="text-sm">
                {Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60).toString().padStart(2, '0')} / 
                {videoRef.current?.duration ? ` ${Math.floor(videoRef.current.duration / 60)}:${Math.floor(videoRef.current.duration % 60).toString().padStart(2, '0')}` : ' 0:00'}
              </div>

              {/* Right controls */}
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setIsVideoEnabled(!isVideoEnabled)}
                  className={`p-2 rounded-full ${isVideoEnabled ? 'bg-indigo-600' : 'bg-red-600'}`}
                >
                  {isVideoEnabled ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
                </button>
                <button 
                  onClick={() => setIsAudioEnabled(!isAudioEnabled)}
                  className={`p-2 rounded-full ${isAudioEnabled ? 'bg-indigo-600' : 'bg-red-600'}`}
                >
                  {isAudioEnabled ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
                </button>
                <div className="flex items-center space-x-2">
                  <button className="p-2 hover:bg-white/10 rounded-full">
                    <ThumbsUp className="w-5 h-5" />
                  </button>
                  <button className="p-2 hover:bg-white/10 rounded-full">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="p-2 hover:bg-white/10 rounded-full">
                    <Laugh className="w-5 h-5" />
                  </button>
                  <button className="p-2 hover:bg-white/10 rounded-full">
                    <Star className="w-5 h-5" />
                  </button>
                </div>
                <button className="p-2 hover:bg-white/10 rounded-full">
                  <Settings className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-96 bg-gray-800 flex flex-col">
          {/* Tabs */}
          <div className="flex border-b border-gray-700">
            <button className="flex-1 px-4 py-3 text-sm font-medium text-white bg-gray-700">
              <MessageSquare className="w-5 h-5 inline-block mr-2" />
              Chat
            </button>
            <button className="flex-1 px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-700">
              <Users className="w-5 h-5 inline-block mr-2" />
              Participantes ({participants.length})
            </button>
          </div>

          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
                    {msg.user[0]}
                  </div>
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{msg.user}</span>
                    <span className="text-xs text-gray-400">
                      {msg.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                  <p className="text-gray-300">{msg.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Message input */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Digite uma mensagem..."
                className="flex-1 bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button 
                className="p-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
                onClick={() => setMessage('')}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}