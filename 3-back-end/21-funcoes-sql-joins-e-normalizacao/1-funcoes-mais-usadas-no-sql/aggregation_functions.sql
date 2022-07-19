-- Monte um query que exiba:
	-- A média de duração dos filmes e dê o nome da coluna de 'Média de Duração';
SELECT 
    AVG(length) AS 'Média de Duração'
FROM
    sakila.film;

    -- A duração mínima dos filmes como 'Duração Mínima';
SELECT 
    MIN(length) AS 'Duração Mínima'
FROM
    sakila.film;

    -- A duração máxima dos filmes como 'Duração Máxima';
SELECT 
    MAX(length) AS 'Duração Máxima'
FROM
    sakila.film;

    -- A soma de todas as durações como 'Tempo de Exibição Total';
SELECT 
    SUM(length) AS 'Tempo de Exibição Total'
FROM
    sakila.film;

    -- E, finalmente, a quantidade total de filmes cadastrados na tabela sakila.film como 'Filmes Registrados'.
SELECT 
    COUNT(film_id) AS 'Filmes Registrados'
FROM
    sakila.film;
