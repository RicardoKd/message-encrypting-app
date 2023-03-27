import * as Yup from 'yup';
import { CAESAR_RESTRICTION } from '../../consts';

export const postXorValidationSchema = Yup.object({
  messageText: Yup.string().required()
});

export const postCaesarValidationSchema = Yup.object({
  messageText: Yup.string().required(),
  shift: Yup.number()
    .min(CAESAR_RESTRICTION.MIN, 'must be greater than 1')
    .max(CAESAR_RESTRICTION.MAX, 'must be less than 26')
    .required()
});
