const dayjs = require("dayjs");
const customParseFormat = require("dayjs/plugin/customParseFormat");
const isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
dayjs.extend(customParseFormat);
dayjs.extend(isSameOrAfter);

function calcularInformacoesAniversario(dataNascimento) {
  // Parse da data de nascimento usando um formato personalizado (DD/MM/YYYY)
  const nascimento = dayjs(dataNascimento, "DD/MM/YYYY");

  // Verifica se a data de nascimento é válida
  if (!nascimento.isValid()) {
    return "Data de nascimento inválida!";
  }

  // Obtém a data atual
  const hoje = dayjs();

  // Define a data do próximo aniversário como a data de nascimento no próximo ano
  const proximoAniversario = nascimento.set("year", hoje.year() + 1);

  // Calcula a idade atual
  const idade = hoje.diff(nascimento, "year");

  // Calcula a diferença de dias entre a data atual e o próximo aniversário
  const diasFaltantes = proximoAniversario.diff(hoje, "day");

  // Formata a data de nascimento como string
  const dataNascimentoStr = nascimento.format("DD/MM/YYYY");

  // Retorna as informações do aniversário como resultado
  return {
    dataNascimento: dataNascimentoStr,
    idadeAtual: idade,
    diasFaltantesProximoAniversario: diasFaltantes,
  };
}

// Exemplo de uso da função
const dataNascimento = "15/07/2001";
const resultado = calcularInformacoesAniversario(dataNascimento);
console.log(`Data de Nascimento: ${resultado.dataNascimento}`);
console.log(`Idade Atual: ${resultado.idadeAtual} anos`);
console.log(
  `Dias Faltantes para o Próximo Aniversário: ${resultado.diasFaltantesProximoAniversario} dias`
);
