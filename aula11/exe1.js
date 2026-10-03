let unidade;
class Produtosloja {
    constructor(nome, preco, estoque,) {
        this.nome = nome
        this.preco = preco
        this.estoque = estoque
    }
    mostrarUnidades() {
        unidade = [
            this.nome, this.preco, this.estoque]
        console.table(unidade)
    }

}

let shampoo =
    new Produtosloja("Shampoo", 10, 5);
let condicionador =
    new Produtosloja("Condicionador", 8, 15);

shampoo.mostrarUnidades()