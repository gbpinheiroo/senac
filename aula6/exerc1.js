let idadePessoa = 20
let carteiraPessoal = 30

let filme = "Avatar"
let classificaFilme = 16
let valorIngresso = 30

let autoriza = false
let msg = `Saldo insulficiente para ver ${filme}`

if(idadePessoa >= classificaFilme && carteiraPessoal >= valorIngresso){
    autoriza = true;
    msg = `Voce pode ver o ${filme}`
}
document.write(msg)

