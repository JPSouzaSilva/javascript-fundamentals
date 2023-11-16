const usuarioLogado = true;
const contaPaga = false;

// truthy or falsy

// 0 => false
// 1 => true

console.log(0 == false); // true
console.log(1 == true); // true
console.log("" == false); // true
console.log(null == false); // false
console.log(undefined == false); // false

let minhaVar; // undefined
let varNull = null; // null => vazio ou nada
console.log(typeof minhaVar);
console.log(typeof varNull);

// null foi criado no javascript como objeto