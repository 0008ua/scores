import { Schema, model } from 'mongoose';
import { IGame, IGameModel } from '../interfaces';

const ScoreScheema = new Schema({
  gamer_id: {
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
  roundName: {
    type: String,
    required: true,
  },
  scores: [ScoreScheema],
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
  finaly: ScoreScheema,
},
{
  timestamps: true, // will add: a createdAt and a updatedAt date value.
});


GameSchema.statics.createGame = function(game) {
  return this.create(game);
};

export const GameModel = model<IGame, IGameModel>('games', GameSchema);
