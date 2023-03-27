# Message Encrypting App

### Development Environment Setup

- PostgreSQL setup:
```sql
CREATE TABLE account (
	_id SERIAL NOT NULL PRIMARY KEY,
	"name" TEXT NOT NULL UNIQUE,
	"password" TEXT NOT NULL
);

CREATE TABLE xor_message (
	_id SERIAL NOT NULL PRIMARY KEY,
	"text" TEXT NOT NULL,
	"ownerId" INTEGER NOT NULL REFERENCES account(_id) ON DELETE CASCADE,
	"creationTime" TIMESTAMP DEFAULT now()::timestamp
);

CREATE TABLE caesar_message (
	_id SERIAL NOT NULL PRIMARY KEY,
	"text" TEXT NOT NULL,
	"shift" INTEGER NOT NULL,
	"ownerId" INTEGER NOT NULL REFERENCES account(_id) ON DELETE CASCADE,
	"creationTime" TIMESTAMP DEFAULT now()::timestamp
);
```
- Use Node v18.12.1
- Install packages and run `start` script from the root to start both server and client
```sh
    yarn install
    yarn start
```

Server runs on port: `8000`
Client runs on port: `3000`

### Server routes

| Route | Method | Body | Auth |
| ------ | ------ | ------ | ------ |
| `/api/account/login` | `POST` | `{name: string, password: string}` | `false` |
| `/api/account/register` | `POST` | `{name: string, password: string}` | `false` |
| `/api/message` | `GET` | No | `true` |
| `/api/message/xor` | `POST` | `{messageText: string}` | `true` |
| `/api/message/caesar` | `POST` | `{messageText: string, shift: number}` | `true` |
| `/api/message/decrypt` | `POST` | `{messageId: number, encryptionType: string}` | `true` |
