let nota1 = Number(prompt("Digite sua nota 1"));
let nota2 = Number(prompt("Digite sua nota 2"));

let media = (nota1 + nota2) / 2;
let texto = media > 6 ? "APROVADO" : "REPROVADO";

document.write("Sua media foi " + media + " Voce esta " + texto);
