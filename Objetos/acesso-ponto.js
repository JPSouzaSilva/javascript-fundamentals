const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "11232456",
    email: "andre@email.com",
};

console.log(`O nome do cliente é ${cliente.nome} e ele tem ${cliente.idade} anos`);

console.log(`Os 3 primeiros digitos do cpf são ${cliente.cpf.substring(0, 3)}`)