import { IMessage } from './IMessage';

export enum ModalState {
  CREATE = 'create',
  IDLE = 'idle'
}

export interface IModal {
  STATE: ModalState;
  VALUE: IMessage | null;
}
