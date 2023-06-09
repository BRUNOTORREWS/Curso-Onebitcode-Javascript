let nomeTurista = prompt("Hello my brother!! Whats your fist name? ");
let cidades = " ";
let contagemCidades = 0;

let continuar = prompt(" Você visitou alguma cidade ? (Sim/Não) ");

while (continuar === "Sim") {
  let cidade = prompt("Qual é o nome da cidade visitada?");
  cidades += " - " + cidade + "\n";
  contagemCidades++;
  continuar = prompt("Você visitou alguma outra cidade? (Sim/Não)");
}

alert(
  "Turista: " +
    nomeTurista +
    "\n quantidade de cidades visitadas: " +
    contagemCidades +
    "\n quais cidades foram visitadas: \n" +
    cidades
);
