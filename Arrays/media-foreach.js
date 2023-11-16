const notas = [10, 6.5, 7.5, 8];

let somador = 0;

notas.forEach((nota, index) => {
    somador += nota;
    console.log(`A nota ${nota} está no indice ${index}`);
})

const media = somador / notas.length;
console.log(media);