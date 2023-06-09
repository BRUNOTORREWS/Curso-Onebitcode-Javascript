const imoveis = [];
let opcao = "";

do {
  opcao = prompt(
    " Bem vindo(a) ao cadastro de imóveis! \n" +
      "Total de imoveis" +
      imoveis.length +
      " Escolha uma opção abaixo \n 1. Novo imovel \n  2. Listar imoveis \n 3.Sair \n"
  );

  switch (opcao) {
    case "1":
      const novoImovel = {};
      novoImovel.proprietario = prompt("Informe o nome do proprietario: ");
      novoImovel.quantidadeDeQuartos = prompt(
        "Quantos quartos possui o imovel: "
      );
      novoImovel.quantidadeDeBanheios = prompt(
        "Quantos banheiros possui um imovel: "
      );
      novoImovel.garagem = prompt("O imovel possui garagem? SIM/NÃO");

      const confirmacao = confirm(
        "Salvar este imovel? \n" +
          " \n Proprietário: " +
          novoImovel.proprietario +
          " \n Quantidade de quartos: " +
          novoImovel.quantidadeDeQuartos +
          " \nQuantidade de banheiros: " +
          novoImovel.quantidadeDeBanheios +
          "\n Possui garagem ?  " +
          novoImovel.garagem
      );

      if (confirmacao) {
        imoveis.push(novoImovel);
        alert("IMÓVEL SALVO COM SUCESSO!!");
      }

      break;

    case "2":
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "Imóvel" +
            (i + 1) +
            "\n Proprietario: " +
            imoveis[i].proprietario +
            "\n Quartos: " +
            imoveis[i].quantidadeDeQuartos +
            "\n Banheiros: " +
            imoveis[i].quantidadeDeBanheios +
            "\nPossui garagem ?" +
            imoveis[i].garagem
        );
      }
      break;

    case "3":
      alert("encerrando");
      break;

    default:
      alert("Opção invalida");
  }
} while (opcao !== "3");
