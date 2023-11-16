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

const chaves_objeto = Object.keys(cliente);

console.log(chaves_objeto);

if (!chaves_objeto.includes("endereco")) {
  console.error("Erro, é necessario ter um endeço cadastrado");
}
