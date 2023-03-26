import styled from 'styled-components';
import { ADAPTIVE } from '../theme';

export const MainStyled = styled('main')`
  min-height: 100vh;
  margin: auto;
  max-width: ${ADAPTIVE.max};
  display: flex;
  align-items: center;
  justify-content: center;
`;
