function calcularMedia(a, b) {
  const media = (a + b) / 2;
  return media;
}
const resultado = calcularMedia(7, 3);
console.log(resultado);

function criarProduto(nome, preco) {
  const produto = {
    nome, // nome:nome
    preco,
    estoque: 1,
  };
  return produto;
}

//console.log(criarProduto("Macbook i3", 10.0));

function areaRetangular(base, altura) {
  const area = base * altura;
  return area; // o retorno também poderia ser "base * altura" pois ele não precisa ser uma variável e sim uma expressão.
}
//console.log(areaRetangular(3, 5));

function ola() {
  let texto = "--";
  texto = "Olá, mundo";
  console.log(texto);
  return texto; // a função só póde ser retornada uma vex.
}

// console.log(ola());

function maiorIdade(idade) {
  if (idade <= 18) {
    return "menor de idade";
  } else {
    return "maior de idade";
  }
}

console.log(maiorIdade(10));
console.log(maiorIdade(23));
