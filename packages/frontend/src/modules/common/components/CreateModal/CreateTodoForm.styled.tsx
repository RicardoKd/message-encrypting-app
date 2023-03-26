import styled from 'styled-components';

import { COLORS, SPACES } from '../../../theme';

export const CreateTodoFormStyled = styled('div')`
  display: flex;
  flex-direction: column;
  margin-bottom: ${SPACES.l};

  div {
    margin-bottom: ${SPACES.m};
  }
`;

export const FormStyled = styled('form')`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: ${SPACES.xxl};
  background-color: ${COLORS.white};
`;

export const FormButtonsContainerStyled = styled('div')`
  display: flex;
  justify-content: space-between;
`;
