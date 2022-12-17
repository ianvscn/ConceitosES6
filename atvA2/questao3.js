/*
03) Escreva uma função arrow que recebe um valor de X e imprima a soma dos 5 pares
consecutivos a partir de X, inclusive o X, se for par. Se o valor de entrada for 4, por exemplo,
a saída deve ser 40, que é o resultado da operação: 4+6+8+10+12, enquanto que se o valor de
entrada for 11, por exempo, a saída deve ser 80, que é a soma de 12+14+16+18+20. Atenção:
Você deve usar uma função de callback para realizar o somatório.
Entrada
O valor de X.
Saída
Imprima a saida conforme a explicação acima e o exemplo abaixo.
Entrada: 4 => Saída: 40
Entrada: 11 => Saída: 80
*/

const somaPares = x => {
    var num = parseInt(x);
    var soma = 0;
    for(var i=num; i<num+10; i++){
        if(i%2==0){
            soma+=i;
        }
    } 
    return 'Entrada: '+ num + ' => Saída: '+soma;
}
console.log(somaPares(4));