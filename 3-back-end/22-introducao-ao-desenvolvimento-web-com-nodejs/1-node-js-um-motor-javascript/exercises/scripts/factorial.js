const readlineSync = require('readline-sync');

const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

function main() {
  const input = readlineSync.questionInt(
    'Type a number to get its factorial: '
  );
  const result = factorial(input);
  console.log(`Factorial of ${input} is ${result}`);
}

main();
