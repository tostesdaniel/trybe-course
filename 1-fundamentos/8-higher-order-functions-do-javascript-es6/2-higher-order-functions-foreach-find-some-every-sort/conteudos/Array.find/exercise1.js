// Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista: 
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  // Adiciona seu código aqui
  return numbers.find((number) => number % 3 === 0  && number % 5 === 0);
}

console.log(findDivisibleBy3And5());
