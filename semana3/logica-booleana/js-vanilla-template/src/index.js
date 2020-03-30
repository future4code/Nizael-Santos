// exercício de interpretação de código // 

// // variáveis //
// const bool1 = true
// const bool2 = false
// const bool3 = !bool2
// // 1 //
// let resultado = bool1 && bool2 && bool3
// console.log("a. ", resultado)
// // a. false //
// resultado = (bool2 || bool1) && !bool3
// console.log("b. ", resultado)
// // b. false //
// resultado = !resultado && (bool1 || bool1)
// console.log("c. ", resultado)
// // c. true //
// resultado = (resultado && (!bool1 || bool2)) && !bool3
// console.log("d. ", resultado)
// // d. false //
// console.log("e. ", typeof resultado) 
// // e. bollean // 

// questão 2 // 

// let array
// console.log('I. ', array) 
// //undefined//
// array = null
// console.log('II. ', array)
// // null //
// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('III. ', array.length)
// // 11 // 
// let i = 0
// console.log('IV. ', array[i], " e ", array[i+1])
// // 3 e 4 //
// array[i+1] = 19
// const valor = array[i+6]
// console.log('V. ', array[i+1], " e ", valor)
// // 19 e 9 //
// i+=1
// array[i] = array[i-1]
// console.log('VI. ', array[i])
// // 3 //
// i = array.length - 1
// array[i] = array[i-3]
// const resultadoC = array[i]%array[1]
// console.log('VII. ', resultadoC) 
// // 1 //

// respostas //

/* a. array é uma váriavel que pode conter mais de um valor, os valores ficaram indexados em uma 
única variável e poderam ser consultados posteriormente. 
syntax: const | let | var = [value1,value2,value3...]*/ 

// b. o valor é 0 // 

// c. define-se por nome da array.lenght - 1 pois os valores indexados começam a ser contados a partir do 0 //

// d. read the code above // 

// exercício de escrita de código // 

// 1 //
// a //  

let F = 77 
resultado1 = (F - 32)*5/9 + 273.15  

// b // 

let C1 = 80
resultado2 = (C1)*9/5 + 32 

// c // 

let C2 = 30
resultado3 = (C2)*9/5 + 32 

let C3 = 30
resultado4 = C3 + 273.15 

// d //  

// let uservalue = ("Digite o valor a ser convertido?") 
// resultado5 = (uservalue)*9/5 + 32 
// resultado6 = uservalue + 273.15 

// 2. //

console.log = prompt("Hello, How are you doing?")
console.log = prompt("How old are you?")
console.log = prompt("What's your nationalitie?")
console.log = prompt("Do you speak English?") 
console.log = prompt("What's the purpose of your trip?")  

// 3. // 

//a //
let KWh = 0.05 
result3a = KWh * 280 

// b //  
let KWh = 0.05 
result3a = (KWh * 280) * 0.15 * 100 

// desafios //






