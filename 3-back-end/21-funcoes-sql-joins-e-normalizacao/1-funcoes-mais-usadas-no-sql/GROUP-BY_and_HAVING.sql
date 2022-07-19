-- Praticando GROUP BY
-- 1. Monte uma query que exiba a quantidade de clientes cadastrados na tabela sakila.customer que estão ativos e a quantidade que estão inativos.
SELECT 
    active, COUNT(*)
FROM
    sakila.customer
GROUP BY active;

-- 2. Monte uma query para a tabela sakila.customer que exiba a quantidade de clientes ativos e inativos por loja. Os resultados devem conter o ID da loja, o status dos clientes (ativos ou inativos) e a quantidade de clientes por status.
SELECT 
    store_id, active, COUNT(*)
FROM
    sakila.customer
GROUP BY store_id , active;

-- 3. Monte uma query que exiba a média de duração de locação por classificação indicativa (rating) dos filmes cadastrados na tabela sakila.film. Os resultados devem ser agrupados pela classificação indicativa e ordenados da maior média para a menor.
SELECT 
    rating, AVG(rental_duration) AS avg_rental_duration
FROM
    sakila.film
GROUP BY rating
ORDER BY rating DESC;

-- 4. Monte uma query para a tabela sakila.address que exiba o nome do distrito e a quantidade de endereços registrados nele. Os resultados devem ser ordenados da maior quantidade para a menor.
SELECT 
    district, COUNT(*) AS addresses
FROM
    sakila.address
GROUP BY district
ORDER BY addresses DESC;

-- PARA FIXAR
-- 1. Usando a query a seguir, modifique-a de forma que exiba apenas as durações médias que estão entre 115.0 a 121.50. Além disso, dê um alias (apelido) à coluna gerada por AVG(length), de forma que deixe a query mais legível. Finalize ordenando os resultados de forma decrescente.
	-- SELECT rating, AVG(length)
	-- FROM sakila.film
	-- GROUP BY rating;
SELECT 
    rating, AVG(length) AS average_length
FROM
    sakila.film
GROUP BY rating
HAVING average_length BETWEEN 115.0 AND 121.50
ORDER BY average_length DESC;

-- 2. Usando a query a seguir, exiba apenas os valores de total do custo de substituição que estão acima de $3950.50. Dê um alias que faça sentido para SUM(replacement_cost), de forma que deixe a query mais legível. Finalize ordenando os resultados de forma crescente.
    -- SELECT rating, SUM(replacement_cost)
    -- FROM sakila.film
    -- GROUP by rating;
SELECT 
    rating, SUM(replacement_cost) AS replacement_cost
FROM
    sakila.film
GROUP BY rating
HAVING replacement_cost > 3950.50
ORDER BY replacement_cost;
