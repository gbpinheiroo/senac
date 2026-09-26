const produtos = ["calca ", "bermuda ", "camisa ", "casaco "]

let novoProdutos = prompt("Digite o produto");

let pergunta = prompt("Quer continuar incluindo Itens: Digite (Sim ou Não)");

if (pergunta = "sim") {
    novoProdutos = prompt("Digite o produto")
} else {
    
}

produtos.push(novoProdutos)

for (let i = 0; i < produtos.length; i++) {
    const catalogoProdutos = produtos[i];
    console.log(catalogoProdutos)
}
