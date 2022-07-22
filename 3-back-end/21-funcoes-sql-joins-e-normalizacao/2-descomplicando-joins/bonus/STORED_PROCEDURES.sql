USE sakila;

-- Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes. Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o id do ator ou atriz e a quantidade de filmes em que atuaram.
DELIMITER $$

CREATE PROCEDURE ShowTopTenActors()
BEGIN
		SELECT 
				actor_id, COUNT(*) AS films_made
		FROM
				film_actor
		GROUP BY actor_id
		ORDER BY COUNT(*) DESC
		LIMIT 10;
END $$

DELIMITER $$ ;

CALL ShowTopTenActors();

-- Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string e que exiba o id do filme, seu titulo, o id de sua categoria e o nome da categoria selecionada. Use as tabelas film, film_category e category para montar essa procedure.
DELIMITER $$

CREATE PROCEDURE ShowMovieInfo(IN category VARCHAR(100))
BEGIN
		SELECT 
				F.film_id, F.title, FC.category_id, C.`name`
		FROM
				film AS F
						INNER JOIN
				film_category AS FC ON F.film_id = FC.film_id
						INNER JOIN
				category AS C ON FC.category_id = C.category_id
		WHERE
				C.`name` = category;
END $$

DELIMITER ;

CALL ShowMovieInfo('Drama');

-- Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o cliente está ou não ativo, através de um parâmetro de saída.
DELIMITER $$

CREATE PROCEDURE VerifyIfClientIsActive(IN client_email VARCHAR(100), OUT isActive BOOL)
BEGIN
		SET isActive = (
				SELECT 
						active
				FROM
						customer
				WHERE
						email = client_email
		);
END $$

DELIMITER ;

SELECT @active;
CALL VerifyIfClientIsActive('HEATHER.MORRIS@sakilacustomer.org', @active);
SELECT @active;
