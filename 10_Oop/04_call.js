function SetName(username) {
    this.username = username;
    console.log('SetName is called')
}

function User(username,email,password) {
    
    SetName.call(this,username)
    this.email = email
    this.password = password
}

const person1 = new User('Uzair','uzair@gmail.com',1234)

console.log(person1)