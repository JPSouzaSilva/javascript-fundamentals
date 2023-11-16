/* 
Crie uma função que recebe como argumento o nome de um aluno.
Verifique se o aluno está presente na lista e retorne a média final que se encontra no mesmo índice.
Caso o nome do aluno não esteja na lista, retorne uma mensagem indicando que o aluno não foi encontrado.
*/

const listaDuasDimensoes = [["João", "Juliana", "Caio", "Ana"], [10, 8, 7.5, 9]]

const procurando = (aluno) => {
    if (listaDuasDimensoes[0].includes(aluno)) { // Ve se tem na lista, retorna true ou false
        const index = listaDuasDimensoes[0].indexOf(aluno); // pega o index de onde está "aluno"
        return `A media de ${aluno} foi ${listaDuasDimensoes[1][index]}`;
    } else {
        return `O ${aluno} não foi cadastrado`;
    }
}

const outraForma = (aluno) => {
    const [alunos, media] = listaDuasDimensoes;
    if (alunos.includes(aluno)) {
        const index = alunos.indexOf(aluno);
        const mediaAluno = media[index];
        return `A media de ${aluno} foi de ${mediaAluno}`;
    } else {
        return `${aluno} não foi cadastrado`;
    }
}
console.log(procurando("Juliana"))
console.log(procurando("Pedro"));

console.log(outraForma("Juliana"));
console.log(outraForma("Pedro"));