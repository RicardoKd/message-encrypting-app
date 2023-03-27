import React from 'react';
import { useQuery } from 'react-query';

import { MessageItem } from '../MessageItem';
import { messageService } from '../../../services';
import { AppLoader } from '../../../UI';
import { MessageModalWrapper } from '../CreateModal';
import { IMessage, IModal, ModalState } from '../../types';
import { APP_KEYS, MODAL_INITIAL_STATE } from '../../consts';
import { MessageList, MessageContainerStyled } from './MessageContainer.styled';

export const MessageContainer: React.FC = () => {
  const {
    data: messages,
    isError: messagesError,
    isLoading: messagesAreLoading
  } = useQuery<IMessage[]>({
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
      {messagesAreLoading || messagesError ? (
        <AppLoader />
      ) : (
        <MessageList>
          {messages!.map((message, key) => (
            <MessageItem key={key} message={message} />
          ))}
        </MessageList>
      )}
      {modalIsSuccess && modalState.STATE !== ModalState.IDLE && <MessageModalWrapper />}
    </MessageContainerStyled>
  );
};
