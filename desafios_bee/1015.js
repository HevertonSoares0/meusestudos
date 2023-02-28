/**
 * 

Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer no plano, p1(x1,y1) e p2(x2,y2) e calcule a distância entre eles, mostrando 4 casas decimais após a vírgula, segundo a fórmula:

Distancia =
Entrada

O arquivo de entrada contém duas linhas de dados. A primeira linha contém dois valores de ponto flutuante: x1 y1 e a segunda linha contém dois valores de ponto flutuante x2 y2.
Saída

Calcule e imprima o valor da distância segundo a fórmula fornecida, com 4 casas após o ponto decimal.

 */

const input = require("readline-sync");

let x = input.question().split(" ");
let y = input.question().split(" ");

let x1 = parseFloat(x[0]);
let x2 = parseFloat(x[1]);

let y1 = parseFloat(y[0]);
let y2 = parseFloat(y[1]);

let p1 = parseFloat((x1 - y1)**2)
let p2 = parseFloat((x2 - y2)**2)

let calc = parseFloat(p1 + p2);

calc = Math.sqrt(calc)


console.log(calc.toFixed(4))


/**
 * 
 Soluc beecrowd 
  
const input = require("readline-sync");

let x = lines.shift().split(" ");
let y = lines.shift().split(" ");

let x1 = parseFloat(x[0]);
let x2 = parseFloat(x[1]);

let y1 = parseFloat(y[0]);
let y2 = parseFloat(y[1]);

let p1 = parseFloat((x1 - y1)**2)
let p2 = parseFloat((x2 - y2)**2)

let calc = parseFloat(p1 + p2);

calc = Math.sqrt(calc)


console.log(calc.toFixed(4))

 */
