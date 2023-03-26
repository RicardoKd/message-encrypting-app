import * as Yup from 'yup';

export const postXorValidationSchema = Yup.object({
  messageText: Yup.string().required()
});

export const postCaesarValidationSchema = Yup.object({
  shift: Yup.number().required(),
  messageText: Yup.string().required()
});
