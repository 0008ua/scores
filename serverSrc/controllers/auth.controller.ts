// const express = require('express');
import { NextFunction, Request, Response } from 'express';
import { UserModel } from '../models/user.model';
import { IUser } from '../interfaces';
import jwt from 'jsonwebtoken';
import config from '../config';
import { v4 as uuidv4 } from 'uuid';

const signup = (req: Request, res: Response, next: NextFunction) => {
  const user: IUser = req.body;
  if (user && user.name && user.password) {
    // singnup new user
    user.role = 'member';
  } else {
    // signup anonymus user
    user.role = 'guest';
    user.name = uuidv4();
    user.password = uuidv4();
  }

  UserModel.createUser(user)
    .then((user) => {
      req.body = user;
      return next();
    })
    .catch((err) => next(err));
};

const createJwtAndResponse = (req: Request, res: Response, next: NextFunction) => {
  // console.log('jwt', config.get('JWT_SECRET'))
  const { name, role, _id } = req.user as IUser;
  // console.log('req.user', req.user)
  const user = { name, role, _id };
  const token = createJwtHelper('JWT ', user, config.get('JWT_SECRET'));
  res.status(200).json(token);
};

const createJwtHelper = (prefix: string, sub: any, secret: string, exp?: number) => {
  const date = Math.floor(Date.now() / 1000); // in seconds
  const subject = {
    ...sub,
    iat: date, // seconds
  } as { sub: any, iat: number, exp?: number };
  if (exp) {
    subject.exp = date + exp; // seconds
  }
  return prefix + jwt.sign(subject, secret);
};

export {
  signup,
  createJwtAndResponse,
};
