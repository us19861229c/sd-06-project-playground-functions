// Desafio 1
function compareTrue (parametro1, parametro2) {
  if (parametro1 && parametro2) {
    return true;
  }
    return false;
}
// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(parametroString) {
  return parametroString.split(' ');
}

// Desafio 4
function concatName(array) {
  let last = array.length-1;
  return  array[last] + ', ' + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins*3) + (ties);
  return pontos;
}

// Desafio 6
function highestCount(array) {
  let identificaMaior = 0;
  let numeroRepetido = 0;
  for (let i in array) {
    if (array[i] > identificaMaior) {
      identificaMaior = array[i];
    }
  }
  for (let i in array) {
    if (array[i] === identificaMaior) {
      numeroRepetido += 1;
    }
  }
  return numeroRepetido;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if(cat1 === cat2 && cat2 === mouse) {
    return 'os gatos trombam e o rato foge'
  } else if (cat1 < cat2) {
    return 'cat1'
  }
    return 'cat2'
}
  /*let resposta;
  if (cat1 < cat2) {
    return cat1;
  } else if (cat2 < cat1) {
    return cat2;
  } else {
    return resposta = 'os gatos trombam e o rato foge';
  }*/
// Desafio 8
function fizzBuzz(array) {
  let resDesafio = [];
  for (let i in array) {
    if (((array[i] % 3) == 0) && ((array[i] % 5) == 0)) {
      resDesafio.push = ('fizzBuzz');
    } else if ((array[i] % 5) == 0) {
      resDesafio.push = ('buzz');
    } else if ((array[i] % 3) == 0) {
      resDesafio.push = ('fizz');
    } else {
      resDesafio.push = ('bug!');
    }
  }
  return resDesafio;
}

// Desafio 9
function encode (parametro4) {
  for (let i in parametro4) {
    if (parametro4[i] === 'a') {
      parametro4[i].push = '1';
    } else if (parametro4[i] === 'e') {
      parametro4[i].push = '2';
    } else if (parametro4[i] === 'i') {
      parametro4[i].push = '3';
    } else if (parametro4[i] === 'o') {
      parametro4[i].push = '4';
    } else if (parametro4[i] === 'u') {
      parametro4[i].push = '5';
    }
  }
  return parametro4;
}
function decode(parametro5) {
  // seu código aqui
  for (let i in parametro5) {
    if (parametro5[i] === '1') {
      parametro5[i].push = 'a';
    } else if (parametro5[i] === '2') {
      parametro5[i].push = 'e';
    } else if (parametro5[i] === '3') {
      parametro5[i].push = 'i';
    } else if (parametro5[i] === '4') {
      parametro5[i].push = 'o';
    } else if (parametro5[i] === '5') {
      parametro5[i].push = 'u';
    }
  }
  return parametro4;
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
