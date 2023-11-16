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

const ligaCliente = (telefone_comercial, telefone_residencial) => {
  console.log(`Ligando para ${telefone_comercial}`);
  console.log(`Ligando para ${telefone_residencial}`);
};

// ligaCliente(cliente.telefone[0], cliente.telefone[1]);
ligaCliente(...cliente.telefone);

// Devolve tudo em um objeto só

/*
    const encomendaBruto = {
    destinario: cliente.nome,
    rua: cliente.endereco[0].rua,
    numero: cliente.endereco[0].numero,
    apartamento: cliente.endereco[0].apartamento,
    complemento: cliente.endereco[0].complemento,
    };

    Essa seria a forma mais bruta de fazer
*/

const encomenda = {
  destinario: cliente.nome,
  ...cliente.endereco[0],
};

console.log(encomenda);

const fichaGuerreiro = {
  nome: "Aragorn",
  classe: "Guerreiro",
};

const equipamentosGuerreiro = {
  espada: "Excalibur",
  capa: "Manto Sagrado",
};

const guerreiro = { ...fichaGuerreiro, ...equipamentosGuerreiro };

console.log(guerreiro);

const pessoa = {
  nome: "Pessoa 1",
  idade: 10,
};

const copiaPessoa = {
  ...pessoa,
};

copiaPessoa.nome = "Pessoa 2";

console.log(pessoa, copiaPessoa);
