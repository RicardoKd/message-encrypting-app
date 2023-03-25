import { Router } from 'express';

import { MESSAGE_ROUTES } from '../../constants';
import MessageService from '../../services/message.service';
import { messageSchemas } from '../../schemas/message.schemas';
import MessageController from '../../controllers/message.controller';
import { createBodyValidator, tryCatch, doesExist } from '../../middlewares';

const messageRouter = Router();
const messageService = new MessageService();
const messageController = new MessageController(messageService);

messageRouter.get(
  MESSAGE_ROUTES.GET_ACCOUNT_MESSAGES,
  tryCatch(messageController.getAccountMessages.bind(messageController))
);

messageRouter.post(
  MESSAGE_ROUTES.CREATE_XOR,
  createBodyValidator(messageSchemas.createXor).bind(createBodyValidator),
  tryCatch(messageController.createXor.bind(messageController))
);

messageRouter.post(
  MESSAGE_ROUTES.CREATE_CAESAR,
  createBodyValidator(messageSchemas.createCaesar).bind(createBodyValidator),
  tryCatch(messageController.createCaesar.bind(messageController))
);

messageRouter.post(
  MESSAGE_ROUTES.DECRYPT_MESSAGE,
  createBodyValidator(messageSchemas.decrypt).bind(createBodyValidator),
  doesExist(messageService.messageExists.bind(messageService)),
  tryCatch(messageController.decryptMessage.bind(messageController))
);

export default messageRouter;
