// const express = require('express');
import express, { Request, Response } from 'express';
import { ClientError, ServerError } from '../errors';
const router = express.Router();

import passport from 'passport';
import { storeController } from '../controllers';
// const { authorization } = require('../helpers');

// router.get('/:entity/:_id', (req: Request, res: Response) => {
//   const body = req.body;
//   const { _id, entity } = req.params;
//   console.log('req.params', req.params);
//   console.log('body', body);
//   console.log('_id', _id);
//   console.log('entity', entity);
//   setTimeout(() => res.status(200).json(_id), 2000);
//   // return res.status(200).json(body);
//   // return next(new ClientError());
// });

// router.get('/:entities', (req: Request, res: Response) => {
//   const body = req.body;
//   const { entities } = req.params;
//   console.log('req.params', req.params);
//   console.log('body', body);
//   console.log('entities', entities);
//   setTimeout(() => res.status(200).json(['one', 'two']), 2000);
//   // return res.status(200).json(body);
//   // return next(new ClientError());
// });


router.post('/:entityName',
  passport.authenticate('jwt', { session: false, failWithError: true }),
  storeController.add);

router.delete('/:entityName/:_id',
  passport.authenticate('jwt', { session: false, failWithError: true }),
  storeController.remove);

router.get('/:entityPluralName',
  passport.authenticate('jwt', { session: false, failWithError: true }),
  storeController.getAll);

router.get('/:entityName/:_id',
  passport.authenticate('jwt', { session: false, failWithError: true }),
  storeController.getById);

router.get('/:entityPluralName',
  passport.authenticate('jwt', { session: false, failWithError: true }),
  storeController.getWithQuery);

router.put('/:entityName/:_id',
  passport.authenticate('jwt', { session: false, failWithError: true }),
  storeController.update,
);

module.exports.storeRoutes = router;

export default router;
