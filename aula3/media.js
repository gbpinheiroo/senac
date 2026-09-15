let nota1 = 8;
let nota2 = 3;

let media = (nota1 + nota2) / 2;
let recupera = media - 6;

if (media >= 6) {
  console.log("Sua media foi " + media + " Voce esta: APROVADO");
} else {
  console.log(
    "Sua media foi " +
      media +
      " Voce esta: REPROVADO. voce precisa de " +
      recupera +
      " para ser aprovado"
  );
}
