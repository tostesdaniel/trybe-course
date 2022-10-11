/* Crie uma função que lê e escreve vários arquivos ao mesmo tempo.
    Utilize o Promise.all para manipular vários arquivos ao mesmo tempo. */
const fs = require('fs/promises');

async function foo() {
  const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
  const writeFiles = strings.map((string, i) =>
    fs.writeFile(`./file${i + 1}.txt`, string)
  );
  Promise.all(writeFiles);

  const readFiles = strings.map((_string, i) =>
    fs.readFile(`./file${i + 1}.txt`, 'utf8')
  );
  const fileContent = await Promise.all(readFiles);
  const joinFileContent = fileContent.join(' ');
  await fs.writeFile('./fileAll.txt', joinFileContent);
}

foo();

// ─────────────────────────────────────────────────────────────────
// Dado o seguinte array de strings: ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'] Faça com que sua função crie um arquivo contendo cada string, sendo o nome de cada arquivo igual a file<index + 1>.txt. Por exemplo, para a string "Finalmente", o nome do arquivo é file1.txt.

// ─────────────────────────────────────────────────────────────────
// Programe sua função para que ela faça a leitura de todos os arquivos criados no item anterior, armazene essa informação e escreva em um arquivo chamado fileAll.txt.
