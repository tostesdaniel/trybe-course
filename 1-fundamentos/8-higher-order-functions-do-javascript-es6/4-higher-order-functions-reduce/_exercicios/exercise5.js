const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
function containsA() {
  // escreva seu código aqui
  return names.reduce((acc, name) => {
    const lowerCaseLetters = name.toLowerCase().split('');
    lowerCaseLetters.forEach((letter) => {
      if (letter === 'a') {
        acc += 1;
      } 
    });
    return acc;
  }, 0);
}

console.log(containsA());
