/*
04) Escreva duas funções arrow usando a técnica de promises (Javascript ES6). A primeira
função, colocarTodasLetrasEmMaiusculoEm500ms, receberá um único parâmetro e o
colocará em maiúsculo depois de 500 milisegundos. Verifique, dentro da função, se o
parâmetro se trata de um tipo String. Se o parâmetro não for do tipo String, a promise deve
rejeitar o parâmetro. A segunda função, inverteTodasLetras(), realizará uma
*/

const colocarTodasLetrasEmMaiusculoEm500ms = entrada => {
    if(typeof entrada == "string"){
        return setTimeout(function(){console.log(entrada.toUpperCase());}, 500);
    }else{
        return console.log('parâmetro rejeitado');
    }
}

function inverteTodasLetras(str) {
    return console.log(str.split("").reverse().join(""));
}

Promise.resolve(2)
    .then(colocarTodasLetrasEmMaiusculoEm500ms("nome"))
    .then(inverteTodasLetras("nome"));