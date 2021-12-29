// const express = require('express');
import express, { Request, Response } from 'express';
import { ClientError, ServerError } from '../errors';
const router = express.Router();

router.post('/test', (req: Request, res: Response) => {
  const body = req.body;
  console.log('body', body);
  setTimeout(() => res.status(200).json(body), 2000);
  // return res.status(200).json(body);
  // return next(new ClientError());
});

export default router;
