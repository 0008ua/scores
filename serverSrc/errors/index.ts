import { NextFunction, Request, Response } from 'express';
import winston from '../config/winston';
const log = winston(module);

export class CustomError extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
    Object.defineProperty(this, 'message', { enumerable: true });
  }
}

export class ClientError extends CustomError {
  status: number;
  constructor(message = 'Bad request', status = 400) {
    super(message);
    this.status = status;
  }
}

export class ServerError extends CustomError {
  status: number;
  constructor(message = 'Internal server error', status = 500) {
    super(message);
    this.status = status;
  }
}

export const errorHandler = (err: Error | ClientError | ServerError, req: Request, res: Response, next: NextFunction) => {
  // defined errors return to client
  // console.log('error Handler', err);
  log.error(err);
  console.log('error', err);
  if (err instanceof ClientError || err instanceof ServerError) {
    return res.status(err.status).json(err);
  }

  if (err.name === 'AuthenticationError') {
    return res.send(JSON.stringify(err));
  }

  // all other errors set as Server error
  const otherError = new ServerError(err.message, 500);

  return res.status(otherError.status).json(otherError);

  // // all other errors
  // // set locals, only providing error in development
  // res.locals.comment = 'Something went wrong :(';
  // res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};
  // // // render the error page
  // res.status(err.status || 500);
  // res.render('error');
};
