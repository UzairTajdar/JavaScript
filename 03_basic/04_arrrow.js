
const user = {
    name : "Uzair",
    age : 23,
    welcome : function() {
        console.log(`${this.name} welcome to my website`);
        console.log(this);
    }
}

// console.log(user.welcome())
// user.name = "Ozzy"
// console.log(user.welcome())

// console.log(this)

// function hello() {
//     console.log(this);
// }

// const hello = function() {
//     let username ="uzair"
//     console.log(this.username);                  //can't use in function
// }

const hello = () => {
    let username ="uzair"
    console.log(this);                  //can't use in function
}
// hello()



// ==============Explicitly return =====================

// const addTwoNum = (a,b)=>{
//     return a + b
// }

// ==============Implicitly return =====================

// const addTwoNum = (a,b) => a + b             // don't need to write return keyword
// const addTwoNum = (a,b) => (a + b)             // don't need to write return keyword
const addTwoNum = (a,b) => ({name:"uzair"})             // we need parenthesis for objective type thing 
console.log(addTwoNum(3,9))