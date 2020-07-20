// Desafio 1
function compareTrue(a = true, b = false) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base = 10, height = 8) {
  return (base * height) / 2
}

// Desafio 3
function splitSentence(a = 'go Trybe') {
  a = a.split(' ');
  return a
}

// Desafio 4
function concatName(a = ['foguete', 'nao', 'tem', 'ré']) {
  let last = a[a.length - 1];
  let first = a[0];
  return `${last}, ${first}`;
}

// Desafio 5
function footballPoints(wins = 3, ties = 1) {
  let points = (wins * 3) + (ties * 1);
  return points;
}

// Desafio 6
function highestCount(a = [9, 1, 2, 3, 9, 5, 7]) {
  let contHigher = 0;
  let i = 0;
  for (let x = 0; x < a.length; x += 1) {
    let y = a[x];
    if (y > i) {
      i = y;
    }
  }
  for (let x = 0; x < a.length; x += 1) {
    let y = a[x];
    if (y === i) {
      contHigher += 1;
    }
  }
  return contHigher;
}

// Desafio 7
function catAndMouse(mouse = 10, cat1 = 5, cat2 = 15) {
  cat1 = Math.abs(cat1 - mouse);
  cat2 = Math.abs(cat2 - mouse);

  if (cat1 === cat2) {
    return 'os gatos trombam e o rato foge';
  } if (cat1 < cat2) {
    return 'cat1';
  } return 'cat2';
}

// Desafio 8
function fizzBuzz(a = [2, 15, 7, 9, 45]) {
  let b = [];
  for (let x = 0; x < a.length; x += 1) {
    let i = a[x];
    if (i % 3 === 0 && i % 5 === 0) {
      b.push('fizzBuzz');
    } else if (i % 3 === 0) {
      b.push('fizz');
    } else if (i % 5 === 0) {
      b.push('buzz');
    } else {
      b.push('bug!');
    }
  }
  return b;
}

// Desafio 9
function encode(a = 'hi there, this is your new house', coded = []) {
  for (let x = 0; x < a.length; x += 1) {
    let l = a[x];
    if (l === 'a') {
      coded += '1';
    } else if (l === 'e') {
      coded += '2';
    } else if (l === 'i') {
      coded += '3';
    } else if (l === 'o') {
      coded += '4';
    } else if (l === 'u') {
      coded += '5';
    } else {
      coded += l;
    }
  }
  return coded;
}

function decode(b = 'h3 th2r2! wh1ts 5p', deCoded = []) {
  for (let y = 0; y < b.length; y += 1) {
    let d = b[y];
    if (d === '1') {
      deCoded += 'a';
    } else if (d === '2') {
      deCoded += 'e';
    } else if (d === '3') {
      deCoded += 'i';
    } else if (d === '4') {
      deCoded += 'o';
    } else if (d === '5') {
      deCoded += 'u';
    } else {
      deCoded += d;
    }
  }
  return deCoded;
}

// Desafio 10
function techList(t = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], name = 'Lucas') {
  let valid = t.length;
  let i = [];
  if (valid > 0) {
    for (let x = 0; x < t.length; x += 1) {
      let obj = {};
      obj.tech = t[x];
      obj.name = name;
      i.push(obj);
    }
    i.sort((a, b) => {
      if (a.tech < b.tech) return -1;
      if (a.tech > b.tech) return 1;
      return 0;
    })
    return i;
  }
  return 'Vazio!';
}

// Desafio 11
function generatePhoneNumber() {
}

// Desafio 12
function triangleCheck() {
}

// Desafio 13
function hydrate() {
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
