import { RegisterFormItems } from './RegisterFormItems';

export class FormikRegisterForm {
  [RegisterFormItems.NAME]: string = '';

  [RegisterFormItems.PASSWORD]: string = '';

  [RegisterFormItems.CONFIRM_PASSWORD]: string = '';
}
