// Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista: 
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  // Adicione seu código aqui:
  return names.find((aName) => aName.length === 5); 
}

console.log(findNameWithFiveLetters());
