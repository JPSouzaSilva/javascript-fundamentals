function myFunction(param) {
  console.log(param);
}

myFunction("param");

// expressao de funcao
console.log(soma(1, 2)); // erro pelo falto de associar uma uma funcao a uma constante que não pode ser lida antes de ser inicializada.
const soma = function(num1, num2) {
  return num1 + num2;
}

console.log(apresentar()); // aqui não daria erro por ser uma function padrão.
function apresentar() {
  return "Olá"
}