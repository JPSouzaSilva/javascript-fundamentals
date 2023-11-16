function apresentar(nome) {
  return `Meu nome é ${nome}`
}

const apresentarArrow = nome => `Meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;
console.log(apresentarArrow("João"));
console.log(soma(1,2));

const somaNumeroPequenos = (num1, num2) => {
  if (num1 >= 10 || num2 >= 10) {
    return "Somente numeros de 1 a 9"
  } else {
    return num1 + num2
  }
}
console.log(somaNumeroPequenos(11,2));