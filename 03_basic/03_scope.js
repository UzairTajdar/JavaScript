// ===================== Global And Block Scope======================

// let a = 400
// const b = 300
// var c = 500

let a = 400
if (true) {
    let a = 10000
    const b = 300
    var c = 500            // it will overright of above c
    console.log("Inner a:",a)
}

// console.log(a);           // it will not print because a is in block
// console.log(b);           // it will not print because a is in block
console.log(a);           //var can be accessible anywhere in program