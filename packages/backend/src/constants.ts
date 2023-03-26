export const ROUTER_KEYS = Object.freeze({
  ROOT: '/',
  ACCOUNT: '/api/account',
  MESSAGE: '/api/message'
});

export const ACCOUNT_ROUTES = Object.freeze({
  LOG_IN: '/login',
  REGISTER: '/register'
});

export const MESSAGE_ROUTES = Object.freeze({
  CREATE_XOR: '/xor',
  CREATE_CAESAR: '/caesar',
  GET_ACCOUNT_MESSAGES: '',
  DECRYPT_MESSAGE: '/decrypt'
});

export const REGEX = Object.freeze({
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/
});

export const PASSPORT_STRATEGY = 'jwt';

export const passwordCreationOptions = {
  message:
    // eslint-disable-next-line max-len
    'Password must contain: at least one lowercase letter, uppercase letter, one digit, one special character (!@#$%^&*) and should be at least 8 characters long'
};

export enum EncryptionTypesEnum {
  XOR = 'xor',
  CAESAR = 'caesar'
}

export const DB = Object.freeze({
  INSERT: Object.freeze({
    CAESAR: (text: string, shift: number, ownerId: number) =>
      `INSERT INTO caesar_message("text", "shift", "ownerId") VALUES('${text}', ${shift}, ${ownerId}) RETURNING *`,
    XOR: (text: string, ownerId: number) =>
      `INSERT INTO xor_message("text", "ownerId") VALUES('${text}', ${ownerId}) RETURNING *`,
    ACCOUNT: (name: string, password: string) =>
      `INSERT INTO account ("name", "password") VALUES('${name}', '${password}') RETURNING *`
  }),
  SELECT: Object.freeze({
    ALL_MESSAGES: (
      ownerId: number
    ) => `SELECT _id, "text", "ownerId", "creationTime", 'xor' AS "encryptionType" 
    FROM xor_message WHERE "ownerId" = ${ownerId}
   UNION
   SELECT _id, "text", "ownerId", "creationTime", 'caesar' AS "encryptionType" 
    FROM caesar_message WHERE "ownerId" = ${ownerId}
   ORDER BY "creationTime"
  `,
    MESSAGE_BY_ID: (encryptionType: EncryptionTypesEnum, id: number) =>
      `SELECT * FROM ${encryptionType}_message WHERE _id = ${id}`,
    ACCOUNT_BY_ID: (id: number) => `SELECT * FROM account WHERE _id = '${id}'`,
    ACCOUNT_BY_NAME: (name: string) => `SELECT * FROM account WHERE "name" = '${name}'`
  })
});
