// Em um sistema de estacionamento,
// crie uma função chamada abrirEstacionamento 
// que apresente a mensagem “Estacionamento aberto”.
// Depois, chame a função para verificar seu funcionamento.

const newLocal = 100
/*
function abrirEstacionamento() {
    return ("Estacionamento aberto")
}

console.log(abrirEstacionamento())
*/


// Crie uma função que receba horas estacionadas e preço por hora.
// A função deverá retornar o valor total.
// Teste a função com pelo menos três valores diferentes e apresente os resultados.

/*
function calcula(n1 , n2) {
    return n1 * n2
}
console.log(calcula(1,30))
*/


// Crie uma função que analise velocidade.
// Quando o valor for maior que 70 km/h, a função deverá retornar “Acima do limite”;
// caso contrário, deverá retornar “Dentro do limite”.
// Faça diferentes chamadas para testar as duas possibilidades.


function analisaVeloc(vel) {
    let msg = "Dentro do limite"
    if (vel > 70) {
        msg = "Acima do limite"
    }
    return msg
}

console.log(analisaVeloc(65))



