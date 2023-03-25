import { Strategy, ExtractJwt, VerifiedCallback } from 'passport-jwt';

import { DB } from '../constants';
import { IAccount } from '../types';
import dbConnection from './database';

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
};

export const jwtStrategy = new Strategy(jwtOptions, async (jwtPayload, done: VerifiedCallback) => {
  try {
    const queryResult = await dbConnection.query<IAccount>(
      DB.SELECT.ACCOUNT_BY_ID(jwtPayload.payload)
    );

    const account = queryResult.rows[0];

    if (!account) {
      return done(null, false);
    }

    return done(null, account);
  } catch (error) {
    return done(error, false);
  }
});
