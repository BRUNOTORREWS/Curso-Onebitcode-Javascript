const valor = prompt("insira um valor em metros: ");
const medida = prompt(
  " selecione uma medida que deseja converter: a)Milímetro (mm) \n b)centímetro (cm) \n c)decímetro (dm) \n d)decâmetro (dam) \n e)hectometro (hm) \n f)quilômetro (km)"
);

switch (medida) {
  case "a":
    let milimetro = valor * 1000;
    alert("o resultado é: " + milimetro + " Milímetro (mm) ");
    break;

  case "b":
    let centimetro = valor * 100;
    alert("o resultado é: " + centimetro + " centímetro (cm) ");
    break;

  case "c":
    let decimetro = valor * 10;
    alert("o resultado é: " + decimetro + " decimetro (dm) ");
    break;

  case "d":
    let decametro = valor / 10;
    alert("o resultado é: " + decametro + " decâmetro (dam) ");
    break;

  case "e":
    let hectometro = valor * 0.01;
    alert("o resultado é: " + hectometro + " hectômetro (hm) ");
    break;

  case "f":
    let quilômetro = valor * 1000;
    "o resultado é: " + quilômetro + "  quilômetro (km) ";
    break;

  default:
    alert("OPÇÃO INVÁLIDA, TENTE NOVAMENTE");
}
