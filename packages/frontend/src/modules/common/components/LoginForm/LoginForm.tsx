import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { Modal, TextField, Typography } from '@mui/material';

import { MUI } from '../../../theme';
import { APP_KEYS } from '../../consts';
import { LoginFormItems } from './LoginFormItems';
import { accountService } from '../../../services';
import { FormikLoginForm } from './FormikLoginForm';
import { AppButton, RouterLink } from '../../../UI';
import { validationSchema } from './validationSchema';
import { LoginFormStyled, FormButtons, ModalInnerContainer } from './LoginForm.styled';

export const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const loginSuccess = () => {
    navigate(APP_KEYS.ROUTER_KEYS.HOME);
  };

  const loginError = () => {
    setModalIsOpen(true);
  };

  const createMutation = useMutation(accountService.login.bind(accountService), {
    onSuccess: () => loginSuccess(),
    onError: () => loginError()
  });

  const formik = useFormik<FormikLoginForm>({
    initialValues: new FormikLoginForm(),
    validationSchema,
    onSubmit: (values: FormikLoginForm) => createMutation.mutate(values)
  });

  return (
    <LoginFormStyled onSubmit={formik.handleSubmit}>
      <div>
        <Typography variant="body1" textTransform="capitalize">
          {LoginFormItems.NAME}
        </Typography>
        <TextField
          fullWidth
          type="text"
          size={MUI.size}
          variant={MUI.variant}
          id={LoginFormItems.NAME}
          name={LoginFormItems.NAME}
          value={formik.values[LoginFormItems.NAME]}
          error={formik.touched[LoginFormItems.NAME] && !!formik.errors[LoginFormItems.NAME]}
          onChange={formik.handleChange}
        />
      </div>

      <div>
        <Typography variant="body1" textTransform="capitalize">
          {LoginFormItems.PASSWORD}
        </Typography>
        <TextField
          fullWidth
          type={LoginFormItems.PASSWORD}
          size={MUI.size}
          variant={MUI.variant}
          id={LoginFormItems.PASSWORD}
          name={LoginFormItems.PASSWORD}
          value={formik.values[LoginFormItems.PASSWORD]}
          error={
            formik.touched[LoginFormItems.PASSWORD] && !!formik.errors[LoginFormItems.PASSWORD]
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
          text={createMutation.isLoading ? 'Loading...' : 'Login'}
        />
      </FormButtons>
      <Modal open={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <ModalInnerContainer>
          <Typography variant="h6" sx={{ textAlign: 'center' }}>
            Incorrect email or password!
          </Typography>
        </ModalInnerContainer>
      </Modal>
    </LoginFormStyled>
  );
};
