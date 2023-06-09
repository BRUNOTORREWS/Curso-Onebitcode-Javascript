const velocidade1 = prompt("Insira a sua velocidade do veiculo 1");
const veiculo1 = prompt(" insira o nome do veículo 1");

const velocidade2 = prompt("Insira a sua velocidade do veiculo 2");
const veiculo2 = prompt(" insira o nome do veículo 2");

if (velocidade1 > velocidade2) {
  alert("O veiculo " + veiculo1 + " é mais rápido");
} else if (velocidade2 > velocidade1) {
  alert("O veiculo " + veiculo2 + " é mais rápido");
} else {
  alert("Os veiculos estão com a mesma velocidade");
}
