/*
Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.
Entrada
O arquivo de entrada contém um valor inteiro N.
Saída
Imprima o tempo lido no arquivo de entrada (segundos), convertido para horas:minutos:segundos, conforme exemplo fornecido.
1h = 3600
*/

const input = require("readline-sync");

let segundos = parseInt(input.question("Segundos "));

let minutos = segundos*60;
console.log(minutos);

let horas = minutos/60;
console.log("teste")
