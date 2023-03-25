import { Router } from 'express';

import { accountSchemas } from '../../schemas';
import { ACCOUNT_ROUTES } from '../../constants';
import AccountService from '../../services/account.service';
import AccountController from '../../controllers/account.controller';
import { tryCatch, doesExist, createBodyValidator, doesntExist } from '../../middlewares';

const accountRouter = Router();
const accountService = new AccountService();
const accountController = new AccountController(accountService);

// @route   POST api/account/register
// @desc    Register user given their name and password, returns `true` upon successful registration
// @access  Public
accountRouter.post(
  ACCOUNT_ROUTES.REGISTER,
  createBodyValidator(accountSchemas.register).bind(createBodyValidator),
  doesntExist(accountService.accountDoesntExist.bind(accountService)),
  tryCatch(accountController.register.bind(accountController))
);

// @route   POST api/account/login
// @desc    Login user given their name and password, returns the token upon successful login
// @access  Public
accountRouter.post(
  ACCOUNT_ROUTES.LOG_IN,
  createBodyValidator(accountSchemas.login).bind(createBodyValidator),
  doesExist(accountService.accountExists.bind(accountService)),
  tryCatch(accountController.login.bind(accountController))
);

export default accountRouter;
