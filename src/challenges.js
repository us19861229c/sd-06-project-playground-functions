// Desafio 1
function compareTrue(x, y) {
  return x === true && y === true; 
}

// Desafio 2
function calcArea(base, height) {
  return (base * height)/2;
}

// Desafio 3
function splitSentence(string) {
  string = string.split(' ');

  return string;
}

// Desafio 4
function concatName(array) {
  array = array[array.length-1] + ", " + array[0];
  return array;
}

// Desafio 5
function footballPoints(win, ties) {
  let points = 0;
  for (i = 1; i <= win; i += 1) {
    points += 3;
  }
  for (j = 1; j <= ties; j += 1) {
    points += 1;
  }
  return points;
}

// Desafio 6
function highestCount() {
  // seu código aqui
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
