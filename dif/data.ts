export interface IUser {
  _id?: string;
  name: string;
  password: string;
  role?: 'member' | 'guest';
  gamers?: Pick<IGamer, '_id'>;
  createdAt?: string;
  updatedAt?: string;
}

export interface IGamer {
  _id?: string;
  name: string;
  role?: 'virtual';
  createdAt?: string;
  updatedAt?: string;
}

export interface IGame {
  _id?: string;
  rounds: {
    _id?: string;
    roundName: string;
    opponents: {
      opponent_id: Pick<IGamer | IUser, '_id'>;
      scores: number;
    }[];
  }[];
  createdAt?: string;
  updatedAt?: string;
  finished?: {
    opponent_id: Pick<IGamer | IUser, '_id'>;
    scores: number;
  };
}
