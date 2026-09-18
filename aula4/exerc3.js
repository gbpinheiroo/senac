let mes = Number(prompt("Digite um numero de 1 a 7 para o mes!"))
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
    case 4:
      document.write("Abril");
      break;
    case 5:
      document.write("Maio");
      break;
    case 6:
      document.write("Junho");
      break;
    case 7:
      document.write("Julho");
      break;
    default:
      alert("Digite somente numeros de 1 a 7");
      break;
  }