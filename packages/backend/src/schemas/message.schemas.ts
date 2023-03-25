import * as Yup from 'yup';

export const messageSchemas = {
  createXor: Yup.object({
    messageText: Yup.string().required()
  }),
  createCaesar: Yup.object({
    shift: Yup.number().required(),
    messageText: Yup.string().required()
  }),
  decrypt: Yup.object({
    messageId: Yup.number().required(),
    encryptionType: Yup.string().required()
  })
};
