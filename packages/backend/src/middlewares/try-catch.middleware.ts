import { Request, Response, NextFunction } from 'express';

export const tryCatch =
  (callback: (req: Request, res: Response, next: NextFunction) => {}) =>
  (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(callback(req, res, next))
      .then((result) => res.json(result))
      .catch((error) => res.status(error.status).send(error.message));
