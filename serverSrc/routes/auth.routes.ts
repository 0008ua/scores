// const express = require('express');
import express, { NextFunction, Request, Response, Express } from 'express';
import { ClientError, ServerError } from '../errors';
const router = express.Router();
import { UserModel } from '../models/user.model';
import { IUser } from '../interfaces';
import passport from 'passport';
import winston from '../config/winston';
const log = winston(module);

import {authController} from '../controllers';

router.get('/protected',
  passport.authenticate('jwt', { session: false, failWithError: true }),
  (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization'];
    // console.log('token', token);
    return res.status(200).json('reached protected route');
  });

// name with username and password
router.post('/signin',
  passport.authenticate('local', {session: false}),
  authController.createJwtAndResponse,
);

// bad token or new guest user without token
// or new user is registring
router.post('/signup',
  authController.signup,
  passport.authenticate('localWithoutPassword', { session: false }),
  authController.createJwtAndResponse,
);

router.get('/authentication', (req: Request, res: Response, next: NextFunction) => {
  // console.log('granted');

  return res.status(200).json('grant');
  // return res.status(200).json(body);
  // return next(new ClientError());
});

export default router;
