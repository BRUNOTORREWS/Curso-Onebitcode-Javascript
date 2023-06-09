let nome = window.prompt("Qual seu nome?");
let sobrenome = window.prompt("Qual seu sobrenome");
let CampoEstudo = window.prompt("O que você estuda?");
let AnoNascimento = window.prompt("Qual ano você nasceu?");
let idade = AnoNascimento - 2023;

window.alert(
  "\nPrimeiro nome :  " +
    nome +
    " \n Sobrenome : " +
    sobrenome +
    " \ncampo de estudo: " +
    CampoEstudo +
    " \nAno de nascimento : " +
    AnoNascimento +
    " \nIdade : " +
    idade
);
