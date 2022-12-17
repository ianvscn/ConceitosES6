/*
05) Transforme as funções desenvolvidas na questão 04 para usarem a técnica async/await
ao invés de só usar promises.
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

(async () => {
    try {
        const LetrasInvertidasMinusculas = await inverteTodasLetras("nome");
        const LetrasMaiusculas = await colocarTodasLetrasEmMaiusculoEm500ms("nome");
    } catch (erro) {
        
        console.error(erro.message);
    }
})();