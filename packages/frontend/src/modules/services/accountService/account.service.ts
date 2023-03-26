import { HttpService } from '../http.service';
import { APP_KEYS } from '../../common/consts';
import { IToken, IAccount, ISuccess } from '../../common/types';

class AccountService extends HttpService {
  async register(data: IAccount): Promise<ISuccess> {
    const success = await this.post<ISuccess>({
      data,
      url: `${this.serviceEndpoint}/${APP_KEYS.BACKEND_KEYS.REGISTER}`
    });

    return success;
  }

  async login(data: IAccount) {
    const { token } = await this.post<IToken>({
      data,
      url: `${this.serviceEndpoint}/${APP_KEYS.BACKEND_KEYS.LOGIN}`
    });

    localStorage.setItem(APP_KEYS.STORAGE_KEYS.TOKEN, token);

    return token;
  }
}

export const accountService = new AccountService(APP_KEYS.BACKEND_KEYS.ACCOUNT, false);
