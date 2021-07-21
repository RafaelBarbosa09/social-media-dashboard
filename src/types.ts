export interface Instagram {
  user: string;
  followers: number;
  followersPerDay: number;
  likes: number;
  profileViews: number
}

export interface Twitter {
  user: string;
  followers: number;
  followersPerDay: number;
  likes: number;
  retweets: number;
}

export interface Youtube {
  user: string;
  subscribers: number;
  subscribersPerDay: number;
  likes: number;
  totalViews: number;
}

export interface Facebook {
  user: string;
  followers: number;
  followersPerDay: number;
  likes: number;
  pageViews: number;
}