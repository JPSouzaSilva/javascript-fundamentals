// Conversão implicita 
const numero = 456;
const numeroString = "456";

console.log(numero == numeroString);
console.log(numero + numeroString);

// Conversão explicita

console.log(numero === Number(numeroString)); // converteu string para number

console.log(String(numero) === numeroString); // converteu number para string
console.log(numero.toString() === numeroString); // converteu number para string

console.log(Number("NaN_Example")); // Não conseguiu converter por não contente algarismos (NaN)

let usuarioConectado = false;
console.log(String(usuarioConectado)); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
usuarioConectado = true;
console.log(String(usuarioConectado)); // agora teremos uma string “true”.