import * as Yup from 'yup';

import { REGEX } from '../../consts';
import { RegisterFormItems } from './RegisterFormItems';

export const validationSchema = Yup.object({
  [RegisterFormItems.NAME]: Yup.string().matches(REGEX.NAME).required(),
  [RegisterFormItems.PASSWORD]: Yup.string().matches(REGEX.PASSWORD).required(),
  [RegisterFormItems.CONFIRM_PASSWORD]: Yup.string()
    .equals([Yup.ref(RegisterFormItems.PASSWORD)])
    .required()
});
