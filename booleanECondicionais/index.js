// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual
var minhaIdade = 24;
var parente = 30;
if (minhaIdade > parente) {
  console.log("Minha idade é maior que a do meu parente");
} else if (minhaIdade === parente) {
  console.log("Minha idade é igual a do meu parente");
} else {
  console.log("Minha idade é menor que a do meu parente");
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2;
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre"; //Truthy
var idade = 28; //Truthy
var possuiDoutorado = false; //Falsy
var empregoFuturo; //falsy
var dinheiroNaConta = 0; //falsy

// Compare o total de habitantes do Brasil com China (valor em mi
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log("O Brasil é maior que a China");
} else {
  console.log(" A china é maior");
}
// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso"); //Falso
}
// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão"); // Irá aparecer cão
} else {
  console.log("Falso");
}
