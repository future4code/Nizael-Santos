// exercício de interpretação //

// 1 //

const minhaFuncao = (quantidade) => {
	const array = []
	for(let i = 0; i < quantidade; i+=2) {
			for(let j = 0; j < i; j++) {
				array.push(j)
			}
	}
	return array
} 

//a //  
// minhafunção(2): o output é Array (0) [] //
//b //
// minhafunção(5): o output é Array (6)[ 0,1,0,1,2,3 ] //
//c //
// minhafunção(8): o output é Array(12)[ 0,1,0,1,2,3,0,1,2,3,… ]*/ // 

// 2 //  

let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

const funcao = (lista, nome) => {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === nome) {
      return i;
    }
  }
};

console.log(funcao(arrayDeNomes, "Darvas"));
console.log(funcao(arrayDeNomes, "João"));
console.log(funcao(arrayDeNomes, "Paula"))

// a// 

/* 0, 2, undefined: são as posições dos elementos na array, 0 para Darvas, 2 para João, quando ao último , 
undefined, o elemento não existe na array. */ 

// b // 

/* Sim, a função em questão esta sendo executada para verificar o tamanho do array e em seguida
verificando se determinado valor existe e em qual posição esta alcoado. */

// 3 //  

/* recebendo os valores do parâmetro , array, executando as operações e retornado os novos valores em um nova 
array. criarArray. */



function metodo(array) {
    let resultadoA = 0;
    let resultadoB = 1;
    let arrayFinal = [0];
  
    for (let x of array) {
      resultadoA += x;
      resultadoB *= x;
    }
  
    arrayFinal.push(resultadoA);
    arrayFinal.push(resultadoB);
    return arrayFinal;
  }  

  /* */ 

  // exercício de escrita // 

  // 1 // 




