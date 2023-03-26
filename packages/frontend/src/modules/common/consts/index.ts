import { ModalState, IModal } from '../types';

export * as APP_KEYS from './app-keys.const';

export const SERVER_URL = 'http://localhost:4200';

export const NEW_PASSWORD_ERROR_MESSAGE =
  // eslint-disable-next-line max-len
  'Password must contain: at least one lowercase letter, uppercase letter, one digit, one special character (!@#$%^&*) and should be at least 8 characters long. Also make sure the passwords coinside';

export const REGEX = Object.freeze({
  NAME: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/
});

export const QUERY_CLIENT_CONFIG = {
  defaultOptions: {
    queries: {
      cacheTime: Infinity,
      refetchOnMount: false,
      keepPreviousData: true,
      refetchOnReconnect: true,
      refetchOnWindowFocus: false
    }
  }
};

export const MODAL_INITIAL_STATE: IModal = Object.freeze({
  STATE: ModalState.IDLE,
  VALUE: null
});

export enum EncryptionTypesEnum {
  XOR = 'xor',
  CAESAR = 'caesar'
}
