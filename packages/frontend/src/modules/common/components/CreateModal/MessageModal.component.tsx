import React, { useState } from 'react';
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import { useMutation, useQueryClient } from 'react-query';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import { MUI } from '../../../theme';
import { IModal } from '../../types';
import { AppButton } from '../../../UI';
import FormikXorForm from './FormikXorForm';
import { messageService } from '../../../services';
import { XorItems, CaesarItems } from './FormTodoItems';
import { APP_KEYS, EncryptionTypesEnum, MODAL_INITIAL_STATE } from '../../consts';
import { postXorValidationSchema, postCaesarValidationSchema } from './validationSchema';
import {
  MessageModalWrapperStyled,
  FormStyled,
  CreateMessageFormStyled,
  FormButtonsContainerStyled
} from './MessageModal.styled';
import FormikCaesarForm from './FormikCaesarForm';

export const MessageModalWrapper: React.FC = () => {
  const [cipher, setCipher] = useState<EncryptionTypesEnum>(EncryptionTypesEnum.XOR);

  const queryClient = useQueryClient();

  const handleClose = () =>
    queryClient.setQueryData<IModal>(APP_KEYS.QUERY_KEYS.MODAL, MODAL_INITIAL_STATE);

  const handleCipherChange = (cipherType: EncryptionTypesEnum) => setCipher(cipherType);

  const createXorMutation = useMutation(messageService.createXor.bind(messageService), {
    onSuccess: () => {
      handleClose();
      queryClient.invalidateQueries(APP_KEYS.QUERY_KEYS.MESSAGE);
    }
  });

  const createCaesarMutation = useMutation(messageService.createCaesar.bind(messageService), {
    onSuccess: () => {
      handleClose();
      queryClient.invalidateQueries(APP_KEYS.QUERY_KEYS.MESSAGE);
    }
  });

  const formikXor = useFormik<FormikXorForm>({
    initialValues: new FormikXorForm(),
    validationSchema: postXorValidationSchema,
    onSubmit: (values: FormikXorForm) => createXorMutation.mutate(values)
  });

  const formikCaesar = useFormik<FormikCaesarForm>({
    initialValues: new FormikCaesarForm(),
    validationSchema: postCaesarValidationSchema,
    onSubmit: (values: FormikCaesarForm) => createCaesarMutation.mutate(values)
  });

  return (
    <MessageModalWrapperStyled open>
      <>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={cipher}
          label="Cipher"
          // FIXME: refuctor on change to remove `as` keyword
          onChange={(e) => handleCipherChange(e.target.value as EncryptionTypesEnum)}
        >
          <MenuItem value={EncryptionTypesEnum.XOR}>Xor</MenuItem>
          <MenuItem value={EncryptionTypesEnum.CAESAR}>Caesar</MenuItem>
        </Select>

        <CreateMessageFormStyled>
          {EncryptionTypesEnum.XOR === cipher && (
            <FormStyled onSubmit={formikXor.handleSubmit}>
              <TextField
                size={MUI.size}
                variant={MUI.variant}
                id={XorItems.MESSAGE_TEXT}
                name={XorItems.MESSAGE_TEXT}
                label={XorItems.MESSAGE_TEXT}
                value={formikXor.values[XorItems.MESSAGE_TEXT]}
                error={
                  formikXor.touched[XorItems.MESSAGE_TEXT] &&
                  !!formikXor.errors[XorItems.MESSAGE_TEXT]
                }
                onChange={formikXor.handleChange}
              />

              <FormButtonsContainerStyled>
                <AppButton text="Back" onClick={handleClose} />
                <AppButton text="Save" type="submit" />
              </FormButtonsContainerStyled>
            </FormStyled>
          )}

          {EncryptionTypesEnum.CAESAR === cipher && (
            <FormStyled onSubmit={formikCaesar.handleSubmit}>
              <TextField
                size={MUI.size}
                variant={MUI.variant}
                id={CaesarItems.MESSAGE_TEXT}
                name={CaesarItems.MESSAGE_TEXT}
                label={CaesarItems.MESSAGE_TEXT}
                value={formikXor.values[CaesarItems.MESSAGE_TEXT]}
                error={
                  formikXor.touched[CaesarItems.MESSAGE_TEXT] &&
                  !!formikXor.errors[CaesarItems.MESSAGE_TEXT]
                }
                onChange={formikXor.handleChange}
              />

              <FormButtonsContainerStyled>
                <AppButton text="Back" onClick={handleClose} />
                <AppButton text="Save" type="submit" />
              </FormButtonsContainerStyled>
            </FormStyled>
          )}
        </CreateMessageFormStyled>
      </>
    </MessageModalWrapperStyled>
  );
};
