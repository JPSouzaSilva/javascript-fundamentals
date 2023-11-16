const salaJS = ["Evaldo", "Camis", "Mari"];
const salaPython = ["Ju",  "Leo", "Raquel"];

const salasJuntas = salaJS.concat(salaPython); 
console.log(salasJuntas);

// Lembrando: O .concat() não altera o array no qual foi chamado, então precisamos salvar 
// esse resultado em um novo array.