// Remover Ana e Caio e adicionar o Rodrigo 

const nomes = ["João", "Ana", "Caio", "Lara", "Marjore", "Leo"];

nomes.splice(1, 2, "Rodrigo")
// nomes.splice(indice o qual quer fazer a alteracao,
// quantidade de indices que quer remover a partir do indice passado no primeiro parametro 
// (CUIDADO: o indice inicial ja conta!, caso for 0 não remove),
// coloca no lugar dos que foram removidos)

console.log(nomes); // [ 'João', 'Rodrigo', 'Lara', 'Marjore', 'Leo' ]