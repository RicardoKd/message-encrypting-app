import { AxiosError } from 'axios';
import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { FormikProps, useFormik } from 'formik';
import { Modal, TextField, Typography } from '@mui/material';

import { MUI } from '../../../theme';
import { APP_KEYS } from '../../consts';
import { IAccount, ISuccess } from '../../types';
import { accountService } from '../../../services';
import { AppButton, RouterLink } from '../../../UI';
import { validationSchema } from './validationSchema';
import { RegisterFormItems } from './RegisterFormItems';
import { FormikRegisterForm } from './FormikRegisterForm';
import { RegisterFormStyled, FormButtons, ModalInnerContainer } from './RegisterForm.styled';

export const RegisterForm: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  let formik: FormikProps<FormikRegisterForm>;

  const registrationSuccess = () => {
    setModalIsOpen(true);
    formik.resetForm();
  };

  const registrationError = () => {
    setModalIsOpen(true);
  };

  const createMutation = useMutation<ISuccess, AxiosError, IAccount>(
    accountService.register.bind(accountService),
    {
      onSuccess: () => registrationSuccess(),
      onError: () => registrationError()
    }
  );

  formik = useFormik<FormikRegisterForm>({
    initialValues: new FormikRegisterForm(),
    validationSchema,
    onSubmit: (values) => createMutation.mutate(values)
  });

  return (
    <RegisterFormStyled onSubmit={formik.handleSubmit}>
      <div>
        <Typography variant="body1" textTransform="capitalize">
          {RegisterFormItems.NAME}
        </Typography>
        <TextField
          fullWidth
          type="text"
          size={MUI.size}
          variant={MUI.variant}
          id={RegisterFormItems.NAME}
          name={RegisterFormItems.NAME}
          value={formik.values[RegisterFormItems.NAME]}
          error={formik.touched[RegisterFormItems.NAME] && !!formik.errors[RegisterFormItems.NAME]}
          onChange={formik.handleChange}
        />
      </div>

      <div>
        <Typography variant="body1" textTransform="capitalize">
          {RegisterFormItems.PASSWORD}
        </Typography>
        <TextField
          fullWidth
          size={MUI.size}
          variant={MUI.variant}
          type={RegisterFormItems.PASSWORD}
          id={RegisterFormItems.PASSWORD}
          name={RegisterFormItems.PASSWORD}
          value={formik.values[RegisterFormItems.PASSWORD]}
          error={
            formik.touched[RegisterFormItems.PASSWORD] &&
            !!formik.errors[RegisterFormItems.PASSWORD]
          }
          onChange={formik.handleChange}
        />
      </div>

      <div>
        <Typography variant="body1">Confirm {RegisterFormItems.PASSWORD}</Typography>
        <TextField
          fullWidth
          size={MUI.size}
          variant={MUI.variant}
          type={RegisterFormItems.PASSWORD}
          id={RegisterFormItems.CONFIRM_PASSWORD}
          name={RegisterFormItems.CONFIRM_PASSWORD}
          value={formik.values[RegisterFormItems.CONFIRM_PASSWORD]}
          error={
            formik.touched[RegisterFormItems.CONFIRM_PASSWORD] &&
            !!formik.errors[RegisterFormItems.CONFIRM_PASSWORD]
          }
          onChange={formik.handleChange}
        />
      </div>

      <FormButtons>
        <RouterLink to={APP_KEYS.ROUTER_KEYS.START}>
          <AppButton text="Back" />
        </RouterLink>
        <AppButton
          type="submit"
          disabled={createMutation.isLoading}
          text={createMutation.isLoading ? 'Loading...' : 'Register'}
        />
      </FormButtons>

      <Modal open={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <ModalInnerContainer>
          <Typography variant="h6" sx={{ textAlign: 'center' }}>
            <>
              {createMutation.isError
                ? `An error occurred: ${createMutation.error.response!.data}`
                : null}

              {createMutation.isSuccess ? 'Registered Succesfully' : null}
            </>
          </Typography>
        </ModalInnerContainer>
      </Modal>
    </RegisterFormStyled>
  );
};
