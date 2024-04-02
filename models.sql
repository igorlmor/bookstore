CREATE TABLE IF NOT EXISTS authors(
    id integer primary key,
    name varchar(255)
);
CREATE TABLE IF NOT EXISTS books(
    id integer primary key,
    author_id integer references authors(id),
    title varchar(255),
    genre varchar(255)
);

INSERT INTO authors (name) values ('Machado de Assis');
INSERT INTO authors (name) values ('Martelo de Assis');
