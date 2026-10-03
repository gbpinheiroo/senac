class Funcionarios {
    constructor(nome, cargo, salario) {
        this.nome = nome
        this.cargo = cargo
        this.salario = salario
    }
    mostrarInfo() {
        console.log(`Func.: ${this.nome} --- Cargo: ${this.cargo} --- Salario R$${this.salario}`)
    }
    verificarSalario(){
        if(this.salario >= 3000){
            console.log(`Salário do ${this.nome} acima da referência R$${this.salario}`)
        }else{
            console.log(`Salário do ${this.nome} abaixo da referência R$${this.salario}`)
        }
    }
}


let funcJoao = 
new Funcionarios("Joao", "Analista", 1900)

let funcJorge = 
new Funcionarios("Jorge", "Coordenador", 3200 )

funcJorge.mostrarInfo()
funcJorge.verificarSalario()

funcJoao.mostrarInfo()
funcJoao.verificarSalario()

