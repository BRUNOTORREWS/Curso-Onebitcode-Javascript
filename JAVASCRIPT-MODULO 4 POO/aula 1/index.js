//revisão de objetos

const book = {
  tittle: "Eragon",
  published: "true",
  inSook: 20,
  name: {
    autor: "Bruno",
  },
  addOnStock(quantify) {
    this.inSook += quantify;
  },
  save: function () {
    //salva no banco de dados
  },
};

console.log(book);

book.addOnStock(29);

console.log(book.inSook);
