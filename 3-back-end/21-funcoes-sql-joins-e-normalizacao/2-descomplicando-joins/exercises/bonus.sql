-- 6. Utilizando o INNER JOIN, selecione todas as informações dos filmes que estão em cartaz (possuem theater_id diferente de NULL) com avaliação maior que 8.
SELECT 
    M.*
FROM
    pixar.movies AS M
        INNER JOIN
    pixar.box_office AS B ON B.movie_id = M.id
WHERE
    M.theater_id IS NOT NULL
        AND B.rating > 8;