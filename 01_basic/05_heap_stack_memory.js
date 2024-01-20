
// ############## Stack (Perimitive)#################
// It will not change orginal value because it give duplicate value

let name ="Uzair";
let naam = name;

naam = 'Ozzy';

console.log(name);
console.log(naam);
// ############## Heap (NON-Perimitive / Reference)#################
// It will change orginal value because it same reference

let personOne = {
    name : "Uzair",
    semester: 5
}
 let personTwo = personOne;

 personTwo.name = "Ozzy";
console.log(personOne.name);
console.log(personTwo.name);