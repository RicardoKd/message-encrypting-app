import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { MainStyled } from '../UI';
import { APP_KEYS } from '../common/consts';
import { LoginForm } from '../common/components/LoginForm/LoginForm';
import { Welcome } from '../common/components/Welcome/Welcome.component';
import { RegisterForm } from '../common/components/RegisterForm/RegisterForm';

export const StartPageContainer: React.FC = () => (
  <MainStyled>
    <Routes>
      <Route element={<Welcome />} path={APP_KEYS.ROUTER_KEYS.START} />
      <Route element={<LoginForm />} path={APP_KEYS.ROUTER_KEYS.LOGIN} />
      <Route element={<RegisterForm />} path={APP_KEYS.ROUTER_KEYS.REGISTER} />
    </Routes>
  </MainStyled>
);
