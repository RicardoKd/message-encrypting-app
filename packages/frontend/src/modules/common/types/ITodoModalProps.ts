import { IMessage } from './IMessage';

export interface ITodoModalProps {
  todo?: IMessage;
  isOpen: boolean;
  onClose: () => void;
}
