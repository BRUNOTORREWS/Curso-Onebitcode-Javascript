//Meétodo normal de criar uma função
function normalSom(a, b) {
  return a + b;
}

console.log(`Soma normal: ${normalSom(2, 2)}`);

//Função anonima
const funcaoAnonima = function (a, b) {
  return a + b;
};

console.log(`Soma anonima: ${funcaoAnonima(3, 3)}`);

//Método arrow function
// se a função for apenas de uma linha, não precisa de return

const arrowSum = (a, b) => a + b;

console.log(`Arrow soma: ${arrowSum(5, 3)}`);

// Não precisa de parenteses de tiver apenas um parametro

const double = (n) => `O dobro de ${n} é igual a ${n * 2}`;
const Number = 22;
console.log(double(Number));

// Também podem ser utilizados com os arrays, e as Height order Functions

const Names = ["Bruno", "Joao", "Jonas", "Lucas", "Breno"];

const startingWithJ = Names.filter((nome) => nome[0] === "J");
console.log(startingWithJ);
