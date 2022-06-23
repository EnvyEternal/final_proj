CREATE TABLE "Conversations"
(
    id  SERIAL PRIMARY KEY,
    participants INTEGER ARRAY NOT NULL,
    blackList BOOLEAN ARRAY DEFAULT[false, false],
    favoriteList BOOLEAN ARRAY DEFAULT[false, false]
    createdAt TIMESTAMP DEFAULT NOW(),
    updatedAt TIMESTAMP DEFAULT NOW()
);

CREATE TABLE "Messages"
(
    id  SERIAL PRIMARY KEY,
    conversations INTEGER REFERENCES "Conversations" (id) NOT NULL,
    sender  INTEGER REFERENCES "Users" (id) NOT NULL,
    body varchar(256)   NOT NULL,
    createdAt TIMESTAMP DEFAULT NOW(),
    updatedAt TIMESTAMP DEFAULT NOW()
);

CREATE TABLE "Catalogs"
(
    id  SERIAL PRIMARY KEY,
    chats INTEGER ARRAY NOT NULL,
    userId  INTEGER REFERENCES "Users" (id),
    catalogName VARCHAR(100)    NOT NULL,
    createdAt TIMESTAMP DEFAULT NOW(),
    updatedAt TIMESTAMP DEFAULT NOW()
);