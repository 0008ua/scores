import { Model, Schema, model, Document } from 'mongoose';

export interface IUser {
  _id?: string;
  name: string;
  password: string;
  role?: 'member' | 'guest';
  // gamers?: Pick<IGamer, '_id'>;
  // games?: Pick<IGame, '_id'>;
  createdAt?: string;
  updatedAt?: string;
}

export interface IGamer {
  _id?: string;
  owner: string; //Pick<IUser, '_id'>;
  name: string;
  uniqueName?: string;
  color: 'red' | 'green' | 'blue' | 'black' | 'yellow';
  createdAt?: string;
  updatedAt?: string;
}

export interface IGame {
  _id?: string;
  type: string;
  owner: string; //Pick<IUser, '_id'>;
  rounds: {
    _id?: string;
    roundName: string;
    scores: {
      _id?: string;
      gamer_id: string;
      gamerName: string;
      gamerColor: string;
      score: number;
    }[];
  }[];
  createdAt?: string;
  updatedAt?: string;
  finaly?: {
    _id?: string;
    gamer_id: string // Pick<IGamer, '_id'>;
    score: number;
  };
}

export interface IUserModel extends Model<IUser> {
  createUser(user: IUser): Promise<IUser>;
  isNameExists(name: string): Promise<IUser>;
  isNameUnique(name: string): Promise<null>;
  isPasswordMatched(candidatePassword: string, userFromDb: IUser): Promise<IUser>;
}

export interface IGamerModel extends Model<IGamer> {
  createGamer(gamer: IGamer): Promise<IGamer>;
}

export interface IGameModel extends Model<IGame> {
  createGame(game: IGame): Promise<IGame>;
}