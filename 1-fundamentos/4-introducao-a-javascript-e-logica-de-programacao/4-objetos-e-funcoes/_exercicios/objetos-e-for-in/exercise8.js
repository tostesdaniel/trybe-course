// Exercicio 8 - Acessar as chaves nome e livros Favoritas e imrpimir no console

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
    {
      titulo: 'Harry Potter e o Prisioneiro de Azkaban',
      autor: 'JK Rowling',
      editora: 'Rocco',
    }
  ],
};
let primeiroLivro = leitor['livrosFavoritos'][0];
let segundoLivro = leitor['livrosFavoritos'][1];
console.log(leitor['nome'] + ' ' + 'tem dois livros favoritos: ' + primeiroLivro['titulo'] + ' e ' + segundoLivro['titulo'] + '.');