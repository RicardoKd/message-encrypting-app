import AccountService from '../services/account.service';
import { ICustomRequest, IRegisterAccountReqBody, ILoginAccountReqBody } from '../types';

export default class AccountController {
  constructor(private todoService: AccountService) {}

  async register(req: ICustomRequest<IRegisterAccountReqBody>) {
    const success = await this.todoService.register(req.body);

    return { success };
  }

  async login(req: ICustomRequest<ILoginAccountReqBody>) {
    const token = await this.todoService.login(req.body);

    return token;
  }
}
