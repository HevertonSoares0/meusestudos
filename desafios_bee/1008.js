/*
Escreva um programa que leia o número de um funcionário, seu número de horas trabalhadas, o valor que recebe por hora e calcula o salário desse funcionário.
 A seguir, mostre o número e o salário do funcionário, com duas casas decimais.
Entrada

O arquivo de entrada contém 2 números inteiros e 1 número com duas casas decimais,
representando o número, quantidade de horas trabalhadas e o valor que o funcionário recebe por hora trabalhada, respectivamente.
Saída

Imprima o número e o salário do funcionário, conforme exemplo fornecido, com um espaço em branco antes e depois da igualdade. 
No caso do salário, também deve haver um espaço em branco após o $.
 */

var input = require("readline-sync")

let num = Number(input.question("Numero -> "))
let hours = Number(input.question("Horas -> "))
let sal_hour = Number(input.question("Valor/hora -> "))

let salario_mes = hours*sal_hour

console.log(`NUMBER = ${num}`)
console.log(`SALARY = U$ ${salario_mes.toFixed(2)}`)

//soluc beecrow abaixo

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let numm = Number(lines.shift("Numero -> "))
let hoursm= Number(lines.shift("Horas -> "))
let sal_hourm = Number(lines.shift("Valor/hora -> "))

let salario_mesm = hours*sal_hour

console.log(`NUMBER = ${num}`)
console.log(`SALARY = U$ ${salario_mes.toFixed(2)}`)