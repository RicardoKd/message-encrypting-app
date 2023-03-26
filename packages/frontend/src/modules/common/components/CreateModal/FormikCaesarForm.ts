import { CaesarItems } from './FormTodoItems';

export default class FormikXorForm {
  [CaesarItems.SHIFT]: number;

  [CaesarItems.MESSAGE_TEXT]: string;

  constructor() {
    this[CaesarItems.SHIFT] = 13;
    this[CaesarItems.MESSAGE_TEXT] = '';
  }
}
