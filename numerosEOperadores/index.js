// Exercício sobre variáveis curso Origamid

//Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20;
console.log(total); //35

//Crie duas expressões que retornem NaN
var retorneNaN = "Is2" - 4;
console.log(retorneNaN);
var retorneNaN2 = +"a23" + 7;
console.log(retorneNaN2);

//Somar a string '200' com o numero 50 e retornar 250
var somarString = +"200" + 50;
console.log(somarString);

//Incremente o número 5 e retorne o seu valor incrementado
var incremente = 5;
console.log(++incremente);

//Como dividir o peso por 2?
var numero = "80";
var unidade = "kg";
var peso = numero + unidade; //'80kg'
var pesoPorDois = peso / 2; //NaN (Not a Number)
//Resposta
var numero = +"80" / 2;
var pesoPorDois = peso;

console.log(peso);
