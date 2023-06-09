function calcular(a, b, operacao) {
  console.log("Realizando uma operação: ");
  const resultado = operacao(a, b);
  return resultado;
}

function somar(x, y) {
  console.log("realizando uma soma. ");
  return x + y;
}

console.log(calcular(3, 5, somar));
function exibirElemento(elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array,
  });
}
const lista = ["maçã", "banana", "laranja", "limao"];
for (let i = 0; i < lista.length; i++) {
  exibirElemento(lista[i], i, lista);
}

lista.forEach(exibirElemento); // percorrer o array de forma curta e simples
lista.forEach(function (elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array,
  });
});
