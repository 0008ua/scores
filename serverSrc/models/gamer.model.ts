import { Schema, model } from 'mongoose';
import { IGamer, IGamerModel } from '../interfaces';

const GamerSchema = new Schema<IGamer, IGamerModel>({
  owner: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    unique: false,
  },
  uniqueName: {
    type: String,
    required: true,
    unique: true,
  },
  color: {
    type: String,
    enum: ['red', 'green', 'blue', 'black', 'yellow'],
  },
},
{
  timestamps: true, // will add: a createdAt and a updatedAt date value.
});


GamerSchema.statics.createGamer = function(gamer) {
  return this.create(gamer);
};

export const GamerModel = model<IGamer, IGamerModel>('gamers', GamerSchema);
