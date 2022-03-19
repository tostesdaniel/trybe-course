function raffle() {
  const selNumber = Math.floor(Math.random() * (5 - 1 + 1) + 1);
  return selNumber;
}

function announceResult(n, callback) {
  if (callback() === n) {
    return 'Parabéns você ganhou';
  }
  return 'Tente novamente';
}

console.log(announceResult(3, raffle));
