const cliente = {
  nome: "João",
  idade: "26",
  email: "joao@firma.com",
  telefone: ["559876789", "559832119"],
};

cliente.enderecos = [
  {
    rua: "Rua Ministro de Oliveira Lima",
    numero: 305,
    apartamento: true,
    complemento: "ap 934",
  },
];

cliente.enderecos.push({
  rua: "Rua Feliz",
  numero: 123,
  apartamento: false,
  complemento: "casa",
});

// console.log(cliente.enderecos);

const somenteApartamentos = cliente.enderecos.filter((endereco) => {
  return endereco.apartamento === true;
});

console.log(somenteApartamentos);
