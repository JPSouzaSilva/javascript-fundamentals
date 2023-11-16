// Adicionar 1 ponto em todas as notas do array

const notas = [10, 9.5, 8, 7, 6];

/*
    notas.forEach((nota, index) => {
        return notas[index] + 1 > 10 ? notas[index] = 10 : notas[index] = nota + 1;
    })

    console.log(notas);  
*/

const notas_atualizadas = notas.map((nota) => {
    return nota + 1 > 10 ? nota = 10 : nota + 1;
})

console.log(notas_atualizadas);

// O .map() é adequado para quando queremos "reescrever" os valores de um array,
//  sem modificar o array original. Um novo array é criado com os valores reescritos.