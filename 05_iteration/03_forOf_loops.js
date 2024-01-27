//ForOF


// ["", "", ""]
// [{}, {}, {}]

const arr = [2,3,4,3,1,2,6]

for (const ar of arr) {
    // console.log(ar);
}

const greeting = "Hello Uzair"

for (const greet  of greeting) {
    if (greet == " ") {
        continue;
    }
    // console.log("Char : ",greet)
}

// =============MAP====================

const mapp = new Map()
mapp.set("PK", "PAKISTAN")
mapp.set("USA","United State of America")
mapp.set("Uk","Canada")

for (const [key, value] of mapp) {
    console.log(key,':-',value)
}


// Can't use object like this
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }