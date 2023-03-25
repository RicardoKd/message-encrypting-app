import { IAuthMiddlewareBody } from '../IAuthMiddlewareBody';

export interface IPostXorMessageReqBody extends IAuthMiddlewareBody {
  messageText: string;
}
