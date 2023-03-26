import React from 'react';
import { useQuery } from 'react-query';

import { AppLoader } from '../../../UI';
import { MessageItem } from '../MessageItem';
import { messageService } from '../../../services';
import { MessageModalWrapper } from '../CreateModal';
import { IMessage, IModal, ModalState } from '../../types';
import { APP_KEYS, MODAL_INITIAL_STATE } from '../../consts';
import { MessageContainerStyled, ListViewStyled } from './MessageContainer.styled';

export const MessageContainer: React.FC = () => {
  const { data: messages, isLoading: messagesAreLoading } = useQuery<IMessage[]>({
    queryKey: [APP_KEYS.QUERY_KEYS.MESSAGE],
    keepPreviousData: true,
    queryFn: () => messageService.getMessages()
  });

  const { data: modalState, isSuccess: modalIsSuccess } = useQuery<IModal>(
    APP_KEYS.QUERY_KEYS.MODAL,
    () => MODAL_INITIAL_STATE
  );

  return (
    <MessageContainerStyled>
      {messagesAreLoading ? (
        <AppLoader />
      ) : (
        <ListViewStyled>
          {messages!.map((message, key) => (
            <MessageItem key={key} message={message} />
          ))}
        </ListViewStyled>
      )}
      {modalIsSuccess && modalState.STATE !== ModalState.IDLE && <MessageModalWrapper />}
    </MessageContainerStyled>
  );
};
