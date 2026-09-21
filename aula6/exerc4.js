const presente = true;
const matriculaAtiva = true;
const pendencia = true;

let msg = `ALUNO INICIA PROVA`

if(presente && matriculaAtiva && !pendencia){
    msg = `ALUNO NÃO PODE A INICIAR PROVA`
}
console.log(msg)