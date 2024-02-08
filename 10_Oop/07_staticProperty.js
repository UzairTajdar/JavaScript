class User{
    constructor(username){
        this.username =username
    }
    CallMe(){
        console.log(`Username : ${this.username}`)
    }
    static createId(){
        return `123`
    }
}
const person = new User('Uzair','uzair@gmail.com')

person.CallMe()

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const personOne = new Teacher('Uzair','uzair@gmail.com')

personOne.createId()