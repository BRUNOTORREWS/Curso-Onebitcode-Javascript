function dobro(x) {
  alert("O dobro de " + x + " é " + x * 2);
}

//dobro(10);

function dizerOla(name = "mundo") {
  alert("Olá, " + dizerOla + "!");
}
//dizerOla(Bruno);

function soma(a, b) {
  alert(" O resultado da soma é " + (a + b));
}
//soma(3, 4);

function criarUsuario(nome, email, senha, tipo = "adimin") {
  const usuario = {
    nome: nome,
    email: email,
    senha: senha,
    tipo: tipo,
  };
  console.log(usuario);
}

criarUsuario("Bruno", "bruninhojose@hotmail.com", "908798", "adimin");
