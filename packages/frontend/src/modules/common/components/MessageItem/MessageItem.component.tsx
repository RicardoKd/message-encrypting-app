import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { Typography } from '@mui/material';

import { IMessage } from '../../types';
import { AppButton } from '../../../UI';
import { ItemStyled } from './MessageItem.styled';
import { messageService } from '../../../services';

interface MessageItemProps {
  message: IMessage;
}

export const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
  const [decryptedMessage, setDecryptedMessage] = useState<string | null>(null);
  const [isDecrypted, setIsDecrypted] = useState<boolean>(false);

  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { text, _id, encryptionType } = message;

  const createMutation = useMutation(messageService.decrypt.bind(messageService), {
    onSuccess: (receivedDecryptedMessage) => setDecryptedMessage(receivedDecryptedMessage)
  });
  const handleDecrypt = () => {
    createMutation.mutate({ messageId: _id, encryptionType });
    setIsDecrypted(true);
  };

  return (
    <ItemStyled>
      <Typography variant="body2">{decryptedMessage === null ? text : decryptedMessage}</Typography>
      <AppButton disabled={isDecrypted} text="Decrypt" onClick={() => handleDecrypt()} />
    </ItemStyled>
  );
};
