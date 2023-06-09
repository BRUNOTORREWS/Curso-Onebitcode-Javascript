let fila = [];
let opcao = "";

do {
  let pacientes = "";
  for (let i = 0; i < fila.length; i++) {
    pacientes += i + 1 + "° -" + fila[i] + "\n";
  }

  opcao = prompt(
    " pacientes: " +
      pacientes +
      "\n Escolha uma ação: \n 1.Novo paciente \n 2. Consultar paciente \n 3.Sair"
  );

  switch (opcao) {
    case "1":
      const novoPaciente = prompt(" Qual é o nome do novo paciente");
      fila.push(novoPaciente);
      break;

    case "2":
      const pacienteConsultado = fila.shift();
      alert(pacienteConsultado + " foi removido da fila");
      break;
    case "3":
      alert(" encerrando...");
      break;
    default:
      alert("Opção inválida");
  }
} while (opcao !== "3");
