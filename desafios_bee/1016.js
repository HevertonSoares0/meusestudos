/**
 
Dois carros (X e Y) partem em uma mesma direção. O carro X sai com velocidade constante de 60 Km/h e o carro Y sai com velocidade constante de 90 Km/h.

Em uma hora (60 minutos) o carro Y consegue se distanciar 30 quilômetros do carro X, ou seja, consegue se afastar um quilômetro a cada 2 minutos.

Leia a distância (em Km) e calcule quanto tempo leva (em minutos) para o carro Y tomar essa distância do outro carro.

Entrada:

O arquivo de entrada contém um número inteiro.

Saída:

Imprima o tempo necessário seguido da mensagem "minutos".

carro x -> 60km
carro y -> 90km

60min -> y + 30km = 1k a cada2min

quero colocar a distancia e saber em quanto tempo o carro Y leva para fazer essa distância 

 */

const input = require("readline-sync");

let dist = parseInt(input.question("KM "));

let dist_min = dist*2;

console.log(dist_min + " minutos")
