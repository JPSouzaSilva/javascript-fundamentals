const clientes = require("./clientes.json");

function encontrar(lista, chave, valor) {
  return lista.find((item) => {
    return item[chave].includes(valor);
  });
}

// item são todos os objetos da lista, ai procura em todos os objetos da lista por aquela chave
// passada por parametro e caso aquela chave incluir(mesma coisa que .equals() to Java)
// o valor passado por parametro retorna ele.

const encontrados = encontrar(clientes, "nome", "Kirby");
console.log(encontrados);

