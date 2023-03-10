/**

Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2.
Após, calcule e mostre o valor a ser pago.
Entrada

O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, respectivamente dois inteiros e um valor com 2 casas decimais.
Saída

A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, lembrando de deixar um espaço após os dois pontos e um espaço após o "R$". O valor deverá ser apresentado com 2 casas após o ponto.
 */
const input = require("readline-sync")

var linha1 = input.question().split(" ") // Sempre após o espaço será inserido um item no array.
var linha2 = input.question().split(" ")// Sempre após o espaço será inserido um item no array.

var cod_peca = Number(linha1[0])
var qnt_peca = Number(linha1[1])
var valor_peca = parseFloat(linha1[2])


var cod_peca2 = Number(linha2[0])
var qnt_peca2 = Number(linha2[1])
var valor_peca2 = parseFloat(linha2[2])



var resultado = parseFloat((qnt_peca*valor_peca) + (qnt_peca2*valor_peca2));

console.log("VALOR A PAGAR: R$ " + resultado.toFixed(2))

/**Solucão beecrowd

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var linha1 = lines.shift().split(" ")
var linha2 = lines.shift().split(" ")

var cod_peca = Number(linha1[0])
var qnt_peca = Number(linha1[1])
var valor_peca = parseFloat(linha1[2])


var cod_peca2 = Number(linha2[0])
var qnt_peca2 = Number(linha2[1])
var valor_peca2 = parseFloat(linha2[2])



var resultado = parseFloat((qnt_peca*valor_peca) + (qnt_peca2*valor_peca2));

console.log("VALOR A PAGAR: R$ " + resultado.toFixed(2))
*/