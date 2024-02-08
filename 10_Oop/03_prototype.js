// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);

let name = "Uzair"

let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.callUzair = function () {
    console.log(`SomeOne is calling uzair`)
}

Array.prototype.HiUzair = function () {
    console.log('Hi uzair ');
}

// name.callUzair()
// heroPower.callUzair()
// myHeros.callUzair()

myHeros.HiUzair()
// heroPower.HiUzair()             // Can't use Array user-build function because it is object


//================inheritance==============
const Userr = {
    name: "Uzair",
    email: "uzair@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__ :TeachingSupport
}

Userr.__proto__ = Teacher

// ===========Modern Syntax Of Inheritance============
Object.setPrototypeOf(Userr,Teacher)

// console.log(Userr.makeVideo)

let anotherUsername = "Uzair     "

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`The true length of word is : ${this.trim().length}`);
}
// anotherUsername.trueLength()
// "Ozzy".trueLength()
// "iceTea".trueLength()

function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;

//   console.log(this.firstName)
//   console.log(this.lastName)
//   console.log(this.age)
//   console.log(this.eyeColor)
//   console.log(this.nationality)
}

Person.prototype.nationality = "English";

const newPerson = new Person("Uzair","Tajdar",23,"Dark Brown")

console.log(newPerson.nationality);