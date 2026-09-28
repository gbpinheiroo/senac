const produtos = ["calca ", "bermuda ", "camisa ", "casaco "]
let pergunta = "sim";
do {
    novoProduto = prompt("Digite o produto");
    produtos.push(novoProduto)
    pergunta = prompt("Quer continuar incluindo Itens: Digite (Sim ou Não)");
} while (pergunta == "sim");

for (let i = 0; i < produtos.length; i++) {
    const catalogoProdutos = produtos[i];
    console.log(catalogoProdutos)
}
