import { XorItems } from './FormTodoItems';

export default class FormikXorForm {
  [XorItems.MESSAGE_TEXT]: string;

  constructor() {
    this[XorItems.MESSAGE_TEXT] = '';
  }
}
