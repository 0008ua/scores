import dotenv from 'dotenv';
dotenv.config();
import config from './config';

import express, { Request, Response, Application, NextFunction } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import { ClientError, errorHandler, ServerError } from './errors';
import { router, dataRouter, authRouter, storeRouter } from './routes';
import passport from 'passport';

import mongooseConnect from './config/mongoose';
mongooseConnect();

const app: Application = express();

// view engine setup
app.set('views', path.join(__dirname, 'server', 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(passport.initialize());
// app.use(passport.session());
import './config/passport';

app.use((req: Request, res: Response, next: NextFunction) => {
  // next(new ServerError());
  next();
});

// console.log('zzzz')
// run().catch(err => console.log(err));

/**
 * all apis, api/404 will be handled here
 */
app.use('/api/data', dataRouter);
app.use('/api/auth', authRouter);
app.use('/api/store', storeRouter);
app.use('/api', (req: Request, res: Response, next: NextFunction) => next(new ClientError('Wrong url', 404)));
// app.use('/api', (req: Request, res: Response, next: NextFunction) => next(new ClientError({
//   message: 'Wrong api',
//   status: '404',
// })));

/**
 * only in production, use react build folder as static
 *
 * all not-apis, 404 will be handled at client
 */
if (config.get('NODE_ENV') === 'production') {
  app.use('/', router);
}

app.use('*', function(req: Request, res: Response) {
  res.redirect('/');
});

// catch 404 and forward to error handler
app.use(function(req: Request, res: Response, next: NextFunction) {
  next(new ServerError());
});

// error handler
app.use(errorHandler);

export default app;
