const cliente = {
  nome: "João",
  idade: "26",
  email: "joao@firma.com",
  telefone: ["559876789", "559832119"],
  endereco: [
    {
      rua: "Rua Ministro de Oliveira Lima",
      numero: 305,
      apartamento: true,
      complemento: "ap 934",
    },
  ],
};

for (let chave in cliente) {
  let tipo = typeof cliente[chave];
  if (tipo !== "object" && tipo !== "function") {
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
  }
}
