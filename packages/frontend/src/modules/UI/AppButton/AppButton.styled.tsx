import styled from 'styled-components';
import Button from '@mui/material/Button';

import { SPACES } from '../../theme';

export const AppButtonStyled = styled(Button)`
  padding: ${SPACES.xs} ${SPACES.s} !important;
  text-transform: capitalize !important;
`;
