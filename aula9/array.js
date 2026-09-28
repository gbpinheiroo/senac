// Crie um array com cinco modelos de carros.
// Mostre o segundo e o último.
// Substitua um modelo e apresente a lista atualizada.

/*const veiculo = ["amarok", "byd", "celta", "dodge"]
console.log(veiculo[0])
console.log(veiculo[3])
veiculo[0] = "astra"
veiculo[3] = "durango"
console.log(veiculo)*/

// Comece com quatro placas cadastradas.
// Adicione mais duas e apresente todas as placas
// e a quantidade de veículos

/*const placasVeiculos = ["abc123", "def456", "ghi789", "jkl024"]
placasVeiculos.push("mno135","pqr246")
console.log(placasVeiculos)
console.log(placasVeiculos.length)
*/

// Um sistema registrou 45, 72, 60, 95, 50, 110 e 65 km/h.
// Considerando limite de 70 km/h, percorra os dados e
// informe quais registros ultrapassaram o limite.
// Ao final, mostre a quantidade de infrações.

const infracoesTransito = [45, 72, 60, 95, 50, 110, 65]

for (let i = 0; i < infracoesTransito.length; i++) {
    const multa = infracoesTransito[i];
    if(multa > 70){
        console.log(`O motorista registrou a velocidade de ${multa}km/h`)
    }
}