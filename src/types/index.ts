// User related types
export interface IUser {
  id: string;
  email: string;
  username: string;
  avatarUrl?: string;
  createdAt: Date;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface IUserProfile extends IUser {
  bio?: string;
  favoriteGenres?: string[];
  watchHistory?: IWatchParty[];
}

// Watch Party types
export interface IWatchParty {
  id: string;
  title: string;
  description: string;
  mediaType: 'movie' | 'series' | 'game';
  mediaTitle: string;
  mediaCoverUrl?: string;
  host: IUser;
  participants: IUser[];
  isPrivate: boolean;
  scheduledFor: Date;
  status: 'scheduled' | 'active' | 'ended';
  createdAt: Date;
}

export interface IInvitation {
  id: string;
  watchPartyId: string;
  sender: IUser;
  receiver: IUser;
  status: 'pending' | 'accepted' | 'declined';
  createdAt: Date;
}

// Chat and Communication
export interface IMessage {
  id: string;
  watchPartyId: string;
  sender: IUser;
  content: string;
  type: 'text' | 'emoji' | 'system';
  timestamp: Date;
}

// Media Sync
export interface IMediaSyncState {
  currentTime: number;
  isPlaying: boolean;
  playbackRate: number;
  updatedAt: Date;
  updatedBy: IUser;
}

export interface IPlaybackControlEvent {
  type: 'play' | 'pause' | 'seek' | 'rate';
  value?: number;
  triggeredBy: IUser;
  timestamp: Date;
}

// Content Discovery
export interface IRecommendation {
  id: string;
  type: 'movie' | 'series' | 'game';
  title: string;
  description: string;
  coverUrl: string;
  rating: number;
  genres: string[];
  releaseDate: Date;
}

export interface IExploreItem extends IRecommendation {
  activeWatchParties: number;
  upcomingWatchParties: IWatchParty[];
}

// Notifications
export interface INotification {
  id: string;
  type: 'invitation' | 'reminder' | 'partyStart' | 'mention';
  title: string;
  message: string;
  read: boolean;
  createdAt: Date;
  data?: Record<string, unknown>;
}