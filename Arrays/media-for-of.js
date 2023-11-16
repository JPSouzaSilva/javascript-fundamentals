const notas = [10, 6.5, 7.5, 8];

let somador = 0;
for (let nota of notas) {
   somador += nota; 
}
const media = somador / notas.length;
console.log(media);