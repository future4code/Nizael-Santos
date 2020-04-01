d // exercício 1 //

// const respostaDoUsuario = prompt("Digite o número que você quer testar?")
// const numero = Number(respostaDoUsuario)

// if(numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// } 

// resposta //   
/* 

realiza um teste de passou no teste ou não passou no teste baseado no número que o usuário digitar.
Para números cujo o resto seja 0. Para números cujo o resto não seja === 0

*/ 

// exercício 2 // 
// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM d.
//   default:
//     preco = 5
//     break; 
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco) 

// respostas // 
/*

a. para o usuário/consumidor obter o preço da fruta que escolher. 

b. O preço da fruta  maça  é  R$  5 

c. obter os valores através do programa. 

let laranjap = 3.5 
let maçap = 2.25 
let bananasp = 5.0
let uvap = 0.30 
resultado = 2 * 3.5 + 2.25 + 3 * 5 + 0.30 
resultado = 24.55

d. "O preço da fruta Pêra é R$ 5. Isto aconte pois como não há nenhuma instrução que indique que assim que
ele encontrar o que o usuário procura ele deve parar ele continuará a ler o programa*/   

// exercício 3 // 

// const numero1 = prompt("Digite o primeiro número.")
// const numero2 = prompt("Digite o próximo número?")

// if(numero1 > 0 && numero2 > 0) {
//   let mensagem
//   if(numero1 > numero2) {
//     mensagem = "Número 1 é maior que o 2!"
//   } else {
//     mensagem = "Número 1 é menor ou igual ao 2!"
//   }
// }

// console.log(mensagem) 

// respostas // 
/* 

Sim, será imprimido: mensagem não definida.Justificativa: a mensagem que deveria ser impressa encontra-se
fora do bloco onde esta sendo executado a condicional e por esta razão é que ocorre o erro, como se existisse 
a variável mensagem a qual deveria ser exibida*/ 

// exercício 4 // 

// respostas // 

// a // 
/*

const number1 = prompt("please, type the first number.");
const number2 = prompt("please, type the second number");

if(number1 > number2) {
  console.log(number1 , number2)
  } else {
    console.log(number2 , number1)
  } 
// renderizou os dois números digitados //  
  */ 

// b //  
/*

const number1 = prompt("please, type the first number.");
const number2 = prompt("please, type the second number");
const number3 = prompt("please, type the third number");

if(number1 && number2 && number3) {
  console.log(number3 , number2, number1)
  } else { 
      null 

*/ 

// continua a renderizar os números na tela //

// c //  

/*
const number1 = prompt("please, type the first number.");
const number2 = prompt("please, type the second number");
const number3 = prompt("please, type the third number");

if(number1 && number2 != number3) {
  console.log(number3 , number2, number1)
  } else {
    console.log = prompt("please type a different number at least")  
    console.log(number3, number2, number1) 

*/ 

// exercício 5 // 

const animal = prompt("vertebrado ou invertebrado?")

if(animal === "vertebrado") {
  const pelos = prompt("Possuí pelos?, y/n") 
if(pelos === "y") {
  console.log("é ser humano ou mamífero não humano") 
src} else { (animal === "invertebrado")
  pelos = prompt("Possuí Pelos?, y/n")
}
} else { 
  const penas = prompt("Possuí penas?, y/n")
}   





