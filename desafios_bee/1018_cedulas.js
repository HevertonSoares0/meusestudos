/**

Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1.
A seguir mostre o valor lido e a relação de notas necessárias.
Entrada

O arquivo de entrada contém um valor inteiro N (0 < N < 1000000).
Saída

Imprima o valor lido e, em seguida, a quantidade mínima de notas de cada tipo necessárias, conforme o exemplo fornecido. Não esqueça de imprimir o fim de linha após cada linha, caso contrário seu programa apresentará a mensagem: “Presentation Error”.

 */



const input = require("readline-sync");

let valor = input.question("Valor - > "); //pegao valor desejado

//notas 100, 50, 20, 10, 5, 2 e 1.

var result100 =  Math.trunc(valor / 100); //Divide o valor por 100 notas e o resultado é a quantidade notas possiveis que o valor poderia ser quebrado
var resto = valor % 100; // Calcula o resto para utilizarna proxima validação

var result50 = Math.trunc(resto / 50);
var resto = resto % 50;

var result20 = Math.trunc(resto / 20);
var resto = resto % 20;

var result10 = Math.trunc(resto / 10);
var resto = resto % 10;

var result5 = Math.trunc(resto / 5);
var resto = resto % 5;

var result2 = Math.trunc(resto / 2);
var resto = resto % 2;

var result1 = Math.trunc(resto / 1);
var resto = resto % 1;

console.log(valor)
console.log(result100 + " nota(s) de R$ 100,00")
console.log(result50 + " nota(s) de R$ 50,00")
console.log(result20 + " nota(s) de R$ 20,00")
console.log(result10 + " nota(s) de R$ 10,00")
console.log(result5 + " nota(s) de R$ 5,00")
console.log(result2 + " nota(s) de R$ 2,00")
console.log(result1 + " nota(s) de R$ 1,00")

/*Soluc beecrowd


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var valor = parseInt(lines.shift()); //pegao valor desejado
var result100 =  Math.trunc(valor/100); 
var resto = valor%100;
var result50 = Math.trunc(resto/50);
var resto = resto%50;
var result20 = Math.trunc(resto/20);
var resto = resto%20;
var result10 = Math.trunc(resto/10);
var resto = resto%10;
var result5 = Math.trunc(resto/5);
var resto = resto%5;
var result2 = Math.trunc(resto/2);
var resto = resto%2;
var result1 = Math.trunc(resto/1);
var resto = resto%1;

console.log(valor);
console.log(result100 + " nota(s) de R$ 100,00");
console.log(result50 + " nota(s) de R$ 50,00");
console.log(result20 + " nota(s) de R$ 20,00");
console.log(result10 + " nota(s) de R$ 10,00");
console.log(result5 + " nota(s) de R$ 5,00");
console.log(result2 + " nota(s) de R$ 2,00");
console.log(result1 + " nota(s) de R$ 1,00");

*/