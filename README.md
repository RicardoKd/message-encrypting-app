# Message Encrypting App

## Setup

PostgreSQL setup:
```
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
