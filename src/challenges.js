// Desafio 1
function compareTrue(coisa1, coisa2) {
  let comparado;
  comparado = coisa1 && coisa2;
  return comparado;
}

// Desafio 2
function calcArea(base, height) {
  let areatri;
  areatri = (base * height) / 2;
  return areatri;
}

// Desafio 3
function splitSentence(frase) {
  let dividida;
  dividida = frase.split(' ');
  return dividida;
}

// Desafio 4
function concatName(lista) {
  let extremos;
  extremos = `${lista[lista.length - 1]}, ${lista[0]}`;
  return extremos;
  // esse $ foi ideia do VScode, mas parece fazer sentido
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos;
  pontos = (wins * 3) + ties;
  return pontos;
}

// Desafio 6
function highestCount(numerosLista) {
  //Escreva uma função chamada `highestCount` que, ao receber uma array de números, retorne  a quantidade de vezes que o maior deles se repete.

  //Exemplo: caso o parâmetro de `highestCount` seja uma array com valores `[9, 1, 2, 3, 9, 5, 7]`, a função deverá retornar `2`, que é a quantidade de vezes que o número `9` (maior número do array) se repete.
  let numerosQuantid = 0;
  let i;
  let maiorNumero = 0;
  for (i = 0; i < numerosLista.length; i += 1) {
    if (numerosLista[i] > maiorNumero) {
      numerosLista[i] = maiorNumero;
      numerosQuantid = 1;
    } else if (numerosLista[i] === maiorNumero) {
      numerosQuantid + 1;
    }
  }
  return numerosQuantid;

}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}


module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  generatePhoneNumber,
  techList,
  highestCount,
  hydrate,
  splitSentence,
  triangleCheck,
}
