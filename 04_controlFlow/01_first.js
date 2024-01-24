// =================Operator=================

// <, >, <=, >=, ==, ===, !=, !==

const isLoggedIn = true

// if (isLoggedIn) {
//     console.log("Yes logged in")
// }

// if (!isLoggedIn) {
//     console.log("Yes logged in")
// }

const temperature = 42

// if (temperature < 50) {
//     console.log("less than 50")
// }
// console.log("Temperature is greater than 50");

// if (temperature < 50) {
//     console.log("less than 50")
// }else{
//     console.log("Temperature is greater than 50");
// }

// let score = 200

// if (score >100) {
//     let power = "Fight"
//     console.log(`Power is ${power}`)
// }
// console.log(`Power is ${power}`)                       //Power variable can't access ouside the block because of scope

const balance = 1000

// if (balance >500) console.log("Balance") , console.log("balance");

// if (balance <500) {
//     console.log("Balance is less tha 500")
// }else if (balance <750) {
//     console.log("Balance is less tha 750") 
// }else if (balance <900) {
//     console.log("Balance is less tha 900") 
// }else{
//     console.log("Balance is less tha 1100") 
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

