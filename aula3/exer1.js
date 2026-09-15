                // 1. Monte um programa que receba uma idade e informar se pode ou não votar 
/*
let idade = Number(prompt("Qual sua idade?"));

if (idade >= 16) {
    alert("O eleitor tem " + idade + " anos e pode votar.")
}else{
    alert("O eleitor tem " + idade + " anos e não pode votar.")
}
*/



                // 2. Monte um programa para receba duas notas de um aluno, 
                //    calcular a média aritmética e informar se o aluno está aprovado ou não. 
                //    Para ser aprovado a média do aluno precisa ser maior ou igual a 6
/*
let nota1 = Number(prompt("Qual a nota 1?"));
let nota2 = Number(prompt("Qual a nota 2?"));

let media = (nota1 + nota2) / 2;
let recupera = media - 6;

if (media >= 6) {
  alert("Sua media foi " + media + " Voce esta: APROVADO");
} else {
  alert(
    "Sua media foi " +
      media +
      " Voce esta: REPROVADO. voce precisa de " +
      recupera +
      " para ser aprovado"
  );
}
*/


                // 3. Monte um programa que receba o valor de uma camisa 
                //    e calcular o desconto desta camisa de 8%.
                //    Informar ao final o valor a ser pago pela camisa.
/*
let valCamisa = Number(prompt("Qual o preço da camisa?"))
let valDesconto = (valCamisa * 0.08)

let valFinal = (valCamisa - valDesconto)
alert("O valor da camisa é: R$" + valFinal );
*/


                // 4. Monte um programa que receba o salário de um funcionário,
                //    calcular o vale transporte a ser descontado (6%)
/*
let holerite = Number(prompt("Qual o salário de um funcionário?"))
let valeTransporte = (holerite * 0.06)

alert("O valor descontado para o vale Transporte é R$" + valeTransporte) 
*/


                // 5. Monte um programa que receba um valor qualquer e informe se o valor é maior do que 10.
                //    Caso o valor não seja, informe ‘valor menor ou igual’ 
/*
let valRandom = Number(prompt("Digite um valor"))

if(valRandom > 10 ){
    alert("O valor é maior que 10")
}else if(valRandom == 10 ){
    alert("O valor igual a 10")
}else{
    alert("O valor é menor que 10")
}
*/

                // 6. Monte um programa que receba um valor e verificar se esse valor é um número par ou ímpar 

let valor = Number(prompt("Digite um numero"));

if (valor % 2 == 0){
    document.write("O valor é par")
}else{
    document.write("O valor é impar")
}
