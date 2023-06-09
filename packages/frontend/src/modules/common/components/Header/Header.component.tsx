import React from 'react';
import { useQueryClient } from 'react-query';

import { SPACES } from '../../../theme';
import { logOut } from '../../../utils';
import { APP_KEYS } from '../../consts';
import { StyledHeader } from './Header.styled';
import { IModal, ModalState } from '../../types';
import { AppButton, RouterLink } from '../../../UI';

export const Header: React.FC = () => {
  const queryClient = useQueryClient();

  const handleCreate = () => {
    queryClient.setQueryData<IModal>(APP_KEYS.QUERY_KEYS.MODAL, {
      STATE: ModalState.CREATE,
      VALUE: null
    });
  };

  return (
    <StyledHeader>
      <RouterLink to={APP_KEYS.ROUTER_KEYS.START}>
        <AppButton text="Log out" onClick={logOut} style={{ margin: SPACES.m }} />
      </RouterLink>

      <AppButton text="Create" onClick={() => handleCreate()} style={{ margin: SPACES.m }} />
    </StyledHeader>
  );
};
