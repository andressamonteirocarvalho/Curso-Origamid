// Crie uma função para verificar se um valor é Truthy
function verification(value) {
  return !!value;
}

console.log(verification(0));

// Crie uma função matemática que retorne o perímetro de um quadr
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(value) {
  return value * 4;
}

var total = perimetro(5);
console.log(`O perímetro do quadrado é ${total}`);

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(name, lastName) {
  return name + " " + lastName;
}

var completo = nomeCompleto("Andressa", "Monteiro");
console.log(completo);

// Crie uma função que verifica se um número é par
function evenNumber(value) {
  if (value % 2 == 0) {
    console.log(`O valor ${value} é par`);
  } else {
    console.log("Este numero é impar");
  }
}

evenNumber(11);

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipeData(value) {
  return typeof value;
}

var type = tipeData("maionese");

console.log(type);

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callb
// utilize essa função para mostrar no console o seu nome complet
// quando o evento 'scroll ou click ' ocorrer.
addEventListener("click", function () {
  console.log("Meu nome completo é Andressa");
});

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises}`;
}
var preciso = precisoVisitar(20);
var visitei = jaVisitei(20);

console.log(preciso, visitei);
