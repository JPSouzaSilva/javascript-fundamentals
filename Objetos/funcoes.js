const cliente = {
  nome: "João",
  idade: "26",
  email: "joao@firma.com",
  telefone: ["559876789", "559832119"],
  saldo: 200,
  efetuaPagamento: function (valor) {
    if (valor > this.saldo) {
      return console.log("Saldo Insuficiente");
    } else {
      this.saldo -= valor;
      console.log(`Pagamento realizado, saldo atualizado: ${this.saldo}`);
    }
  },
  //  Outra forma de fazer:
  //   efetuaPagamento: (valor) => {
  //     if (valor > cliente.saldo) {
  //       return console.log("Saldo Insuficiente");
  //     } else {
  //       cliente.saldo -= valor;
  //       console.log(`Pagamento realizado, saldo atualizado: ${cliente.saldo}`);
  //     }
};

cliente.efetuaPagamento(250);
cliente.efetuaPagamento(150);
