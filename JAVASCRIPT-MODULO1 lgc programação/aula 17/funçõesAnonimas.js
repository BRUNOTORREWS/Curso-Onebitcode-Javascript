function soma(a, b) {
  return a + b;
}

const operacao = soma;

console.log(operacao(2, 3));
// atribuir uma função em uma variavel, se tornando anonima.

//perigos de funções anonimas

olaMundo();
oiMundo();

function olaMundo() {
  console.log("Olá, mundo");
}
