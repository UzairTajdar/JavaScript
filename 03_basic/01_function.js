
// function Myname() {
//     console.log("U")
//     console.log("z")
//     console.log("a")
//     console.log("i")
//     console.log("r")
// }

// Myname()

// function addTwoNum() {
//     console.log("Uzair")           //no return value
// }

// function addTwoNum(num1,num2) {
//     return num1+num2
// }

// function addTwoNum(num1,num2) {
//     let result =  num1+num2
//     return result
//     console.log("It will not print");           //it will not execute because it declare after return 
// }

// let result = addTwoNum(3,4)

// console.log(result);


// function loggedIn(username) {
//     console.log(`${username} is logged in`);
// }

// function loggedIn(username = "someone") {                   //Default data
//     console.log(`${username} is logged in`);
// }

function loggedIn(username) {                   
    // if (!username) {
    //     console.log(`Please Enter a name`);
    //     return
    // }
    if (username === undefined) {
        console.log(`Please Enter a name`);
        return
    }
    return(`${username} just logged in`)
}

console.log(loggedIn())    