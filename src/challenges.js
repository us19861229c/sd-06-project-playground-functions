// Desafio 1
function compareTrue(bol1, bol2) {
  if (bol1 && bol2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = 0;
  area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  let result = sentence.split(' ');
  return result;
}

// Desafio 4
function concatName(names) {
  let first = names[0];
  let last = names[names.length - 1];
  let concat = last + ', ' + first;
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let win = wins * 3;
  let tie = ties * 1;
  let points = win + tie;
  return points;
}

// Desafio 6
function highestCount(numbers) {
  // Descobrir o maior e criar um contador para ele
  let bigger = numbers[0];
  let count = 0;
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > bigger) {
      bigger = numbers[i];
    }
  }
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === bigger) {
      count ++;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs (mouse - cat2);

  if (distanceCat1 < distanceCat2) {
    return "cat1";
  } else if (distanceCat2 < distanceCat1) {
    return "cat2";
  } else {
    console.log ("Os gatos trombam e o rato foge");
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  // Percorrer o array e criar as condições para posição do array
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0 && numbers[i] % 5 !== 0) {
      numbers[i] = "fizz";
    } else if (numbers[i] % 5 === 0 && numbers[i] % 3 !== 0) {
      numbers[i] = "buzz"
    } else if (numbers[i] % 3 === 0 || numbers[i] % 5 === 0) {
      numbers[i] = "fizzBuzz"
    } else {
      numbers[i] = "bug!";
    }
  }
  return numbers;
}

// Desafio 9
function encode(word) {
  // Verificar 
  for (let i = 0; i <= word.length; i++) {
    if (word[i] === 'a') {
      console.log ("teste");
    }
  }
}

encode('abc');
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
