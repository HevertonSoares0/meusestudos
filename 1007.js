/* 
Leia quatro valores inteiros A, B, C e D. A seguir, calcule e mostre a diferença do produto de A e B pelo produto de C e D segundo a fórmula: DIFERENCA = (A * B - C * D).
Entrada

O arquivo de entrada contém 4 valores inteiros.
Saída

Imprima a mensagem DIFERENCA com todas as letras maiúsculas, conforme exemplo abaixo, com um espaço em branco antes e depois da igualdade.
*/

var input = require("readline-sync")

var A =Number(input.question())
    B = Number(input.question())
    C = Number(input.question())
    D = Number(input.question())


var diff = (A*B - C*D)

console.log("DIFERENCA = " + diff)
