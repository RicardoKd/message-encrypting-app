import MessageService from '../services/message.service';
import {
  ICustomRequest,
  IAuthMiddlewareBody,
  IDecryptMessageBody,
  IPostXorMessageReqBody,
  IPostCaesarMessageReqBody
} from '../types';

export default class MessageController {
  constructor(private messageService: MessageService) {}

  async getAccountMessages(req: ICustomRequest<IAuthMiddlewareBody>) {
    const messages = await this.messageService.getAccountMessages(req.body);

    return messages;
  }

  async createXor(req: ICustomRequest<IPostXorMessageReqBody>) {
    const message = await this.messageService.createXor(req.body);

    return message;
  }

  async createCaesar(req: ICustomRequest<IPostCaesarMessageReqBody>) {
    const message = await this.messageService.createCaesar(req.body);

    return message;
  }

  async decryptMessage(req: ICustomRequest<IDecryptMessageBody>) {
    const message = await this.messageService.decryptMessage(req.body);

    return { message };
  }
}
