let numero = prompt(
  "Olá, eu sou o robô da tabuada! \n me informe o valor a ser calculado na tabuada"
);
let resultado = "";

for (let indice = 1; indice <= 20; indice++) {
  resultado +=
    " -> " + numero + " * " + indice + " = " + indice * numero + "\n";
}
alert(" resultado da tabuada de " + numero + " é:\n" + resultado);
