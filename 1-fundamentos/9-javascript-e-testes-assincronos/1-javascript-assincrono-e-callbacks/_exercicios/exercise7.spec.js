// Escreva um teste que verifique a chamada da callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

it('should transform every letter to uppercase', (done) => {
  uppercase("Don't Stop Me Now", (str) => {
    try {
      expect(str).toBe("DON'T STOP ME NOW");
      done();
    } catch (error) {
      done(error);
    }
  });
});
