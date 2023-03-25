import { Application } from 'express';

import { ROUTER_KEYS } from '../constants';
import { authenticate } from '../middlewares';
import messageRouter from './api/message.route';
import accountRouter from './api/account.route';

const AppRouter = (app: Application) => {
  app.get(ROUTER_KEYS.ROOT, (_req, res) => {
    res.send('API Running');
  });

  app.use(ROUTER_KEYS.ACCOUNT, accountRouter);
  app.use(ROUTER_KEYS.MESSAGE, authenticate, messageRouter);
};

export default AppRouter;
