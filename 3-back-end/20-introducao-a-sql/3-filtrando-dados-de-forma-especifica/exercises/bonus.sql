USE Scientists;
-- 1.Escreva uma query para exibir todas as informações de todos os cientistas que possuam a letra e em seu nome.
SELECT 
    *
FROM
    Scientists
WHERE
    name LIKE '%e%';

-- 2.Escreva uma query para exibir o nome de todos os projetos cujo o código inicie com a letra A. Ordene o resultado em ordem alfabética.
SELECT 
    name
FROM
    Projects
WHERE
    code LIKE 'A%'
ORDER BY name;

-- 3.Escreva uma query para exibir o código e nome de todos os projetos que possuam em seu código o número 3. Ordene o resultado em ordem alfabética.
SELECT 
    name
FROM
    Projects
WHERE
    code LIKE '%3%'
ORDER BY name;

-- 4.Escreva uma query para exibir todos os cientistas (valores numéricos) cujos projetos sejam AeH3, Ast3 ou Che1.
SELECT 
    scientist
FROM
    AssignedTo
WHERE
    project IN ('AeH3' , 'Ast3', 'Che1');

-- 5.Escreva uma query para exibir todas as informações de todos os projetos com mais de 500 horas.
SELECT 
    *
FROM
    Projects
WHERE
    hours > 500;

-- 6.Escreva uma query para exibir todas as informações de todos os projetos cujas horas sejam maiores que 250 e menores 800.
SELECT 
    *
FROM
    Projects
WHERE
    hours BETWEEN 250 AND 800;

-- 7.Escreva uma query para exibir o nome e o código de todos os projetos cujo nome NÃO inicie com a letra A.
SELECT 
    code, name
FROM
    Projects
WHERE
    name NOT LIKE ('A%');

-- 8.Escreva uma query para exibir o nome de todos os projetos cujo código contenha a letra H.
SELECT 
    name
FROM
    Projects
WHERE
    code LIKE '%H%';