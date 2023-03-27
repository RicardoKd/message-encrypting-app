import { Modal } from '@mui/material';
import styled from 'styled-components';
import Select from '@mui/material/Select';

import { COLORS, SPACES } from '../../../theme';

export const MessageModalWrapperStyled = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SelectStyled = styled(Select)`
  max-width: 200px;
`;

export const CreateMessageFormStyled = styled('div')`
  width: 500px;
  display: flex;
  flex-direction: column;
  padding: ${SPACES.xl};
  margin-bottom: ${SPACES.l};
  background-color: ${COLORS.white};

  & > div {
    margin-bottom: ${SPACES.m};
  }
`;

export const FormStyled = styled('form')`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  div {
    margin-bottom: ${SPACES.m};
  }
`;

export const FormButtonsContainerStyled = styled('div')`
  display: flex;
  justify-content: space-between;
`;
