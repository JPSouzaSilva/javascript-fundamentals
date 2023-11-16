const notas = [10, 6.5, 7.5, 8];

let somador = 0;
for (let i = 0; i < notas.length; i++) {
    somador += notas[i];
}

const media = somador / notas.length;
console.log(media);