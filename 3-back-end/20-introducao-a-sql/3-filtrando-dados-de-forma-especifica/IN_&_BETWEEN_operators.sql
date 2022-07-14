USE sakila;
-- 1.Mostre o nome, sobrenome e e-mail dos clientes com os seguintes sobrenomes: hicks, crawford, henry, boyd, mason, morales e kennedy, ordenados por nome em ordem alfabética.
SELECT 
    first_name, last_name, email
FROM
    customer
WHERE
    last_name IN ('hicks' , 'crawford',
        'henry',
        'boyd',
        'mason',
        'morales',
        'kennedy')
ORDER BY first_name ASC;

-- 2.Mostrar o e-mail dos clientes com os address_id 172, 173, 174, 175 e 176, ordenados em ordem alfabética.
SELECT 
    *
FROM
    customer
WHERE
   address_id BETWEEN 172 AND 176;

-- 3.Descubrir quantos pagamentos foram feitos entre 01/05/2005 e 01/08/2005.
SELECT 
    COUNT(*) AS payments
FROM
    payment
WHERE
    payment_date BETWEEN '2005/05/01' AND '2005/08/01';

-- 4.Mostrar o título, ano de lançamento e duração do empréstimo de todos os filmes com a duração de empréstimo de 3 a 6. Ordenar o resultado em filmes com maior duração de empréstimo e título em ordem alfabética.
SELECT 
    title, release_year, rental_duration
FROM
    film
WHERE
    rental_duration BETWEEN 3 AND 6
ORDER BY length DESC, title ASC;

-- 5.Exibir o título e classificação dos 500 primeiros filmes direcionados para as classificações indicativas G, PG e PG-13. Ordenar o resultado por título.
SELECT 
    title, rating
FROM
    film
WHERE
    rating IN ('G' , 'PG', 'PG-13')
ORDER BY title ASC
LIMIT 500;