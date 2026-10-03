const loja = [
    ["qtd1","qtd2","qtd3","qtd4"],
    ["qtd5","qtd6","qtd7","qtd8"],
    ["qtd9","qtd10","qtd11","qtd12"],
]

const undEstoque = [
    [8,6,1,2],
    [3,4,5,7],
    [10,1,8,5],
]



for (let linha = 0; linha < loja.length; linha++) {
    for (let coluna = 0; coluna < undEstoque[linha].length; coluna++) {
        let item = loja[linha][coluna] + undEstoque[linha][coluna]
    }
    
}
console.log(`${item}`)