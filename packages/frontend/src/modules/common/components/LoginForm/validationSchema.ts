import * as Yup from 'yup';

import { LoginFormItems } from './LoginFormItems';

export const validationSchema = Yup.object({
  [LoginFormItems.NAME]: Yup.string().required(),
  [LoginFormItems.PASSWORD]: Yup.string().required()
});
