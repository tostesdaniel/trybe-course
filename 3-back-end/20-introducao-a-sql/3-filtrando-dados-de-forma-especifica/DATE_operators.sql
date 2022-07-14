USE sakila;
-- 1.Contar pagamentos com a data de retorno 2005-05-25.
SELECT 
    COUNT(*)
FROM
    payment
WHERE
    DATE(payment_date) = '2005-05-25';

-- 2.Contar pagamentos feitos entre 01/07/2005 e 22/08/2005.
SELECT 
    COUNT(*)
FROM
    payment
WHERE
    payment_date BETWEEN '2005-07-01' AND '2005';

-- 3.Extrair data, ano, mês, dia, hora, minuto e segundo dos registros com rental_id = 10330.
SELECT 
    DATE(rental_date) AS date,
    YEAR(rental_date) AS year,
    MONTH(rental_date) AS month,
    DAY(rental_date) AS day,
    HOUR(rental_date) AS hour,
    MINUTE(rental_date) AS minute,
    SECOND(rental_date) AS second
FROM
    rental
WHERE
    rental_id = 10330;

-- 4.Retornar todos os dados dos pagamentos feitos no dia 28/07/2005 a partir das 22 horas.
SELECT 
    *
FROM
    payment
WHERE
    DATE(payment_date) = '2005-07-28'
        AND HOUR(payment_date) >= '22';