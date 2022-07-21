-- 1. Normalize a tabela a seguir para a 1ª Forma Normal.
-- Contida no diretório em ./exercicio_fixacao_1.excalidraw.svg

-- 2. Usando a estrutura (já normalizada para 1ª Forma Normal) da tabela anterior, transforme-a agora na 2ª Forma Normal.
-- Contida no diretório em ./exercicio_fixacao_2.excalidraw.svg

-- 3. Monte uma query que:
	-- Crie um banco de dados chamado normalization;
	-- Crie todas as tabelas resultantes do exercício 2 (na 2ª Forma Normal);
	-- Popule todas as tabelas com os dados fornecidos nos exercícios.
CREATE DATABASE IF NOT EXISTS normalization;

USE normalization;

CREATE TABLE funcionario (
    funcionario_id INT PRIMARY KEY NOT NULL,
    nome VARCHAR(30) NOT NULL,
    sobrenome VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL,
    telefone VARCHAR(30) NOT NULL,
    data_cadastro VARCHAR(30) NOT NULL
)  ENGINE=INNODB;

INSERT INTO funcionario
	(funcionario_id, nome, sobrenome, email, telefone, data_cadastro)
VALUES
    (12, 'Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', '2020-05-05'),
	(13, 'André', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996', '2020-02-05'),
	(14, 'Cíntia', 'Duval', 'cindy@outlook.com', '(33)99855-4669', '2020-05-05'),
	(15, 'Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556', '2020-05-05');

CREATE TABLE setor (
    setor_id INT PRIMARY KEY NOT NULL,
    setor VARCHAR(30)
)  ENGINE=INNODB;

INSERT INTO setor
	(setor_id, setor)
VALUES
	(1, 'Administração'),
	(2, 'Vendas'),
	(3, 'Operacional'),
	(4, 'Estratégico'),
	(5, 'Marketing');

CREATE TABLE setor_funcionario (
    setor_id INT NOT NULL,
    funcionario_id INT NOT NULL,
    FOREIGN KEY (setor_id)
        REFERENCES setor (setor_id),
    FOREIGN KEY (funcionario_id)
        REFERENCES funcionario (funcionario_id)
)  ENGINE=INNODB;

INSERT INTO setor_funcionario
	(setor_id, funcionario_id)
VALUES
	(1, 12),
  (2, 12),
  (3, 13),
  (4, 14),
  (2, 14),
  (5, 15);
