
let recebeCpf = "60705704300"
let soma1 = 0
let soma2 = 0

for (let i = 0; i < 9; i++) {
    soma1 = soma1 + (recebeCpf[i] * (10 - i))
}

for (let i = 1; i < 10; i++) {
    soma2 = soma2 + (recebeCpf[i] * (11 - i))
}

let primeiroDig = soma1 % 11;
primeiroDig = 11 - primeiroDig
if (primeiroDig >= 10) {
    primeiroDig = 0
}

let segundoDig = soma2 % 11
segundoDig = 10 - segundoDig
if (segundoDig >= 10) {
    segundoDig = 0
}



console.log(soma1);
console.log(primeiroDig);
console.log(segundoDig);