const cliente = {
    nome: "João",
    idade: "26",
    email: "joao@firma.com",
    telefone: ["559876789", "559832119"],
};

cliente.endereco = {
    rua: "Rua Ministro de Oliveira Lima",
    numero: 305,
    apartamento: true,
    complemento: "ap 934"
}

console.log(cliente.endereco.rua)