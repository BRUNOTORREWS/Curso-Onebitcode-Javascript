function calcularAreaTriangulo() {
  const base = prompt("Informe a base do triangulo: ");
  const altura = prompt("Informe a altura do triangulo: ");
  return (base * altura) / 2;
}

function calcularBaseRetangulo() {
  const base = prompt("Informe a base do retângulo: ");
  const altura = prompt(" informe a altura do retângulo: ");
  return base * altura;
}

function calcularAreaQuadrado() {
  const lado = prompt("Informe o lado do quadrado: ");
  return lado * lado;
}

function calcularAreaTrapezio() {
  const baseMaior = parseFloat(prompt("Informe a base maior do trapézio: "));
  const baseMenor = parseFloat(prompt("Informe a base menor do trapézio: "));
  const altura = prompt("Informe a altura do trapézio: ");
  return ((baseMaior + baseMenor) * altura) / 2;
}

function calcularAreaCirculo() {
  const raio = prompt("Informe o raio do círculo: ");
  return 3.14 * raio * raio;
}

function exibirMenu() {
  return prompt(
    "Calculadora Geométrica\n" +
      "1. Calcular area do triângulo\n" +
      "2. Calcular area do retângulo\n" +
      "3. Calcular area do quadrado\n" +
      "4. Calcular area do trapézio\n" +
      "5. Calculaer area do círculo\n" +
      "6. Sair\n"
  );
}

function executar() {
  let opcao = "";

  do {
    opcao = exibirMenu();
    let resultado;

    switch (opcao) {
      case "1":
        resultado = calcularAreaTriangulo();
        break;
      case "2":
        resultado = calcularBaseRetangulo();
        break;
      case "3":
        resultado = calcularAreaQuadrado();
        break;
      case "4":
        resultado = calcularAreaTrapezio();
        break;
      case "5":
        resultado = calcularAreaCirculo();
        break;
      case "6":
        alert("Encerrando...");
        break;
      default:
        alert("Opção inválida!!!");
        break;
    }

    if (resultado) {
      alert("resultado: " + resultado);
    }
  } while (opcao !== "6");
}

executar();
