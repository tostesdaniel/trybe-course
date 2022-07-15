USE sakila;
-- 1.Insira um novo funcionário na tabela sakila.staff
INSERT INTO
	staff (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES ('George', 'Lucas', 7, 'jorginho@gmail.com', 1, 0, 'georgelucas', 'sdfnmMdjn21SDj!23iukl');

-- 2.Insira dois funcionários novos em apenas uma query
INSERT INTO
	staff
		(first_name, last_name, address_id, email, store_id, username, password)
VALUES
	('Elon', 'Musk', 5, 'elon@gmail.com', 2, 'musk', '(A&*#4kjhdf0*!72'),
	('Jeff', 'Bezos', 6, 'jeff@gmail.com', 2, 'bezos', 'ASDh032hsjdk!98437');

-- 3.Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor
INSERT INTO
	actor
		(first_name, last_name)
SELECT
	first_name, last_name
FROM
	customer
LIMIT 5;

-- 4.Cadastre três categorias de uma vez só na tabela sakila.category
INSERT INTO
	category
		(name)
VALUES
	('Crime Thriller'),
    ('Disaster Thriller'),
    ('Psychological Thriller');

-- 5.Cadastre uma nova loja na tabela sakila.store
INSERT INTO
	store
		(manager_staff_id, address_id)
VALUES
	(3, 3);