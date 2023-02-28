/**
 Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e mostre:
a) a área do triângulo retângulo que tem A por base e C por altura.
b) a área do círculo de raio C. (pi = 3.14159)
c) a área do trapézio que tem A e B por bases e C por altura.
d) a área do quadrado que tem lado B.
e) a área do retângulo que tem lados A e B.
Entrada

O arquivo de entrada contém três valores com um dígito após o ponto decimal.
Saída

O arquivo de saída deverá conter 5 linhas de dados. Cada linha corresponde a uma das áreas descritas acima, sempre com mensagem correspondente e um espaço entre os dois pontos e o valor. O valor calculado deve ser apresentado com 3 dígitos após o ponto decimal.

 */

const input = require("readline-sync")

let linha = input.question().split(" ");

let a = parseFloat(linha[0]);
let b = parseFloat(linha[1]);
let c = parseFloat(linha[2]);

let triang = (a*c)/2 //a área do triângulo retângulo que tem A por base e C por altura.

let circ = 3.14159*c**2 //a área do círculo de raio C. (pi = 3.14159)

let trap = ((a+b)*c)/2 //a área do trapézio que tem A e B por bases e C por altura.

let quad = b**2 //  a área do quadrado que tem lado B.

let ret = a*b




console.log("TRIANGULO: " + triang.toFixed(3));
console.log("CIRCULO: " + circ.toFixed(3));
console.log("TRAPEZIO: " + trap.toFixed(3));
console.log("QUADRADO: " + quad.toFixed(3));
console.log("RETANGULO: " + ret.toFixed(3));









console.log(linha)


