let idade = Number(prompt('informe a idade'));
        // COM TERNARIO
let msg = (idade<16) ? "não pode votar" : "pode votar";
document.write(msg);
console.log(msg);

        // COM O IF
/*if (idade<16){
    document.write("não pode votar");
} else {
    document.write("pode votar");
};*/