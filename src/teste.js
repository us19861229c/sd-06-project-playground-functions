let techArrayInput = ["React", "Jest", "HTML", "CSS", "JavaScript"];
let name = "lucas";

let sortedTechList = techArrayInput.sort();
let outputObjectArray = [];

for (index in sortedTechList){
    outputObjectArray.push({"tech": sortedTechList[index], "name": name});

}

console.log(sortedTechList);
console.log(outputObjectArray)





  