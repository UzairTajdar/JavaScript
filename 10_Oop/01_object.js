const user = {
    username : 'Uzair',
    age : 23,
    isMale : true,
    userDetail : function () {
        // console.log('User detail')
        // console.log(`Username : ${this.username}`);
        console.log(this)
    }
}

// console.log(user.username)
// console.log(user.userDetail())


function User(name,age,subject){
    this.name = name;
    this.age = age;
    this.subject = subject
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    // console.log(this)
    // return this
}

const userOne = new User('Uzair',23,'BSCS')
const userTwo = new User('Faizan',22,'BSCS')

console.log(userOne)
// console.log(userTwo)
// console.log(userOne.constructor)



// ====================Some Points==================
//First : empty Object created when use 'new' keyword
//Second : constructor function called due to 'new' keyword ,pack all arguments 
//Third : All argument inject into 'this' keyword
//Fourth : Get all in function