import { Request, Response, NextFunction } from 'express';
import passport from 'passport';

import { IAccount } from '../types';
import { PASSPORT_STRATEGY } from '../constants';
import { jwtStrategy } from '../config/jwtStrategy';

passport.use(jwtStrategy);

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate(
    PASSPORT_STRATEGY,
    { session: false },
    (error: Error, account: IAccount) => {
      if (error) {
        return next(error);
      }

      if (!account) {
        return res.status(401).json({ error: 'Unauthorized' });
      }

      req.body.account = account;
      return next();
    }
  )(req, res, next);
};
