// ==================Class Based Getter Setter =============================
class users{
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get email(){
        return `${this._email}abcd`
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password.toUpperCase()}`
    }
    set password(value){
        this._password = value
    }
}

const personOne = new users('uzair@gmail.com','abcdef')
// console.log(personOne.email)


// ==================function Based Getter Setter =============================
function userTwo (email,password){
    this._email = email
    this._password = password

    Object.defineProperty(this,'email',{
        get : function () {
            return this._email.toUpperCase()
        },
        set : function (value) {
            this._email = value
        }
    })
    Object.defineProperty(this,'password',{
        get : function () {
            return this._password.toUpperCase()
        },
        set : function (value) {
            this._password = value
        }
    })
}
const personTwo = new userTwo('faizan@femail.com','asdfgh')
// console.log(personTwo.email)
// console.log(personTwo.password)

// ==================Object Based Getter Setter =============================

const userThree = {
    _email : 'usmaina@female.com',
    _password : 'Hot grill burger',

    get email(){
        return `${this._email.toUpperCase()}`
    },
    set email(value){
        this._email = value
    }
}

const user3 = Object.create(userThree)

console.log(user3.email)