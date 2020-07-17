// Desafio 1
function compareTrue(BOOLEAN1, BOOLEAN2) {

  if (BOOLEAN1 && BOOLEAN2) {
    return true
  } else {
    return false
  }

}

// Desafio 2
function calcArea(base, height) {
  area = (base * height) / 2
  return area
}

// Desafio 3
function splitSentence(str) {

  let word = ""
  let sentence = []
  let wordIndex = 0

  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      for (let j = i - 1; j >= 0; j--) {
        if (str[j] == " ") {
          break
        } else {
          word = str[j] + word
        }
      }
      sentence[wordIndex] = word
      word = ""
      wordIndex++
    }
    if (i == str.length - 1) {
      for (let j = i; j >= 0; j--) {
        if (str[j] == " ") {
          break
        } else {
          word = str[j] + word
        }
      }
      sentence[wordIndex] = word
      word = ""
    }
  }

  return sentence

}

let uhum = "The quick brown fox jumps over the lazy dog"

console.log(splitSentence(uhum))

// Desafio 4
function concatName(arrayStrings) {

  let arrayStringsInv = ""

  arrayStringsInv = arrayStringsInv + arrayStrings[arrayStrings.length - 1]
  arrayStringsInv = arrayStringsInv + ", "
  arrayStringsInv = arrayStringsInv + arrayStrings[0]

  return arrayStringsInv

}

console.log(concatName(uhum))

// Desafio 5
function footballPoints(wins, ties) {
  
  let points = 0

  points += wins * 3
  points += ties * 1

  return points

}

// Desafio 6
function highestCount(arr) {
  
  let max = 0
  let count = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max && !(arr[i] < 0)) {
      max = arr[i]
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == max) {
      count++
    }
  }

  return count

}

let d6 = [1,2,3,7,2,7,2,9,6,9,9]

//console.log(highestCount(d6))

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  
  let dCat1 = 0
  let dCat2 = 0
  //let tie = "os gatos trombam e o rato foge"

  if (cat1 < mouse) {
    dCat1 = mouse - cat1
  } else {
    dCat1 = cat1 - mouse
  }

  if (cat2 < mouse) {
    dCat2 = mouse - cat2
  } else {
    dCat2 = cat2 - mouse
  }

  if (dCat1 > dCat2) {
    return "cat2"
  } else if (dCat1 < dCat2) {
    return "cat1"
  } else if (dCat1 == dCat2) {
    return "os gatos trombam e o rato foge"
  }

}

console.log(catAndMouse(4, 6, 1))

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
