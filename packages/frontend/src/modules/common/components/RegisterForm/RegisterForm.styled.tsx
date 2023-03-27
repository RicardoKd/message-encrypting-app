import styled from 'styled-components';

import { COLORS, SPACES } from '../../../theme';

export const RegisterFormStyled = styled('form')`
  width: 80%;
  display: block;
  max-width: 350px;

  & > div {
    margin-bottom: ${SPACES.xl};
  }
`;

export const FormButtons = styled('div')`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const ModalInnerContainer = styled('div')`
  top: 50%;
  left: 50%;
  width: 400px;
  position: absolute;
  padding: ${SPACES.xxl};
  transform: translate(-50%, -50%);
  background-color: ${COLORS.lightgrey};
`;
