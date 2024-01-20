
const name = "Uzair";
const count = 1575;

// console.log(name + count + 'roll no');  // not a good way
// console.log(`My name is ${name} and roll no is ${count}`);  

const gameName = "Garena FreeFire"
const gameNames = ["GTA","PUBG","FREE FIRE","CALL of duty","CALL of Puby"]

// console.log(gameName[0]);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('F'));


const substring = gameName.substring(0 , 5)
console.log(substring)

// const slice = gameNames.slice(0, -2)
// console.log(slice)
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// console.log(fruits.slice(1, 3));

// const Name = "   Uzair             "
// const trim = Name.trim()
// console.log(trim);


// const url = "hrrps://localhost%20hyy.com"
// console.log(url.replace("%20",("90")));

// console.log(url.includes("local"));

const fruits = "Banana Orange Lemon Apple Mango"
const fruit = "Ban-ana-Oran-ge-Le-mon-Ap-ple-Man-go"
console.log(fruits.split(" "))
console.log(fruit.split("-"))