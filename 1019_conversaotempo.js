/*
Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.
Entrada

O arquivo de entrada contém um valor inteiro N.
Saída

Imprima o tempo lido no arquivo de entrada (segundos), convertido para horas:minutos:segundos, conforme exemplo fornecido.
1h = 3600s
*/

const input = require("readline-sync");

// le o valor inteiro
let n = parseInt(input.question("Segundos "));

let horas = n/3600
let minutos = (horas%60)*60
let segundos = minutos/60



console.log(horas);
console.log(minutos);
console.log(segundos);

