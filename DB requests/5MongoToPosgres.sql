CREATE TABLE "Conversations"
(
    id  SERIAL PRIMARY KEY,
    participants INTEGER ARRAY,
    blackList INTEGER ARRAY,
    favoriteList INTEGER ARRAY
    createdAt TIMESTAMP DEFAULT NOW(),
    updatedAt TIMESTAMP DEFAULT NOW()
);

CREATE TABLE "Messages"
(
    id  SERIAL PRIMARY KEY,
    conversation INTEGER REFERENCES "Conversations" NOT NULL,
    sender  INTEGER REFERENCES "Users" (id) NOT NULL,
    body varchar(256)   NOT NULL,
    conversationsId INTEGER REFERENCES "Conversations" (id),
    createdAt TIMESTAMP DEFAULT NOW(),
    updatedAt TIMESTAMP DEFAULT NOW()
);

CREATE TABLE "Catalogs"
(
    id  SERIAL PRIMARY KEY,
    chats INTEGER ARRAY NOT NULL,
    userId INTEGER REFERENCES "Users" (id) NOT NULL,
    catalogName varchar(256),
    createdAt TIMESTAMP DEFAULT NOW(),
    updatedAt TIMESTAMP DEFAULT NOW()
);
