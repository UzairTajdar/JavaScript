
//
const mysymbol = Symbol("key")

const person = {
    name : "Uzair",
    age : 22,
    email : "uzair@gmail.com",
    semster : "5th",
    [mysymbol] : "mykey"
}

// console.log(person.name)           //not a good way
// console.log(person["name"])

// console.log(person);

// person.name = "Ozzy"
// console.log(person);

// Object.freeze(person)
// person.name = "Uzair"
// console.log(person);

person.greeting = function () {
    console.log("Hi Everyone");
}
person.greetingPerson = function () {
    console.log(`Hi Everyone ${this.name}`);
}

console.log(person.greeting());
console.log(person.greetingPerson());