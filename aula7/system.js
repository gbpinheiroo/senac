/*const nome = prompt("Digite o seu nome: ")

const idade = Number(prompt("Digite a sua idade: "))

document.write(`Ola ${nome} sua idade é ${idade}`)*/

let senhaAcesso = 12345;
let digiteSenha;

while (digiteSenha != senhaAcesso) {
    digiteSenha = Number(prompt("Digite sua senha"))
}

const nome = prompt("Digite o seu nome: ")

let idade = Number(prompt("Digite a sua idade: "))

let tel = Number(prompt("Digite o seu telefone: "))

let valor;

let valServico = prompt("Escolha um serviço: 1-Manutenção 2-Reparo 3-Revisão");
switch (valServico) {
  case "1":
    valor = "R$100";
    break;
  case "2":
    valor = "R$50";
    break;
  case "3":
    valor = "Gratuitamente";
    break;
  default:
    prompt("Escolha um serviço: 1-Manutenção 2-Reparo 3-Revisão");
    break;
}

document.write(`
ACESSO LIBERADO.
Ola ${nome} sua idade é ${idade} o Seu serviço custou ${valor}`)
