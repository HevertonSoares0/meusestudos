/*
Leia 2 valores de ponto flutuante de dupla precisão A e B, que correspondem a 2 notas de um aluno.
A seguir, calcule a média do aluno, sabendo que a nota A tem peso 3.5 e a nota B tem peso 7.5 (A soma dos pesos portanto é 11).
Assuma que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal.
Entrada

O arquivo de entrada contém 2 valores com uma casa decimal cada um.
Saída

Imprima a mensagem "MEDIA" e a média do aluno conforme exemplo abaixo, com 5 dígitos após o ponto decimal e com um espaço em branco antes e depois da igualdade.
Utilize variáveis de dupla precisão (double) e como todos os problemas, não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error" */

var input = require("readline-sync");

var nota1 = parseFloat(input.question());
var nota2 = parseFloat(input.question());

var med = ((nota1*3.5) + (nota2*7.5))/11

console.log("MEDIA = " + med.toFixed(5))

/*Solução beecrowd abaixo

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var nota1 = parseFloat(lines.shift());
var nota2 = parseFloat(lines.shift());

var med = ((nota1*3.5) + (nota2*7.5))/11

console.log("MEDIA = " + med.toFixed(5))*/
