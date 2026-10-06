
let recebeCpf = "60705704300"

let soma1 = 0

for (let i = 0; i < 9; i++) {

    soma1 = soma1 + (recebeCpf[i] * (10 - i))

}
let primeirodig = soma1 % 11;

primeirodig = 11 - primeirodig

console.log(soma1);
console.log(primeirodig);