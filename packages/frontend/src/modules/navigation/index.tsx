import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { APP_KEYS } from '../common/consts';
import { HomePageContainer, StartPageContainer } from '../pages';

export const MainRouter = () => (
  <Routes>
    <Route element={<HomePageContainer />} path={APP_KEYS.ROUTER_KEYS.HOME} />
    <Route element={<StartPageContainer />} path={APP_KEYS.ROUTER_KEYS.ANY} />
  </Routes>
);
