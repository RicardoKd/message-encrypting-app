import styled from 'styled-components';

import { COLORS, SPACES } from '../../../theme';

export const LoginFormStyled = styled('form')`
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: ${COLORS.lightgrey};
  box-shadow: 24px;
  padding: ${SPACES.xxl};
`;
