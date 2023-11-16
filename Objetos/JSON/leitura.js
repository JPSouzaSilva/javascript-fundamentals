const dados = require("./cliente.json");

console.log(dados);
console.log(typeof dados);
console.log(`Nome em dados: ${dados.nome}`);
console.log(`Email em dados: ${dados.email}`);

/* 
    Esta função require(), nos permitiu passar o caminho de um arquivo terminado em .json 
    para obter o conteúdo de um arquivo do tipo JSON. Em cursos posteriores, 
    iremos ver que essa função também pode ser utilizada para reaproveitar códigos que 
    estão em outros arquivos, também chamados de módulos.

*/

const clienteEmString = JSON.stringify(dados); // Transforma Object em String
console.log(clienteEmString);
console.log(typeof clienteEmString);
console.log(clienteEmString.nome); // undefined porque não é mais um objeto, e sim uma string

const objetoCliente = JSON.parse(clienteEmString); // Transforma String em Object
console.log(objetoCliente);
console.log(typeof objetoCliente);
