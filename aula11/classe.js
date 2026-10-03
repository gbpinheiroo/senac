class Aluno {
    constructor(nome, idade, notas, matricula, situacao) {
        this.nome = nome
        this.idade = idade
        this.notas = notas
        this.matricula = matricula
        this.situacao = situacao

    }
    verificarSituacao(){
        let soma = 0;
        for (let i = 0; i < this.notas.length; i++) {
            soma += this.notas[i]
        }
        if ((soma / 4) >= 7) {
            this.situacao = "APROVADO"
        } else {
            this.situacao = "REPROVADO"
        }
    }
    mostrarInformacoes(){
        if (this.situacao === undefined) {
            this.verificarSituacao()
        } 

        console.log(`${this.situacao}`)
    }
}

let aluno = new Aluno("Gabriel", 29, [9, 8, 7, 6], "MAT2026Senac")

aluno.mostrarInformacoes()
