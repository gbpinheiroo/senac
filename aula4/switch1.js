let mes = Number(prompt("Informe o numero do mes"));
switch (mes) {
  case 1:
    document.write("Janeiro");
    break;
  case 2:
    document.write("Fevereiro");
    break;
  case 3:
    document.write("Março");
    break;
  default:
    document.write("Voce digitou um numero fora do intervalo!");
    break;
}
