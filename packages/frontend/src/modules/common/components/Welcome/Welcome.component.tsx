import React from 'react';
import { Typography } from '@mui/material';

import { APP_KEYS } from '../../consts';
import { WelcomeStyled } from './Welcome.styled';
import { AppButton, RouterLink } from '../../../UI';

export const Welcome: React.FC = () => (
  <WelcomeStyled>
    <Typography textAlign="center" variant="h2">
      Message
      <br />
      Encrypting App
    </Typography>
    <RouterLink to={APP_KEYS.ROUTER_KEYS.LOGIN}>
      <AppButton text="Login" />
    </RouterLink>
    <RouterLink to={APP_KEYS.ROUTER_KEYS.REGISTER}>
      <AppButton text="Register" />
    </RouterLink>
  </WelcomeStyled>
);
