// Local storage keys
export const STORAGE_KEYS = {
  TOKEN: 'TOKEN'
};

// React-query keys
export const QUERY_KEYS = Object.freeze({
  MODAL: 'modal',
  MESSAGE: 'message',
  AUTH_MODAL: 'authModal'
});

// Backend Routes
export const BACKEND_KEYS = Object.freeze({
  LOGIN: 'login',
  MESSAGE: 'message',
  ACCOUNT: 'account',
  DECRYPT: 'decrypt',
  CREATE_XOR: '/xor',
  REGISTER: 'register',
  GET_ACCOUNT_MESSAGES: '',
  CREATE_CAESAR: '/caesar',
  DECRYPT_MESSAGE: '/decrypt'
});

export const ROUTER_KEYS = Object.freeze({
  ANY: '/*',
  START: '/',
  HOME: '/home',
  LOGIN: '/login',
  REGISTER: '/register'
});
