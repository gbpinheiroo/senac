let quantidade = 2;
let produtoCritico = false ;
let msg = `Produto pode ser enviado`


if(quantidade < 5 || produtoCritico){
    msg =`Produto não pode ser enviado`
}

console.log(msg)
