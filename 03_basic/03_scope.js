// ===================== Global And Block Scope======================

// let a = 400
// const b = 300
// var c = 500

// let a = 400
// if (true) {
//     let a = 10000
//     const b = 300
//     var c = 500            // it will overright of above c
//     console.log("Inner a:",a)
// }

// console.log(a);           // it will not print because a is in block
// console.log(b);           // it will not print because a is in block
// console.log(a);           //var can be accessible anywhere in program


// ======================== Scope in nested ==================

// function one() {
//     name = "Uzair"
//     function two(  ) {
//         age = 22
//         console.log(name)        
//     }
//     // console.log(age);                        // through erroe because it is called outside the block
//     two()
// }

// one()

if (true) {
    let name = "Uzair "
    if (name == "Uzair") {
       let  age = 22
        console.log(name + age)  
    }
    // console.log(age);                        // through erroe because it is called outside the block
}
// console.log(name);                         // through erroe because it is called outside the block



// ================= Interesting Thing =========================


//    in this method you can call before function

console.log(addTwoNum(3,5))         

function addTwoNum(num1 , num2) {
    return num1 + num2
}

//    in this method you can't call before function
console.log(addNum(3,5))         

const addNum = function (num1 , num2) {
    return num1 + num2
}
