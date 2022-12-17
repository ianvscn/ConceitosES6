/*
02) Imprima os seguintes campos usando o operador de desestruturação: autor - CEP -
cidade (lat, lng). Imprima usando o recurso Template String.
Saída esperada: Demetrio Mestre - 581415-145 - Campina Grande (13.51, 52.54)
Código:
const usuario: any = {
"autor": "Demetrio Mestre",
"endereco": {
"rua": "Rua Qualquer",
"suite": "JS",
"cidade": "Campina Grande",
"CEP": "581415-145",
"geo": {
"lat": "13.51",
"lng": "52.54"
}
}
}
const resultado = `Coloque seu código aqui`;
console.log(resultado);
*/

const usuario/*: any*/ = {
    "autor": "Demetrio Mestre",
    "endereco": {
        "rua": "Rua Qualquer",
        "suite": "JS",
        "cidade": "Campina Grande",
        "CEP": "581415-145",
        "geo": {
        "lat": "13.51",
        "lng": "52.54"
        }
    }
}
const resultado = `${usuario.autor} - ${usuario.endereco.CEP} - ${usuario.endereco.cidade} (${usuario.endereco.geo.lat}, ${usuario.endereco.geo.lng})`;
console.log(resultado);  