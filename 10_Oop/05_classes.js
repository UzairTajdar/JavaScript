// class User{
//     constructor(username,email,password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}9876`
//     }
//     toUppercase(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const personOne = new User('Uzair','uzair@gmail.com','123')

// console.log(personOne.encryptPassword())
// console.log(personOne.toUppercase())


// ===============if we don't use classes ================
// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());