let codigo = Number(prompt("Informe o codigo do produto!"));
switch (codigo) {
  case 1:
    document.write("CAFE - R$5,00");
    break;
  case 2:
    document.write("LEITE - R$8,00");
    break;
  case 3:
    document.write("PÃO - R$6,00");
    break;
  case 4:
    document.write("BOLO - R$5,00");
    break;
  default:
    document.write("CODIGO INVALIDO");
    break;
}
