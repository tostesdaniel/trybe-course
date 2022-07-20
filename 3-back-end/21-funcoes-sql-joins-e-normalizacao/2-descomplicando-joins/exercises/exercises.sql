-- 1. Utilizando o INNER JOIN, encontre as vendas nacionais (domestic_sales) e internacionais (international_sales) de cada filme.
SELECT 
    M.title, B.domestic_sales, B.international_sales
FROM
    pixar.box_office AS B
        INNER JOIN
    pixar.movies AS M ON M.id = B.movie_id;

-- 2. Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais (international_sales) do que vendas nacionais (domestic_sales).
SELECT 
    M.title, (B.domestic_sales + B.international_sales) AS Sales
FROM
    pixar.box_office AS B
        INNER JOIN
    pixar.movies AS M
WHERE
    B.international_sales > B.domestic_sales;

-- 3. Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação (rating) em ordem decrescente.
SELECT 
    M.title, B.rating
FROM
    pixar.box_office AS B
        INNER JOIN
    pixar.movies AS M
ORDER BY rating DESC;

-- 4. Utilizando o LEFT JOIN, faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
SELECT 
    T.name,
    T.location,
    M.title,
    M.director,
    M.year,
    M.length_minutes
FROM
    pixar.theater AS T
        LEFT JOIN
    pixar.movies AS M ON M.theater_id = T.id
ORDER BY T.name;

-- 5. Utilizando o RIGHT JOIN, faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
SELECT 
    T.name,
    T.location,
    M.title,
    M.director,
    M.year,
    M.length_minutes
FROM
    pixar.theater AS T
        RIGHT JOIN
    pixar.movies AS M ON M.theater_id = T.id
ORDER BY T.name;
