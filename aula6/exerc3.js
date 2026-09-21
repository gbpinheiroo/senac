const cartaoAtivo = true;
const senhaCorreta = true;
const suspeitaFraude = true;

let msg = `Operação NEGADA`;

if (cartaoAtivo && senhaCorreta && !suspeitaFraude) {
    msg = `Operação APROVADA`;
}
console.log(msg)