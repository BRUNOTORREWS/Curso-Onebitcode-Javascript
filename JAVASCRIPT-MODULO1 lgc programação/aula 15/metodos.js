let pessoa = {
  nome: "Bruno",
  idade: 26,
  dizerOla() {
    console.log("Olá, mundo! meu nome é " + this.nome);
  },
};

console.log(pessoa);
pessoa.dizerOla();
