USE sakila;
-- 1. Encontrar o cliente com email LEONARD.SCHOFIELD@sakilacustomer.org
SELECT 
    *
FROM
    customer
WHERE
    email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

-- 2. Relatar o nome dos clientes não ativos em ordem alfabética, os quais pertençam a loja de id 2 e excluindo o cliente KENNETH
SELECT 
    CONCAT(first_name, ' ', last_name) AS result
FROM
    customer
WHERE
    active IS FALSE AND store_id = 2
        AND first_name <> 'KENNETH';

-- 3. Relatar o título, descrição, ano de lançamento e valor do custo de substituição, dos 100 filmes com o maior custo de substituição, do valor mais alto ao mais baixo ou ordenado por título, entre os filmes feitos para menores de idade e que têm o custo mínimo de substituição de $18,00 dólares.
SELECT
    title, description, release_year, replacement_cost
FROM
    film
WHERE
    (rating = 'P' OR rating = 'PG'
        OR rating = 'PG-13')
        AND replacement_cost >= 18.00
ORDER BY release_year DESC, title
LIMIT 100;

-- 4. Encontrar quantos clientes estão ativos e na loja 1
SELECT 
    COUNT(customer_id) AS active_clients_on_store_1
FROM
    customer
WHERE
    store_id = 1 AND active IS TRUE;

-- 5. Listar todos os detalhes dos clientes que não estão ativos na loja 1. 
SELECT 
    *
FROM
    customer
WHERE
    store_id = 1 AND active IS NOT TRUE;

-- 6. Listar 50 filmes feitos apenas para adultos com a menor taxa de aluguel, e ordenados por título
SELECT title FROM film
WHERE rating = 'NC-17'
ORDER BY rental_rate, title
LIMIT 50;