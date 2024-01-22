
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
    // console.log(this);                  //can't use in function
}
hello()



// ==============Explicitly return =====================

// const addTwoNum = (a,b)=>{
//     return a + b
// }

// ==============Implicitly return =====================

// const addTwoNum = (a,b) => a + b             // don't need to write return keyword
// const addTwoNum = (a,b) => (a + b)             // don't need to write return keyword
const addTwoNum = (a,b) => ({name:"uzair"})             // we need parenthesis for objective type thing 
// console.log(addTwoNum(3,9))

// ========================the way of 'this' keyword act ===========================

// When a function is called as a standalone function, this refers to the global object (window in a browser, or global in Node.js) in non-strict mode. In strict mode, this is undefined.
function exampleFunction() {
    console.log(this);
}
// exampleFunction();


// ====================ChatGPT=======================

// When a function is a property of an object and is invoked as a method of that object, this refers to the object itself.
const myObject = {
    myMethod: function() {
        console.log(this);
    }
};

myObject.myMethod(); // 'this' refers to 'myObject'


// When a function is used as a constructor (with the new keyword), this refers to the newly created instance.
function MyClass() {
    this.property = 'some value';
}

const myInstance =   new MyClass();
console.log(myInstance.property); // 'some value'

// Arrow functions behave differently regarding this. They do not have their own this and inherit it from the enclosing scope (lexical scoping).

const arrowFunction = () => {
    console.log(this);
};

arrowFunction(); // 'this' depends on the context in which arrowFunction is defined