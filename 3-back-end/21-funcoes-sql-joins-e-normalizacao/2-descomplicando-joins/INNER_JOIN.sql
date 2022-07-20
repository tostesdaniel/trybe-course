-- 1. Monte uma query que exiba o id do ator, nome do ator e id do filme em que ele já atuou, usando as tabelas actor e film_actor.
SELECT 
    A.actor_id,
    CONCAT(A.first_name, ' ', A.last_name) name,
    F.film_id
FROM
    sakila.actor A
        INNER JOIN
    sakila.film_actor F ON A.actor_id = F.actor_id;

-- 2. Use o JOIN para exibir o nome, sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address.
SELECT 
    CONCAT(S.first_name, ' ', S.last_name) name, A.address
FROM
    sakila.staff S
        INNER JOIN
    sakila.address A ON S.address_id = A.address_id;

-- 3. Exiba o id do cliente, nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address.
SELECT 
    C.customer_id,
    A.address_id,
    CONCAT(C.first_name, ' ', C.last_name) name,
    C.email
FROM
    sakila.customer C
        INNER JOIN
    sakila.address A ON C.address_id = A.address_id
ORDER BY name DESC
LIMIT 100;

-- 4. Exiba o nome, email, id do endereço, endereço e distrito dos clientes que moram no distrito da California e que contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas address e customer.
SELECT 
    C.address_id,
    CONCAT(C.first_name, ' ', C.last_name) name,
    C.email,
    A.district
FROM
    sakila.customer C
        INNER JOIN
    sakila.address A ON C.address_id = A.address_id
WHERE
    A.district = 'California'
        AND C.first_name LIKE '%rene%';

-- 5. Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas na tabela address e customer.
SELECT 
    CONCAT(C.first_name, ' ', C.last_name) name,
    COUNT(A.address)
FROM
    sakila.customer C
        INNER JOIN
    sakila.address A ON C.address_id = A.address_id
WHERE
    C.active
GROUP BY C.customer_id
ORDER BY name DESC;

-- 6. Monte uma query que exiba o nome, sobrenome e a média de valor (amount) paga aos funcionários no ano de 2006. Use as tabelas payment e staff. Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.
SELECT 
    CONCAT(S.first_name, ' ', S.last_name) name, AVG(P.amount)
FROM
    sakila.staff S
        INNER JOIN
    sakila.payment P ON S.staff_id = P.staff_id
WHERE
    YEAR(P.payment_date) = 2006
GROUP BY S.first_name , S.last_name;

-- 7. Monte uma query que exiba o id do ator, nome, id do filme e título do filme, usando as tabelas actor, film_actor e film. Dica: você precisará fazer mais de um JOIN na mesma query.
SELECT 
    A.actor_id,
    CONCAT(A.first_name, ' ', A.last_name) name,
    F.film_id,
    F.title
FROM
    sakila.actor A
        INNER JOIN
    sakila.film_actor FA ON FA.actor_id = A.actor_id
        INNER JOIN
    sakila.film F ON F.film_id = FA.film_id;
