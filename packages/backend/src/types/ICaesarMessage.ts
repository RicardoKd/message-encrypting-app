import { IMessage } from './IMessage';

export interface ICaesarMessage extends IMessage {
  shift: number;
}
