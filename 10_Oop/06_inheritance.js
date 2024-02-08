class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const personOne = new Teacher("Uzair", "uzair@teacher.com", "123")

// personOne.logMe()
// personOne.addCourse()


console.log(personOne instanceof Teacher)
console.log(personOne instanceof User)

