const listaDuasDimensoes = [["João", "Juliana", "Caio", "Ana"], [10, 8, 7.5, 9]]
/* 
    Ou da para fazer assim:
    const lista1 = ["João", "Juliana", "Caio", "Ana"]
    const lista2 = [10, 8, 7.5, 9]
    const listaDuasDimensoes = [lista1, lista2]
*/
console.log(listaDuasDimensoes);
for (let i = 0; i < listaDuasDimensoes[0].length; i++) {
    console.log(`O ${listaDuasDimensoes[0][i]} possui nota ${listaDuasDimensoes[1][i]}`);
}