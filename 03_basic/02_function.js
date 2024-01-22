// ====================When you don't know how many item will be added in cart (example)==========================


// function CartItems(...items ) {                 // the ... is used to get all unknown numbers of parameter 
//     return items
// }

// console.log(CartItems(200,500,700,900))


// function CartItems(val1,val2,...items ) {                
//     return items
// }

// console.log(CartItems(200,500,700,900))            //the output will be [700,900]



// =========================Object as parameter in function===============================

const user = {
    name :"Uzair",
    age:22
}

function userId(anyone) {
    console.log(`Name is ${anyone.name} and age is ${anyone.age}`)          //given keys should have same as in objects
}

// userId(user)
userId({
    name :"Uzair",
    age:22
})

const MyArray = [200,400,600,800,1000]

function returnSecondNum(getArray) {
    return getArray[1]
}

console.log(returnSecondNum(MyArray));
console.log(returnSecondNum([200,400,600,800,1000]));                 // same at is above