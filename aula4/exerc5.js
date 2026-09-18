let cod = Number(prompt("Digite um codigo de 1 a 4!"))
switch (cod) {
    case 1:
      document.write("Alimento Perecível");
      break;
    case 2:
      document.write("Bebida");
      break;
    case 3:
      document.write("Limpeza");
      break;
    case 4:
      document.write("Higiene pessoal");
    default:
        alert("Digite somente numeros de 1 a 4")
        break}