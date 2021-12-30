import { NextFunction, Request, Response } from 'express';
import { ClientError } from '../errors';
import { GamerModel, GameModel } from '../models';
import { IGamer, IGame, IUser } from '../interfaces';

const normalizeGamer = (gamer: IGamer | IGamer[]): IGamer | IGamer[] => {
  if (Array.isArray(gamer)) {
    return gamer.map((gamer) => ({
      _id: gamer._id,
      name: gamer.name,
      color: gamer.color,
      owner: gamer.owner,
    }));
  }
  return {
    _id: gamer._id,
    name: gamer.name,
    color: gamer.color,
    owner: gamer.owner,
  };
};

const add = (req: Request, res: Response, next: NextFunction) => {
  const entityName = req.params.entityName;
  const entity = req.body;
  const user = req.user as IUser;
  switch (entityName) {
  case 'gamer': {
    const gamer = entity;
    gamer.owner = user._id;
    gamer.uniqueName = user._id + gamer.name;
    GamerModel.createGamer(gamer)
      .then((gamer) => {
        console.log('created gamer', normalizeGamer(gamer));
        return res.status(200).json(normalizeGamer(gamer));
      })
      .catch((err) => next(err));
    break;
  }
  case 'game': {
    const game = entity;
    game.owner = user._id;
    GameModel.createGame(game)
      .then((game) => {
        return res.status(200).json(game);
      })
      .catch((err) => next(err));
    break;
  }
  default:
    return next(new ClientError('Wrong entity', 403));
  }
};

const remove = (req: Request, res: Response, next: NextFunction) => {
  const entityName = req.params.entityName;
  const _id = req.params._id;
  // switch (entityName) {
  //   case 'operator':
  //     UserModel.deleteOne({ _id })
  //       .then((result) => checkDbResDeleteCount(result))
  //       .then((_) => {
  //         return CompanyModel.updateOne(
  //           { _id: company_id },
  //           { $pull: { users: _id } },
  //           { multi: true },
  //         );
  //       })
  //       .then((result) => checkDbResNModified(result))
  //       .then((_) => {
  //         return res.status(200).json(_id);
  //       })
  //       .catch((err) => next(err));
  //     break;
  //   case 'room':
  //     BookingModel.deleteMany({ room_id: _id })
  //       .then((_) => {
  //         console.log('delete', _);
  //         return CompanyModel.updateOne(
  //           { _id: company_id },
  //           { $pull: { 'rooms': { _id } } },
  //           { upsert: false },
  //         );
  //       })

  //       .then((_) => res.status(200).json(_id))
  //       .catch((err) => next(err));
  //     break;
  //   default:
  //     return next(new ClientError({ message: 'Wrong entity', status: 403 }));
  // }
};

const getAll = (req: Request, res: Response, next: NextFunction) => {
  const user = req.user as IUser;
  const entityPluralName = req.params.entityPluralName;
  switch (entityPluralName) {
  case 'gamers': {
    GamerModel.find({ owner: user._id })
      .then((gamers) => res.status(200).json(normalizeGamer(gamers)))
      .catch((err) => next(err));
    break;
  }
  case 'games': {
    GameModel.find({ owner: user._id, type: entityPluralName })
      .then((games) => res.status(200).json(games))
      .catch((err) => next(err));
    break;
  }
  //     UserModel.find({ _id: { $in: company.users } }, { password: 0 })
  //       .then((users) => res.status(200).json(normalizeUserObject(users)))
  //       .catch((err) => next(err));
  //     break;
  //   case 'rooms':
  //     CompanyModel.find({ _id: company._id }, { rooms: 1, _id: 0 })
  //       .then((result) => res.status(200).json(result[0].rooms))
  //       .catch((err) => next(err));
  default:
    return next(new ClientError('Wrong entity', 403));
  }
};

const getById = (req: Request, res: Response, next: NextFunction) => {
  const entityName = req.params.entityName;
  const _id = req.params._id;
  const user = req.user as IUser;

  switch (entityName) {
  case 'gamer': {
    GamerModel.find({ _id, owner: user._id })
      .then((gamer) => {
        console.log('created gamer', normalizeGamer(gamer));
        return res.status(200).json(normalizeGamer(gamer));
      })
      .catch((err) => next(err));
    break;
  }
  case 'game': {
    GameModel.find({ _id, owner: user._id })
      .then((game) => {
        console.log('found game', game);
        return res.status(200).json(game);
      })
      .catch((err) => next(err));
    break;
  }
  }
  console.log('id', _id);
  res.status(200).json({ _id: '12345', name: 'john' });
};

const getWithQuery = (req: Request, res: Response, next: NextFunction) => {
  const entityPluralName = req.params.entityPluralName;
  const query = req.query;
};

const update = (req: Request, res: Response, next: NextFunction) => {
  const entityName = req.params.entityName;
  const _id = req.params._id;
  const update = req.body;
  const user = req.user as IUser;

  switch (entityName) {
  case 'gamer':
    GamerModel.findOneAndUpdate(
      { _id },
      { $set: update },
      {
        upsert: true, // Create a document if one isn't found. if {upsert: false} and added new document, db returns null
        useFindAndModify: true, // use findOneAndUpdate MongoDB driver's instead of findAndModify()
        new: true, // Return NEW document after updates are applied, by default old
        rawResult: false, // return mongoDB object instead of doc (old version of doc included)
      },
    )
      .then((updatedGamer) => {
        console.log('updatedGamer', updatedGamer);
        return updatedGamer;
      })
      .then((updatedGamer) => normalizeGamer(updatedGamer))
      .then((normalizedGamer) => res.status(200).json(normalizedGamer))
      .catch((err) => next(err));
    break;
  case 'game':
    // self update and admin update
    GameModel.findOneAndUpdate(
      { _id },
      { $set: update },
      {
        upsert: true, // Create a document if one isn't found. if {upsert: false} and added new document, db returns null
        useFindAndModify: true, // use findOneAndUpdate MongoDB driver's instead of findAndModify()
        new: true, // Return NEW document after updates are applied, by default old
        rawResult: false, // return mongoDB object instead of doc (old version of doc included)
      },
    )
      .then((updatedGame) => {
        console.log('updatedGame', updatedGame);
        return updatedGame;
      })
      .then((updatedGame) => res.status(200).json(updatedGame))
      .catch((err) => next(err));
    break;
    //   case 'room':
    //     const updateQuery = {};
    //     for (const key in update) {
    //       if (update.hasOwnProperty(key)) {
    //         updateQuery['rooms.$.' + key] = update[key];
    //       }
    //     }
    //     // partial update object in array at position $
    //     CompanyModel.updateOne(
    //       { '_id': company_id, 'rooms._id': _id },
    //       { $set: updateQuery },
    //       {
    //         upsert: false,
    //         useFindAndModify: false,
    //         new: true,
    //         rawResult: false,
    //       },
    //     )
    //       .then((_) => res.status(200).json())
    //       .catch((err) => next(err));
    //     break;
    //   default:
    //     return next(new ClientError({ message: 'Wrong entity', status: 403 }));
  }
};

export {
  add, remove, getAll, getById, getWithQuery, update,
};
