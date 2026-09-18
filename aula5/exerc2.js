let sinal = prompt("Escreva uma Cor VERDE, AMARELO OU VERMELHO");
switch (sinal.toLowerCase()) {
  case "verde":
    document.write("SIGA");
    break;
  case "amarelo":
    document.write("ATENÇÃO");
    break;
  case "vermelho":
    document.write("PARE");
    break;
  default:
    alert("Digite apenas as cores (VERDE, AMARELO OU VERMELHO)");
    break;
}
