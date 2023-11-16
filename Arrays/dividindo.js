const alunos = [
  "João",
  "Juliana",
  "Ana",
  "Caio",
  "Lara",
  "Marjorie",
  "Guilherme",
  "Aline",
  "Fabiana",
  "Andre",
  "Carlos",
  "Paulo",
  "Bia",
  "Vivian",
  "Isabela",
  "Vinícius",
  "Renan",
  "Renata",
  "Daisy",
  "Camilo",
];

const sala1 = alunos.slice(0, alunos.length / 2); // Do indice 0 até a metade ou indice 9 do array
const sala2 = alunos.slice(alunos.length / 10); // A partir do indice 10 ou metade até o final do array

console.log(sala1);
console.log(sala2);
