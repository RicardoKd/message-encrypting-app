import { IMessage } from '../../common/types';
import { HttpService } from '../http.service';
import { APP_KEYS } from '../../common/consts';
import { IPostXorMessageBody } from './IPostXorMessageBody';
import { IDecryptMessageBody } from './IDecryptMessageBody';
import { IPostCaesarMessageBody } from './IPostCaesarMessageBody';

class MessageService extends HttpService {
  async getMessages(): Promise<IMessage[]> {
    const messages = await this.get<IMessage[]>({ url: this.serviceEndpoint });

    return messages;
  }

  async createXor(data: IPostXorMessageBody) {
    const message = await this.post<IMessage>({
      data,
      url: this.serviceEndpoint
    });

    return message;
  }

  async createCaesar(data: IPostCaesarMessageBody) {
    const message = await this.post<IMessage>({
      data,
      url: this.serviceEndpoint
    });

    return message;
  }

  async decrypt(data: IDecryptMessageBody) {
    console.log('data :>> ', data);
    const decryptedMessage = await this.post<{ message: string }>({
      data,
      url: `${this.serviceEndpoint}/${APP_KEYS.BACKEND_KEYS.DECRYPT}`
    });

    console.log('decryptedMessage :>> ', decryptedMessage);

    return decryptedMessage.message;
  }
}

export const messageService = new MessageService(APP_KEYS.BACKEND_KEYS.MESSAGE);
