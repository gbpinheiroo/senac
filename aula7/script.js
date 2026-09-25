let numChamado = 20;

for (let i = 1; i <= numChamado; i++) {
    let msg = `Chamado ${i} Analise Normal`
    if (i % 4 === 0) {
        msg = `Chamado ${i} Revisão adicional`
    }
    console.log(msg)
}

