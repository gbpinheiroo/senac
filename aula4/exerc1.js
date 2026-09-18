let smn = Number(
  prompt("DIgite um numero de 1 - 7 correspodente aos dias da semana!")
);
switch (smn) {
  case 1:
    document.write("Domingo");
    break;
  case 2:
    document.write("Segunda");
    break;
  case 3:
    document.write("Terca");
    break;
  case 4:
    document.write("Quarta");
    break;
  case 5:
    document.write("Quinta");
    break;
  case 6:
    document.write("Sexta");
    break;
  case 7:
    document.write("Sabado");
    break;
  default:
    alert("Digite somente numeros de 1 a 7");
    break;
}
