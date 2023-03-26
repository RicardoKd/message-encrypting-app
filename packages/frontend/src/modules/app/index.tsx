import React from 'react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { MainRouter } from '../navigation';
import * as theme from '../theme';
import * as Styled from './app.styled';
import '../../style.css';
import queryClient from './queryClient';

const AppContainer = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Styled.GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <MainRouter />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  </ThemeProvider>
);

export default AppContainer;
