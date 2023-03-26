import styled from 'styled-components';

import { ADAPTIVE, SPACES } from '../../../theme';

export const MessageContainerStyled = styled('div')`
  margin: auto;
  max-width: ${ADAPTIVE.max};
`;

export const ListViewStyled = styled('div')`
  display: flex;
  flex-direction: column;
  margin-left: ${SPACES.m};
  margin-right: ${SPACES.m};
`;
