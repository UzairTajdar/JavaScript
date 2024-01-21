//==========Singleton=================

const obj = new Object

obj.id = "123ab"
obj.name = "Uzair"
obj.age = 22    

// console.log(obj);

//===============Object contain Object and so on=============
//===============Nested Object===============================
// const user = {
//     id : 98,
//     username : {
//         name :{
//             firstname: "uzair",
//             nickname :"ozzy"
//         },
//         fathername:"Tajdar"
//     }
// }

// console.log(user);

//=====================Combine Two or more object in one===================

// const obj1 = {1:"a", 2:"b"}
// const obj2 = {3:"c", 4:"d"}
// const obj3 = {5:"e", 6:"f"}

// const obj4 = {obj1,obj2,obj3}

// const obj4 = Object.assign({},obj1,obj2,obj3)          // it will make combine object in first value like {}
// const obj4 = Object.assign(obj1,obj2,obj3)               // it will make combine object in first value in this case like obj
// console.log(obj4) 

// console.log(obj1)                      // obj1 also modified

// =============Objects in Array================

const persons =[
    {
        name :"person",
        email:"e@mail.com"
    },
    {
        name :"person",
        email:"e@mail.com"
    },
    {
        name :"person",
        email:"e@mail.com"
    },
]
// console.log(persons[1].name);
// console.log(persons[1].email);

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// console.log(obj.hasOwnProperty('age'));


const course = {
    name :"javascript",
    lvl : "hard",
    fee:"free"
}

// const {name} = course;
const {name:naaam} = course;

console.log(naaam)


// ============================Json==============================

// {
//     name :"javascript",
//     lvl : "hard",
//     fee:"free"
// }

// [
//     {},
//     {},
//     {}
// ]