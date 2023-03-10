/**
 * 

Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido da mensagem “eh o maior”. Utilize a fórmula:

Obs.: a fórmula apenas calcula o maior entre os dois primeiros (a e b). Um segundo passo, portanto é necessário para chegar no resultado esperado.
Entrada

O arquivo de entrada contém três valores inteiros.
Saída

Imprima o maior dos três valores seguido por um espaço e a mensagem "eh o maior".

 */

let input = require("readline-sync")

let line = input.question().split(" ");

let a = parseInt(line[0]);
let b = parseInt(line[1]);
let c = parseInt(line[2]);

console.log(line[0],line[1], line[2])

let maiorAb = parseInt((a + b + Math.abs(a - b)) / 2); // encontra o maior valor entre a e b
let maiorAbc = parseInt((maiorAb + c + Math.abs(maiorAb - c)) / 2); // encontra o maior valor entre o resultado anterior e c

console.log( maiorAbc);


//Soluc  beecrow
/**
 * var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let line = lines.shift().split(" ");

let a = parseInt(line[0]);
let b = parseInt(line[1]);
let c = parseInt(line[2]);


let maiorAb = parseInt((a + b + Math.abs(a - b)) / 2); // encontra o maior valor entre a e b
let maiorAbc = parseInt((maiorAb + c + Math.abs(maiorAb - c)) / 2); // encontra o maior valor entre o resultado anterior e c

console.log(maiorAbc + " eh o maior"); */

