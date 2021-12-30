import { Schema, model } from 'mongoose';
import { IGame, IGameModel } from '../interfaces';

const ScoreScheema = new Schema({
  _id: { // gamer _id
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
    default: 0,
  },
});

const RoundScheema = new Schema({
  _id: { // name
    type: String,
    required: true,
  },
  players: [ScoreScheema],
});


const GameSchema = new Schema<IGame, IGameModel>({
  owner: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  rounds: [RoundScheema],
  // finaly: ScoreScheema,
},
{
  timestamps: true, // will add: a createdAt and a updatedAt date value.
});


GameSchema.statics.createGame = function(game) {
  return this.create(game);
};

export const GameModel = model<IGame, IGameModel>('games', GameSchema);
