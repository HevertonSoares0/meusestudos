/*
Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.
Entrada

O arquivo de entrada contém um valor inteiro N.
Saída

Imprima o tempo lido no arquivo de entrada (segundos), convertido para horas:minutos:segundos, conforme exemplo fornecido.
1h = 3600s
*/

var input = require('readline-sync')

// le o valor inteiro
let n = parseInt(input.question("Segundos "));

let horas = parseInt(n/3600) // pega os segundos e didvide por 3600s que é = a 1h
let minutos = parseInt((n%3600)/60) // pega o resto da divisão de N por 3600 e divide por 60minutos, caso 
let segundos = parseInt((n%3600) % 60) // resto da divisão pelo

console.log(`${horas}:${minutos}:${segundos}`)


/* Beecrowd
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// le o valor inteiro
let n = parseInt(lines.shift("Segundos "));

let horas = parseInt(n/3600) // pega os segundos e didvide por 3600s que é = a 1h
let minutos = parseInt((n%3600)/60) // pega o resto da divisão de N por 3600 e divide por 60minutos, caso 
let segundos = parseInt((n%3600) % 60) // resto da divisão pelo

console.log(`${horas}:${minutos}:${segundos}`)
*/