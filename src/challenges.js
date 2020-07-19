// Desafio 1
function compareTrue(varOne, varTwo) {
  // seu código aqui
  if (varOne === true && varTwo === true) {
    return true 
  } else {
    return false
  }
}

console.log(compareTrue(true, false))

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return ((base * height) / 2)
}

console.log(calcArea(10, 2))

// Desafio 3
function splitSentence(stringToSplit) {
  // seu código aqui
  return stringToSplit.split(" ");
}

console.log(splitSentence("go Trybe"))

// Desafio 4
function concatName(stringArray) {
  // seu código aqui
  return (stringArray[stringArray.length - 1] + ", " +  stringArray[0])
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let sum = ((wins * 3) + (ties))
  return sum
}

console.log(footballPoints(3, 2))

// Desafio 6
function highestCount(numberArray) {
  // seu código aqui
  let repeatCont = 0;
  let highestNumber = numberArray[0];

  for (index in numberArray) {
    if (numberArray[index] > highestNumber) {
      highestNumber = numberArray[index]
    }
  } for (index in numberArray) {
    if (numberArray[index] === highestNumber)
      repeatCont += 1
  }
  return (repeatCont)
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let chaseStatus;
  let pos1;
  let pos2;

  if (mouse > cat1 && mouse > cat2) {
    pos1 = mouse - cat1;
    pos2 = mouse - cat2;
  } else if (mouse < cat1 && mouse < cat2) {
    pos1 = cat1 - mouse;
    pos2 = cat2 - mouse;
    console.log("Pos1 : " + pos1)
    console.log("Pos2 : " + pos2)
  } else if (mouse > cat2 && mouse < cat1 ) {
    pos2 = mouse - cat2;
    pos1 = cat1 - mouse;
  } else if (mouse < cat2 && mouse > cat1) {
    pos2 = cat2 - mouse;
    pos1 = mouse - cat1;
  }
  if (pos1 === pos2) {
    chaseStatus = "os gatos trombam e o rato foge"
  } else if (pos1 > pos2) {
    chaseStatus = "cat2"
  } else {
    chaseStatus = "cat1"
  }
  return chaseStatus
} 

console.log(catAndMouse(0, 3, 2))

// Desafio 8
function fizzBuzz(numberArray) {
  // seu código aqui
  let newArray = []

  for (index in numberArray) {
    if (numberArray[index] % 3 === 0 && numberArray[index] % 5 != 0) {
      newArray.push("fizz");
    } else if (numberArray[index] % 5 === 0 && numberArray[index] % 3 != 0) {
      newArray.push("buzz");
    } else if (numberArray[index] % 3 === 0 && numberArray[index] % 5 === 0) {
      newArray.push("fizzBuzz")
    } else {
      newArray.push("bug!")
    }
  }
  return (newArray)
}

console.log(fizzBuzz([2, 15, 7, 9, 45]))

// Desafio 9
function encode(stringToEncode) {
  // seu código aqui
  let charactersExchange = {a : 1, e : 2, i : 3, o : 4, u : 5,};
  let encodedString = ""
  for (index in stringToEncode) {
    if (stringToEncode[index] == "a") {
      encodedString += "1";
    } else if (stringToEncode[index] == "e") {
      encodedString += "2";
    } else if (stringToEncode[index] == "i") {
      encodedString += "3";
    } else if (stringToEncode[index] == "o") {
      encodedString += "4";
    } else if (stringToEncode[index] == "u") {
      encodedString += "5";
    } else {
      encodedString += stringToEncode[index]
    }
  }
  return encodedString;
}

console.log(encode("hi there!"))

function decode(stringToDecode) {
  // seu código aqui
  let charactersExchange = {a : 1, e : 2, i : 3, o : 4, u : 5,};
  let decodedString = "";

  for (index in stringToDecode) {
    if (stringToDecode[index] == "1") {
      decodedString += "a";
    } else if (stringToDecode[index] == "2") {
      decodedString += "e";
    } else if (stringToDecode[index] == "3") {
      decodedString += "i";
    } else if (stringToDecode[index] == "4") {
      decodedString += "o";
    } else if (stringToDecode[index] == "5") {
      decodedString += "u";
    } else {
      decodedString += stringToDecode[index];
    }
  }
  return decodedString;
}

console.log(decode("h3 th2r2!"))


// Desafio 10
function techList(techArray, name) {
  // seu código aqui
  let techList = [];
  let techObject = {};
  for (iten in techArray.sort()) {
    techList.push({tech : techArray[iten], name : name})
  } if (techArray.length < 1) {
    techList = "Vazio!"
  }
  return techList
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"))

// Desafio 11
function generatePhoneNumber(phoneNumber) {
  // seu código aqui
  let phoneSintaxe = false;
  let repCounter;
  let phoneError = false;
  let counterError;

  for (number in phoneNumber) {
    repCounter = 0;
    for (cont = 0; cont < phoneNumber.length; cont += 1) {
      // console.log(phoneNumber[number] + " = " + phoneNumber[cont])
      if (phoneNumber.length != 11) {
        phoneError = "Array com tamanho incorreto.";
      } else if (phoneNumber[number] === phoneNumber[cont]) {
        repCounter += 1;
        console.log(repCounter + " rep")
      } else if (phoneNumber[number] < 0 || phoneNumber[number] > 9) {
        phoneError = "não é possível gerar um número de telefone com esses valores";
      } else {
        phoneSintaxe = ("(" + phoneNumber[0] + phoneNumber[1] + ")" + " " + phoneNumber[2] + phoneNumber[3] + phoneNumber[4] + phoneNumber[5] + phoneNumber[6] + "-" + phoneNumber[7] + phoneNumber[8] + phoneNumber[9] + phoneNumber[10]);
      }
    }
  }
  if (repCounter === 3) {
    return counterError = "não é possível gerar um número de telefone com esses valores";
  } else if (phoneSintaxe != false) {
    return phoneSintaxe;
  } else {
    return phoneError;
  }
}

console.log(generatePhoneNumber([0, 2, 3, 4, 1, 2, 7, 8, 9, 9, 4, 10]))

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  //if (lineA < (lineB + lineC && lineA >  ))
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
