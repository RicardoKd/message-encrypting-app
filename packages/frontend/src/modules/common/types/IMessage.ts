// eslint-disable-next-line import/no-cycle
import { EncryptionTypesEnum } from '../consts';

/**
 * Interface to model the Message Schema for TypeScript
 * @param _id:number
 * @param text:string
 * @param ownerId:number
 * @param encryptionType:string
 */
export interface IMessage {
  _id: number;
  text: string;
  ownerId: number;
  encryptionType: EncryptionTypesEnum;
}
