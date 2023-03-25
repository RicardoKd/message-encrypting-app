import { Request, Response, NextFunction } from 'express';
import createError, { HttpError } from 'http-errors';

export const doesntExist =
  (callback: Function) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await callback(req);

      if (response) {
        next();
      } else {
        throw new createError.BadRequest();
      }
    } catch (error) {
      return res.status((error as HttpError).status).send((error as HttpError).message);
    }
  };
