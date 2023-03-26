import { Request } from 'express';
import createError from 'http-errors';
import { CryptoXor } from 'crypto-xor';
import CaesarEncryption from '../utilities/CaesarEncryption';

import dbConnection from '../config/database';
import { EncryptionTypesEnum, DB } from '../constants';
import {
  IMessage,
  IXorMessage,
  ICaesarMessage,
  IAuthMiddlewareBody,
  IDecryptMessageBody,
  IPostXorMessageReqBody,
  IPostCaesarMessageReqBody
} from '../types';

const { XOR_KEY } = process.env;

export default class MessageService {
  async getAccountMessages({ account }: IAuthMiddlewareBody): Promise<IMessage[]> {
    const queryResult = await dbConnection.query<IMessage>(DB.SELECT.ALL_MESSAGES(account._id));

    return queryResult.rows;
  }

  async createXor({ account, messageText }: IPostXorMessageReqBody): Promise<IMessage> {
    const encryptedMessage = CryptoXor.encrypt(messageText, XOR_KEY!);

    const queryResult = await dbConnection.query<IMessage>(
      DB.INSERT.XOR(encryptedMessage, account._id)
    );

    return queryResult.rows[0];
  }

  async createCaesar({
    shift,
    account,
    messageText
  }: IPostCaesarMessageReqBody): Promise<IMessage> {
    const encryptedMessage = CaesarEncryption.encrypt(messageText, shift);

    const queryResult = await dbConnection.query<IMessage>(
      DB.INSERT.CAESAR(encryptedMessage, shift, account._id)
    );

    return queryResult.rows[0];
  }

  async decryptMessage({ messageId, encryptionType }: IDecryptMessageBody): Promise<string> {
    // FIXME: set strong type to query result
    const queryResult = await dbConnection.query(
      DB.SELECT.MESSAGE_BY_ID(encryptionType, messageId)
    );

    const message = queryResult.rows[0];

    if (EncryptionTypesEnum.XOR === encryptionType) {
      return CryptoXor.decrypt((message as IXorMessage).text, XOR_KEY!);
    }

    if (EncryptionTypesEnum.CAESAR === encryptionType) {
      return CaesarEncryption.decrypt(
        (message as ICaesarMessage).text,
        (message as ICaesarMessage).shift
      );
    }

    throw new createError.NotFound('Encryption method not found');
  }

  async messageExists({ body }: Request): Promise<boolean> {
    const queryResult = await dbConnection.query(
      DB.SELECT.MESSAGE_BY_ID(body.encryptionType, body.messageId)
    );

    if (queryResult.rowCount === 0) {
      throw new createError.NotFound('Message not found!');
    }

    return true;
  }
}
