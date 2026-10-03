let aluno ={
    nome: "Usuario",
    idade: 19,
    matricula: "MAT202601",
    notas:[2,10,7,9],

    verificaSituacao: function () {
    let soma = 0;
        for (let i = 0; i < this.notas.length; i++) {
            soma += this.notas[i]
            
        }if((soma/4)>=7){
            return "APROVADO"
        }else{
            return "REPROVADO"
        }

        
    }
}

console.log(aluno.nome)

console.table(aluno)

