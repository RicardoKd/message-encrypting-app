import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import createError from 'http-errors';

import { DB } from '../constants';
import dbConnection from '../config/database';
import {
  IToken,
  IAccount,
  ICustomRequest,
  ILoginAccountReqBody,
  IRegisterAccountReqBody
} from '../types';

const { JWT_SECRET, JWT_EXPIRATION } = process.env;

export default class AccountService {
  private generateToken(userId: number): IToken {
    return {
      // FIXME: `JWT_SECRET!` - remove excamation sign
      token: jwt.sign({ payload: userId }, JWT_SECRET!, { expiresIn: JWT_EXPIRATION })
    };
  }

  private async encryptPassword(password: string): Promise<string> {
    const salt = await bcryptjs.genSalt(15);
    const hashedPassword = await bcryptjs.hash(password, salt);

    return hashedPassword;
  }

  private async isSamePassword(password: string, hashedPassword: string): Promise<boolean> {
    const isSame = await bcryptjs.compare(password, hashedPassword);

    return isSame;
  }

  async register({ name, password }: IRegisterAccountReqBody): Promise<boolean> {
    const hashedPassword = await this.encryptPassword(password);

    await dbConnection.query(DB.INSERT.ACCOUNT(name, hashedPassword));

    return true;
  }

  async login({ name, password }: ILoginAccountReqBody): Promise<IToken> {
    const queryResult = await dbConnection.query<IAccount>(DB.SELECT.ACCOUNT_BY_NAME(name));

    const account = queryResult.rows[0];

    if (account) {
      const passwordsAreSame = await this.isSamePassword(password, account.password);

      if (passwordsAreSame) {
        return this.generateToken(account._id);
      }
    }

    throw new createError.NotFound('Wrong email or password');
  }

  async accountExists({ body }: ICustomRequest<{ name: string }>): Promise<boolean> {
    const queryResult = await dbConnection.query<IAccount>(DB.SELECT.ACCOUNT_BY_NAME(body.name));

    const account = queryResult.rows[0];

    if (!account) {
      throw new createError.NotFound('Account with such name is not registered!');
    }

    return true;
  }

  async accountDoesntExist({ body }: ICustomRequest<{ name: string }>): Promise<boolean> {
    const accounts = await dbConnection.query<IAccount>(DB.SELECT.ACCOUNT_BY_NAME(body.name));

    const account = accounts.rows[0];

    if (account) {
      throw new createError.Conflict('Name already registered!');
    }

    return true;
  }
}
