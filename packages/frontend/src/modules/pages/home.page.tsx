import React from 'react';
import { useQueryClient } from 'react-query';

import { IModal } from '../common/types';
import { Header } from '../common/components/Header';
import { MessageContainer } from '../common/components/MessageContainer';
import { APP_KEYS, MODAL_INITIAL_STATE } from '../common/consts';

export const HomePageContainer = () => {
  const queryClient = useQueryClient();

  queryClient.setQueryData<IModal>(APP_KEYS.QUERY_KEYS.MODAL, MODAL_INITIAL_STATE);

  return (
    <div>
      <Header />
      <MessageContainer />
    </div>
  );
};
