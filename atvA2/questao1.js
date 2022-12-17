/*
01) Implemente a função map abaixo e defina o(s) parâmetro(s) desta função de acordo com
sua chamada. Você deve utilizar a função reduce de classe Array para implementar a função
map. O teste vai funcionar se você implementar a função map adequadamente.
function map(//TODO) {
//TODO
};
function executaTeste() {
const array = [1, 2, 3, 4, 5];
const arrayTriplicado = map((num) => num * 3, array);
if (_.isEqual(arrayTriplicado, [3, 6, 9, 12, 15])) {
console.log('✓ Passou no teste!')
} else {
console.error('O teste falhou :(')
console.error('Resultado atual:');
console.error(arrayTriplicado);
console.error('Resultado esperado:');
console.error([3, 6, 9, 12, 15]);
}
}
executaTeste();
*/

var _ = require('underscore');

function map(fn, arr) {
  return arr.reduce((agg, item) => {
    agg.push(fn(item)); // aqui a fn é: (num) => num * 3
    return agg;
  }, []);
};

function executaTeste() {
    const array = [1, 2, 3, 4, 5];
    const arrayTriplicado = map((num) => num * 3, array);
    if (_.isEqual(arrayTriplicado, [3, 6, 9, 12, 15])) {
        console.log('✓ Passou no teste!')
    } else {
        console.error('O teste falhou :(')
        console.error('Resultado atual:');
        console.error(arrayTriplicado);
        console.error('Resultado esperado:');
        console.error([3, 6, 9, 12, 15]);
    }
}
executaTeste();