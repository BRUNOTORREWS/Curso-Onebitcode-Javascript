const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
];

//map: pegar um array existente e criar um array baseado nele

//const nomes = [];
//for (let i = 0; i < personagens.length; i++) {
//const personagem = personagens[i];
//nomes.push(personagem.nome);}

const nomes = personagens.map(function (personagem) {
  return personagem.nome;
});
console.log(nomes);

//filter

//const orcs = [];
//for (let i = 0; i < personagens.length; i++) {
//const personagem = personagens[i];
//if (personagem.raca === "Orc") {
//orcs.push(personagem);}}

const orcs = personagens.filter(function (personagem) {
  return personagem.raca === "Orc";
});

console.log(orcs);

//sort = ordenar um array

const personagensOrdenados = personagens.slice().sort(function (a, b) {
  return b.nivel - a.nivel;
});

console.log(personagens);
console.log(personagensOrdenados);
