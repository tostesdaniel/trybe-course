const readlineSync = require('readline-sync');

const fibonacci = (n) => {
  let sequence = [];
  for (let i = 0; i < n; i += 1) {
    const temp = sequence[i - 1] + sequence[i - 2];
    if (i < 2) {
      sequence.push(i);
    } else {
      sequence.push(temp);
    }
  }
  return sequence;
};

function main() {
  const input = readlineSync.questionInt(
    "Type how many numbers of Fibonacci's sequence you'd like: "
  );
  const response = fibonacci(input);
  console.log(`First ${input} numbers: ${response}`);
}

main();
