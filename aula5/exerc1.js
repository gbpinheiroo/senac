/*
    Uma loja cobra R$ 20 de frete em compras abaixo de R$ 200. 
    A partir de R$ 200, o frete é grátis.
    Exiba a situação do frete.
*/

let valor = Number(prompt("Valor da compra: R$ "));
let comFrete = 20 + valor;

// USANDO A NOVA SINTAXE
let msg =
  valor >= 200 ? `Sua compra deu R$ ${valor}` : `Sua compra deu R$ ${comFrete}`;
document.write(msg);

// USANDO A ANTIGA SINTAXE
/*let msg =
  valor >= 200 ? "Sua compra deu R$" + valor : "Sua compra deu R$" + frete;
document.write(msg);
*/

// USANDO O IF/ELSE
/*
if (valor >= 200) {
  document.write(`Sua compra deu R$ ${valor}`);
} else {
  document.write(`Sua compra deu R$ ${frete}`);
}
*/
