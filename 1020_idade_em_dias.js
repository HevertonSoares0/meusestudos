/*
Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias

Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias. Nos casos de teste nunca haverá uma situação que permite 12 meses e alguns dias, como 360, 363 ou 364.
Este é apenas um exercício com objetivo de testar raciocínio matemático simples.
Entrada

O arquivo de entrada contém um valor inteiro.
Saída

Imprima a saída conforme exemplo fornecido.
1ano = 365
1m = 30
 */

let input = require("readline-sync");

const ano = 365;
const mes = 30;
const dia = 24; // 24h

let idade = parseInt(input.question("Idade = ")); // Lê a idade da pessoa em dias.

let idade_ano = parseInt(idade / ano);
idade = idade % ano; 

let idade_mes = parseInt(idade / mes);
idade = idade % mes;

let idade_dia = (idade / dia)*dia; 


console.log(idade_ano + " ano(s)");
console.log(idade_mes + " mes(es)");
console.log(idade_dia + " dia(s)");


/**BeeCrowd Solution
 * 
 var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var ano = 365;
var mes = 30;
var dia = 24; // 24h

var idade = parseInt(lines.shift("Idade = ")); // Lê a idade da pessoa em dias.

var idade_ano = parseInt(idade / ano);
idade = idade % ano;

var idade_mes = parseInt(idade / mes);
idade = idade % mes;

var idade_dia = (idade / dia)*dia;


console.log(idade_ano + " ano(s)");
console.log(idade_mes + " mes(es)");
console.log(idade_dia + " dia(s)");
 * 
 * 
 */

