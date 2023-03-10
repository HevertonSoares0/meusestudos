/**
 * 

Joaozinho quer calcular e mostrar a quantidade de litros de combustível gastos em uma viagem, ao utilizar um automóvel que faz 12 KM/L. 
Para isso, ele gostaria que você o auxiliasse através de um simples programa. Para efetuar o cálculo, deve-se fornecer o tempo gasto na viagem (em horas) e a velocidade média durante a mesma (em km/h).
Assim, pode-se obter distância percorrida e, em seguida, calcular quantos litros seriam necessários. Mostre o valor com 3 casas decimais após o ponto.
Entrada

O arquivo de entrada contém dois inteiros. O primeiro é o tempo gasto na viagem (em horas) e o segundo é a velocidade média durante a mesma (em km/h).
Saída

Imprima a quantidade de litros necessária para realizar a viagem, com três dígitos após o ponto decimal

veiculo faz 12km/L

quanto litros foram gastos na viagem 

gasto =  tempo * velocidade /12

 */

const input = require("readline-sync");

var tempo =parseInt(input.question("time ")) ;
var velo = parseInt(input.question("velocidade "));

var gasto = (tempo * velo)/12;

console.log(gasto.toFixed(3));


/**Soluc beecrowd
 * var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var tempo =parseInt(lines.shift("time ")) ;
var velo = parseInt(lines.shift("velocidade "));

var gasto = (tempo * velo)/12;

console.log(gasto.toFixed(3));
 */
