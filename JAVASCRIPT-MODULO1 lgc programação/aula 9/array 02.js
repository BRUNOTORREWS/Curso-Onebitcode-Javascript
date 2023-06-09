const arr = [
  "Frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gandalf",
  "Aragorn",
  "Legolas",
  "Gimli",
];
console.log(arr);

// adicionar elementos no array
// push
// adicionar elemento no final
let tamanho = arr.push("boromir");
console.log(arr);
console.log(tamanho);

//adiconar elemento no inicio
arr.unshift("boromir");
console.log(arr);

//remover elementos
//pop
const UltimoElemento = arr.pop();
console.log(arr);
console.log(UltimoElemento);

//remover elementos no começo
//shift
UltimoElemento = arr.shift();
console.log(arr);
console.log(UltimoElemento);

//pesquisar um elemento
//includes
const inclui = arr.includes("Gandalf");
console.log(inclui);

//cortar e Concatennar
const hobbit = arr.slice(0, 4);
const outros = arr.slice(-4);
console.log(arr);
console.log(hobbit);
console.log(outros);

//concatenar "Concat"
const sociedade = hobbit.concat(outros, "Frodo");
console.log(sociedade);

// subistituição dos elementos
// splice
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o cinzento");
console.log(sociedade);
console.log(elementosRemovidos);

//iterar sobre os elementos
for (let indice = 0; indice < sociedade.length; indice++) {
  const elemento = socieddae(indice);
  console.log(elemento + " se encontra na posição" + indice);
}
