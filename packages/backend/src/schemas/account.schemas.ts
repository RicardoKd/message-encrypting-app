import * as Yup from 'yup';

import { REGEX, passwordCreationOptions } from '../constants';

export const accountSchemas = {
  register: Yup.object({
    name: Yup.string().required(),
    password: Yup.string().matches(REGEX.PASSWORD, passwordCreationOptions).required()
  }),
  login: Yup.object({
    name: Yup.string().required(),
    password: Yup.string().required()
  })
};
