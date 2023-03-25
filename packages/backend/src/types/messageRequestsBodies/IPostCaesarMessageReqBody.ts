import { IAuthMiddlewareBody } from '../IAuthMiddlewareBody';

export interface IPostCaesarMessageReqBody extends IAuthMiddlewareBody {
  shift: number;
  messageText: string;
}
