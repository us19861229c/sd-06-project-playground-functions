// Desafio 1
function compareTrue(value1, value2) {
  let compare;
  if (value1 && value2) {
    compare = true;
  } else {
    compare = false;
  }
  return compare;
}
// console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
// console.log(calcArea(10, 5));

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
// console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(lista) {
  let concat = `${lista[lista.length - 1]}, ${lista[0]}`;
  return concat;
}
// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties);
  return points;
}
// console.log(footballPoints(3, 1));

// Desafio 6
function highestCount(list) {
  let greater = list[0];
  for (let i of list) {
    if (i > greater) {
      greater = i;
    }
  }
  let count = 0;
  for (let i of list) {
    if (i === greater) {
      count += 1;
    }
  }
  return count;
}
// let numbers = [9, 1, 2, 3, 9, 5, 7];
// console.log(highestCount(numbers));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);
  let msg = '';
  if (distCat1 > distCat2) {
    msg = 'cat2';
  } else if (distCat1 < distCat2) {
    msg = 'cat1';
  } else {
    msg = 'os gatos trombam e o rato foge';
  }
  return msg;
}
// console.log(catAndMouse(1, 2, 3));

// Desafio 8
function fizzBuzz(list) {
  let newList = [];
  for (let i in list) {
    if ((list[i] % 3) === 0 && (list[i] % 5) === 0) {
      newList[i] = 'fizzBuzz';
    } else if ((list[i] % 3) === 0) {
      newList[i] = 'fizz';
    } else if ((list[i] % 5) === 0) {
      newList[i] = 'buzz';
    } else {
      newList[i] = 'bug!';
    }
  }
  return newList;
}
// let numbers = [2, 15, 7, 9, 45];
// console.log(fizzBuzz(numbers));

// Desafio 9
function encode(string) {
  let newString = string;
  for (let i in string) {
    switch (string[i]) {
      case 'a':
        newString = newString.replace('a', '1');
        break;
      case 'e':
        newString = newString.replace('e', '2');
        break;
      case 'i':
        newString = newString.replace('i', '3');
        break;
      case 'o':
        newString = newString.replace('o', '4');
        break;
      case 'u':
        newString = newString.replace('u', '5');
        break;
      default:
    }
  }
  return newString;
}
// console.log(encode('hi there!'));

function decode(string) {
  let newString = string;
  for (let i in string) {
    if (string[i] === '1') {
      newString = newString.replace('1', 'a');
    } else if (string[i] === '2') {
      newString = newString.replace('2', 'e');
    } else if (string[i] === '3') {
      newString = newString.replace('3', 'i');
    } else if (string[i] === '4') {
      newString = newString.replace('4', 'o');
    } else if (string[i] === '5') {
      newString = newString.replace('5', 'u');
    }
  }
  return newString;
}
// console.log(decode('h3 th2r2!'));

// Desafio 10
function techList(list, name) {
  if (list.length === 0) {
    return 'Vazio!';
  }
  let nameTech = [];
  let sortedList = list.sort();
  for (let i in sortedList) {
    nameTech[i] = {
      name: name,
      tech: sortedList[i],
    };
  }
  return nameTech;
}
// console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Lucas'));

// Desafio 11
function timesCount(list) {
  let howManyTimes = {};
  for (let i in list) {
    if (list[i] in howManyTimes) {
      howManyTimes[list[i]] += 1;
    } else {
      howManyTimes[list[i]] = 1;
    }
  }
  let result = false;
  for (let j in howManyTimes) {
    if (howManyTimes[j] >= 3) {
      result = true;
    }
  }
  return result;
}

function checkNumbers(numbers) {
  let test = timesCount(numbers);
  if (test) {
    return true;
  }
  for (let i in numbers) {
    if (numbers[i] > 9 || numbers[i] < 0) {
      return true;
    }
  }
  return false;
}

function generatePhoneNumber(n) {
  let result = '';
  if (n.length !== 11) {
    result = 'Array com tamanho incorreto.';
  } else if (checkNumbers(n)) {
    result = 'não é possível gerar um número de telefone com esses valores';
  } else {
    result = `(${n[0]}${n[1]}) ${n[2]}${n[3]}${n[4]}${n[5]}${n[6]}-${n[7]}${n[8]}${n[9]}${n[10]}`;
  }
  return result;
}
// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(a, b, c) {
  let result = false;
  if (((a < (b + c)) && (a > Math.abs(b - c))) && ((b < (a + c)) && (b > Math.abs(a - c))) && ((c < (b + a)) && (c > Math.abs(b - a)))) {
    result = true;
  }
  return result;
}
// console.log(triangleCheck(10, 14, 8));

// Desafio 13
function hydrate(string) {
  let numbers = string.replace(/\D/g, '');
  let soma = 0;
  let msg = '';
  for (let i in numbers) {
    soma += parseInt(numbers[i]);
  }
  if (soma === 1) {
    msg = '1 copo de água';
  } else if (soma > 1) {
    msg = `${soma} copos de água`;
  }
  return msg;
}
// console.log(hydrate('1 iauseh 7 saehsaiuh e 2 uashsuha'));

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
};
