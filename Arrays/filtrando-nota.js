const nomes = ["Ana", "Marcos", "Maria", "Mauro"];
const notas = [7, 4.5, 8, 7.5]

const reprovados = nomes.filter((_, index) => { // bota "_", porque não vai utilizar daquele parametro
    return notas[index] < 7;
})

console.log(reprovados);

// .filter() retorna um novo array, baseado na condição passada na função callback
