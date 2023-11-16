const clientes = require("./clientes.json");

function filtrarApartamentosSemComplemento(lista) {
  return lista.filter((cliente) => {
    if (
      cliente.endereco.apartamento === true &&
      !cliente.endereco.hasOwnProperty("complemento") // ve se tem a propriedade 
    ) {
      return cliente;
    }
  });
}

console.log(filtrarApartamentosSemComplemento(clientes));
