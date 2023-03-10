
var input = require('readline-sync')

/*A fórmula para calcular a área de uma circunferência é: area = π . raio2. Considerando para este problema que π = 3.14159:

- Efetue o cálculo da área, elevando o valor de raio ao quadrado e multiplicando por π.*/

var pi = 3.14159;
var raio = parseFloat(input.question("Digite um numero: "))

var area = (raio*raio*pi).toFixed(4)


console.log(area)



