const escola = [
    ["Marcos", 9, 7, 8],
    ["Andre", 6, 8, 6],
    ["Tiago", 7, 6, 7],
    ["Fernanda", 8, 6, 7],
];

console.table(escola)

/*
for (let linha = 0; linha < escola.length; linha++) {
    for (let coluna = 0; coluna < escola[linha].length; coluna++) {
        console.log(escola[linha][coluna]);

    }


}
*/

function calculaMedia(n1, n2, n3){
    return (n1 + n2 + n3)/3
}

let calcular = 0;
for (let linhas = 0; linhas < escola.length; linhas++) {
    const verifica = escola[linhas];
    calcular = calculaMedia(escola[linhas][1],escola[linhas][2],escola[linhas][3])
    console.log(`essa é a media ${calcular}`)
}





