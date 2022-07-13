USE sakila;
-- 1. Mostrar todos os detalhes dos filmes que contêm a palavra ace no nome.
SELECT 
    *
FROM
    film
WHERE
    title LIKE '%ace%';

-- 2. Mostrar todos os detalhes dos filmes cujas descrições finalizam com china.
SELECT 
    *
FROM
    film
WHERE
    description LIKE '%china';

-- 3. Mostre todos os detalhes dos dois filmes cujas descrições contêm a palavra girl e o título finaliza com a palavra lord.
SELECT 
    *
FROM
    film
WHERE
    description LIKE '%girl%'
        AND title LIKE '%lord';

-- 4.Mostre os dois casos em que, a partir do 4° caractere no título do filme, tem-se a palavra gon.
SELECT 
    *
FROM
    film
WHERE
    title LIKE '___gon%';

-- 5.Mostrar o único caso em que, a partir do 4° caractere no título do filme, tem-se a palavra gon e a descrição contém a palavra Documentary.
SELECT 
    *
FROM
    film
WHERE
    title LIKE '___gon%'
        AND description LIKE '%Documentary%';

-- 6.Mostrar os dois filmes cujos títulos ou finalizam com academy ou iniciam com mosquito.
SELECT 
    *
FROM
    film
WHERE
    title LIKE '%academy'
        OR title LIKE 'mosquito%';

-- 7.Mostrar os seis filmes que contêm as palavras monkey e sumo em suas descrições.
SELECT 
    *
FROM
    film
WHERE
    description LIKE '%monkey%'
        AND description LIKE '%sumo%';