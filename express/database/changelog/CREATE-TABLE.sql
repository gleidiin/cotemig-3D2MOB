/* changelog: gleidson.braga - criar tabelas sql  */

CREATE TABLE Usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR
)

CREATE TABLE Profiles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR,
    descricao VARCHAR,
    id_usuario INTEGER,
    foto_url VARCHAR,
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id)
)

CREATE TABLE Chats (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome varchar,
    id_usuario INTEGER,
    id_profile INTEGER,
    descricao varchar,
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id),
    FOREIGN KEY (id_profile) REFERENCES Profiles(id)
)

CREATE TABLE Mensagens (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_chat INTEGER,
    id_usuario INTEGER,
    conteudo varchar,
    FOREIGN KEY (id_chat) REFERENCES Chats(id),
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id)
)