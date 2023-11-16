/* 
  concat()
  
  Junta dois arrays, colocando o array passado como argumento, logo depois do primeiro.
  Não altera o array no qual foi chamado, então precisamos salvar esse resultado em um novo array.
*/
const first_array = [1, 2, 3];
const second_array = [4, 5, 6]
const new_array = first_array.concat(second_array);
console.log("concat()");
console.log(new_array);
console.log("---------------------");

/* 
  filter()
  
  Retorna uma lista contando todos os elementos que passaram em um teste, ou seja, uma função escrita por nós.
  Não altera o array onde foi chamado, então precisamos salvar esse resultado em um novo array.
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const pair_numbers = numbers.filter((number) => {
  return number % 2 === 0;
})
console.log("filter()");
console.log(pair_numbers);
console.log("---------------------");

/* 
  find() 
  
  Funciona de forma parecida com o filter, porém RETORNA APENAS O PRIMEIRO valor que satisfizer o 
  teste, podendo ser uma string ou um número. 
*/
console.log("find()");
const find_array_example = [1, 3, 5, 6, 7, 9, 10]
const find_example = find_array_example.find((number) => {
  return number % 2 === 0
})
console.log(find_example);
console.log("---------------------");

/* 
  findIndex()

  Funciona igual o find(), mas retorna o índice em vez do elemento, possibilitando usá-lo 
  em outras partes do código.
*/
console.log("findIndex()");
const findIndex_array_example = [1, 3, 5, 6, 7, 9, 10];
const findIndex_example = findIndex_array_example.findIndex((number) => {
  return number % 2 === 0;
})
console.log(findIndex_example);
console.log("---------------------");

/* 
  lastIndexOf()

  É igual o findIndex() porém começa do último elemento, não no primeiro.
*/
console.log("lastIndexOf()");
const frutas = ["maçã", "banana", "morango", "maçã", "pera", "uva"];
const últimoÍndiceMaçã = frutas.lastIndexOf("maçã");
console.log(últimoÍndiceMaçã); // 3 (índice da última ocorrência de "maçã")
console.log("---------------------");

/* 
  forEach()

  Executa uma função em cada elemento do array de forma individual.
  
  Não altera o array original e nem retorna um valor, deixando esse trabalho a cargo da função 
  escolhida.
*/
console.log("forEach()");
const fruts = ["maçã", "banana", "morango"];
const forEachFruts = fruts.forEach((fruts) => {
  console.log(fruts);
})
console.log("---------------------");

/* 
reduce()
Utiliza uma função definida pelo usuário em cada um dos elementos, guardando o resultado em uma variável que pode ser acessada dentro da função que foi definida, retornando um único valor no final, reduzindo o array para um único valor.

reduceRight()
Funciona igual o reduce() porém começa do final do array e segue até o início.

reverse()
Inverte a ordem dos elementos do array, então o primeiro vira o último, o segundo o penúltimo e assim por diante.

slice()
Copia uma parte do array para outro array.

sort()
Organiza o array de acordo com a classificação Unicode, onde os números vêm antes das letras, porém não funciona corretamente para números, onde temos que definir uma função que irá auxiliar o comando.

splice()
Consegue remover, um ou mais elementos consecutivos caso o segundo parâmetro tenha um valor maior que 0, e incluir um ou mais elementos a partir de um índice escolhido.
*/